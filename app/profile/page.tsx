"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ICONS from "../assets/Icons";
import Link from "next/link";

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/auth/me");
                const data = await res.json();
                if (data.user) {
                    setUser(data.user);
                } else {
                    router.push("/login");
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-(--luxe-gold) border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-(--luxe-gold) transition">Home</Link>
                    <ICONS.ChevronRight size={14} />
                    <span className="text-gray-900 font-medium">My Profile</span>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Header/Cover Gradient */}
                    <div className="h-32 bg-linear-to-r from-(--deep-green) to-(--luxe-gold)/30 relative">
                        <div className="absolute -bottom-12 left-8 p-1 bg-white rounded-full">
                            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-(--luxe-gold) border-4 border-white">
                                <ICONS.User size={40} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pb-10 px-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-1">{user.name || "User"}</h1>
                                <p className="text-gray-500 flex items-center gap-2">
                                    <ICONS.Users size={16} />
                                    <span>{user.role} Account</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                {user.role === "ADMIN" && (
                                    <Link
                                        href="/admin/dashboard"
                                        className="px-6 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-black transition text-sm font-medium flex items-center gap-2"
                                    >
                                        <ICONS.LayoutDashboard size={18} />
                                        <span>Admin Dashboard</span>
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-100">Contact Information</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 shadow-sm">
                                            <ICONS.Send size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email Address</p>
                                            <p className="text-gray-900 font-medium">{user.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 shadow-sm">
                                            <ICONS.ShieldCheck size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Account Status</p>
                                            <p className="text-green-600 font-medium">Verified Account</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-100">Account Details</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-400 shadow-sm">
                                            <ICONS.Package size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Member Since</p>
                                            <p className="text-gray-900 font-medium">
                                                {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recent'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100/50 border border-gray-100 grayscale cursor-not-allowed group">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-300 shadow-sm">
                                            <ICONS.Edit size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Settings</p>
                                            <p className="text-gray-400 text-sm">Profile updates coming soon</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push("/")}
                        className="text-gray-500 hover:text-(--luxe-gold) transition flex items-center justify-center gap-2 mx-auto text-sm cursor-pointer"
                    >
                        <ICONS.ChevronLeft size={16} />
                        <span>Back to Shopping</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
