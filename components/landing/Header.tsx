"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 mx-auto max-w-5xl px-4 md:px-6">
            <div className="
                relative flex h-14 items-center justify-between rounded-md px-4
                bg-white/10 dark:bg-zinc-900/10
                backdrop-blur-xl backdrop-saturate-150
                ring-1 ring-white/20 dark:ring-white/10
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_40px_-10px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.05)]
                dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_40px_-10px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)]
            ">
                <Link href="/" className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-brand-600 dark:text-brand-400 drop-shadow-[0_2px_4px_rgba(8,145,178,0.3)]" />
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 drop-shadow-sm">
                        IronHide
                    </span>
                </Link>
                <nav className="hidden items-center gap-6 md:flex">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-zinc-800/80 hover:text-brand-600 dark:text-zinc-200/80 dark:hover:text-brand-400 transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#why-us"
                        className="text-sm font-medium text-zinc-800/80 hover:text-brand-600 dark:text-zinc-200/80 dark:hover:text-brand-400 transition-colors"
                    >
                        Why Us
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium text-zinc-800/80 hover:text-brand-600 dark:text-zinc-200/80 dark:hover:text-brand-400 transition-colors"
                    >
                        Pricing
                    </Link>
                </nav>
                <div className="flex m-0 items-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#">
                            Book A Call <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
