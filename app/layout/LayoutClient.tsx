"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "../components/(header)/Navbar";
import Footer from "../components/(footer)/Footer";
import CartSidebar from "../components/CartSidebar";

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            if (pathname.startsWith("/admin/dashboard")) {
                try {
                    const res = await fetch("/api/auth/me");
                    const data = await res.json();
                    if (!data.user || data.user.role !== "ADMIN") {
                        router.push("/login");
                    }
                } catch (err) {
                    router.push("/login");
                }
            }
        };
        checkAuth();
    }, [pathname, router]);

    const hideNavbar = pathname.startsWith("/admin");

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
            <CartSidebar />
            <Footer />
        </>
    );
}
