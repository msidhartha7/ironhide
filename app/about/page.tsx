import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn what Lookover builds for AI agent identity, audit trails, and compliance operations.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "Identity before autonomy",
    body: "Every agent action needs a subject, a scope, and an attributable record. Shared service accounts and opaque workflows do not survive enterprise scrutiny.",
  },
  {
    title: "Compliance has to operate at runtime",
    body: "Policies only matter if they are evaluated while agents act. Lookover focuses on enforcement, logging, and evidence collection at the moment of execution.",
  },
  {
    title: "Auditability should not slow product teams down",
    body: "The product is designed for teams shipping quickly and needing evidence just as quickly: structured logs, exportable records, and controls that map to real frameworks.",
  },
];

export default function AboutPage() {
  const organizationSchema = buildOrganizationSchema();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <JsonLd data={organizationSchema} />
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-12 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              About Lookover
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Built for teams that need AI agent evidence, not just AI agent demos.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Lookover helps engineering, security, and compliance teams observe what
              AI agents actually do in production: which identity acted, what data or
              tool it touched, what policy was evaluated, and what evidence remains for
              audit, incident response, and governance reviews.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/audit-in-2-mins"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                See the 2-minute setup
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {PRINCIPLES.map((principle) => (
              <article
                key={principle.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {principle.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-10 text-white sm:px-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                What we cover
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                <li>AI agent audit trails for engineering and compliance evidence.</li>
                <li>Identity-first authorization patterns for multi-agent systems.</li>
                <li>Operational controls for SOC 2, HIPAA, EU AI Act, and zero-trust programs.</li>
                <li>Production-ready logging and export paths for legal, security, and GRC teams.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                Published guidance
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The blog and author pages focus on concrete implementation choices,
                official standards, and framework-level evidence requirements rather than
                generic AI governance commentary.
              </p>
              <Link
                href="/authors/lookover-team"
                className="mt-6 inline-flex text-sm font-semibold text-blue-200 transition hover:text-white"
              >
                Meet the editorial team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
