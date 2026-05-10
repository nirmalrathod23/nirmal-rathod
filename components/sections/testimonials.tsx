"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Database } from "@/lib/supabase/types";

type TestimonialRow = Database['public']['Tables']['testimonials']['Row'];

interface TestimonialsProps {
  testimonials: TestimonialRow[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="What clients say"
          subtitle="Don't just take my word for it — hear from the people I've had the privilege to work with."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const mappedTestimonial = {
              name: testimonial.name,
              role: testimonial.role || "",
              company: testimonial.company || "",
              quote: testimonial.quote,
              avatar: testimonial.avatar_url || ""
            };
            return (
              <TestimonialCard key={testimonial.id} testimonial={mappedTestimonial} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
