"use client";

import React from 'react';
import StudyCard from '../components/(studiesComponents)/StudyCard';
import Disclaimer from '../components/(common)/Disclaimer';
import StickyProductBar from '../components/(homeComponents)/StickyProductBar';
import { studiesData } from '@/app/helper/data';

export default function StudiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <StickyProductBar />

            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                        Access Scientific Studies
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Explore the research and data behind our detoxification protocols and the modern environmental challenges we address.
                    </p>
                </div>
            </section>

            <Disclaimer />

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto space-y-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-0.5 flex-1 bg-gray-200"></div>
                        <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Key Research Papers</span>
                        <div className="h-0.5 flex-1 bg-gray-200"></div>
                    </div>

                    {studiesData.map((study) => (
                        <StudyCard key={study.id} {...study} />
                    ))}
                </div>
            </section>

            <section className="bg-(--deep-green) py-24 px-6 md:px-12 lg:px-24 text-white text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">"Remember Their Names"</h2>
                    <p className="text-lg opacity-80 leading-relaxed italic">
                        "Dedicated to the brave doctors and researchers worldwide who are bringing truth to light."
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Dr. Robert Malone", "Dr. Geert Vanden Bossche", "Dr. Sherry Tenpenny", "Dr. Ryan Cole", "Dr. Mike Yeadon"].map((name) => (
                            <span key={name} className="px-4 py-1.5 bg-white/10 rounded-full text-sm border border-white/20">
                                {name}
                            </span>
                        ))}
                    </div>
                    <button className="btn btn-brown mt-8 px-10 py-4 font-bold rounded-full transition shadow-lg">
                        View Full Research List (Rumble)
                    </button>
                </div>
            </section>
        </main>
    );
}
