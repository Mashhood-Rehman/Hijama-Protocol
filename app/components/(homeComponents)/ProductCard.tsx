"use client";

import Image from "next/image";
import Link from "next/link";
import ICONS from "../../assets/Icons";
import { Product } from "../../helper/data";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link href={`/products/${product.id}`} className="block relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-black">
                        {product.category}
                    </span>
                </div>
            </Link>

            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <Link href={`/products/${product.id}`}>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-(--luxe-gold) transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                    <span className="text-lg font-bold text-(--luxe-gold)">{product.price}</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
                <Link
                    href={`/products/${product.id}`}
                    className="flex-1 bg-black text-white text-center py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
                >
                    View Details
                </Link>
                <button
                    className="p-3 rounded-xl border border-gray-100 hover:border-(--luxe-gold) hover:text-(--luxe-gold) transition-all group/btn"
                    onClick={() => console.log(`Added ${product.name} to cart`)}
                >
                    <ICONS.ShoppingCart size={20} className="group-hover/btn:scale-110 transition-transform" />
                </button>
            </div>
        </div>
    );
}
