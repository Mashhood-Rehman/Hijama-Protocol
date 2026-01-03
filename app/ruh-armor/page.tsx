"use client";

import RuhHero from "../components/(ruhArmorComponents)/RuhHero";
import RuhWhyNeed from "../components/(ruhArmorComponents)/RuhWhyNeed";
import RuhFivePillars from "../components/(ruhArmorComponents)/RuhFivePillars";
import RuhResults from "../components/(ruhArmorComponents)/RuhResults";
import RuhSocialProof from "../components/(ruhArmorComponents)/RuhSocialProof";
import RuhDeepDive from "../components/(ruhArmorComponents)/RuhDeepDive";
import RuhFaq from "../components/(ruhArmorComponents)/RuhFaq";
import RuhCtaSection from "../components/(ruhArmorComponents)/RuhCtaSection";

export default function RuhArmorPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Sticky Bar for Quick Navigation */}

            {/* Hero Section */}
            <RuhHero />

            {/* Why You Need This Now */}
            <RuhWhyNeed />

            {/* Five Pillars Breakdown */}
            <RuhFivePillars />

            {/* Mid-Page Call to Action */}
            <RuhCtaSection
                title="Transform Your Daily Health Ritual"
                subtitle="Experience a five-in-one matrix that supports detoxification, cellular defense, NAD energy, immune health, and youthful vitality."
                ctaText="Buy RÜH-ARMOR™ Today"
                isDark={false}
            />

            {/* Results & Benefits */}
            <RuhResults />

            {/* Social Proof & Positioning */}
            <RuhSocialProof />

            {/* Deep Dive Technical Breakdown */}
            <RuhDeepDive />

            {/* FAQ Section */}
            <RuhFaq />

            {/* Final Call to Action */}
            <RuhCtaSection
                title="Rebuild Your Cellular Foundation — Starting Now"
                subtitle="One formula. Five essential pillars of support. Comprehensive daily cellular wellness."
                ctaText="Get RÜH-ARMOR™ Today"
                isDark={true}
            />
        </main>
    );
}
