"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ICONS from "../../assets/Icons";

export default function LatestBlogs() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/blogs");
                const data = await res.json();
                if (Array.isArray(data)) {
                    // Get only last 3 published blogs
                    setBlogs(data.filter((b: any) => b.status === "Published").slice(0, 3));
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (!loading && blogs.length === 0) return null;

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-(--luxe-gold) font-bold uppercase tracking-widest text-xs">Research & Insights</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Latest From Our <span className="text-(--luxe-gold)">Scientific Journal</span>
                        </h2>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Stay up-to-date with our latest findings on cellular detoxification, immune resilience, and modern environmental stressors.
                        </p>
                    </div>
                    <Link
                        href="/blogs"
                        className="group flex items-center gap-2 text-sm font-bold text-(--deep-green) hover:text-(--luxe-gold) transition-all whitespace-nowrap pb-1"
                    >
                        Explore All Articles
                        <ICONS.ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        [1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-50 rounded-3xl h-[450px] animate-pulse"></div>
                        ))
                    ) : (
                        blogs.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/blogs/${blog.slug}`}
                                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
                            >
                                <div className="aspect-16/11 overflow-hidden relative">
                                    <img
                                        src={blog.images?.[0] || 'https://images.unsplash.com/photo-1576091160550-217359f42f1c?q=80&w=2070'}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <ICONS.Calendar size={12} />
                                            {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-(--luxe-gold) transition-colors line-clamp-2 leading-snug">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-6 font-light leading-relaxed">
                                        {blog.excerpt || "Dive deep into our latest research and discovery about holistic healing and modern detoxification protocols."}
                                    </p>
                                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-(--deep-green) group-hover:text-(--luxe-gold) transition-colors">
                                        <span>Read Research</span>
                                        <ICONS.ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
