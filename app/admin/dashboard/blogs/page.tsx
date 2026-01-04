"use client";

import { useState, useEffect } from "react";
import ICONS from "@/app/assets/Icons";
import NextLink from "next/link";
import { toast } from "react-hot-toast";

export default function AdminBlogsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const response = await fetch("/api/blogs");
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, title: string) => {
        toast((t) => (
            <div className="flex flex-col gap-3 min-w-[200px]">
                <p className="text-sm font-medium">Delete <span className="text-(--luxe-gold)">{title}</span>?</p>
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
                            const loadingToast = toast.loading("Deleting blog...");
                            try {
                                const response = await fetch(`/api/blogs/${id}`, {
                                    method: "DELETE",
                                });
                                if (response.ok) {
                                    toast.success("Blog deleted successfully", { id: loadingToast });
                                    fetchBlogs();
                                } else {
                                    const errorData = await response.json();
                                    toast.error(errorData.error || "Failed to delete blog", { id: loadingToast });
                                }
                            } catch (error) {
                                toast.error("An error occurred while deleting the blog", { id: loadingToast });
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
        fetchBlogs();
    }, []);

    const filteredBlogs = (Array.isArray(blogs) ? blogs : []).filter((b: any) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                            placeholder="Search blogs by title..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-(--luxe-gold)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <NextLink
                    href="/admin/dashboard/blogs/add"
                    className="btn btn-brown flex items-center gap-2 px-6 py-2.5 h-auto text-sm"
                >
                    <ICONS.Plus size={18} />
                    <span>Add Blog</span>
                </NextLink>
            </div>

            {/* Blogs Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Blog</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Created</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        Loading blogs...
                                    </td>
                                </tr>
                            ) : filteredBlogs.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        No blogs found.
                                    </td>
                                </tr>
                            ) : (
                                filteredBlogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-(--deep-green) to-(--deep-green-dark) border border-white/10 flex items-center justify-center text-(--luxe-gold)">
                                                    <ICONS.FileText size={20} />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white">{blog.title}</div>
                                                    <div className="text-xs text-gray-500">{blog.slug}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300">{blog.category}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${blog.status === "Published"
                                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                                }`}>
                                                {blog.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-400">
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <NextLink
                                                    href={`/admin/dashboard/blogs/add?id=${blog.id}`}
                                                    className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
                                                >
                                                    <ICONS.Edit size={16} />
                                                </NextLink>
                                                <button
                                                    onClick={() => handleDelete(blog.id, blog.title)}
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
            </div>
        </div>
    );
}
