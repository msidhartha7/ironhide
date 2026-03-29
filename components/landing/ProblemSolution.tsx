import { XCircle, CheckCircle } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section id="features" className="relative overflow-hidden bg-slate-50 py-24">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Stop worrying about compliance.
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        Traditional security reviews slow down innovation. LookOver automates the boring stuff so you can focus on building.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h3 className="text-lg font-semibold leading-8 text-slate-800">The Old Way</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-500">
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                                Manual Security Reviews Taking Weeks
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                                Complex Compliance Paperwork
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                                Risk of Data Leaks in LLMs
                            </li>
                        </ul>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-8 shadow-[0_12px_40px_-12px_rgba(29,78,216,0.4)] ring-1 ring-blue-500/20 lg:-mt-4 lg:-mb-4 lg:z-10">
                        <h3 className="text-lg font-semibold leading-8 text-white">
                            The LookOver Way
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-blue-100">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                Audit Trails for Compliance
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                One-click Audit Reports
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                Real-time PII Redaction & Firewalls
                            </li>
                        </ul>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h3 className="text-lg font-semibold leading-8 text-slate-800">The Result</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-500">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-500" aria-hidden="true" />
                                Ship Faster
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-500" aria-hidden="true" />
                                Enterprise-Ready from Day One
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-500" aria-hidden="true" />
                                Sleep Better at Night
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
