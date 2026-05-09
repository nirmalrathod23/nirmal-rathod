"use client";

import { servicesData } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import Link from "next/link";

export function Services() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Expertise & Services"
          subtitle="A comprehensive suite of digital services designed to elevate your brand and drive measurable growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              id={service.id}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-foreground font-medium pb-1 border-b border-foreground hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            Explore all services in detail
          </Link>
        </div>
      </div>
    </section>
  );
}
