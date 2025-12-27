"use client";

import ICONS from "@/app/assets/Icons";

export default function RuhWhyNeed() {
    const pillars = [
        { text: "Clean Detox", color: "text-blue-400" },
        { text: "Deep Cellular Defense", color: "text-emerald-400" },
        { text: "NAD Energy", color: "text-amber-400" },
        { text: "Immune Support", color: "text-rose-400" },
        { text: "Anti-Aging Synergy", color: "text-purple-400" },
    ];

    return (
        <section className="bg-white text-black py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl leading-tight text-(--deep-green)">
                        Why You Need This <span className="text-(--luxe-gold)">Now</span>
                    </h2>
                    <div className="h-1 w-20 bg-(--luxe-gold)"></div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Modern life exposes the body to heavy metals, pollutants, oxidative stress, and energy decline.
                        RÜH-ARMOR™ is built to support five core areas of cellular well-being in a single daily formula:
                        detoxification, cellular defense, energy, immunity, and anti-aging pathways.
                    </p>
                    <p className="text-lg font-medium text-(--deep-green-dark)">
                        This is designed as a foundational upgrade for your daily wellness ritual.
                    </p>
                </div>

                <div className="bg-(--deep-green) p-8 md:p-12 rounded-4xl text-white shadow-2xl relative overflow-hidden">
                    {/* Decorative aura */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-(--luxe-gold)/20 blur-3xl rounded-full"></div>

                    <h3 className="text-2xl mb-8 font-semibold border-b border-white/10 pb-4">
                        Five Foundations of Vitality
                    </h3>

                    <ul className="space-y-6">
                        {pillars.map((pillar, index) => (
                            <li key={index} className="flex items-center gap-4 text-xl md:text-2xl">
                                <div className="w-2 h-2 rounded-full bg-(--luxe-gold)"></div>
                                <span className={`font-semibold ${pillar.color}`}>{pillar.text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                        <ICONS.Shield className="text-(--luxe-gold)" size={24} />
                        <p className="text-sm text-gray-300">
                            Comprehensive protection at the cellular level.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
