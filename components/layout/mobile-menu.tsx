"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, ctaButton } from "@/lib/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lift md:hidden overflow-hidden"
        >
          <nav className="flex flex-col p-6 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-medium text-foreground py-3 block border-b border-border/50 hover:text-muted-foreground transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="pt-4"
            >
              <Link
                href={ctaButton.href}
                onClick={onClose}
                className="block text-center text-lg font-medium bg-primary text-primary-foreground px-4 py-3.5 rounded-full"
              >
                {ctaButton.text}
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
