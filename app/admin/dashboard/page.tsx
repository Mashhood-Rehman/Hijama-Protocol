"use client";

import { useState } from "react";
import ICONS from "../../assets/Icons";
import NextLink from "next/link";

const MOCK_PRODUCTS = [
    { id: 1, name: "Premium Hijama Kit", category: "Kits", price: 49.99, stock: 124, status: "Active" },
    { id: 2, name: "Luxury Cupping Oil", category: "Accessories", price: 29.99, stock: 45, status: "Active" },
    { id: 3, name: "Pro Massage Table", category: "Equipment", price: 199.99, stock: 12, status: "Draft" },
    { id: 4, name: "Herbology Guide", category: "Education", price: 19.99, stock: 500, status: "Active" },
];

export default function AdminProductsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="flex items-center gap-4 flex-1">
                    <div className="relative flex-1 max-w-sm">
                        <ICONS.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                        <ICONS.Filter size={16} />
                        <span>Filter</span>
                    </button>
                </div>

                <NextLink
                    href="/admin/dashboard/products/add"
                    className="btn btn-brown flex items-center gap-2 px-6 py-2.5 h-auto text-sm"
                >
                    <ICONS.Plus size={18} />
                    <span>Add Product</span>
                </NextLink>
            </div>

            {/* Products Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Stock</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {MOCK_PRODUCTS.map((product) => (
                                <tr key={product.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-(--deep-green) to-(--deep-green-dark) border border-white/10 flex items-center justify-center text-(--luxe-gold)">
                                                <ICONS.Package size={20} />
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">{product.name}</div>
                                                <div className="text-xs text-gray-500">#{product.id.toString().padStart(4, '0')}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-300">{product.category}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-white">${product.price.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-white">{product.stock} units</span>
                                            <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-(--luxe-gold)"
                                                    style={{ width: `${Math.min((product.stock / 500) * 100, 100)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === "Active"
                                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                            }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                <ICONS.Edit size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-red-400/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors">
                                                <ICONS.Trash size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Showing 1 to 4 of 24 results</span>
                    <div className="flex items-center gap-2">
                        <button className="p-2 disabled:opacity-50 text-gray-400 hover:text-white"><ICONS.ChevronLeft size={20} /></button>
                        <button className="w-8 h-8 rounded-lg bg-(--luxe-gold) text-(--charcoal-black) text-sm font-bold">1</button>
                        <button className="p-2 text-gray-400 hover:text-white"><ICONS.ChevronRight size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
