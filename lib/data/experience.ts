export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: "work" | "education";
  description: string;
  outcomes: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Product Designer",
    company: "SeaNeB",
    period: "2023 — Present",
    type: "work",
    description:
      "Leading the design of complex web applications. Establishing comprehensive design systems, conducting user research, and ensuring seamless handoffs between design and engineering teams.",
    outcomes: [
      "Reduced time-to-market by 20% through component standardization.",
      "Improved user retention by 15% via UX audits and redesigns.",
      "Built and maintained a 200+ component design system in Figma.",
    ],
  },
  {
    role: "Freelance UI/UX Designer & Web Developer",
    company: "Independent",
    period: "2020 — 2023",
    type: "work",
    description:
      "Collaborated directly with founders and agencies worldwide to build premium brand identities, high-converting landing pages, and scalable WordPress solutions.",
    outcomes: [
      "Delivered 30+ successful projects across 5 countries.",
      "Maintained a 98% client satisfaction rate.",
      "Grew freelance revenue by 300% year-over-year.",
    ],
  },
  {
    role: "Junior Designer & Developer",
    company: "Digital Agency (Internship)",
    period: "2019 — 2020",
    type: "work",
    description:
      "Assisted in wireframing, prototyping, and creating high-fidelity mockups for mobile and web applications. Supported WordPress development for client projects.",
    outcomes: [
      "Contributed to 10+ client projects across diverse industries.",
      "Gained hands-on experience with agile workflows and client communication.",
    ],
  },
  {
    role: "Education",
    company: "Prayosha Institute",
    period: "Graduated",
    type: "education",
    description:
      "Built a strong foundation in computer science, software engineering principles, and digital design theory. Actively participated in hackathons and design challenges.",
    outcomes: [
      "Developed core problem-solving methodologies.",
      "Specialized in Human-Computer Interaction (HCI).",
      "Won 2nd place in state-level UI/UX design competition.",
    ],
  },
];
