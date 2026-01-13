"use client";

import Link from "next/link";
import { ScanFace, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-night-950">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night-950 via-night-950 to-black" aria-hidden />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-black/35 to-transparent" aria-hidden />
            <div className="container relative z-10 mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <ScanFace className="h-6 w-6 text-brand-300" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                IronHide
                            </span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-white/70">
                            The security backbone for next-generation AI products. Built for compliance, speed, and safety.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Link href="https://x.com/m_sidhartha07" className="text-white/50 transition hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="https://github.com/privyy-io" className="text-white/50 transition hover:text-white">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/mallicksidhartha7/" className="text-white/50 transition hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white">Product</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/70">
                            <li><Link href="/features" className="hover:text-white">Features</Link></li>
                            <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="/changelog" className="hover:text-white">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white">Resources</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/70">
                            <li><Link href="/documentation" className="hover:text-white">Documentation</Link></li>
                            <li><Link href="/api-reference" className="hover:text-white">API Reference</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/community" className="hover:text-white">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white">Company</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/70">
                            <li><Link href="/about" className="hover:text-white">About</Link></li>
                            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link href="/legal" className="hover:text-white">Legal</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                    <p className="text-sm text-white/60">
                        &copy; {new Date().getFullYear()} IronHide, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-white/70 hover:bg-white/5 hover:text-white"
                        >
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-white/70 hover:bg-white/5 hover:text-white"
                        >
                            <Link href="/terms-of-service">
                                Terms of Service
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
