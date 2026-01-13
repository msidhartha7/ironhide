"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ScanFace } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-center px-4 md:px-6">
                <div className="glass-panel relative flex h-16 w-full items-center justify-between rounded-2xl px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <ScanFace className="h-7 w-7 text-brand-400 drop-shadow-glow" />
                        <span className="text-xl font-semibold tracking-tight text-white">
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

                    <div className="flex items-center gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="h-11 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white shadow-lg backdrop-blur-lg transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15"
                        >
                            <Link href="#">
                                Book A Call <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
