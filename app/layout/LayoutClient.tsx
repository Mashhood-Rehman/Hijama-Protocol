"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/(header)/Navbar";
import Footer from "../components/(footer)/Footer";


export default function LayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideNavbar = pathname.startsWith("/admin");

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
            <Footer />
        </>
    );
}
