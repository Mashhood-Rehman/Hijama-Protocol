"use client";

import { ruhArmorPillars } from "@/app/helper/data";
import ICONS from "@/app/assets/Icons";

const pillarIcons = [
    ICONS.Droplet,
    ICONS.Zap,
    ICONS.Shield,
    ICONS.Target,
    ICONS.Sparkles,
];

export default function RuhFivePillars() {
    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl text-(--deep-green)">
                        Why It Works — <span className="text-(--luxe-gold)">The Five Pillars</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto italic">
                        Engineered synergy for whole-body support
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ruhArmorPillars.map((pillar, index) => {
                        const Icon = pillarIcons[index] || ICONS.Target;
                        return (
                            <div
                                key={index}
                                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
                            >
                                <div className="space-y-6 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-(--deep-green) text-white rounded-2xl flex items-center justify-center group-hover:bg-(--luxe-gold) transition-colors">
                                        <Icon size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-(--deep-green-dark)">
                                        {index + 1}. {pillar.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed max-w-sm">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4 w-full">
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-(--luxe-gold) whitespace-nowrap">Key Ingredients:</span>
                                        <span className="text-sm font-medium text-(--deep-green)">{pillar.ingredients}</span>
                                    </div>
                                    <div className="p-4 bg-(--deep-green)/5 rounded-xl border border-(--deep-green)/10 w-full">
                                        <p className="text-sm italic text-(--deep-green-dark)">
                                            &quot;{pillar.benefit}&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
