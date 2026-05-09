export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  content: ContentBlock[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; id: string }
  | { type: "image"; label: string; src?: string; aspect?: "video" | "wide" | "square" }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "code"; language: string; text: string };

export const blogCategories = ["All", "Design", "Development", "Branding", "Career"] as const;

export const blogData: BlogPost[] = [
  {
    slug: "design-systems-that-scale",
    title: "How to Build Design Systems That Actually Scale",
    excerpt:
      "A practical guide to creating component libraries and design tokens that grow with your product — without becoming a maintenance nightmare.",
    coverImage: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=1200&q=80",
    content: [
      { type: "heading", text: "Why Design Systems Matter", id: "why-design-systems-matter" },
      { type: "paragraph", text: "Design systems are more than a Figma library. They're a shared language between designers and developers that ensures consistency, accelerates development, and reduces decision fatigue across your entire product." },
      { type: "image", label: "Design System Overview", src: "https://images.unsplash.com/photo-1581291518633-83b4eef1d2f8?w=1200&q=80", aspect: "wide" },
      { type: "heading", text: "Start With Tokens, Not Components", id: "start-with-tokens" },
      { type: "paragraph", text: "The biggest mistake teams make is trying to build everything at once. Instead, start with the atoms — colors, typography, spacing, and shadows. Define these as design tokens (CSS variables or a JSON config) so they can be consumed by any platform." },
      { type: "list", items: [
        "Colors: primary, secondary, accent, semantic (success, warning, error)",
        "Typography: font families, size scale, line heights, letter spacing",
        "Spacing: a consistent 4px or 8px base unit system",
        "Shadows: elevation levels from subtle to pronounced",
      ] },
      { type: "image", label: "Token Architecture", src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80" },
      { type: "heading", text: "Build Core Components", id: "build-core-components" },
      { type: "paragraph", text: "Next, build your core components: buttons, inputs, cards, and modals. Each component should have clearly defined variants, states, and accessibility requirements documented alongside it. Use tools like Storybook to create a living reference." },
      { type: "heading", text: "Governance Is Everything", id: "governance" },
      { type: "paragraph", text: "The key to scalability is governance. Establish a contribution model — who can add components? How are breaking changes communicated? Without this, your system will fragment as the team grows." },
      { type: "quote", text: "A design system without governance is just a Figma file that everyone copies and nobody updates.", author: "Nirmal Rathod" },
      { type: "heading", text: "Measure Adoption", id: "measure-adoption" },
      { type: "paragraph", text: "Finally, measure adoption. Track how many product screens use system components vs. custom one-offs. A healthy design system should cover 80%+ of your UI. If it doesn't, your system isn't solving the right problems." },
      { type: "image", label: "Adoption Dashboard", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" },
      { type: "paragraph", text: "I've built design systems for products with 200+ components at SeaNeB. The ones that survive are the ones that prioritize developer experience just as much as design consistency." },
    ],
    category: "Design",
    date: "2024-12-15",
    readTime: "6 min read",
    author: "Nirmal Rathod",
    featured: true,
  },
  {
    slug: "next-js-portfolio-performance",
    title: "Why I Chose Next.js for My Portfolio (And You Should Too)",
    excerpt:
      "Static generation, image optimization, and SEO out of the box — here's why Next.js is the perfect framework for a developer portfolio.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    content: [
      { type: "heading", text: "The Framework Decision", id: "framework-decision" },
      { type: "paragraph", text: "When I rebuilt my portfolio, I evaluated several frameworks: Astro, Gatsby, plain React, and Next.js. Each has strengths, but Next.js won because of its flexibility — I can mix static pages, server components, and dynamic routes in one project." },
      { type: "image", label: "Code Editor", src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80", aspect: "wide" },
      { type: "heading", text: "Performance First", id: "performance-first" },
      { type: "paragraph", text: "Performance was non-negotiable. With Next.js App Router, every page is statically generated at build time. The result? Sub-second load times, perfect Lighthouse scores, and zero JavaScript shipped for pages that don't need interactivity." },
      { type: "list", items: [
        "100/100 Lighthouse Performance score",
        "< 1s First Contentful Paint",
        "Zero layout shift (CLS = 0)",
        "Automatic code splitting per route",
      ] },
      { type: "heading", text: "SEO Without the Pain", id: "seo-without-pain" },
      { type: "paragraph", text: "SEO is critical for a portfolio. Next.js makes it trivial to add unique metadata, Open Graph tags, and structured data to every page. The generateMetadata function lets you create dynamic meta tags for case studies without any boilerplate." },
      { type: "image", label: "SEO Configuration", src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80" },
      { type: "heading", text: "Image Optimization", id: "image-optimization" },
      { type: "paragraph", text: "Image handling is another massive win. The next/image component automatically optimizes, lazy-loads, and serves responsive images in modern formats like WebP and AVIF. No more manually compressing PNGs." },
      { type: "heading", text: "Developer Experience", id: "developer-experience" },
      { type: "paragraph", text: "The developer experience sealed the deal. Hot module replacement is instant, TypeScript support is first-class, and the file-based routing means I spend zero time configuring a router." },
      { type: "quote", text: "If you're a developer building a portfolio, Next.js gives you the best balance of performance, SEO, and developer experience." },
      { type: "paragraph", text: "It's not the simplest option — but it's the one that will serve you best long-term." },
    ],
    category: "Development",
    date: "2024-11-28",
    readTime: "5 min read",
    author: "Nirmal Rathod",
  },
  {
    slug: "brand-identity-process",
    title: "My Brand Identity Design Process: From Brief to Guidelines",
    excerpt:
      "A behind-the-scenes look at how I approach brand projects — from initial discovery to delivering a comprehensive brand book.",
    coverImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
    content: [
      { type: "heading", text: "Start With Listening", id: "start-with-listening" },
      { type: "paragraph", text: "Every brand project starts with listening. Before I open Illustrator, I spend 2-3 hours in a discovery session understanding the client's vision, audience, competitors, and market positioning. This phase is non-negotiable." },
      { type: "image", label: "Discovery Session", src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80" },
      { type: "heading", text: "Moodboarding & Strategy", id: "moodboarding" },
      { type: "paragraph", text: "From the discovery notes, I create a moodboard — not just visual inspiration, but a strategic map of adjectives, textures, and emotional territories the brand should occupy. This gets client alignment before any design work begins." },
      { type: "image", label: "Moodboard", src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80", aspect: "wide" },
      { type: "heading", text: "Logo Exploration", id: "logo-exploration" },
      { type: "paragraph", text: "The logo exploration phase is where I generate 30-50 rough concepts. I sketch by hand first, then digitize the strongest 8-10 directions. From these, I present 3 refined concepts to the client, each with a clear strategic rationale." },
      { type: "list", items: [
        "30-50 initial rough sketches",
        "8-10 digitized directions",
        "3 refined concepts presented",
        "1 final logo with variations",
      ] },
      { type: "image", label: "Logo Sketches", src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&q=80", aspect: "square" },
      { type: "heading", text: "Typography & Color", id: "typography-color" },
      { type: "paragraph", text: "Typography selection is often underestimated. I pair typefaces that reinforce the brand personality — a geometric sans for tech companies, a humanist serif for luxury brands. The right type does 60% of the branding work." },
      { type: "paragraph", text: "Color theory is applied strategically. I build a palette with primary, secondary, and accent colors, each with light/dark variants for accessibility. Every color choice is justified against the brand's emotional goals." },
      { type: "image", label: "Color Palette", src: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=1200&q=80" },
      { type: "heading", text: "Final Deliverables", id: "final-deliverables" },
      { type: "paragraph", text: "The final deliverable is a comprehensive brand guidelines document: logo usage rules, clear space, minimum sizes, color specifications (HEX, RGB, CMYK, Pantone), typography hierarchy, and real-world application mockups." },
      { type: "quote", text: "A brand is not a logo. It's every touchpoint where your audience experiences your business.", author: "Nirmal Rathod" },
    ],
    category: "Branding",
    date: "2024-10-20",
    readTime: "7 min read",
    author: "Nirmal Rathod",
    featured: true,
  },
  {
    slug: "freelance-pricing-strategies",
    title: "How I Price My Freelance Design Projects (Without Undercharging)",
    excerpt:
      "Value-based pricing, project minimums, and the psychology behind rates — lessons from 30+ freelance projects.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    content: [
      { type: "heading", text: "Ditch Hourly Billing", id: "ditch-hourly" },
      { type: "paragraph", text: "Early in my freelance career, I made the classic mistake: charging hourly. It punishes efficiency — the faster you get, the less you earn. I switched to value-based pricing and it changed everything." },
      { type: "heading", text: "Value-Based Pricing Explained", id: "value-based-pricing" },
      { type: "paragraph", text: "Value-based pricing means you price based on the outcome, not the effort. A logo for a local bakery and a logo for a funded startup have the same deliverables but vastly different business impact. Price accordingly." },
      { type: "image", label: "Pricing Strategy", src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80" },
      { type: "heading", text: "Set Project Minimums", id: "project-minimums" },
      { type: "paragraph", text: "I set project minimums to filter out clients who aren't serious. This instantly eliminates scope-creep-prone projects and attracts clients who value quality." },
      { type: "heading", text: "The Three-Tier Strategy", id: "three-tier-strategy" },
      { type: "paragraph", text: "Always present three pricing tiers: Essential, Professional, and Premium. Most clients pick the middle option, but having the premium tier anchors their perception of value." },
      { type: "list", items: [
        "Essential: Core deliverables, fewer revisions",
        "Professional: Full scope, recommended for most clients",
        "Premium: Everything + priority support + extras",
      ] },
      { type: "heading", text: "Never Discount, Reduce Scope", id: "never-discount" },
      { type: "paragraph", text: "Never discount your rate. Instead, reduce scope. If a client can't afford the full package, offer fewer revisions or exclude secondary deliverables. This protects your perceived value in the market." },
      { type: "quote", text: "Confidence in pricing comes from confidence in your work. Build a portfolio that demonstrates clear business results, and clients will pay premium rates without negotiation." },
    ],
    category: "Career",
    date: "2024-09-12",
    readTime: "5 min read",
    author: "Nirmal Rathod",
  },
  {
    slug: "tailwind-css-tips-designers",
    title: "10 Tailwind CSS Tips Every Designer-Developer Should Know",
    excerpt:
      "Practical Tailwind techniques for building pixel-perfect UIs faster — from custom themes to responsive patterns.",
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
    content: [
      { type: "paragraph", text: "Tailwind CSS has become my go-to styling framework because it lets me think in design tokens rather than class names. Here are the patterns I use daily when building production interfaces." },
      { type: "image", label: "Tailwind Workflow", src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80", aspect: "wide" },
      { type: "heading", text: "CSS Variables for Colors", id: "css-variables" },
      { type: "paragraph", text: "Tip 1: Use CSS variables for your color system. Define --primary, --secondary, etc. in your globals.css and reference them in Tailwind's theme config. One change updates every component instantly." },
      { type: "heading", text: "Group & Peer Utilities", id: "group-peer" },
      { type: "paragraph", text: "Tip 2: Master the group and peer utilities. group-hover lets you create complex hover states on parent containers, while peer lets sibling elements react to each other — perfect for form validation UI." },
      { type: "heading", text: "Fluid Typography", id: "fluid-typography" },
      { type: "paragraph", text: "Tip 3: Use clamp() for fluid typography instead of breakpoint-specific sizes. This gives you perfectly scaled headings without media queries." },
      { type: "image", label: "Fluid Typography", src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80" },
      { type: "heading", text: "Auto-Fill Grids", id: "auto-fill-grids" },
      { type: "paragraph", text: "Tip 4: Build responsive layouts with auto-fill grids. This creates a perfectly responsive grid without any breakpoints — cards flow naturally." },
      { type: "heading", text: "Focus Ring Utilities", id: "focus-rings" },
      { type: "paragraph", text: "Tip 5: Use Tailwind's ring utilities for focus states instead of outline. ring-2 ring-offset-2 creates beautiful, accessible focus indicators that respect your border-radius." },
    ],
    category: "Development",
    date: "2024-08-05",
    readTime: "4 min read",
    author: "Nirmal Rathod",
  },
  {
    slug: "ux-audit-checklist",
    title: "The UX Audit Checklist I Use for Every Client Project",
    excerpt:
      "A systematic framework for evaluating existing products — covering usability, accessibility, and conversion optimization.",
    coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80",
    content: [
      { type: "paragraph", text: "Before redesigning anything, I run a structured UX audit. This gives clients a clear picture of what's working, what's broken, and what to prioritize — backed by data, not opinion." },
      { type: "heading", text: "Heuristic Evaluation", id: "heuristic-evaluation" },
      { type: "paragraph", text: "I evaluate against Nielsen's 10 usability heuristics, scoring each on a severity scale. This catches obvious issues like inconsistent navigation, poor error messages, and missing feedback." },
      { type: "image", label: "Heuristic Evaluation", src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80" },
      { type: "heading", text: "User Flow Analysis", id: "user-flow-analysis" },
      { type: "paragraph", text: "I map every critical user journey — signup, purchase, contact — and identify friction points. Where do users drop off? Where do they hesitate? Analytics data tells the story." },
      { type: "image", label: "User Flow Diagram", src: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=1200&q=80", aspect: "wide" },
      { type: "heading", text: "Accessibility Audit", id: "accessibility-audit" },
      { type: "paragraph", text: "I test against WCAG 2.1 AA standards using both automated tools (axe, Lighthouse) and manual testing (keyboard navigation, screen reader compatibility, color contrast)." },
      { type: "list", items: [
        "Automated: axe DevTools, Lighthouse, WAVE",
        "Manual: keyboard nav, screen reader, zoom to 200%",
        "Contrast: minimum 4.5:1 for body, 3:1 for large text",
        "Focus indicators: visible on all interactive elements",
      ] },
      { type: "heading", text: "Performance Baseline", id: "performance-baseline" },
      { type: "paragraph", text: "I measure Core Web Vitals (LCP, FID, CLS) and identify assets that slow the experience. Slow pages kill conversions — every 100ms delay reduces conversion by 7%." },
      { type: "heading", text: "Competitive Benchmarking", id: "competitive-benchmarking" },
      { type: "paragraph", text: "I analyze 3-5 direct competitors to understand market expectations. Where does the client's product fall short? Where can they differentiate? This frames the redesign strategy." },
      { type: "image", label: "Competitive Analysis", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
    ],
    category: "Design",
    date: "2024-07-18",
    readTime: "6 min read",
    author: "Nirmal Rathod",
  },
];
