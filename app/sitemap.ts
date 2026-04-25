import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getIndexableStaticPaths } from "@/lib/site-pages";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookover.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = getIndexableStaticPaths().map((path) => {
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

  return [...staticRoutes, ...blogPostRoutes];
}
