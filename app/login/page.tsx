"use client";

import { useState } from "react";
import Link from "next/link";
import ICONS from "../assets/Icons";
import { useLoginMutation } from "@/lib/features/auth/authApi";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        console.log("Attempting login for:", email);

        try {
            const result = await login({ email, password }).unwrap();
            console.log("Login successful:", result);

            if (result.user.role === "ADMIN") {
                window.location.href = "/admin/dashboard";
            } else {
                window.location.href = "/";
            }
        } catch (err: any) {
            console.error("Login Error details:", err);
            if (err.data && err.data.error) {
                console.log("Server provided error message:", err.data.error);
                setError(err.data.error);
            } else {
                setError("An error occurred. Please check console for details.");
            }
        }
    };

    return (
        <div className="min-h-screen bg-(--deep-green) flex items-center justify-center relative overflow-hidden px-4 pt-24 py-20">
            {/* Background Accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-(--bio-neon) opacity-5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-(--luxe-gold) opacity-5 blur-[120px] rounded-full"></div>

            <div className="w-full max-w-lg z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative group overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-(--luxe-gold)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="text-center mb-6 relative z-10">
                        <Link href="/" className="inline-block mb-2">
                            <span className="text-xl font-bold text-(--soft-glow-green) tracking-tight">HIJAMA PROTOCOL</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-gray-400 text-sm">Log in to your premium account</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2 relative z-10">
                            <ICONS.X size={16} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300 ml-1">Email Address</label>
                            <div className="relative group/field">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/field:text-(--luxe-gold) transition-colors">
                                    <ICONS.Users size={18} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) focus:border-transparent focus:bg-white/10 transition-all text-sm"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-300 ml-1">Password</label>
                            <div className="relative group/field">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/field:text-(--luxe-gold) transition-colors">
                                    <ICONS.ShieldCheck size={18} />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) focus:border-transparent focus:bg-white/10 transition-all text-sm"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-2 cursor-pointer"
                                >
                                    {showPassword ? <ICONS.X size={18} /> : <ICONS.Menu size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <button type="button" className="text-sm text-(--luxe-gold) hover:text-(--soft-glow-green) transition-colors font-medium cursor-pointer">
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-linear-to-r from-(--luxe-gold) to-[#A67C37] text-(--charcoal-black) py-3 rounded-xl font-bold text-md hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 disabled:hover:scale-100 flex items-center justify-center gap-2 group cursor-pointer`}
                        >
                            <span>{isLoading ? "Authenticating..." : "Log In"}</span>
                            {!isLoading && <ICONS.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-white/5 text-center relative z-10">
                        <p className="text-gray-400 text-sm">
                            Don&apos;t have a premium account?{" "}
                            <Link href="/signup" className="text-(--luxe-gold) font-bold hover:text-(--soft-glow-green) transition-colors ml-1">
                                Join now
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Hijama Protocol. Gold-Standard Health Solutions.
                </div>
            </div>
        </div>
    );
}
