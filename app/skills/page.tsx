import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { pageSeo } from "@/lib/data/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { getSkills, getPageContent } from "@/lib/supabase/queries";

export const metadata: Metadata = pageSeo.skills;
export default async function SkillsPage() {
  const [skillsData, pageData] = await Promise.all([
    getSkills(),
    getPageContent("skills")
  ]);

  const title = pageData?.title || "The toolkit behind the craft.";
  const description = pageData?.description || "I believe that a designer is only as good as their understanding of the medium. Here is a breakdown of the tools and technologies I use to bring ideas to life.";

  // Group skills by category
  const categoriesMap = (skillsData || []).reduce((acc, skill) => {
    const cat = skill.category || "General";
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(skill.name || "Unknown");
    return acc;
  }, {} as Record<string, string[]>);

  // If no skills in DB, provide some defaults for demonstration
  const displayCategories = Object.keys(categoriesMap).length > 0 
    ? Object.keys(categoriesMap).map(category => ({
        name: category,
        items: categoriesMap[category]
      }))
    : [
        { name: "Design Tools", items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects"] },
        { name: "Development", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress"] },
        { name: "Process", items: ["UI/UX Design", "Wireframing", "Prototyping", "User Research"] }
      ];

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Skills & Expertise | Nirmal Rathod",
        "description": pageSeo.skills.description,
        "url": "https://nirmal-rathod.vercel.app/skills",
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
              "name": "Skills",
              "item": "https://nirmal-rathod.vercel.app/skills"
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="max-w-2xl mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCategories.map((category) => (
              <div
                key={category.name}
                className="bg-muted/30 border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300"
              >
                <h2 className="font-heading text-xl font-bold mb-6 text-foreground">
                  {category.name}
                </h2>
                <ul className="space-y-3">
                  {category.items.map((skill, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mr-3 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see these skills in action?
            </p>
            <a
              href="/projects"
              className="inline-flex items-center text-foreground font-medium pb-1 border-b border-foreground hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              View my recent projects
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
