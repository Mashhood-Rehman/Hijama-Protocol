"use client";

import React from 'react';
import AboutHero from '../components/(aboutComponents)/AboutHero';
import Disclaimer from '../components/(common)/Disclaimer';
import USPTable from '../components/(common)/USPTable';
import FinalConversion from '../components/(homeComponents)/FinalConversion';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <Disclaimer />
            <USPTable />
            <div className="max-w-7xl mx-auto px-4 py-24">
                <FinalConversion />
            </div>
        </main>
    );
}
