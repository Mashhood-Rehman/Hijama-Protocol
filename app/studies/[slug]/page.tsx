"use client";

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { studiesData } from '@/app/helper/data';
import ICONS from '@/app/assets/Icons';

interface StudyPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function StudyDetailPage({ params }: StudyPageProps) {
    const { slug } = use(params);
    const study = studiesData.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="relative h-[60vh] min-h-[500px]">
                <Image
                    src={study.image}
                    alt={study.topic}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-black/30"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24">
                    <div className="max-w-7xl mx-auto space-y-6">
                        <Link href="/studies" className="inline-flex items-center text-white/80 hover:text-white transition gap-2 mb-4">
                            <ICONS.ChevronLeft className="w-5 h-5" /> Back to Research
                        </Link>

                        <div className="flex flex-wrap items-center gap-4">
                            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/10">
                                Clinical Study
                            </span>
                            <span className="px-4 py-1.5 bg-red-500/20 backdrop-blur-md rounded-full text-red-200 text-sm font-semibold border border-red-500/30">
                                Critical Findings
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
                            {study.topic}
                        </h1>

                        <div className="flex items-center gap-4 text-white/90">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                <ICONS.User className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">{study.speaker}</p>
                                <p className="text-sm opacity-80">{study.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    {/* Summary Card */}
                    <div className="bg-gray-50 border-l-4 border-(--luxe-gold) p-8 rounded-r-xl mb-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Study Overview</h3>
                        <p className="text-gray-700 italic text-lg leading-relaxed">"{study.findings}"</p>
                    </div>

                    {/* Main Content */}
                    <article className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-headings:text-(--deep-green) prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 max-w-none">
                        <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: study.content || '' }} />
                    </article>

                    {/* Warning Footer */}
                    {study.warning && (
                        <div className="mt-16 bg-red-50 border border-red-100 rounded-2xl p-8 flex gap-6 items-start">
                            <div className="bg-red-100 p-3 rounded-full shrink-0">
                                <ICONS.Shield className="w-6 h-6 text-red-600" />
                            </div>
                            <div>notepadno
                                <h4 className="text-lg font-bold text-red-700 mb-2">Researcher Warning</h4>
                                <p className="text-red-800/80 leading-relaxed">
                                    {study.warning}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
