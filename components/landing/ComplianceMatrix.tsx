const matrixData = [
    {
        component: "Risk Classification Engine",
        euAiAct: "Art. 6, Annex III, Art. 3",
        gdpr: "Art. 35 (DPIA trigger)",
        obligation: "Correctly classify AI risk tier before any work begins",
    },
    {
        component: "Training Data Pipeline",
        euAiAct: "Art. 10, Art. 53 (GPAI)",
        gdpr: "Art. 6, 7, 9, 5(1)(b,c)",
        obligation: "Lawful basis, quality audits, bias detection, data minimisation",
    },
    {
        component: "Model Architecture",
        euAiAct: "Art. 15, Art. 14, Art. 11",
        gdpr: "Art. 25, Art. 32",
        obligation: "Robustness, human override capability, security-by-design",
    },
    {
        component: "Decision Output Layer",
        euAiAct: "Art. 14, Art. 13, Art. 26",
        gdpr: "Art. 22, Art. 15",
        obligation: "Human oversight gate, explainability, contestation mechanism",
    },
    {
        component: "User Interface",
        euAiAct: "Art. 50, Art. 26(6)",
        gdpr: "Art. 13–14, Art. 21",
        obligation: "AI disclosure, privacy notice, rights access point",
    },
    {
        component: "Audit & Logging System",
        euAiAct: "Art. 12, Art. 72",
        gdpr: "Art. 30, Art. 5(1)(e)",
        obligation: "Automated logs, retention schedule, ROPA maintenance",
    },
    {
        component: "Rights Management Portal",
        euAiAct: "Art. 26(6), Art. 14",
        gdpr: "Art. 15, 17, 18, 20, 21, 22",
        obligation: "SAR, erasure, restriction, portability, objection, contestation",
    },
    {
        component: "Incident Response System",
        euAiAct: "Art. 73, Art. 9",
        gdpr: "Art. 33, Art. 34",
        obligation: "72h/15-day incident notification; breach response",
    },
    {
        component: "QMS & Documentation",
        euAiAct: "Art. 11, 16–17, Art. 49",
        gdpr: "Art. 30, Art. 35",
        obligation: "Annex IV docs, DPIA, ROPA, Declaration of Conformity",
    },
    {
        component: "Vendor / Subprocessor Chain",
        euAiAct: "Art. 25 (provider liability)",
        gdpr: "Art. 28, Art. 44–49",
        obligation: "DPAs with all processors; SCCs for non-EU transfers",
    },
    {
        component: "Governance & Oversight",
        euAiAct: "Art. 26, Art. 43, Art. 9",
        gdpr: "Art. 37–39 (DPO), Art. 36",
        obligation: "Human oversight role, DPO involvement, prior consultation if needed",
    },
];

export default function ComplianceMatrix() {
    return (
        <section id="compliance-matrix" className="relative bg-slate-50 bg-grid py-24 sm:py-32">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl lg:text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-6">
                        Quick Reference · Compliance Matrix
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        EU AI Act &amp; GDPR Coverage
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        Every agent component mapped to its regulatory obligations — so nothing falls through the cracks.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm glow-border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-100">
                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-slate-500 w-[22%]">
                                    Agent Component
                                </th>
                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-slate-500 w-[20%]">
                                    Key EU AI Act Articles
                                </th>
                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-slate-500 w-[20%]">
                                    Key GDPR Articles
                                </th>
                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-slate-500">
                                    Primary Obligation
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {matrixData.map((row, i) => (
                                <tr
                                    key={row.component}
                                    className={`border-b border-slate-100 transition-colors hover:bg-slate-50 ${
                                        i === matrixData.length - 1 ? "border-b-0" : ""
                                    }`}
                                >
                                    <td className="px-5 py-4 font-medium text-slate-800">
                                        {row.component}
                                    </td>
                                    <td className="px-5 py-4 text-slate-600">
                                        {row.euAiAct}
                                    </td>
                                    <td className="px-5 py-4 text-slate-600">
                                        {row.gdpr}
                                    </td>
                                    <td className="px-5 py-4 text-slate-500">
                                        {row.obligation}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 rounded-xl border-l-4 border-blue-400 bg-blue-50 px-6 py-5">
                    <p className="text-sm leading-7 text-slate-700">
                        <span className="font-bold text-blue-600">The Golden Rule: </span>
                        <em>
                            A fully compliant AI agent is not built by adding compliance at the end — it is architected
                            around compliance from the first line of design documentation. The EU AI Act and GDPR are not
                            constraints on AI innovation; they are the engineering specification for trustworthy AI that
                            users can rely on and regulators can audit.
                        </em>
                    </p>
                </div>
            </div>
        </section>
    );
}
