"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/lib/data/experience";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
        {/* Mobile timeline line */}
        {!isLast && (
          <div className="absolute left-0 top-3 bottom-0 w-px bg-border md:hidden" />
        )}
        <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-foreground md:hidden" />

        {/* Period */}
        <div className="md:col-span-1 mb-4 md:mb-0 md:text-right pt-1">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            {item.period}
          </span>
          {item.type === "education" && (
            <span className="ml-2 md:ml-0 md:block md:mt-1 text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
              Education
            </span>
          )}
        </div>

        {/* Content */}
        <div className="md:col-span-3 pb-12 md:pb-0 md:border-l md:border-border md:pl-12 relative">
          <div className="hidden md:block absolute top-2 left-[-5px] w-2.5 h-2.5 rounded-full bg-foreground" />

          <h3 className="font-heading text-2xl font-bold mb-1">{item.role}</h3>
          <p className="text-lg font-medium text-foreground/70 mb-4">{item.company}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

          {item.outcomes.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Key Outcomes
              </h4>
              <ul className="space-y-2">
                {item.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground text-sm">
                    <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
