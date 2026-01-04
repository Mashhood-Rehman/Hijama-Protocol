"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import ICONS from "@/app/assets/Icons";

function AddBlogForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const blogId = searchParams.get("id");

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!!blogId);
    const [isUploading, setIsUploading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        excerpt: "",
        images: [] as string[],
        category: "General",
        status: "Draft",
        slug: "",
    });

    useEffect(() => {
        if (blogId) {
            const fetchBlog = async () => {
                try {
                    const response = await fetch(`/api/blogs/${blogId}`);
                    const data = await response.json();
                    if (response.ok) {
                        setFormData({
                            title: data.title || "",
                            content: data.content || "",
                            excerpt: data.excerpt || "",
                            images: data.images || [],
                            category: data.category || "General",
                            status: data.status || "Draft",
                            slug: data.slug || "",
                        });
                    } else {
                        toast.error(data.error || "Failed to fetch blog");
                    }
                } catch (error) {
                    toast.error("An error occurred while fetching the blog");
                } finally {
                    setFetching(false);
                }
            };
            fetchBlog();
        }
    }, [blogId]);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setIsUploading(true);
        const uploadToast = toast.loading(`Uploading ${files.length} image(s)...`);

        const formDataUpload = new FormData();
        Array.from(files).forEach(file => {
            formDataUpload.append("file", file);
        });

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formDataUpload,
            });

            if (response.ok) {
                const data = await response.json();
                setFormData(prev => ({
                    ...prev,
                    images: [...prev.images, ...data.urls]
                }));
                toast.success("Images uploaded successfully", { id: uploadToast });
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

    const removeImage = (index: number) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const loadingToast = toast.loading(blogId ? "Updating blog..." : "Creating blog...");

        try {
            const response = await fetch(blogId ? `/api/blogs/${blogId}` : "/api/blogs", {
                method: blogId ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success(blogId ? "Blog updated successfully" : "Blog created successfully", { id: loadingToast });
                router.push("/admin/dashboard/blogs");
            } else {
                const data = await response.json();
                toast.error(data.error || "Something went wrong", { id: loadingToast });
            }
        } catch (error) {
            toast.error("Failed to save blog", { id: loadingToast });
        } finally {
            setLoading(false);
        }
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        setFormData({ ...formData, title, slug });
    };

    if (fetching) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-gray-400">Loading blog details...</div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                    <ICONS.ChevronLeft size={24} />
                </button>
                <h1 className="text-2xl font-bold text-white">
                    {blogId ? "Edit Blog Post" : "Create New Blog Post"}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Main Content Column */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1.5">Blog Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) text-white"
                                    placeholder="Enter blog title"
                                    value={formData.title}
                                    onChange={handleTitleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1.5">Slug</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) text-white"
                                    placeholder="blog-slug-name"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1.5">Excerpt</label>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) text-white h-24 resize-none"
                                    placeholder="Brief summary for list views..."
                                    value={formData.excerpt}
                                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1.5">Content (Markdown or HTML)</label>
                                <textarea
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) text-white h-96 resize-y"
                                    placeholder="Write your blog content here..."
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1.5">Category</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) text-white"
                                placeholder="General, Health, Hijama, etc."
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1.5">Status</label>
                            <select
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) text-white appearance-none"
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            >
                                <option value="Draft" className="bg-[#051510]">Draft</option>
                                <option value="Published" className="bg-[#051510]">Published</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">Blog Images</h3>
                            <span className="text-xs text-gray-400">{formData.images.length} images uploaded</span>
                        </div>

                        {/* Image Grid */}
                        {formData.images.length > 0 && (
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                {formData.images.map((url, index) => (
                                    <div key={index} className="relative group aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5">
                                        <img src={url} alt={`Blog ${index}`} className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); removeImage(index); }}
                                            className="absolute top-2 right-2 p-1.5 bg-red-500/80 hover:bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                                        >
                                            <ICONS.Trash size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div
                            onClick={() => {
                                const input = document.createElement('input');
                                input.type = 'file';
                                input.multiple = true;
                                input.accept = 'image/*';
                                input.onchange = (e) => handleFileUpload(e as any);
                                input.click();
                            }}
                            className={`border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-(--luxe-gold) transition-colors cursor-pointer relative overflow-hidden ${formData.images.length === 0 ? 'h-48' : 'h-32'}`}
                        >
                            <div className="relative z-10">
                                {isUploading ? (
                                    <span className="w-8 h-8 border-3 border-white/20 border-t-(--luxe-gold) rounded-full animate-spin inline-block"></span>
                                ) : (
                                    <>
                                        <ICONS.Package className="text-gray-500 group-hover:text-(--luxe-gold) mb-2 mx-auto" size={32} />
                                        <p className="text-sm text-gray-400">Click to upload images</p>
                                        <p className="text-[10px] text-gray-500 mt-1">PNG, JPG, WebP supported</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => router.push("/admin/dashboard/blogs")}
                        className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-gray-300 transition-all cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-brown px-12 py-3 h-auto disabled:opacity-50"
                    >
                        {loading ? "Saving..." : blogId ? "Update Blog" : "Publish Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default function AddBlogPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AddBlogForm />
        </Suspense>
    );
}
