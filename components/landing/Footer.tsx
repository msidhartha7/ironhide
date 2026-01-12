"use client";

import Link from "next/link";
import { ShieldCheck, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 dark:bg-black dark:border-zinc-800">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <ShieldCheck className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                                IronHide
                            </span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
                            The security backbone for next-generation AI products. Built for compliance, speed, and safety.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Product</h3>
                        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Features</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Resources</h3>
                        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Blog</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Company</h3>
                        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">About</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Careers</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Legal</Link></li>
                            <li><Link href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        &copy; {new Date().getFullYear()} IronHide, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild variant="ghost" size="sm" className="text-zinc-600 dark:text-zinc-400">
                            <Link href="#">
                                Privacy Policy
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm" className="text-zinc-600 dark:text-zinc-400">
                            <Link href="#">
                                Terms of Service
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
