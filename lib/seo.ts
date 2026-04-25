import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookover.io";

export const defaultTitle =
  "Lookover | AI Agent Audit Trails & Compliance";
export const defaultDescription =
  "Tamper-proof audit trails for AI agents in minutes. SOC2 & HIPAA compliance reports on demand. No complex setup.";
export const defaultKeywords = [
  // Brand
  "Lookover",

  // Core product concepts
  "Identity-First Authorization",
  "Agentic Systems",
  "AI Security",
  "Zero Trust",
  "Guardrails",
  "Access Control",
  "Compliance Observability for AI Agents",
  "AI Agent Audits",
  "Active Compliance Intelligence",

  // Audit trails — AI-specific
  "Audit Trails",
  "Audit Trails for AI Agents",
  "Audit Trails for AI",
  "Audit Trails for AI Systems",
  "Audit Trails for AI Applications",
  "Audit Trails for AI Infrastructure",
  "Audit Trails for AI Platforms",
  "Tamper-Proof Audit Logs",
  "Immutable Audit Logs",
  "AI Agent Activity Logs",

  // IT audit & compliance frameworks
  "IT Audit",
  "IT Compliance",
  "SOC 2 Compliance",
  "SOC 2 Type II",
  "HIPAA Compliance",
  "ISO 27001",
  "NIST 800-53",
  "GDPR Compliance",
  "PCI DSS",
  "FedRAMP",
  "CCPA Compliance",
  "Compliance Automation",
  "Continuous Compliance",
  "Compliance as Code",
  "Compliance Monitoring",
  "Compliance Reporting",
  "Compliance Dashboard",
  "Audit Readiness",
  "Audit Evidence Collection",
  "Audit Log Management",
  "Security Audit",
  "Cloud Compliance",
  "Regulatory Compliance",
  "Risk and Compliance",
  "GRC",
  "Governance Risk Compliance",

  // Identity & access management
  "Identity and Access Management",
  "IAM",
  "Privileged Access Management",
  "PAM",
  "Role-Based Access Control",
  "RBAC",
  "Attribute-Based Access Control",
  "ABAC",
  "Least Privilege",
  "Zero Standing Privileges",
  "Just-In-Time Access",
  "Service Account Security",
  "API Key Management",
  "Credential Management",

  // AI governance & observability
  "AI Governance",
  "AI Observability",
  "AI Agent Monitoring",
  "LLM Security",
  "LLM Observability",
  "Agentic AI Security",
  "Multi-Agent Security",
  "MCP Security",
  "AI Agent Authorization",
  "AI Risk Management",
  "Responsible AI",
  "AI Policy Enforcement",

  // Security operations
  "SIEM Integration",
  "Security Information and Event Management",
  "Log Management",
  "Event Logging",
  "Security Monitoring",
  "Threat Detection",
  "Insider Threat Detection",
  "Data Loss Prevention",
  "Zero Trust Architecture",
  "Zero Trust Network Access",
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
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
  };
}
