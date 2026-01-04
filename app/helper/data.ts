import ICONS from "../assets/Icons";
import IMAGES from '@/app/assets/Images';

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
  price: number;
  images: string[];
  details: string[];
  stock?: number;
};



export const footerLinks = {
  products: [
    { label: "RÜH-ARMOR™", href: "/ruh-armor" },
    { label: "NUR-ARMOR™", href: "/nur-armor" },
    { label: "Augmented NAC™", href: "/augmented-nac" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Blogs", href: "/blogs" },
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
  { label: "Blogs", href: "/blogs" },
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
    items: ["The Low-Histamine Kitchen Makeover", "Dr. Delgado Protocol PDF", "7-Day Detox Blueprint"],
    action: "Access Library",
    link: "/protocols",
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
    slug: "synthetic-spike-protein-distribution",
    speaker: "Dr. Byram Bridle",
    role: "Viral Immunologist, University of Guelph",
    topic: "Synthetic Spike Protein Distribution",
    findings: "Research indicates the distribution of synthetic spike proteins in critical organs including the Ovaries, Heart, Brain, and Liver.",
    warning: "WE MADE A MISTAKE: The spike protein itself is toxic and a pathogenic protein.",
    image: "/assets/about-doctor.png",
    content: `
      <h2><strong>Summary of Findings</strong></h2>
      <p>Associate Professor Byram Bridle shared data obtained from the Japanese regulatory agency regarding the biodistribution of the Pfizer vaccine. The study showed that the lipid nanoparticles (LNPs) containing the mRNA did not remain at the injection site as intended.</p>
      <p>Instead, they were found to distribute systematically throughout the body within 48 hours, accumulating in high concentrations in the ovaries, bone marrow, and lymph nodes.</p>
      <h3><strong>Key Concerns</strong></h3>
      <ul>
        <li><strong>Spike Protein Toxicity:</strong> The spike protein, which the vaccine induces the body to produce, was previously thought to be harmless and anchored to the cell surface. Dr. Bridle asserts that the spike protein itself is a toxin that can enter the bloodstream and cause cardiovascular damage.</li>
        <li><strong>Reproductive Implications:</strong> The high accumulation of LNPs in the ovaries raises theoretical concerns about female fertility, although long-term human data is still being gathered.</li>
        <li><strong>Blood-Brain Barrier:</strong> Evidence suggests the spike protein may cross the blood-brain barrier, potentially leading to neurological issues.</li>
      </ul>
      <div class="alert alert-warning">
        <strong>Warning:</strong> Dr. Bridle emphasized that this distribution was unintentional and constitutes a significant safety signal that was not adequately disclosed during the initial rollout.
      </div>
    `
  },
  {
    id: 2,
    slug: "clinical-risks-cardiovascular",
    speaker: "Dr. Peter McCullough",
    role: "Cardiologist & Researcher",
    topic: "Clinical Risks & Cardiovascular Protection",
    findings: "Significant risks identified including Myocarditis, systemic inflammation, and blood clots related to spike protein persistence.",
    warning: "Urgent need for targeted detoxification and cardiovascular support protocols.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    content: `
      <h2><strong>Clinical Observations</strong></h2>
      <p>Dr. Peter McCullough, a world-renowned cardiologist, has highlighted a mechanism of injury involving the spike protein's ability to damage the inner lining of blood vessels (endothelium).</p>
      <p>This damage can lead to micro-clotting and inflammation, explaining the rise in conditions like myocarditis and pericarditis, particularly in young males.</p>
      <h3><strong>Proposed Mechanisms</strong></h3>
      <ul>
        <li><strong>Direct Cardiomyocyte Injury:</strong> The spike protein may directly damage heart muscle cells.</li>
        <li><strong>Molecular Mimicry:</strong> The immune system may attack the body's own tissues due to similarities between the spike protein and human proteins.</li>
      </ul>
      <h3><strong>Recommended Approach</strong></h3>
      <p>Dr. McCullough advocates for a "Spike Detox" protocol involving Nattokinase, Bromelain, and Curcumin to help degrade the spike protein and reduce inflammation.</p>
    `
  },
  {
    id: 3,
    slug: "vaccine-contents-analysis",
    speaker: "David A. Hughes, PhD",
    role: "Senior Lecturer, University of Lincoln",
    topic: "What Is in the So-Called COVID-19 “Vaccines”?",
    findings: "Microscopic and spectroscopic analysis by independent researchers across 16 countries suggests the presence of undisclosed ingredients.",
    warning: "The paper argues these findings represent a lack of informed consent and warrant urgent independent investigation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    content: `
      <h2><strong>Summary of Part 1: Evidence of a Global Crime Against Humanity</strong></h2>
      <p>This document details a paper by David A. Hughes, PhD, published in the <em>International Journal of Vaccine Theory, Practice, and Research</em> (September 2022). It aggregates findings from at least 26 independent researchers across 16 countries.</p>
      
      <h3><strong>Core Claims</strong></h3>
      <p>The paper asserts that COVID-19 vaccines contain undisclosed ingredients not declared to the public, allegedly discovered through optical microscopy, dark-field microscopy, electron microscopy, and spectroscopy.</p>
      
      <h3><strong>Reported Microscopic Findings</strong></h3>
      <p>Researchers examining vaccine vials and blood samples reported observing:</p>
      <ul>
        <li>Sharp-edged geometric structures</li>
        <li>Fibrous and tube-like formations</li>
        <li>Crystalline structures</li>
        <li>Microbubbles and unidentified foreign bodies</li>
      </ul>
      
      <h3><strong>Blood Sample Analysis</strong></h3>
      <p>Blood samples from vaccinated individuals reportedly showed:</p>
      <ul>
        <li>Red blood cells in Rouleaux (stacked) formation</li>
        <li>Reduced cell motility</li>
        <li>Deformation and rupture of red blood cells</li>
      </ul>
      
      <h3><strong>Nanotechnology & Self-Assembly</strong></h3>
      <p>The paper discusses claims that some observed structures appear to be self-assembling, forming consistent circuit-like patterns over time. While acknowledging these claims seem implausible to some, the author argues the consistency across independent findings demands investigation.</p>
      
      <h3><strong>Spectroscopic Analysis</strong></h3>
      <p>Some analyses reportedly found structures lacking nitrogen and phosphorus (essential for biological life), leading researchers to hypothesize the presence of synthetic materials, including potential graphene-based structures (though this is noted as contested).</p>
      
      <div class="alert alert-danger">
        <strong>Conclusion:</strong> The author concludes that if validated, these findings represent a violation of medical ethics and informed consent, calling for transparent, independent scientific investigation.
      </div>
    `
  },
  {
    id: 4,
    slug: "spike-protein-toxicity-augmented-nac",
    speaker: "Research & Clinical Analysis",
    role: "Comprehensive Review",
    topic: "Understanding Spike Protein Toxicity and the Power of Augmented NAC Detox",
    findings: "The spike protein is identified as a potent toxin causing widespread inflammation. Augmented NAC offers a 3-D approach: Detach, Denature, Detox.",
    warning: "Spike protein can cross the blood-brain barrier and switch off cancer-protective genes.",
    image: "https://images.unsplash.com/photo-1550573104-d02bc3a3fb95?q=80&w=2070&auto=format&fit=crop",
    content: `
      <div class="space-y-12 text-gray-900">
        
        <!-- Intro Section -->
        <div>
            <h2 class="text-3xl font-bold text-(--deep-green) mb-6">What is the Spike Protein, and Why Detox?</h2>
            
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="space-y-6">
                     <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl italic">
                        <p class="text-lg font-medium text-red-900">"The spike protein is probably one of the most toxic compounds to which humans can be exposed."</p>
                        <p class="text-sm font-bold text-red-700 mt-2">— Dr. Paul Marik</p>
                     </div>
                     <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl italic">
                        <p class="text-lg font-medium text-red-900">"The spike protein is found everywhere... it gets into the brain. Everywhere the spike protein goes it causes so much inflammation."</p>
                        <p class="text-sm font-bold text-red-700 mt-2">— Dr. Ryan Cole</p>
                     </div>
                     <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl italic">
                        <p class="text-lg font-medium text-red-900">"Spike protein switches off 3 cancer protective genes and it is switches on 17 oncogenes."</p>
                        <p class="text-sm font-bold text-red-700 mt-2">— Dr. Tina Peers</p>
                     </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Mechanism of Harm</h3>
                    <ul class="space-y-3 list-disc pl-5 text-gray-700">
                        <li><strong>Toxin:</strong> Whether from infection or vaccine, the spike protein acts as a toxin.</li>
                        <li><strong>ACE2 Binding:</strong> Binds to receptors in nearly every organ (Heart, Lungs, Brain).</li>
                        <li><strong>Persistence:</strong> Recent Yale study shows circulation for <strong>over 700 days</strong>.</li>
                        <li><strong>Blood-Brain Barrier:</strong> Crosses into neurological tissue, causing long-term damage.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Symptoms Grid -->
        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Devastating Impact of Spike Protein</h3>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4 text-2xl">🧠</div>
                    <h4 class="font-bold text-red-700 mb-2">Neurological Disorders</h4>
                    <p class="text-sm text-gray-600">Bell's palsy, Parkinson's, Alzheimer's, mental confusion, mood swings.</p>
                </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4 text-2xl">❤️</div>
                    <h4 class="font-bold text-red-700 mb-2">Cardiovascular Issues</h4>
                    <p class="text-sm text-gray-600">Blood clots, myocarditis, pericarditis, heart damage.</p>
                </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4 text-2xl">⚠️</div>
                    <h4 class="font-bold text-red-700 mb-2">Systemic Risks</h4>
                    <p class="text-sm text-gray-600">Autoimmune reactions, turbo cancers, respiratory problems, sudden fatigue.</p>
                </div>
            </div>
        </div>

        <!-- The Solution: 3-D Approach -->
        <div class="bg-(--deep-green) text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
             <div class="relative z-10">
                <h2 class="text-3xl font-bold text-(--luxe-gold) mb-8 text-center">Augmented NAC The 3-D Approach</h2>
                <div class="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
                    <div class="flex-1">
                        <div class="text-6xl font-black opacity-20 mb-2">D</div>
                        <h3 class="text-2xl font-bold">Detach</h3>
                        <p class="opacity-80 mt-2">Detaches spike proteins from ACE2 receptors.</p>
                    </div>
                    <div class="w-full md:w-px h-px md:h-24 bg-white/20"></div>
                     <div class="flex-1">
                        <div class="text-6xl font-black opacity-20 mb-2">D</div>
                        <h3 class="text-2xl font-bold">Denature</h3>
                        <p class="opacity-80 mt-2">Unfolds the protein structure, rendering it inactive (99.8% effectiveness).</p>
                    </div>
                     <div class="w-full md:w-px h-px md:h-24 bg-white/20"></div>
                     <div class="flex-1">
                        <div class="text-6xl font-black opacity-20 mb-2">D</div>
                        <h3 class="text-2xl font-bold">Detox</h3>
                        <p class="opacity-80 mt-2">Eliminates the neutralized fragments via urine (confirmed by UST).</p>
                    </div>
                </div>
             </div>
        </div>

        <!-- Science & BBB -->
        <div class="grid md:grid-cols-2 gap-12">
            <div>
                 <h3 class="text-2xl font-bold text-(--deep-green) mb-4">Crossing the Blood-Brain Barrier</h3>
                 <p class="text-gray-700 mb-4 leading-relaxed">
                    Spike proteins cause long-lasting damage to brain function. <strong>Augmented NAC</strong> is crucial because its advanced liposomal form allows it to cross the blood-brain barrier.
                 </p>
                 <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <p class="italic text-purple-900 font-medium">
                        "For Lisa, it was the only supplement that helped restore her neurological health."
                    </p>
                 </div>
            </div>
            <div>
                 <h3 class="text-2xl font-bold text-(--deep-green) mb-4">Confirmed by Science</h3>
                 <ul class="space-y-4">
                    <li class="flex gap-3">
                        <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">✓</span>
                        <span class="text-gray-700"><strong>Docking Analyses:</strong> Visualized the interaction sites between Augmented NAC and spike proteins.</span>
                    </li>
                    <li class="flex gap-3">
                        <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">✓</span>
                        <span class="text-gray-700"><strong>Urine Spike Test (UST):</strong> Confirmed elimination of spike fragments after 7 days of use.</span>
                    </li>
                    <li class="flex gap-3">
                        <span class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">✓</span>
                        <span class="text-gray-700"><strong>Anti-Prion Properties:</strong> Helps overcome fatal neurodegenerative disorders.</span>
                    </li>
                 </ul>
            </div>
        </div>

      </div>
    `
  }
];

export const protocolsData = [
  {
    id: "low-histamine-diet",
    slug: "low-histamine-diet",
    title: "The Low-Histamine Kitchen Makeover",
    subtitle: "Your Quick-Start Guide to a Low-Inflammation Diet",
    icon: "Activity",
    summary: "A quick-start guide to a low-inflammation diet. Learn what to enjoy freely and what to avoid to reduce histamine buildup.",
    content: `
          <div class="space-y-12">
            <!-- Golden Rule -->
            <div class="bg-(--deep-green) text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                    <h2 class="text-2xl md:text-3xl font-bold text-(--luxe-gold) mb-4">The Golden Rule: FRESH IS BEST!</h2>
                    <p class="text-lg leading-relaxed text-gray-200">
                        Histamine levels increase in food over time, especially in protein-rich foods. The fresher, the better.
                    </p>
                </div>
            </div>

            <!-- Foods Lists -->
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Enjoy Freely -->
                <div class="bg-[#f0fdf4] border border-[#dcfce7] rounded-3xl p-8">
                    <h3 class="text-2xl font-bold text-[#15803d] mb-2">Foods to Enjoy Freely</h3>
                    <p class="text-sm text-[#15803d] font-semibold mb-6 uppercase tracking-wider">(Low-Histamine)</p>
                    
                    <ul class="space-y-4 text-gray-700">
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#16a34a] rounded-full mt-2.5 shrink-0"></span><span><strong>Proteins:</strong> Fresh (never previously frozen) or flash-frozen meat, poultry, and fish. <span class="underline decoration-[#16a34a]/30">Cook and eat immediately.</span></span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#16a34a] rounded-full mt-2.5 shrink-0"></span><span><strong>Veggies:</strong> Fresh broccoli, cauliflower, carrots, lettuce, sweet potato, squash, onions.</span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#16a34a] rounded-full mt-2.5 shrink-0"></span><span><strong>Fruits:</strong> Blueberries, apples, mangoes, pears, cherries.</span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#16a34a] rounded-full mt-2.5 shrink-0"></span><span><strong>Grains:</strong> Rice, quinoa, oats, gluten-free pasta.</span></li>
                    </ul>
                </div>

                <!-- Avoid for Now -->
                <div class="bg-[#fef2f2] border border-[#fee2e2] rounded-3xl p-8">
                    <h3 class="text-2xl font-bold text-[#b91c1c] mb-2">Foods to Avoid for Now</h3>
                    <p class="text-sm text-[#b91c1c] font-semibold mb-6 uppercase tracking-wider">(High-Histamine)</p>

                    <ul class="space-y-4 text-gray-700">
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#dc2626] rounded-full mt-2.5 shrink-0"></span><span><strong>Leftovers</strong> older than 24 hours.</span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#dc2626] rounded-full mt-2.5 shrink-0"></span><span><strong>Canned fish/meats</strong> (unless frozen immediately after canning).</span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#dc2626] rounded-full mt-2.5 shrink-0"></span><span><strong>Fermented foods:</strong> sauerkraut, yogurt, kefir, soy sauce, kombucha.</span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#dc2626] rounded-full mt-2.5 shrink-0"></span><span><strong>Processed meats:</strong> bacon, salami, sausages.</span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#dc2626] rounded-full mt-2.5 shrink-0"></span><span><strong>Certain Vegetables:</strong> spinach, tomatoes, avocado, eggplant.</span></li>
                        <li class="flex gap-3"><span class="w-1.5 h-1.5 bg-[#dc2626] rounded-full mt-2.5 shrink-0"></span><span><strong>Common Triggers:</strong> chocolate, black tea, green tea, coffee, alcohol.</span></li>
                    </ul>
                </div>
            </div>

            <!-- Meal Ideas -->
            <div class="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                <h3 class="text-3xl font-bold text-gray-900 mb-2">3 Simple & Quick Meal Ideas</h3>
                <p class="text-gray-600 mb-10">Easy, delicious, and histamine-safe recipes to get you started.</p>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 class="text-xl font-bold text-gray-900 mb-2">Breakfast</h4>
                        <p class="text-gray-600">Oatmeal made with water, topped with fresh blueberries and a dash of maple syrup.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 class="text-xl font-bold text-gray-900 mb-2">Lunch</h4>
                        <p class="text-gray-600">A large salad with fresh grilled chicken (cooked that morning), chopped carrots, cucumber, and a simple olive oil and salt dressing.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 class="text-xl font-bold text-gray-900 mb-2">Dinner</h4>
                        <p class="text-gray-600">Fresh salmon pan-fried in olive oil with a side of steamed broccoli and jasmine rice.</p>
                    </div>
                </div>
            </div>

            <!-- Pro Tip -->
            <div class="bg-linear-to-r from-(--luxe-gold) to-[#e2c78d] text-(--deep-green) p-8 md:p-10 rounded-2xl shadow-lg">
                <h3 class="text-2xl font-bold mb-2">Pro Meal Prep Tip</h3>
                <p class="font-medium text-lg opacity-90 leading-relaxed">
                    Cook in batches and <strong>freeze portions immediately</strong> to have "fresh" meals on hand. This avoids the histamine buildup of typical leftovers stored in the fridge.
                </p>
            </div>
           </div>
        `
  },
  {
    id: "neuro-immune-reset",
    slug: "neuro-immune-reset",
    title: "The Neuro-Immune Reset Protocol",
    subtitle: "The Missing Link in Chronic Inflammation: Spike Protein, MCAS, and What You Can Do",
    icon: "Brain",
    summary: "A 3-Pillar approach to calm mast cells, soothe the nervous system, and support deep detox to address mystery symptoms.",
    content: `
          <div class="space-y-12 text-gray-900">
            <!-- Slide 2: The Problem -->
            <div class="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl">
                <h3 class="text-2xl font-bold text-red-800 mb-4">The Silent Epidemic</h3>
                <p class="text-lg font-medium text-red-800 mb-4">Are you or someone you know struggling with:</p>
                <ul class="list-disc pl-5 space-y-2 text-red-900/80">
                    <li>Mysterious fatigue, brain fog, or aches?</li>
                    <li>New allergies or food sensitivities?</li>
                    <li>Neurological symptoms like tremors or buzzing?</li>
                </ul>
                <p class="mt-4 font-bold text-red-800">You're not alone, and you're not imagining it.</p>
            </div>

            <!-- Slide 3: Root Cause -->
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                 <h2 class="text-3xl font-bold text-(--deep-green) mb-6">The Root Cause: A Perfect Storm</h2>
                 <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <span class="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Trigger</span>
                        <p class="font-bold text-xl text-gray-900">Spike Protein Persistence</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <span class="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Mechanism</span>
                        <p class="font-bold text-xl text-gray-900">Mast Cell Activation Syndrome (MCAS) & Systemic Inflammation</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <span class="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Result</span>
                        <p class="font-bold text-xl text-gray-900">A cascade of symptoms affecting the brain, gut, skin, and nervous system.</p>
                    </div>
                 </div>
            </div>

            <!-- Slide 5: The Protocol -->
            <div class="relative overflow-hidden bg-(--deep-green) text-white rounded-3xl p-8 md:p-12">
                <div class="relative z-10">
                    <h2 class="text-3xl md:text-4xl font-bold text-(--luxe-gold) mb-6">The Neuro-Immune Reset Protocol</h2>
                    <p class="text-xl mb-8 opacity-90">A comprehensive 3-Pillar Approach aimed at targeting the root cause.</p>
                    
                    <div class="grid md:grid-cols-3 gap-6 text-gray-900">
                        <!-- Pillar 1 -->
                        <div class="bg-white p-6 rounded-xl">
                            <div class="text-(--deep-green) font-black text-5xl opacity-10 mb-2">01</div>
                            <h4 class="text-xl font-bold mb-2">Calm</h4>
                            <p class="text-sm text-gray-600">Mast Cells & Histamine</p>
                        </div>
                         <!-- Pillar 2 -->
                        <div class="bg-white p-6 rounded-xl">
                            <div class="text-(--deep-green) font-black text-5xl opacity-10 mb-2">02</div>
                            <h4 class="text-xl font-bold mb-2">Soothe</h4>
                            <p class="text-sm text-gray-600">The Nervous System</p>
                        </div>
                         <!-- Pillar 3 -->
                        <div class="bg-white p-6 rounded-xl">
                            <div class="text-(--deep-green) font-black text-5xl opacity-10 mb-2">03</div>
                            <h4 class="text-xl font-bold mb-2">Support</h4>
                            <p class="text-sm text-gray-600">Deep Detox & Immunity</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slides 6-8: Detailed Pillars -->
            <div class="space-y-8">
                <h3 class="text-3xl font-bold text-gray-900">Detailed Breakdown</h3>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Pillar 1 Detail -->
                    <div class="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
                        <h4 class="text-xl font-bold text-(--deep-green) mb-2">Pillar 1: Calm the Storm</h4>
                        <div class="mb-4">
                            <span class="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded">Product: HishtaShield</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2"><strong>Key Ingredients:</strong> Quercetin & Vitamin C</p>
                        <p class="text-gray-700"><strong>Goal:</strong> Stabilize mast cells to reduce histamine release and calm systemic inflammation.</p>
                    </div>

                    <!-- Pillar 2 Detail -->
                    <div class="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
                        <h4 class="text-xl font-bold text-(--deep-green) mb-2">Pillar 2: Soothe Your Nerves</h4>
                        <div class="mb-4">
                            <span class="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">Product: NeuroCalm</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2"><strong>Key Ingredients:</strong> Magnesium Glycinate</p>
                        <p class="text-gray-700"><strong>Goal:</strong> Relax the nervous system, ease tension, and promote restful sleep.</p>
                    </div>

                    <!-- Pillar 3 Detail -->
                    <div class="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
                        <h4 class="text-xl font-bold text-(--deep-green) mb-2">Pillar 3: Support Foundation</h4>
                         <div class="mb-4">
                            <span class="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-1 rounded">Product: ImmuneBase</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2"><strong>Key Ingredients:</strong> Zinc, Selenium, D3/K2</p>
                        <p class="text-gray-700"><strong>Goal:</strong> Provide essential micronutrients for a balanced immune response and long-term resilience.</p>
                    </div>
                </div>
            </div>

            <!-- Slide 9: Breakthrough -->
            <div class="bg-linear-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12">
                 <h3 class="text-2xl font-bold text-(--bio-neon) mb-6">The Breakthrough for Neurological Symptoms</h3>
                 <div class="space-y-4">
                    <div class="flex gap-4">
                        <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">🔑</div>
                        <div>
                            <p class="font-bold text-lg">The Key</p>
                            <p class="opacity-80">Effective support must cross the Blood-Brain Barrier.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">❌</div>
                        <div>
                            <p class="font-bold text-lg">The Problem</p>
                            <p class="opacity-80">Standard NAC has limited penetration.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-8 h-8 rounded-full bg-(--bio-neon)/20 flex items-center justify-center shrink-0">✅</div>
                        <div>
                            <p class="font-bold text-lg">The Solution: CerebraNAC</p>
                            <p class="opacity-80">An augmented formula designed for targeted neurological support.</p>
                        </div>
                    </div>
                 </div>
            </div>

            <!-- Slide 11: Pathway Forward -->
             <div class="bg-[#faf8f3] border border-[#e2dcc8] rounded-3xl p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Your Pathway Forward</h3>
                <ol class="space-y-4">
                    <li class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs">
                        <span class="w-8 h-8 bg-(--luxe-gold) text-white rounded-full flex items-center justify-center font-bold">1</span>
                        <div>
                            <span class="font-bold text-gray-900 block">Start Here</span>
                            <span class="text-gray-600">The foundational <strong class="text-(--deep-green)">Histamine Reset Bundle</strong>.</span>
                        </div>
                    </li>
                    <li class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs">
                        <span class="w-8 h-8 bg-(--luxe-gold) text-white rounded-full flex items-center justify-center font-bold">2</span>
                        <div>
                            <span class="font-bold text-gray-900 block">Level Up</span>
                            <span class="text-gray-600">Add <strong class="text-(--deep-green)">ANaC</strong> for advanced neurological support.</span>
                        </div>
                    </li>
                    <li class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs">
                        <span class="w-8 h-8 bg-(--luxe-gold) text-white rounded-full flex items-center justify-center font-bold">3</span>
                        <div>
                            <span class="font-bold text-gray-900 block">Your Next Step</span>
                            <span class="text-gray-600">Download our free <strong>Low-Histamine Starter Guide</strong>.</span>
                        </div>
                    </li>
                </ol>
            </div>
          </div>
        `
  }
];

export const products: Product[] = [
  {
    id: "ruh-armor",
    name: "RÜH-ARMOR™",
    description: "Multi-pillar detox system combining heavy metal binding, NAD support, and antioxidant synergy.",
    price: 99.00,
    images: [
      IMAGES.DETOX_RUH_ARMOR,
      "https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=2070&auto=format&fit=crop"
    ],
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
    price: 119.00,
    images: [
      IMAGES.NUR_ARMOR_DEGRADE,
      "https://images.unsplash.com/photo-1471864190281-ad5fe9ac770b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2070&auto=format&fit=crop"
    ],
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
    price: 149.00,
    images: [
      IMAGES.NAC4,
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e86f?q=80&w=2070&auto=format&fit=crop"
    ],
    details: [
      "8x-40x Enhanced Bioavailability",
      "Spike Protein Denaturation",
      "Quantum-Enhanced Technology",
      "Systemic Oxidative Stress Reduction",
      "Respiratory Health Support"
    ]
  },

];
