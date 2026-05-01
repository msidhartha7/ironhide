# Audit In 2 Mins SDK Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh `/audit-in-2-mins` so it reflects the real Lookover Python SDK quickstart, LangChain and LangGraph integrations, and the `prerun` compliance scanner instead of generic audit-trail copy.

**Architecture:** Keep the route as a single landing page backed by static copy and lightweight section arrays. Rework the content around the SDK's actual install paths, code examples, event model, and pre-run scan flow, then tighten the page metadata so search intent matches the new self-serve quickstart.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS, Lucide React, existing `buildMetadata()` SEO helper.

---

### Task 1: Lock the content direction to the SDK source of truth

**Files:**
- Create: `docs/superpowers/plans/2026-05-01-audit-in-2-mins-sdk-refresh.md`
- Modify: `app/audit-in-2-mins/page.tsx`
- Modify: `app/audit-in-2-mins/layout.tsx`

- [ ] **Step 1: Capture the SDK-backed claims that are safe to publish**

Use these source-backed points while rewriting the page:

```text
- Package name is `lookover` (`pyproject.toml`).
- Install paths are `pip install lookover`, `pip install "lookover[langgraph]"`, and `pip install "lookover[all]"` (`README.md`).
- Direct SDK quickstart uses `LookoverClient`, `AgentEvent`, and `EventType` (`README.md`).
- LangChain support is provided by `LookoverCallbackHandler` with required `purpose` and optional compliance fields (`lookover_sdk/langchain/callback.py`).
- LangGraph support is provided by `LookoverLangGraphListener` with per-node spans, tool-call capture, and PII detection/scrubbing (`lookover_sdk/langgraph/listener.py`).
- `prerun` supports `scan`, `publish`, and `run` commands plus `--strict`, tenant, system, environment, output, API key, and backend URL flags (`prerun/cli.py`).
```

- [ ] **Step 2: Exclude unsafe or stale claims from the page**

Do not ship copy that depends on unsupported behavior:

```text
- Do not mention npm installs; the checked SDK is Python-only in this workspace.
- Do not use the README example `prerun scan ./agents/ --framework GDPR`; that flag is not implemented in `prerun/cli.py`.
- Do not use `lookover-sdk[...]`; the published package name is `lookover`.
- Do not promise one-click SOC 2 or HIPAA report exports unless the checked SDK/docs in this repo show that path directly.
```

### Task 2: Rewrite the page around the actual self-serve implementation path

**Files:**
- Modify: `app/audit-in-2-mins/page.tsx`

- [ ] **Step 1: Replace the generic hero with SDK-first messaging**

The hero should:

```tsx
<h1>
  Python audit logging for AI agents in under 2 minutes.
</h1>
<p>
  Install the `lookover` package, wire in direct events or framework listeners,
  and start capturing tool calls, model inferences, decisions, and handoffs
  with compliance context attached.
</p>
```

- [ ] **Step 2: Add one real quickstart code block above the fold**

Use the direct SDK example as the primary code sample:

```python
from lookover_sdk import LookoverClient, AgentEvent, EventType

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
client.flush()
```

- [ ] **Step 3: Add supported-integration sections for direct SDK, LangChain, LangGraph, and `prerun`**

Each section should explain one concrete path:

```text
- Direct SDK: manual event capture with `LookoverClient`.
- LangChain: callback-based capture for chains, tools, and agent finishes.
- LangGraph: graph wrapper that emits per-node spans and tool-call structure.
- prerun: static scan before rollout for governance gaps and risky patterns.
```

- [ ] **Step 4: Add evidence-oriented detail instead of vague benefits**

Translate the event model and scanner fields into user-facing bullets:

```text
- Captured span types: TOOL_CALL, MODEL_INFERENCE, DECISION, HUMAN_HANDOFF, DECISION_COMPLETE.
- Context fields: agent version, lawful basis, consent reference, token count, tool scope, data transfer, disclosure flags.
- Scanner output: readiness score, findings, controls, evidence, frameworks, strict result.
```

- [ ] **Step 5: Keep conversion paths aligned with the self-serve flow**

The primary actions should point to:

```text
- Documentation / install path for users ready to integrate now.
- Calendly demo path for teams that need architecture review or enterprise rollout help.
```

### Task 3: Tighten metadata and verify the change set

**Files:**
- Modify: `app/audit-in-2-mins/layout.tsx`
- Test: `app/audit-in-2-mins/page.tsx`
- Test: `app/audit-in-2-mins/layout.tsx`

- [ ] **Step 1: Update metadata to match the SDK-focused query intent**

Use title/description/keywords closer to:

```ts
title: "Lookover SDK Quickstart for AI Agent Audit Logging"
description:
  "Install the Lookover Python SDK, add LangChain or LangGraph tracing, and run prerun compliance scans before shipping your agent."
keywords: [
  "Lookover SDK",
  "AI agent audit logging SDK",
  "LangChain audit logs",
  "LangGraph audit trails",
  "prerun compliance scan",
]
```

- [ ] **Step 2: Run targeted linting on the touched route files**

Run:

```bash
pnpm exec eslint app/audit-in-2-mins/page.tsx app/audit-in-2-mins/layout.tsx
```

Expected: no ESLint errors.

- [ ] **Step 3: Smoke-check the final copy for claim accuracy**

Verify manually before closing:

```text
- Every install command exists in `README.md` or `pyproject.toml`.
- Every CLI flag shown exists in `prerun/cli.py`.
- Every integration claim maps to actual code in `lookover_sdk/langchain` or `lookover_sdk/langgraph`.
- No section promises unsupported compliance automation.
```
