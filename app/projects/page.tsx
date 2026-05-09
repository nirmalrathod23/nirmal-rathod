import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectGrid } from "@/components/projects/project-grid";
import { pageSeo } from "@/lib/data/seo";

export const metadata: Metadata = pageSeo.projects;

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="max-w-2xl mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Selected Work
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of digital products, brand identities, and technical solutions built for
              clients across the globe.
            </p>
          </div>

          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
