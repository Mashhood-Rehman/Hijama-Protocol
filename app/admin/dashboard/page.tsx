"use client";

import { useState, useEffect } from "react";
import ICONS from "../../assets/Icons";
import NextLink from "next/link";
import { toast } from "react-hot-toast";

export default function AdminProductsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, name: string) => {
        toast((t) => (
            <div className="flex flex-col gap-3 min-w-[200px]">
                <p className="text-sm font-medium">Delete <span className="text-(--luxe-gold)">{name}</span>?</p>
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="px-3 py-1.5 text-xs rounded-lg border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={async () => {
                            toast.dismiss(t.id);
                            const loadingToast = toast.loading("Deleting product...");
                            try {
                                const response = await fetch(`/api/products/${id}`, {
                                    method: "DELETE",
                                });
                                if (response.ok) {
                                    toast.success("Product deleted successfully", { id: loadingToast });
                                    fetchProducts();
                                } else {
                                    const errorData = await response.json();
                                    toast.error(errorData.error || "Failed to delete product", { id: loadingToast });
                                }
                            } catch (error) {
                                toast.error("An error occurred while deleting the product", { id: loadingToast });
                            }
                        }}
                        className="px-3 py-1.5 text-xs bg-red-500/80 hover:bg-red-500 text-white rounded-lg transition-colors font-semibold cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        ), {
            duration: 6000,
            style: {
                background: "#0A2F23",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = (Array.isArray(products) ? products : []).filter((p: any) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="flex items-center gap-4 flex-1">
                    <div className="relative flex-1 max-w-sm">
                        <ICONS.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search products by name..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
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
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Stock</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        Loading products...
                                    </td>
                                </tr>
                            ) : filteredProducts.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        No products found.
                                    </td>
                                </tr>
                            ) : (
                                filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-(--deep-green) to-(--deep-green-dark) border border-white/10 flex items-center justify-center text-(--luxe-gold)">
                                                    <ICONS.Package size={20} />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white">{product.name}</div>
                                                    <div className="text-xs text-gray-500">#{product.id.toString().slice(-6)}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-white">${product.price.toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm text-white">{product.stock || 0} units</span>
                                                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-(--luxe-gold)"
                                                        style={{ width: `${Math.min(((product.stock || 0) / 500) * 100, 100)}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === "Active"
                                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                                }`}>
                                                {product.status || 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <NextLink
                                                    href={`/admin/dashboard/products/add?id=${product.id}`}
                                                    className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
                                                >
                                                    <ICONS.Edit size={16} />
                                                </NextLink>
                                                <button
                                                    onClick={() => handleDelete(product.id, product.name)}
                                                    className="p-2 hover:bg-red-400/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                                                >
                                                    <ICONS.Trash size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Showing 1 to 4 of 24 results</span>
                    <div className="flex items-center gap-2">
                        <button className="p-2 disabled:opacity-50 text-gray-400 hover:text-white cursor-pointer"><ICONS.ChevronLeft size={20} /></button>
                        <button className="w-8 h-8 rounded-lg bg-(--luxe-gold) text-(--charcoal-black) text-sm font-bold cursor-pointer">1</button>
                        <button className="p-2 text-gray-400 hover:text-white cursor-pointer"><ICONS.ChevronRight size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
