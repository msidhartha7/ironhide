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
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
          {label}
        </span>
        <span className="font-mono text-[11px] text-slate-600">Python SDK</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-sm leading-7 text-blue-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function AuditIn2MinsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white pt-36 pb-24 sm:pt-44 sm:pb-32">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white" />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-25"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left column */}
              <div className="max-w-xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
                  <Clock className="h-3.5 w-3.5" />
                  Python SDK + LangChain + LangGraph + prerun
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  AI agent audit logging.{" "}
                  <span className="text-blue-600">
                    From pip install to first trace in under 2 minutes.
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-slate-500">
                  The SDK is Python-first: install lookover, add direct event
                  capture or a framework listener, and start recording tool
                  calls, model inferences, decisions, and human handoffs with
                  compliance context attached.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {installCommands.map((command) => (
                    <div
                      key={command}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                        Install
                      </p>
                      <code className="mt-3 block whitespace-pre-wrap font-mono text-sm text-blue-700">
                        {command}
                      </code>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={DOCS}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Read SDK docs <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    Book architecture review <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
                  <Link
                    href={PYPI}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-slate-700"
                  >
                    View package on PyPI
                  </Link>
                  <Link
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-slate-700"
                  >
                    Inspect the repository
                  </Link>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                <CodeBlock code={directSnippet} label="Quickstart" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Captured spans
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                      Tool calls, model runs, decisions, and human approvals.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Scanner output
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                      Findings, readiness score, controls, and evidence before rollout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Integration Paths ───────────────────────────────────── */}
        <section className="bg-slate-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Integration Paths
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Instrument the stack you already have.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                The current SDK supports a direct client, LangChain callbacks,
                LangGraph listeners, and a prerun CLI for static governance scans.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {integrationPaths.map((path) => (
                <article
                  key={path.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                      <path.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {path.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
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

        {/* ── What gets captured + compliance fields ──────────────── */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-slate-900">What gets captured</h2>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-500">
                  {eventTypes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-slate-900">What makes the logs useful later</h2>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-500">
                  {complianceFields.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-7">
                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-slate-900">Example coverage</h2>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  The example set in{" "}
                  <code className="rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-700">
                    lookover/sdk/python/examples
                  </code>{" "}
                  spans the workflows most teams ask about first:
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {exampleCoverage.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ── Rollout Sequence ────────────────────────────────────── */}
        <section className="bg-slate-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Rollout Sequence
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The 2-minute path is simple because the primitives already exist.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                You are not wiring a new logging platform from scratch. You are
                choosing a supported integration surface, adding metadata, and
                running a scan before the rollout gets reviewed.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {rolloutSteps.map((item) => (
                <article
                  key={item.step}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-mono text-sm font-bold text-white shadow-md shadow-blue-600/25">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────────────────── */}
        <section className="bg-slate-950 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Start with the SDK docs if you are integrating now.
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-5xl">
              Book the review if you need governance help.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
              The architecture review covers governance fields, rollout
              sequencing, and mapping the trace model into a larger enterprise
              control plane.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={DOCS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-xl bg-blue-600 px-8 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Open docs <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-xl border border-slate-600 bg-transparent px-8 text-base font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                Book review <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-widest text-slate-600">
              GDPR Art. 30 · SOC2 Type II · EU AI Act · Tamper-proof logs
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
