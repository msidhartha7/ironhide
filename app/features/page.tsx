import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Features",
  description:
    "Explore Lookover features for AI agent audit trails, per-agent identity, policy evaluation, and audit-ready exports.",
  path: "/features",
  keywords: [
    "Lookover features",
    "AI agent audit trails",
    "AI agent identity",
    "AI compliance exports",
  ],
});

const FEATURE_GROUPS = [
  {
    title: "Capture every agent action",
    body: "Instrument tool calls, API requests, data reads, and external writes without rebuilding your agent runtime.",
    bullets: [
      "Per-agent identity attached to every recorded action",
      "Action-level logs for orchestrators, sub-agents, and tools",
      "Structured records that survive incident response and audits",
    ],
  },
  {
    title: "Evaluate policy in real time",
    body: "Run compliance and access rules while the agent acts instead of reviewing violations after the fact.",
    bullets: [
      "Policy checks for sensitive actions and restricted data flows",
      "Identity-aware authorization context for multi-agent workflows",
      "Violation results that can trigger alerts or manual review",
    ],
  },
  {
    title: "Export audit evidence fast",
    body: "Turn live event streams into reports that security, legal, and compliance teams can actually use.",
    bullets: [
      "Audit-ready log exports for SIEM and long-term storage",
      "Searchable evidence by agent, resource, policy, and time window",
      "Framework-oriented reporting for SOC 2, HIPAA, and EU AI Act work",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-12 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Features
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Core controls for AI agent audit trails, identity, and compliance evidence.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Lookover is designed for teams that need to answer a simple but
              difficult question: what did this agent do, under whose authority,
              and what evidence do we have left when someone asks later?
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/audit-in-2-mins"
                className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                See the 2-minute setup
              </Link>
              <Link
                href="/pricing"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Review packaging
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {FEATURE_GROUPS.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {group.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {group.body}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  {group.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-10 text-white sm:px-10">
            <h2 className="text-2xl font-semibold">Built around real operator workflows</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              The product is aimed at engineering, security, and compliance teams that
              need one system for traceability and another for action. Start with
              the <Link href="/integrations" className="text-blue-300 transition hover:text-white">integration surface</Link>,
              then compare that with <Link href="/pricing" className="text-blue-300 transition hover:text-white">the deployment tiers</Link>
              and the <Link href="/audit-in-2-mins" className="text-blue-300 transition hover:text-white">self-serve quickstart</Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
