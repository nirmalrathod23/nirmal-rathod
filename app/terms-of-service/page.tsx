import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { getPageContent } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Nirmal Rathod's portfolio website. Read the terms governing your use of our website and services.",
  alternates: { canonical: "https://nirmal-rathod.vercel.app/terms-of-service" },
};

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Services Offered" },
  { id: "intellectual-property", title: "3. Intellectual Property" },
  { id: "user-conduct", title: "4. User Conduct" },
  { id: "contact-submissions", title: "5. Contact Form Submissions" },
  { id: "project-engagements", title: "6. Project Engagements" },
  { id: "disclaimers", title: "7. Disclaimers" },
  { id: "limitation-liability", title: "8. Limitation of Liability" },
  { id: "indemnification", title: "9. Indemnification" },
  { id: "third-party-links", title: "10. Third-Party Links" },
  { id: "governing-law", title: "11. Governing Law & Jurisdiction" },
  { id: "termination", title: "12. Termination" },
  { id: "changes", title: "13. Changes to These Terms" },
  { id: "contact", title: "14. Contact Information" },
];

export default async function TermsOfServicePage() {
  const pageData = await getPageContent("terms-of-service");

  const title = pageData?.title || "Terms of Service";
  const content = pageData?.content;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "description": "Terms of Service for Nirmal Rathod's portfolio website.",
        "url": "https://nirmal-rathod.vercel.app/terms-of-service",
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
              "name": "Terms of Service",
              "item": "https://nirmal-rathod.vercel.app/terms-of-service"
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground">
              Last updated: {pageData?.updated_at ? new Date(pageData.updated_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "May 9, 2026"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
            {/* Table of Contents */}
            <aside className={content ? "hidden" : "hidden lg:block"}>
              <div className="sticky top-32">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Table of Contents
                </h4>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-12 text-foreground/85 leading-relaxed">
              {content ? (
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <>
                  <p className="text-lg">
                    Welcome to <strong className="text-foreground">nirmalrathod.com</strong> (the "Site").
                    These Terms of Service ("Terms") govern your access to and use of our Site and any
                    services provided by Nirmal Rathod ("we," "our," or "us"). By accessing or using the
                    Site, you agree to be bound by these Terms. If you do not agree, please do not use the
                    Site.
                  </p>

              <section id="acceptance" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing this Site from any location worldwide, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and our{" "}
                  <a href="/privacy-policy" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">Privacy Policy</a>,
                  which is incorporated herein by reference. These Terms apply to all visitors, users, and
                  anyone who accesses the Site.
                </p>
              </section>

              <section id="services" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">2. Services Offered</h2>
                <p>This Site serves as a personal portfolio showcasing the professional work of Nirmal Rathod. Services offered include, but are not limited to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Brand Design & Visual Identity</li>
                  <li>UI/UX Design & Product Design</li>
                  <li>WordPress Development & Custom Theme Development</li>
                  <li>Social Media Marketing & Strategy</li>
                  <li>Consulting & Design Audits</li>
                </ul>
                <p>All services are subject to separate project agreements, proposals, or contracts as mutually agreed upon.</p>
              </section>

              <section id="intellectual-property" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">3. Intellectual Property</h2>
                <h3 className="font-heading text-lg font-bold text-foreground mt-4">a) Our Content</h3>
                <p>
                  All content on this Site — including but not limited to text, graphics, logos, images,
                  design elements, code, animations, and overall layout — is the intellectual property
                  of Nirmal Rathod and is protected by international copyright, trademark, and other
                  intellectual property laws. You may not reproduce, distribute, modify, or create
                  derivative works without prior written consent.
                </p>
                <h3 className="font-heading text-lg font-bold text-foreground mt-4">b) Client Work</h3>
                <p>
                  Case studies and project showcases displayed on this Site are presented for portfolio
                  purposes only. The underlying intellectual property rights of client projects remain
                  with the respective clients unless otherwise agreed.
                </p>
              </section>

              <section id="user-conduct" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">4. User Conduct</h2>
                <p>When using this Site, you agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Use the Site for any unlawful purpose or in violation of any applicable laws.</li>
                  <li>Attempt to gain unauthorized access to any part of the Site or its systems.</li>
                  <li>Introduce malicious code, viruses, or any harmful technology.</li>
                  <li>Scrape, mine, or harvest data from the Site without written permission.</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation.</li>
                  <li>Interfere with or disrupt the Site's infrastructure or performance.</li>
                </ul>
              </section>

              <section id="contact-submissions" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">5. Contact Form Submissions</h2>
                <p>
                  Any information you submit through our contact form is governed by our{" "}
                  <a href="/privacy-policy" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">Privacy Policy</a>.
                  By submitting the form, you consent to us collecting and processing the provided
                  information solely for the purpose of responding to your inquiry. Submission of the
                  contact form does not constitute a binding agreement or contract for services.
                </p>
              </section>

              <section id="project-engagements" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">6. Project Engagements</h2>
                <p>
                  Any design, development, or marketing engagement will be governed by a separate written
                  agreement (proposal, contract, or statement of work) that outlines scope, deliverables,
                  timelines, payment terms, and intellectual property ownership. These Terms do not
                  constitute such an agreement.
                </p>
              </section>

              <section id="disclaimers" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">7. Disclaimers</h2>
                <p>
                  This Site and its content are provided on an <strong className="text-foreground">"as is"</strong> and{" "}
                  <strong className="text-foreground">"as available"</strong> basis without warranties of any kind,
                  either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The Site will be available at all times, uninterrupted, or error-free.</li>
                  <li>The information on the Site is accurate, complete, or up to date.</li>
                  <li>Any defects or errors will be corrected.</li>
                  <li>The Site is free of viruses or other harmful components.</li>
                </ul>
              </section>

              <section id="limitation-liability" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, Nirmal Rathod shall not be liable
                  for any indirect, incidental, special, consequential, or punitive damages, including
                  but not limited to loss of profits, data, or goodwill, arising from or related to
                  your use of the Site, regardless of the theory of liability (contract, tort, strict
                  liability, or otherwise), even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section id="indemnification" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Nirmal Rathod from and against any
                  claims, liabilities, damages, losses, and expenses (including reasonable legal fees)
                  arising from your use of the Site, your violation of these Terms, or your violation
                  of any rights of a third party.
                </p>
              </section>

              <section id="third-party-links" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">10. Third-Party Links</h2>
                <p>
                  This Site may contain links to third-party websites or services (e.g., social media
                  profiles, external tools). These links are provided for convenience only. We have no
                  control over, and assume no responsibility for, the content, privacy policies, or
                  practices of any third-party websites. Visiting these links is at your own risk.
                </p>
              </section>

              <section id="governing-law" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">11. Governing Law & Jurisdiction</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India,
                  without regard to its conflict of law provisions. Any disputes arising from or related
                  to these Terms or the use of the Site shall be subject to the exclusive jurisdiction
                  of the courts located in Gujarat, India. However, we respect and comply with applicable
                  local consumer protection laws in your jurisdiction to the extent they apply.
                </p>
              </section>

              <section id="termination" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">12. Termination</h2>
                <p>
                  We reserve the right to restrict or terminate your access to the Site at any time,
                  without prior notice, for any reason, including but not limited to a breach of these
                  Terms. Upon termination, the provisions regarding intellectual property, disclaimers,
                  limitations of liability, and indemnification shall survive.
                </p>
              </section>

              <section id="changes" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">13. Changes to These Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective
                  immediately upon posting to this page with an updated "Last updated" date. Your
                  continued use of the Site following any changes constitutes your acceptance of the
                  revised Terms. We encourage you to review this page periodically.
                </p>
              </section>

              <section id="contact" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">14. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact:</p>
                <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
                  <p><strong className="text-foreground">Nirmal Rathod</strong></p>
                  <p className="text-muted-foreground">Email: <a href="mailto:hello@nirmalrathod.com" className="text-foreground hover:text-muted-foreground transition-colors">hello@nirmalrathod.com</a></p>
                  <p className="text-muted-foreground">Location: Gujarat, India</p>
                </div>
              </section>
            </>
          )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
