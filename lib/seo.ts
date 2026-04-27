import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookover.io";

export const defaultTitle =
  "Lookover | AI Agent Audit Trails, Identity, and Compliance";
export const defaultDescription =
  "Lookover gives AI teams audit-ready logs, per-agent identity, and compliance evidence for SOC 2, HIPAA, and EU AI Act workflows.";
export const defaultKeywords = [
  "Lookover",
  "AI agent audit trails",
  "AI agent identity",
  "AI agent authorization",
  "SOC 2 for AI agents",
  "HIPAA audit logs for AI",
  "EU AI Act logging",
  "AI compliance evidence",
];

export type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  robots?: Metadata["robots"];
};

export function buildMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  keywords = defaultKeywords,
  robots = {
    index: true,
    follow: true,
  },
}: BuildMetadataOptions = {}): Metadata {
  const metadataBase = new URL(siteUrl);
  const url = new URL(path || "/", metadataBase);
  const canonical = url.pathname === "/" ? "/" : url.pathname;
  const socialImage = "/opengraph-image";

  return {
    metadataBase,
    title: {
      default: title,
      template: "%s | Lookover",
    },
    description,
    keywords,
    applicationName: "Lookover",
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
    robots,
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
  };
}
