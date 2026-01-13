"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowUpRight,
    Calendar,
    Database,
    Eye,
    Figma,
    Lock,
    NotebookIcon,
    Sheet,
    ShieldCheck,
    Slack,
    Snowflake,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-night-950 pt-28 pb-20 sm:pt-16 sm:pb-24 lg:pt-28 lg:pb-28">
            <div className="hero-morph-layer">
                <div className="hero-morph" />
            </div>
            <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
                <span className="hero-orb orb-one h-64 w-64 bg-brand-400/30" />
                <span className="hero-orb orb-two h-72 w-72 bg-cyan-300/25" />
                <span className="hero-orb orb-three h-60 w-60 bg-indigo-400/20" />
            </div>
            <div className="absolute inset-0 -z-10 bg-hero-radial" />
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950 to-black" />
            <div className="absolute inset-x-0 bottom-[-200px] -z-10 h-[500px] bg-hero-glow" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-20">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 flex justify-center sm:mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
                            <span className="text-white/80">Coming Soon</span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Real Identity for{" "}
                        <span className="text-brand-300">AI Agents</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-white/70 sm:text-xl sm:leading-8">
                        Give your agents real human-like identity and access to tools, LLMs and data.
                    </p>

                    <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                            {[
                                {
                                    icon: <Lock className="h-5 w-5 text-brand-300" />,
                                    label: "Unified Zero-Trust Authorization",
                                },
                                {
                                    icon: <ShieldCheck className="h-5 w-5 text-brand-300" />,
                                    label: "Real-Time Guardrails & Compliance",
                                },
                                {
                                    icon: <Eye className="h-5 w-5 text-brand-300" />,
                                    label: "Complete Observability & Auditability",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/2 px-4 py-3 text-left backdrop-blur"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-white/90">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-center sm:mt-16">
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-12 rounded-2xl border border-brand-500/10 h-16 bg-gradient-to-r from-brand-900 to-brand-800 px-8 text-base font-semibold text-white shadow-[0_15px_40px_-15px_rgba(47,123,255,0.65)] transition hover:brightness-110"
                        >
                            <Link href="#">
                                Get Early Access
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <ArchitectureDiagram />
            </div>
        </section>
    );
}

function ArchitectureDiagram() {
    return <div className="relative mx-auto mt-24 max-w-5xl sm:mt-32">
        <div className="glass-panel relative overflow-hidden rounded-3xl border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

            <div className="relative grid gap-6 lg:grid-cols-[1.05fr_auto_1.05fr] lg:items-center">
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg">
                        <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                            <span className="font-semibold text-white">Models</span>
                            <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/60">
                                LLMs
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {["OpenAI", "Anthropic", "Meta"].map((label) => (
                                <div
                                    key={label}
                                    className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white/80 shadow-inner"
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg">
                        <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                            <span className="font-semibold text-white">Agents</span>
                            <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/60">
                                Identities
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                                Internal
                            </div>
                            <div className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                                Customer
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto flex-col items-center justify-center gap-3 lg:flex">
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                    <div className="rounded-2xl bg-gradient-to-b from-brand-500 to-brand-400 px-10 py-8 text-center shadow-[0_25px_60px_-25px_rgba(47,123,255,0.8)] ring-1 ring-white/20">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                            IronHide
                        </p>
                        <p className="mt-1 text-2xl font-bold text-white">Gateway</p>
                        <p className="mt-2 text-sm text-white/80">
                            AuthN / RBAC • Guardrails • Tool Management
                        </p>
                    </div>
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg">
                    <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                        <span className="font-semibold text-white">Tools</span>
                        <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/60">
                            Integrations
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                        {[
                            { label: "Calendar", icon: <Calendar className="h-4 w-4" /> },
                            { label: "AWS", icon: <Database className="h-4 w-4" /> },
                            { label: "Snowflake", icon: <Snowflake className="h-4 w-4" /> },
                            { label: "Notion", icon: <NotebookIcon className="h-4 w-4" /> },
                            { label: "Slack", icon: <Slack className="h-4 w-4" /> },
                            { label: "Sheet", icon: <Sheet className="h-4 w-4" /> },
                            { label: "Figma", icon: <Figma className="h-4 w-4" /> },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="group relative flex h-14 flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 text-[11px] font-semibold uppercase tracking-wide text-white/70"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/5">
                                    {item.icon}
                                </span>
                                <span className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 translate-y-1 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 shadow-lg ring-1 ring-white/10 transition duration-150 group-hover:translate-y-0 group-hover:opacity-100">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="relative mt-8 flex flex-col items-center gap-4 lg:mt-6 lg:hidden">
                <div className="rounded-2xl bg-gradient-to-b from-brand-500 to-brand-400 px-10 py-8 text-center shadow-[0_25px_60px_-25px_rgba(47,123,255,0.8)] ring-1 ring-white/20">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                        IronHide
                    </p>
                    <p className="mt-1 text-2xl font-bold text-white">Gateway</p>
                    <p className="mt-2 text-sm text-white/80">
                        AuthN / ACL • Guardrails • Tool Management
                    </p>
                </div>
                <div className="flex items-center gap-3 text-[13px] font-medium text-white/60">
                    <span className="h-px w-10 bg-white/15" />
                    Securing access between models, agents, and tools
                    <span className="h-px w-10 bg-white/15" />
                </div>
            </div> */}
        </div>
    </div>;
}
