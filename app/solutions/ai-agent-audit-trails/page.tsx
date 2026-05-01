import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Agent Audit Trails",
  description:
    "Ship AI agent audit trails with attributable logs, policy context, and exportable evidence for production workflows.",
  path: "/solutions/ai-agent-audit-trails",
  keywords: [
    "AI agent audit trails",
    "audit logs for AI agents",
    "AI compliance evidence",
    "agent activity logs",
  ],
});

const CAPABILITIES = [
  "Per-agent identity attached to every action in the log stream",
  "Structured records for tools, APIs, files, and downstream systems",
  "Policy evaluation results stored with the event for later review",
  "Exports that compliance, security, and legal teams can actually use",
];

export default function AIAuditTrailsSolutionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-12 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Solution
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              AI agent audit trails for teams that need evidence, not screenshots.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Lookover captures what an agent did, which identity did it, what policy
              applied, and what evidence remains when security, legal, or an auditor asks later.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/audit-in-2-mins"
                className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start the quickstart
              </Link>
              <Link
                href="/features"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Review feature coverage
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">What teams usually need</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {CAPABILITIES.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-sm">
              <h2 className="text-xl font-semibold">Where this fits</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This page is the commercial destination for operators evaluating
                attributable AI logs. Pair it with the
                {" "}
                <Link href="/blog/ai-agent-audit-trail-implementation-guide" className="text-blue-300 transition hover:text-white">
                  implementation guide
                </Link>
                {" "}
                and the
                {" "}
                <Link href="/pricing" className="text-blue-300 transition hover:text-white">
                  packaging overview
                </Link>
                {" "}
                to move from architecture review into rollout.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
