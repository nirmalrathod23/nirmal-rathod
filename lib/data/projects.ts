export type ProjectGalleryItem = {
  label: string;
  src?: string;
  aspect: "video" | "wide" | "square" | "portrait";
  span?: "full" | "half" | "third";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  coverImage: string;
  challenge: string;
  solution: string;
  tools: string[];
  metrics: string[];
  year: string;
  client: string;
  gallery: ProjectGalleryItem[];
};

export const projectCategories = [
  "All",
  "Brand Design",
  "UI/UX Design",
  "Social Media Marketing",
  "WordPress Development",
] as const;

export const projectsData: Project[] = [
  {
    slug: "aura-ecommerce",
    title: "Aura E-Commerce",
    category: "UI/UX Design",
    shortDescription:
      "A premium headless e-commerce platform with smooth page transitions and an editorial aesthetic.",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    challenge:
      "Aura needed a storefront that felt as premium as their luxury fashion pieces, while maintaining lightning-fast performance for conversions.",
    solution:
      "We designed a minimalistic, typography-driven interface and built it using Next.js and Tailwind CSS, integrating Framer Motion for elegant product reveals and a headless Shopify backend.",
    tools: ["Figma", "Next.js", "Tailwind CSS", "Shopify Plus"],
    metrics: [
      "40% increase in conversion rate",
      "1.2s average page load time",
      "65% increase in mobile sessions",
    ],
    year: "2024",
    client: "Aura Fashion",
    gallery: [
      { label: "Homepage Hero", src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80", aspect: "wide", span: "full" },
      { label: "Product Listing", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", aspect: "video", span: "half" },
      { label: "Product Detail", src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80", aspect: "video", span: "half" },
      { label: "Cart & Checkout Flow", src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80", aspect: "wide", span: "full" },
      { label: "Mobile Home", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80", aspect: "portrait", span: "third" },
      { label: "Mobile PDP", src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80", aspect: "portrait", span: "third" },
      { label: "Mobile Cart", src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80", aspect: "portrait", span: "third" },
    ],
  },
  {
    slug: "lumina-brand-identity",
    title: "Lumina Brand Identity",
    category: "Brand Design",
    shortDescription:
      "Complete visual identity, including logo design, typography system, and brand guidelines for a tech startup.",
    coverImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
    challenge:
      "Lumina, a new AI SaaS, lacked a distinct visual voice in a crowded market. They needed to look trustworthy yet cutting-edge.",
    solution:
      "Developed a comprehensive brand system centering around a dynamic geometric logo, a sophisticated color palette, and clear usage guidelines that scale from pitch decks to product UI.",
    tools: ["Illustrator", "Photoshop", "Figma", "After Effects"],
    metrics: [
      "100+ positive beta user feedback",
      "Featured on BrandNew",
      "Successful $2M seed round post-rebrand",
    ],
    year: "2024",
    client: "Lumina AI",
    gallery: [
      { label: "Logo Construction Grid", aspect: "square", span: "half" },
      { label: "Logo Variations", aspect: "square", span: "half" },
      { label: "Brand Guidelines Spread", aspect: "wide", span: "full" },
      { label: "Business Cards", aspect: "video", span: "half" },
      { label: "Letterhead & Envelope", aspect: "video", span: "half" },
      { label: "Social Media Templates", aspect: "wide", span: "full" },
    ],
  },
  {
    slug: "oasis-wellness",
    title: "Oasis Wellness",
    category: "WordPress Development",
    shortDescription:
      "A custom WordPress theme tailored for a luxury wellness retreat, featuring advanced booking integrations.",
    coverImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    challenge:
      "Oasis required a scalable CMS that their non-technical staff could update daily, alongside a complex booking integration with real-time availability.",
    solution:
      "Built a custom, lightweight WordPress theme from scratch, removing bloat and integrating a seamless third-party booking API via custom REST endpoints and tailored admin panels.",
    tools: ["WordPress", "PHP", "Tailwind CSS", "JavaScript"],
    metrics: [
      "3x faster page load times",
      "Zero downtime during peak booking season",
      "Admin efficiency improved by 50%",
    ],
    year: "2023",
    client: "Oasis Retreats",
    gallery: [
      { label: "Homepage Design", aspect: "wide", span: "full" },
      { label: "Booking Calendar UI", aspect: "video", span: "half" },
      { label: "Admin Dashboard", aspect: "video", span: "half" },
      { label: "Mobile Responsive View", aspect: "portrait", span: "third" },
      { label: "Services Page", aspect: "portrait", span: "third" },
      { label: "Contact Page", aspect: "portrait", span: "third" },
    ],
  },
  {
    slug: "nova-social",
    title: "Nova Social Campaign",
    category: "Social Media Marketing",
    shortDescription:
      "A high-conversion social media campaign strategy and creative execution for a fitness apparel brand.",
    coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
    challenge:
      "Nova was losing engagement on Instagram and struggling to convert followers into buyers despite having a strong product line.",
    solution:
      "Redesigned their visual feed strategy, launched a targeted ad campaign focusing on user-generated content and bold kinetic typography, and implemented a conversion-optimized link-in-bio flow.",
    tools: ["Figma", "Premiere Pro", "Facebook Ads Manager", "Buffer"],
    metrics: [
      "150% ROAS on social ads",
      "12k new followers in 2 months",
      "Engagement rate up by 4.5%",
    ],
    year: "2023",
    client: "Nova Athletics",
    gallery: [
      { label: "Instagram Feed Grid", aspect: "square", span: "full" },
      { label: "Story Template", aspect: "portrait", span: "third" },
      { label: "Carousel Post", aspect: "portrait", span: "third" },
      { label: "Ad Creative", aspect: "portrait", span: "third" },
      { label: "Analytics Dashboard", aspect: "wide", span: "full" },
    ],
  },
  {
    slug: "zenith-dashboard",
    title: "Zenith Analytics Dashboard",
    category: "UI/UX Design",
    shortDescription:
      "A data-rich analytics dashboard redesign for a B2B SaaS platform, focused on clarity and actionable insights.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    challenge:
      "Zenith's existing dashboard was overwhelming for users, leading to poor adoption rates and constant support tickets about data interpretation.",
    solution:
      "Conducted extensive user research, restructured the information architecture, and designed a clean, card-based UI with progressive disclosure patterns and customizable views.",
    tools: ["Figma", "FigJam", "Maze", "Notion"],
    metrics: [
      "45% reduction in support tickets",
      "3x increase in daily active users",
      "User onboarding time cut by 60%",
    ],
    year: "2024",
    client: "Zenith SaaS",
    gallery: [
      { label: "Dashboard Overview", aspect: "wide", span: "full" },
      { label: "Data Visualization Cards", aspect: "video", span: "half" },
      { label: "Settings Panel", aspect: "video", span: "half" },
      { label: "Onboarding Flow", aspect: "wide", span: "full" },
    ],
  },
  {
    slug: "flora-wordpress",
    title: "Flora Boutique",
    category: "WordPress Development",
    shortDescription:
      "A bespoke WooCommerce storefront for an artisan flower shop with real-time delivery scheduling.",
    coverImage: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&q=80",
    challenge:
      "Flora needed an online presence that matched their in-store luxury experience, with complex delivery zone logic and perishable inventory management.",
    solution:
      "Created a custom WordPress theme with WooCommerce, building a bespoke delivery zone calculator plugin and integrating with their existing POS system for real-time stock updates.",
    tools: ["WordPress", "WooCommerce", "PHP", "ACF Pro"],
    metrics: [
      "Online revenue grew 200% in first quarter",
      "80% of orders now placed online",
      "Average order value up 35%",
    ],
    year: "2023",
    client: "Flora Boutique",
    gallery: [
      { label: "Storefront Homepage", aspect: "wide", span: "full" },
      { label: "Product Grid", aspect: "video", span: "half" },
      { label: "Product Detail Page", aspect: "video", span: "half" },
      { label: "Delivery Zone Calculator", aspect: "video", span: "full" },
    ],
  },
];
