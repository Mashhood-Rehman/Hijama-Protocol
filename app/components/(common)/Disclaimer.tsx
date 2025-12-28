"use client";

import React from 'react';

export default function Disclaimer() {
    return (
        <section className="w-full bg-(--deep-green) py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-(--luxe-gold) font-bold text-3xl md:text-5xl tracking-tight uppercase">
                    Public Benefit & Fair Use Notice
                </h2>
                <div className="w-24 h-1 bg-(--luxe-gold) mx-auto opacity-50"></div>
                <p className="text-white text-lg md:text-2xl leading-relaxed font-light opacity-90">
                    Hijama Protocol is committed to providing trustworthy information under
                    <span className="font-semibold px-2 text-(--luxe-gold)">"Fair Use"</span> principles.
                    Our mission is to support individuals affected by modern environmental challenges,
                    including myocarditis, pericarditis, and blood clots, by promoting effective
                    natural detoxification and the removal of synthetic spike proteins.
                </p>
                <div className="flex justify-center pt-6">
                    <div className="px-8 py-3 border border-(--luxe-gold)/40 text-(--luxe-gold) text-xs font-bold rounded-full tracking-widest uppercase bg-(--luxe-gold)/5">
                        The Hijama Protocol Philosophy
                    </div>
                </div>
            </div>
        </section>
    );
}
