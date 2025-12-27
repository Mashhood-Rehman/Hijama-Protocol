"use client";

import ICONS from "@/app/assets/Icons";

export default function RuhDeepDive() {
    const steps = [
        { icon: ICONS.Droplet, title: "Detox", desc: "Heavy metal binding via Zeolite", color: "bg-blue-50" },
        { icon: ICONS.Shield, title: "Defense", desc: "Powerful antioxidant defense via Glutathione", color: "bg-emerald-50" },
        { icon: ICONS.Zap, title: "Energy", desc: "Mitochondrial and NAD support via NR", color: "bg-amber-50" },
        { icon: ICONS.Activity, title: "Immunity", desc: "Immune and collagen support via Vitamin C and Zinc", color: "bg-rose-50" },
        { icon: ICONS.Target, title: "Absorption", desc: "Enhanced absorption via Sunflower Lecithin and Acacia Fiber", color: "bg-purple-50" },
    ];

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl space-y-6">
                        <h2 className="text-4xl md:text-5xl text-(--deep-green)">
                            Deep Dive — <span className="text-(--luxe-gold)">How It Supports The Body</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Five distinct pathways converging into a single, comprehensive daily formula.
                        </p>
                    </div>
                    <button className="btn btn-transparent">
                        Read Whitepaper
                    </button>
                </div>

                <div className="relative">
                    {/* Connector line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6 hover:shadow-lg transition-shadow">
                                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-(--deep-green-dark)`}>
                                    <step.icon size={28} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg text-(--deep-green)">{step.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-(--deep-green) p-8 md:p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-12">
                    <div className="w-24 h-24 bg-(--luxe-gold) rounded-full flex items-center justify-center shrink-0 animate-pulse">
                        <ICONS.Sparkles size={48} className="text-black" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-serif">The Synergistic Effect</h3>
                        <p className="text-gray-300 text-lg">
                            When these ingredients combine, they create a matrix that is far more powerful than the sum of its parts.
                            The liposomal delivery ensures that the Glutathione and NAD precursors reach the cells where they can do the most good,
                            while the Zeolite clears the path by removing toxins.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
