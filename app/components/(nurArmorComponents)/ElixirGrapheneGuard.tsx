"use client";

import React from 'react';
import Image from 'next/image';

const facts = {
    adultServing: "2 ml",
    childServing: "0.5 ml",
    servingsAdult: 30,
    servingsChild: 120,
    matrix: [
        { name: "Liposomal Glutathione", amount: "300 mg", category: "Core Defence" },
        { name: "NAC (N-Acetyl L-Cysteine)", amount: "500 mg", category: "Core Defence" },
        { name: "CoQ10 (as Ubiquinol)", amount: "100 mg", category: "Bio-Energetic Catalyst" },
        { name: "Zinc (from Zinc Bisglycinate)", amount: "5 mg", category: "Ionic Stability" },
        { name: "Astaxanthin", amount: "1 mg", category: "Ionic Stability" },
        { name: "Black Pepper Extract (95% Piperine)", amount: "10 mg", category: "Absorption" }
    ],
    overview: [
        { label: "Liposomal Glutathione", text: "Enhanced absorption, supports liver and cellular detox pathways." },
        { label: "NAC", text: "Precursor to glutathione, supports antioxidant and respiratory health." },
        { label: "CoQ10", text: "Supports mitochondrial energy and bio-energetic resilience." },
        { label: "Zinc & Astaxanthin", text: "Immune and antioxidant support, cellular stability." },
        { label: "Piperine", text: "Increases bioavailability of multiple actives." }
    ]
};

const claims = [
    "Claims vaccines contain graphene-based nanotechnology (nano-routers, antennas, circuits).",
    "Claims vaccinated individuals may emit Bluetooth MAC addresses.",
    "Attributes clotting, strokes, myocarditis, and immune collapse to graphene oxide interacting with EMFs (5G).",
    "Suggests COVID-19 is 'graphene-enhanced acute irradiation syndrome'.",
    "Proposes graphene oxide forms artificial neural networks for external influence.",
    "Recommends NAC, glutathione, quercetin, zinc and astaxanthin as countermeasures."
];

export default function ElixirGrapheneGuard() {
    return (
        <section className="bg-white text-gray-900 py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative border-t border-gray-100">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Column: Product Info & Visual */}
                    <div className="lg:w-1/3 space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-gray-400 text-sm font-bold tracking-[0.3em] uppercase">Sovereign Protocol</h3>
                            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none text-black">
                                ELIXIR<span className="text-gray-300">™</span>
                            </h2>
                            <p className="inline-block px-4 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full tracking-widest uppercase border border-red-100">
                                Graphene Guard
                            </p>
                        </div>

                        <div className="p-8 border-l-2 border-black bg-gray-50 rounded-r-2xl space-y-4">
                            <p className="text-black font-bold italic text-xl">"The front-line cellular defence formula."</p>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Built around the Dr Delgado style protocol for those seeking support against suspected graphene oxide exposure and exogenous materials.
                            </p>
                        </div>

                        <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                            <Image
                                src="/assets/elixir-blueprint.png"
                                alt="ELIXIR Technical"
                                fill
                                className="object-cover transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-xs text-black uppercase tracking-widest mb-2 font-bold">Core Concept</p>
                                <p className="text-sm text-gray-500 font-medium">Advanced matrix supporting natural degradation of exogenous substances.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Facts & Claims */}
                    <div className="lg:w-2/3 space-y-16">
                        {/* Facts Table */}
                        <div className="space-y-8">
                            <div className="flex justify-between items-end border-b-2 border-black pb-4">
                                <h4 className="text-2xl font-black uppercase tracking-tight text-black">
                                    Product Specification
                                </h4>
                                <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">S.Facts v2.1</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                                        <span className="text-gray-500 uppercase font-black tracking-widest text-[10px]">Adult Serving</span>
                                        <span className="text-black font-black">{facts.adultServing}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                                        <span className="text-gray-500 uppercase font-black tracking-widest text-[10px]">Child Serving (4+)</span>
                                        <span className="text-black font-black">{facts.childServing}</span>
                                    </div>

                                    <div className="pt-4 space-y-4">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">Core Defence Matrix</p>
                                        <div className="space-y-3">
                                            {facts.matrix.slice(0, 3).map((item, i) => (
                                                <div key={i} className="flex justify-between py-2 border-b border-gray-50">
                                                    <span className="text-gray-700 text-sm font-medium">{item.name}</span>
                                                    <span className="text-black font-black text-sm tracking-tighter">{item.amount}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        {facts.matrix.slice(3).map((item, i) => (
                                            <div key={i} className="flex justify-between py-2 border-b border-gray-50">
                                                <span className="text-gray-700 text-sm font-medium">{item.name}</span>
                                                <span className="text-black font-black text-sm tracking-tighter">{item.amount}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <p className="text-[10px] text-black font-black uppercase tracking-widest mb-2">Usage Protocol</p>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            Adults: 2ml/day. Children 4+: 0.5ml. recommended as a 2-4 week phase before starting ETHER for zeolite-heavy detox.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delgado Insights Section - Minimalist Red */}
                        <div className="border border-gray-100 rounded-3xl p-8 md:p-12 space-y-10 bg-white shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-sm">Special Report</div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black">Insights: Dr. Ricardo Delgado</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                                {claims.map((claim, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <span className="text-gray-200 group-hover:text-red-600 transition-colors font-black text-xl leading-none">0{i + 1}</span>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{claim}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10 border-t border-gray-100 space-y-4 relative z-10">
                                <p className="text-[10px] font-black text-red-600 uppercase tracking-[.4em]">Mandatory Protocol Disclaimer</p>
                                <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest font-medium">
                                    THESE CLAIMS REFLECT THE VIEWS OF DR RICARDO DELGADO AND LA QUINTA COLUMNA AND ARE NOT SUPPORTED BY MAINSTREAM SCIENTIFIC CONSENSUS. SHARED FOR INFORMATIONAL PURPOSES ONLY. ELIXIR IS A FOOD SUPPLEMENT, NOT A MEDICINE. CONSULT A QUALIFIED HEALTHCARE PROFESSIONAL BEFORE USE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
