"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollSection({ id, children, className }: ScrollSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("scroll-offset", className)}
    >
      {children}
    </motion.section>
  );
}
