"use client";

import { videos, conversionSteps } from "@/app/helper/data";
import ICONS from "@/app/assets/Icons";
import SectionHeader from "../(common)/SectionHeader";

export default function Methodology() {
    return (
        <section className="bg-white">
            {/* 1. ATTENTION: Strong Section Header (AIDA - Attention) */}
            <div className="text-center mb-16">
                <SectionHeader
                    heading="The Science of Systemic Restoration"
                    paragraph="Engineered using advanced bio-available compounds to rebuild your cellular integrity from the foundation up."
                />
            </div>

            {/* 2. DUAL CODING & INTEREST: Icons + Text (Dual Coding Theory) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                {conversionSteps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-[#f8f5f0] text-[#1a3a2e] rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#1a3a2e] group-hover:text-white group-hover:scale-110 shadow-sm">
                            <step.icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a3a2e] mb-3">{step.title}</h3>
                        <p className="text-gray-600 max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>

            {/* 3. VISUAL HIERARCHY & DESIRE: Video Gallery (Social Proof & Proof bias) */}
            <div className="bg-[#1a3a2e] rounded-3xl p-8 md:p-12 mb-20 overflow-hidden relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-(--luxe-gold) opacity-5 rounded-full -mr-32 -mt-32"></div>

                <div className="flex flex-col lg:flex-row items-end justify-between mb-10 relative z-10">
                    <div className="max-w-xl text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-(--luxe-gold)/20 text-(--luxe-gold) rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-(--luxe-gold)/30">
                            <ICONS.Users className="w-3 h-3" />
                            Used by 50,000+ Patients Globaly
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Clinical Insights & Proof</h2>
                        <p className="text-gray-400">Watch our doctors and researchers explain the molecular mechanisms behind the Hijama Protocol.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-(--luxe-gold) font-bold hover:underline group">
                        View All Research Videos <ICONS.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {videos.map((video) => (
                        <div key={video.id} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 bg-(--luxe-gold) rounded-full flex items-center justify-center text-[#1a3a2e] scale-90 group-hover:scale-100 transition-transform">
                                        <ICONS.Play className="w-6 h-6 fill-current" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-white text-[10px] font-bold">
                                    {video.duration}
                                </div>
                            </div>
                            <span className="text-(--luxe-gold) text-xs font-bold uppercase tracking-widest">{video.category}</span>
                            <h4 className="text-lg font-bold text-white mt-1 group-hover:text-(--luxe-gold) transition-colors">{video.title}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. PEAK-END RULE & FITTS'S LAW: Strong Ending CTA (Action) */}
            <div className="text-center">
                <div className="inline-block p-1 rounded-2xl bg-linear-to-r from-transparent via-(--luxe-gold)/20 to-transparent mb-8">
                    <p className="text-gray-500 text-sm italic font-medium">
                        "The most comprehensive restoration protocol I have seen in 20 years of practice." — Dr. Delgado
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    {/* Fitts's Law: Large, easy-clickable button */}
                    <button className="btn-brown btn">
                        Secure Your Protocol Bundle Now
                    </button>
                    <div className="mt-6 flex items-center gap-6 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                            <ICONS.ShieldCheck className="w-4 h-4 text-green-600" />
                            Money-back Guarantee
                        </div>
                        <div className="flex items-center gap-1">
                            <ICONS.ShieldCheck className="w-4 h-4 text-green-600" />
                            Lab Verified
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
