import ICONS from "../assets/Icons";

type Pillar = {
icon: any;
  headline: string;
  points: string[];
  benefit: string;
};

type TargetArea = {
    icon: any;
  title: string;
  description: string;
  points: string[];
};

type ComparisonMetric = {
  metric: string;
  standard: string;
  augmented: string;
  improvement: string;
};



export const footerLinks = {
  products: [
    { label: "RÜH-ARMOR™", href: "/ruh-armor" },
    { label: "NUR-ARMOR™", href: "/nur-armor" },
    { label: "Augmented NAC™", href: "/augmented-nac" },
  ],
  company: [
    { label: "Our Story", href: "/our-story" },
    { label: "Research", href: "/research" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "Bundles", href: "/bundles" },
    { label: "Store", href: "/store" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Community", href: "/community" },
  ],
};

export const navItems = [
  { label: "Our Story", href: "/our-story" },
  { label: "RÜH-ARMOR™", href: "/ruh-armor" },
  { label: "NUR-ARMOR™", href: "/nur-armor" },
  { label: "Augmented NAC™", href: "/augmented-nac" },
  { label: "Store", href: "/store" },
  { label: "Bundles", href: "/bundles" },
];

export const pillars: Pillar[] = [
  {
    icon: ICONS.Droplet,
    headline: "Heavy Metal Binding + Master Antioxidant",
    points: ["Zeolite (Molecular Sieve Technology)", "Liposomal Glutathione (300mg Enhanced Bioavailability)"],
    benefit: "Supports liver detox pathways and neutralizes free radicals",
  },
  {
    icon: ICONS.Dna,
    headline: "Cellular Energy & DNA Repair",
    points: ["Nicotinamide Riboside (NR) - NAD+ Precursor", "Methylfolate + B12 + Betaine"],
    benefit: "Supports mitochondrial function and cellular longevity",
  },
  {
    icon: ICONS.Shield,
    headline: "Daily Immune Resilience",
    points: ["Vitamin C (Potent Antioxidant)", "Zinc (Immune Cell Development)"],
    benefit: "Foundational support for immune defense and oxidative stress",
  },
  {
    icon: ICONS.Zap,
    headline: "Enhanced Nutrient Delivery",
    points: ["Sunflower Lecithin (Emulsification)", "Acacia Fibre (Prebiotic + Digestive Comfort)"],
    benefit: "Maximum absorption and microbiome balance",
  },
  {
    icon: ICONS.Sparkles,
    headline: "Cellular Rejuvenation",
    points: ["NAD+ Support + Collagen Production Synergy"],
    benefit: "Promotes mitochondrial vitality and visible skin radiance",
  },
];

export const targetAreas: TargetArea[] = [
  {
    icon: ICONS.Activity,
    title: "Bloodstream & Circulation",
    description: "Rapid antioxidant delivery to reduce systemic oxidative stress",
    points: ["NAC + Glutathione neutralization of free radicals in circulation"],
  },
  {
    icon: ICONS.Brain,
    title: "Central Nervous System",
    description: "Blood-brain barrier penetration for neurological protection",
    points: ["Liposomal delivery allows compound passage to brain tissue", "Supports mitochondrial health and memory function"],
  },
  {
    icon: ICONS.Heart,
    title: "Cardiovascular System",
    description: "Cardiac tissue protection against inflammatory responses",
    points: ["Specifically formulated for myocarditis/pericarditis support", "Dr. Delgado endorsed protocol for graphene-oxide related issues"],
  },
  {
    icon: ICONS.Target,
    title: "High Absorption Technology",
    description: "95% Piperine for deep cellular delivery",
    points: ["Black Pepper Extract enhances bioavailability to stressed tissues", "Supports respiratory and deep tissue antioxidant balance"],
  },
];

export const comparison: ComparisonMetric[] = [
  { metric: "Denaturation", standard: "12%", augmented: "99%", improvement: "8.25x" },
  { metric: "Dissolution", standard: "11%", augmented: "68%", improvement: "6.18x" },
  { metric: "Protein Unfolding", standard: "28%", augmented: "99%", improvement: "3.54x" },
  { metric: "Protection Factor", standard: "1x", augmented: "40x", improvement: "40x" },
  { metric: "Vitamin C Protection", standard: "1x", augmented: "7x", improvement: "7x" },
];
