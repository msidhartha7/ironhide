import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SOC 2 For AI Agents",
  description:
    "Prepare SOC 2 evidence for AI agents with attributable audit trails, scoped identities, and queryable control data.",
  path: "/solutions/soc-2-for-ai-agents",
  keywords: [
    "SOC 2 for AI agents",
    "AI agent audit trails SOC 2",
    "SOC 2 evidence for AI systems",
    "AI compliance logging",
  ],
});

export default function Soc2ForAIAgentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-8 py-12 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Solution
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              SOC 2 evidence for AI agents that act in production.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Lookover helps teams show which agent accessed what, under what authorization,
              and what controls were evaluated across the Security and Confidentiality criteria.
            </p>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              "Per-agent credentials and attributable logs for CC6-style access controls",
              "Queryable evidence for security-event review and incident reconstruction",
              "Commercial path from readiness checklist to rollout and audit support",
            ].map((item) => (
              <article
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm text-sm leading-7 text-slate-600"
              >
                {item}
              </article>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-5xl rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-10 text-white sm:px-10">
            <p className="text-sm leading-7 text-slate-300">
              Start with the
              {" "}
              <Link href="/blog/soc-2-readiness-checklist-for-ai-agents" className="text-blue-300 transition hover:text-white">
                SOC 2 readiness checklist
              </Link>
              {" "}
              for operators, then move into
              {" "}
              <Link href="/pricing" className="text-blue-300 transition hover:text-white">
                deployment packaging
              </Link>
              {" "}
              or the
              {" "}
              <Link href="/audit-in-2-mins" className="text-blue-300 transition hover:text-white">
                audit-trail quickstart
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
