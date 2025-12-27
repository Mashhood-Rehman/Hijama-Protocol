"use client";

import { trustElements } from "@/app/helper/data";
import { ShoppingBag, Download, MessageCircle, Shield, Truck, Award } from "lucide-react";


export default function FinalConversion() {
    return (
        <section className="py-24 px-5 bg-linear-to-br from-[#1a3a2e] via-[#2d5a4a] to-[#1a3a2e] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Main Content */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Rebuild Your Cellular Foundation —<br />Starting Today
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Join thousands who have transformed their health at the deepest level
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="group w-full sm:w-auto px-8 py-4 bg-(--luxe-gold) text-[#1a3a2e] font-bold rounded-lg hover:bg-[#d4b87a] transition shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Shop All Products
                        </button>

                        <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition flex items-center justify-center gap-3">
                            <Download className="w-5 h-5" />
                            Download All Studies
                        </button>

                        <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition flex items-center justify-center gap-3">
                            <MessageCircle className="w-5 h-5" />
                            Join Telegram Community
                        </button>
                    </div>

                    {/* Trust Elements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {trustElements.map((element, index) => {
                            const IconComponent = element.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition"
                                >
                                    <div className="w-16 h-16 bg-(--luxe-gold) rounded-full flex items-center justify-center mb-4">
                                        <IconComponent className="w-8 h-8 text-[#1a3a2e]" />
                                    </div>
                                    <p className="font-semibold text-lg">{element.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Additional Trust Badges */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-(--luxe-gold) rounded-full"></div>
                            <span>Secure Checkout</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-(--luxe-gold) rounded-full"></div>
                            <span>5,000+ Happy Customers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-(--luxe-gold) rounded-full"></div>
                            <span>Endorsed by 12+ Doctors</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-(--luxe-gold) rounded-full"></div>
                            <span>Made in USA</span>
                        </div>
                    </div>
                </div>

                {/* Final Urgency Element */}
                <div className="mt-8 text-center">
                    <p className="text-(--luxe-gold) font-semibold text-lg">
                        Limited Time: First Order Ships Within 24 Hours
                    </p>
                </div>
            </div>
        </section>
    );
}