"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="relative bg-(--dark-green) text-white pt-28 pb-24 px-5 overflow-hidden">

      <div className="absolute inset-0 opacity-10 bg-[url('/circuit.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">

        <h1 className="text-4xl md:text-6xl font-semibold mb-4 tracking-wide">
          Purification Engineered.<br /> Tradition Elevated.
        </h1>

        <p className="text-lg md:text-xl text-(--gold) h-6 md:h-8 transition">
          {rotatingText[textIndex]}
        </p>

        <div className="mt-14 flex flex-col items-center justify-center md:flex-row md:justify-center md:gap-10">

          {/* LEFT PRODUCT */}
          <div className="flex flex-col items-center md:mt-6">
            <div
            //   src="/ruh.png"
            //   alt="RÜH-ARMOR"
            //   width={220}
            //   height={260}
              className="object-contain size-96 bg-blue-500 drop-shadow-xl"
            />
          </div>

          {/* CENTER PRODUCT (ELEVATED) */}
          <div className="flex flex-col items-center md:-mt-10 mx-6">
            <div
            //   src="/nur.png"
            //   alt="NUR-ARMOR"
            //   width={260}
            //   height={300}
              className="object-contain size-96 bg-blue-500 drop-shadow-2xl scale-110"
            />
          </div>

          {/* RIGHT PRODUCT */}
          <div className="flex flex-col items-center md:mt-6">
            <div
            //   src="/nac.png"
            //   alt="Augmented NAC"
            //   width={220}
            //   height={260}
              className="object-contain size-96 bg-blue-500  drop-shadow-xl"
            />
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          {trustBadges.map((item) => (
            <span
              key={item}
              className="text-xs md:text-sm px-3 py-1 border border-(--sage) rounded-full text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTAS */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/store"
            className="btn btn-brown"
          >
            Buy Now
          </Link>

          <Link
            href="/studies"
            className="px-6 py-3 border border-[#C7A86C] text-[#C7A86C] font-semibold rounded-md hover:bg-[#C7A86C] hover:text-black transition"
          >
            Download Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
