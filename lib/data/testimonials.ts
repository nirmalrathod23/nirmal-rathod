export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "Lumina AI",
    quote:
      "Nirmal transformed our brand from a generic SaaS look into something truly memorable. His attention to detail and strategic thinking made the entire process seamless.",
  },
  {
    name: "James Whitfield",
    role: "Marketing Director",
    company: "Nova Athletics",
    quote:
      "Our social media engagement skyrocketed after working with Nirmal. He doesn't just design — he thinks about the entire user journey and business impact.",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder",
    company: "Oasis Retreats",
    quote:
      "The WordPress site Nirmal built for us is fast, beautiful, and incredibly easy to manage. Our team updates it daily without any technical help. Truly premium work.",
  },
  {
    name: "Alex Dubois",
    role: "Product Manager",
    company: "Zenith SaaS",
    quote:
      "Working with Nirmal on our dashboard redesign was a masterclass in UX thinking. He took a complex product and made it feel simple. Support tickets dropped almost overnight.",
  },
];
