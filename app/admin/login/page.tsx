"use client";

import { useState } from "react";
import NextLink from "next/link";
import ICONS from "../../assets/Icons";

export default function AdminLoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulated login delay
        setTimeout(() => {
            if (email === "admin@test.com" && password === "password123") {
                // Set cookie for authentication
                document.cookie = "admin_session=authenticated; path=/; max-age=86400"; // 24 hours
                window.location.href = "/admin/dashboard";
            } else {
                setError("Invalid email or password. Please try again.");
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-(--deep-green) relative overflow-hidden px-4">
            {/* Background Accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-(--bio-neon) opacity-10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-(--luxe-gold) opacity-10 blur-[120px] rounded-full"></div>

            <div className="w-full max-w-md z-10">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <NextLink href="/" className="inline-block mb-4">
                        <span className="text-2xl font-bold text-(--soft-glow-green) tracking-tight">HIJAMA PROTOCOL</span>
                    </NextLink>
                    <h1 className="text-3xl font-semibold text-white mb-2">Admin Portal</h1>
                    <p className="text-gray-400">Enter your credentials to access the dashboard</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-(--luxe-gold)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2">
                            <ICONS.X size={16} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    <ICONS.Users size={18} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) focus:border-transparent transition-all"
                                    placeholder="admin@test.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    <ICONS.ShieldCheck size={18} />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--luxe-gold) focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <ICONS.X size={18} /> : <ICONS.Menu size={18} /> /* Using available icons as placeholders if Eye not there */}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember" type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 text-(--luxe-gold) focus:ring-(--luxe-gold)" />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-400">Remember me</label>
                            </div>
                            <button type="button" className="text-sm text-(--luxe-gold) hover:text-(--luxe-gold-soft) transition-colors">Forgot password?</button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full btn btn-brown flex items-center justify-center gap-2 group py-4 h-auto ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <span>{isLoading ? 'Checking...' : 'Sign In'}</span>
                            {!isLoading && <ICONS.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} The Hijama Protocol. All rights reserved.
                </div>
            </div>
        </div>
    );
}
