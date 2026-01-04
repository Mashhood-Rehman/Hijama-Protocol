"use client";

import React from 'react';
import Link from 'next/link';
import ICONS from '@/app/assets/Icons';
import { protocolsData } from '@/app/helper/data';
import { PremiumLeaf, DnaHelix } from '@/app/components/(common)/Vectors';

export default function ProtocolsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Leaf Structure */}
                <PremiumLeaf className="absolute top-[-5%] right-[-5%] w-96 h-96 rotate-45 text-green-700/20 pointer-events-none" />
                {/* DNA Structure */}
                <DnaHelix className="absolute top-[20%] left-[5%] w-32 h-64 -rotate-12 text-amber-600/20 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-(--deep-green) tracking-tight">
                        Diet Plans & <span className="text-(--luxe-gold)">Protocols</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                        Comprehensive guides for detox, immune support, and recovery.
                    </p>
                </div>
            </section>

            {/* Protocols List */}
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Dynamic Protocols */}
                        {protocolsData.map((protocol) => {
                            // Dynamic Icon mapping (simple mapping for now, can be expanded)
                            const IconComponent = (ICONS as any)[protocol.icon] || ICONS.FileText;

                            return (
                                <Link key={protocol.id} href={`/protocols/${protocol.slug}`} className="group block h-full">
                                    <div className="h-full bg-white border border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:border-(--luxe-gold)/50 flex flex-col">
                                        <div className="w-14 h-14 bg-[#ecfdf5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-7 h-7 text-[#15803d]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-(--luxe-gold) transition-colors">
                                            {protocol.title}
                                        </h3>
                                        <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                                            {protocol.summary}
                                        </p>
                                        <div className="flex items-center font-bold text-(--deep-green) group-hover:text-(--luxe-gold) transition-colors">
                                            View Protocol <ICONS.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}

                        {/* Placeholder for Future Protocols */}
                        <div className="h-full bg-gray-50 border border-dashed border-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center text-center opacity-70">
                            <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center mb-4">
                                <ICONS.Lock className="w-6 h-6 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-400 mb-2">
                                7-Day Detox Blueprint
                            </h3>
                            <p className="text-sm text-gray-400">Coming Soon</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
