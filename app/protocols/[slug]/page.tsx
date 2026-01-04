"use client";

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { protocolsData } from '@/app/helper/data';
import SectionHeader from '@/app/components/(common)/SectionHeader';
import Link from 'next/link';
import ICONS from '@/app/assets/Icons';

interface ProtocolPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ProtocolDetailPage({ params }: ProtocolPageProps) {
    const { slug } = use(params);
    const protocol = protocolsData.find((p) => p.slug === slug);

    if (!protocol) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <Link href="/protocols" className="inline-flex items-center text-gray-400 hover:text-(--deep-green) transition gap-2 mb-4 font-semibold text-sm uppercase tracking-widest">
                        <ICONS.ChevronLeft className="w-4 h-4" /> All Protocols
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-(--deep-green) tracking-tight">
                        {protocol.title}
                    </h1>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                        {protocol.subtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: protocol.content }} />
                </div>
            </section>
        </main>
    );
}
