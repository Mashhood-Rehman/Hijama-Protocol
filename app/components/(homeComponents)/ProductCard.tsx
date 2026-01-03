"use client";

import Image from "next/image";
import Link from "next/link";
import ICONS from "../../assets/Icons";
import { Product } from "../../helper/data";

import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { toast } from "react-hot-toast";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            images: product.images
        }));
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link href={`/products/${product.id}`} className="block relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </Link>

            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <Link href={`/products/${product.id}`}>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-(--luxe-gold) transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                    <span className="text-lg font-bold text-(--luxe-gold)">
                        ${(Number(product.price) || 0).toFixed(2)}
                    </span>
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
                    onClick={handleAddToCart}
                >
                    <ICONS.ShoppingCart size={20} className="group-hover/btn:scale-110 transition-transform" />
                </button>
            </div>
        </div>
    );
}
