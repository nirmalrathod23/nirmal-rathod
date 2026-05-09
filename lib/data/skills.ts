export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  { name: "Design Tools", items: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects"] },
  { name: "Prototyping", items: ["Framer", "ProtoPie", "Figma Interactive", "InVision"] },
  { name: "Development", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML/CSS"] },
  { name: "CMS / WordPress", items: ["WordPress", "WooCommerce", "Elementor", "ACF Pro", "Custom Themes", "PHP"] },
  { name: "Collaboration", items: ["Notion", "Slack", "Jira", "GitHub", "Linear", "Confluence"] },
  { name: "Marketing Tools", items: ["Google Analytics", "Ahrefs", "Hotjar", "Buffer", "Facebook Ads Manager"] },
  { name: "Creative Skills", items: ["Brand Strategy", "Typography", "Color Theory", "Motion Design", "Illustration"] },
  { name: "Technical Skills", items: ["Responsive Design", "Design Systems", "REST APIs", "Git", "CI/CD", "SEO"] },
];

export const marqueeRow1 = [
  "Figma", "React", "Next.js", "WordPress", "Tailwind CSS", "TypeScript", "Framer Motion", "Webflow",
];

export const marqueeRow2 = [
  "Illustrator", "Photoshop", "After Effects", "Framer", "ProtoPie", "Adobe XD", "InVision", "Sketch",
];

export const marqueeRow3 = [
  "PHP", "WooCommerce", "Notion", "GitHub", "Ahrefs", "Hotjar", "Google Analytics", "Elementor",
];

