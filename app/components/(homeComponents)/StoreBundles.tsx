"use client";

import { bundles } from "@/app/helper/data";
import SectionHeader from "../(common)/SectionHeader";

export default function StoreBundles() {
    return (
        <section>
            <div className="text-center mb-16">
                <SectionHeader heading="Store & Bundles" paragraph="Premium protection packages designed for your wellness journey" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bundles.map((bundle) => {
                    const IconComponent = bundle.icon;
                    return (
                        <div
                            key={bundle.id}
                            className={`relative rounded-xl border-2 p-6 flex flex-col h-full transition-all hover:shadow-xl ${bundle.featured
                                ? "border-(--gold) bg-linear-to-br from-[#faf8f3] to-white"
                                : "border-gray-200 bg-white hover:border-[#8fb996]"
                                }`}
                        >
                            {bundle.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-(--gold) text-white px-4 py-1 rounded-full text-xs font-bold">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${bundle.featured ? "bg-(--gold)" : "bg-[#1a3a2e]"
                                        }`}
                                >
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-lg text-[#1a3a2e]">
                                    {bundle.name}
                                </h3>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">{bundle.description}</p>

                            <div className="mb-4 space-y-2 flex-grow">
                                {bundle.products.map((product, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#8fb996] rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-700">{product}</span>
                                    </div>
                                ))}
                            </div>

                            {bundle.includes && (
                                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                    <p className="text-xs text-gray-600 font-medium">
                                        {bundle.includes}
                                    </p>
                                </div>
                            )}

                            <div className="border-t pt-4 mt-auto">
                                <div className="flex items-baseline justify-between mb-3">
                                    <span className="text-3xl font-bold text-[#1a3a2e]">
                                        {bundle.price}
                                    </span>
                                    <span className="text-sm font-semibold text-(--gold)">
                                        {bundle.savings}
                                    </span>
                                </div>

                                <button className="w-full py-3 bg-[#1a3a2e] text-white font-semibold rounded-lg hover:bg-[#2d5a4a] transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}