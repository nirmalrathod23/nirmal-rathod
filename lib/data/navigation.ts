export const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
] as const;

export const footerLinks = {
  navigation: [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;

export const ctaButton = {
  text: "Let's Talk",
  href: "/contact",
} as const;

export const siteBrand = {
  name: "Nirmal",
  suffix: ".",
  tagline: "Product Designer & Web Developer based in Gujarat, crafting premium digital experiences.",
} as const;
