"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ICONS from "../../assets/Icons";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blogs/slug/${slug}`);
                const data = await res.json();
                if (res.ok) {
                    setBlog(data);
                } else {
                    router.push("/blogs");
                }
            } catch (error) {
                console.error("Failed to fetch blog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-(--luxe-gold) border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!blog) return null;

    return (
        <main className="min-h-screen bg-white">
            {/* Header / Hero */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        <Link href="/" className="hover:text-(--luxe-gold) transition">Home</Link>
                        <ICONS.ChevronRight size={12} />
                        <Link href="/blogs" className="hover:text-(--luxe-gold) transition">Blogs</Link>
                        <ICONS.ChevronRight size={12} />
                        <span className="text-gray-900 truncate">{blog.title}</span>
                    </nav>

                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-(--luxe-gold)/10 text-(--luxe-gold) text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {blog.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                            {blog.title}
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 italic">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-(--luxe-gold)">
                                <ICONS.User size={20} />
                            </div>
                            <div className="text-sm">
                                <p className="text-gray-900 font-semibold not-italic">Scientific Editorial Team</p>
                                <p className="text-gray-500 text-xs">Medical Review Board</p>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-gray-100 hidden md:block"></div>
                        <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400 not-italic">
                            <div className="flex items-center gap-2">
                                <ICONS.Calendar size={14} className="text-(--luxe-gold)" />
                                {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="flex items-center gap-2">
                                <ICONS.Clock size={14} className="text-(--luxe-gold)" />
                                7 MIN READ
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Image */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto rounded-4xl overflow-hidden aspect-video shadow-2xl relative">
                    <img
                        src={blog.images?.[0] || 'https://images.unsplash.com/photo-1576091160550-217359f42f1c?q=80&w=2070'}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 pb-24">
                <div className="max-w-3xl mx-auto">
                    {/* Excerpt/Intro */}
                    {blog.excerpt && (
                        <div className="mb-12">
                            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed italic border-l-4 border-(--luxe-gold) pl-8 py-2">
                                {blog.excerpt}
                            </p>
                        </div>
                    )}

                    {/* Content */}
                    <article
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-(--luxe-gold) prose-img:rounded-3xl"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Share Section */}
                    <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Share this research</p>
                            <div className="flex items-center gap-3">
                                {[ICONS.Send, ICONS.Share2, ICONS.ExternalLink].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-(--luxe-gold) hover:text-(--luxe-gold) transition-all cursor-pointer">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => router.push("/blogs")}
                            className="flex items-center gap-2 text-sm font-bold text-(--deep-green) hover:text-(--luxe-gold) transition-all group"
                        >
                            <ICONS.ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Return to Insights
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
