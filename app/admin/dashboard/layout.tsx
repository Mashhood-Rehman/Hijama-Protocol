"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import ICONS from "../../assets/Icons";

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const navItems = [
        { label: "Overview", href: "/admin/dashboard", icon: ICONS.LayoutDashboard },
        { label: "Products", href: "/admin/dashboard", icon: ICONS.Package },
        { label: "Blogs", href: "/admin/dashboard/blogs", icon: ICONS.FileText },
        { label: "Customers", href: "/admin/dashboard/customers", icon: ICONS.Users },
        { label: "Orders", href: "#", icon: ICONS.ShoppingCart },
        { label: "Analytics", href: "#", icon: ICONS.TrendingUp },
    ];

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            window.location.href = "login";
        } catch (err) {
            console.error("Logout failed:", err);
            window.location.href = "login";
        }
    };

    return (
        <div className="flex h-screen bg-[#051510] text-gray-200 overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? "w-64" : "w-20"
                    } bg-(--deep-green) border-r border-white/10 flex flex-col transition-all duration-300 ease-in-out`}
            >
                <div className="p-6 flex items-center justify-between">
                    {sidebarOpen && (
                        <NextLink href="/" className="font-bold text-(--soft-glow-green) tracking-tight cursor-pointer">
                            HIJAMA
                        </NextLink>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                    >
                        <ICONS.Menu size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <NextLink
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${isActive
                                    ? "bg-(--luxe-gold) text-(--charcoal-black) font-semibold"
                                    : "hover:bg-white/5 text-gray-400 hover:text-white"
                                    }`}
                            >
                                <Icon size={20} />
                                {sidebarOpen && <span>{item.label}</span>}
                            </NextLink>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all cursor-pointer"
                    >
                        <ICONS.LogOut size={20} />
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-(--deep-green)/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8">
                    <h2 className="text-xl font-semibold text-white">
                        {navItems.find(item => item.href === pathname)?.label || "Dashboard"}
                    </h2>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <ICONS.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-(--luxe-gold) w-64"
                            />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-(--luxe-gold) flex items-center justify-center text-(--charcoal-black) font-bold shadow-lg shadow-(--luxe-gold)/20 border-2 border-white/20">
                            A
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-[#051510] to-[#0A2F23]">
                    {children}
                </div>
            </main>
        </div>
    );
}
