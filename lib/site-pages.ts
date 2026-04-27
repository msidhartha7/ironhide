import type { Metadata } from "next";
import { buildMetadata } from "./seo";

export const PLACEHOLDER_PAGES: Record<string, string> = {
  features: "Features",
  integrations: "Integrations",
  pricing: "Pricing",
  changelog: "Changelog",
  documentation: "Documentation",
  "api-reference": "API Reference",
  community: "Community",
  careers: "Careers",
  legal: "Legal",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
};

const INDEXABLE_STATIC_PATHS = [
  "/",
  "/about",
  "/audit-in-2-mins",
  "/blog",
  "/contact",
] as const;

type SlugParams = Promise<{ slug: string }> | { slug: string };

export async function resolveSlug(params: SlugParams): Promise<string> {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export function formatSlug(slug: string | undefined) {
  if (!slug) return undefined;

  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getPlaceholderPageTitle(slug: string) {
  return PLACEHOLDER_PAGES[slug] ?? formatSlug(slug) ?? "Coming Soon";
}

export function buildPlaceholderPageMetadata(slug: string): Metadata {
  const title = getPlaceholderPageTitle(slug);

  return buildMetadata({
    title,
    description: `${title} page — coming soon from Lookover.`,
    path: `/${slug}`,
    robots: {
      index: false,
      follow: true,
    },
  });
}

export function getIndexableStaticPaths() {
  return [...INDEXABLE_STATIC_PATHS];
}
