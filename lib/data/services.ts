export const servicesData = [
  {
    id: "brand-design",
    title: "Brand Design",
    shortDescription:
      "Creating memorable brand identities that resonate with your target audience and stand the test of time.",
    description:
      "I craft cohesive visual identities that go beyond a logo. From color theory to typography systems, every element is designed to communicate your brand's unique story and build instant trust with your audience.",
    icon: "pen-tool" as const,
    deliverables: [
      "Logo Design & Variations",
      "Typography System",
      "Color Palette & Usage Guide",
      "Comprehensive Brand Guidelines",
      "Social Media Templates",
      "Business Card & Stationery",
    ],
    benefits:
      "Establish trust instantly, differentiate from competitors, and maintain consistency across all touchpoints — from your website to your social media.",
    process: [
      "Discovery & Brand Audit",
      "Moodboarding & Concept Development",
      "Design Exploration & Iteration",
      "Final Delivery & Guidelines",
    ],
    faq: {
      q: "Do you design physical marketing materials?",
      a: "My primary focus is digital brand identity, but I can provide print-ready assets upon request.",
    },
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Designing intuitive, conversion-focused user interfaces with premium aesthetics and smooth interactions.",
    description:
      "I transform complex problems into elegant, user-centered solutions. My design process is rooted in research and validated through prototyping, ensuring every pixel serves a purpose.",
    icon: "layout" as const,
    deliverables: [
      "User Research & Personas",
      "Wireframes & User Flows",
      "High-Fidelity Interactive Prototypes",
      "Component-Based Design Systems",
      "Developer Handoff Documentation",
      "Usability Testing Reports",
    ],
    benefits:
      "Reduce friction in the user journey, increase conversion rates, and deliver a seamless, delightful product experience that keeps users coming back.",
    process: [
      "User Research & Competitive Analysis",
      "Information Architecture & Wireframing",
      "Visual Design & Prototyping",
      "Testing, Iteration & Handoff",
    ],
    faq: {
      q: "What design software do you use?",
      a: "I exclusively use Figma for UI/UX design, allowing for seamless real-time collaboration with your team.",
    },
  },
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    shortDescription:
      "Building scalable, custom WordPress websites tailored to your specific business needs and goals.",
    description:
      "I build WordPress the right way — lightweight custom themes, optimized performance, and clean code. No bloated page builders unless you specifically need one.",
    icon: "code" as const,
    deliverables: [
      "Custom Theme Development",
      "Plugin Integration & Configuration",
      "WooCommerce Setup",
      "SEO & Performance Optimization",
      "Responsive & Cross-Browser Testing",
      "Admin Training & Documentation",
    ],
    benefits:
      "Gain a fast, secure website that you can easily manage without needing technical knowledge. Built for scale, optimized for search.",
    process: [
      "Requirements & Technical Planning",
      "Design Approval & Development",
      "Content Integration & QA",
      "Launch, Training & Support",
    ],
    faq: {
      q: "Do you use page builders?",
      a: "I prefer building lightweight custom blocks or using minimal setups, but I am fully proficient with Elementor if required.",
    },
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDescription:
      "Developing strategic social media marketing campaigns to grow your brand's digital presence.",
    description:
      "From content strategy to paid campaigns, I help brands build engaged communities and drive measurable results across social platforms.",
    icon: "share-2" as const,
    deliverables: [
      "Platform Strategy & Audit",
      "Content Calendar & Planning",
      "Creative Asset Design",
      "Ad Campaign Management",
      "Monthly Analytics Reports",
      "Community Management Guidelines",
    ],
    benefits:
      "Build an engaged community, drive targeted traffic to your site, and increase brand awareness organically and through paid media.",
    process: [
      "Audit & Strategy Development",
      "Content Planning & Creation",
      "Campaign Launch & Management",
      "Analytics, Reporting & Optimization",
    ],
    faq: {
      q: "Which platforms do you specialize in?",
      a: "Instagram, LinkedIn, and Facebook. I focus on B2B and premium B2C markets.",
    },
  },
] as const;
