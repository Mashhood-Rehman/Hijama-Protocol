"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ICONS from "../assets/Icons";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/blogs");
                const data = await res.json();
                if (Array.isArray(data)) {
                    // Only show published blogs on the public site
                    setBlogs(data.filter((blog: any) => blog.status === "Published"));
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                        Insights & <span className="text-(--luxe-gold)">Knowledge</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Stay informed about the latest research in detoxification, immune health, and the science behind our protocols.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 space-y-4">
                            <div className="w-12 h-12 border-4 border-gray-100 border-t-(--luxe-gold) rounded-full animate-spin"></div>
                            <p className="text-gray-400 font-medium">Loading insights...</p>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                            <ICONS.BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
                            <h3 className="text-xl font-semibold text-gray-900">No blog posts yet</h3>
                            <p className="text-gray-500 mt-2">Check back soon for new scientific insights and research.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <Link
                                    key={blog.id}
                                    href={`/blogs/${blog.slug}`}
                                    className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1"
                                >
                                    {/* Image Container */}
                                    <div className="aspect-16/10 overflow-hidden relative">
                                        <img
                                            src={blog.images?.[0] || 'https://images.unsplash.com/photo-1576091160550-217359f42f1c?q=80&w=2070'}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-(--deep-green) text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <ICONS.Calendar size={12} />
                                                {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <ICONS.Clock size={12} />
                                                5 min read
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-(--luxe-gold) transition-colors line-clamp-2 leading-tight">
                                            {blog.title}
                                        </h2>

                                        <p className="text-gray-500 text-sm line-clamp-3 mb-6 font-light leading-relaxed">
                                            {blog.excerpt || "Dive deep into our latest research and discovery about holistic healing and modern detoxification protocols."}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between text-sm font-semibold">
                                            <span className="text-(--deep-green) group-hover:text-(--luxe-gold) transition-colors flex items-center gap-2">
                                                Read Article
                                                <ICONS.ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
