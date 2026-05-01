import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle,
  Clock,
  Code2,
  Database,
  FileCheck,
  Zap,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const CALENDLY = "https://calendly.com/sidhartha-investorsync/15min";
const DOCS = "https://docs.lookover.io";
const PYPI = "https://pypi.org/project/lookover";
const GITHUB = "https://github.com/privyyio/lookover";

const installCommands = [
  "pip install lookover",
  'pip install "lookover[langgraph]"',
  'pip install "lookover[all]"',
];

const directSnippet = `from lookover_sdk import LookoverClient, AgentEvent, EventType

client = LookoverClient(
    api_key="lk_...",
    agent_id="support-agent",
    base_url="https://your-lookover-backend.run.app",
)

client.track(AgentEvent(
    event_type=EventType.TOOL_CALL,
    payload={"tool": "crm.lookup", "input": {"account_id": "acct_123"}},
    outcome="success",
))
client.flush()`;

const langChainSnippet = `from lookover_sdk.langchain import LookoverCallbackHandler

handler = LookoverCallbackHandler(
    api_key="lk_...",
    agent_id="support-agent",
    purpose="customer support triage",
    lawful_basis="contract",
)

chain.invoke(payload, config={"callbacks": [handler]})`;

const langGraphSnippet = `from lookover_sdk.langgraph import LookoverLangGraphListener

listener = LookoverLangGraphListener(
    api_key="lk_...",
    agent_id="support-graph",
    purpose="customer support triage",
    model_provider="googleai",
    model_version="gemini-2.5-flash",
)

result = listener.invoke(graph, {"messages": messages})`;

const prerunSnippet = `prerun scan ./agent.py --strict
prerun run ./agents \\
  --tenant-id acme \\
  --system-id support-bot \\
  --environment prod`;

const integrationPaths = [
  {
    title: "Direct SDK",
    description:
      "Drop in `LookoverClient`, send `AgentEvent` records, and flush to `/v1/events` when you need manual control.",
    snippet: directSnippet,
    icon: Code2,
  },
  {
    title: "LangChain callback",
    description:
      "Capture chains, tools, LLM calls, and agent finishes with a callback handler that also accepts purpose and lawful-basis metadata.",
    snippet: langChainSnippet,
    icon: Zap,
  },
  {
    title: "LangGraph listener",
    description:
      "Wrap a graph invocation to emit per-node spans, structured tool-call output, and PII-aware traces for more complex workflows.",
    snippet: langGraphSnippet,
    icon: Database,
  },
  {
    title: "prerun scanner",
    description:
      "Scan a project before rollout to surface missing governance fields, risky calls, prompt-injection text, and framework evidence.",
    snippet: prerunSnippet,
    icon: FileCheck,
  },
];

const eventTypes = [
  "TOOL_CALL for side effects, inputs, and outputs.",
  "MODEL_INFERENCE for prompts, responses, token count, and duration.",
  "DECISION for routing or control-flow decisions.",
  "HUMAN_HANDOFF when a person approves or intervenes.",
  "DECISION_COMPLETE to close the trace cleanly.",
];

const complianceFields = [
  "Purpose, lawful basis, and consent reference for attributable logging.",
  "Agent version, model provider, and model version for rollout traceability.",
  "Tool scope, disclosure, and data-transfer fields for governance review.",
  "PII flags and output detection signals for sensitive workflows.",
  "Retention class and structured payloads for downstream evidence handling.",
];

const rolloutSteps = [
  {
    step: "01",
    title: "Install the package",
    copy: "Start with the base SDK or add the optional LangGraph and LangChain extras depending on your stack.",
  },
  {
    step: "02",
    title: "Wire one integration path",
    copy: "Choose direct events, a LangChain callback, or a LangGraph listener instead of building custom logging middleware.",
  },
  {
    step: "03",
    title: "Attach governance context",
    copy: "Add purpose, lawful basis, consent references, and version metadata while you instrument the agent.",
  },
  {
    step: "04",
    title: "Run prerun before rollout",
    copy: "Scan the codebase for gaps and publish a readiness snapshot before security or compliance reviews begin.",
  },
];

const exampleCoverage = [
  "Single LLM chains and prompt templates.",
  "Tool-calling agents with calculator, datetime, and utility tools.",
  "RAG, memory, checkpointed graphs, and nested subgraphs.",
  "Human-in-the-loop approval flows before tool execution.",
];

function CodeBlock({ code, label }: { code: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/50">
        <span>{label}</span>
        <span>Python SDK</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-sm leading-7 text-cyan-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function AuditIn2MinsPage() {
  return (
    <div className="min-h-screen bg-night-950 text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(47,123,255,0.28),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(45,212,191,0.18),transparent_28%),linear-gradient(180deg,#020617_0%,#020617_40%,#000000_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%,rgba(255,255,255,0.02)_70%,transparent)]" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-400/10 px-4 py-2 text-sm font-medium text-brand-100 backdrop-blur">
                  <Clock className="h-4 w-4 text-brand-300" />
                  <span>Python SDK + LangChain + LangGraph + prerun</span>
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  AI agent audit logging
                  <span className="block text-brand-300">from pip install to first trace in under 2 minutes.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  The checked SDK is Python-first: install `lookover`, add direct
                  event capture or a framework listener, and start recording tool
                  calls, model inferences, decisions, and human handoffs with
                  compliance context attached.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {installCommands.map((command) => (
                    <div
                      key={command}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.85)]"
                    >
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                        Install
                      </p>
                      <code className="mt-3 block whitespace-pre-wrap font-mono text-cyan-100">
                        {command}
                      </code>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 px-6 text-base font-semibold text-white shadow-[0_18px_50px_-20px_rgba(47,123,255,0.7)] hover:brightness-110"
                  >
                    <Link href={DOCS} target="_blank" rel="noreferrer">
                      Read SDK docs <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-xl border-white/15 bg-white/5 px-6 text-base font-semibold text-white hover:border-white/30 hover:bg-white/10"
                  >
                    <Link href={CALENDLY} target="_blank" rel="noreferrer">
                      Book architecture review <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/60">
                  <Link href={PYPI} target="_blank" rel="noreferrer" className="transition hover:text-white">
                    View package on PyPI
                  </Link>
                  <Link href={GITHUB} target="_blank" rel="noreferrer" className="transition hover:text-white">
                    Inspect the repository
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <CodeBlock code={directSnippet} label="Quickstart" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Captured spans
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Tool calls, model runs, decisions, and human approvals.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Scanner output
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Findings, readiness score, controls, and evidence before rollout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950 via-night-950 to-black" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                Integration Paths
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Instrument the stack you already have.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                The current SDK supports a direct client, LangChain callbacks,
                LangGraph listeners, and a `prerun` CLI for static governance scans.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {integrationPaths.map((path) => (
                <article
                  key={path.title}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.95)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-brand-300/30 bg-brand-400/10 p-3">
                      <path.icon className="h-5 w-5 text-brand-200" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{path.title}</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {path.description}
                  </p>
                  <div className="mt-5">
                    <CodeBlock code={path.snippet} label={path.title} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
              <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-brand-300" />
                  <h2 className="text-2xl font-semibold text-white">What gets captured</h2>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-white/72">
                  {eventTypes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-brand-300" />
                  <h2 className="text-2xl font-semibold text-white">What makes the logs useful later</h2>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-white/72">
                  {complianceFields.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[28px] border border-brand-300/20 bg-gradient-to-b from-brand-400/10 to-cyan-400/5 p-7">
                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-brand-200" />
                  <h2 className="text-2xl font-semibold text-white">Example coverage</h2>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  The example set in `lookover/sdk/python/examples` spans the workflows most teams ask about first:
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/80">
                  {exampleCoverage.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                Rollout Sequence
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The 2-minute path is simple because the primitives already exist.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                You are not wiring a new logging platform from scratch. You are
                choosing a supported integration surface, adding metadata, and
                running a scan before the rollout gets reviewed.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-4">
              {rolloutSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_-55px_rgba(0,0,0,0.95)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/[0.07] via-brand-400/[0.08] to-cyan-400/[0.08] px-8 py-10 shadow-[0_30px_90px_-60px_rgba(47,123,255,0.9)] sm:px-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Start with the SDK docs if you are integrating now.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
                    Book the architecture review instead if your team needs help
                    with governance fields, rollout sequencing, or mapping the
                    trace model into a larger enterprise control plane.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 px-6 text-base font-semibold text-white hover:brightness-110"
                  >
                    <Link href={DOCS} target="_blank" rel="noreferrer">
                      Open docs <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-xl border-white/15 bg-white/5 px-6 text-base font-semibold text-white hover:border-white/30 hover:bg-white/10"
                  >
                    <Link href={CALENDLY} target="_blank" rel="noreferrer">
                      Book review <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
