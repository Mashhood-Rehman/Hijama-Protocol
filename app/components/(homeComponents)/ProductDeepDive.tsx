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

        {/* Interactive Cube Selector */}
        <div className="flex justify-center gap-3 flex-wrap">
          {pillars.map((pillar, index) => {
            return (
              <button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`px-6 cursor-pointer py-3 rounded-lg border-2 transition-all flex items-center gap-2 ${activePillar === index
                    ? "bg-[#1a3a2e] text-white border-(--gold)"
                    : "bg-gray-50 text-gray-700 border-gray-300 hover:border-[#8fb996]"
                  }`}
              >
                <pillar.icon className="w-5 h-5" />
                <span className="text-sm font-medium">Pillar {index + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Icon Visualization */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-linear-to-br from-[#1a3a2e] to-[#2d5a4a] rounded-2xl flex items-center justify-center shadow-2xl">
                {(() => {
                  const IconComponent = pillars[activePillar].icon;
                  return <IconComponent className="w-24 h-24 text-(--gold)" />;
                })()}
              </div>
              <div className="absolute -inset-4 bg-linear-to-r from-[#5cfaff]/20 to-[#9effc7]/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Pillar Details */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-2xl font-semibold text-[#1a3a2e]">
              {pillars[activePillar].headline}
            </h3>
            <ul className="space-y-3">
              {pillars[activePillar].points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-(--gold) rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-[#f0f7f4] border-l-4 border-[#8fb996] rounded">
              <p className="text-[#1a3a2e] font-medium">
                <span className="text-(--gold)">BENEFIT:</span> {pillars[activePillar].benefit}
              </p>
            </div>
          </div>
        </div>

        {/* All Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {pillars.map((pillar, index) => {
            return (
              <div
                key={index}
                onClick={() => setActivePillar(index)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${activePillar === index
                    ? "bg-[#1a3a2e] text-white border-(--gold) shadow-lg"
                    : "bg-gray-50 border-gray-200 hover:border-[#8fb996]"
                  }`}
              >
                <pillar.icon className={`w-10 h-10 mb-4 ${activePillar === index ? "text-(--gold)" : "text-[#1a3a2e]"}`} />
                <h4 className="font-semibold text-sm mb-2">{pillar.headline}</h4>
                <p className={`text-xs ${activePillar === index ? "text-gray-300" : "text-gray-600"}`}>
                  {pillar.benefit}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* NUR-ARMOR™ SECTION */}
      <section className="space-y-12 mt-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-(--gold) mb-2">
            NUR-ARMOR™ — The Dr. Delgado Protocol
          </h2>
          <p className="text-xl text-gray-600">Light the Path to Timeless Wellness</p>
        </div>

        {/* Anatomical Diagram Header */}
        <div className="text-center py-6 bg-linear-to-r from-[#1a3a2e] to-[#2d5a4a] rounded-xl">
          <h3 className="text-2xl font-semibold text-white">Targeted Delivery Strategy</h3>
          <p className="text-gray-300 mt-2">Anatomical Body System Mapping</p>
        </div>

        {/* Target Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAreas.map((area, index) => {
            return (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-(--gold) hover:shadow-lg transition-all"
              >
                {/* Icon and Title side by side */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1a3a2e] rounded-lg flex items-center justify-center shrink-0">
                    <area.icon className="w-6 h-6 text-(--gold)" />
                  </div>
                  <h3 className="text-[#1a3a2e] leading-tight">{area.title}</h3>
                </div>

                {/* Centered italic quote */}
                <p className="text-sm text-gray-700 mb-4 italic text-center">"{area.description}"</p>

                {/* Bullet points */}
                <ul className="space-y-2">
                  {area.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#8fb996] rounded-full mt-1.5 shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>


        {/* Dr. Delgado Endorsement Banner */}
        <div className="bg-linear-to-r from-[#1a3a2e] to-[#2d5a4a] border-4 border-(--gold) rounded-xl p-8 shadow-2xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-(--gold) rounded-full flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8 text-[#1a3a2e]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-(--gold) mb-2">
                ENDORSED BY PROFESSOR RICARDO DELGADO
              </h3>
              <p className="text-gray-300">Leading Researcher & European Court Expert Witness</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <ul className="lg:col-span-8 space-y-3">
              <li className="flex items-start gap-3 text-white">
                <div className="w-2 h-2 bg-(--gold) rounded-full mt-2 shrink-0"></div>
                <span>Featured in European Criminal Court case vs Pfizer/Moderna/AstraZeneca</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <div className="w-2 h-2 bg-(--gold) rounded-full mt-2 shrink-0"></div>
                <span>Laboratory proven to degrade graphene oxide in Pfizer IM vials</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <div className="w-2 h-2 bg-(--gold) rounded-full mt-2 shrink-0"></div>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-(--gold) mb-4">
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
                <th className="py-4 px-6 text-center font-bold text-(--gold)">IMPROVEMENT</th>
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
                  <td className="py-4 px-6 text-center font-bold text-(--gold) text-xl">
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
                <Zap className="w-32 h-32 text-(--gold)" />
              </div>
              <div className="absolute -inset-4 bg-linear-to-r from-[#5cfaff]/20 to-(--gold)/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-[#1a3a2e]">
              Proprietary Quantum Physics Enhancement
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--gold) rounded-full mt-1.5 shrink-0"></div>
                <span className="text-gray-700 text-lg">High-tech machinery using quantum principles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--gold) rounded-full mt-1.5 shrink-0"></div>
                <span className="text-gray-700 text-lg">Molecular-level activation of NAC compounds</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--gold) rounded-full mt-1.5 shrink-0"></div>
                <span className="text-gray-700 text-lg">
                  <span className="font-bold text-[#00FF66]">66% dosage reduction</span> (200mg vs 600mg) with higher efficacy
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-(--gold) rounded-full mt-1.5 shrink-0"></div>
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