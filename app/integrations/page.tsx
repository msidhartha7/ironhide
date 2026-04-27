import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Integrations",
  description:
    "See how Lookover fits into agent runtimes, data systems, storage pipelines, and security operations workflows.",
  path: "/integrations",
  keywords: [
    "Lookover integrations",
    "AI agent observability integrations",
    "SIEM integrations for AI agents",
    "Agent runtime SDK",
  ],
});

const INTEGRATION_COLUMNS = [
  {
    title: "Agent runtimes",
    items: ["LangChain", "LlamaIndex", "CrewAI", "AutoGen", "Custom agent services"],
  },
  {
    title: "Protected systems",
    items: ["Internal APIs", "Databases", "File stores", "Customer data platforms", "Security-sensitive tools"],
  },
  {
    title: "Audit destinations",
    items: ["S3 and object storage", "Splunk and SIEM pipelines", "Compliance evidence exports", "Security review workflows", "Internal GRC reporting"],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-8 py-12 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Integrations
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Wrap your existing agent stack instead of rebuilding it.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Lookover sits in the path between agent identities, protected systems,
              and evidence destinations. The integration model is designed to add
              control and traceability without changing how your teams already ship.
            </p>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {INTEGRATION_COLUMNS.map((column) => (
              <article
                key={column.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {column.title}
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold text-slate-900">
              What teams usually integrate first
            </h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>Instrument the highest-risk agent workflow that touches sensitive systems.</li>
              <li>Route actions through policy evaluation and attributable logging.</li>
              <li>Export the resulting evidence into the security and compliance systems your auditors already trust.</li>
            </ol>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/features"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Review feature coverage
              </Link>
              <Link
                href="/audit-in-2-mins"
                className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start with the quickstart
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
