import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { fetchSeoPage } from "@/lib/seoSdk";
import fs from "fs";
import path from "path";

export default async function Page({ params }) {
  const { slugone } = await params;

  const headersList = await headers();
  const host = headersList.get("host") || "unknown-domain";

  // Read sitemap
  const sitemapPath = path.join(process.cwd(), "public", "Sitemap.xml");
  const xml = fs.readFileSync(sitemapPath, "utf-8");

  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

  if (!urls.some(url => url.endsWith(`/${slugone}`))) {
    console.log(`Slug not found in sitemap: ${slugone}`);
    return notFound();
  }
  console.log(`Slug found in sitemap: ${slugone} and now will enter seopage fetch`);
  const html = await fetchSeoPage(slugone, host);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}
