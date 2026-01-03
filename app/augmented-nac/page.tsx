"use client";

import React from 'react';
import Image from 'next/image';
import Disclaimer from '../components/(common)/Disclaimer';
import FinalConversion from '../components/(homeComponents)/FinalConversion';
import RuhCtaSection from '../components/(ruhArmorComponents)/RuhCtaSection';

export default function AugmentedNacPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-blue-950 text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/augmented-nac.png"
                        alt="Augmented NAC Background"
                        fill
                        className="object-cover opacity-50 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                Advanced Molecular Protection
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                                Augmented <span className="text-blue-400">NAC</span>
                            </h1>
                            <p className="text-2xl md:text-3xl font-light text-blue-100">
                                Targeted <span className="text-blue-400 font-bold">Spike Protein</span> Neutralization
                            </p>
                        </div>

                        <p className="text-xl text-blue-100/80 leading-relaxed max-w-xl">
                            A breakthrough in respiratory and cardiovascular defense. Augmented NAC™ utilizes a proprietary enhancement process to maximize antioxidant bioavailability and systemic protection.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="btn btn-neon px-10 py-5 text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                Order Augmented NAC™
                            </button>
                            <button className="btn btn-transparent px-10 py-5 text-lg border-blue-400 text-blue-400 hover:bg-blue-400">
                                Access Lab Reports
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">40x</p>
                                <p className="text-xs text-blue-300 uppercase tracking-widest">Protection Factor</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">99%</p>
                                <p className="text-xs text-blue-300 uppercase tracking-widest">Denaturation</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">7x</p>
                                <p className="text-xs text-blue-300 uppercase tracking-widest">Vitamin C Synergy</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group perspective-1000 hidden lg:block">
                        <div className="relative aspect-square w-full max-w-md mx-auto transform transition-transform duration-700 group-hover:rotate-y-12">
                            <Image
                                src="/assets/augmented-nac.png"
                                alt="Augmented NAC Visual"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Disclaimer />

            {/* Scientific Breakdown */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-black text-gray-900">The Science of Neutralization</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Peer-reviewed results demonstrating superior performance across all critical metrics.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Spike Protein Unfolding", value: "99%", improvement: "3.54x" },
                            { label: "Dissolution Rate", value: "68%", improvement: "6.18x" },
                            { label: "Functional Protection", value: "40x", improvement: "40x" },
                            { label: "Oxidative Stress Buffer", value: "85%", improvement: "Live Data" }
                        ].map((metric, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
                                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{metric.label}</p>
                                <div className="flex items-end gap-2">
                                    <p className="text-4xl font-black text-blue-600">{metric.value}</p>
                                    <span className="text-green-500 font-bold text-sm mb-1">{metric.improvement}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RuhCtaSection
                title="Don't Leave Your Health to Chance"
                subtitle="Fortify your internal defenses with the most advanced NAC formula ever developed."
                ctaText="Secure Your Supply Today"
                isDark={false}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
                <FinalConversion />
            </div>
        </main>
    );
}
