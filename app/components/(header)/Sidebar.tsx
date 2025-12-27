"use client";

import Link from "next/link";
import { useState } from "react";
import ICONS from "../../assets/Icons";

interface SidebarProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  navItems: { label: string; href: string }[];
}

export default function Sidebar({ open, setOpen, navItems }: SidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const mainNavItems = navItems.slice(0, 4);
  const moreNavItems = navItems.slice(4);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      onClick={() => setOpen(false)}
    >
      {/* Actual Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-72 bg-(--deep-green) text-white transition-transform overflow-y-auto ${open ? "translate-x-0" : "-translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="flex items-center cursor-pointer justify-between mb-6">
            <span className="text-lg font-semibold">Menu</span>

            <button onClick={() => setOpen(false)}>
              <ICONS.X size={26} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {/* Main Nav Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm py-2 hover:text-(--luxe-gold) transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* More Section with Accordion */}
            <div className="border-t border-white/10 pt-3 mt-2">
              <button
                onClick={() => toggleSection("more")}
                className="w-full flex items-center justify-between text-sm py-2 hover:text-(--luxe-gold) transition cursor-pointer"
              >
                <span>More</span>
                <ICONS.ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${expandedSection === "more" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {expandedSection === "more" && (
                <div className="flex flex-col gap-2 mt-2 ml-3 border-l border-white/10 pl-3">
                  {moreNavItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-xs py-1.5 hover:text-(--luxe-gold) transition"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Extra buttons */}
            <div className="border-t border-white/10 pt-3 mt-4 flex flex-col gap-3">
              <button className="text-sm text-left hover:text-(--luxe-gold) py-2">
                EN / UR
              </button>

              <button className="text-sm text-left hover:text-(--luxe-gold) py-2 flex items-center gap-2">
                <ICONS.ShoppingCart size={18} />
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}