"use client";

import React from 'react';
import Image from 'next/image';
import Disclaimer from '../components/(common)/Disclaimer';
import FinalConversion from '../components/(homeComponents)/FinalConversion';
import RuhCtaSection from '../components/(ruhArmorComponents)/RuhCtaSection';
import ElixirGrapheneGuard from '../components/(nurArmorComponents)/ElixirGrapheneGuard';

export default function NurArmorPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-gray-950 text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/nur-armor.png"
                        alt="NUR-ARMOR Background"
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-(--luxe-gold) text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                Born in Nature... Refined by Science
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                                NUR-<span className="text-(--luxe-gold)">ARMOR</span>
                            </h1>
                            <p className="text-2xl md:text-3xl font-light text-gray-300">
                                The Ultimate Defense Against <span className="text-red-500 font-bold">Graphene</span>
                            </p>
                        </div>

                        <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                            A high-potency molecular matrix specifically formulated to degrade graphene-related contaminants and restore cellular integrity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="btn btn-brown px-10 py-5 text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                Buy NUR-ARMOR™ Now
                            </button>
                            <button className="btn btn-transparent px-10 py-5 text-lg">
                                View Technical Specs
                            </button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">99%</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Purity Grade</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">8.2x</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Absorption</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">24/7</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Cellular Defense</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group perspective-1000 hidden lg:block">
                        <div className="relative aspect-square w-full max-w-md mx-auto transform transition-transform duration-700 group-hover:rotate-y-12">
                            <Image
                                src="/assets/nur-armor.png"
                                alt="NUR-ARMOR Bottle"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(255,215,0,0.2)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Disclaimer />

            {/* Product Story */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            Engineered for the Modern Challenge
                        </h2>
                        <p className="text-lg text-black leading-relaxed">
                            NUR-ARMOR is not just a supplement; it's a defensive shield. Utilizing advanced molecular binding technology, our formula targets and degrades specific environmental contaminants that bypass traditional detoxification pathways.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Supports degradation of Graphene-related contaminants",
                                "Enhances mitochondrial resilience and energy output",
                                "Neutralizes systemic oxidative stress triggers",
                                "Proprietary Liposomal delivery for maximum efficacy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-10 bg-linear-to-br from-green-500/10 to-transparent blur-3xl opacity-50 rounded-full"></div>
                        <Image
                            src="/assets/augmented-nac.png"
                            alt="NUR-ARMOR Science"
                            width={600}
                            height={600}
                            className="relative rounded-3xl shadow-2xl border border-gray-100"
                        />
                    </div>
                </div>
            </section>

            <ElixirGrapheneGuard />

            <RuhCtaSection
                title="Secure Your Cellular Foundation"
                subtitle="Join thousands who have integrated NUR-ARMOR into their daily survival protocol."
                ctaText="Order NUR-ARMOR Now"
                isDark={true}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
                <FinalConversion />
            </div>
        </main>
    );
}
