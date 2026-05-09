import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { contactData } from "@/lib/data/contact";
import { pageSeo } from "@/lib/data/seo";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = pageSeo.contact;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Nirmal Rathod",
        "description": pageSeo.contact.description,
        "url": "https://nirmal-rathod.vercel.app/contact",
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
              "name": "Contact",
              "item": "https://nirmal-rathod.vercel.app/contact"
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-8">
              <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-balance">
                {contactData.headline}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                {contactData.subheadline}
              </p>
              <div className="pt-8 border-t border-border space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</h4>
                  <a href={`mailto:${contactData.email}`} className="text-xl font-medium text-foreground hover:text-muted-foreground transition-colors">
                    {contactData.email}
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Location</h4>
                  <p className="text-xl font-medium text-foreground">
                    {contactData.location}
                    <br />
                    <span className="text-base text-muted-foreground">{contactData.availability}</span>
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
