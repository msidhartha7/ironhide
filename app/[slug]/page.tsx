import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

const PAGES: Record<string, string> = {
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

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
    const title = PAGES[params.slug];
    if (!title) {
        return {};
    }

    return {
        title: `${title} | IronHide`,
        description: `${title} page — coming soon from IronHide.`,
    };
}

export default function ComingSoonPage({ params }: PageProps) {
    const title = PAGES[params.slug];

    if (!title) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4 pb-16 pt-28">
                <div className="glass-panel relative w-full max-w-2xl overflow-hidden rounded-3xl border-white/10 bg-white/5 px-8 py-12 text-center backdrop-blur">
                    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        <span>Coming Soon</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {title}
                    </h1>
                    <p className="mt-4 text-lg text-white/70">Coming soon.</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
