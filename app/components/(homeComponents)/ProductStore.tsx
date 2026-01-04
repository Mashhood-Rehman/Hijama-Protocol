"use client";

import { useState, useEffect } from "react";
import SectionHeader from "../(common)/SectionHeader";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/lib/features/products/productsApi";
import { PremiumLeaf, DnaHelix } from "../(common)/Vectors";

export default function ProductStore() {
    const { data: products = [], isLoading: loading, isError } = useGetProductsQuery();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (isError) {
        return (
            <div className="text-center py-20 text-red-500">
                Failed to load products. Please try again later.
            </div>
        );
    }

    return (
        <section id="store" className="scroll-mt-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <DnaHelix className="absolute top-[10%] left-[-5%] w-32 h-64 rotate-12 text-gray-400" />
                <DnaHelix className="absolute bottom-[20%] right-[-5%] w-32 h-64 -rotate-12 text-gray-400" />
                <PremiumLeaf className="absolute top-[40%] right-[2%] w-48 h-48 rotate-45 text-(--herbal-sage)" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <SectionHeader heading="The Protocol Shop" />
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg -mt-8">
                        Premium formulations designed to support your body&apos;s natural detoxification and defense systems through science-backed ingredients.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-12 h-12 border-4 border-gray-200 border-t-(--luxe-gold) rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                <div className="mt-20 p-10 rounded-4xl bg-gray-50 border border-gray-100 text-center space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Need a Custom Protocol?</h3>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Our experts can help you choose the right combination of products for your specific health goals.
                    </p>
                    <button className="bg-(--luxe-gold) cursor-pointer text-white px-8 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-(--luxe-gold)/10">
                        Get Professional Advice
                    </button>
                </div>
            </div>
        </section>
    );
}
