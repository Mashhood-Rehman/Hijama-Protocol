"use client";

import ICONS from "@/app/assets/Icons";
import { useState, useRef } from "react";
import SectionHeader from "../(common)/SectionHeader";



const videos = [
  { id: 1, title: "Dr. Tina Peers", subtitle: "Truth About Spike Proteins", thumbnail: "/v1.jpg", videoUrl: "#" },
  { id: 2, title: "Dr. Jess Armine", subtitle: "Augmented NAC Comparison", thumbnail: "/v2.jpg", videoUrl: "#" },
  { id: 3, title: "Prof. Ricardo Delgado", subtitle: "Lab Analysis Results", thumbnail: "/v3.jpg", videoUrl: "#" },
  { id: 4, title: "Dr. Peter McCullough", subtitle: "Protocol Criminality", thumbnail: "/v4.jpg", videoUrl: "#" },
  { id: 5, title: "Dr. Byram Bridle", subtitle: "Bio Distribution Study", thumbnail: "/v1.jpg", videoUrl: "#" },
  { id: 6, title: "Dr. Ruby Judy", subtitle: "Patient Recovery Cases", thumbnail: "/v2.jpg", videoUrl: "#" },
  { id: 7, title: "Les Ashley", subtitle: "Pfizer Whistleblower Testimony", thumbnail: "/v3.jpg", videoUrl: "#" },
  { id: 8, title: "Panel Discussion", subtitle: "Shedding & Bioweapon Evidence", thumbnail: "/v4.jpg", videoUrl: "#" },
];

const labMetrics = [
  { label: "Spike Protein Denaturation", value: "99%", color: "#00FF66" },
  { label: "Blood Clot Dissolution", value: "68%", color: "#00FF66" },
  { label: "Protection Factor vs Standard NAC", value: "40x", color: "#00FF66" },
  { label: "Vitamin C Oxidation Protection", value: "7x", color: "#00FF66" },
];

const endorsements = [
  { label: "Medical Doctors", value: "12+" },
  { label: "Peer-Reviewed Studies", value: "3" },
  { label: "Patients Served", value: "5,000+" },
];

export default function AuthoritySection() {

  type Video = {
    id: number;
    title: string;
    subtitle: string;
    thumbnail: string;
    videoUrl: string;
  };

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className=" text-black bg-white pb-12  px-5">
      <div>

        {/* Section Title */}

        <SectionHeader heading=" Scientific Authority & Clinical Trust" paragraph="Science & Testimony" headingColor="text-(--gold)" />
        {/* Video Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:block absolute cursor-pointer -left-16 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
            aria-label="Scroll left"
          >
            <ICONS.ChevronLeft />

          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="shrink-0 w-[280px] md:w-[320px] cursor-pointer group"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-[#8fb996]/30 hover:border-(--gold) transition">
                  {/* Thumbnail */}
                  <div className="relative h-[180px] bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                    {/* Play Button */}
                    <div className="relative z-10 w-16 h-16 bg-(--gold) rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 text-white bg-black/80 px-2 py-1 rounded text-xs">
                      12:45
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-400">{video.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:block absolute -right-16 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
            aria-label="Scroll right"
          >
            <ICONS.ChevronRight />
          </button>
        </div>

        {/* Trust Metrics */}
        <div className="mt-20">
          {/* Laboratory Results */}
          <div>
            <h3 className="text-xl font-semibold text-(--gold) mb-6 uppercase tracking-wider">
              Laboratory Results:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {labMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#0f2920] border-2 border-[#8fb996]/30 rounded-lg p-6 text-center hover:border-[#00FF66]/50 transition"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-gray-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Endorsements */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-(--gold) mb-6 uppercase tracking-wider">
              Clinical Endorsements:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {endorsements.map((item) => (
                <div
                  key={item.label}
                  className="text-center bg-[#0f2920] border border-[#8fb996]/30 rounded-lg p-8"
                >
                  <div className="text-5xl font-bold text-(--gold) mb-3">
                    {item.value}
                  </div>
                  <p className="text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0  bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className={` rounded-lg ${showTranscript ? "p-32" : "p-12"}  max-w-4xl w-full `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center  justify-between p-2 border-b border-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-white">{selectedVideo.title}</h3>
                  <p className="text-sm text-gray-400">{selectedVideo.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 cursor-pointer bg-transparent hover:bg-white/70 rounded-full transition-colors p-1 hover:text-black  text-2xl"
                >
                  <ICONS.X />
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-black">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Video Player Placeholder
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-700">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="px-4 py-2 bg-(--gold) text-black rounded hover:bg-[#d4b87a] transition"
                >
                  {showTranscript ? "Hide Transcript" : "Show Transcript"}
                </button>

                {showTranscript && (
                  <div className="mt-4 p-4 bg-[#0f2920] rounded text-sm text-gray-300 max-h-60 overflow-y-auto">
                    <p>Transcript placeholder for {selectedVideo.title}...</p>
                    <p className="mt-2">This would contain the full video transcript with timestamps.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}