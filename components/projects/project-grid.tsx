"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projectsData, projectCategories } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { FilterTabs } from "@/components/ui/filter-tabs";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div>
      <FilterTabs
        categories={projectCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              category={project.category}
              shortDescription={project.shortDescription}
              coverImage={project.coverImage}
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
