import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://LookOver.privyy.io";

export const defaultTitle =
  "LookOver | Identity-first authorization for agentic systems";
export const defaultDescription =
  "Give your agents real human-like identity and access to tools, LLMs and data.";
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
    },
    twitter: {
      card: "summary",
      title,
      description,
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
