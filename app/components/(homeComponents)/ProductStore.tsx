"use client";

import SectionHeader from "../(common)/SectionHeader";
import ProductCard from "./ProductCard";
import { products } from "../../helper/data";

export default function ProductStore() {
    return (
        <section id="store">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <SectionHeader heading="The Protocol Shop" />
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Premium formulations designed to support your body's natural detoxification
                        and defense systems through science-backed ingredients.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-4xl bg-gray-50 border border-gray-100 text-center space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Need a Custom Protocol?</h3>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Our experts can help you choose the right combination of products for
                        your specific health goals.
                    </p>
                    <button className="bg-(--luxe-gold) cursor-pointer text-white px-8 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-(--luxe-gold)/20">
                        Get Professional Advice
                    </button>
                </div>
            </div>
        </section>
    );
}
