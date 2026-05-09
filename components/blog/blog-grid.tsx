"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogData, blogCategories, type BlogPost } from "@/lib/data/blog";
import { FilterTabs } from "@/components/ui/filter-tabs";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl border border-border bg-muted/20 hover:bg-muted/40 hover:shadow-card transition-all duration-300">
          <div className="relative rounded-xl overflow-hidden">
            <ImagePlaceholder label={post.title} src={post.coverImage} aspectRatio="video" className="rounded-xl" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                Featured
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="px-2.5 py-1 rounded-full border border-border font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors leading-tight">
              {post.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
              Read article
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="h-full rounded-2xl border border-border bg-background hover:shadow-lift hover:border-foreground/15 transition-all duration-300 overflow-hidden">
          <div className="relative">
            <ImagePlaceholder label={post.category} src={post.coverImage} aspectRatio="video" className="rounded-none rounded-t-2xl" />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="px-2.5 py-1 rounded-full border border-border font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <span className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              <span className="inline-flex items-center text-xs font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                Read more
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogData.filter((p) => p.featured);
  const filtered =
    activeCategory === "All"
      ? blogData.filter((p) => !p.featured)
      : blogData.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Featured posts */}
      {activeCategory === "All" && featured.length > 0 && (
        <div className="space-y-8 mb-16">
          {featured.map((post) => (
            <FeaturedCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      <FilterTabs
        categories={blogCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-muted-foreground">
          No articles found for this category yet.
        </div>
      )}
    </div>
  );
}
