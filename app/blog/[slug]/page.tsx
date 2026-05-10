import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { type ContentBlock } from "@/lib/data/blog";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { getBlogBySlug, getAllBlogSlugs, getRelatedBlogs } from "@/lib/supabase/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { 
    title: post.seo_title || post.title, 
    description: post.seo_description || post.excerpt,
    alternates: { canonical: `https://nirmal-rathod.vercel.app/blog/${slug}` },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((post) => ({ slug: post.slug }));
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-lg leading-[1.85] text-foreground/85">{block.text}</p>;
    case "heading":
      return (
        <h2 id={block.id} className="font-heading text-2xl md:text-3xl font-bold text-foreground scroll-offset pt-4">
          {block.text}
        </h2>
      );
    case "image":
      return <ImagePlaceholder label={block.label || ""} src={block.src || ""} aspectRatio={block.aspect || "video"} className="rounded-xl" />;
    case "list":
      return (
        <ul className="space-y-3 pl-1">
          {block.items?.map((item, idx) => (
            <li key={idx} className="flex items-start text-lg text-foreground/80">
              <span className="mt-2.5 mr-3 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-foreground/20 pl-6 py-2">
          <p className="text-xl italic text-foreground/80 leading-relaxed">"{block.text}"</p>
          {block.author && (
            <cite className="block mt-3 text-sm text-muted-foreground not-italic">— {block.author}</cite>
          )}
        </blockquote>
      );
    case "code":
      return (
        <pre className="bg-muted/50 border border-border rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
          <code>{block.text}</code>
        </pre>
      );
    default:
      return null;
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  
  if (!post) notFound();

  const relatedPosts = await getRelatedBlogs(post.category || "", slug);

  let contentBlocks: ContentBlock[] = [];
  let rawHtml = "";

  if (post.content) {
    try {
      // Try to parse as JSON array of blocks
      contentBlocks = JSON.parse(post.content);
      if (!Array.isArray(contentBlocks)) {
        contentBlocks = [];
        rawHtml = post.content;
      }
    } catch (e) {
      // If it fails, assume it's raw HTML or markdown
      rawHtml = post.content;
    }
  }

  const headings = contentBlocks.filter((b): b is Extract<ContentBlock, { type: "heading" }> => b.type === "heading");

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title || "",
        "description": post.excerpt || "",
        "image": post.cover_image || "",
        "datePublished": post.published_at || post.created_at,
        "author": {
          "@type": "Person",
          "name": "Nirmal Rathod"
        },
        "url": `https://nirmal-rathod.vercel.app/blog/${slug}`,
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
              "name": "Blog",
              "item": "https://nirmal-rathod.vercel.app/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title || "Blog Post",
              "item": `https://nirmal-rathod.vercel.app/blog/${slug}`
            }
          ]
        }
      }} />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 rounded-full border border-border font-medium text-xs">
                {post.category || "General"}
              </span>
              {post.read_time && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.read_time}
                </span>
              )}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                NR
              </div>
              <div>
                <p className="font-medium text-sm">Nirmal Rathod</p>
                {post.published_at && (
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                )}
              </div>
            </div>
          </header>

          {/* Cover image */}
          {post.cover_image && (
            <ImagePlaceholder label="Article Cover" src={post.cover_image} aspectRatio="video" className="mb-12 max-w-3xl" />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
            {/* Article content */}
            <article className="space-y-6 min-w-0">
              {contentBlocks.length > 0 ? (
                contentBlocks.map((block, idx) => (
                  <BlockRenderer key={idx} block={block} />
                ))
              ) : (
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none text-foreground/85 leading-[1.85]"
                  dangerouslySetInnerHTML={{ __html: rawHtml }}
                />
              )}
            </article>

            {/* Sticky TOC sidebar */}
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    On this page
                  </h4>
                  <nav className="space-y-2.5 border-l border-border pl-4">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors leading-snug"
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-border max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              <span className="px-3 py-1 rounded-full border border-border text-xs font-medium">{post.category || "General"}</span>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-20 max-w-3xl">
              <h2 className="font-heading text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug || related.id}
                    href={`/blog/${related.slug || related.id}`}
                    className="group block rounded-2xl border border-border p-6 hover:shadow-card hover:border-foreground/15 transition-all duration-300"
                  >
                    {related.published_at && (
                      <span className="text-xs text-muted-foreground mb-3 block">
                        {new Date(related.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    )}
                    <h3 className="font-heading text-lg font-bold group-hover:text-muted-foreground transition-colors leading-snug mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 p-8 md:p-12 bg-foreground text-background rounded-2xl text-center max-w-3xl">
            <h2 className="font-heading text-2xl font-bold mb-3">Enjoyed this article?</h2>
            <p className="text-background/70 mb-6 max-w-md mx-auto">
              Let's discuss how I can bring this kind of thinking to your next project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
