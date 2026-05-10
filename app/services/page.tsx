import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { pageSeo } from "@/lib/data/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  PenTool, Layout, Code, Share2, CheckCircle2, type LucideIcon,
  Palette, Globe, TrendingUp, Layers, Smartphone, Monitor, Megaphone,
  BarChart, ShoppingCart, Search, Camera, Video, Music, FileText,
  Settings, Zap, Star, Heart, Shield, Database, Cloud, Lock,
  Mail, MessageSquare, Users, Briefcase, Award, Cpu, Wifi,
} from "lucide-react";
import { getPublishedServices } from "@/lib/supabase/queries";

export const metadata: Metadata = pageSeo.services;

// Supports both PascalCase (from admin panel) and kebab-case formats
const iconMap: Record<string, LucideIcon> = {
  // kebab-case
  "pen-tool": PenTool,
  "layout": Layout,
  "code": Code,
  "share-2": Share2,
  "palette": Palette,
  "globe": Globe,
  "trending-up": TrendingUp,
  "layers": Layers,
  "smartphone": Smartphone,
  "monitor": Monitor,
  "megaphone": Megaphone,
  "bar-chart": BarChart,
  "shopping-cart": ShoppingCart,
  "search": Search,
  // PascalCase (from admin panel)
  "PenTool": PenTool,
  "Layout": Layout,
  "Code": Code,
  "Share2": Share2,
  "Palette": Palette,
  "Globe": Globe,
  "TrendingUp": TrendingUp,
  "Layers": Layers,
  "Smartphone": Smartphone,
  "Monitor": Monitor,
  "Megaphone": Megaphone,
  "BarChart": BarChart,
  "ShoppingCart": ShoppingCart,
  "Search": Search,
  "Camera": Camera,
  "Video": Video,
  "Music": Music,
  "FileText": FileText,
  "Settings": Settings,
  "Zap": Zap,
  "Star": Star,
  "Heart": Heart,
  "Shield": Shield,
  "Database": Database,
  "Cloud": Cloud,
  "Lock": Lock,
  "Mail": Mail,
  "MessageSquare": MessageSquare,
  "Users": Users,
  "Briefcase": Briefcase,
  "Award": Award,
  "Cpu": Cpu,
  "Wifi": Wifi,
};

export default async function ServicesPage() {
  const servicesData = await getPublishedServices();

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Design & Development Services",
        "provider": {
          "@type": "Person",
          "name": "Nirmal Rathod"
        },
        "description": pageSeo.services.description,
        "url": "https://nirmal-rathod.vercel.app/services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Professional Services",
          "itemListElement": servicesData.map((s) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": s.title || "Service",
              "description": s.description || ""
            }
          }))
        },
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
              "name": "Services",
              "item": "https://nirmal-rathod.vercel.app/services"
            }
          ]
        }
      }} />
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
              const IconComponent = iconMap[service.icon || "layout"] || Layout;
              
              // Extract features from jsonb
              const features = service.features as any || {};
              const benefits = features.benefits || "Tailored solutions that drive business growth and user engagement.";
              const deliverables = Array.isArray(features.deliverables) ? features.deliverables : ["Source Files", "Documentation"];
              const process = Array.isArray(features.process) ? features.process : ["Discovery", "Execution", "Delivery"];
              const faq = features.faq || { q: "How long does it take?", a: "Timelines vary by project scope, typically ranging from 2-8 weeks." };

              return (
                <div key={service.id} id={service.slug || service.id} className="scroll-offset">
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
                        <p className="text-foreground/80 leading-relaxed">{benefits}</p>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                          Deliverables
                        </h3>
                        <ul className="space-y-4">
                          {deliverables.map((item: string, idx: number) => (
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
                          {process.map((step: string, idx: number) => (
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
                        <p className="font-medium text-foreground mb-1">{faq.q}</p>
                        <p className="text-muted-foreground text-sm">{faq.a}</p>
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
