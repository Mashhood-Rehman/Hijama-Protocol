"use client";

import ICONS from "@/app/assets/Icons";

const trustMarkers = [
    "Vegan",
    "No Gluten",
    "No Soy",
    "Non-GMO",
    "High Absorption",
];

export default function RuhHero() {
    return (
        <section className="relative bg-(--deep-green-dark) text-white min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 lg:pt-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-(--luxe-gold) rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-(--bio-neon) rounded-full blur-[150px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl w-full text-center space-y-12">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1 border border-(--luxe-gold)/30 rounded-full bg-(--luxe-gold)/5 backdrop-blur-sm animate-fade-in">
                        <span className="text-(--luxe-gold) text-sm font-semibold tracking-widest uppercase">
                            Strengthen Your Core, Preserve Your RÜH
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                        RÜH-ARMOR™
                    </h1>

                    <p className="text-xl md:text-2xl text-(--luxe-gold-soft) font-medium max-w-3xl mx-auto">
                        A Five-in-One Cellular Defense, Detoxification & Anti-Aging Matrix
                    </p>
                </div>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    RÜH-ARMOR™ is a next-generation wellness formula engineered to support the body at its deepest levels.
                    It is designed to support detoxification, cellular defense, NAD energy, immunity, nutrient absorption,
                    and youthful vitality in one advanced matrix.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="btn btn-brown px-12 py-4 text-lg transition-transform hover:scale-105">
                        Get RÜH-ARMOR™ Now
                    </button>
                    <button className="btn btn-transparent px-12 py-4 text-lg">
                        See How It Works
                    </button>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-12">
                    {trustMarkers.map((marker, index) => (
                        <div key={index} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                            <ICONS.Check size={20} className="text-(--luxe-gold)" />
                            <span className="text-sm font-medium tracking-wide uppercase">{marker}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
