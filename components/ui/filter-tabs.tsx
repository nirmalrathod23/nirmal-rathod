"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterTabsProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function FilterTabs({ categories, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 border",
            active === category
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-foreground border-border hover:border-foreground/40"
          )}
        >
          {category}
          {active === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-full bg-primary -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
