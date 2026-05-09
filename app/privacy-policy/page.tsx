import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Nirmal Rathod's portfolio website. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use", title: "2. How We Use Your Information" },
  { id: "cookies", title: "3. Cookies & Tracking Technologies" },
  { id: "data-sharing", title: "4. Data Sharing & Third Parties" },
  { id: "data-retention", title: "5. Data Retention" },
  { id: "your-rights", title: "6. Your Rights" },
  { id: "international-transfers", title: "7. International Data Transfers" },
  { id: "security", title: "8. Data Security" },
  { id: "children", title: "9. Children's Privacy" },
  { id: "changes", title: "10. Changes to This Policy" },
  { id: "contact", title: "11. Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "Privacy Policy for Nirmal Rathod's portfolio website.",
        "url": "https://nirmal-rathod.vercel.app/privacy-policy",
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
              "name": "Privacy Policy",
              "item": "https://nirmal-rathod.vercel.app/privacy-policy"
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: May 9, 2026
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
            {/* Table of Contents */}
            <aside className="hidden lg:block">
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
              <p className="text-lg">
                Nirmal Rathod ("we," "our," or "us") respects your privacy and is committed to protecting
                the personal data you share with us. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website{" "}
                <strong className="text-foreground">nirmalrathod.com</strong> (the "Site"), regardless
                of where you access it from worldwide. Please read it carefully.
              </p>

              <section id="information-we-collect" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <h3 className="font-heading text-lg font-bold text-foreground mt-4">a) Personal Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Contact Form Data:</strong> Name, email address, company name, and message content when you use our contact form.</li>
                  <li><strong className="text-foreground">Email Communications:</strong> Any information you voluntarily share when contacting us via email.</li>
                </ul>
                <h3 className="font-heading text-lg font-bold text-foreground mt-4">b) Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Log Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, date/time stamps, and clickstream data.</li>
                  <li><strong className="text-foreground">Device Information:</strong> Device type, screen resolution, language preferences, and unique device identifiers.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> How you interact with our Site, including scroll depth, time on page, and navigation patterns.</li>
                </ul>
              </section>

              <section id="how-we-use" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To respond to your inquiries and provide requested services.</li>
                  <li>To improve, maintain, and optimize our Site's performance and user experience.</li>
                  <li>To analyze usage trends and monitor Site traffic through aggregated, anonymized data.</li>
                  <li>To detect, prevent, and address technical issues or security threats.</li>
                  <li>To comply with legal obligations and enforce our Terms of Service.</li>
                </ul>
              </section>

              <section id="cookies" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">3. Cookies & Tracking Technologies</h2>
                <p>Our Site may use the following technologies:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Essential Cookies:</strong> Required for basic Site functionality such as theme preference (light/dark mode).</li>
                  <li><strong className="text-foreground">Analytics Cookies:</strong> Used via services like Google Analytics to understand visitor behavior. These collect anonymized, aggregated data.</li>
                  <li><strong className="text-foreground">Local Storage:</strong> Used to store your theme preference across sessions.</li>
                </ul>
                <p>You can control cookie settings through your browser preferences. Disabling cookies may affect certain Site features.</p>
              </section>

              <section id="data-sharing" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">4. Data Sharing & Third Parties</h2>
                <p>We do <strong className="text-foreground">not</strong> sell, rent, or trade your personal information. We may share data with:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Service Providers:</strong> Trusted third-party services (e.g., hosting, analytics, email delivery) that assist in operating our Site, bound by confidentiality agreements.</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</li>
                </ul>
              </section>

              <section id="data-retention" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">5. Data Retention</h2>
                <p>
                  We retain personal information only for as long as necessary to fulfill the purposes
                  outlined in this policy, unless a longer retention period is required or permitted by law.
                  Contact form submissions are typically retained for up to 12 months unless you request
                  earlier deletion.
                </p>
              </section>

              <section id="your-rights" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">6. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong className="text-foreground">Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong className="text-foreground">Erasure:</strong> Request deletion of your personal data ("right to be forgotten").</li>
                  <li><strong className="text-foreground">Restriction:</strong> Request that we limit the processing of your data.</li>
                  <li><strong className="text-foreground">Portability:</strong> Request your data in a structured, machine-readable format.</li>
                  <li><strong className="text-foreground">Objection:</strong> Object to processing of your data for specific purposes.</li>
                </ul>
                <p>
                  These rights apply under GDPR (EU/EEA), CCPA (California, USA), LGPD (Brazil),
                  POPIA (South Africa), and other applicable data protection laws worldwide.
                  To exercise any of these rights, please contact us at the email below.
                </p>
              </section>

              <section id="international-transfers" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">7. International Data Transfers</h2>
                <p>
                  Our Site is accessible globally. If you access it from outside India, your information
                  may be transferred to and processed in India or other countries where our service providers
                  operate. We ensure appropriate safeguards are in place to protect your data in accordance
                  with applicable data protection laws, including Standard Contractual Clauses (SCCs) where
                  required.
                </p>
              </section>

              <section id="security" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">8. Data Security</h2>
                <p>
                  We implement industry-standard technical and organizational security measures to protect
                  your personal data against unauthorized access, alteration, disclosure, or destruction.
                  These include HTTPS encryption, secure hosting infrastructure, and access controls.
                  However, no method of transmission over the Internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section id="children" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">9. Children's Privacy</h2>
                <p>
                  Our Site is not directed to individuals under the age of 16. We do not knowingly collect
                  personal data from children. If you believe a child has provided us with personal
                  information, please contact us and we will promptly delete it.
                </p>
              </section>

              <section id="changes" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">10. Changes to This Policy</h2>
                <p>
                  We reserve the right to update this Privacy Policy at any time. Changes will be posted on
                  this page with an updated "Last updated" date. We encourage you to review this page
                  periodically. Your continued use of the Site after changes constitutes acceptance of the
                  updated policy.
                </p>
              </section>

              <section id="contact" className="scroll-offset space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">11. Contact Information</h2>
                <p>If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact:</p>
                <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-2">
                  <p><strong className="text-foreground">Nirmal Rathod</strong></p>
                  <p className="text-muted-foreground">Email: <a href="mailto:hello@nirmalrathod.com" className="text-foreground hover:text-muted-foreground transition-colors">hello@nirmalrathod.com</a></p>
                  <p className="text-muted-foreground">Location: Gujarat, India</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
