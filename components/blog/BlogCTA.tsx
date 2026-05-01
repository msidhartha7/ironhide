"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogCTA() {
  return (
    <aside className="mx-auto mt-16 max-w-3xl">
      <div className="glass-panel rounded-2xl px-8 py-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          Lookover
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
          Tamper-proof audit trails for your AI agents - in minutes.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Lookover gives every agent a verifiable identity, captures a
          complete action log, and generates SOC&nbsp;2 and HIPAA compliance
          reports on demand. No complex setup.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            asChild
            size="default"
            className="rounded-xl border border-blue-600 bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Link href="https://app.lookover.io" target="_blank" rel="noopener noreferrer">
              Open App <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="default"
            className="rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
          >
            <Link href="https://calendly.com/sidhartha-investorsync/15min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
