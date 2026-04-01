"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/landing/Header";
import ComplianceMatrix from "@/components/landing/ComplianceMatrix";

// ─── Types ────────────────────────────────────────────────────────────────────

type LogEntry = {
  time: string;
  agent: string;
  action: string;
  status: "COMPLIANT" | "FLAGGED" | "REVIEWING";
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const LOG_ENTRIES: LogEntry[] = [
  { time: "14:23:01.442", agent: "onboarding-agent", action: "PII_ACCESS", status: "COMPLIANT" },
  { time: "14:23:01.891", agent: "support-bot", action: "DB_QUERY", status: "REVIEWING" },
  { time: "14:23:02.104", agent: "billing-agent", action: "PAYMENT_WRITE", status: "FLAGGED" },
  { time: "14:23:02.330", agent: "data-pipeline", action: "EXPORT_DATA", status: "COMPLIANT" },
  { time: "14:23:02.671", agent: "email-sender", action: "SEND_EXTERNAL", status: "FLAGGED" },
  { time: "14:23:03.001", agent: "audit-logger", action: "LOG_WRITE", status: "COMPLIANT" },
];

const STATUS_STYLES: Record<LogEntry["status"], string> = {
  COMPLIANT: "bg-emerald-950 text-emerald-400 border border-emerald-800",
  FLAGGED: "bg-orange-950 text-orange-400 border border-orange-800",
  REVIEWING: "bg-blue-950 text-blue-400 border border-blue-800",
};

const PROBLEM_CARDS = [
  {
    badge: "FOR ENGINEERS",
    title: "Your observability stack can't answer a compliance question.",
    body: "LangSmith, Langfuse, and Datadog are built for debugging and latency. They were not designed to tell you whether an agent action violated GDPR Article 30 or your internal data access policy. When your legal team asks for an audit trail, your current stack will let you down.",
  },
  {
    badge: "FOR CISOs",
    title: "AI agents are operating outside your governance perimeter.",
    body: "Traditional IAM and DLP tools were built for human actors. AI agents make thousands of autonomous decisions per hour — none of which map cleanly to your existing policy framework. You have visibility gaps you haven't fully scoped yet.",
  },
  {
    badge: "FOR PRODUCT",
    title: "You're shipping agents faster than you can govern them.",
    body: "Every new agent you ship is another surface area for a compliance incident. Without structured logs and policy checks at the action level, your team is one data handling mistake away from a regulatory response. Product velocity and compliance posture are currently in conflict.",
  },
];

const SOLUTION_ROWS = [
  {
    num: "01",
    title: "Action-Level Interception",
    body: "Every tool call, API request, data read, and external write is captured at the SDK level. No sampling. No gaps. Full fidelity.",
    snippet: `{ "action": "PII_READ",\n  "agent": "support-bot",\n  "timestamp": "2024-01-15T14:23:01Z",\n  "status": "intercepted" }`,
  },
  {
    num: "02",
    title: "Policy Evaluation Engine",
    body: "Define compliance rules in plain configuration — GDPR data minimization, access scope, retention windows. Lookover evaluates every action against your ruleset in under 2ms.",
    snippet: `policy: gdpr_art30\nresult: COMPLIANT\nlatency: 1.4ms`,
  },
  {
    num: "03",
    title: "Audit-Ready Log Export",
    body: "Every action produces a structured, signed log entry in a format your legal and compliance teams can actually use. Export to S3, Splunk, or your SIEM in one click.",
    snippet: `format: JSON-LD\nsigned: true\nexport: S3 | Splunk | SIEM`,
  },
];

type CellValue = boolean | "partial";

const COMPARISON_FEATURES: { label: string; obs: CellValue; gov: CellValue; lo: CellValue }[] = [
  { label: "Real-time action monitoring", obs: true, gov: true, lo: true },
  { label: "Policy violation alerting", obs: false, gov: "partial", lo: true },
  { label: "Audit-ready log format", obs: false, gov: "partial", lo: true },
  { label: "GDPR Art. 30 compliance", obs: false, gov: "partial", lo: true },
  { label: "Agent-native design", obs: true, gov: false, lo: true },
  { label: "Non-technical compliance dashboard", obs: false, gov: "partial", lo: true },
];

const PERSONA_CARDS = [
  {
    badge: "ENGINEERING",
    title: "The Engineer",
    body: "You're the one who gets paged when something goes wrong. With Lookover, you ship agents with compliance baked in at the SDK level — structured logs, policy evaluation, and audit trails that don't require a post-mortem to produce.",
    gets: "Full action-level visibility. No additional infrastructure.",
  },
  {
    badge: "PRODUCT",
    title: "The Product Manager",
    body: "You're shipping AI features faster than your compliance team can review them. Lookover gives you a structured compliance signal at every agent action, so you can move fast and still answer the question: 'Was that action safe to take?'",
    gets: "Compliance confidence without slowing the roadmap.",
  },
  {
    badge: "SECURITY",
    title: "The CISO",
    body: "Your governance framework was built for human actors. AI agents operate outside it. Lookover gives you the audit trail, policy enforcement, and dashboard visibility you need to bring agents inside your governance perimeter.",
    gets: "Agent actions, governed. Audit reports, ready.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CellIcon({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return <span className="text-blue-600 font-bold text-lg">✓</span>;
  if (value === "partial")
    return <span className="text-slate-400 font-bold text-lg">~</span>;
  return <span className="text-slate-300 font-bold text-lg">✗</span>;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CompliancePage() {
  const [showMobileComparison, setShowMobileComparison] = useState(false);

  return (
    <>
      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes log-row-in {
          0%   { opacity: 0; transform: translateY(8px); }
          18%  { opacity: 1; transform: translateY(0); }
          75%  { opacity: 1; transform: translateY(0); }
          90%  { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
        .log-row {
          animation: log-row-in 8s ease infinite;
          opacity: 0;
        }
        .log-row:nth-child(1)  { animation-delay: 0s; }
        .log-row:nth-child(2)  { animation-delay: 0.45s; }
        .log-row:nth-child(3)  { animation-delay: 0.9s; }
        .log-row:nth-child(4)  { animation-delay: 1.35s; }
        .log-row:nth-child(5)  { animation-delay: 1.8s; }
        .log-row:nth-child(6)  { animation-delay: 2.25s; }

        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: cursor-blink 1s step-end infinite;
        }

        .cta-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .cta-btn:hover {
          transform: translateY(-1px);
        }
        .cta-btn-primary:hover {
          box-shadow: 0 8px 24px -4px rgba(29, 78, 216, 0.4);
        }
        .cta-btn-outline:hover {
          box-shadow: 0 4px 12px -2px rgba(15, 23, 42, 0.12);
        }

        .stepper-line::after {
          content: '';
          position: absolute;
          top: 20px;
          left: calc(50% + 20px);
          width: calc(100% - 40px);
          height: 1px;
          background: linear-gradient(90deg, #1d4ed8 0%, #bfdbfe 100%);
        }
        @media (max-width: 767px) {
          .stepper-line::after { display: none; }
        }
      `}</style>

      <div className="min-h-screen bg-white font-sans text-slate-900">

        <Header />

        <main>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 2 · HERO
          ═════════════════════════════════════════════════════════════════════ */}
          <section className="relative overflow-hidden bg-white pt-36 pb-24 sm:pt-44 sm:pb-32">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white" />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* Left column */}
                <div className="max-w-xl">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                    Early Access
                  </div>

                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                    Audit Every Action Your AI Agent Takes.{" "}
                    <span className="text-blue-600">Before Your Auditor Does.</span>
                  </h1>

                  <p className="mt-6 text-lg leading-relaxed text-slate-500">
                    Lookover gives engineers, product managers, and CISOs real-time compliance visibility into every action their AI agents take — structured, policy-checked, and audit-ready.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#early-access"
                      className="cta-btn cta-btn-primary inline-flex h-12 items-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white"
                    >
                      Get Early Access
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                    <a
                      href="#solution"
                      className="cta-btn cta-btn-outline inline-flex h-12 items-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 hover:border-slate-400"
                    >
                      See How It Works
                    </a>
                  </div>

                  {/* Trust strip */}
                  <p className="mt-8 font-mono text-[11px] tracking-wide text-slate-400">
                    GDPR Art. 30 · SOC2 Type II · EU AI Act · Tamper-proof logs · 5-min SDK setup
                  </p>
                </div>

                {/* Right column — animated log stream */}
                <div className="relative">
                  <div
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl"
                    style={{ boxShadow: "0 0 0 1px rgba(29,78,216,0.15), 0 24px 64px -16px rgba(0,0,0,0.5)" }}
                  >
                    {/* Terminal header bar */}
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <span className="h-3 w-3 rounded-full bg-green-500/80" />
                      <span className="ml-3 font-mono text-[11px] text-slate-500">lookover · live audit stream</span>
                      <span className="ml-auto flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-[10px] text-emerald-500">LIVE</span>
                      </span>
                    </div>

                    {/* Column headers */}
                    <div className="mb-3 grid grid-cols-4 gap-2 border-b border-slate-800 pb-2">
                      {["TIME", "AGENT", "ACTION", "STATUS"].map((h) => (
                        <span key={h} className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Log rows */}
                    <div className="space-y-2 overflow-hidden" style={{ minHeight: "228px" }}>
                      {LOG_ENTRIES.map((entry, i) => (
                        <div
                          key={i}
                          className="log-row grid grid-cols-4 items-center gap-2 rounded-lg px-2 py-1.5"
                          style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                        >
                          <span className="font-mono text-[11px] text-slate-500">{entry.time}</span>
                          <span className="font-mono text-[11px] text-slate-300 truncate">{entry.agent}</span>
                          <span className="font-mono text-[11px] text-blue-400">{entry.action}</span>
                          <span
                            className={`inline-flex items-center justify-center rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${STATUS_STYLES[entry.status]}`}
                          >
                            {entry.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Terminal prompt */}
                    <div className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-3">
                      <span className="font-mono text-[11px] text-blue-500">$</span>
                      <span className="font-mono text-[11px] text-slate-500">lookover stream --policy gdpr_art30 --realtime</span>
                      <span className="cursor-blink font-mono text-[11px] text-blue-400">▌</span>
                    </div>
                  </div>

                  {/* Decorative glow behind terminal */}
                  <div
                    className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-30"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3), transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 3 · PROBLEM
          ═════════════════════════════════════════════════════════════════════ */}
          <section className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <RevealSection>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">
                  Why This Exists
                </p>
                <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  You instrumented your agents for performance. Not for compliance.{" "}
                  <span className="text-blue-600">Those are different problems.</span>
                </h2>
              </RevealSection>

              <div className="mt-12 grid gap-0 md:grid-cols-3 md:gap-0">
                {PROBLEM_CARDS.map((card, i) => (
                  <RevealSection key={i} delay={i * 100}>
                    <article
                      className="flex h-full flex-col border border-slate-200 bg-white p-6"
                      style={{
                        borderRadius: 0,
                        borderLeft: i === 0 ? "1px solid rgb(226,232,240)" : "none",
                        borderRight: "1px solid rgb(226,232,240)",
                      }}
                    >
                      <span className="mb-4 inline-block font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                        {card.badge}
                      </span>
                      <h3 className="mb-3 text-base font-bold leading-snug text-slate-900">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500">{card.body}</p>
                    </article>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 4 · SOLUTION
          ═════════════════════════════════════════════════════════════════════ */}
          <section id="solution" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <RevealSection>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">
                  What Lookover Does
                </p>
                <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Real-time compliance checks on every agent action.{" "}
                  <span className="text-blue-600">Not a report after the fact.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
                  Lookover sits between your AI agents and the world — intercepting every action, checking it against your compliance policies, and producing structured, tamper-proof audit logs in real time.
                </p>
              </RevealSection>

              <div className="mt-16 space-y-0 divide-y divide-slate-100">
                {SOLUTION_ROWS.map((row, i) => (
                  <RevealSection key={i} delay={i * 80}>
                    <div className="grid items-start gap-6 py-10 md:grid-cols-[80px_1fr_1fr] md:gap-12">
                      {/* Number */}
                      <span className="font-mono text-5xl font-bold text-slate-100 select-none">
                        {row.num}
                      </span>
                      {/* Content */}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{row.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{row.body}</p>
                      </div>
                      {/* Code snippet */}
                      <div
                        className="rounded-lg border border-slate-800 bg-slate-950 p-4"
                        style={{ boxShadow: "0 0 0 1px rgba(29,78,216,0.08)" }}
                      >
                        <pre className="font-mono text-[12px] leading-relaxed text-slate-300 whitespace-pre-wrap break-all">
                          {row.snippet}
                        </pre>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>

              {/* Callout block */}
              <RevealSection delay={200}>
                <blockquote className="mt-12 border-l-4 border-blue-600 bg-blue-50 py-5 pl-6 pr-6 rounded-r-xl">
                  <p className="text-base font-semibold italic text-slate-700">
                    "LangSmith tells you what your agent did. Lookover tells you whether it should have."
                  </p>
                </blockquote>
              </RevealSection>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 5 · INTEGRATIONS / SETUP
          ═════════════════════════════════════════════════════════════════════ */}
          <section className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <RevealSection>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">Setup</p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Wraps your existing stack.{" "}
                  <span className="text-blue-600">No rewrites.</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
                  Drop in the SDK. Your agents keep running. Compliance checks start immediately.
                </p>
              </RevealSection>

              {/* Framework pills */}
              <RevealSection delay={80}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Custom Runtime"].map((fw) => (
                    <span
                      key={fw}
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-600 shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {fw}
                    </span>
                  ))}
                </div>
              </RevealSection>

              {/* Stepper — cards with a real connecting line */}
              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    label: "Instrument",
                    body: "One package. Works with any agent runtime.",
                    detail: (
                      <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-500/70" />
                          <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                          <span className="h-2 w-2 rounded-full bg-green-500/70" />
                        </div>
                        <pre className="font-mono text-[13px] leading-relaxed text-blue-300">
                          {"$ npm install @lookover/sdk\n+ @lookover/sdk@1.0.0"}
                        </pre>
                      </div>
                    ),
                  },
                  {
                    step: "02",
                    label: "Define Policies",
                    body: "Configure compliance rules in YAML or via the dashboard. Map to GDPR, SOC2, or custom internal policies.",
                    detail: (
                      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                        <pre className="font-mono text-[12px] leading-relaxed text-slate-500 whitespace-pre-wrap">
                          {"policies:\n  - gdpr_art30\n  - soc2_type2\n  - custom: pii_read"}
                        </pre>
                      </div>
                    ),
                  },
                  {
                    step: "03",
                    label: "Monitor, Alert, Report",
                    body: "Real-time action feed. Policy violation alerts. One-click audit export to S3, Splunk, or your SIEM.",
                    detail: (
                      <div className="mt-4 space-y-2">
                        {[
                          { icon: "●", color: "text-emerald-500", text: "Live action feed" },
                          { icon: "▲", color: "text-orange-400", text: "Violation alerts" },
                          { icon: "↓", color: "text-blue-500", text: "One-click audit export" },
                        ].map((item) => (
                          <div key={item.text} className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
                            <span className={`font-mono text-xs ${item.color}`}>{item.icon}</span>
                            <span className="text-xs font-medium text-slate-600">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                ].map((item, i) => (
                  <RevealSection key={i} delay={i * 120}>
                    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      {/* Step header */}
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-mono text-sm font-bold text-white shadow-md shadow-blue-600/25">
                          {item.step}
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Step {i + 1}</p>
                          <h3 className="text-base font-bold text-slate-900">{item.label}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-500">{item.body}</p>
                      {item.detail}
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 6 · COMPARISON TABLE
          ═════════════════════════════════════════════════════════════════════ */}
          <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <RevealSection>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">
                  The Gap in the Market
                </p>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Three categories of tools.{" "}
                  <span className="text-blue-600">None of them built for this.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
                  Agent observability tools tell you what happened. AI governance platforms set high-level policies. Neither gives you real-time, action-level compliance checks that are agent-native and audit-ready out of the box. That&apos;s the gap Lookover was built to fill.
                </p>
              </RevealSection>

              {/* Desktop table */}
              <RevealSection delay={120}>
                <div className="mt-12 hidden overflow-hidden rounded-xl border border-slate-200 md:block">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="w-[30%] border-b border-slate-200 bg-slate-50 px-6 py-4 text-left font-semibold text-slate-500">
                          Feature
                        </th>
                        <th className="border-b border-slate-200 bg-slate-50 px-6 py-4 text-center font-semibold text-slate-500">
                          Agent Observability Tools
                        </th>
                        <th className="border-b border-slate-200 bg-slate-50 px-6 py-4 text-center font-semibold text-slate-500">
                          AI Governance Platforms
                        </th>
                        <th className="border-b border-blue-600 bg-blue-600 px-6 py-4 text-center font-bold text-white">
                          Lookover
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_FEATURES.map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="border-b border-slate-100 px-6 py-4 text-slate-600">{row.label}</td>
                          <td className="border-b border-slate-100 px-6 py-4 text-center">
                            <CellIcon value={row.obs} />
                          </td>
                          <td className="border-b border-slate-100 px-6 py-4 text-center">
                            <CellIcon value={row.gov} />
                          </td>
                          <td className="border-b border-blue-100 bg-blue-50/50 px-6 py-4 text-center">
                            <CellIcon value={row.lo} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </RevealSection>

              {/* Mobile: toggle */}
              <div className="mt-10 md:hidden">
                <button
                  onClick={() => setShowMobileComparison(!showMobileComparison)}
                  className="mb-4 flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  <span>{showMobileComparison ? "Hide full comparison" : "Show full comparison"}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${showMobileComparison ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Always show Lookover column on mobile */}
                <div className="overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
                  <div className="border-b border-blue-200 bg-blue-600 px-4 py-3 text-center font-bold text-white text-sm">
                    Lookover
                  </div>
                  {COMPARISON_FEATURES.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-blue-100 px-4 py-3 last:border-0"
                    >
                      <span className="text-sm text-slate-600">{row.label}</span>
                      <CellIcon value={row.lo} />
                    </div>
                  ))}
                </div>

                {showMobileComparison && (
                  <div className="mt-4 space-y-4">
                    {["Agent Observability Tools", "AI Governance Platforms"].map((col, ci) => (
                      <div key={ci} className="overflow-hidden rounded-xl border border-slate-200">
                        <div className="border-b border-slate-200 bg-slate-100 px-4 py-3 text-center font-semibold text-slate-600 text-sm">
                          {col}
                        </div>
                        {COMPARISON_FEATURES.map((row, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between border-b border-slate-100 px-4 py-3 last:border-0"
                          >
                            <span className="text-sm text-slate-600">{row.label}</span>
                            <CellIcon value={ci === 0 ? row.obs : row.gov} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 7 · WHY NOW
          ═════════════════════════════════════════════════════════════════════ */}
          <section className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <RevealSection>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-blue-400">
                  Market Timing
                </p>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Agents are already in production.{" "}
                  <span className="text-blue-400">Compliance tooling isn&apos;t.</span>
                </h2>
              </RevealSection>

              <div className="mt-14 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    eyebrow: "Enterprise rollout",
                    stat: "30,000+",
                    label: "AI agents deployed at JPMorgan Chase alone. The enterprise wave isn't coming — it's here.",
                  },
                  {
                    eyebrow: "Regulatory pressure",
                    stat: "3 frameworks.",
                    label: "GDPR. EU AI Act. SOC2 Type II. All now expanding audit scope to automated systems.",
                  },
                  {
                    eyebrow: "Time to compliance",
                    stat: "5 minutes.",
                    label: "That's the SDK setup time. Big Tech uses headcount. Lookover uses a one-line install.",
                  },
                ].map((block, i) => (
                  <RevealSection key={i} delay={i * 100}>
                    <div className="flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-800/40 p-7"
                      style={{ borderTop: "2px solid rgba(96,165,250,0.5)" }}>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-blue-400/70">
                        {block.eyebrow}
                      </p>
                      <p className="font-mono text-4xl font-bold leading-none text-blue-400">
                        {block.stat}
                      </p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{block.label}</p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 8 · PERSONAS
          ═════════════════════════════════════════════════════════════════════ */}
          <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <RevealSection>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">
                  Built For
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Three teams. One shared problem.{" "}
                  <span className="text-blue-600">One tool.</span>
                </h2>
              </RevealSection>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {PERSONA_CARDS.map((card, i) => (
                  <RevealSection key={i} delay={i * 100}>
                    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                      <span className="mb-3 inline-block font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                        {card.badge}
                      </span>
                      <h3 className="mb-3 text-lg font-bold text-slate-900">{card.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-slate-500">{card.body}</p>
                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">What they get</p>
                        <p className="text-sm font-medium text-slate-700">{card.gets}</p>
                      </div>
                    </article>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              COMPLIANCE MATRIX
          ═════════════════════════════════════════════════════════════════════ */}
          <ComplianceMatrix />

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 10 · FINAL CTA
          ═════════════════════════════════════════════════════════════════════ */}
          <section id="early-access" className="bg-slate-950 py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <RevealSection>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Your agents are already in production.
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-5xl">
                  Your compliance posture should be too.
                </p>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                  Lookover is in early access. We&apos;re onboarding teams building AI agents who need structured compliance visibility before their auditor asks for it. Setup takes 5 minutes. The audit trail starts immediately.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://calendly.com/sidhartha-investorsync/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-primary inline-flex h-13 items-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white"
                  >
                    Get Early Access
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                  <a
                    href="https://calendly.com/sidhartha-investorsync/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-outline inline-flex h-13 items-center rounded-xl border border-slate-600 bg-transparent px-8 py-3.5 text-base font-semibold text-slate-200 hover:border-slate-400 hover:text-white"
                  >
                    Book a Demo
                  </a>
                </div>

                {/* Compliance strip */}
                <p className="mt-10 font-mono text-[11px] tracking-widest text-slate-600 uppercase">
                  GDPR Art. 30 · SOC2 Type II · EU AI Act · Immutable Logs · Agent-Native
                </p>
              </RevealSection>
            </div>
          </section>

        </main>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 11 · FOOTER
        ═══════════════════════════════════════════════════════════════════════ */}
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_auto_auto]">
              {/* Brand */}
              <div>
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="Lookover logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 drop-shadow-[0_10px_30px_rgba(47,123,255,0.35)]"
                  />
                  <div>
                    <p className="text-base font-semibold text-slate-900">Lookover</p>
                    <p className="text-[11px] text-slate-400">Compliance Intelligence for AI Agents</p>
                  </div>
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                  Real-time compliance observability for every action your AI agents take.
                </p>
                {/* Social links */}
                <div className="mt-5 flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/lookover-io"
                    className="text-slate-400 transition hover:text-slate-700"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/privyyio"
                    className="text-slate-400 transition hover:text-slate-700"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/m_sidhartha07"
                    className="text-slate-400 transition hover:text-slate-700"
                    aria-label="Twitter / X"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Product links */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Product</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  {["Product", "Compliance", "Integrations", "Docs", "Blog"].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-slate-900 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company links */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Company</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  {["About", "Blog", "Careers", "Contact"].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-slate-900 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Site */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Site</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  <li>
                    <a
                      href="https://lookover.io"
                      className="hover:text-slate-900 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lookover.io
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
              <p className="font-mono text-xs text-slate-400">
                © 2024 Lookover · GDPR Art. 30 · SOC2 Type II · EU AI Act
              </p>
              <p className="text-xs text-slate-400">
                Built for engineers who ship AI agents responsibly.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
