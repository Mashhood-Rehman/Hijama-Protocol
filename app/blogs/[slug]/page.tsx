"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ICONS from "../../assets/Icons";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
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

    const allImages = blog.images && blog.images.length > 0 ? blog.images : ['https://images.unsplash.com/photo-1576091160550-217359f42f1c?q=80&w=2070'];

    return (
        <main className="min-h-screen bg-gray-50/30">
            {/* Split Header Section */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Side: Content Meta */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            <Link href="/" className="hover:text-(--luxe-gold) transition">Home</Link>
                            <ICONS.ChevronRight size={12} />
                            <Link href="/blogs" className="hover:text-(--luxe-gold) transition">Blogs</Link>
                            <ICONS.ChevronRight size={12} />
                            <span className="text-gray-900 truncate max-w-[200px]">{blog.title}</span>
                        </nav>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-(--luxe-gold)/10 text-(--luxe-gold) text-[10px] font-bold uppercase tracking-widest rounded-full border border-(--luxe-gold)/20">
                                    {blog.category}
                                </span>
                                <span className="h-px w-8 bg-gray-200"></span>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    <ICONS.Clock size={12} className="text-(--luxe-gold)" />
                                    <span>7 MIN READ</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                {blog.title}
                            </h1>
                        </div>

                        <div className="flex items-center gap-6 pt-6 ">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-(--luxe-gold)">
                                    <ICONS.User size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Medical Review Board</p>
                                    <p className="text-xs text-gray-500">Updated {new Date(blog.updatedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Featured Small Image */}
                    <div className="lg:col-span-5 relative group">
                        <div className="aspect-4/3 rounded-4xl overflow-hidden shadow-2xl border-8 border-white group-hover:shadow-(--luxe-gold)/20 transition-all duration-500">
                            <img
                                src={allImages[activeImage]}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Interactive mini thumbnails if multiple images */}
                        {allImages.length > 1 && (
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100">
                                {allImages.map((img: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-(--luxe-gold) scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content & Sidebar */}
            <section className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Article Content */}
                    <div className="lg:col-span-8 bg-white rounded-5xl p-8 md:p-12 shadow-sm border border-gray-100">
                        {/* Excerpt/Intro */}
                        {blog.excerpt && (
                            <div className="mb-12 relative">
                                <ICONS.Quote size={40} className="absolute -top-6 -left-6 text-gray-50 opacity-50" />
                                <p className="text-2xl text-gray-700 font-light leading-relaxed italic relative z-10">
                                    {blog.excerpt}
                                </p>
                            </div>
                        )}

                        {/* Content */}
                        <article
                            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900 prose-a:text-(--luxe-gold) prose-img:rounded-3xl prose-blockquote:border-(--luxe-gold) prose-blockquote:bg-gray-50 prose-blockquote:p-6"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Multi-Image Gallery at Bottom */}
                        {allImages.length > 0 && (
                            <div className="mt-20 pt-12 border-t border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <ICONS.Package size={24} className="text-(--luxe-gold)" />
                                    Research Gallery & Evidence
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {allImages.map((img: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="aspect-square rounded-2xl overflow-hidden border border-gray-100 hover:border-(--luxe-gold) transition-all cursor-zoom-in group shadow-sm"
                                            onClick={() => setActiveImage(idx)}
                                        >
                                            <img src={img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Modern Sidebar */}
                    <aside className="lg:col-span-4 space-y-8 h-fit sticky top-32">
                        {/* Scientific Breakdown */}
                        <div className="bg-(--deep-green) text-white rounded-4xl p-8 shadow-xl shadow-(--deep-green)/10">
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <ICONS.Activity size={20} className="text-(--luxe-gold)" />
                                Key Principles
                            </h4>
                            <ul className="space-y-6">
                                {[
                                    { title: "Cellular Detox", desc: "Targeted removal of synthetic spike protein residues." },
                                    { title: "Immune Balance", desc: "Restoring cytokine homeostasis via natural ligands." },
                                    { title: "Bio-Optimization", desc: "Mitochondrial repair using quantum-enhanced NAC." }
                                ].map((item, i) => (
                                    <li key={i} className="group cursor-default">
                                        <p className="text-(--luxe-gold) text-sm font-bold uppercase tracking-wider mb-1 group-hover:translate-x-1 transition-transform">{item.title}</p>
                                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full mt-10 py-4 bg-(--luxe-gold) text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg cursor-pointer">
                                Download Protocol PDF
                            </button>
                        </div>

                        {/* Share & Support */}
                        <div className="bg-white rounded-5xl p-8 border border-gray-100 shadow-sm">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Spread the Truth</h4>
                            <div className="flex text-black flex-col gap-3">
                                <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-100 hover:bg-gray-50 hover:text-(--luxe-gold) transition-all cursor-pointer font-medium text-sm">
                                    <ICONS.Share2 size={18} />
                                    Copy Link
                                </button>
                                <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-[#0088cc] text-white hover:opacity-90 transition-all cursor-pointer font-medium text-sm">
                                    <ICONS.Send size={18} />
                                    Join Telegram
                                </button>
                            </div>
                        </div>

                        {/* Return Navigation */}

                        <button
                            onClick={() => router.push("/blogs")}
                            className="w-full py-4  rounded-2xl text-gray-500 hover:text-gray-900 font-bold transition-all flex items-center justify-center gap-2 group border border-dashed border-gray-200"
                        >
                            <ICONS.ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to All Insights
                        </button>
                    </aside>
                </div>
            </section>
        </main>
    );
}
