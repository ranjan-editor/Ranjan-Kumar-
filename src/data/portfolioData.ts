export interface ProjectMediaItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  aspect: 'vertical' | 'square' | 'horizontal';
  bgColor: string;
  tag?: string;
  previewType: 'video' | 'graphic' | 'ui';
  videoUrl?: string;
  colorGradingInfo?: string;
  headline?: string;
}

export interface CareerRole {
  id: string;
  company: string;
  location: string;
  dates: string;
  role: string;
  description: string;
  logoType: 'ro' | 'shipa' | 'raseed' | 'bfc';
  logoColor: string;
  items: ProjectMediaItem[];
  tags: string[];
}

export const HERO_DATA = {
  subtitle: "MOTION DESIGNER &",
  title: "VIDEO EDITOR",
  contact: {
    name: "kevin perez",
    phone: "+63 977 045 2368",
    email: "kevin.m.perez123@gmail.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    website: "brandfoxcreatives.com",
    linkedin: "linkedin.com/kevinperez",
    behance: "behance.com/kevinperez",
    location: "Batangas, Philippines"
  },
  bio: {
    title: "Motion-Driven Visual Designer",
    description: "I'm a video editor and motion designer with 9–10 years of experience turning ideas into visuals that move—literally and strategically. From concept development to final cut, I create video and graphic content that sharpens brand identity, captures attention, and pushes visibility forward."
  },
  skillsStars: [
    { name: "Video Editing (SF, LF)", star: "★", highlight: false },
    { name: "2D Motion Graphics", star: "★", highlight: false },
    { name: "3D Modeling", star: "★", highlight: false },
    { name: "Illustration", star: "★", highlight: false },
    { name: "Adobe Creative Suite", star: "★", highlight: true },
    { name: "Blender", star: "★", highlight: false },
  ],
  coreExpertise: [
    { name: "Video Editing", active: true },
    { name: "Motion Graphics & Animation", active: false },
    { name: "Visual Storytelling", active: false },
    { name: "Creative Direction", active: false },
    { name: "VFX & Compositing", active: false },
    { name: "Audio Editing & Sync", active: false },
    { name: "Color Correction & Grading", active: false },
    { name: "Storyboard Development", active: false }
  ],
  gauges: [
    { label: "Video Cut", value: 92, icon: "video", dash: "92, 100", stroke: "#10b981" },
    { label: "Motion", value: 75, icon: "compass", dash: "75, 100", stroke: "#06b6d4" },
    { label: "3D & VFX", value: 80, icon: "pen-tool", dash: "80, 100", stroke: "#10b981" },
    { label: "Pacing", value: 80, icon: "clock", dash: "80, 100", stroke: "#10b981" }
  ]
};

export const DOCK_APPS = [
  { id: "pr", name: "Premiere Pro", label: "Pr", color: "bg-[#00005b] text-[#9999ff]", border: "border-[#9999ff]/30", desc: "Long-form narrative & commercial offline editing" },
  { id: "ae", name: "After Effects", label: "Ae", color: "bg-[#00005b] text-[#d29bfd]", border: "border-[#d29bfd]/30", desc: "2D/3D motion graphics, kinetic typography, kinetic transitions" },
  { id: "ai", name: "Illustrator", label: "Ai", color: "bg-[#330000] text-[#ff9a00]", border: "border-[#ff9a00]/30", desc: "Vector graphics, storyboarding, custom assets" },
  { id: "bl", name: "Blender", label: "Blender", iconType: "blender", color: "bg-[#ea7600] text-white", border: "border-orange-400/30", desc: "3D camera tracking, product renders, environment animations" },
  { id: "ps", name: "Photoshop", label: "Ps", color: "bg-[#001e36] text-[#31a8ff]", border: "border-[#31a8ff]/30", desc: "Matte painting, high-end thumbnail design, textures" },
  { id: "figma", name: "Figma", label: "Figma", iconType: "figma", color: "bg-black text-white", border: "border-purple-400/30", desc: "UI/UX wireframes, social mockups, motion assets" },
  { id: "office", name: "Office 365", label: "Office", iconType: "office", color: "bg-[#d83b01] text-white", border: "border-red-400/30", badge: "1", desc: "Production decks, client deliverables, pitch management" },
  { id: "dv", name: "DaVinci Resolve", label: "DaVinci", iconType: "davinci", color: "bg-slate-900 text-amber-400", border: "border-amber-400/30", desc: "Advanced node-based color grading and finishing" }
];

export const CAREER_JOURNEY: CareerRole[] = [
  {
    id: "ro",
    company: "ro.co",
    location: "New York",
    dates: "October 2024 - April 2026",
    role: "Video Editor / Motion Graphic Artist (Remote)",
    description: "I collaborate closely with marketing and branding teams to craft strategic video content and motion graphics that strengthen brand storytelling and support campaign and business objectives. I oversee projects from concept through final delivery, ensuring every asset is aligned with brand standards, messaging, and audience expectations.",
    logoType: "ro",
    logoColor: "#111827",
    tags: ["UGC Videos", "Short Form Videos", "Long Form Videos", "Motion Graphics", "Video Editing", "Figma", "After Effects", "Premiere Pro"],
    items: [
      {
        id: "ro-1",
        title: "Creator Testimonial Hook",
        subtitle: "High Retention UGC Cut",
        aspect: "vertical",
        bgColor: "#291811",
        previewType: "video",
        headline: "GLP-1 Insurance Checker",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        colorGradingInfo: "Warm skin tone enhancement, custom dynamic captions, 2.8s hook rate"
      },
      {
        id: "ro-2",
        title: "3D Medication Comparison",
        subtitle: "Figma & After Effects 3D",
        aspect: "vertical",
        bgColor: "#1a1c23",
        previewType: "graphic",
        headline: "Let's Compare",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      },
      {
        id: "ro-3",
        title: "Ro Sparks Savings Campaign",
        subtitle: "High Converting Stat Motion",
        aspect: "vertical",
        bgColor: "#3b1717",
        previewType: "graphic",
        headline: "Ro Sparks 88% Cheaper",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      },
      {
        id: "ro-4",
        title: "Extended Performance Cut",
        subtitle: "Kinetic Typography Motion",
        aspect: "vertical",
        bgColor: "#132338",
        previewType: "graphic",
        headline: "Extended Performance",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
      },
      {
        id: "ro-5",
        title: "Healthcare Simplified",
        subtitle: "Kinetic UI Animation",
        aspect: "vertical",
        bgColor: "#1d2319",
        previewType: "video",
        headline: "GLP-1s are not a shortcut",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      },
      {
        id: "ro-6",
        title: "Interactive Ad Variant A",
        subtitle: "A/B Testing Social Cut",
        aspect: "vertical",
        bgColor: "#2d1f14",
        previewType: "graphic",
        headline: "Fast acting and long lasting"
      },
      {
        id: "ro-7",
        title: "Doctor Review Reel",
        subtitle: "Split Screen Medical Reel",
        aspect: "vertical",
        bgColor: "#17232b",
        previewType: "video",
        headline: "Dual action treatment"
      },
      {
        id: "ro-8",
        title: "Patient Journey Before & After",
        subtitle: "6 Months Milestone",
        aspect: "vertical",
        bgColor: "#3b1111",
        previewType: "graphic",
        headline: "84 lbs lost in 6 months"
      },
      {
        id: "ro-9",
        title: "Prescription Delivery Walkthrough",
        subtitle: "Motion Infographic Reel",
        aspect: "vertical",
        bgColor: "#291b29",
        previewType: "graphic",
        headline: "Direct to door delivery"
      },
      {
        id: "ro-10",
        title: "Care Team Consultation Spotlight",
        subtitle: "Brand Storytelling Cut",
        aspect: "vertical",
        bgColor: "#16251b",
        previewType: "video",
        headline: "Real care from real doctors"
      }
    ]
  },
  {
    id: "shipa",
    company: "Shipa Delivery (Agility)",
    location: "UAE",
    dates: "October 2018 - May 2025",
    role: "Video Editor / Motion Graphic Artist / 3D Artist (Remote)",
    description: "Responsible for creating engaging visual content across video, animation, motion graphics, and 3D design. Collaborates with the marketing and branding teams to develop creative assets that support campaigns, strengthen brand identity, and communicate ideas through compelling visual storytelling.",
    logoType: "shipa",
    logoColor: "#f97316",
    tags: ["Motion Graphics", "Illustration", "Animation", "Video Editing", "3D Modeling", "3D Animation", "Image Retouching", "Pitch Deck Animation (Presentations)", "Photo Manipulation"],
    items: [
      {
        id: "shipa-1",
        title: "3D Courier Mascot Character",
        subtitle: "Cinema 4D & Blender Rig",
        aspect: "square",
        bgColor: "#d1fae5",
        previewType: "graphic",
        headline: "Speed & Reliability",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        id: "shipa-2",
        title: "All Roads Lead to The GCC",
        subtitle: "Regional 3D Billboard Animation",
        aspect: "square",
        bgColor: "#0f172a",
        previewType: "graphic",
        headline: "ALL ROADS LEAD TO THE GCC",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
      },
      {
        id: "shipa-3",
        title: "Valentine's Swift Delivery Campaign",
        subtitle: "Special Edition 3D Render",
        aspect: "square",
        bgColor: "#fce7f3",
        previewType: "graphic",
        headline: "Valentine's Express"
      },
      {
        id: "shipa-4",
        title: "Cross-Border Air Cargo Visuals",
        subtitle: "GCC Cargo Route Campaign",
        aspect: "square",
        bgColor: "#e0f2fe",
        previewType: "graphic",
        headline: "Shipping Between KSA UAE KUWAIT"
      },
      {
        id: "shipa-5",
        title: "Same-Day Courier Mobile App Animation",
        subtitle: "Vector Motion & SFX",
        aspect: "square",
        bgColor: "#dbeafe",
        previewType: "graphic",
        headline: "Real-Time Tracking"
      },
      {
        id: "shipa-6",
        title: "Seasonal 50% Off E-commerce Rush",
        subtitle: "Dynamic Retail Promotional Cut",
        aspect: "square",
        bgColor: "#fed7aa",
        previewType: "graphic",
        headline: "Peak Season Logistics"
      },
      {
        id: "shipa-7",
        title: "Refrigerated Fleet Fleet 3D Showcase",
        subtitle: "Temperature Controlled Delivery",
        aspect: "square",
        bgColor: "#e2e8f0",
        previewType: "graphic",
        headline: "Smart Cold Chain"
      },
      {
        id: "shipa-8",
        title: "Last-Mile Delivery Truck Packaging",
        subtitle: "Brand Identity Vehicle Wrap",
        aspect: "square",
        bgColor: "#ffedd5",
        previewType: "graphic",
        headline: "Shipa Express Vans"
      }
    ]
  },
  {
    id: "raseed",
    company: "Raseed Invest Ltd",
    location: "UAE",
    dates: "October 2018 - May 2025",
    role: "Video Editor / Motion Graphic Artist / 3D Artist (Remote)",
    description: "Responsible for creating engaging visual content across video, animation, motion graphics, and 3D design. Collaborates with the marketing and branding teams to develop creative assets that support campaigns, strengthen brand identity, and communicate ideas through compelling visual storytelling.",
    logoType: "raseed",
    logoColor: "#7c3aed",
    tags: ["Motion Graphics", "Illustration", "Animation", "Video Editing", "3D Modeling", "3D Animation", "Image Retouching", "Pitch Deck Animation (Presentations)", "Photo Manipulation", "Product Videos", "App Tutorial Videos"],
    items: [
      {
        id: "raseed-1",
        title: "Crypto is Here Campaign Launch",
        subtitle: "3D Gold Bitcoin Coin & Lighting",
        aspect: "horizontal",
        bgColor: "#84cc16",
        previewType: "graphic",
        headline: "Crypto is here",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
      {
        id: "raseed-2",
        title: "Next-Gen Investor Cinematic Film",
        subtitle: "Arabic Typography & FinTech Grading",
        aspect: "horizontal",
        bgColor: "#1e1b4b",
        previewType: "video",
        headline: "Zero Commission US Stocks",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
      },
      {
        id: "raseed-3",
        title: "Desktop Web Platform Release",
        subtitle: "Laptop Screen Interaction Mockup",
        aspect: "horizontal",
        bgColor: "#0f172a",
        previewType: "graphic",
        headline: "Download the latest version"
      },
      {
        id: "raseed-4",
        title: "Real-Time Stock Market Tracker UI",
        subtitle: "Mobile Experience Video Walkthrough",
        aspect: "horizontal",
        bgColor: "#f8fafc",
        previewType: "graphic",
        headline: "Monitor market activity"
      }
    ]
  },
  {
    id: "bfc",
    company: "BFC Creative Studio",
    location: "Philippines",
    dates: "April 2017 - Present",
    role: "Creative Director",
    description: "Led teams while shaping and executing creative direction for B2B clients across branding, packaging, and content strategy. Oversaw the development of brand identities, logos, marketing collaterals, packaging, store design concepts, social media content, animations, videos, presentations, billboards, and other key visual assets.",
    logoType: "bfc",
    logoColor: "#0284c7",
    tags: ["Motion Graphics", "Illustration", "Animation", "Video Editing", "3D Modeling", "3D Animation", "Image Retouching", "Pitch Deck Animation (Presentations)", "Photo Manipulation", "Product Videos", "App Tutorial Videos"],
    items: [
      {
        id: "bfc-1",
        title: "Craft Beverage Launch Reel",
        subtitle: "High-Speed Macro Liquid Camera",
        aspect: "vertical",
        bgColor: "#dc2626",
        previewType: "video",
        headline: "Strawberry Cold Brew",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      },
      {
        id: "bfc-2",
        title: "Beauty Influencer Video Shoot",
        subtitle: "Natural Skin Glow Grade",
        aspect: "vertical",
        bgColor: "#3b2b2b",
        previewType: "video",
        headline: "Luminous Serum Campaign"
      },
      {
        id: "bfc-3",
        title: "Matcha Latte Product Commercial",
        subtitle: "Color Grading & Foley Sound",
        aspect: "vertical",
        bgColor: "#14532d",
        previewType: "video",
        headline: "Pure Ceremonial Grade"
      },
      {
        id: "bfc-4",
        title: "Fashion Creator OOTD Reel",
        subtitle: "Fast-Paced Rhythmic Cuts",
        aspect: "vertical",
        bgColor: "#4a044e",
        previewType: "video",
        headline: "Summer Runway Edit"
      },
      {
        id: "bfc-5",
        title: "Artisan Chocolate Packaging 3D",
        subtitle: "Gold Foil Emboss Visualization",
        aspect: "vertical",
        bgColor: "#78350f",
        previewType: "graphic",
        headline: "Bean-to-Bar Collection"
      },
      {
        id: "bfc-6",
        title: "Energy Drink Can 3D Water Condensation",
        subtitle: "Cinema 4D Octane Render",
        aspect: "vertical",
        bgColor: "#1e293b",
        previewType: "graphic",
        headline: "Sparkling Hydration"
      },
      {
        id: "bfc-7",
        title: "Organic Skincare Unboxing Reel",
        subtitle: "ASMR Audio Sync & Soft Cuts",
        aspect: "vertical",
        bgColor: "#fef3c7",
        previewType: "video",
        headline: "Clean Beauty Protocol"
      },
      {
        id: "bfc-8",
        title: "Sun-Kissed Fruit Beverage Shoot",
        subtitle: "Summer Social Media Ad",
        aspect: "vertical",
        bgColor: "#f59e0b",
        previewType: "video",
        headline: "Sun-Fresh Yummy"
      },
      {
        id: "bfc-9",
        title: "MOOSH Gelato Brand Identity",
        subtitle: "Retro Pop Typography & Packaging",
        aspect: "vertical",
        bgColor: "#e11d48",
        previewType: "graphic",
        headline: "MOOSH Gelato Bar"
      },
      {
        id: "bfc-10",
        title: "Bistro Valentine Buffet Event Promo",
        subtitle: "Restaurant Motion Poster",
        aspect: "vertical",
        bgColor: "#38bdf8",
        previewType: "graphic",
        headline: "Valentine Buffet at Bistro"
      }
    ]
  }
];
