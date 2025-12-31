"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "../components/(header)/Navbar";
import Footer from "../components/(footer)/Footer";


export default function LayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (pathname.startsWith("/admin/dashboard")) {
            const cookies = document.cookie.split(';');
            const authCookie = cookies.find(c => c.trim().startsWith('admin_session='));
            if (!authCookie) {
                router.push("/admin/login");
            }
        }
    }, [pathname, router]);

    const hideNavbar = pathname.startsWith("/admin");

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
            <Footer />
        </>
    );
}
