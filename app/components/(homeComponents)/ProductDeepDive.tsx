"use client";

import { useState } from "react";
import { Shield, Dna, Droplet, Zap, Sparkles, Heart, Brain, Activity, Target } from "lucide-react";
import { comparison, pillars, targetAreas } from "@/app/helper/data";
import SectionHeader from "../(common)/SectionHeader";


export default function ProductDeepDive() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <div>

      {/* RÜH-ARMOR™ SECTION */}
      <section className="space-y-12">
        <div className="text-center">
          <SectionHeader heading="RÜH-ARMOR™ — Five Pillar Matrix" />
        </div>

        {/* Bio-Cellular Orbital Matrix */}
        <div className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden lg:overflow-visible">
          {/* Background Decorative Rings */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-[300px] h-[300px] border-2 border-(--luxe-gold) rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[450px] h-[450px] border-2 border-[#1a3a2e] rounded-full animate-[spin_35s_linear_infinite_reverse]" />
            <div className="absolute w-[600px] h-[600px] border-2 border-(--luxe-gold) rounded-full animate-[spin_50s_linear_infinite]" />
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
            {/* Left Side: Interactive Orbital Diagram */}
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Central Core */}
              <div className="absolute top-1/2 left-1/2 -tr-1/2 w-32 h-32 bg-linear-to-br from-[#1a3a2e] to-[#2d5a4a] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(26,58,46,0.3)] border-2 border-(--luxe-gold)/30 z-20">
                <Shield className="w-12 h-12 text-(--luxe-gold) animate-pulse" />
                <div className="absolute -inset-4 border border-(--luxe-gold)/20 rounded-full animate-ping" />
              </div>

              {/* Orbiting Nodes (Pillars) */}
              {/* Desktop Orbital Layout | Mobile Helix Stack */}
              <div className="absolute inset-0 hidden lg:block">
                {pillars.map((pillar, index) => {
                  const angle = (index * 360) / pillars.length;
                  const radius = 200; // Radius in pixels
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <button
                      key={index}
                      onClick={() => setActivePillar(index)}
                      className="absolute top-1/2 left-1/2 -tr-1/2 group transition-all duration-500 hover:z-30"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className={`relative p-5 rounded-2xl border-2 transition-all duration-500 ${activePillar === index
                        ? "bg-[#1a3a2e] border-(--luxe-gold) scale-125 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                        : "bg-white border-gray-100 hover:border-[#8fb996] scale-100 shadow-md"
                        }`}>
                        <pillar.icon className={`w-8 h-8 ${activePillar === index ? "text-(--luxe-gold)" : "text-[#1a3a2e]"}`} />

                        {/* Connecting Line to Core */}
                        <div className={`absolute top-1/2 left-1/2 h-0.5 bg-linear-to-r from-(--luxe-gold)/50 to-transparent origin-left -z-10 transition-all duration-500 ${activePillar === index ? "w-48" : "w-0"}`}
                          style={{ transform: `rotate(${angle + 180}deg)` }} />
                      </div>

                      {/* Label Label */}
                      <span className={`absolute top-full left-1/2 -tr-x-1/2 mt-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activePillar === index ? "opacity-100 text-(--luxe-gold)" : "opacity-0 text-gray-400 group-hover:opacity-100"}`}>
                        Pillar 0{index + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Interaction Area - Simplified Cluster */}
              <div className="flex lg:hidden flex-wrap justify-center gap-4 py-10">
                {pillars.map((pillar, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePillar(index)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${activePillar === index
                      ? "bg-[#1a3a2e] border-(--luxe-gold) scale-110 shadow-lg"
                      : "bg-white border-gray-200"
                      }`}
                  >
                    <pillar.icon className={`w-6 h-6 ${activePillar === index ? "text-(--luxe-gold)" : "text-[#1a3a2e]"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Narrative Display */}
            <div className="space-y-8 bg-linear-to-br from-white/80 to-transparent p-10 rounded-3xl backdrop-blur-sm border border-white/50 shadow-2xl relative overflow-hidden group">
              {/* Pillar Numbering Watermark */}
              <div className="absolute -top-20 right-2 text-[180px] font-black text-[#1a3a2e]/5 select-none transition-all duration-700">
                0{activePillar + 1}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-(--luxe-gold)" />
                  <span className="text-(--luxe-gold) font-bold uppercase tracking-widest text-sm">Pillar Strategy</span>
                </div>

                <h3 className="text-4xl font-bold text-[#1a3a2e] leading-tight">
                  {pillars[activePillar].headline}
                </h3>

                <ul className="space-y-4">
                  {pillars[activePillar].points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 group/li">
                      <div className="w-6 h-6 rounded-full bg-[#f0f7f4] flex items-center justify-center shrink-0 group-hover/li:bg-[#1a3a2e] transition-colors duration-300">
                        <Zap className="w-3 h-3 text-[#1a3a2e] group-hover/li:text-(--luxe-gold)" />
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-gray-100">
                  <div className="flex flex-col gap-2">
                    <span className="text-(--luxe-gold) font-bold text-xs uppercase tracking-widest">Protocol Benefit</span>
                    <p className="text-xl font-semibold text-[#1a3a2e] leading-snug">
                      {pillars[activePillar].benefit}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-(--luxe-gold)/10 to-transparent -tr-br-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* NUR-ARMOR™ SECTION */}
      <section className="space-y-12 mt-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-(--luxe-gold) mb-2">
            NUR-ARMOR™ — The Dr. Delgado Protocol
          </h2>
          <p className="text-xl text-gray-600">Light the Path to Timeless Wellness</p>
        </div>

        {/* Anatomical Diagram Header */}
        <div className="text-center py-6 bg-linear-to-r from-[#1a3a2e] to-[#2d5a4a] rounded-xl">
          <h3 className="text-2xl font-semibold text-white">Targeted Delivery Strategy</h3>
          <p className="text-gray-300 mt-2">Anatomical Body System Mapping</p>
        </div>

        {/* Target Areas Grid - Redesigned as Scientific Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAreas.map((area, index) => {
            return (
              <div
                key={index}
                className="group relative bg-linear-to-b from-[#1a3a2e]/90 to-[#1a3a2e] border border-white/10 rounded-2xl p-7 hover:border-(--luxe-gold)/50 hover:shadow-[0_20px_50px_rgba(26,58,46,0.5)] transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 -tr-1/4 w-32 h-32 bg-(--luxe-gold)/5 rounded-full blur-3xl group-hover:bg-(--luxe-gold)/10 transition-all duration-500" />

                {/* Icon Section with Styled Frame */}
                <div className="relative mb-8 w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-(--luxe-gold)/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                  <div className="absolute inset-0 border border-(--luxe-gold)/30 rounded-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                  <div className="relative w-full h-full bg-[#1a3a2e] rounded-xl flex items-center justify-center shadow-lg border border-white/5 z-10">
                    <area.icon className="w-8 h-8 text-(--luxe-gold) group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 bg-(--luxe-gold)/40 rounded-xl blur-md opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 text-center space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {area.title}
                  </h3>

                  <div className="w-12 h-1 mx-auto bg-linear-to-r from-transparent via-(--luxe-gold) to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="text-sm text-(--luxe-gold)/90 font-medium italic min-h-[40px] flex items-center justify-center">
                    "{area.description}"
                  </p>

                  <ul className="space-y-3 pt-2">
                    {area.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-(--luxe-gold)/60 rounded-full mt-1.5 shrink-0 group-hover:bg-(--luxe-gold) transition-colors" />
                        <span className="text-left leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Highlight Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-(--luxe-gold) group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>


        {/* Dr. Delgado Endorsement Banner */}
        <div className="bg-linear-to-r from-[#1a3a2e] to-[#2d5a4a] border-4 border-(--luxe-gold) rounded-xl p-8 shadow-2xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-(--luxe-gold) rounded-full hidden md:flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8 text-[#1a3a2e]" />
            </div>
            <div>
              <h3 className="md:text-2xl text-lg font-bold text-(--luxe-gold) mb-2">
                ENDORSED BY PROFESSOR RICARDO DELGADO
              </h3>
              <p className="text-gray-300">Leading Researcher & European Court Expert Witness</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <ul className="lg:col-span-8 space-y-3">
              <li className="flex items-start gap-3 text-white">
                <div className="w-2 h-2 bg-(--luxe-gold) rounded-full mt-2 shrink-0"></div>
                <span>Featured in European Criminal Court case vs Pfizer/Moderna/AstraZeneca</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <div className="w-2 h-2 bg-(--luxe-gold) rounded-full mt-2 shrink-0"></div>
                <span>Laboratory proven to degrade graphene oxide in Pfizer IM vials</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <div className="w-2 h-2 bg-(--luxe-gold) rounded-full mt-2 shrink-0"></div>
                <span>Recommended for cardiovascular inflammation and spike protein toxicity</span>
              </li>
            </ul>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button className="btn btn-brown">
                VIEW PROTOCOL
              </button>
              <button className="btn btn-transparent">
                WATCH TESTIMONY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AUGMENTED NAC™ SECTION */}
      <section className="space-y-12 mt-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-(--luxe-gold) mb-4">
            AUGMENTED NAC™ — Scientific Comparison
          </h2>
          <p className="text-gray-600">Side-by-Side Laboratory Comparison Dashboard</p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-gray-200 shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1a3a2e] text-white">
                <th className="py-4 px-6 text-left font-bold">METRIC</th>
                <th className="py-4 px-6 text-center font-bold">STANDARD NAC</th>
                <th className="py-4 px-6 text-center font-bold bg-[#2d5a4a]">AUGMENTED NAC</th>
                <th className="py-4 px-6 text-center font-bold text-(--luxe-gold)">IMPROVEMENT</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="py-4 px-6 font-semibold text-[#1a3a2e]">{row.metric}</td>
                  <td className="py-4 px-6 text-center text-gray-600">{row.standard}</td>
                  <td className="py-4 px-6 text-center font-bold text-[#00FF66] bg-[#f0f7f4]">
                    {row.augmented}
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-(--luxe-gold) text-xl">
                    {row.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technology Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="w-full aspect-square bg-linear-to-br from-[#1a3a2e] to-[#2d5a4a] rounded-2xl flex items-center justify-center shadow-2xl">
                <Zap className="w-32 h-32 text-(--luxe-gold)" />
              </div>
              <div className="absolute -inset-4 bg-linear-to-r from-[#5cfaff]/20 to-(--luxe-gold)/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-[#1a3a2e]">
              Proprietary Quantum Physics Enhancement
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--luxe-gold) rounded-full mt-1.5 shrink-0"></div>
                <span className="text-gray-700 text-lg">High-tech machinery using quantum principles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--luxe-gold) rounded-full mt-1.5 shrink-0"></div>
                <span className="text-gray-700 text-lg">Molecular-level activation of NAC compounds</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--luxe-gold) rounded-full mt-1.5 shrink-0"></div>
                <span className="text-gray-700 text-lg">
                  <span className="font-bold text-[#00FF66]">66% dosage reduction</span> (200mg vs 600mg) with higher efficacy
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--luxe-gold) rounded-full mt-1.5 shrink-0"></div>
                <span className="text-gray-700 text-lg">
                  Specifically engineered for <span className="font-bold">spike protein detox</span> and{" "}
                  <span className="font-bold">Long Vax recovery</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}