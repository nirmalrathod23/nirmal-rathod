import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { FeaturedProjects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact";
import { Metadata } from "next";
import { pageSeo, schemas } from "@/lib/data/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { getFeaturedProjects, getPublishedServices, getExperienceItems, getTestimonials, getSkills } from "@/lib/supabase/queries";

export const metadata: Metadata = pageSeo.home;

export default async function Home() {
  const projects = await getFeaturedProjects();
  const services = await getPublishedServices();
  const experience = await getExperienceItems();
  const testimonials = await getTestimonials();
  const skills = await getSkills();

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageSeo.home.title,
        "description": pageSeo.home.description,
        "url": "https://nirmal-rathod.vercel.app",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nirmal-rathod.vercel.app"
            }
          ]
        }
      }} />
      <Navbar />
      <main>
        <Hero />
        <Services services={services} />
        <FeaturedProjects projects={projects} />
        <About skills={skills} />
        <Experience experience={experience} />
        <Testimonials testimonials={testimonials} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
