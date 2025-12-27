"use client";

import { benefits } from "@/app/helper/data";
import { useState } from "react";

export default function AffiliateProgram() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessType: "",
        socialMedia: "",
        expectedVolume: "",
    });

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a3a2e] mb-4">
                    Earn 50% Commissions Sharing Cellular Wellness
                </h2>
                <p className="text-xl text-gray-600">
                    Join our mission and build your business with proven products
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {benefits.map((benefit, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-(--luxe-gold) hover:shadow-lg transition"
                        >
                            <div className="w-14 h-14 bg-linear-to-br from-[#1a3a2e] to-[#2d5a4a] rounded-xl flex items-center justify-center mb-4">
                                <benefit.icon className="w-7 h-7 text-(--luxe-gold)" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1a3a2e] mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 bg-linear-to-br from-[#1a3a2e] to-[#2d5a4a] rounded-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-(--luxe-gold) rounded-full flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Premium Products</h4>
                                <p className="text-sm text-gray-300">Science-backed formulations with proven results</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-(--luxe-gold) rounded-full flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Growing Market</h4>
                                <p className="text-sm text-gray-300">Rising demand for cellular health solutions</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-(--luxe-gold) rounded-full flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Recurring Revenue</h4>
                                <p className="text-sm text-gray-300">Customers reorder monthly for consistent income</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-(--luxe-gold) rounded-full flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Full Support</h4>
                                <p className="text-sm text-gray-300">Dedicated team and resources for your success</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                        <p className="text-(--luxe-gold) font-bold text-lg mb-1">Average Partner Earnings</p>
                        <p className="text-3xl font-bold">$3,500 - $12,000/mo</p>
                        <p className="text-xs text-gray-300 mt-1">Based on active affiliates (Q1 2025)</p>
                    </div>
                </div>

                <div className="lg:col-span-7 bg-white rounded-xl border-2 border-gray-200 p-8">
                    <h3 className="text-2xl font-bold text-[#1a3a2e] mb-6">
                        Affiliate Application Form
                    </h3>

                    <div className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-[#1a3a2e] mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-(--luxe-gold) focus:outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#1a3a2e] mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-(--luxe-gold) focus:outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#1a3a2e] mb-2">
                                Business Type *
                            </label>
                            <select
                                value={formData.businessType}
                                onChange={(e) => handleChange("businessType", e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-(--luxe-gold) focus:outline-none transition"
                            >
                                <option value="">Select your business type</option>
                                <option value="influencer">Social Media Influencer</option>
                                <option value="health-coach">Health Coach / Practitioner</option>
                                <option value="retailer">Retailer / Store Owner</option>
                                <option value="distributor">Distributor</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#1a3a2e] mb-2">
                                Social Media Handles
                            </label>
                            <input
                                type="text"
                                value={formData.socialMedia}
                                onChange={(e) => handleChange("socialMedia", e.target.value)}
                                placeholder="@yourusername or profile links"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-(--luxe-gold) focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#1a3a2e] mb-2">
                                Expected Monthly Volume *
                            </label>
                            <select
                                value={formData.expectedVolume}
                                onChange={(e) => handleChange("expectedVolume", e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-(--luxe-gold) focus:outline-none transition"
                            >
                                <option value="">Select expected volume</option>
                                <option value="1-10">1-10 sales/month</option>
                                <option value="11-25">11-25 sales/month</option>
                                <option value="26-50">26-50 sales/month</option>
                                <option value="51-100">51-100 sales/month</option>
                                <option value="100+">100+ sales/month</option>
                            </select>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="btn btn-green w-full"
                        >
                            Submit Application
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                            By submitting, you agree to our Affiliate Terms & Conditions. We'll review your application within 2-3 business days.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}