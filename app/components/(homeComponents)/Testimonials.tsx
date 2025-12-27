"use client";

import { useState, useEffect } from "react";
import ICONS from "@/app/assets/Icons";
import { testimonials } from "@/app/helper/data";
import SectionHeader from "../(common)/SectionHeader";



export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [filter, setFilter] = useState("all");

    const filteredTestimonials = filter === "all"
        ? testimonials
        : testimonials.filter(t => t.type === filter);

    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(filteredTestimonials.length / itemsPerSlide);

    useEffect(() => {
        setCurrentSlide(0);
    }, [filter]);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const currentTestimonials = filteredTestimonials.slice(
        currentSlide * itemsPerSlide,
        (currentSlide + 1) * itemsPerSlide
    );

    return (
        <section className="bg-linear-to-b from-gray-50 to-white">
            <div className="text-center mb-12">

                <SectionHeader heading=" Testimonials & Reviews" paragraph=" Real experiences from doctors and patients worldwide" />

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-6 py-2 rounded-full cursor-pointer font-medium transition ${filter === "all"
                            ? "bg-[#1a3a2e] text-white"
                            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#8fb996]"
                            }`}
                    >
                        All Reviews
                    </button>
                    <button
                        onClick={() => setFilter("medical")}
                        className={`px-6 py-2 rounded-full cursor-pointer font-medium transition ${filter === "medical"
                            ? "bg-[#1a3a2e] text-white"
                            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#8fb996]"
                            }`}
                    >
                        Medical Professionals
                    </button>
                    <button
                        onClick={() => setFilter("patient")}
                        className={`px-6 py-2 rounded-full cursor-pointer font-medium transition ${filter === "patient"
                            ? "bg-[#1a3a2e] text-white"
                            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#8fb996]"
                            }`}
                    >
                        Patient Stories
                    </button>
                </div>
            </div>

            <div className="relative lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-(--luxe-gold) hover:shadow-lg transition h-full flex flex-col"
                        >
                            <ICONS.Quote className="w-10 h-10 text-(--luxe-gold) mb-4 shrink-0" />

                            <div className="flex items-center gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <ICONS.Star key={i} className="w-5 h-5 fill-(--luxe-gold) text-(--luxe-gold)" />
                                ))}
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed grow">{testimonial.text}</p>

                            <div className="flex items-center gap-4 pt-4 border-t">
                                <div className="w-12 h-12 bg-linear-to-br from-[#1a3a2e] to-[#2d5a4a] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-[#1a3a2e] truncate">{testimonial.name}</h4>
                                        {testimonial.verified && (
                                            <div className="w-5 h-5 bg-(--luxe-gold) rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 truncate">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {totalSlides > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-(--luxe-gold) hover:shadow-lg transition"
                            aria-label="Previous testimonials"
                        >
                            <ICONS.ChevronLeft className="w-6 h-6 text-[#1a3a2e]" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-(--luxe-gold) hover:shadow-lg transition"
                            aria-label="Next testimonials"
                        >
                            <ICONS.ChevronRight className="w-6 h-6 text-[#1a3a2e]" />
                        </button>
                    </>
                )}
            </div>

            {totalSlides > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-2.5 rounded-full transition-all ${currentSlide === i ? "bg-(--luxe-gold) w-8" : "bg-gray-300 w-2.5"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}