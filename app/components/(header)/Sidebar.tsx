"use client";

import Link from "next/link";
import ICONS from "../../assets/Icons";

interface SidebarProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  navItems: { label: string; href: string }[];
}

export default function Sidebar({ open, setOpen, navItems }: SidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity md:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Actual Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-64 bg-[#0A2F23] text-white p-5 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center cursor-pointer justify-between mb-6">
          <span className="text-lg font-semibold">Menu</span>

          <button onClick={() => setOpen(false)}>
            <ICONS.X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm py-1 hover:text-[#C7A86C] transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Extra buttons */}
          <button className="text-sm text-left mt-4 hover:text-[#C7A86C]">
            EN / UR
          </button>

          <button className="text-sm text-left hover:text-[#C7A86C]">
            Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
