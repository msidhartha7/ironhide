import { XCircle, CheckCircle } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section id="features" className="relative overflow-hidden bg-night-950 py-24">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950 via-night-950 to-black" aria-hidden />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night-900/40 via-night-950/75 to-night-950" aria-hidden />
            <div className="pointer-events-none absolute inset-0 -z-[5] bg-black/35" aria-hidden />
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Stop worrying about compliance.
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Traditional security reviews slow down innovation. IronHide automates the boring stuff so you can focus on building.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-900/50 p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.85)]">
                        <h3 className="text-lg font-semibold leading-8 text-white">The Old Way</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                                Manual security reviews taking weeks
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                                Complex compliance paperwork
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-400" aria-hidden="true" />
                                Risk of data leaks in LLMs
                            </li>
                        </ul>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-brand-500 to-brand-400 p-8 shadow-[0_25px_80px_-35px_rgba(47,123,255,0.9)] ring-1 ring-white/15 lg:-mt-4 lg:-mb-4 lg:z-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_35%)]" />
                        <h3 className="text-lg font-semibold leading-8 text-white">
                            The IronHide Way
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-white/90">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                Automated compliance checks in CI/CD
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                One-click audit reports
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                Real-time PII redaction & firewalls
                            </li>
                        </ul>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-900/50 p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.85)]">
                        <h3 className="text-lg font-semibold leading-8 text-white">The Result</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-300" aria-hidden="true" />
                                Ship 3x faster
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-300" aria-hidden="true" />
                                Enterprise-ready from Day 1
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-emerald-300" aria-hidden="true" />
                                Sleep better at night
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
