import type { Metadata } from "next";

const baseUrl = "https://nirmalrathod.com";

export const baseSeo: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nirmal Rathod | Product Designer & Web Developer",
    template: "%s | Nirmal Rathod",
  },
  description:
    "Premium portfolio of Nirmal Rathod — Product Designer, UI/UX Designer, and Web Developer based in Gujarat. Specializing in brand design, social media marketing, and WordPress development.",
  keywords: [
    "UI/UX designer",
    "product designer",
    "web developer",
    "brand designer",
    "WordPress developer",
    "social media marketing",
    "portfolio",
    "Gujarat",
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
      "Premium portfolio of Nirmal Rathod — Product Designer, UI/UX Designer, and Web Developer based in Gujarat.",
    siteName: "Nirmal Rathod Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirmal Rathod | Product Designer & Web Developer",
    description:
      "Premium portfolio of Nirmal Rathod — specializing in brand design, UI/UX, and WordPress development.",
    creator: "@nirmalrathod",
  },
  robots: {
    index: true,
    follow: true,
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
    alternates: { canonical: "/" },
  },
  services: {
    title: "Services",
    description:
      "Explore my core services: Brand Design, UI/UX Design, WordPress Development, and Social Media Marketing.",
    alternates: { canonical: "/services" },
  },
  projects: {
    title: "Projects & Case Studies",
    description:
      "Browse a curated collection of my recent projects across UI/UX, Brand Design, Social Media, and WordPress Development.",
    alternates: { canonical: "/projects" },
  },
  about: {
    title: "About",
    description:
      "Learn about Nirmal Rathod's background, design philosophy, and workflow. Based in Gujarat, with experience at SeaNeB.",
    alternates: { canonical: "/about" },
  },
  skills: {
    title: "Skills & Tools",
    description:
      "A comprehensive overview of Nirmal Rathod's technical skills, design tools, and development stack.",
    alternates: { canonical: "/skills" },
  },
  experience: {
    title: "Experience & Education",
    description:
      "A timeline of Nirmal Rathod's professional experience, including roles at SeaNeB, freelance work, and education.",
    alternates: { canonical: "/experience" },
  },
  contact: {
    title: "Contact",
    description:
      "Ready to elevate your brand? Get in touch to discuss your next project — from UI/UX design to WordPress development.",
    alternates: { canonical: "/contact" },
  },
} as const;
