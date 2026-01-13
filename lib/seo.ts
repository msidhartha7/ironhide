import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ironhide.ai";

export const defaultTitle =
  "IronHide | Identity-first authorization for agentic systems";
export const defaultDescription =
  "Give your agents real human-like identity and access to tools, LLMs and data.";
export const defaultKeywords = [
  "IronHide",
  "identity-first authorization",
  "agentic systems",
  "AI security",
  "zero trust",
  "guardrails",
  "access control",
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
      template: "%s | IronHide",
    },
    description,
    keywords,
    applicationName: "IronHide",
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
