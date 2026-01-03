"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Link from "next/link";
import ICONS from "@/app/assets/Icons";
import { useState } from "react";

export default function CheckoutPage() {
    const { items } = useSelector((state: RootState) => state.cart);
    const [paymentMethod, setPaymentMethod] = useState("card");

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 15;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-(--deep-green) flex flex-col items-center justify-center p-4">
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                        <ICONS.ShoppingCart size={40} className="text-gray-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Your cart is empty</h1>
                    <p className="text-gray-400 max-w-xs mx-auto">Add some premium clinical products to your cart before checking out.</p>
                    <Link href="/" className="inline-block bg-linear-to-r from-(--luxe-gold) to-[#A67C37] text-(--charcoal-black) px-8 py-3 rounded-xl font-bold transition-transform hover:scale-105">
                        Browse Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-(--deep-green) text-white pt-28 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT SIDE: FORM */}
                    <div className="flex-1 space-y-8">
                        {/* Shipping Information */}
                        <section className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <ICONS.Users size={20} className="text-(--luxe-gold)" />
                                Shipping Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">First Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Last Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) transition-all" placeholder="Doe" />
                                </div>
                                <div className="md:col-span-2 space-y-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Address</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) transition-all" placeholder="123 Luxury Avenue" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">City</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) transition-all" placeholder="New York" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Postal Code</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) transition-all" placeholder="10001" />
                                </div>
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <ICONS.ShieldCheck size={20} className="text-(--luxe-gold)" />
                                Payment Method
                            </h2>
                            <div className="space-y-4">
                                <button
                                    onClick={() => setPaymentMethod("card")}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${paymentMethod === 'card' ? 'bg-(--luxe-gold)/10 border-(--luxe-gold)' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-(--luxe-gold)' : 'border-gray-500'}`}>
                                            {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-(--luxe-gold) rounded-full"></div>}
                                        </div>
                                        <span className="font-medium text-sm text-white">Credit / Debit Card</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-5 bg-white/10 rounded"></div>
                                        <div className="w-8 h-5 bg-white/10 rounded"></div>
                                    </div>
                                </button>

                                {paymentMethod === "card" && (
                                    <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-black/20 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="col-span-2 space-y-1.5">
                                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Card Number</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none" placeholder="0000 0000 0000 0000" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Expiry Date</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none" placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">CVV</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm focus:outline-none" placeholder="123" />
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={() => setPaymentMethod("crypto")}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${paymentMethod === 'crypto' ? 'bg-(--luxe-gold)/10 border-(--luxe-gold)' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'crypto' ? 'border-(--luxe-gold)' : 'border-gray-500'}`}>
                                            {paymentMethod === 'crypto' && <div className="w-2.5 h-2.5 bg-(--luxe-gold) rounded-full"></div>}
                                        </div>
                                        <span className="font-medium text-sm">Crypto Payment (BTC, ETH)</span>
                                    </div>
                                    <ICONS.Menu size={18} className="text-gray-500" />
                                </button>

                                <button
                                    onClick={() => setPaymentMethod("bank")}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${paymentMethod === 'bank' ? 'bg-(--luxe-gold)/10 border-(--luxe-gold)' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'bank' ? 'border-(--luxe-gold)' : 'border-gray-500'}`}>
                                            {paymentMethod === 'bank' && <div className="w-2.5 h-2.5 bg-(--luxe-gold) rounded-full"></div>}
                                        </div>
                                        <span className="font-medium text-sm">Bank Transfer</span>
                                    </div>
                                    <ICONS.ShieldCheck size={18} className="text-gray-500" />
                                </button>
                            </div>
                        </section>

                        <button className="w-full bg-linear-to-r from-(--luxe-gold) to-[#A67C37] text-(--charcoal-black) py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] active:scale-[0.99] flex items-center justify-center gap-2 group">
                            Complete Order
                            <ICONS.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* RIGHT SIDE: ORDER SUMMARY */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl sticky top-28">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar mb-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <div className="w-16 h-16 bg-white/5 rounded-xl border border-white/10 shrink-0 relative overflow-hidden">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-white truncate">{item.name}</h3>
                                            <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-sm font-bold text-(--luxe-gold)">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-white/5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Subtotal</span>
                                    <span className="text-white">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Shipping</span>
                                    <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>
                                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-2xl font-black text-(--luxe-gold)">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center text-center">
                                    <ICONS.ShieldCheck size={20} className="text-(--luxe-gold) mb-2" />
                                    <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Secure Payment</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <ICONS.Menu size={20} className="text-(--luxe-gold) mb-2" />
                                    <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Fast Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
