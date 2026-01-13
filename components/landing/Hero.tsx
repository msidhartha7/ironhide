"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-200 to-brand-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-brand-900 dark:to-brand-800" />
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-20">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative inline-flex items-center justify-center rounded-full p-[2px]">
                            <div className="absolute inset-0 rounded-full" />
                            <div className="relative rounded-full border-[0.5px] border-brand-500 bg-white/90 dark:bg-zinc-900/90 px-3 py-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                Launching soon
                            </div>
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Real Identity for <span className="text-brand-600 dark:text-brand-400">AI Agents</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Give your agents real human like identity and access, to tools, LLMs and data.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button asChild size="lg" className="h-12">
                            <Link href="#">
                                Get Early Access
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-16 sm:mt-24 relative">
                    <div className="absolute -inset-4 rounded-xl bg-zinc-200/50 blur-lg dark:bg-zinc-800/50 lg:-inset-10" />
                    <div className="relative rounded-xl border border-zinc-200 bg-white/50 p-4 shadow-2xl backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 lg:p-10">
                        {/* Contextual Visual Representation */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-black/40 border border-zinc-100 dark:border-zinc-800">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                                    <Shield className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Automated Security</h3>
                                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Real-time threat detection for LLM prompts and outputs.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-black/40 border border-zinc-100 dark:border-zinc-800">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                                    <FileCheck className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Compliance Ready</h3>
                                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Pre-configured controls for SOC2, HIPAA, and GDPR.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-black/40 border border-zinc-100 dark:border-zinc-800">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                                    <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Data Privacy</h3>
                                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">PII redaction and secure data handling pipelines.</p>
                                </div>
                            </div>
                        </div>

                        {/* Abstract visual for code/infrastructure */}
                        <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
                            <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="h-3 w-3 rounded-full bg-red-400" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                            </div>
                            <div className="p-4 font-mono text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                                <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">ironHide</span> = <span className="text-yellow-600 dark:text-yellow-400">require</span>(<span className="text-green-600 dark:text-green-400">'@ironhide/core'</span>);</p>
                                <p className="mt-2 text-zinc-400 dark:text-zinc-500">// Initialize with compliance standard</p>
                                <p><span className="text-blue-600 dark:text-blue-400">ironHide</span>.<span className="text-yellow-600 dark:text-yellow-400">configure</span>({'{'}</p>
                                <p className="pl-4">mode: <span className="text-green-600 dark:text-green-400">'strict'</span>,</p>
                                <p className="pl-4">standards: [<span className="text-green-600 dark:text-green-400">'SOC2'</span>, <span className="text-green-600 dark:text-green-400">'GDPR'</span>],</p>
                                <p className="pl-4">monitoring: <span className="text-purple-600 dark:text-purple-400">true</span></p>
                                <p>{'}'});</p>
                                <p className="mt-2"><span className="text-green-500">✓ Security layer initialized successfully</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
