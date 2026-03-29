"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    BadgeCheck,
    Calendar,
    CheckCircle,
    Clock,
    Code2,
    Database,
    Figma,
    FileCheck,
    NotebookIcon,
    Sheet,
    Slack,
    Snowflake,
    Timer,
    XCircle,
    Zap,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CALENDLY = "https://calendly.com/sidhartha-privyy/30min";

export default function AuditIn2MinsPage() {
    return (
        <div className="min-h-screen bg-night-950 font-sans text-white">
            <Header />
            <main>
                <HeroVariant />
                <ProblemSolutionVariant />
                <WhyUsVariant />
                <section className="py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <Card className="glass-panel border-white/10 bg-white/5">
                            <CardContent className="flex flex-col items-center gap-6 pt-8 pb-10 text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Your first audit trail is 2 minutes away.
                                </h2>
                                <p className="text-white/70 max-w-2xl">
                                    Drop in our SDK today and have tamper-proof logs running before your next standup. No credit card, no complex setup.
                                </p>
                                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-12 min-w-[180px] rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 px-8 text-base font-semibold text-white shadow-[0_15px_40px_-15px_rgba(47,123,255,0.6)] transition hover:brightness-110"
                                        onClick={() => window.open(CALENDLY, "_blank")}
                                    >
                                        Start Audit Trail Free
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="h-12 min-w-[180px] rounded-xl border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                                        onClick={() => window.open(CALENDLY, "_blank")}
                                    >
                                        Book A Demo
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function HeroVariant() {
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
            <div
                className="pointer-events-none absolute inset-0 -z-[5] bg-black/40"
                aria-hidden
            />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-20">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 flex justify-center sm:mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
                            <Timer className="h-4 w-4 text-brand-300" />
                            <span className="text-white/80">2-Minute Setup</span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        AI Agent Audit Trails{" "}
                        <span className="text-brand-300">in 2 Minutes</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-white/70 sm:text-xl sm:leading-8">
                        Drop in our SDK, connect your agents, and capture every action, tool call, and LLM interaction in a tamper-proof audit trail — no configuration files required.
                    </p>

                    <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                            {[
                                {
                                    icon: <Code2 className="h-5 w-5 text-brand-300" />,
                                    label: "One-Line SDK Integration",
                                },
                                {
                                    icon: <Clock className="h-5 w-5 text-brand-300" />,
                                    label: "Live Audit Logs in < 2 Minutes",
                                },
                                {
                                    icon: <FileCheck className="h-5 w-5 text-brand-300" />,
                                    label: "Compliance Reports On-Demand",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/2 px-4 py-3 text-left backdrop-blur"
                                >
                                    <div className="flex items-center justify-center bg-white/5 rounded-lg">
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
                            <Link href={CALENDLY}>
                                Start Your Audit Trail
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
    return (
        <div className="relative mx-auto mt-24 max-w-5xl sm:mt-32">
            <div className="glass-panel relative overflow-hidden rounded-3xl border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

                <div className="relative grid gap-6 lg:grid-cols-[1.05fr_auto_1.05fr] lg:items-center">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <div className="rounded-2xl border border-cyan-300/50 bg-white/5 p-4 shadow-lg">
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
                                        className="flex h-16 items-center justify-center rounded-xl border border-cyan-300/70 bg-white/5 text-xs font-semibold text-white/80 shadow-inner"
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-purple-300/50 bg-white/5 p-4 shadow-lg">
                            <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                                <span className="font-semibold text-white">Agents</span>
                                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/60">
                                    Identities
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex h-16 items-center justify-center rounded-xl border border-purple-200/60 bg-white/5 text-sm font-semibold text-white/80">
                                    Internal
                                </div>
                                <div className="flex h-16 items-center justify-center rounded-xl border border-purple-200/60 bg-white/5 text-sm font-semibold text-white/80">
                                    Customer
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto flex-col items-center justify-center gap-3 lg:flex">
                        <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                        <div className="rounded-2xl bg-gradient-to-b from-brand-500 to-brand-400 px-10 py-8 text-center shadow-[0_25px_60px_-25px_rgba(47,123,255,0.8)] ring-1 ring-brand-200/70">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                                LookOver
                            </p>
                            <p className="mt-1 text-2xl font-bold text-white">Gateway</p>
                            <p className="mt-2 text-sm text-white/80">
                                Audit Logs • Guardrails • Compliance
                            </p>
                        </div>
                        <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                    </div>

                    <div className="rounded-2xl border border-emerald-300/50 bg-white/5 p-4 shadow-lg">
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
                                    className="group relative flex h-14 flex-col items-center justify-center gap-1 rounded-xl border border-emerald-200/60 bg-white/5 text-[11px] font-semibold uppercase tracking-wide text-white/70"
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
            </div>
        </div>
    );
}

function ProblemSolutionVariant() {
    return (
        <section id="features" className="relative overflow-hidden bg-night-950 py-24">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950 via-night-950 to-black" aria-hidden />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night-900/40 via-night-950/75 to-night-950" aria-hidden />
            <div className="pointer-events-none absolute inset-0 -z-[5] bg-black/35" aria-hidden />
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        From zero to audit-ready in minutes.
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Setting up audit trails used to mean weeks of engineering work. LookOver makes it a 2-minute task so your team can stay focused on shipping.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-900/50 p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.85)]">
                        <h3 className="text-lg font-semibold leading-8 text-white">Without LookOver</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                                Weeks of custom logging infrastructure
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                                No visibility into what agents actually did
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                                Manual evidence collection for every audit
                            </li>
                        </ul>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-brand-500 to-brand-400 p-8 shadow-[0_18px_70px_-28px_rgba(47,123,255,0.85),0_0_55px_-30px_rgba(47,123,255,0.6)] ring-1 ring-white/15 lg:-mt-4 lg:-mb-4 lg:z-10">
                        <h3 className="text-lg font-semibold leading-8 text-white">
                            With LookOver
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-white/90">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                SDK installed and logging in 2 minutes
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                Every action, tool call & response captured
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                One-click compliance reports for SOC2 & HIPAA
                            </li>
                        </ul>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-900/50 p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.85)]">
                        <h3 className="text-lg font-semibold leading-8 text-white">What You Unlock</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-300" aria-hidden="true" />
                                Ship to enterprise customers faster
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-300" aria-hidden="true" />
                                Pass security reviews with confidence
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-300" aria-hidden="true" />
                                Full replay of any agent session, anytime
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

const variantFeatures = [
    {
        name: "SDK in One Line",
        description:
            "Install with npm or pip, add one import, and start capturing structured audit logs from every agent interaction immediately.",
        icon: Code2,
    },
    {
        name: "Auto-Structured Logs",
        description:
            "Every tool call, LLM prompt, response, and human intervention is automatically captured in structured, searchable, tamper-proof logs.",
        icon: Zap,
    },
    {
        name: "Compliance Templates",
        description:
            "Pre-built report templates for SOC2, HIPAA, and ISO 27001 mean your next audit is a one-click export, not a weeks-long scramble.",
        icon: BadgeCheck,
    },
    {
        name: "Real-Time Alerts",
        description:
            "Get notified the moment an agent behaves unexpectedly, violates a policy, or accesses sensitive data — before it becomes an incident.",
        icon: Timer,
    },
];

function WhyUsVariant() {
    return (
        <section id="why-us" className="relative bg-night-950 py-24 sm:py-32">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950 via-night-950 to-black" aria-hidden />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night-900/30 via-night-950/70 to-night-950" aria-hidden />
            <div className="pointer-events-none absolute inset-0 -z-[5] bg-black/35" aria-hidden />
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-5xl font-semibold leading-7 text-brand-300">Set up in 2 minutes.</h2>
                    <p className="mt-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Trusted for years.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white/70">
                        LookOver is designed for teams that move fast and need enterprise-grade auditability from day one — not bolted on six months later.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
                        {variantFeatures.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col rounded-2xl border border-white/20 bg-night-900/50 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)]"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon className="h-5 w-5 flex-none text-brand-300" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/70">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
