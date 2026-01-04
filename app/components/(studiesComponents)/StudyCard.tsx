"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StudyCardProps {
    slug?: string;
    speaker: string;
    role: string;
    topic: string;
    findings: string;
    warning: string;
    image: string;
}

export default function StudyCard({ slug, speaker, role, topic, findings, warning, image }: StudyCardProps) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all hover:shadow-2xl group">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                        src={image}
                        alt={speaker}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                        <div className="text-white">
                            <p className="text-xl font-bold">{speaker}</p>
                            <p className="text-sm opacity-90">{role}</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-4">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                        Critical Research
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                        {topic}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {findings}
                    </p>
                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-red-500">
                        <p className="text-sm text-red-700 font-bold uppercase tracking-tight mb-1">Warning:</p>
                        <p className="text-gray-800 italic">{warning}</p>
                    </div>
                    {slug ? (
                        <Link href={`/studies/${slug}`} className="btn btn-green w-full py-4 text-white font-semibold flex items-center justify-center gap-2">
                            Access Full Study
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    ) : (
                        <button className="btn btn-green w-full py-4 text-white font-semibold flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                            Summary Only
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
