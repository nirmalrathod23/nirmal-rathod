"use client";

import { experienceData } from "@/lib/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import Link from "next/link";

export function Experience() {
  const preview = experienceData.slice(0, 3);

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionHeading title="Experience" centered />

        <div className="space-y-12">
          {preview.map((exp, index) => (
            <TimelineItem
              key={index}
              item={exp}
              index={index}
              isLast={index === preview.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center text-foreground font-medium pb-1 border-b border-foreground hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            View full work history
          </Link>
        </div>
      </div>
    </section>
  );
}
