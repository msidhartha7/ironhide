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
        <section className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-16 sm:pb-24 lg:pt-28 lg:pb-28">
            <div className="hero-morph-layer">
                <div className="hero-morph" />
            </div>
            <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
                <span className="hero-orb orb-one h-64 w-64 bg-blue-200/40" />
                <span className="hero-orb orb-two h-72 w-72 bg-sky-200/30" />
                <span className="hero-orb orb-three h-60 w-60 bg-indigo-200/25" />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-white" />
            <div
                className="pointer-events-none absolute inset-0 -z-[5]"
                aria-hidden
            />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-20">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 flex justify-center sm:mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur">
                            <span className="text-blue-700">Coming Soon</span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        The Audit Trail for{" "}
                        <span className="text-blue-600">AI Agents</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-slate-500 sm:text-xl sm:leading-8">
                    A flight recorder for AI Agents, capturing every action, tool call, and human intervention in a tamper-proof audit trail.
                    </p>

                    <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                            {[
                                {
                                    icon: <Lock className="h-5 w-5 text-blue-600" />,
                                    label: "Unified Zero-Trust Authorization",
                                },
                                {
                                    icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
                                    label: "Real-Time Guardrails",
                                },
                                {
                                    icon: <Eye className="h-5 w-5 text-blue-600" />,
                                    label: "Complete Observability & Auditability",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm"
                                >
                                    <div className="flex items-center justify-center bg-blue-50 rounded-lg p-1">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">
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
                            className="h-16 rounded-2xl border border-blue-600 bg-blue-600 px-8 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,78,216,0.4)] transition hover:bg-blue-700 hover:border-blue-700"
                        >
                            <Link href="https://calendly.com/sidhartha-privyy/30min">
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
        <div className="glass-panel relative overflow-hidden rounded-3xl border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-transparent" />

            <div className="relative grid gap-6 lg:grid-cols-[1.05fr_auto_1.05fr] lg:items-center">
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-4 shadow-sm">
                        <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
                            <span className="font-semibold text-slate-800">Models</span>
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-[11px] uppercase tracking-wide text-sky-600">
                                LLMs
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {["OpenAI", "Anthropic", "Meta"].map((label) => (
                                <div
                                    key={label}
                                    className="flex h-16 items-center justify-center rounded-xl border border-sky-200 bg-white text-xs font-semibold text-slate-700 shadow-sm"
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-violet-200 bg-violet-50/50 p-4 shadow-sm">
                        <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
                            <span className="font-semibold text-slate-800">Agents</span>
                            <span className="rounded-full bg-violet-100 px-3 py-1 text-[11px] uppercase tracking-wide text-violet-600">
                                Identities
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex h-16 items-center justify-center rounded-xl border border-violet-200 bg-white text-sm font-semibold text-slate-700 shadow-sm">
                                Internal
                            </div>
                            <div className="flex h-16 items-center justify-center rounded-xl border border-violet-200 bg-white text-sm font-semibold text-slate-700 shadow-sm">
                                Customer
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto flex-col items-center justify-center gap-3 lg:flex">
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                    <div className="rounded-2xl bg-blue-600 px-10 py-8 text-center shadow-[0_12px_32px_-8px_rgba(29,78,216,0.4)] ring-1 ring-blue-500/30">
                        <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                            LookOver
                        </p>
                        <p className="mt-1 text-2xl font-bold text-white">Gateway</p>
                        <p className="mt-2 text-sm text-blue-100">
                            AuthN / RBAC • Guardrails • Tool Management
                        </p>
                    </div>
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
                        <span className="font-semibold text-slate-800">Tools</span>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] uppercase tracking-wide text-emerald-600">
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
                                className="group relative flex h-14 flex-col items-center justify-center gap-1 rounded-xl border border-emerald-200 bg-white text-[11px] font-semibold uppercase tracking-wide text-slate-500 shadow-sm"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                    {item.icon}
                                </span>
                                <span className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 translate-y-1 rounded-md bg-slate-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 shadow-lg transition duration-150 group-hover:translate-y-0 group-hover:opacity-100">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
