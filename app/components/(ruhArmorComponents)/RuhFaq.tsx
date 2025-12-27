"use client";

import { ruhArmorFaq } from "@/app/helper/data";
import { useState } from "react";
import ICONS from "@/app/assets/Icons";

export default function RuhFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl text-(--deep-green)">
                        Frequently Asked <span className="text-(--luxe-gold)">Questions</span>
                    </h2>
                    <p className="text-gray-500">Everything you need to know about RÜH-ARMOR™</p>
                </div>

                <div className="space-y-4">
                    {ruhArmorFaq.map((item, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-(--luxe-gold) bg-gray-50' : 'border-gray-200'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-3 cursor-pointer text-left"
                            >
                                <span className="text-lg font-semibold text-(--deep-green-dark)">{item.question}</span>
                                <ICONS.ChevronRight
                                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90 text-(--luxe-gold)' : 'text-gray-400'}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center p-8 bg-gray-50 rounded-4xl border border-dashed border-gray-300">
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <button className="text-(--deep-green) font-bold hover:text-(--luxe-gold) transition-colors">
                        Contact our support team
                    </button>
                </div>
            </div>
        </section>
    );
}
