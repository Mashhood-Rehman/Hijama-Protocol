"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ICONS from "../../assets/Icons";
import { useGoogleTranslate } from "@/app/utils/useGoogleTranslate";
import { mainNavItems, moreNavItems } from "@/app/helper/data";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleCart } from "@/lib/features/cart/cartSlice";

export default function Navbar() {

    const ref = useRef(null);
    const dropdownRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [scrolled, isScrolled] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTimer = useRef<NodeJS.Timeout | null>(null);

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !(ref.current as any).contains(e.target)) {
                setTooltip(false);
            }
        }
        window.addEventListener("mousedown", handleClickOutside)
        return () => window.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleMouseEnter = () => {
        if (dropdownTimer.current) {
            clearTimeout(dropdownTimer.current);
        }
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimer.current = setTimeout(() => {
            setDropdownOpen(false);
        }, 200);
    };

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("/api/auth/me");
            const data = await res.json();
            if (data.user) {
                setUser(data.user);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        setUser(null);
        window.location.href = "/";
    };

    useGoogleTranslate();




    return (
        <>
            <nav className={`w-full fixed top-0 left-0 z-50 ${scrolled ? "bg-(--deep-green) text-white" : "bg-white text-black"} transition-colors duration-300 shadow-md `}>
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
                    {/* Logo placeholder */}
                    <Link href="/" className="text-lg text-green-500 font-semibold tracking-wide">
                        Hijama Protocol
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {mainNavItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm hover:text-(--luxe-gold) transition whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* More Dropdown */}
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-sm hover:text-(--luxe-gold) transition flex items-center gap-1 cursor-pointer">
                                More
                                <ICONS.ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 w-72 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100">
                                    {moreNavItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-(--luxe-gold) transition"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right Side Icons */}
                        <div id="google_translate_element" className="" />

                        <div className="relative" ref={ref}>
                            <button
                                onClick={() => dispatch(toggleCart())}
                                className="hover:text-(--luxe-gold) cursor-pointer relative"
                            >
                                <ICONS.ShoppingCart size={22} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-(--luxe-gold) text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            {tooltip && (
                                <div className="absolute w-32 text-black right-0 mt-2 bg-white shadow-lg rounded-md p-3 z-200">
                                    <p className="text-xs ">Items: {cartItems.length}</p>

                                    <button
                                        onClick={() => {
                                            setTooltip(false);
                                            dispatch(toggleCart());
                                        }}
                                        className="mt-2 w-full py-2 bg-(--luxe-gold) text-white cursor-pointer rounded-md hover:opacity-90 transition"
                                    >
                                        View Cart
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Auth Section */}
                        {user ? (
                            <div className="flex items-center gap-4">
                                {user.role === "ADMIN" && (
                                    <Link
                                        href="/admin/dashboard"
                                        className="text-sm font-semibold hover:text-(--luxe-gold) transition cursor-pointer"
                                    >
                                        Dashboard
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-all text-sm font-medium cursor-pointer"
                                >
                                    <ICONS.LogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="flex items-center gap-2 px-4 py-2 border border-(--luxe-gold) text-(--luxe-gold) rounded-full hover:bg-(--luxe-gold) hover:text-white! transition-all text-sm font-medium"
                            >
                                <ICONS.LogIn size={16} />
                                <span>Login</span>
                            </Link>
                        )}

                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden cursor-pointer"
                        onClick={() => setOpen(true)}
                        aria-label="Open Menu"
                    >
                        <ICONS.Menu size={26} />
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <Sidebar open={open} setOpen={setOpen} navItems={[...mainNavItems, ...moreNavItems]} />
        </>
    );
}