import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookover.io";

export const defaultTitle =
  "LookOver | AI Agent Audit Trails & Compliance";
export const defaultDescription =
  "Tamper-proof audit trails for AI agents in minutes. SOC2 & HIPAA compliance reports on demand. No complex setup.";
export const defaultKeywords = [
  "LookOver",
  "identity-first authorization",
  "agentic systems",
  "AI security",
  "zero trust",
  "guardrails",
  "access control",
  "audit trails",
  "audit trails for ai agents",
  "audit trails for ai",
  "audit trails for ai systems",
  "audit trails for ai applications",
  "audit trails for ai products",
  "audit trails for ai services",
  "audit trails for ai infrastructure",
  "audit trails for ai platforms",
  "audit trails for ai frameworks",
  "audit trails for ai libraries",
];

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  keywords = defaultKeywords,
}: BuildMetadataOptions = {}): Metadata {
  const metadataBase = new URL(siteUrl);
  const url = new URL(path || "/", metadataBase);
  const canonical = url.pathname === "/" ? "/" : url.pathname;

  return {
    metadataBase,
    title: {
      default: title,
      template: "%s | LookOver",
    },
    description,
    keywords,
    applicationName: "LookOver",
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: "/logo.svg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/face-icon.svg",
      shortcut: "/face-icon.svg",
      apple: "/face-icon.svg",
    },
  };
}
