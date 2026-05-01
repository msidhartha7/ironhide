import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Lookover SDK Quickstart for AI Agent Audit Logging",
  description:
    "Install the Lookover Python SDK, add LangChain or LangGraph tracing, and run prerun compliance scans before shipping your AI agent.",
  path: "/audit-in-2-mins",
  keywords: [
    "Lookover SDK",
    "AI agent audit logging SDK",
    "LangChain audit logs",
    "LangGraph audit trails",
    "prerun compliance scan",
    "tamper-proof logs",
    "Lookover",
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
