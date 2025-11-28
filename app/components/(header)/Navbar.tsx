"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ICONS from "../../assets/Icons";
import { useGoogleTranslate } from "@/app/utils/useGoogleTranslate";
import { navItems } from "@/app/helper/data";
import CartSidebar from "../CartSidebar";

export default function Navbar() {

    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const [scrolled, isScrolled] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [tooltip, setTooltip] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 350) {
                isScrolled(true);
            } else {
                isScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [isScrolled])

       useEffect(()=> {

        const handleClickOutside = (e: MouseEvent) =>{
            if(ref.current && !(ref.current as any).contains(e.target)) {
                setTooltip(false);
            }
        }
         window.addEventListener("mousedown", handleClickOutside)
         return () => window.removeEventListener("mousedown", handleClickOutside)
    },[])
    
    useGoogleTranslate();
 
    return (
        <>
            <nav className={`w-full fixed top-0 left-0 z-50 ${scrolled ? "bg-(--dark-green) text-white" : "bg-white text-black"} transition-colors duration-300 shadow-md `}>
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
                    {/* Logo placeholder */}
                    <Link href="/" className="text-lg font-semibold tracking-wide">
                        Hijama Protocol
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm hover:text-(--gold) transition"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Right Side Icons */}
                        <div id="google_translate_element" className="" />


                        <div className="relative" ref={ref}>
                            <button
                                onClick={() => setTooltip(!tooltip)}
                                className="hover:text-(--gold) cursor-pointer"
                            >
                                <ICONS.ShoppingCart size={22} />
                            </button>

                            {tooltip && (
                                <div className="absolute w-32 right-0 mt-2 bg-white shadow-lg rounded-md p-3 z-200">
                                    <p className="text-xs text-(--black)">Items: 3</p>

                                    <button
                                        onClick={() => {
                                            setTooltip(false);
                                            setCartOpen(true);
                                        }}
                                        className="mt-2 w-full py-2 bg-(--gold) text-white cursor-pointer rounded-md hover:opacity-90 transition"
                                    >
                                        View Cart
                                    </button>
                                </div>
                            )}
                        </div>

                        <CartSidebar open={cartOpen} setOpen={setCartOpen} />

                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => setOpen(true)}
                        aria-label="Open Menu"
                    >
                        <ICONS.Menu size={26} />
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <Sidebar open={open} setOpen={setOpen} navItems={navItems} />
        </>
    );
}
