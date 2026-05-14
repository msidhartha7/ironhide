export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

export default async function Page({ params }) {
  const { slugone } = await params;   // ✅ FIX
  if (!slugone) return notFound();

  const headersList = await headers();
  const host = headersList.get("host") || "unknown-domain";

  const xml = fs.readFileSync(
    path.join(process.cwd(), "Sitemap", "Sitemap.xml"),
    "utf-8"
  );

  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => {
    try { return new URL(m[1]).pathname; }
    catch { return m[1]; }
  });

  if (!urls.some(p => p === `/seo/${slugone}`))
    return notFound();

  const res = await fetch(`https://seo-cixx.onrender.com/pages/${slugone}`, {
    headers: { "x-api-key": "123456", "x-client-domain": host },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("SEO API failed");

  return <div dangerouslySetInnerHTML={{ __html: await res.text() }} />;
}
