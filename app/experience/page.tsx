import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { experienceData } from "@/lib/data/experience";
import { TimelineItem } from "@/components/ui/timeline-item";
import { pageSeo } from "@/lib/data/seo";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = pageSeo.experience;

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Professional Experience | Nirmal Rathod",
        "description": pageSeo.experience.description,
        "url": "https://nirmal-rathod.vercel.app/experience",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nirmal-rathod.vercel.app"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Experience",
              "item": "https://nirmal-rathod.vercel.app/experience"
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="max-w-2xl mb-20">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              A journey of continuous learning.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My professional background spans product design, web development, and brand strategy.
            </p>
          </div>
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <TimelineItem key={index} item={exp} index={index} isLast={index === experienceData.length - 1} />
            ))}
          </div>
          <div className="mt-24 p-8 md:p-12 bg-muted/30 border border-border rounded-2xl text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">Looking for a full CV?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">I'm always open to new opportunities.</p>
            <a href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-soft hover:shadow-lift">
              Contact Me
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
