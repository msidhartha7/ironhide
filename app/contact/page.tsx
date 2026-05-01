import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Lookover for demos, technical evaluations, and compliance workflow questions.",
  path: "/contact",
});

const CONTACT_PATHS = [
  {
    title: "Open the app",
    body: "Try Lookover directly. Set up tamper-proof agent audit trails in minutes — no call required.",
    href: "https://app.lookover.io",
    label: "Open App — try it now",
  },
  {
    title: "Book a product walkthrough",
    body: "Use the live calendar to review your agent architecture, current logging gaps, and the fastest route to an audit-ready rollout.",
    href: "https://calendly.com/sidhartha-investorsync/15min",
    label: "Book a Call — talk to the team",
  },
  {
    title: "Review current technical guidance",
    body: "If you are evaluating whether your current controls are enough, start with the blog cluster on identity, zero trust, and compliance evidence.",
    href: "/blog",
    label: "Read the blog",
  },
  {
    title: "See the fastest integration path",
    body: "For teams that need to understand time-to-value quickly, the audit trail quickstart shows the target operator experience.",
    href: "/audit-in-2-mins",
    label: "View the quickstart",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-28 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Talk to Lookover about AI agent audit trails and governed rollouts.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              The fastest way to get useful answers is to bring your current agent
              architecture, what systems those agents can touch, and which frameworks or
              customer requirements you need to satisfy. The team can help you map
              logging, authorization, and evidence gaps from there.
            </p>
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {CONTACT_PATHS.map((path) => (
              <article
                key={path.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900">{path.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{path.body}</p>
                <Link
                  href={path.href}
                  target={path.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    path.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-6 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  {path.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-16 px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-slate-50 px-8 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold text-slate-900">
              What to include when you reach out
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>The agent workflows that touch sensitive systems, customer data, or regulated decisions.</li>
              <li>The frameworks or buyer requirements you are preparing for, such as SOC 2, HIPAA, or EU AI Act controls.</li>
              <li>What evidence you can and cannot produce today when someone asks, “What did this agent do?”</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
