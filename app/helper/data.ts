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


export const testimonials = [
  {
    id: 1,
    name: "Dr. Tina Peers",
    role: "Medical Doctor",
    rating: 5,
    text: "After extensive research into spike protein pathology, I confidently recommend RÜH-ARMOR to my patients. The scientific foundation is solid, and the clinical results speak for themselves.",
    verified: true,
    type: "medical",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Long COVID Recovery Patient",
    rating: 5,
    text: "I struggled with fatigue and brain fog for 18 months post-infection. Within three weeks of starting NUR-ARMOR, my energy returned and mental clarity improved dramatically. Life-changing.",
    verified: true,
    type: "patient",
  },
  {
    id: 3,
    name: "Dr. Peter McCullough",
    role: "Cardiologist & Researcher",
    rating: 5,
    text: "The molecular approach to spike protein neutralization in Augmented NAC represents a significant advancement. This is precisely what our patients need for cardiovascular protection.",
    verified: true,
    type: "medical",
  },
  {
    id: 4,
    name: "James Anderson",
    role: "Vaccine Injury Support Group",
    rating: 5,
    text: "Our community has tried countless protocols. RÜH-ARMOR stands out for its comprehensive approach and consistent results. Members report significant improvements in just weeks.",
    verified: true,
    type: "patient",
  },
  {
    id: 5,
    name: "Dr. Ruby Judy",
    role: "Integrative Medicine Specialist",
    rating: 5,
    text: "The liposomal delivery system and NAD+ support make this formula uniquely effective. I've seen remarkable recoveries in patients with persistent post-viral symptoms.",
    verified: true,
    type: "medical",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Athlete & Biohacker",
    rating: 5,
    text: "Performance and recovery have reached new levels. The mitochondrial support is evident in my training metrics. This is now a non-negotiable part of my stack.",
    verified: true,
    type: "patient",
  },
];

export const bundles = [
  {
    id: 1,
    name: "The Hijama Protocol",
    description: "Complete detox system with liver cleanse preparation",
    products: ["RÜH-ARMOR™", "NUR-ARMOR™", "Augmented NAC™", "Detox Diet Plan"],
    price: "$279",
    savings: "Save 15%",
    icon: ICONS.Zap,
    includes: "Includes Detox Diet Plan",
  },
  {
    id: 2,
    name: "Immunity Pack",
    description: "Daily defense & immune system support",
    products: ["RÜH-ARMOR™", "NUR-ARMOR™", "Immune Support Protocol"],
    price: "$189",
    savings: "Save 30%",
    icon: ICONS.Package,
    includes: "Includes Immune Support Protocol",
  },
  {
    id: 3,
    name: "Total Cellular Care Pack",
    description: "Complete protection with advanced NAC boost",
    products: ["RÜH-ARMOR™", "NUR-ARMOR™", "Augmented NAC™", "Advanced NAC Boost"],
    price: "$299",
    savings: "Save 20%",
    icon: ICONS.ShoppingCart,
    featured: true,
    includes: "Includes Full Protocol Guide + Community Access",
  },
  {
    id: 4,
    name: "Affiliate Starter Pack",
    description: "Start your wellness business today",
    products: ["Sample Products", "Marketing Materials", "Affiliate Onboarding"],
    price: "$149",
    savings: "Save 25%",
    icon: ICONS.Users,
    includes: "Includes Affiliate Onboarding",
  },
];


export const resources = [
  {
    id: 1,
    icon: ICONS.FileText,
    title: "Clinical Studies & Research",
    description: "Peer-reviewed papers, lab reports, and scientific evidence",
    items: ["Spike Protein Denaturation Study", "NAC Bioavailability Research", "Graphene Oxide Analysis"],
    action: "Download Studies",
    link: "#",
  },
  {
    id: 2,
    icon: ICONS.BookOpen,
    title: "Diet Plans & Protocols",
    description: "Comprehensive guides for detox, immune support, and recovery",
    items: ["Dr. Delgado Protocol PDF", "7-Day Detox Blueprint", "Anti-Inflammatory Meal Plans"],
    action: "Access Library",
    link: "#",
  },
  {
    id: 3,
    icon: ICONS.Users,
    title: "Community Support Groups",
    description: "Join thousands in our private Telegram community",
    items: ["Q&A with Doctors", "Recovery Stories", "Product Updates & Research"],
    action: "Join Telegram",
    link: "#",
    featured: true,
  },
];

export const downloads = [
  { name: "Complete Product Guide", size: "2.4 MB", format: "PDF" },
  { name: "Immune Support Protocol", size: "1.8 MB", format: "PDF" },
  { name: "Graphene Oxide Study", size: "3.1 MB", format: "PDF" },
  { name: "Dr. Delgado Testimony", size: "890 KB", format: "PDF" },
];


export const benefits = [
  {
    icon: ICONS.TrendingUp,
    title: "High 50% Commission Structure",
    description: "Industry-leading earnings on every sale",
  },
  {
    icon: ICONS.Package,
    title: "White-Label Options Available",
    description: "Build your own brand with our formulas",
  },
  {
    icon: ICONS.Award,
    title: "Minimum Order: 50 Units",
    description: "Private label opportunities for serious partners",
  },
  {
    icon: ICONS.BookOpen,
    title: "Marketing Materials & Training",
    description: "Complete toolkit for success",
  },
  {
    icon: ICONS.Share2,
    title: "AWIN Social Media Integration",
    description: "Seamless platform connectivity",
  },
  {
    icon: ICONS.Headphones,
    title: "Business Growth Support",
    description: "Dedicated team to scale your success",
  },
];

export const trustElements = [
    {
        icon: ICONS.Shield,
        text: "30-Day Money-Back Guarantee",
    },
    {
        icon: ICONS.Truck,
        text: "Free Shipping Over $150",
    },
    {
        icon: ICONS.Award,
        text: "Laboratory Verified & Doctor Approved",
    },
];
