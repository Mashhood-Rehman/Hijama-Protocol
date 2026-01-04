"use client";

import React from 'react';
import Image from 'next/image';
import { aboutContent } from '@/app/helper/data';
import { PremiumLeaf, DnaHelix } from "../(common)/Vectors";

export default function AboutHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden pt-32 pb-24">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <PremiumLeaf className="absolute top-[10%] left-[2%] w-48 h-48 rotate-45 text-(--herbal-sage)" />
                <DnaHelix className="absolute top-[20%] right-[10%] w-32 h-64 rotate-12 text-gray-400" />
                <DnaHelix className="absolute bottom-[10%] left-[5%] w-32 h-64 -rotate-12 text-gray-400" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 z-10">
                    <div className="space-y-4">
                        <span className="text-green-600 font-semibold tracking-widest uppercase text-sm block">
                            {aboutContent.subheading}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                            {aboutContent.heading}
                        </h1>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                        {aboutContent.philosophy}
                    </p>

                    <div className="p-8 border-l-4 border-(--luxe-gold) bg-gray-50 italic text-gray-600 text-lg leading-relaxed">
                        "{aboutContent.mission}"
                    </div>
                </div>

                <div className="relative aspect-square w-full max-w-lg mx-auto lg:ml-auto">
                    <div className="absolute -inset-4 bg-(--deep-green) rounded-2xl rotate-3 opacity-10"></div>
                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src={aboutContent.image}
                            alt="About Hijama Protocol"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
