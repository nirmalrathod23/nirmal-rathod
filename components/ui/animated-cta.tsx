"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface AnimatedCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function AnimatedCTA({ href, children, variant = "primary", className }: AnimatedCTAProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 group",
          variant === "primary"
            ? "bg-primary text-primary-foreground h-12 px-8 text-base shadow-soft hover:shadow-lift"
            : "border border-border bg-background/50 backdrop-blur-sm text-foreground h-12 px-8 text-base hover:bg-muted",
          className
        )}
      >
        {children}
        {variant === "primary" && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </Link>
    </motion.div>
  );
}
