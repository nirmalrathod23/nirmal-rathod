"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import Link from "next/link";
import { Database } from "@/lib/supabase/types";

type ExperienceRow = Database['public']['Tables']['experience_items']['Row'];

interface ExperienceProps {
  experience: ExperienceRow[];
}

export function Experience({ experience }: ExperienceProps) {
  if (!experience || experience.length === 0) return null;

  const preview = experience.slice(0, 3);

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionHeading title="Experience" centered />

        <div className="space-y-12">
          {preview.map((exp, index) => {
            // Map db schema to TimelineItem expected format
            const mappedExp = {
              role: exp.role || "",
              company: exp.company || "",
              period: `${exp.start_date || ""} - ${exp.current ? "Present" : exp.end_date || ""}`,
              description: exp.description || "",
              outcomes: [],
              type: (exp.type as "work" | "education") || "work"
            };

            return (
              <TimelineItem
                key={exp.id}
                item={mappedExp}
                index={index}
                isLast={index === preview.length - 1}
              />
            );
          })}
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
