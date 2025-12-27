"use client";

import { useState } from "react";
import { downloads, resources } from "@/app/helper/data";
import ICONS from "@/app/assets/Icons";
import SectionHeader from "../(common)/SectionHeader";


export default function EducationCommunity() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section>
      <div className="text-center mb-16">

        <SectionHeader heading="Education & Community" paragraph="Evidence-based resources and a supportive global community" />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {resources.map((resource) => {
          return (
            <div
              key={resource.id}
              className={`relative rounded-xl border-2 p-8 transition-all hover:shadow-xl ${resource.featured
                ? "border-(--luxe-gold) bg-linear-to-br from-[#faf8f3] to-white"
                : "border-gray-200 bg-white hover:border-[#8fb996]"
                }`}
            >
              {resource.featured && (
                <div className="absolute -top-3 right-6 bg-(--luxe-gold) text-white px-4 py-1 rounded-full text-xs font-bold">
                  JOIN 5,000+ MEMBERS
                </div>
              )}

              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${resource.featured ? "bg-(--luxe-gold)" : "bg-[#1a3a2e]"
                }`}>
                <resource.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#1a3a2e] mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>

              <ul className="space-y-3 mb-6">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-(--luxe-gold) rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <button className={`inline-flex items-center gap-2 w-full justify-center py-3 rounded-lg font-semibold transition ${resource.featured
                ? "bg-(--luxe-gold) text-white hover:bg-[#d4b87a]"
                : "bg-[#1a3a2e] text-white hover:bg-[#2d5a4a]"
                }`}>
                {resource.action}
                <ICONS.ExternalLink className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white rounded-xl border-2 border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <ICONS.Download className="w-8 h-8 text-(--luxe-gold)" />
            <h3 className="text-2xl font-bold text-[#1a3a2e]">
              Download Research Files
            </h3>
          </div>

          <p className="text-gray-600 mb-6">
            Access our complete library of peer-reviewed studies, clinical protocols, and scientific evidence
          </p>

          <div className="space-y-3">
            {downloads.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#8fb996] hover:bg-white transition cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a3a2e] rounded-lg flex items-center justify-center">
                    <ICONS.FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a3a2e] group-hover:text-(--luxe-gold) transition">
                      {file.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {file.format} • {file.size}
                    </p>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-white border-2 border-gray-200 group-hover:border-(--luxe-gold) group-hover:bg-(--luxe-gold) transition">
                  <ICONS.Download className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-linear-to-br from-[#1a3a2e] to-[#2d5a4a] rounded-xl p-8 text-white">
          <ICONS.Send className="w-8 h-8 text-(--luxe-gold) mb-4" />
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Get exclusive research updates, protocol guides, and community insights delivered to your inbox
          </p>

          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:border-(--luxe-gold) focus:outline-none transition"
            />
            <button
              onClick={handleSubscribe}
              className="btn btn-brown"
            >
              Subscribe Now
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Join 12,000+ subscribers receiving weekly research updates
          </p>
        </div>
      </div>
    </section>
  );
}