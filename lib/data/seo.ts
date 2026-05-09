import type { Metadata } from "next";

const baseUrl = "https://nirmal-rathod.vercel.app";

export const baseSeo: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nirmal Rathod | Product Designer & Web Developer",
    template: "%s | Nirmal Rathod",
  },
  description:
    "Premium portfolio of Nirmal Rathod — Product Designer, UI/UX Designer, and Web Developer. Specializing in brand design, social media marketing, and WordPress development.",
  keywords: [
    "UI/UX designer",
    "product designer",
    "web developer",
    "brand designer",
    "WordPress developer",
    "social media marketing",
    "portfolio",
    "Nirmal Rathod",
  ],
  authors: [{ name: "Nirmal Rathod" }],
  creator: "Nirmal Rathod",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Nirmal Rathod | Product Designer & Web Developer",
    description:
      "Premium portfolio of Nirmal Rathod — Product Designer, UI/UX Designer, and Web Developer.",
    siteName: "Nirmal Rathod Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or I'll need to create a placeholder
        width: 1200,
        height: 630,
        alt: "Nirmal Rathod Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirmal Rathod | Product Designer & Web Developer",
    description:
      "Premium portfolio of Nirmal Rathod — specializing in brand design, UI/UX, and WordPress development.",
    creator: "@nirmalrathod",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const pageSeo = {
  home: {
    title: "Nirmal Rathod | Product Designer & Web Developer",
    description:
      "Premium portfolio of Nirmal Rathod — Product Designer, UI/UX Designer, and Web Developer based in Gujarat.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },
  services: {
    title: "Services",
    description:
      "Explore my core services: Brand Design, UI/UX Design, WordPress Development, and Social Media Marketing.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/services" },
  },
  projects: {
    title: "Projects & Case Studies",
    description:
      "Browse a curated collection of my recent projects across UI/UX, Brand Design, Social Media, and WordPress Development.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/projects" },
  },
  about: {
    title: "About",
    description:
      "Learn about Nirmal Rathod's background, design philosophy, and workflow. Based in Gujarat, with experience at SeaNeB.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/about" },
  },
  skills: {
    title: "Skills & Tools",
    description:
      "A comprehensive overview of Nirmal Rathod's technical skills, design tools, and development stack.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/skills" },
  },
  experience: {
    title: "Experience & Education",
    description:
      "A timeline of Nirmal Rathod's professional experience, including roles at SeaNeB, freelance work, and education.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/experience" },
  },
  contact: {
    title: "Contact",
    description:
      "Ready to elevate your brand? Get in touch to discuss your next project — from UI/UX design to WordPress development.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/contact" },
  },
  blog: {
    title: "Blog & Insights",
    description:
      "Insights on UI/UX design, web development, branding, and freelancing from Nirmal Rathod.",
    alternates: { canonical: "https://nirmal-rathod.vercel.app/blog" },
  },
} as const;

export const schemas = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nirmal Rathod",
    "url": baseUrl,
    "jobTitle": "Product Designer & Web Developer",
    "sameAs": [
      "https://github.com/nirmalrathod",
      "https://linkedin.com/in/nirmalrathod",
      "https://twitter.com/nirmalrathod",
      "https://instagram.com/nirmalrathod"
    ],
    "image": `${baseUrl}/profile.jpg`,
    "description": "Premium portfolio of Nirmal Rathod — Product Designer, UI/UX Designer, and Web Developer.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    }
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nirmal Rathod Portfolio",
    "url": baseUrl,
    "description": "Premium portfolio of Nirmal Rathod — Product Designer, UI/UX Designer, and Web Developer.",
    "publisher": {
      "@type": "Person",
      "name": "Nirmal Rathod"
    }
  }
};
