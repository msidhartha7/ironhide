import type { AuthorSlug } from "./authors";
import { DEFAULT_AUTHOR_SLUG } from "./authors";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date string e.g. "2026-03-20"
  author: {
    slug: AuthorSlug;
    name: string;
    role: string;
  };
  tags: string[];
  readTime: number; // minutes
  content: string; // markdown/HTML string rendered via dangerouslySetInnerHTML or a renderer
  coverImage?: string; // optional path relative to /public
};

// ---------------------------------------------------------------------------
// Post registry - add new posts here in reverse chronological order
// ---------------------------------------------------------------------------

const posts: BlogPost[] = [
  {
    slug: "eu-ai-act-high-risk-classification",
    title: "Your AI Agent Is Probably High-Risk. You Just Don't Know It Yet.",
    excerpt:
      "125 days until the EU AI Act applies to production AI systems - and most teams deploying agents haven't done the one thing they need to do first: check if they're classified as high-risk under Annex III.",
    publishedAt: "2026-03-30",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Policy & Compliance",
    },
    tags: ["EU AI Act", "Compliance", "Agentic AI", "Risk"],
    readTime: 8,
    coverImage: "/blog/eu-ai-act-high-risk-classification.png",
    content: `
<h2>The Deadline That Most Engineering Teams Are Ignoring</h2>
<p>On August 2, 2026, the EU AI Act's obligations for high-risk AI systems come into full effect. That is approximately 125 days from now. By that date, any AI system classified as high-risk under the Act must have completed a conformity assessment, maintained technical documentation, implemented human oversight measures, and established logging and audit trail infrastructure sufficient to satisfy regulators.</p>
<p>Most enterprise teams deploying AI agents in 2026 have not done the one thing that determines whether any of those obligations apply to them: they have not checked whether their systems are classified as high-risk under Annex III.</p>
<p>"Enforcement" here is not hypothetical. The Act establishes national market surveillance authorities in every EU member state with the power to request documentation, suspend non-compliant systems, and issue fines of up to €30 million or 6% of global annual turnover - whichever is higher. The legal exposure is real. The compliance window is closing.</p>
<p>This post is not a comprehensive legal guide. It is a technical briefing for the CTOs, security engineers, and compliance leads who need to determine, right now, whether their agents are in scope - and what being in scope actually demands of their infrastructure.</p>

<h2>What Annex III Actually Covers</h2>
<p>Article 6 of the EU AI Act establishes that an AI system is high-risk if it falls within the domains listed in Annex III. The eight Annex III categories are precise and broader than most teams assume:</p>
<ul>
  <li><strong>Biometrics and facial recognition</strong> - systems that identify, categorize, or verify natural persons based on biometric data.</li>
  <li><strong>Critical infrastructure management</strong> - systems used as safety components in water, gas, heating, electricity, and digital infrastructure.</li>
  <li><strong>Education and vocational training</strong> - systems that determine access to educational institutions or evaluate students.</li>
  <li><strong>Employment and worker management</strong> - systems used in recruitment, candidate screening, performance evaluation, promotion, or termination decisions.</li>
  <li><strong>Access to essential services</strong> - systems involved in creditworthiness evaluation, insurance pricing, public benefits eligibility, or emergency service dispatch.</li>
  <li><strong>Law enforcement</strong> - systems used by competent authorities for risk assessment of individuals, polygraph-equivalent tools, and crime prediction systems.</li>
  <li><strong>Migration and border control</strong> - systems used to assess asylum claims, visa applications, and border crossing risk.</li>
  <li><strong>Administration of justice</strong> - systems that assist judicial authorities in researching and interpreting facts and law, or applying the law to specific cases.</li>
</ul>
<p>Article 3(1) defines an AI system broadly: anything that "generates outputs such as predictions, recommendations, decisions or content that influence real or virtual environments." That definition is intentionally wide. An agent that recommends candidates for a job posting, scores loan applications, flags transactions as potentially fraudulent, or determines a customer's insurance tier is an AI system generating outputs that influence real decisions. The question is not whether your agent is an "AI system" - it almost certainly is. The question is which Annex III category it touches.</p>

<h2>Concrete Examples: Which Agents Fall Where</h2>
<p>Abstract category names obscure the practical mapping. Here is how common enterprise AI agent deployments map to Annex III:</p>

<h3>HR Screening and Talent Agents → Employment and Worker Management</h3>
<p>Any agent that parses resumes, ranks candidates, schedules interviews based on profile scoring, or flags employees for performance review is operating squarely within Annex III category 4. This includes agents integrated into ATS platforms, Workday automations, or custom recruitment pipelines. The category applies whether the agent makes a final decision or merely generates a ranked shortlist that a human reviews - recommendations that meaningfully influence real decisions are in scope.</p>

<h3>Loan Decisioning and Credit Agents → Access to Essential Services</h3>
<p>Any agent that evaluates creditworthiness, generates a credit score input, determines loan eligibility, or prices insurance risk is in Annex III category 5. This captures fintech lenders, embedded credit products, and any bank or insurance company using AI to pre-qualify applicants. The "essential services" framing is explicit: credit and insurance are enumerated by name in the Act's recitals.</p>

<h3>Fraud Detection Agents in Regulated Sectors → Law Enforcement-Adjacent</h3>
<p>This is where teams most often miscalculate their exposure. Annex III category 6 (law enforcement) applies to systems used by "competent authorities" - meaning public law enforcement agencies. A fraud detection agent operated by a private bank is not directly in this category. However, the Act also captures systems used by private entities "on behalf of" law enforcement, and financial institutions subject to AML obligations occupy ambiguous territory here. More directly, fraud detection agents that produce risk scores influencing access to accounts or services may fall into category 5 (essential services) regardless of the law enforcement framing.</p>

<h3>Student Assessment and Admissions Agents → Education and Vocational Training</h3>
<p>Any agent that evaluates exam submissions, generates student performance assessments, or ranks applicants for educational programs is in Annex III category 3. This includes agents used by EdTech platforms, universities automating admissions screening, and corporate L&D tools that gate employees' advancement based on training performance.</p>

<h2>How Article 6 Determines High-Risk Status</h2>
<p>Falling within an Annex III domain does not automatically make a system high-risk - Article 6 applies two additional tests that narrow the scope.</p>
<p>The first is the <strong>"safety component" or "standalone product" test</strong>. An AI system is high-risk if it is either: (a) a safety component of a product already subject to EU harmonization legislation (machinery, medical devices, civil aviation, etc.), or (b) the AI system itself is a standalone product subject to third-party conformity assessment under that same harmonization legislation. This catches AI embedded in regulated physical products but is less relevant for most software-only agent deployments.</p>
<p>The second and more practically significant path is the direct Annex III classification. If your system operates in one of the eight domains and meets the domain-specific criteria, it is high-risk regardless of the product test. Article 6(2) makes this independent path explicit.</p>
<p>One important limiting principle: Article 6(3) provides that an AI system intended to perform a narrow procedural task, review decisions already made by humans, detect decision-making patterns, or perform preparatory tasks may be excluded from high-risk classification even if it operates in an Annex III domain. This exclusion is narrow and fact-specific. An agent that merely reformats data for human review is meaningfully different from one that generates a risk score that a human rubber-stamps. The distinction requires careful legal analysis - but it is a real out for systems that genuinely function as decision-support infrastructure with meaningful human review.</p>

<h2>What High-Risk Classification Actually Requires</h2>
<p>If your system is high-risk, the obligations are substantive. They are not checkbox compliance - they require real infrastructure investment.</p>

<h3>Conformity Assessment</h3>
<p>Before deploying a high-risk system, you must complete a conformity assessment demonstrating that the system meets the Act's requirements. For most systems, this is self-assessment - but it must be documented and auditable. The assessment must be updated whenever the system undergoes a substantial modification.</p>

<h3>Technical Documentation</h3>
<p>Article 11 and Annex IV define the required technical documentation: a general description of the system and its intended purpose, a description of the development process including training data and methodology, information on human oversight measures, a description of the risk management process, and the results of testing performed before deployment. This documentation must be maintained and made available to national authorities on request.</p>

<h3>Human Oversight Measures</h3>
<p>Article 14 requires that high-risk systems be designed to allow natural persons to effectively oversee the system's operation during its use. This means the system must be interpretable enough that a human can understand what it is doing, intervene when necessary, and override its outputs. For autonomous agents, this is a design constraint: fully automated decisions with no human review mechanism are non-compliant for high-risk classifications.</p>

<h3>Logging and Audit Trail Obligations</h3>
<p>Article 12 requires that high-risk AI systems automatically log events throughout their operation with a level of detail sufficient to identify situations giving rise to risks. The logs must allow for post-market monitoring, incident reconstruction, and demonstration of compliance with oversight requirements. Critically, the logs must capture enough information to determine what the system did, when, on what input, and with what output - for the lifetime of the system or at minimum several years post-deployment.</p>

<h2>The Identity Gap That Makes Compliance Impossible</h2>
<p>Here is the practical problem that most teams will encounter when they begin their conformity assessment: they cannot answer the most basic audit question - <em>what did this agent do and why?</em></p>
<p>Article 12's logging obligations are not satisfied by application-level logs that record "the agent processed a request and returned a result." They require attribution: which agent instance acted, on which input, producing which output, at which timestamp, under whose authorization. For multi-agent systems - where an orchestrator delegates to sub-agents that invoke tools - the attribution chain must be complete across every step of every workflow.</p>
<p>Most production agent deployments today fail this requirement structurally, not just operationally. Agents operate under shared service accounts that make per-agent attribution impossible. Tool calls are not logged independently of the agent's self-reported output. Workflow chains have no cryptographic integrity linking each step to the next. There is no way to reconstruct what happened in a specific agent invocation six months after the fact.</p>
<p>This is the identity gap. It is not a documentation problem - it is an infrastructure problem. Satisfying Article 12 requires per-agent identity, infrastructure-level logging of every tool call and resource access, and an immutable audit trail that survives the agent's runtime. It requires knowing not just that your agent accessed a dataset, but which agent instance, under what authorization scope, at what exact time, producing what specific output.</p>
<p>This is precisely the infrastructure that identity-first authorization for AI agents provides: a stable, verifiable identity for each agent, an authorization layer that controls and records every action the agent takes, and an audit trail that gives you the complete, attributable record that high-risk compliance demands.</p>

<h2>The First Thing to Do Today</h2>
<p>Before technical documentation, before conformity assessment, before any of the downstream obligations - the first step is a straightforward mapping exercise.</p>
<ol>
  <li><strong>Enumerate every AI agent running in production.</strong> Not just the flagship product agents - the internal automation agents, the data pipeline agents, the HR tooling integrations, the customer-facing decisioning systems.</li>
  <li><strong>Map each agent to Annex III categories.</strong> For each agent, ask: what domain does this system operate in? Does it generate outputs that influence decisions about individuals in one of the eight categories? If yes, flag it for high-risk analysis.</li>
  <li><strong>Apply the Article 6(3) exclusion test.</strong> For each flagged system, assess whether it genuinely performs only preparatory or procedural tasks with meaningful human review. Document the reasoning either way.</li>
  <li><strong>Assess your current logging and identity infrastructure against Article 12.</strong> Can you answer, for each flagged agent, "what did this system do and why" for any specific invocation in the past 12 months? If not, that gap is your highest-priority technical remediation.</li>
</ol>
<p>The 125-day window is real. The fines are real. The national authorities conducting market surveillance are operational. The teams that will be ready in August 2026 are the ones starting this mapping exercise now - not the week before the deadline.</p>
<p>If your agents are in scope and your audit infrastructure is not, the answer is not to slow down your AI deployment. It is to build the identity and authorization layer that makes your agents governable. That is a solvable engineering problem. It just needs to start today.</p>
    `.trim(),
  },
  {
    slug: "why-every-ai-agent-needs-an-identity",
    title: "Why Every AI Agent Needs an Identity",
    excerpt:
      "Autonomous agents can read files, call APIs, and modify databases - all without a human in the loop. Without a stable, verifiable identity attached to each agent, your audit trail is fiction and your blast radius is unlimited.",
    publishedAt: "2026-03-25",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Platform Engineering",
    },
    tags: ["Identity", "Agentic AI", "Zero Trust"],
    readTime: 7,
    content: `
<h2>The Agent Proliferation Problem</h2>
<p>In 2025, the number of autonomous AI agents running in production environments crossed a threshold that most enterprise security teams were not ready for. According to Gartner's 2025 AI Infrastructure Survey, 62 percent of enterprises deploying generative AI reported having more AI agents interacting with internal systems than human employees - yet fewer than one in five had a formal identity management strategy covering those agents.</p>
<p>The consequences are predictable. When an agent exfiltrates sensitive data, overwrites a critical record, or triggers an unintended workflow, security teams are left asking the same question: <em>which agent did this, under whose authorization, and why did we let it?</em></p>
<p>The answer, almost universally, is that the agent had no stable identity. It operated under a shared service account, a long-lived API key checked into a repository, or simply the credentials of the developer who provisioned it. The agent was invisible to the audit trail.</p>

<h2>What "Agent Identity" Actually Means</h2>
<p>Human identity in enterprise systems is well-understood. A person has a username, belongs to groups, holds roles, and every action they take is attributed to that identity. Revocation, rotation, and principle-of-least-privilege are standard practices enforced by IAM platforms built over decades.</p>
<p>AI agent identity requires the same primitives - but with properties that reflect how agents actually behave:</p>
<ul>
  <li><strong>Workload-scoped credentials</strong>: An agent's identity should be bound to its specific task context, not to a human operator or a generic service account. An agent summarizing customer support tickets should not share credentials with an agent processing financial transactions.</li>
  <li><strong>Short-lived tokens</strong>: Agents often run in ephemeral compute environments. Long-lived credentials that outlast a task create unnecessary exposure. Identity tokens should be scoped to the agent's session and expire when the session ends.</li>
  <li><strong>Cryptographic attestation</strong>: In a zero-trust architecture, an agent claiming an identity is not sufficient. The claim must be backed by a cryptographic proof that ties the credential to the specific workload, runtime, and invocation context.</li>
  <li><strong>Immutable lineage</strong>: Agents spawn sub-agents, delegate to tools, and chain through multi-step workflows. Each step in that chain must carry a verifiable identity token so the entire execution graph is attributable and auditable.</li>
</ul>

<h2>Why Shared Credentials Are the Root Cause of Most Agent Security Incidents</h2>
<p>The operational shortcut that causes the most damage is the shared service account. It is understandable why teams reach for it: provisioning a unique identity per agent adds friction, especially when agent definitions change rapidly during development. But the security debt it creates is severe.</p>
<p>Consider a real-world scenario that played out at several financial services firms in 2025: a coding assistant agent with access to an internal GitHub org was granted write permissions via a shared CI/CD service account. The same account was used by fifteen other automated processes. When the agent's behavior changed - due to a model update that altered its tool-calling patterns - it began committing to repositories outside its intended scope. The incident took four days to detect and six days to remediate, because there was no way to distinguish the agent's writes from legitimate CI/CD activity in the audit log.</p>
<p>With per-agent identities, this is a 30-second detection: every write is attributed to the specific agent identity, policy enforcement fires immediately when the agent touches a resource outside its declared scope, and revocation is surgical - the compromised agent's identity is invalidated without touching the 15 other processes.</p>

<h2>The NIST AI RMF and the Identity Gap</h2>
<p>NIST's AI Risk Management Framework (AI RMF 1.0) explicitly calls out accountability and traceability as core properties of trustworthy AI systems. The GOVERN function within the framework requires organizations to establish policies for how AI systems are authorized to act, and the MEASURE function requires ongoing monitoring that can only be meaningful if actions are attributable to specific systems.</p>
<p>The AI RMF does not prescribe how to implement identity - that is appropriately left to the organization. But it is unambiguous that an AI system whose actions cannot be attributed to a specific, authorized entity fails the accountability requirement. Shared credentials and anonymous service accounts are, by definition, non-compliant with this requirement.</p>
<p>Regulators are starting to notice. The EU AI Act's requirements for high-risk systems include audit trail obligations that will be difficult to satisfy without per-agent identity infrastructure. Early guidance from the UK's ICO on automated decision-making systems similarly emphasizes the need for traceable attribution.</p>

<h2>Designing an Identity-First Agent Architecture</h2>
<p>The architectural pattern that most reliably solves this problem follows three principles:</p>

<h3>1. Identity at Provisioning, Not at Runtime</h3>
<p>An agent's identity should be established when the agent is defined, not when it is invoked. This means the agent manifest - the document that describes what the agent does, what tools it can call, what data it can access - is also the identity registration document. When the manifest changes, the identity is reissued. This creates a direct link between the agent's declared behavior and its authorization scope.</p>

<h3>2. Policy as the Authorization Layer</h3>
<p>Identity alone is not authorization. An agent knowing "I am agent-id-7a3f" does not tell the system what agent-id-7a3f is allowed to do. The identity must be paired with a policy engine that evaluates every action against a declared permission set. This policy should be written in a human-readable format (YAML or similar) that is version-controlled alongside the agent definition, making authorization scope auditable over time.</p>

<h3>3. Continuous Verification, Not Just Initial Authentication</h3>
<p>Zero-trust principles dictate that a single authentication event at agent startup is insufficient. Every significant action - every API call, every file write, every tool invocation - should be evaluated against current policy in real time. This requires a lightweight authorization sidecar or gateway that sits between the agent and the resources it accesses, evaluating and recording every interaction.</p>

<h2>The Audit Trail Dividend</h2>
<p>The immediate benefit of per-agent identity is security. But the compounding benefit - the one that security-conscious engineering leaders often underestimate - is the audit trail.</p>
<p>When every agent action is attributed to a specific identity, scoped to a specific task, and recorded with a cryptographic timestamp, you gain something invaluable: a complete, tamper-proof record of what every agent in your system did, when it did it, and under what authorization. This is the foundation of compliance reporting for SOC 2, HIPAA, and the emerging AI-specific frameworks. It is also the foundation of incident response - when something goes wrong, the blast radius is immediately knowable and the attribution is immediate.</p>
<p>The teams that invest in agent identity infrastructure today are not just reducing risk. They are building the observability layer that will make their AI systems auditable, governable, and trustworthy at enterprise scale.</p>

<h2>Getting Started</h2>
<p>If your organization is running AI agents in production without per-agent identity, the path forward does not require a complete infrastructure overhaul. Start with the highest-risk agents - those with write access to sensitive systems - and apply the following:</p>
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
      "SOC 2 auditors are increasingly asking about AI agent activity - and most companies are not ready. Here is a precise breakdown of what the Trust Services Criteria demand from your AI audit infrastructure.",
    publishedAt: "2026-03-18",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Compliance Engineering",
    },
    tags: ["SOC 2", "Compliance", "Audit Trails"],
    readTime: 9,
    content: `
<h2>The SOC 2 Audit is Catching Up to Agentic AI</h2>
<p>For the first three years of the enterprise generative AI boom, SOC 2 auditors largely treated AI systems as black boxes - interesting from a risk perspective, but not yet formally in scope for the Trust Services Criteria. That era is ending.</p>
<p>In 2025, the AICPA issued updated guidance clarifying that AI systems acting on behalf of an organization - particularly those with access to customer data, financial systems, or regulated infrastructure - are in scope for the Security, Availability, and Confidentiality Trust Services Criteria. Audit firms have updated their questionnaires accordingly. If your company deploys AI agents and holds a SOC 2 Type II certification, the next audit cycle will almost certainly include AI-specific inquiries.</p>
<p>Most engineering and compliance teams are not ready. This post breaks down exactly what the Trust Services Criteria require, translated into concrete infrastructure decisions for teams running agentic AI systems.</p>

<h2>The Relevant Trust Services Criteria</h2>
<p>SOC 2 is organized around the Trust Services Criteria (TSC), which map to five service commitments: Security (CC), Availability (A), Processing Integrity (PI), Confidentiality (C), and Privacy (P). For AI agents, the most directly relevant criteria fall under the Security category.</p>

<h3>CC6: Logical and Physical Access Controls</h3>
<p>CC6.1 requires that access to systems is restricted to authorized users, components, and programs. The "programs" qualifier is directly applicable to AI agents. Your controls must demonstrate that only authorized agents can access protected resources, and that this authorization is enforced and logged.</p>
<p>CC6.2 requires prior to issuing credentials to access systems, the completeness, accuracy, existence, and rights of the requesting entity are evaluated. For AI agents, this translates to a requirement that agent credentials are issued through a formal provisioning process - not ad-hoc, not via shared accounts - and that the agent's declared scope is evaluated before access is granted.</p>
<p>CC6.3 requires that access is removed when no longer needed. For agents, this means session-scoped credentials that expire at task completion, plus a process for deprovisioning agents that are retired or modified.</p>

<h3>CC7: System Operations</h3>
<p>CC7.2 requires monitoring system components for anomalies that might indicate malicious acts, natural disasters, or errors. Applied to AI agents, this means your monitoring must be capable of detecting anomalous agent behavior - actions outside the agent's declared scope, unusual access patterns, unexpected resource consumption - and alerting on deviations.</p>
<p>CC7.3 requires evaluating security events to determine whether they could or have resulted in a failure of the entity to meet its objectives. This requires a post-incident analysis capability. If an agent behaves unexpectedly, you need to be able to reconstruct exactly what it did, in what order, and with what authorization - which requires a complete, timestamped, attributed audit trail.</p>

<h3>CC8: Change Management</h3>
<p>CC8.1 requires that infrastructure and software changes are authorized, tested, and approved. For AI agents, model updates, prompt changes, and tool permission expansions are all changes that must go through this process. The audit evidence required is a record showing that each change was reviewed and approved before deployment.</p>

<h2>What a Compliant AI Audit Trail Looks Like</h2>
<p>The criteria above translate into a specific set of audit trail properties. An AI audit trail that satisfies SOC 2 requirements must be:</p>

<h3>Attributed</h3>
<p>Every action recorded in the audit log must be attributed to a specific, non-shared agent identity. Log entries like "service-account-12 called the payments API" do not satisfy CC6 if service-account-12 is shared among multiple agents or human processes. Each entry must be attributable to a specific agent instance executing a specific task.</p>

<h3>Complete</h3>
<p>The log must capture every action the agent takes that touches a protected resource. Sampling, aggregation, or selective logging is insufficient. SOC 2 auditors will ask: "If an agent exfiltrated customer PII, would you have a record of every read and every transmission?" The answer must be yes.</p>

<h3>Immutable</h3>
<p>Audit logs are only meaningful if they cannot be tampered with. This means logs must be written to a destination that the agent itself - and ideally the operator - cannot modify or delete. Cryptographic chaining (hash of each entry includes the hash of the prior entry) provides tamper-evidence. Write-once storage (object storage with object lock enabled, or an append-only database) provides tamper-resistance.</p>

<h3>Timestamped with Authoritative Time</h3>
<p>Log entries must carry timestamps from an authoritative time source that cannot be manipulated by the agent or its runtime environment. This is relevant for incident reconstruction: if timestamps are drawn from the agent's local clock, a compromised agent can falsify the temporal record.</p>

<h3>Queryable and Reportable</h3>
<p>An audit trail that exists but cannot be queried efficiently does not satisfy the audit evidence requirement. Auditors will ask for evidence demonstrating specific controls - for example, "show me all instances in the last 12 months where an agent accessed customer data outside business hours." If that query takes four days to run, the control is effectively non-functional. Your audit infrastructure must support time-bounded, identity-scoped, action-type-filtered queries with sub-minute response times.</p>

<h2>The Common Gaps</h2>
<p>Based on the audit inquiries that surfaced in 2025, the most common gaps in enterprise AI audit infrastructure are:</p>

<p><strong>Shared service accounts.</strong> As discussed above, this fails CC6.1 and CC6.2 directly. Every agent must have its own identity.</p>

<p><strong>Log forwarding without attribution.</strong> Many teams forward agent logs to a SIEM, but the logs themselves do not carry agent identity - they carry process IDs or container names that are not stable across invocations. Correlation is impossible at scale.</p>

<p><strong>No coverage of tool calls.</strong> Application-level logs capture what the agent said, but not what it did. If the agent called an external API, wrote to a database, or invoked a code execution tool, those actions must be independently logged at the infrastructure level - not just derived from the agent's self-reported output.</p>

<p><strong>Missing change management records for model updates.</strong> Model version updates are changes to a critical system component. They require a paper trail showing who authorized the update, what testing was performed, and what the rollback plan was. Most teams have no formal process for this.</p>

<p><strong>No anomaly detection.</strong> Audit trails are retrospective by default. CC7.2 requires prospective monitoring. Real-time anomaly detection on agent behavior - flagging actions outside declared scope or access patterns that deviate from baseline - is a distinct capability from logging, and one that most teams have not built.</p>

<h2>Preparing for Your Next Audit</h2>
<p>The practical readiness checklist for SOC 2 AI agent compliance:</p>
<ol>
  <li><strong>Agent inventory.</strong> Maintain a current registry of every AI agent running in production, its declared scope, its identity, and its data access permissions. Auditors will ask for this.</li>
  <li><strong>Per-agent credentials.</strong> Every agent has a unique, non-shared identity with credentials scoped to its declared function and lifetime.</li>
  <li><strong>Infrastructure-level logging.</strong> All agent-to-resource interactions are logged at the infrastructure layer - not just the application layer - with agent identity, resource identifier, action type, timestamp, and outcome.</li>
  <li><strong>Immutable log storage.</strong> Logs are written to append-only or write-once storage that the agent runtime cannot modify.</li>
  <li><strong>Queryable audit interface.</strong> Your team can produce a filtered audit report for any time window, agent, or resource within minutes.</li>
  <li><strong>Change management for models and prompts.</strong> Model updates and significant prompt changes go through a documented review and approval process with evidence retained.</li>
  <li><strong>Anomaly alerting.</strong> Real-time or near-real-time detection for agent actions outside declared scope, with escalation paths.</li>
</ol>
<p>None of these items require months of engineering work in isolation. But they do require deliberate infrastructure investment - infrastructure that most teams have not yet built, and that auditors are increasingly expecting to see.</p>
<p>The organizations that will sail through their 2026 SOC 2 audits are the ones building this foundation now, not the week before the audit window opens.</p>
    `.trim(),
  },
  {
    slug: "zero-trust-for-ai-agents-beyond-the-buzzword",
    title: "Zero Trust for AI Agents: Beyond the Buzzword",
    excerpt:
      "Zero trust is well-understood for human users and network perimeters. Applying it to AI agents - entities that act autonomously, spawn sub-agents, and operate across trust boundaries - requires a more precise framework.",
    publishedAt: "2026-03-10",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Security Architecture",
    },
    tags: ["Zero Trust", "Security Architecture", "Agentic AI"],
    readTime: 8,
    content: `
<h2>Zero Trust Was Designed for Humans (and Networks). Agents Are Different.</h2>
<p>The zero-trust security model, formalized by John Kindervag at Forrester in 2010 and codified by NIST in SP 800-207, is built on a simple premise: never trust, always verify. Every access request - regardless of whether it originates inside or outside the network perimeter - must be authenticated, authorized, and continuously validated.</p>
<p>This model works extremely well for human users and static workloads. It works less well - in its current form - for autonomous AI agents, for three reasons that are structural, not incidental.</p>
<p>First, AI agents act at machine speed. A human user might make dozens of access requests per hour. An agent executing a complex multi-step task might make thousands. Traditional zero-trust implementations that involve human-in-the-loop verification or introduce meaningful latency per request will break agent workflows entirely.</p>
<p>Second, AI agents spawn other agents. A top-level orchestrator agent delegates to specialized sub-agents, which may in turn invoke tools, APIs, or further sub-agents. The chain of custody for authorization is non-linear and dynamic. A human user has one identity. An agent workflow may involve dozens of transient identities, each inheriting permissions from its parent in ways that must be controlled and auditable.</p>
<p>Third, AI agent behavior is stochastic. A human user generally does the same thing when they click the same button. An AI agent, depending on its model, context, and input, may take meaningfully different actions in response to the same starting conditions. This makes behavioral anomaly detection harder and static permission scopes less reliable as the sole control.</p>

<h2>The Five Pillars of Zero Trust, Applied to Agents</h2>
<p>NIST SP 800-207 identifies five core tenets of zero trust. Here is what each requires in the context of AI agent systems.</p>

<h3>1. All data sources and computing services are considered resources</h3>
<p>For agents, this means every tool the agent can invoke - not just traditional IT resources like files and APIs, but language model inference endpoints, code execution environments, web browsing capabilities, and external service integrations - must be treated as a protected resource requiring authorization.</p>
<p>Most agent security frameworks stop at API access. A genuine zero-trust implementation covers the full tool surface: every capability the agent can exercise is a resource, and access to that resource is governed by explicit policy.</p>

<h3>2. All communication is secured regardless of network location</h3>
<p>Agent-to-tool communication must be encrypted and authenticated regardless of whether it traverses a network boundary. An agent calling a function running in the same container should be held to the same communication security standard as an agent calling an external API. This prevents lateral movement: a compromised component in the agent's execution environment cannot leverage implicit trust to escalate its access.</p>

<h3>3. Access to individual resources is granted on a per-session basis</h3>
<p>This is where most agent deployments deviate most significantly from zero-trust principles. Long-lived credentials that persist across agent sessions violate this tenet directly. A proper implementation issues credentials scoped to the specific task, valid for the duration of the task, and automatically expired at task completion. The agent is re-authorized on each new task invocation - it cannot carry forward permissions from a prior session.</p>

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
<p>No discussion of zero trust for AI agents is complete without addressing prompt injection - the class of attack where an adversary embeds instructions in data the agent processes, hijacking the agent's behavior.</p>
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
  {
    slug: "ai-agent-audit-trail-implementation-guide",
    title: "AI Agent Audit Trail Implementation Guide",
    excerpt:
      "A practical rollout guide for teams that need attributable logs, policy context, and exportable evidence for production AI agents.",
    publishedAt: "2026-04-30",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Implementation Guidance",
    },
    tags: ["Audit Trails", "Implementation Guide", "Agentic AI"],
    readTime: 8,
    content: `
<h2>Start With One Agent Workflow, Not Your Entire Estate</h2>
<p>The fastest way to deploy AI agent audit trails is to choose one workflow that already creates operational pressure: a customer-facing support agent, a coding agent with write access, or an internal agent that touches regulated data. Teams that try to instrument every workflow at once usually spend their first month arguing about abstractions instead of shipping usable evidence.</p>
<p>A better pattern is to define one workflow boundary, one set of protected systems, and one output format that security and compliance teams can inspect. That gives you a pilot that can be evaluated in production conditions.</p>

<h2>What an Audit Trail Has to Capture</h2>
<p>At minimum, every event in the trail needs five properties: which agent identity acted, what resource or tool it touched, what action was attempted, when it happened, and what the result was. If you cannot answer those five questions for an event, you do not yet have an audit trail. You have a debug log.</p>
<p>The next layer is policy context. Teams eventually need to know not only that an agent called a system, but whether that action was allowed, what policy or scope was evaluated, and whether the event should have triggered review.</p>

<h2>The Four-Step Rollout Pattern</h2>
<ol>
  <li><strong>Assign per-agent identity.</strong> Avoid shared credentials. Make sure the event stream can attribute actions to a stable subject.</li>
  <li><strong>Instrument protected actions.</strong> Start with API calls, database reads and writes, file access, and outbound tool calls.</li>
  <li><strong>Attach policy evaluation results.</strong> Store whether a rule passed, failed, or required manual review with the event itself.</li>
  <li><strong>Export evidence to a durable destination.</strong> Logs should be queryable by agent, resource, and time window, and they should survive the runtime that produced them.</li>
</ol>

<h2>How Teams Usually Fail the First Pass</h2>
<p>The most common failure mode is over-indexing on application telemetry. Application logs can tell you what the agent said. They rarely tell you what the infrastructure observed independently. That is a serious gap once the question changes from product debugging to legal review or audit evidence.</p>
<p>The second failure mode is not defining what counts as a protected action. Teams often capture LLM responses but ignore the data read that informed the response or the external write that made the incident expensive.</p>

<h2>What Good Looks Like After Two Weeks</h2>
<p>After the first implementation sprint, your team should be able to pull a filtered record for one workflow showing every protected action, the associated agent identity, and the policy context for each event. That is the threshold where audit trail work starts becoming useful to people outside engineering.</p>
<p>If you need a concrete destination for that rollout, use the <a href="/solutions/ai-agent-audit-trails">AI agent audit trails solution page</a> as the commercial scope and pair it with the <a href="/audit-in-2-mins">2-minute setup flow</a> for pilot planning.</p>
    `.trim(),
  },
  {
    slug: "shared-service-accounts-vs-ai-agent-identity",
    title: "Shared Service Accounts vs AI Agent Identity",
    excerpt:
      "A comparison of the two security models most teams end up choosing between when agents start touching production systems.",
    publishedAt: "2026-04-28",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Platform Architecture",
    },
    tags: ["Identity", "Authorization", "Comparison"],
    readTime: 7,
    content: `
<h2>Why This Comparison Matters</h2>
<p>Most teams do not choose shared service accounts because they believe it is the right long-term control model. They choose it because it is the fastest path to getting an agent into production. The problem is that the same shortcut breaks attribution, incident response, and least-privilege controls the moment the agent does anything important.</p>

<h2>Shared Service Accounts Optimize For Speed, Not Control</h2>
<p>With a shared service account, the agent inherits whatever the account can do, and every downstream action looks identical to every other workflow using that account. This reduces provisioning work but makes the audit trail ambiguous. If an agent writes to the wrong resource or reads something it should not have, the evidence often points to a shared process identity instead of the actual actor.</p>

<h2>Per-Agent Identity Optimizes For Attribution and Revocation</h2>
<p>Per-agent identity means the subject in the log matches the actual agent or workflow that acted. That is what makes least privilege, surgical revocation, and reviewable audit evidence possible. The tradeoff is that teams need a provisioning and rotation model instead of relying on a single static credential.</p>

<h2>Decision Criteria</h2>
<ul>
  <li><strong>Use shared accounts only for low-risk internal prototypes.</strong></li>
  <li><strong>Use per-agent identity as soon as an agent touches customer data, writes to production systems, or creates evidence obligations.</strong></li>
  <li><strong>Do not mix the two models in the same protected workflow.</strong> Mixed attribution is almost as bad as no attribution at all.</li>
</ul>

<h2>The Practical Migration Path</h2>
<p>The transition does not have to be a platform rewrite. Teams can keep the same agent runtime and move the credentialing layer first: issue a stable subject for the workflow, capture its protected actions, and then narrow the authorization scope over time. That approach gives you evidence quickly while still improving the control plane.</p>
<p>If you are comparing these models in a buying cycle, the relevant product surface is not a generic IAM promise. It is whether the platform can actually support <a href="/features">per-agent identity and policy-aware logging</a> in a production workflow.</p>
    `.trim(),
  },
  {
    slug: "soc-2-readiness-checklist-for-ai-agents",
    title: "SOC 2 Readiness Checklist For AI Agents",
    excerpt:
      "A practical checklist for engineering and compliance teams preparing AI agents for SOC 2 evidence requests.",
    publishedAt: "2026-04-26",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Compliance Operations",
    },
    tags: ["SOC 2", "Checklist", "Compliance"],
    readTime: 7,
    content: `
<h2>Use This Checklist Before the Auditor Does</h2>
<p>SOC 2 evidence questions tend to arrive after the agent is already in production. That is exactly the wrong time to discover that access is not attributable or that your logs cannot answer basic reconstruction questions. This checklist is designed for the week you decide to operationalize controls, not the week before fieldwork starts.</p>

<h2>Identity and Access</h2>
<ul>
  <li>Every production agent has a unique, non-shared identity.</li>
  <li>Credential issuance is tied to a provisioning decision, not an ad-hoc runtime secret.</li>
  <li>Access scope is documented and reviewable by system or data class.</li>
</ul>

<h2>Audit Trail Quality</h2>
<ul>
  <li>Protected actions are logged at the infrastructure or control layer, not only inside application traces.</li>
  <li>Each event records agent identity, resource, action, timestamp, and outcome.</li>
  <li>Logs can be queried by time window, agent, and resource without manual correlation work.</li>
</ul>

<h2>Change and Review Controls</h2>
<ul>
  <li>Model updates, prompt changes, and tool-scope expansions leave a reviewable record.</li>
  <li>Security or compliance teams can reconstruct an incident path from logs alone.</li>
  <li>There is a defined response path when an agent performs an out-of-scope action.</li>
</ul>

<h2>What To Do If You Fail More Than Two Checks</h2>
<p>If your team cannot satisfy most of the checklist without pulling together logs from multiple systems, you likely need a dedicated evidence layer rather than another policy document. The commercial destination for that problem is the <a href="/solutions/soc-2-for-ai-agents">SOC 2 for AI agents solution page</a>, with the <a href="/pricing">pricing path</a> and <a href="/audit-in-2-mins">quickstart</a> acting as the next operational steps.</p>
    `.trim(),
  },
  {
    slug: "hipaa-audit-log-template-for-ai-agents",
    title: "HIPAA Audit Log Template For AI Agents",
    excerpt:
      "A concrete logging template for teams designing AI agent evidence around sensitive healthcare workflows and regulated data access.",
    publishedAt: "2026-04-24",
    author: {
      slug: DEFAULT_AUTHOR_SLUG,
      name: "Lookover Team",
      role: "Healthcare Compliance",
    },
    tags: ["HIPAA", "Template", "Compliance"],
    readTime: 6,
    content: `
<h2>Why A Template Helps</h2>
<p>When teams start instrumenting healthcare-adjacent AI workflows, they often know they need logs but not what the log record should actually contain. A template forces the conversation into concrete fields and review expectations.</p>

<h2>Recommended Event Fields</h2>
<ul>
  <li><strong>Agent identity:</strong> the stable subject that initiated the action.</li>
  <li><strong>Workflow identifier:</strong> the request or task boundary the event belongs to.</li>
  <li><strong>Protected resource:</strong> the dataset, API, or storage target touched by the event.</li>
  <li><strong>Action type:</strong> read, write, export, transform, or transmit.</li>
  <li><strong>Policy result:</strong> allowed, denied, or review-required.</li>
  <li><strong>Timestamp and outcome:</strong> enough detail to reconstruct the sequence later.</li>
</ul>

<h2>How To Use The Template</h2>
<p>Start by applying the template to one workflow that touches sensitive data, then review the result with engineering and compliance together. The goal is not to create a perfect schema on day one. The goal is to produce an event shape that is attributable, reviewable, and exportable.</p>

<h2>Where This Fits In The Commercial Path</h2>
<p>If your organization is building healthcare-facing agent workflows, this template should map directly into the <a href="/solutions/hipaa-audit-logs-for-ai">HIPAA audit logs for AI solution page</a>. From there, teams can move into the <a href="/audit-in-2-mins">quickstart</a> or the <a href="/contact">contact path</a> depending on whether they need a pilot or a larger rollout conversation.</p>
    `.trim(),
  },
];

const POST_APPENDICES: Record<string, string> = {
  "eu-ai-act-high-risk-classification": `
<h2>Sources</h2>
<ul>
  <li><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">Official text of Regulation (EU) 2024/1689, the EU AI Act</a></li>
  <li><a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer">European Commission overview of the EU AI Act</a></li>
</ul>
<h2>Continue the implementation path</h2>
<p>If your team is in scope, the operational question becomes how to capture attributable actions fast enough to survive an audit window. Start with the <a href="/blog/why-every-ai-agent-needs-an-identity">identity layer every production agent needs</a>, then move into <a href="/solutions/eu-ai-act-logging">the EU AI Act logging path</a> and <a href="/audit-in-2-mins">a 2-minute audit trail setup</a> for real event capture.</p>
  `.trim(),
  "why-every-ai-agent-needs-an-identity": `
<h2>Sources</h2>
<ul>
  <li><a href="https://doi.org/10.6028/NIST.AI.100-1" target="_blank" rel="noopener noreferrer">NIST AI Risk Management Framework 1.0</a></li>
  <li><a href="https://airc.nist.gov/airmf-resources/ai-rmf-playbook" target="_blank" rel="noopener noreferrer">NIST AI RMF Playbook</a></li>
</ul>
<h2>Where identity turns into evidence</h2>
<p>Identity is only the start. To turn identity into audit evidence, teams need immutable event capture and scoped authorization decisions. The next step is understanding <a href="/blog/audit-trails-for-ai-agents-what-soc2-actually-requires">what SOC 2 actually expects from AI audit trails</a>, then connecting those controls through <a href="/audit-in-2-mins">the fastest path to production audit logs</a>.</p>
  `.trim(),
  "audit-trails-for-ai-agents-what-soc2-actually-requires": `
<h2>Sources</h2>
<ul>
  <li><a href="https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services" target="_blank" rel="noopener noreferrer">AICPA and CIMA SOC reporting overview</a></li>
  <li><a href="https://trustservices.aicpa.org/" target="_blank" rel="noopener noreferrer">AICPA Trust Services Criteria resources</a></li>
</ul>
<h2>Related reading</h2>
<p>SOC 2 evidence quality depends on the enforcement model behind the logs. If you are still designing the control plane, read <a href="/blog/zero-trust-for-ai-agents-beyond-the-buzzword">how zero-trust principles apply to AI agents</a>, then map that design into <a href="/solutions/soc-2-for-ai-agents">the SOC 2 solution path</a> and <a href="/audit-in-2-mins">a production audit trail rollout</a>.</p>
  `.trim(),
  "zero-trust-for-ai-agents-beyond-the-buzzword": `
<h2>Sources</h2>
<ul>
  <li><a href="https://csrc.nist.gov/pubs/sp/800/207/final" target="_blank" rel="noopener noreferrer">NIST SP 800-207: Zero Trust Architecture</a></li>
  <li><a href="https://www.nist.gov/publications/zero-trust-architecture" target="_blank" rel="noopener noreferrer">NIST publication overview for Zero Trust Architecture</a></li>
</ul>
<h2>Build the control plane</h2>
<p>Zero trust only works when every agent has a stable subject that policy can evaluate. If that layer is still missing, go back to <a href="/blog/why-every-ai-agent-needs-an-identity">the identity model for agent systems</a>, then ship the logging side with <a href="/audit-in-2-mins">a 2-minute audit trail deployment</a>.</p>
  `.trim(),
  "ai-agent-audit-trail-implementation-guide": `
<h2>Sources</h2>
<ul>
  <li><a href="https://doi.org/10.6028/NIST.AI.100-1" target="_blank" rel="noopener noreferrer">NIST AI Risk Management Framework 1.0</a></li>
  <li><a href="https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services" target="_blank" rel="noopener noreferrer">AICPA and CIMA SOC reporting overview</a></li>
</ul>
<h2>Next step</h2>
<p>Use this rollout pattern with the <a href="/solutions/ai-agent-audit-trails">AI agent audit trails solution page</a> and the <a href="/pricing">pricing overview</a> to scope the first production deployment.</p>
  `.trim(),
  "shared-service-accounts-vs-ai-agent-identity": `
<h2>Sources</h2>
<ul>
  <li><a href="https://doi.org/10.6028/NIST.AI.100-1" target="_blank" rel="noopener noreferrer">NIST AI Risk Management Framework 1.0</a></li>
  <li><a href="https://csrc.nist.gov/pubs/sp/800/207/final" target="_blank" rel="noopener noreferrer">NIST SP 800-207: Zero Trust Architecture</a></li>
</ul>
<h2>Continue the evaluation</h2>
<p>If your team is moving off shared accounts, compare the control model with the <a href="/features">feature surface for per-agent identity</a> and the <a href="/integrations">integration path</a> needed to deploy it.</p>
  `.trim(),
  "soc-2-readiness-checklist-for-ai-agents": `
<h2>Sources</h2>
<ul>
  <li><a href="https://trustservices.aicpa.org/" target="_blank" rel="noopener noreferrer">AICPA Trust Services Criteria resources</a></li>
  <li><a href="https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services" target="_blank" rel="noopener noreferrer">AICPA and CIMA SOC reporting overview</a></li>
</ul>
<h2>Operational follow-through</h2>
<p>Once you can answer most of the checklist, move to the <a href="/solutions/soc-2-for-ai-agents">SOC 2 for AI agents solution page</a> and the <a href="/audit-in-2-mins">quickstart</a> to turn the checklist into a rollout plan.</p>
  `.trim(),
  "hipaa-audit-log-template-for-ai-agents": `
<h2>Sources</h2>
<ul>
  <li><a href="https://www.hhs.gov/hipaa/for-professionals/security/guidance/index.html" target="_blank" rel="noopener noreferrer">HHS guidance on the HIPAA Security Rule</a></li>
  <li><a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html" target="_blank" rel="noopener noreferrer">HHS guidance on access and audit expectations</a></li>
</ul>
<h2>Template to rollout path</h2>
<p>After the first schema review, map the fields to the <a href="/solutions/hipaa-audit-logs-for-ai">HIPAA audit logs for AI solution page</a> and decide whether your team should start with the <a href="/audit-in-2-mins">quickstart</a> or a direct architecture review.</p>
  `.trim(),
};

for (const post of posts) {
  const appendix = POST_APPENDICES[post.slug];

  if (appendix) {
    post.content = `${post.content}\n\n${appendix}`;
  }
}

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
