"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const products = [
  {
    name: "RÜH-ARMOR™",
    desc: "Cellular Defense & Deep Detox",
    href: "/ruh-armor",
  },
  {
    name: "NUR-ARMOR™",
    desc: "Neural Protection & Bio-Energetics",
    href: "/nur-armor",
  },
  {
    name: "Augmented NAC™",
    desc: "Spike Protein Detox",
    href: "/augmented-nac",
  },
];

export default function StickyProductBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`hidden md:block fixed top-16 left-0 w-full z-40 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
    >
      <div className="bg-white border-t border-b border-[#1b4a3a] px-4 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-black">

          {products.map((p) => (
            <div key={p.name} className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold">{p.name}</h4>
              <p className="text-xs mt-1 opacity-80">{p.desc}</p>

              <Link
                href={p.href}
                className="mt-2 text-sm text-(--gold) hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
