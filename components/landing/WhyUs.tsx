import { Zap, ShieldAlert, BadgeCheck, Lock } from "lucide-react";

const features = [
    {
        name: 'Built for GenAI',
        description:
            'Designed specifically for the unique security challenges of Large Language Models and generative applications.',
        icon: Zap,
    },
    {
        name: 'Zero-Config Integation',
        description:
            'Drop our SDK into your codebase and get protected instantly. No complex configuration files required.',
        icon: Lock,
    },
    {
        name: 'Real-time Protection',
        description:
            'We monitor every prompt and response in real-time, blocking malicious injections and data exfiltration.',
        icon: ShieldAlert,
    },
    {
        name: 'Compliance Certified',
        description:
            'Automatically generating the evidence you need for SOC2, ISO 27001, and HIPAA audits.',
        icon: BadgeCheck,
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="relative bg-night-950 py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night-900/30 via-night-950/70 to-night-950" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-300">Why IronHide?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to secure your AI
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white/70">
                        Security shouldn't be an afterthought. We provide a comprehensive suite of tools to ensure your GenAI products are safe, compliant, and ready for enterprise adoption.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col rounded-2xl border border-white/10 bg-night-900/50 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)]"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon className="h-5 w-5 flex-none text-brand-300" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/70">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
