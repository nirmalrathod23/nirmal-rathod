"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Database } from "@/lib/supabase/types";

type ProjectRow = Database['public']['Tables']['projects']['Row'];

interface FeaturedProjectsProps {
  projects: ProjectRow[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            title="Selected Work"
            subtitle="A curated collection of my recent projects, showcasing a blend of design aesthetics and technical execution."
            className="mb-0"
          />
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium hover:text-muted-foreground transition-colors group shrink-0"
          >
            View all projects
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug || project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-8 md:gap-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <Link href={`/projects/${project.slug || project.id}`} className="w-full md:w-3/5 group">
                <div className="relative rounded-2xl overflow-hidden">
                  <ImagePlaceholder label={project.title || "Project"} src={project.cover_image || ""} aspectRatio="video" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 scale-95 group-hover:scale-100">
                    <div className="glass text-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lift">
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="w-full md:w-2/5 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                    {project.category || "Uncategorized"}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold">{project.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.short_description}
                </p>
                <Link
                  href={`/projects/${project.slug || project.id}`}
                  className="inline-flex items-center text-base font-medium pb-1 border-b border-foreground hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                >
                  Explore Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
