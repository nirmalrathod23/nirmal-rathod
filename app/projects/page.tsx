import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectGrid } from "@/components/projects/project-grid";
import { pageSeo } from "@/lib/data/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedProjects } from "@/lib/supabase/queries";

export const metadata: Metadata = pageSeo.projects;

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Selected Projects by Nirmal Rathod",
        "description": pageSeo.projects.description,
        "url": "https://nirmal-rathod.vercel.app/projects",
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
              "name": "Projects",
              "item": "https://nirmal-rathod.vercel.app/projects"
            }
          ]
        }
      }} />
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

          <ProjectGrid projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
}
