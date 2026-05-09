import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { projectsData, type ProjectGalleryItem } from "@/lib/data/projects";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { SkillChip } from "@/components/ui/skill-chip";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
    alternates: { canonical: `https://nirmal-rathod.vercel.app/projects/${slug}` },
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

function GalleryGrid({ items }: { items: ProjectGalleryItem[] }) {
  // Group items into rows based on their span
  const rows: ProjectGalleryItem[][] = [];
  let currentRow: ProjectGalleryItem[] = [];
  let currentWidth = 0;

  for (const item of items) {
    const w = item.span === "full" ? 1 : item.span === "half" ? 0.5 : 1 / 3;
    if (currentWidth + w > 1 && currentRow.length > 0) {
      rows.push(currentRow);
      currentRow = [item];
      currentWidth = w;
    } else {
      currentRow.push(item);
      currentWidth += w;
    }
    if (currentWidth >= 1) {
      rows.push(currentRow);
      currentRow = [];
      currentWidth = 0;
    }
  }
  if (currentRow.length > 0) rows.push(currentRow);

  const gridClass = (span?: string) => {
    if (span === "third") return "col-span-1";
    if (span === "half") return "col-span-1 md:col-span-3";
    return "col-span-1 md:col-span-6";
  };

  return (
    <div className="space-y-6">
      {rows.map((row, rowIdx) => {
        const cols = row[0]?.span === "third" ? 3 : row[0]?.span === "half" ? 2 : 1;
        return (
          <div
            key={rowIdx}
            className={
              cols === 3
                ? "grid grid-cols-1 md:grid-cols-3 gap-6"
                : cols === 2
                ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                : ""
            }
          >
            {row.map((item, idx) => (
              <ImagePlaceholder key={idx} label={item.label} src={item.src} aspectRatio={item.aspect} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.shortDescription,
        "image": project.coverImage,
        "author": {
          "@type": "Person",
          "name": "Nirmal Rathod"
        },
        "url": `https://nirmal-rathod.vercel.app/projects/${slug}`,
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
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": project.title,
              "item": `https://nirmal-rathod.vercel.app/projects/${slug}`
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </div>

        {/* Hero header */}
        <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-16">
          <div className="flex items-center gap-3 flex-wrap text-xs text-muted-foreground mb-6">
            <span className="px-3 py-1 rounded-full border border-border font-bold uppercase tracking-widest">
              {project.category}
            </span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.client}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Main hero image — first gallery item if full */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-20">
          <ImagePlaceholder label={`${project.title} — Hero`} src={project.coverImage} aspectRatio="video" className="rounded-2xl" />
        </div>

        {/* Project info bar */}
        <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 rounded-2xl bg-muted/30 border border-border">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Client</h4>
              <p className="font-heading font-bold text-lg">{project.client}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Year</h4>
              <p className="font-heading font-bold text-lg">{project.year}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Category</h4>
              <p className="font-heading font-bold text-lg">{project.category}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Tools</h4>
              <p className="font-heading font-bold text-lg">{project.tools.slice(0, 2).join(", ")}</p>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <section>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">01</span>
              <h2 className="font-heading text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
            </section>
            <section>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">02</span>
              <h2 className="font-heading text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>
          </div>

          {/* Data-driven gallery */}
          {project.gallery.length > 0 && (
            <div className="mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 block">
                Project Gallery
              </span>
              <GalleryGrid items={project.gallery} />
            </div>
          )}

          {/* Results & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="p-8 md:p-10 rounded-2xl bg-foreground text-background">
              <span className="text-xs font-bold uppercase tracking-widest text-background/50 mb-6 block">03</span>
              <h2 className="font-heading text-3xl font-bold mb-8">Key Results</h2>
              <div className="space-y-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="font-heading text-3xl font-bold text-background/30 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg font-medium leading-snug pt-1">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold mb-6">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, idx) => (
                    <SkillChip key={idx} label={tool} />
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <h3 className="font-heading text-lg font-bold mb-3">Want to see more?</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Full project details, including process documentation, are available upon request.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  Request full case study <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="border-t border-border pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group p-6 rounded-2xl border border-border hover:border-foreground/20 hover:shadow-card transition-all duration-300"
                >
                  <span className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Previous Project
                  </span>
                  <h3 className="font-heading text-xl font-bold group-hover:text-muted-foreground transition-colors">
                    {prevProject.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{prevProject.category}</span>
                </Link>
              ) : <div />}
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group p-6 rounded-2xl border border-border hover:border-foreground/20 hover:shadow-card transition-all duration-300 text-right"
                >
                  <span className="text-xs text-muted-foreground mb-2 flex items-center justify-end gap-1">
                    Next Project <ArrowRight className="h-3 w-3" />
                  </span>
                  <h3 className="font-heading text-xl font-bold group-hover:text-muted-foreground transition-colors">
                    {nextProject.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{nextProject.category}</span>
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 p-8 md:p-12 bg-foreground text-background rounded-2xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Like what you see?</h2>
            <p className="text-background/70 mb-8 max-w-md mx-auto">
              Let's discuss how we can create something equally impactful for your brand.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
            >
              Start a similar project
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
