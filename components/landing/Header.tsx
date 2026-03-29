"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ArrowUpRight, Menu, ScanFace, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (!isMenuOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50">
                <div className="mx-auto flex max-w-6xl items-center justify-center px-4 md:px-6">
                    <div className="glass-panel relative flex h-16 w-full items-center justify-between overflow-hidden rounded-2xl bg-white/90 px-4 md:px-6">

                        <Link href="/" className="flex items-center gap-2">
                            <Logo size={64} className="h-12 w-12" priority />
                            <span className="hidden text-xl font-semibold tracking-tight text-slate-900 md:inline">
                                LookOver
                            </span>
                        </Link>

                        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
                            <Link href="#" className="w-24 text-center transition-colors hover:text-slate-900">
                                Home
                            </Link>
                            {/* <Link href="#features" className="transition-colors hover:text-slate-900">
                                Compare
                            </Link> */}
                            <Link href="#features" className="w-24 text-center transition-colors hover:text-slate-900">
                                Features
                            </Link>
                            <Link href="#why-us" className="w-24 text-center transition-colors hover:text-slate-900">
                                How It Works
                            </Link>
                        </nav>

                        <div className="hidden items-center gap-3 md:flex">
                            <Button
                                asChild
                                size="lg"
                                className="h-11 rounded-xl border border-blue-600 bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:border-blue-700"
                            >
                                <Link href="https://calendly.com/sidhartha-privyy/30min">
                                    Book A Call <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={openMenu}
                            aria-label="Open menu"
                            aria-expanded={isMenuOpen}
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-[60] flex items-start justify-center px-4 pt-6 transition-opacity duration-200 ${
                    isMenuOpen ? "bg-slate-900/40 opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMenu}
                aria-hidden={!isMenuOpen}
            >
                <div
                    className={`${isMenuOpen ? "menu-slide" : "menu-slide-out"} glass-panel relative w-full max-w-xl overflow-hidden rounded-[20px] border-slate-200/80 bg-white/95 px-6 py-8 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.15)] will-change-transform`}
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-slate-900 transition hover:text-slate-700"
                            onClick={closeMenu}
                        >
                            <ScanFace className="h-8 w-8 text-blue-600" />
                            <span className="text-2xl font-semibold tracking-tight">LookOver</span>
                        </Link>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={closeMenu}
                            aria-label="Close menu"
                            className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:scale-[1.02] hover:border-slate-300 hover:bg-slate-50"
                        >
                            <X className="h-6 w-6 text-slate-500 group-hover:text-slate-900" />
                        </Button>
                    </div>

                    <div className="mt-10 flex flex-col items-center gap-8 text-center text-lg font-semibold text-slate-700">
                        <Link href="#" className="transition hover:text-slate-900" onClick={closeMenu}>
                            Home
                        </Link>
                        {/* <Link
                            href="#features"
                            className="transition hover:text-slate-900"
                            onClick={closeMenu}
                        >
                            Compare
                        </Link> */}
                        <Link href="#features" className="transition hover:text-slate-900" onClick={closeMenu}>
                            Features
                        </Link>
                        <Link href="#why-us" className="transition hover:text-slate-900" onClick={closeMenu}>
                            How It Works
                        </Link>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="h-12 min-w-[180px] rounded-2xl border border-blue-600 bg-blue-600 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:border-blue-700"
                        >
                            <Link href="https://calendly.com/sidhartha-privyy/30min" onClick={closeMenu}>
                                Book A Call <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
