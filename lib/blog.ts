export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date string e.g. "2026-03-20"
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  readTime: number; // minutes
  content: string; // markdown/HTML string rendered via dangerouslySetInnerHTML or a renderer
};

// ---------------------------------------------------------------------------
// Post registry — add new posts here in reverse chronological order
// ---------------------------------------------------------------------------

const posts: BlogPost[] = [
  {
    slug: "why-every-ai-agent-needs-an-identity",
    title: "Why Every AI Agent Needs an Identity",
    excerpt:
      "Autonomous agents can read files, call APIs, and modify databases — all without a human in the loop. Without a stable, verifiable identity attached to each agent, your audit trail is fiction and your blast radius is unlimited.",
    publishedAt: "2026-03-25",
    author: {
      name: "LookOver Team",
      role: "Platform Engineering",
    },
    tags: ["Identity", "Agentic AI", "Zero Trust"],
    readTime: 7,
    content: `
<h2>The Agent Proliferation Problem</h2>
<p>In 2025, the number of autonomous AI agents running in production environments crossed a threshold that most enterprise security teams were not ready for. According to Gartner's 2025 AI Infrastructure Survey, 62 percent of enterprises deploying generative AI reported having more AI agents interacting with internal systems than human employees — yet fewer than one in five had a formal identity management strategy covering those agents.</p>
<p>The consequences are predictable. When an agent exfiltrates sensitive data, overwrites a critical record, or triggers an unintended workflow, security teams are left asking the same question: <em>which agent did this, under whose authorization, and why did we let it?</em></p>
<p>The answer, almost universally, is that the agent had no stable identity. It operated under a shared service account, a long-lived API key checked into a repository, or simply the credentials of the developer who provisioned it. The agent was invisible to the audit trail.</p>

<h2>What "Agent Identity" Actually Means</h2>
<p>Human identity in enterprise systems is well-understood. A person has a username, belongs to groups, holds roles, and every action they take is attributed to that identity. Revocation, rotation, and principle-of-least-privilege are standard practices enforced by IAM platforms built over decades.</p>
<p>AI agent identity requires the same primitives — but with properties that reflect how agents actually behave:</p>
<ul>
  <li><strong>Workload-scoped credentials</strong>: An agent's identity should be bound to its specific task context, not to a human operator or a generic service account. An agent summarizing customer support tickets should not share credentials with an agent processing financial transactions.</li>
  <li><strong>Short-lived tokens</strong>: Agents often run in ephemeral compute environments. Long-lived credentials that outlast a task create unnecessary exposure. Identity tokens should be scoped to the agent's session and expire when the session ends.</li>
  <li><strong>Cryptographic attestation</strong>: In a zero-trust architecture, an agent claiming an identity is not sufficient. The claim must be backed by a cryptographic proof that ties the credential to the specific workload, runtime, and invocation context.</li>
  <li><strong>Immutable lineage</strong>: Agents spawn sub-agents, delegate to tools, and chain through multi-step workflows. Each step in that chain must carry a verifiable identity token so the entire execution graph is attributable and auditable.</li>
</ul>

<h2>Why Shared Credentials Are the Root Cause of Most Agent Security Incidents</h2>
<p>The operational shortcut that causes the most damage is the shared service account. It is understandable why teams reach for it: provisioning a unique identity per agent adds friction, especially when agent definitions change rapidly during development. But the security debt it creates is severe.</p>
<p>Consider a real-world scenario that played out at several financial services firms in 2025: a coding assistant agent with access to an internal GitHub org was granted write permissions via a shared CI/CD service account. The same account was used by fifteen other automated processes. When the agent's behavior changed — due to a model update that altered its tool-calling patterns — it began committing to repositories outside its intended scope. The incident took four days to detect and six days to remediate, because there was no way to distinguish the agent's writes from legitimate CI/CD activity in the audit log.</p>
<p>With per-agent identities, this is a 30-second detection: every write is attributed to the specific agent identity, policy enforcement fires immediately when the agent touches a resource outside its declared scope, and revocation is surgical — the compromised agent's identity is invalidated without touching the 15 other processes.</p>

<h2>The NIST AI RMF and the Identity Gap</h2>
<p>NIST's AI Risk Management Framework (AI RMF 1.0) explicitly calls out accountability and traceability as core properties of trustworthy AI systems. The GOVERN function within the framework requires organizations to establish policies for how AI systems are authorized to act, and the MEASURE function requires ongoing monitoring that can only be meaningful if actions are attributable to specific systems.</p>
<p>The AI RMF does not prescribe how to implement identity — that is appropriately left to the organization. But it is unambiguous that an AI system whose actions cannot be attributed to a specific, authorized entity fails the accountability requirement. Shared credentials and anonymous service accounts are, by definition, non-compliant with this requirement.</p>
<p>Regulators are starting to notice. The EU AI Act's requirements for high-risk systems include audit trail obligations that will be difficult to satisfy without per-agent identity infrastructure. Early guidance from the UK's ICO on automated decision-making systems similarly emphasizes the need for traceable attribution.</p>

<h2>Designing an Identity-First Agent Architecture</h2>
<p>The architectural pattern that most reliably solves this problem follows three principles:</p>

<h3>1. Identity at Provisioning, Not at Runtime</h3>
<p>An agent's identity should be established when the agent is defined, not when it is invoked. This means the agent manifest — the document that describes what the agent does, what tools it can call, what data it can access — is also the identity registration document. When the manifest changes, the identity is reissued. This creates a direct link between the agent's declared behavior and its authorization scope.</p>

<h3>2. Policy as the Authorization Layer</h3>
<p>Identity alone is not authorization. An agent knowing "I am agent-id-7a3f" does not tell the system what agent-id-7a3f is allowed to do. The identity must be paired with a policy engine that evaluates every action against a declared permission set. This policy should be written in a human-readable format (YAML or similar) that is version-controlled alongside the agent definition, making authorization scope auditable over time.</p>

<h3>3. Continuous Verification, Not Just Initial Authentication</h3>
<p>Zero-trust principles dictate that a single authentication event at agent startup is insufficient. Every significant action — every API call, every file write, every tool invocation — should be evaluated against current policy in real time. This requires a lightweight authorization sidecar or gateway that sits between the agent and the resources it accesses, evaluating and recording every interaction.</p>

<h2>The Audit Trail Dividend</h2>
<p>The immediate benefit of per-agent identity is security. But the compounding benefit — the one that security-conscious engineering leaders often underestimate — is the audit trail.</p>
<p>When every agent action is attributed to a specific identity, scoped to a specific task, and recorded with a cryptographic timestamp, you gain something invaluable: a complete, tamper-proof record of what every agent in your system did, when it did it, and under what authorization. This is the foundation of compliance reporting for SOC 2, HIPAA, and the emerging AI-specific frameworks. It is also the foundation of incident response — when something goes wrong, the blast radius is immediately knowable and the attribution is immediate.</p>
<p>The teams that invest in agent identity infrastructure today are not just reducing risk. They are building the observability layer that will make their AI systems auditable, governable, and trustworthy at enterprise scale.</p>

<h2>Getting Started</h2>
<p>If your organization is running AI agents in production without per-agent identity, the path forward does not require a complete infrastructure overhaul. Start with the highest-risk agents — those with write access to sensitive systems — and apply the following:</p>
<ol>
  <li>Assign each a unique, non-shared service identity scoped to its declared function.</li>
  <li>Implement short-lived credential rotation aligned with task lifecycle.</li>
  <li>Route all agent-to-resource interactions through a logging gateway that attributes every call to the agent identity.</li>
  <li>Define and version-control a minimal permission policy for each agent.</li>
</ol>
<p>This is achievable in days, not quarters, with the right infrastructure. The agents that operate with clear identities today will be the ones you can govern, audit, and trust tomorrow.</p>
    `.trim(),
  },
  {
    slug: "audit-trails-for-ai-agents-what-soc2-actually-requires",
    title: "Audit Trails for AI Agents: What SOC 2 Actually Requires",
    excerpt:
      "SOC 2 auditors are increasingly asking about AI agent activity — and most companies are not ready. Here is a precise breakdown of what the Trust Services Criteria demand from your AI audit infrastructure.",
    publishedAt: "2026-03-18",
    author: {
      name: "LookOver Team",
      role: "Compliance Engineering",
    },
    tags: ["SOC 2", "Compliance", "Audit Trails"],
    readTime: 9,
    content: `
<h2>The SOC 2 Audit is Catching Up to Agentic AI</h2>
<p>For the first three years of the enterprise generative AI boom, SOC 2 auditors largely treated AI systems as black boxes — interesting from a risk perspective, but not yet formally in scope for the Trust Services Criteria. That era is ending.</p>
<p>In 2025, the AICPA issued updated guidance clarifying that AI systems acting on behalf of an organization — particularly those with access to customer data, financial systems, or regulated infrastructure — are in scope for the Security, Availability, and Confidentiality Trust Services Criteria. Audit firms have updated their questionnaires accordingly. If your company deploys AI agents and holds a SOC 2 Type II certification, the next audit cycle will almost certainly include AI-specific inquiries.</p>
<p>Most engineering and compliance teams are not ready. This post breaks down exactly what the Trust Services Criteria require, translated into concrete infrastructure decisions for teams running agentic AI systems.</p>

<h2>The Relevant Trust Services Criteria</h2>
<p>SOC 2 is organized around the Trust Services Criteria (TSC), which map to five service commitments: Security (CC), Availability (A), Processing Integrity (PI), Confidentiality (C), and Privacy (P). For AI agents, the most directly relevant criteria fall under the Security category.</p>

<h3>CC6: Logical and Physical Access Controls</h3>
<p>CC6.1 requires that access to systems is restricted to authorized users, components, and programs. The "programs" qualifier is directly applicable to AI agents. Your controls must demonstrate that only authorized agents can access protected resources, and that this authorization is enforced and logged.</p>
<p>CC6.2 requires prior to issuing credentials to access systems, the completeness, accuracy, existence, and rights of the requesting entity are evaluated. For AI agents, this translates to a requirement that agent credentials are issued through a formal provisioning process — not ad-hoc, not via shared accounts — and that the agent's declared scope is evaluated before access is granted.</p>
<p>CC6.3 requires that access is removed when no longer needed. For agents, this means session-scoped credentials that expire at task completion, plus a process for deprovisioning agents that are retired or modified.</p>

<h3>CC7: System Operations</h3>
<p>CC7.2 requires monitoring system components for anomalies that might indicate malicious acts, natural disasters, or errors. Applied to AI agents, this means your monitoring must be capable of detecting anomalous agent behavior — actions outside the agent's declared scope, unusual access patterns, unexpected resource consumption — and alerting on deviations.</p>
<p>CC7.3 requires evaluating security events to determine whether they could or have resulted in a failure of the entity to meet its objectives. This requires a post-incident analysis capability. If an agent behaves unexpectedly, you need to be able to reconstruct exactly what it did, in what order, and with what authorization — which requires a complete, timestamped, attributed audit trail.</p>

<h3>CC8: Change Management</h3>
<p>CC8.1 requires that infrastructure and software changes are authorized, tested, and approved. For AI agents, model updates, prompt changes, and tool permission expansions are all changes that must go through this process. The audit evidence required is a record showing that each change was reviewed and approved before deployment.</p>

<h2>What a Compliant AI Audit Trail Looks Like</h2>
<p>The criteria above translate into a specific set of audit trail properties. An AI audit trail that satisfies SOC 2 requirements must be:</p>

<h3>Attributed</h3>
<p>Every action recorded in the audit log must be attributed to a specific, non-shared agent identity. Log entries like "service-account-12 called the payments API" do not satisfy CC6 if service-account-12 is shared among multiple agents or human processes. Each entry must be attributable to a specific agent instance executing a specific task.</p>

<h3>Complete</h3>
<p>The log must capture every action the agent takes that touches a protected resource. Sampling, aggregation, or selective logging is insufficient. SOC 2 auditors will ask: "If an agent exfiltrated customer PII, would you have a record of every read and every transmission?" The answer must be yes.</p>

<h3>Immutable</h3>
<p>Audit logs are only meaningful if they cannot be tampered with. This means logs must be written to a destination that the agent itself — and ideally the operator — cannot modify or delete. Cryptographic chaining (hash of each entry includes the hash of the prior entry) provides tamper-evidence. Write-once storage (object storage with object lock enabled, or an append-only database) provides tamper-resistance.</p>

<h3>Timestamped with Authoritative Time</h3>
<p>Log entries must carry timestamps from an authoritative time source that cannot be manipulated by the agent or its runtime environment. This is relevant for incident reconstruction: if timestamps are drawn from the agent's local clock, a compromised agent can falsify the temporal record.</p>

<h3>Queryable and Reportable</h3>
<p>An audit trail that exists but cannot be queried efficiently does not satisfy the audit evidence requirement. Auditors will ask for evidence demonstrating specific controls — for example, "show me all instances in the last 12 months where an agent accessed customer data outside business hours." If that query takes four days to run, the control is effectively non-functional. Your audit infrastructure must support time-bounded, identity-scoped, action-type-filtered queries with sub-minute response times.</p>

<h2>The Common Gaps</h2>
<p>Based on the audit inquiries that surfaced in 2025, the most common gaps in enterprise AI audit infrastructure are:</p>

<p><strong>Shared service accounts.</strong> As discussed above, this fails CC6.1 and CC6.2 directly. Every agent must have its own identity.</p>

<p><strong>Log forwarding without attribution.</strong> Many teams forward agent logs to a SIEM, but the logs themselves do not carry agent identity — they carry process IDs or container names that are not stable across invocations. Correlation is impossible at scale.</p>

<p><strong>No coverage of tool calls.</strong> Application-level logs capture what the agent said, but not what it did. If the agent called an external API, wrote to a database, or invoked a code execution tool, those actions must be independently logged at the infrastructure level — not just derived from the agent's self-reported output.</p>

<p><strong>Missing change management records for model updates.</strong> Model version updates are changes to a critical system component. They require a paper trail showing who authorized the update, what testing was performed, and what the rollback plan was. Most teams have no formal process for this.</p>

<p><strong>No anomaly detection.</strong> Audit trails are retrospective by default. CC7.2 requires prospective monitoring. Real-time anomaly detection on agent behavior — flagging actions outside declared scope or access patterns that deviate from baseline — is a distinct capability from logging, and one that most teams have not built.</p>

<h2>Preparing for Your Next Audit</h2>
<p>The practical readiness checklist for SOC 2 AI agent compliance:</p>
<ol>
  <li><strong>Agent inventory.</strong> Maintain a current registry of every AI agent running in production, its declared scope, its identity, and its data access permissions. Auditors will ask for this.</li>
  <li><strong>Per-agent credentials.</strong> Every agent has a unique, non-shared identity with credentials scoped to its declared function and lifetime.</li>
  <li><strong>Infrastructure-level logging.</strong> All agent-to-resource interactions are logged at the infrastructure layer — not just the application layer — with agent identity, resource identifier, action type, timestamp, and outcome.</li>
  <li><strong>Immutable log storage.</strong> Logs are written to append-only or write-once storage that the agent runtime cannot modify.</li>
  <li><strong>Queryable audit interface.</strong> Your team can produce a filtered audit report for any time window, agent, or resource within minutes.</li>
  <li><strong>Change management for models and prompts.</strong> Model updates and significant prompt changes go through a documented review and approval process with evidence retained.</li>
  <li><strong>Anomaly alerting.</strong> Real-time or near-real-time detection for agent actions outside declared scope, with escalation paths.</li>
</ol>
<p>None of these items require months of engineering work in isolation. But they do require deliberate infrastructure investment — infrastructure that most teams have not yet built, and that auditors are increasingly expecting to see.</p>
<p>The organizations that will sail through their 2026 SOC 2 audits are the ones building this foundation now, not the week before the audit window opens.</p>
    `.trim(),
  },
  {
    slug: "zero-trust-for-ai-agents-beyond-the-buzzword",
    title: "Zero Trust for AI Agents: Beyond the Buzzword",
    excerpt:
      "Zero trust is well-understood for human users and network perimeters. Applying it to AI agents — entities that act autonomously, spawn sub-agents, and operate across trust boundaries — requires a more precise framework.",
    publishedAt: "2026-03-10",
    author: {
      name: "LookOver Team",
      role: "Security Architecture",
    },
    tags: ["Zero Trust", "Security Architecture", "Agentic AI"],
    readTime: 8,
    content: `
<h2>Zero Trust Was Designed for Humans (and Networks). Agents Are Different.</h2>
<p>The zero-trust security model, formalized by John Kindervag at Forrester in 2010 and codified by NIST in SP 800-207, is built on a simple premise: never trust, always verify. Every access request — regardless of whether it originates inside or outside the network perimeter — must be authenticated, authorized, and continuously validated.</p>
<p>This model works extremely well for human users and static workloads. It works less well — in its current form — for autonomous AI agents, for three reasons that are structural, not incidental.</p>
<p>First, AI agents act at machine speed. A human user might make dozens of access requests per hour. An agent executing a complex multi-step task might make thousands. Traditional zero-trust implementations that involve human-in-the-loop verification or introduce meaningful latency per request will break agent workflows entirely.</p>
<p>Second, AI agents spawn other agents. A top-level orchestrator agent delegates to specialized sub-agents, which may in turn invoke tools, APIs, or further sub-agents. The chain of custody for authorization is non-linear and dynamic. A human user has one identity. An agent workflow may involve dozens of transient identities, each inheriting permissions from its parent in ways that must be controlled and auditable.</p>
<p>Third, AI agent behavior is stochastic. A human user generally does the same thing when they click the same button. An AI agent, depending on its model, context, and input, may take meaningfully different actions in response to the same starting conditions. This makes behavioral anomaly detection harder and static permission scopes less reliable as the sole control.</p>

<h2>The Five Pillars of Zero Trust, Applied to Agents</h2>
<p>NIST SP 800-207 identifies five core tenets of zero trust. Here is what each requires in the context of AI agent systems.</p>

<h3>1. All data sources and computing services are considered resources</h3>
<p>For agents, this means every tool the agent can invoke — not just traditional IT resources like files and APIs, but language model inference endpoints, code execution environments, web browsing capabilities, and external service integrations — must be treated as a protected resource requiring authorization.</p>
<p>Most agent security frameworks stop at API access. A genuine zero-trust implementation covers the full tool surface: every capability the agent can exercise is a resource, and access to that resource is governed by explicit policy.</p>

<h3>2. All communication is secured regardless of network location</h3>
<p>Agent-to-tool communication must be encrypted and authenticated regardless of whether it traverses a network boundary. An agent calling a function running in the same container should be held to the same communication security standard as an agent calling an external API. This prevents lateral movement: a compromised component in the agent's execution environment cannot leverage implicit trust to escalate its access.</p>

<h3>3. Access to individual resources is granted on a per-session basis</h3>
<p>This is where most agent deployments deviate most significantly from zero-trust principles. Long-lived credentials that persist across agent sessions violate this tenet directly. A proper implementation issues credentials scoped to the specific task, valid for the duration of the task, and automatically expired at task completion. The agent is re-authorized on each new task invocation — it cannot carry forward permissions from a prior session.</p>

<h3>4. Access is determined by dynamic policy</h3>
<p>Static role assignments are insufficient for agent systems where behavior is context-dependent. A dynamic policy engine evaluates each access request against the agent's current context: what task is it executing, what data has it already accessed, what is its declared purpose, and does this specific action fall within that purpose?</p>
<p>This is the principle behind attribute-based access control (ABAC) as applied to agents. Rather than "agent-type-X can access resource-Y," the policy is "agent-type-X executing task-class-Z may access resource-Y when the data sensitivity is below threshold-T and the action type is read-only." The richness of the policy is what makes zero trust meaningful rather than theatrical.</p>

<h3>5. All assets are monitored and measured for integrity and security posture</h3>
<p>For agents, this means continuous telemetry on every action taken, fed into a real-time analysis pipeline that can detect deviations from expected behavior. The monitoring must cover not just "did the agent authenticate successfully" but "is the agent's behavior consistent with its declared purpose, its historical baseline, and the current policy?"</p>

<h2>The Sub-Agent Authorization Problem</h2>
<p>The most architecturally complex challenge in applying zero trust to agent systems is the delegation chain. When an orchestrator agent spawns a sub-agent, the sub-agent needs authorization to act. There are three common approaches, with very different security properties.</p>

<h3>Approach 1: Credential Forwarding (Dangerous)</h3>
<p>The orchestrator passes its own credentials to the sub-agent. The sub-agent operates with the orchestrator's full permissions. This is the simplest implementation and the most dangerous: it violates least-privilege completely and means a compromised sub-agent has the full blast radius of the orchestrator.</p>

<h3>Approach 2: Ambient Authority (Fragile)</h3>
<p>The sub-agent operates under an ambient authorization context inherited from the orchestrator, without explicit credential passing. This avoids credential exposure but creates an implicit trust assumption: the authorization framework trusts that any agent operating within the orchestrator's workflow is authorized to take any action the orchestrator could take. This is vulnerable to prompt injection attacks that convince a sub-agent it has been delegated permissions it was never explicitly granted.</p>

<h3>Approach 3: Scoped Delegation Tokens (Correct)</h3>
<p>The orchestrator requests a delegation token from an authorization service, specifying the sub-agent's identity and the restricted permission scope it should operate under. The sub-agent receives a token that is both narrower than the orchestrator's permissions (least-privilege delegation) and cryptographically bound to the sub-agent's identity (preventing forgery). This is the zero-trust-correct approach: every entity in the chain has an explicit, limited, verifiable authorization context.</p>
<p>Scoped delegation tokens are more complex to implement but they are the only approach that maintains zero-trust properties through multi-agent workflows. The orchestrator cannot grant permissions it does not hold (no privilege escalation), the sub-agent cannot exceed its delegated scope (containment), and the entire delegation chain is auditable (accountability).</p>

<h2>Prompt Injection as a Zero Trust Violation</h2>
<p>No discussion of zero trust for AI agents is complete without addressing prompt injection — the class of attack where an adversary embeds instructions in data the agent processes, hijacking the agent's behavior.</p>
<p>From a zero-trust perspective, prompt injection is a trust boundary violation. The agent is treating instructions embedded in untrusted data (a webpage, a document, an email) with the same authority as instructions from its authorized principal (the operator). Zero trust demands that the source of every instruction be verified against policy before it is acted upon.</p>
<p>The architectural defense is an instruction authority model: the agent is trained or prompted to distinguish between authorized instruction sources (its system prompt, the operator's tool definitions) and data sources (everything it reads or receives as external input). Instructions from data sources are not executed without explicit operator authorization. This is a form of access control applied to the agent's instruction-following behavior, and it is as essential to zero-trust agent security as network-level access controls are to traditional zero trust.</p>

<h2>Practical Implementation Priorities</h2>
<p>For engineering teams moving from zero-trust aspiration to zero-trust implementation in agent systems, the highest-leverage investments in order of impact are:</p>
<ol>
  <li><strong>Per-agent identity with short-lived credentials.</strong> This is the foundation. Nothing else works without it.</li>
  <li><strong>Scoped delegation for multi-agent workflows.</strong> Any system with orchestrator/sub-agent patterns needs this before it scales.</li>
  <li><strong>Infrastructure-level authorization gateway.</strong> A sidecar or proxy that intercepts all agent-to-resource calls, evaluates policy, and logs the decision. This gives you enforcement and auditability in one component.</li>
  <li><strong>Behavioral anomaly detection.</strong> Real-time monitoring against the agent's declared scope. Start with simple heuristics (resource type mismatch, volume anomalies) before investing in ML-based detection.</li>
  <li><strong>Instruction authority model in agent design.</strong> Address prompt injection at the architectural level, not just with input sanitization.</li>
</ol>
<p>Zero trust for AI agents is not a product you buy — it is an architecture you design. The agents that operate with this architecture are not just more secure; they are more trustworthy, more governable, and more ready for the enterprise scrutiny that agentic AI systems will increasingly face.</p>
    `.trim(),
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const sharedTags = p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, score: sharedTags };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.publishedAt).getTime() - new Date(a.post.publishedAt).getTime())
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
