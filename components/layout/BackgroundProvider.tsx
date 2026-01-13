import React from "react";

type BackgroundProviderProps = {
    children: React.ReactNode;
};

export function BackgroundProvider({ children }: BackgroundProviderProps) {
    return (
        <div className="relative min-h-screen bg-night-950 text-white">
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(1400px_circle_at_18%_18%,rgba(58,106,255,0.16),rgba(4,9,21,0)),radial-gradient(1200px_circle_at_82%_12%,rgba(22,167,255,0.14),rgba(4,9,21,0)),radial-gradient(900px_circle_at_50%_60%,rgba(20,46,110,0.25),rgba(4,9,21,0))]" />
                <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-brand-500/18 blur-[140px]" />
                <div className="absolute right-[-18%] -top-16 h-[500px] w-[500px] rounded-full bg-cyan-300/14 blur-[140px]" />
                <div className="absolute left-1/2 -bottom-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-400/16 blur-[170px]" />
            </div>

            <div className="relative z-10">{children}</div>
        </div>
    );
}
