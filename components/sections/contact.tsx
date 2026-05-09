"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-hero" style={{ transform: "rotate(180deg)" }} />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
            <Mail className="h-7 w-7" />
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-balance">
            Let's build something extraordinary together.
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you need a new brand identity, a premium UI/UX design, or a highly optimized
            website, I'm ready to help you succeed.
          </p>

          <div className="pt-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-primary-foreground text-lg font-medium shadow-soft hover:shadow-lift transition-all duration-300 group"
              >
                Start a conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
