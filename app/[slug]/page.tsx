import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { buildMetadata } from "@/lib/seo";

export const PAGES: Record<string, string> = {
    features: "Features",
    integrations: "Integrations",
    pricing: "Pricing",
    changelog: "Changelog",
    documentation: "Documentation",
    "api-reference": "API Reference",
    blog: "Blog",
    community: "Community",
    about: "About",
    careers: "Careers",
    legal: "Legal",
    contact: "Contact",
    "privacy-policy": "Privacy Policy",
    "terms-of-service": "Terms of Service",
};

type PageProps = {
    params: { slug: string };
};

export const dynamicParams = true;

export function generateStaticParams() {
    return Object.keys(PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const title = PAGES[params.slug];
    const fallbackTitle = formatSlug(params.slug) || "Coming Soon";

    return buildMetadata({
        title: title ?? fallbackTitle,
        description:
            title !== undefined
                ? `${title} page — coming soon from IronHide.`
                : "We are actively working on this page. Check back soon.",
        path: `/${params.slug}`,
    });
}

export default function ComingSoonPage({ params }: PageProps) {
    const title = PAGES[params.slug];
    const displayTitle = title ?? formatSlug(params.slug) ?? "Coming Soon";

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4 pb-16 pt-28">
                <div className="glass-panel relative w-full max-w-4xl overflow-hidden rounded-3xl border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur">
                    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        <span>Actively Building</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {displayTitle}
                    </h1>
                    <p className="mt-4 text-lg text-white/70">
                        We&apos;re actively working on this experience. Check back soon as we
                        finish building it.
                    </p>

                    <BuildIllustration />
                </div>
            </main>

            <Footer />
        </div>
    );
}

function formatSlug(slug: string | undefined) {
    if (!slug) return undefined;
    return slug
        .split(/[-_]/)
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function BuildIllustration() {
    return (
        <div className="mx-auto mt-10 w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/[0.04] p-6">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
                </div>
                <div className="relative flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-400/80 to-brand-500/60 shadow-lg shadow-brand-500/20" />
                        <div className="flex-1 h-3 rounded-full bg-white/10" />
                        <div className="w-12 h-3 rounded-full bg-white/10" />
                    </div>

                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-5 space-y-3">
                            <div className="h-14 rounded-xl bg-white/10 backdrop-blur border border-white/10 shadow-inner shadow-black/20" />
                            <div className="h-14 rounded-xl bg-white/10 backdrop-blur border border-white/10 shadow-inner shadow-black/20" />
                            <div className="h-14 rounded-xl bg-white/10 backdrop-blur border border-white/10 shadow-inner shadow-black/20" />
                        </div>
                        <div className="col-span-7 space-y-3">
                            <div className="flex gap-3">
                                <div className="h-14 flex-1 rounded-xl bg-gradient-to-r from-brand-500/40 to-indigo-400/30 border border-white/10 shadow-lg shadow-brand-500/10" />
                                <div className="h-14 w-16 rounded-xl bg-white/10 border border-white/10" />
                            </div>
                            <div className="flex gap-3">
                                <div className="h-14 w-20 rounded-xl bg-white/10 border border-white/10" />
                                <div className="h-14 flex-1 rounded-xl bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 border border-white/10 shadow-lg shadow-emerald-400/10" />
                            </div>
                            <div className="flex gap-3">
                                <div className="h-14 flex-1 rounded-xl bg-white/10 border border-white/10" />
                                <div className="h-14 w-24 rounded-xl bg-white/10 border border-white/10" />
                                <div className="h-14 w-16 rounded-xl bg-white/10 border border-white/10" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-3 rounded-full bg-white/10" />
                        <div className="h-3 w-16 rounded-full bg-white/10" />
                        <div className="h-3 w-10 rounded-full bg-white/10" />
                    </div>
                </div>
            </div>
        </div>
    );
}
