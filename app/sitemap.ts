import type { MetadataRoute } from "next";
import { PAGES } from "./[slug]/page";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ironhide.privyy.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = ["", ...Object.keys(PAGES)].map((slug) => {
    const path = slug ? `/${slug}` : "/";
    return {
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "hourly",
    } satisfies MetadataRoute.Sitemap[number];
  });

  return routes;
}
