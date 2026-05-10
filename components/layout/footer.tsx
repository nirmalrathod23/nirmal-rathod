import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFooterLinks, getSiteBrand, getSocialLinks } from "@/lib/supabase/queries";

export async function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = await getFooterLinks();
  const siteBrand = await getSiteBrand();
  const socialLinks = await getSocialLinks();

  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tighter block">
              {siteBrand.name}
              <span className="text-muted-foreground">{siteBrand.suffix}</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {siteBrand.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              Socials
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground inline-flex items-center gap-1.5 transition-colors text-sm"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Nirmal Rathod. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
