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
        name: 'Compliance Assistance',
        description:
            'Automatically generate the evidence you need for SOC2, ISO 27001, and HIPAA audits.',
        icon: BadgeCheck,
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="relative bg-white py-24 sm:py-32">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-5xl font-semibold leading-7 text-blue-600">Why LookOver?</h2>
                    <p className="mt-12 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Everything you need to secure your AI Agents
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-500">
                        Security shouldn't be an afterthought. We provide a comprehensive suite of tools to ensure your AI Agents are safe, compliant, and ready for enterprise adoption.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                        <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-500">
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
