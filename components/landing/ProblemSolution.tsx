import { XCircle, CheckCircle } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section id="features" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                        Stop worrying about compliance.
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Traditional security reviews slow down innovation. IronHide automates the boring stuff so you can focus on building.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-900/5 dark:bg-black dark:ring-white/10">
                        <h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-zinc-50">
                            The Old Way
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                                Manual security reviews taking weeks
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                                Complex compliance paperwork
                            </li>
                            <li className="flex gap-x-3">
                                <XCircle className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                                Risk of data leaks in LLMs
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 - Highlighted */}
                    <div className="relative overflow-hidden rounded-2xl bg-brand-600 p-8 shadow-lg ring-1 ring-brand-500 dark:bg-brand-900/20 dark:ring-brand-500/50 lg:-mt-4 lg:mb-4 lg:z-10">
                        <h3 className="text-lg font-semibold leading-8 text-white">
                            The IronHide Way
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-brand-100">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-brand-300" aria-hidden="true" />
                                Automated compliance checks in CI/CD
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-brand-300" aria-hidden="true" />
                                One-click audit reports
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-brand-300" aria-hidden="true" />
                                Real-time PII redaction & firewalls
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-900/5 dark:bg-black dark:ring-white/10">
                        <h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-zinc-50">
                            The Result
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                                Ship 3x faster
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                                Enterprise-ready from Day 1
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                                Sleep better at night
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
