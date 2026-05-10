"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database } from "@/lib/supabase/types";

type SkillRow = Database['public']['Tables']['skills']['Row'];

function MarqueeStrip({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  if (items.length === 0) return null;
  const doubled = [...items, ...items, ...items]; // triple to ensure enough scrolling length
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`flex whitespace-nowrap gap-4 md:gap-5 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((tool, i) => (
          <span
            key={i}
            className="inline-flex items-center px-5 md:px-7 py-2.5 md:py-3 rounded-full border border-background/15 bg-background/5 text-base md:text-lg font-medium text-background/60 shrink-0"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

interface AboutProps {
  skills: SkillRow[];
}

export function About({ skills }: AboutProps) {
  // Split skills into 3 rows for the marquee
  const skillNames = skills.map(s => s.name || "").filter(Boolean);
  
  const itemsPerRow = Math.ceil(skillNames.length / 3) || 5;
  const row1 = skillNames.slice(0, itemsPerRow);
  const row2 = skillNames.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = skillNames.slice(itemsPerRow * 2);

  // Fallbacks if no skills are present
  const fallbackRow1 = ["Figma", "React", "Next.js", "Tailwind CSS", "TypeScript"];
  const fallbackRow2 = ["WordPress", "Webflow", "Shopify", "Illustrator", "Photoshop"];
  const fallbackRow3 = ["Framer", "Protopie", "UI/UX", "Branding", "SEO"];

  const marqueeRow1 = row1.length > 0 ? row1 : fallbackRow1;
  const marqueeRow2 = row2.length > 0 ? row2 : fallbackRow2;
  const marqueeRow3 = row3.length > 0 ? row3 : fallbackRow3;

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-balance">
              Design is not just what it looks like, but how it works.
            </h2>
            <div className="space-y-6 text-lg text-background/75 leading-relaxed">
              <p>
                As a hybrid designer and developer, I bridge the gap between aesthetics and functionality.
                I believe that the best digital products are those that feel effortless to use while leaving
                a lasting visual impression.
              </p>
              <p>
                Based in Gujarat, I collaborate with forward-thinking brands and agencies worldwide to
                build experiences that elevate their market presence and drive meaningful engagement.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center text-base font-medium pb-1 border-b border-background/50 hover:border-background transition-colors"
            >
              Read full bio
            </Link>
          </motion.div>

          {/* Multi-row bi-directional tools marquee with faded edges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 py-4"
          >
            <MarqueeStrip items={marqueeRow1} />
            <MarqueeStrip items={marqueeRow2} reverse />
            <MarqueeStrip items={marqueeRow3} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
