"use client";

import { useEffect, useState } from "react";

const rotatingText = [
  "RÜH-ARMOR™ — Strengthen Your Core, Preserve Your RÜH",
  "NUR-ARMOR™ — Light the Path to Timeless Wellness",
  "Augmented NAC™ — The Ultimate Spike Protein Defense"
];

const trustBadges = [
  "Vegan",
  "No Gluten",
  "No Soy",
  "Non-GMO",
  "High Absorption",
  "Laboratory Tested",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingText.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#1a3a2e] text-white pt-20 pb-16 px-5 overflow-hidden min-h-screen">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/circuit.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section - Headline */}
        <div className="text-center mt-8 mb-8">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide">
            Purification Engineered.<br /> Tradition Elevated.
          </h1>

          <p className="text-lg md:text-xl text-(--gold) h-8 transition-all duration-500">
            {rotatingText[textIndex]}
          </p>
        </div>

        {/* Middle Section - Triangular Product Layout */}
        <div className="relative  flex items-center justify-center min-h-[400px]">
          {/* BIO-LUMINESCENT GLOW TRIANGLE */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <svg width="600" height="400" className="opacity-40" viewBox="0 0 600 400">
              <defs>
                <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5cfaff" />
                  <stop offset="100%" stopColor="#9effc7" />
                </linearGradient>
              </defs>

              <polyline
                points="100,320 300,80 500,320 100,320"
                fill="none"
                stroke="url(#glow)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_18px_#6fffe9]"
              />
            </svg>
          </div>

          {/* Products Container */}
          <div className="relative w-full max-w-4xl h-[400px]">
            
            {/* LEFT PRODUCT - RÜH-ARMOR */}
            <div className="absolute left-[5%] md:left-[15%] bottom-[20%] flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-linear-to-br from-blue-500 to-blue-700 rounded-lg shadow-2xl drop-shadow-xl flex items-center justify-center">
                <span className="text-white text-xs font-bold">RÜH-ARMOR</span>
              </div>
            </div>

            {/* CENTER PRODUCT (ELEVATED) - NUR-ARMOR */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[5%] flex flex-col items-center z-10">
              <div className="w-36 h-36 md:w-48 md:h-48 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl drop-shadow-2xl scale-110 flex items-center justify-center">
                <span className="text-white text-sm font-bold">NUR-ARMOR</span>
              </div>
            </div>

            {/* RIGHT PRODUCT - Augmented NAC */}
            <div className="absolute right-[5%] md:right-[15%] bottom-[20%] flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-linear-to-br from-blue-500 to-blue-700 rounded-lg shadow-2xl drop-shadow-xl flex items-center justify-center">
                <span className="text-white text-xs font-bold">AUG. NAC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Trust Badges & CTAs */}
        <div className="text-center">
          {/* TRUST BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
            {trustBadges.map((item) => (
              <span
                key={item}
                className="text-xs md:text-sm px-3 py-1 border border-[#8fb996] rounded-full text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CALL-TO-ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn btn-brown">
              Buy Now
            </button>

            <button className="btn btn-transparent">
              Download Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}