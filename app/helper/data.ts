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

type Video = {
  id: number;
  thumbnail: string;
  title: string;
  duration: string;
  category: string;
};

type ConversionStep = {
  icon: any;
  title: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: string;
  details: string[];
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

export const mainNavItems = [
  { label: "About Us", href: "/about" },
  { label: "RÜH-ARMOR™", href: "/ruh-armor" },
  { label: "NUR-ARMOR™", href: "/nur-armor" },
  { label: "Augmented NAC™", href: "/augmented-nac" },
  { label: "Access Studies", href: "/studies" },
];

export const moreNavItems = [
  { label: "Store", href: "/#store" },
  { label: "Bundles", href: "/bundles" },
  { label: "See Videos", href: "/videos" },
  { label: "Parasite Cleanse", href: "/parasite-cleanse" },
  { label: "Spike Cleanse", href: "/spike-cleanse" },
  { label: "Hormone Balance", href: "/hormone-balance" },
  { label: "Quran Verses", href: "/quran-verses" },
  { label: "The Healing of Noor", href: "/healing-noor" },
  { label: "Become an Affiliate", href: "/affiliate" },
  { label: "Contact Us", href: "/contact" },
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
    name: "Detox Pack",
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

export const videos: Video[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1576091160550-217359f42f1c?q=80&w=2070&auto=format&fit=crop",
    title: "Understanding Spike Protein Pathology",
    duration: "12:45",
    category: "Science"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    title: "Clinical Results: 90 Days Review",
    duration: "08:20",
    category: "Clinical"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1579154235829-639796a9c7ec?q=80&w=2070&auto=format&fit=crop",
    title: "The Molecular Science of Augmented NAC",
    duration: "15:30",
    category: "Research"
  }
];

export const conversionSteps: ConversionStep[] = [
  {
    icon: ICONS.Shield,
    title: "Step 1: Cellular Defense",
    description: "Neutralize systemic threats and protect your DNA foundations."
  },
  {
    icon: ICONS.Zap,
    title: "Step 2: Bio-Optimization",
    description: "Enhance mitochondrial energy and nutrient delivery efficiency."
  },
  {
    icon: ICONS.Target,
    title: "Step 3: Protocol Integration",
    description: "Seamlessly integrate with your lifestyle for lasting results."
  }
];

export const ruhArmorFaq = [
  {
    question: "Is RÜH-ARMOR™ safe for daily use?",
    answer: "Yes. RÜH-ARMOR™ is formulated for daily foundational support to help maintain consistent detoxification, energy production, and nutrient absorption as part of a balanced lifestyle."
  },
  {
    question: "Does RÜH-ARMOR™ support anti-aging?",
    answer: "Yes. Through NAD support and antioxidant pathways, along with Vitamin C’s role in collagen production and cellular protection, RÜH-ARMOR™ supports anti-aging and youthful vitality."
  },
  {
    question: "How long before I notice benefits?",
    answer: "Some people report feeling improvements in clarity and energy within the first days or weeks. Deeper benefits related to detoxification, vitality, and skin appearance typically build over 2–4 weeks of consistent use."
  },
  {
    question: "Is RÜH-ARMOR™ suitable for vegetarians?",
    answer: "Yes. The formula contains no animal-derived ingredients."
  },
  {
    question: "Does it contain common allergens?",
    answer: "RÜH-ARMOR™ contains sunflower lecithin. It is free from soy, dairy, gluten, and artificial additives."
  }
];

export const ruhArmorBenefits = [
  "Clearer detoxification pathways",
  "Support for heavy metal binding and elimination",
  "Improved daily energy and stamina",
  "Stronger immune resilience",
  "Enhanced nutrient absorption and digestive comfort",
  "Support for more youthful, radiant-looking skin",
  "Enhanced mental clarity and cellular repair support"
];

export const ruhArmorPillars = [
  {
    title: "Detoxification Matrix",
    description: "Zeolite is a naturally occurring mineral that acts as a molecular sieve, binding heavy metals and environmental toxins in the digestive tract. Liposomal Glutathione is the body’s master antioxidant, crucial for liver health and neutralizing free radicals. In its liposomal form, absorption and bioavailability are significantly enhanced.",
    ingredients: "Zeolite + Liposomal Glutathione",
    benefit: "Supports removal of harmful elements while reinforcing cellular protection and liver detoxification pathways."
  },
  {
    title: "Methylation & NAD Energy Support",
    description: "RÜH-ARMOR™ includes Betaine, Nicotinamide Riboside (NR), Methylfolate, and Vitamin B12 to support methylation, DNA synthesis, cognitive function, and cellular repair. NR is a precursor to NAD, a molecule central to mitochondrial function, cellular energy production, and longevity-related pathways.",
    ingredients: "Betaine, NR, Methylfolate, Vitamin B12",
    benefit: "Supports DNA synthesis, cognitive function, and cellular repair."
  },
  {
    title: "Immune & Antioxidant Strength",
    description: "Vitamin C is a potent antioxidant that supports immune defense, collagen production, and resilience against oxidative stress. Zinc is essential for immune cell development, enzymatic function, and overall physiological stability. Together, Vitamin C and Zinc form a strong foundation for daily immune and antioxidant support.",
    ingredients: "Vitamin C + Zinc",
    benefit: "Strong foundation for daily immune and antioxidant support."
  },
  {
    title: "Absorption & Delivery Enhancement",
    description: "Acacia Fiber is a gentle prebiotic fiber that supports digestive comfort, microbiome balance, and smoother detoxification. Sunflower Lecithin enhances emulsification and nutrient delivery, supporting the efficient absorption of key ingredients throughout the formula.",
    ingredients: "Acacia Fiber + Sunflower Lecithin",
    benefit: "Supports microbiome balance and efficient nutrient absorption."
  },
  {
    title: "Youthful Vitality & Anti-Aging Support",
    description: "The synergy between NAD-supporting Nicotinamide Riboside and collagen-boosting Vitamin C promotes mitochondrial vitality, cellular repair, and visible skin radiance. This combination supports anti-aging pathways and overall youthful vitality.",
    ingredients: "NR + Vitamin C Synergy",
    benefit: "Promotes mitochondrial vitality and visible skin radiance."
  }
];

export const aboutContent = {
  heading: "ABOUT US",
  subheading: "HIJAMA PROTOCOL",
  philosophy: "At Hijama Protocol, we believe in the profound wisdom of nature refined by the precision of science. Our philosophy centers on drawing out impurities, purging toxins, and restoring balance to the immune system using natural herbs and holistic methods.",
  mission: "We are committed to providing trustworthy information and high-potency formulations to support individuals affected by modern environmental challenges, including synthetic spike proteins and heavy metal toxicity.",
  image: "/assets/about-doctor.png"
};

export const studiesData = [
  {
    id: 1,
    speaker: "Dr. Byram Bridle",
    role: "Viral Immunologist, University of Guelph",
    topic: "Synthetic Spike Protein Distribution",
    findings: "Research indicates the distribution of synthetic spike proteins in critical organs including the Ovaries, Heart, Brain, and Liver.",
    warning: "WE MADE A MISTAKE: The spike protein itself is toxic and a pathogenic protein.",
    image: "/assets/about-doctor.png"
  },
  {
    id: 2,
    speaker: "Dr. Peter McCullough",
    role: "Cardiologist & Researcher",
    topic: "Clinical Risks & Cardiovascular Protection",
    findings: "Significant risks identified including Myocarditis, systemic inflammation, and blood clots related to spike protein persistence.",
    warning: "Urgent need for targeted detoxification and cardiovascular support protocols.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  }
];

export const products: Product[] = [
  {
    id: "ruh-armor",
    name: "RÜH-ARMOR™",
    description: "Multi-pillar detox system combining heavy metal binding, NAD support, and antioxidant synergy.",
    price: "$99.00",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=2070&auto=format&fit=crop"
    ],
    category: "Cellular Health",
    details: [
      "Heavy Metal Binding (Zeolite Technology)",
      "NAD+ Support (Nicotinamide Riboside)",
      "Master Antioxidant (Liposomal Glutathione)",
      "Immune Resilience (Vitamin C + Zinc)",
      "Enhanced Nutrient Delivery"
    ]
  },
  {
    id: "nur-armor",
    name: "NUR-ARMOR™",
    description: "Neurological support with advanced antioxidant delivery and Dr. Delgado's endorsed protocol.",
    price: "$119.00",
    images: [
      "https://images.unsplash.com/photo-1550573104-d02bc3a3fb95?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471864190281-ad5fe9ac770b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2070&auto=format&fit=crop"
    ],
    category: "Neurological Support",
    details: [
      "Blood-Brain Barrier Penetration",
      "Cardiac Tissue Protection",
      "Mitochondrial Health Support",
      "Advanced Antioxidant Delivery",
      "Dr. Delgado Endorsed Protocol"
    ]
  },
  {
    id: "augmented-nac",
    name: "Augmented NAC™",
    description: "Quantum-enhanced NAC providing 8x–40x better spike protein denaturation and oxidative defense.",
    price: "$149.00",
    images: [
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e86f?q=80&w=2070&auto=format&fit=crop"
    ],
    category: "Oxidative Defense",
    details: [
      "8x-40x Enhanced Bioavailability",
      "Spike Protein Denaturation",
      "Quantum-Enhanced Technology",
      "Systemic Oxidative Stress Reduction",
      "Respiratory Health Support"
    ]
  },

];
