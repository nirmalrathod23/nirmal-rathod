"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "./image-placeholder";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  coverImage?: string;
  index: number;
}

export function ProjectCard({ slug, title, category, shortDescription, coverImage, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
          <ImagePlaceholder label={title} src={coverImage} />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 scale-95 group-hover:scale-100">
            <div className="glass text-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lift">
              View Project <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-2 block">
            {category}
          </span>
          <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-muted-foreground transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
