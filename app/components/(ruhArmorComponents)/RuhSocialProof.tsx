"use client";

import ICONS from "@/app/assets/Icons";

export default function RuhSocialProof() {
    return (
        <section className="bg-white py-24 px-6 border-b border-gray-100">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl text-(--deep-green) font-serif italic">
                        &quot;The Evolution of Wellness&quot;
                    </h2>
                    <div className="h-1 w-20 bg-(--luxe-gold) mx-auto"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Consumers are increasingly moving away from basic, single-nutrient supplements toward deep, cellular-level support.
                    RÜH-ARMOR™ is positioned as part of this evolution in wellness, supporting the body where it matters most:
                    <span className="text-(--deep-green) font-bold"> at the cellular level.</span>
                </p>

                <div className="pt-8 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {/* Placeholder for potential trust icons/logos */}
                    <div className="text-sm font-bold tracking-tighter flex items-center gap-1">
                        <ICONS.Shield size={20} /> MEDICAL GRADE
                    </div>
                    <div className="text-sm font-bold tracking-tighter flex items-center gap-1">
                        <ICONS.Activity size={20} /> SCIENCE BACKED
                    </div>
                    <div className="text-sm font-bold tracking-tighter flex items-center gap-1">
                        <ICONS.Zap size={20} /> HIGH BIOAVAILABILITY
                    </div>
                </div>
            </div>
        </section>
    );
}
