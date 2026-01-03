"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import ICONS from "../../../../assets/Icons";
import NextLink from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function AddProductContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const productId = searchParams.get("id");
    const isEdit = !!productId;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        description: "",
        status: "Draft",
        imageUrl: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        if (isEdit) {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`/api/products/${productId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setFormData({
                            name: data.name || "",
                            price: data.price !== undefined && data.price !== null ? data.price.toString() : "",
                            stock: data.stock !== undefined && data.stock !== null ? data.stock.toString() : "0",
                            description: data.description || "",
                            status: data.status || "Draft",
                            imageUrl: (data.images && data.images.length > 0) ? data.images[0] : ""
                        });
                    } else {
                        const errorData = await response.json();
                        toast.error(errorData.error || "Failed to fetch product details");
                    }
                } catch (error) {
                    console.error("Fetch product error:", error);
                    toast.error("An error occurred while fetching product details");
                }
            };
            fetchProduct();
        }
    }, [isEdit, productId]);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const uploadToast = toast.loading("Uploading image...");

        const formDataUpload = new FormData();
        formDataUpload.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formDataUpload,
            });

            if (response.ok) {
                const data = await response.json();
                setFormData(prev => ({ ...prev, imageUrl: data.url }));
                toast.success("Image uploaded successfully", { id: uploadToast });
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || "Upload failed", { id: uploadToast });
            }
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("An error occurred during upload", { id: uploadToast });
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const saveToast = toast.loading(isEdit ? "Updating product..." : "Saving product...");

        try {
            const apiUrl = isEdit ? `/api/products/${productId}` : "/api/products";
            const response = await fetch(apiUrl, {
                method: isEdit ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                    stock: parseInt(formData.stock) || 0,
                    images: [formData.imageUrl || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070"]
                }),
            });

            if (response.ok) {
                toast.success(isEdit ? "Product updated successfully" : "Product saved successfully", { id: saveToast });
                router.push("/admin/dashboard");
            } else {
                const data = await response.json();
                toast.error(data.error || "Failed to save product", { id: saveToast });
            }
        } catch (error) {
            console.error("Save error:", error);
            toast.error("An error occurred while saving the product.", { id: saveToast });
        } finally {
            setIsLoading(false);
        }
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
                    <h1 className="text-2xl font-bold text-white">{isEdit ? "Edit Product" : "Add New Product"}</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors text-sm">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className={`btn btn-brown px-6 py-2 text-sm h-auto flex items-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                <span>{isEdit ? "Updating..." : "Saving..."}</span>
                            </>
                        ) : (
                            <span>{isEdit ? "Update Product" : "Save Product"}</span>
                        )}
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
                        <h3 className="text-lg font-semibold text-white">Product Image</h3>

                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-(--luxe-gold) transition-colors cursor-pointer relative overflow-hidden h-48"
                        >
                            {formData.imageUrl ? (
                                <img
                                    src={formData.imageUrl}
                                    alt="Preview"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity"
                                />
                            ) : null}

                            <div className="relative z-10">
                                {isUploading ? (
                                    <span className="w-8 h-8 border-3 border-white/20 border-t-(--luxe-gold) rounded-full animate-spin inline-block"></span>
                                ) : (
                                    <>
                                        <ICONS.Droplet className="text-gray-500 group-hover:text-(--luxe-gold) mb-2 mx-auto" size={32} />
                                        <p className="text-sm text-gray-400">Click to upload image</p>
                                    </>
                                )}
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                className="hidden"
                                accept="image/*"
                            />
                        </div>

                        <div className="pt-4">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Or Image URL</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                                placeholder="https://unsplash.com/..."
                                value={formData.imageUrl}
                                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AddProductPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-white/10 border-t-(--luxe-gold) rounded-full animate-spin"></div>
            </div>
        }>
            <AddProductContent />
        </Suspense>
    );
}
