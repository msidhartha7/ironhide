"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, ScanFace, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isMenuOpen);
        return () => document.body.classList.remove("overflow-hidden");
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50">
                <div className="mx-auto flex max-w-6xl items-center justify-center px-4 md:px-6">
                    <div className="glass-panel relative flex h-16 w-full items-center justify-between overflow-hidden rounded-2xl bg-night-900/70 px-4 md:px-6">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                        >
                            <span className="header-glow glow-a h-40 w-40 bg-brand-400/35 blur-3xl" />
                            <span className="header-glow glow-b h-52 w-52 bg-cyan-300/30 blur-3xl" />
                            <span className="header-glow glow-c h-36 w-36 bg-indigo-400/25 blur-3xl" />
                        </div>

                        <Link href="/" className="flex items-center gap-2">
                            <ScanFace className="h-7 w-7 text-brand-400 drop-shadow-glow" />
                            <span className="hidden text-xl font-semibold tracking-tight text-white md:inline">
                                IronHide
                            </span>
                        </Link>

                        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
                            <Link href="#" className="transition-colors hover:text-white">
                                Home
                            </Link>
                            <Link href="#features" className="transition-colors hover:text-white">
                                Compare
                            </Link>
                            <Link href="#features" className="transition-colors hover:text-white">
                                Features
                            </Link>
                            <Link href="#why-us" className="transition-colors hover:text-white">
                                How It Works
                            </Link>
                        </nav>

                        <div className="hidden items-center gap-3 md:flex">
                            <Button
                                asChild
                                size="lg"
                                className="h-11 rounded-xl border border-white/20 bg-night-800/80 px-4 text-sm font-semibold text-white shadow-lg backdrop-blur-lg transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-night-800"
                            >
                                <Link href="https://calendly.com/sidhartha-privyy/30min">
                                    Book A Call <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={isMenuOpen}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-night-800/70 text-white shadow-lg transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-night-800 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-[60] flex items-start justify-center bg-night-950/70 px-4 pt-6"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden
                >
                    <div
                        className="menu-slide glass-panel relative w-full max-w-xl overflow-hidden rounded-[20px] border-white/15 bg-night-900/85 px-6 py-8 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.6)]"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-white transition hover:text-white/90"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <ScanFace className="h-8 w-8 text-brand-400 drop-shadow-glow" />
                                <span className="text-2xl font-semibold tracking-tight">IronHide</span>
                            </Link>

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-night-800/70 text-white shadow-lg transition hover:scale-[1.02] hover:border-amber-200 hover:bg-night-800"
                            >
                                <X className="h-6 w-6 text-gray-200 group-hover:text-white" />
                            </Button>
                        </div>

                        <div className="mt-10 flex flex-col items-center gap-8 text-center text-lg font-semibold text-white">
                            <Link
                                href="#"
                                className="transition hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#features"
                                className="transition hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Compare
                            </Link>
                            <Link
                                href="#features"
                                className="transition hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#why-us"
                                className="transition hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How It Works
                            </Link>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 min-w-[180px] rounded-2xl border border-white/15 bg-night-900 text-base font-semibold text-white shadow-lg shadow-black/40 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-night-800"
                            >
                                <Link href="https://calendly.com/sidhartha-privyy/30min" onClick={() => setIsMenuOpen(false)}>
                                    Book A Call <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
