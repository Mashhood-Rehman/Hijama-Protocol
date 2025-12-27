"use client";

import ICONS from "@/app/assets/Icons";

interface RuhCtaSectionProps {
    title: string;
    subtitle?: string;
    ctaText: string;
    isDark?: boolean;
}

export default function RuhCtaSection({ title, subtitle, ctaText, isDark = false }: RuhCtaSectionProps) {
    return (
        <section className={`py-24 px-6 ${isDark ? 'bg-(--deep-green-dark) text-white' : 'bg-(--luxe-gold) text-(--deep-green-dark)'}`}>
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <h2 className={`text-4xl md:text-6xl font-serif leading-tight ${isDark ? 'text-white' : 'text-(--deep-green-dark)'}`}>
                    {title}
                </h2>

                {subtitle && (
                    <p className={`text-xl md:text-2xl max-w-2xl mx-auto opacity-80 ${isDark ? 'text-gray-300' : 'text-(--deep-green)'}`}>
                        {subtitle}
                    </p>
                )}

                <div className="pt-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className={`btn transition-transform hover:scale-105 ${isDark ? 'btn-brown' : 'btn-green'}`}>
                        {ctaText}
                    </button>
                    <button className="btn btn-transparent">
                        Learn More
                    </button>
                </div>

                {isDark && (
                    <div className="pt-12 flex items-center justify-center gap-6 opacity-40">
                        <div className="h-px w-12 bg-white"></div>
                        <ICONS.Sparkles size={24} />
                        <div className="h-px w-12 bg-white"></div>
                    </div>
                )}
            </div>
        </section>
    );
}
