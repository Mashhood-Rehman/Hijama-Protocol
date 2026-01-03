"use client";

import ICONS from "@/app/assets/Icons";
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
  const [quantity, setQuantity] = useState(1);

  const products = [
    { name: "RÜH-ARMOR", color: "from-blue-500 to-blue-700" },
    { name: "NUR-ARMOR", color: "from-blue-400 to-blue-600" },
    { name: "AUG. NAC", color: "from-blue-500 to-blue-700" },
  ];

  const handlePrev = () => {
    setTextIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setTextIndex((prev) => (prev + 1) % products.length);
  };

  const getProductIndex = (offset: number) => {
    return (textIndex + offset + products.length) % products.length;
  };

  return (
    <>

      <section className="relative  bg-(--deep-green-dark) text-white min-h-screen overflow-hidden flex flex-col justify-between p-8 md:p-16">

        {/* BACKGROUND LEAF PATTERNS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <LeafSVG className="absolute  top-[10%] left-[5%] -rotate-45 w-48 h-48 text-(--herbal-sage)" />
          <LeafSVG className="absolute top-[40%] right-[10%] rotate-15 w-64 h-64 text-(--herbal-sage)" />
          <LeafSVG className="absolute bottom-[20%] left-[15%] rotate-[-15deg] w-56 h-56 text-(--herbal-sage)" />
          <LeafSVG className="absolute top-[70%] right-[20%] rotate-160 w-40 h-40 text-(--herbal-sage)" />
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="relative z-10 pt-12  flex flex-col md:flex-row items-center justify-between grow mt-12 mb-12">

          {/* LEFT SIDE: HEADLINE (Static/Commented as requested) */}
          <div className="max-w-lg w-full text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl leading-tight">
                Purification Engineered.
              </h1>
              <div className="flex items-center gap-4">

                <p className="text-xl text-(--luxe-gold) font-medium">
                  Tradition Elevated.
                </p>
                <button className="btn btn-transparent">Download Studies</button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Experience the pinnacle of natural bio-tech preservation for your core vitality.
              </p>
            </div>
          </div>

          {/* CENTER: THREE-PRODUCT CAROUSEL (Enhanced 3D Animation) */}
          <div className="relative flex items-center justify-center py-12 w-full max-w-3xl mx-auto h-[500px] overflow-visible">

            {/* Navigation Chevrons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:left-[-10%] z-40 p-4 text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <ICONS.ChevronLeft size={48} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 md:right-[-10%] z-40 p-4 text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <ICONS.ChevronRight size={48} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center perspective-2000 preserve-3d">
              {products.map((product, index) => {
                // Calculate relative position to active index
                let position = index - textIndex;

                // Handle wrap-around for smooth shortest-path transitions
                if (position > products.length / 2) position -= products.length;
                if (position < -products.length / 2) position += products.length;

                const isActive = position === 0;
                const isLeft = position === -1;
                const isRight = position === 1;
                const isHidden = !isActive && !isLeft && !isRight;

                // Smooth 3D Transform Logic
                const styles = {
                  transform: `
                  translateX(${position * 60}%) 
                  scale(${isActive ? 1.1 : 0.75}) 
                  rotateY(${position * -25}deg)
                  translateZ(${isActive ? 100 : 0}px)
                `,
                  zIndex: isActive ? 30 : 20 - Math.abs(position),
                  opacity: isHidden ? 0 : isActive ? 1 : 0.4,
                  filter: `blur(${isActive ? 0 : 3}px)`,
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                };

                return (
                  <div
                    key={index}
                    style={styles}
                    className="absolute transition-all transform-gpu pointer-events-none"
                  >
                    {/* Card Container - only middle card is interactive to avoid click-conflicts */}
                    <div className={`relative w-64 h-96 md:w-80 md:h-[480px]  border ${isActive ? 'border-white/20 ring-1 ring-white/10' : 'border-white/5'} rounded-4xl shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden`}>

                      {/* Shadow for side items */}
                      {!isActive && <div className="absolute inset-0 bg-black/50 z-10"></div>}

                      {/* Glow for active item */}
                      {isActive && <div className="absolute inset-0 bg-(--luxe-gold) opacity-[0.08] blur-3xl"></div>}

                      <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center text-center relative z-20">
                        <span className={`uppercase tracking-widest ${isActive ? 'text-white font-bold text-sm' : 'text-gray-500 text-xs'}`}>
                          {product.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


        </div>

        {/* FOOTER SECTION */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-white/5">

          {/* Partnership / Trust Text */}
          <div className="max-w-xs">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider leading-relaxed">
              We work in close partnership with our clients — including the NHS, the military, major private healthcare providers and GP practices.
            </p>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-8">
            {/* Quantity Selector */}
            <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-white cursor-pointer">-</button>
              <span className="w-4 text-center text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-white cursor-pointer">+</button>
            </div>

            {/* Buy Now Button */}
            <button className="btn btn-brown rounded-full px-10 py-3 flex items-center gap-2 group cursor-pointer">
              Buy Now
              <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}



function LeafSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <path d="M50 0C50 0 10 30 10 60C10 85 30 95 50 100C70 95 90 85 90 60C90 30 50 0 50 0ZM50 90C50 90 20 80 20 60C20 45 40 30 50 10C60 30 80 45 80 60C80 80 50 90 50 90Z" opacity="0.5" />
      <path d="M50 100V10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
