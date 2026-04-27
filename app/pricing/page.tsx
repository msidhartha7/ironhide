import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "See how Lookover packages AI agent audit trails, policy evaluation, and enterprise rollout support.",
  path: "/pricing",
  keywords: [
    "Lookover pricing",
    "AI agent audit trail pricing",
    "SOC 2 AI compliance tooling",
    "Enterprise AI governance pricing",
  ],
});

const PRICING_TIERS = [
  {
    name: "Pilot",
    audience: "Teams proving one workflow",
    price: "Contact us",
    bullets: [
      "One production workflow or high-risk agent path",
      "Per-agent identity, action logging, and policy checks",
      "Fast onboarding for engineering and security reviewers",
    ],
  },
  {
    name: "Platform",
    audience: "Teams standardizing across products",
    price: "Custom annual plan",
    bullets: [
      "Multiple agent services and shared policy controls",
      "Structured exports for compliance and incident response",
      "Operational rollout support across engineering and GRC teams",
    ],
  },
  {
    name: "Enterprise",
    audience: "Organizations with regulated or buyer-driven requirements",
    price: "Custom scope",
    bullets: [
      "Deployment and evidence model aligned to your frameworks",
      "Support for SOC 2, HIPAA, and EU AI Act workflows",
      "Commercial review for security, procurement, and legal teams",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-8 py-12 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Pricing
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Packaging built around rollout stage, risk surface, and evidence needs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Lookover is sold around how far your team is into production and how much
              proof you need to generate for internal controls, customers, and auditors.
              Pricing stays consultative because the right deployment footprint depends
              on the systems your agents can touch.
            </p>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <article
                key={tier.name}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {tier.name}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  {tier.audience}
                </h2>
                <p className="mt-4 text-xl font-bold text-slate-900">{tier.price}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-10 text-white sm:px-10">
            <h2 className="text-2xl font-semibold">Most teams start with one audited workflow</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              The fastest commercial path is usually to instrument the workflow that
              already creates the most audit pressure. Use the <Link href="/features" className="text-blue-300 transition hover:text-white">feature overview</Link>
              to scope the control plane, then review <Link href="/integrations" className="text-blue-300 transition hover:text-white">integration fit</Link>
              before opening the <Link href="/contact" className="text-blue-300 transition hover:text-white">commercial conversation</Link>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Talk to the team
              </Link>
              <Link
                href="/audit-in-2-mins"
                className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Try the quickstart
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
