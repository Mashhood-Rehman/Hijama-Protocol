"use client";

import { useState } from "react";
import ICONS from "../../../../assets/Icons";
import NextLink from "next/link";

export default function AddProductPage() {
    const [formData, setFormData] = useState({
        name: "",
        category: "Kits",
        price: "",
        stock: "",
        description: "",
        status: "Draft"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Product added successfully (Frontend Only Demo)");
        window.location.href = "/admin/dashboard";
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <NextLink
                        href="/admin/dashboard"
                        className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                    >
                        <ICONS.ChevronLeft size={24} />
                    </NextLink>
                    <h1 className="text-2xl font-bold text-white">Add New Product</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors text-sm">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="btn btn-brown px-6 py-2 text-sm h-auto"
                    >
                        Save Product
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                        <h3 className="text-lg font-semibold text-white">General Information</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Product Name</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                                placeholder="e.g. Premium Hijama Cups"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                            <textarea
                                rows={6}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) resize-none"
                                placeholder="Write product details here..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            ></textarea>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                        <h3 className="text-lg font-semibold text-white">Inventory & Pricing</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Price ($)</label>
                                <input
                                    type="number"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Stock Quantity</label>
                                <input
                                    type="number"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                                    placeholder="0"
                                    value={formData.stock}
                                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                        <h3 className="text-lg font-semibold text-white">Status</h3>
                        <select
                            className="w-full bg-[#0A2F23] border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                            <option value="Active">Active</option>
                            <option value="Draft">Draft</option>
                            <option value="Archived">Archived</option>
                        </select>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                        <h3 className="text-lg font-semibold text-white">Category</h3>
                        <select
                            className="w-full bg-[#0A2F23] border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="Kits">Hijama Kits</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Education">Education</option>
                            <option value="Equipment">Equipment</option>
                        </select>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                        <h3 className="text-lg font-semibold text-white">Product Image</h3>
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-(--luxe-gold) transition-colors cursor-pointer">
                            <ICONS.Droplet className="text-gray-500 group-hover:text-(--luxe-gold) mb-2" size={32} />
                            <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
