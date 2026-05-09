import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { servicesData } from "@/lib/data/services";
import { pageSeo } from "@/lib/data/seo";
import { PenTool, Layout, Code, Share2, CheckCircle2, type LucideIcon } from "lucide-react";

export const metadata: Metadata = pageSeo.services;

const iconMap: Record<string, LucideIcon> = {
  "pen-tool": PenTool,
  "layout": Layout,
  "code": Code,
  "share-2": Share2,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="max-w-2xl mb-24">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-balance">
              Services tailored for growth.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I provide a holistic suite of design and development services. By bridging the gap
              between how a product looks and how it works, I help businesses scale effectively.
            </p>
          </div>

          <div className="space-y-32">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon] || Layout;
              return (
                <div key={service.id} id={service.id} className="scroll-offset">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-foreground" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8">
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                        <h3 className="text-lg font-bold mb-4">The Value</h3>
                        <p className="text-foreground/80 leading-relaxed">{service.benefits}</p>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                          Deliverables
                        </h3>
                        <ul className="space-y-4">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-foreground mr-3 shrink-0 mt-0.5" />
                              <span className="text-lg text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
                          Process
                        </h3>
                        <ol className="space-y-3">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="font-heading font-bold text-foreground mr-3 mt-px">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                          Common Question
                        </h4>
                        <p className="font-medium text-foreground mb-1">{service.faq.q}</p>
                        <p className="text-muted-foreground text-sm">{service.faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-32 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Need a custom solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Every project is unique. Let's schedule a consultation to discuss your specific
              requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:opacity-90 transition-opacity shadow-soft hover:shadow-lift"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
