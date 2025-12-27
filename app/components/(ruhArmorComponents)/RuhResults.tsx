"use client";

import { ruhArmorBenefits } from "@/app/helper/data";
import ICONS from "@/app/assets/Icons";

export default function RuhResults() {
    return (
        <section className="bg-(--deep-green) text-white py-24 px-6 relative overflow-hidden">
            {/* Decorative leaf */}
            <div className="absolute top-[-10%] right-[-5%] opacity-10 rotate-12">
                <ICONS.Droplet size={400} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl leading-tight">
                            Results & <span className="text-(--luxe-gold)">Benefits</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Potential benefits of consistent use may include a total system upgrade at the cellular level.
                        </p>

                        <div className="space-y-4">
                            {ruhArmorBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-(--luxe-gold)/20 border border-(--luxe-gold)/50 flex items-center justify-center shrink-0 group-hover:bg-(--luxe-gold) transition-colors">
                                        <ICONS.Check size={14} className="text-(--luxe-gold) group-hover:text-black" />
                                    </div>
                                    <span className="text-lg md:text-xl text-gray-100">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10 space-y-8">
                        <div className="text-center space-y-4">
                            <h3 className="text-3xl font-serif text-(--luxe-gold)">Comprehensive Support</h3>
                            <p className="text-gray-400">
                                RÜH-ARMOR™ is not a single-action supplement; it is a multi-layered system engineered for whole-body support at the cellular level.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                                <p className="text-3xl font-bold text-(--luxe-gold)">95%</p>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Absorption</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                                <p className="text-3xl font-bold text-(--luxe-gold)">5-in-1</p>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Matrix</p>
                            </div>
                        </div>

                        <button className="w-full btn btn-brown transition-transform hover:scale-[1.02]">
                            Start Your Upgrade
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
