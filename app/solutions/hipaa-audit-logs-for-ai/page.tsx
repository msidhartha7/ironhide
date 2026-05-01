import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "HIPAA Audit Logs For AI",
  description:
    "Build HIPAA-friendly AI audit logs with attributable access history, sensitive-action tracking, and exportable evidence.",
  path: "/solutions/hipaa-audit-logs-for-ai",
  keywords: [
    "HIPAA audit logs for AI",
    "AI audit trail HIPAA",
    "PHI access logs AI agents",
    "healthcare AI compliance logs",
  ],
});

export default function HipaaAuditLogsForAIPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 px-8 py-12 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Solution
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              HIPAA-oriented audit logs for AI agents that touch regulated data.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Lookover gives teams a way to trace sensitive actions by agent identity,
              preserve access history, and hand structured evidence to security and compliance reviewers.
            </p>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Designed for regulated agent workflows</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              <li>Attributable logs for PHI-adjacent reads, writes, and downstream actions.</li>
              <li>Policy context attached to the event so exceptions are reviewable later.</li>
              <li>Export paths for security, privacy, and compliance teams preparing evidence.</li>
            </ul>
            <p className="mt-8 text-sm leading-7 text-slate-600">
              The fastest way to operationalize this is to start with the
              {" "}
              <Link href="/blog/hipaa-audit-log-template-for-ai-agents" className="text-blue-600 transition hover:text-blue-800">
                HIPAA audit log template
              </Link>
              {" "}
              and pair it with the
              {" "}
              <Link href="/audit-in-2-mins" className="text-blue-600 transition hover:text-blue-800">
                self-serve quickstart
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
