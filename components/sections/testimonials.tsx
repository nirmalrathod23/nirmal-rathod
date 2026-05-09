"use client";

import { testimonialsData } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="What clients say"
          subtitle="Don't just take my word for it — hear from the people I've had the privilege to work with."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
