"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { FilterTabs } from "@/components/ui/filter-tabs";
import { Database } from "@/lib/supabase/types";

type ProjectRow = Database['public']['Tables']['projects']['Row'];

interface ProjectGridProps {
  projects: ProjectRow[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-24 text-muted-foreground">
        No projects found yet. Check back later.
      </div>
    );
  }

  // Derive categories dynamically from projects
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <FilterTabs
        categories={categories as string[]}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug || project.id}
              slug={project.slug || project.id}
              title={project.title || "Project"}
              category={project.category || "Uncategorized"}
              shortDescription={project.short_description || ""}
              coverImage={project.cover_image || ""}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 text-muted-foreground">
          No projects found for this category yet.
        </div>
      )}
    </div>
  );
}
