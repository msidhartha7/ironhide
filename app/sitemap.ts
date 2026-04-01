import type { MetadataRoute } from "next";
import { PAGES } from "./[slug]/page";
import { getAllPosts } from "@/lib/blog";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookover.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["audit-in-2-mins", "blog"];

  // Top-level and [slug] placeholder routes
  const slugRoutes = ["", ...Object.keys(PAGES), ...staticRoutes].map((slug) => {
    const path = slug ? `/${slug}` : "/";
    return {
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "hourly",
    } satisfies MetadataRoute.Sitemap[number];
  });

  // Individual blog post routes
  const blogPostRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly",
  } satisfies MetadataRoute.Sitemap[number]));

  return [...slugRoutes, ...blogPostRoutes];
}
