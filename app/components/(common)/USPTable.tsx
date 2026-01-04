import React from 'react';
import ICONS from '@/app/assets/Icons';
import { PremiumLeaf, DnaHelix } from './Vectors';

const uspData = [
    {
        our: "We are the only Muslim-centric company supporting the removal of the deadly spike protein.",
        others: "X",
        products: "X"
    },
    {
        our: "Our flagship supplement, enhanced by modern technology, deactivates 99% of spike proteins.",
        others: "No other companies offering that level of effectiveness.",
        products: "Standard NAC only deactivates around 11%."
    },
    {
        our: "Our flagship product dissolves 68% of blood clots; no other natural supplement comes close.",
        others: "Much inferior products from other companies.",
        products: "Much inferior products on the market."
    },
    {
        our: "We're leading innovation in cognitive and cellular health, tackling autism, ADHD, and cancers.",
        others: "No other company is as laser-focused as us in these areas.",
        products: "No other supplements designed for this."
    },
    {
        our: "We're advancing Hijama by merging traditional detox with modern supplements.",
        others: "No other companies are doing this.",
        products: "No products offering this combination."
    },
    {
        our: "We provide a community safe space on Telegram, a learning source for discussion and gaining valuable information.",
        others: "Other companies lack such a dedicated, supportive community space.",
        products: "Other products don't come with a learning platform like this."
    },
    // From second image
    {
        our: "We put people before profits, children before chemicals, with a purpose to purify the cells of the body one at a time.",
        others: "Many other companies prioritize profit over people.",
        products: "Many products focus on sales rather than holistic well-being."
    },
    {
        our: "As a forward-thinking company, we've identified that the majority of supplements on the market fail to deliver full benefits, often going to the wrong place in the body or being flushed out. We aim not only to educate people about this, but to create products that solve that problem.",
        others: "X",
        products: "X"
    }
];

export default function USPTable() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden">
            {/* DNA Structure */}
            <DnaHelix className="absolute top-[10%] left-[-2%] w-48 h-96 rotate-12 text-amber-600/20 pointer-events-none" />
            {/* Leaf Structure */}
            <PremiumLeaf className="absolute bottom-[-10%] right-[-5%] w-80 h-80 -rotate-12 text-green-700/20 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-(--deep-green) mb-4">
                        Why We Are <span className="text-(--luxe-gold)">Different</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how Hijama Protocol compares to the industry standard.
                    </p>
                </div>

                <div className="overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100">
                    <div className="grid grid-cols-12 bg-(--deep-green) text-white text-lg font-bold p-6 hidden md:grid">
                        <div className="col-span-12 md:col-span-5 pl-4">Our Company</div>
                        <div className="col-span-12 md:col-span-3 lg:col-span-3 opacity-80">Other Companies</div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-4 opacity-80">Other Products</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {uspData.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 hover:bg-[#ecfdf5]/30 transition-colors gap-4 md:gap-0">
                                {/* Mobile Labels are handled via simple stacking, creating a card-like feel on mobile */}

                                <div className="col-span-1 md:col-span-5 md:pr-8 flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-(--luxe-gold) flex items-center justify-center">
                                            <ICONS.Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <p className="text-gray-900 font-bold leading-relaxed">{row.our}</p>
                                </div>

                                <div className="col-span-1 md:col-span-3 lg:col-span-3 flex gap-4 md:block text-gray-500 text-sm md:text-base border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 md:border-none">
                                    <span className="md:hidden font-bold text-gray-400 w-32 shrink-0">Others:</span>
                                    {row.others === "X" ? (
                                        <span className="text-red-300 font-bold text-xl px-2">—</span>
                                    ) : (
                                        <p>{row.others}</p>
                                    )}
                                </div>

                                <div className="col-span-1 md:col-span-4 lg:col-span-4 flex gap-4 md:block text-gray-500 text-sm md:text-base border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 md:border-none">
                                    <span className="md:hidden font-bold text-gray-400 w-32 shrink-0">Products:</span>
                                    {row.products === "X" ? (
                                        <span className="text-red-300 font-bold text-xl px-2">—</span>
                                    ) : (
                                        <p>{row.products}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
