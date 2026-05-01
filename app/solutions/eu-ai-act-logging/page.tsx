import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EU AI Act Logging",
  description:
    "Prepare EU AI Act logging and audit-trail evidence for high-risk AI systems and production AI agents.",
  path: "/solutions/eu-ai-act-logging",
  keywords: [
    "EU AI Act logging",
    "AI Act audit trails",
    "high-risk AI logging",
    "EU AI Act evidence",
  ],
});

export default function EuAiActLoggingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-amber-50 px-8 py-12 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
              Solution
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Logging infrastructure for EU AI Act readiness.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              For teams evaluating high-risk AI obligations, Lookover focuses on the operational layer:
              attributable events, reviewable history, and evidence you can export when an authority asks.
            </p>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm text-sm leading-7 text-slate-600">
              Logging for high-risk AI systems is not just an observability problem. Teams need durable evidence for
              what the system did, which agent identity acted, what inputs and outputs were involved, and how human
              oversight or review can be reconstructed later.
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-sm leading-7 text-slate-300 shadow-sm">
              Start with the
              {" "}
              <Link href="/blog/eu-ai-act-high-risk-classification" className="text-blue-300 transition hover:text-white">
                Annex III classification briefing
              </Link>
              {" "}
              and then move into the
              {" "}
              <Link href="/solutions/ai-agent-audit-trails" className="text-blue-300 transition hover:text-white">
                audit trail solution page
              </Link>
              {" "}
              or the
              {" "}
              <Link href="/contact" className="text-blue-300 transition hover:text-white">
                contact path
              </Link>
              {" "}
              for rollout planning.
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
