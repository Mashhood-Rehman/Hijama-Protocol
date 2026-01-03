"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ICONS from "@/app/assets/Icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useGetProductByIdQuery } from "@/lib/features/products/productsApi";
import { toast } from "react-hot-toast";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: product, isLoading: loading } = useGetProductByIdQuery(id as string, { skip: !id });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleAddToCart = () => {
        if (!product) return;
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            images: product.images
        }));
        toast.success(`${product.name} added to cart!`);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-(--luxe-gold)/20 border-t-(--luxe-gold) rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Product Not Found</h1>
                    <Link href="/" className="inline-block text-(--luxe-gold) hover:underline font-semibold">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-12 transition-colors group"
                >
                    <ICONS.ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Back to Store</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Image Gallery */}
                    <div className="space-y-6">
                        <div className="relative aspect-square rounded-4xl overflow-hidden bg-gray-50 border border-gray-100 group">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-all duration-700"
                            />

                            {/* Manual Carousel Controls */}
                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl text-black hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                                    >
                                        <ICONS.ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl text-black hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                                    >
                                        <ICONS.ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            {/* Image Counter Indicator */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest uppercase">
                                {currentImageIndex + 1} / {product.images.length}
                            </div>
                        </div>

                        {/* Thumbnail Preview Bar */}
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {product.images.map((img: string, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative w-24 aspect-square rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${currentImageIndex === index ? "border-(--luxe-gold) scale-105" : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Product Info */}
                    <div className="space-y-10 lg:sticky lg:top-32">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                                {product.name}
                            </h1>
                            <div className="text-3xl font-bold text-black border-b border-gray-100 pb-6">
                                {product.price}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.details?.map((detail: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                                        <div className="p-1 rounded-full bg-(--luxe-gold)/10 text-(--luxe-gold)">
                                            <ICONS.Check size={14} />
                                        </div>
                                        <span className="text-sm font-medium">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                            <button
                                className="flex-1 cursor-pointer bg-black text-white py-2 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-3 group"
                                onClick={handleAddToCart}
                            >
                                <ICONS.ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
                                Add to Cart
                            </button>
                            <button className="flex-1 cursor-pointer border-2 text-black border-gray-100 py-2 rounded-2xl font-bold text-lg hover:border-black transition-all">
                                Buy Now
                            </button>
                        </div>

                        {/* Additional Features / Trust Badges */}
                        <div className="grid grid-cols-3 gap-6 py-10 border-t border-gray-100">
                            <div className="text-center space-y-2">
                                <div className="flex justify-center text-(--luxe-gold)">
                                    <ICONS.Truck size={28} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Free Shipping</p>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="flex justify-center text-(--luxe-gold)">
                                    <ICONS.ShieldCheck size={28} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Quality Assured</p>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="flex justify-center text-(--luxe-gold)">
                                    <ICONS.Activity size={28} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Formulated by Doctors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
