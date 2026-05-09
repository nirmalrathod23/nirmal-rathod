import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on UI/UX design, web development, branding, and freelancing from Nirmal Rathod.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="max-w-2xl mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thoughts on design, development, and building a creative career — from the trenches.
            </p>
          </div>

          <BlogGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
