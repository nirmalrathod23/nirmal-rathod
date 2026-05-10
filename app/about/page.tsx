import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { pageSeo } from "@/lib/data/seo";
import { JsonLd } from "@/components/seo/json-ld";

import { getPageContent } from "@/lib/supabase/queries";

export const metadata: Metadata = pageSeo.about;

export default async function AboutPage() {
  const pageData = await getPageContent("about");

  const title = pageData?.title || "Designing with purpose, building with precision.";
  const description = pageData?.description || "I'm Nirmal Rathod, a Product Designer and Web Developer based in Gujarat. I specialize in bridging the gap between aesthetics and functionality, creating digital experiences that are not just visually stunning, but inherently useful and conversion-focused.";

  // We could also make the philosophy and setup dynamic if we wanted, 
  // but for now we'll focus on the main content and use fallbacks.
  const content = pageData?.content;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Nirmal Rathod",
        "description": pageSeo.about.description,
        "url": "https://nirmal-rathod.vercel.app/about",
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
              "name": "About",
              "item": "https://nirmal-rathod.vercel.app/about"
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-balance">
            {title}
          </h1>

          <div className="space-y-12 max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>

            <ImagePlaceholder label="Portrait / Studio Image" aspectRatio="wide" />

            {content ? (
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-foreground/85">
                    <h2 className="font-heading text-3xl font-bold text-foreground">My Philosophy</h2>
                    <p>
                      Design is problem-solving made visible. It's not just about making things look
                      pretty; it's about understanding the user's intent, the business's goals, and
                      aligning them through intuitive interfaces. I believe in a premium, minimalist
                      approach—removing the unnecessary so the essential can speak clearly.
                    </p>
                    <p>
                      Whether I'm crafting a brand identity or architecting a complex React application,
                      my focus remains on clarity, usability, and modern aesthetics.
                    </p>
                  </div>

                  <div>
                    <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                      <h3 className="font-heading text-lg font-bold mb-4">The Setup</h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li>
                          <strong className="text-foreground">Location:</strong> Gujarat, India
                        </li>
                        <li>
                          <strong className="text-foreground">Current Role:</strong> Product Designer at
                          SeaNeB
                        </li>
                        <li>
                          <strong className="text-foreground">Education:</strong> Prayosha Institute
                        </li>
                        <li>
                          <strong className="text-foreground">Coffee:</strong> Black, no sugar
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="font-heading text-3xl font-bold text-foreground mt-8">How I Work</h2>
                <p className="text-lg leading-relaxed text-foreground/85">
                  My workflow is highly collaborative and iterative:
                </p>
                <ol className="space-y-6 text-lg leading-relaxed text-foreground/85 list-none">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Strategy",
                      desc: "We start by deeply understanding your brand, audience, and goals. No pixels are pushed until we have a solid strategy.",
                    },
                    {
                      step: "02",
                      title: "Wireframing & Prototyping",
                      desc: "I build structural wireframes to establish the user journey, moving quickly to interactive prototypes to test assumptions.",
                    },
                    {
                      step: "03",
                      title: "High-Fidelity Design",
                      desc: "This is where the magic happens. Applying typography, color theory, and motion to bring the experience to life.",
                    },
                    {
                      step: "04",
                      title: "Development & Handoff",
                      desc: "Building robust, scalable applications using Next.js, Tailwind, or WordPress, ensuring a pixel-perfect translation from Figma to browser.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="font-heading font-bold text-2xl text-foreground/30 shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <strong className="text-foreground block mb-1">{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}

            <div className="bg-foreground text-background p-8 md:p-12 rounded-2xl mt-8 text-center">
              <h2 className="font-heading text-3xl font-bold text-background mb-4">
                Ready to start a project?
              </h2>
              <p className="text-background/80 mb-8 max-w-lg mx-auto text-lg">
                I'm currently accepting new freelance clients. Let's discuss how we can elevate your
                digital presence.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
