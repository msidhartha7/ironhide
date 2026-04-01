import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Agent Audit Trails in 2 Minutes",
  description:
    "Get tamper-proof AI agent audit logs in 2 minutes. No credit card, no complex setup. SOC2 & HIPAA compliance reports on demand.",
  path: "/audit-in-2-mins",
  keywords: [
    "AI agent audit trails",
    "audit in 2 minutes",
    "AI compliance",
    "SOC2",
    "HIPAA",
    "tamper-proof logs",
    "Lookover",
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
