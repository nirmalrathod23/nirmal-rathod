"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { heroData } from "@/lib/data/hero";

export function Hero() {
  const { subtitle, headline, description, cta, image } = heroData;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 md:mb-6"
            >
              {subtitle}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-6xl md:text-7xl lg:text-[90px] font-bold tracking-tighter leading-[1.05] mb-6"
            >
              <span className="text-foreground">{headline.firstName}</span>{" "}
              <span className="text-primary">{headline.lastName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-[1.8] mb-10"
            >
              {description}
            </motion.p>



            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={cta.primary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:opacity-90 text-primary-foreground font-medium rounded-lg transition-opacity shadow-soft text-sm"
              >
                <ArrowDown className="w-4 h-4" />
                {cta.primary.text}
              </a>
              <a
                href={cta.secondary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-background text-foreground hover:bg-muted font-medium rounded-lg transition-colors text-sm"
              >
                <FileText className="w-4 h-4" />
                {cta.secondary.text}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[500px]"
          >
            {/* Top Left Decorative Square */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-muted/40 backdrop-blur-sm rounded-xl border border-border/50 z-10 hidden md:block shadow-soft" />
            
            {/* Main Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl z-0 border border-border/20">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            {/* Bottom Right Decorative Square */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-primary/20 rounded-2xl bg-primary/5 backdrop-blur-md z-10 hidden md:block" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
