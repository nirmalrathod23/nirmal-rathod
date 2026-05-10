"use client";

import { motion } from "framer-motion";
import {
  PenTool, Layout, Code, Share2, type LucideIcon,
  Palette, Globe, TrendingUp, Layers, Smartphone, Monitor, Megaphone,
  BarChart, ShoppingCart, Search, Camera, Video, Music, FileText,
  Settings, Zap, Star, Heart, Shield, Database, Cloud, Lock,
  Mail, MessageSquare, Users, Briefcase, Award, Cpu, Wifi,
} from "lucide-react";
import Link from "next/link";

// Supports both PascalCase (from admin panel) and kebab-case formats
const iconMap: Record<string, LucideIcon> = {
  // kebab-case
  "pen-tool": PenTool, "layout": Layout, "code": Code, "share-2": Share2,
  "palette": Palette, "globe": Globe, "trending-up": TrendingUp,
  "layers": Layers, "smartphone": Smartphone, "monitor": Monitor,
  "megaphone": Megaphone, "bar-chart": BarChart, "shopping-cart": ShoppingCart,
  "search": Search,
  // PascalCase (from admin panel)
  "PenTool": PenTool, "Layout": Layout, "Code": Code, "Share2": Share2,
  "Palette": Palette, "Globe": Globe, "TrendingUp": TrendingUp,
  "Layers": Layers, "Smartphone": Smartphone, "Monitor": Monitor,
  "Megaphone": Megaphone, "BarChart": BarChart, "ShoppingCart": ShoppingCart,
  "Search": Search, "Camera": Camera, "Video": Video, "Music": Music,
  "FileText": FileText, "Settings": Settings, "Zap": Zap, "Star": Star,
  "Heart": Heart, "Shield": Shield, "Database": Database, "Cloud": Cloud,
  "Lock": Lock, "Mail": Mail, "MessageSquare": MessageSquare, "Users": Users,
  "Briefcase": Briefcase, "Award": Award, "Cpu": Cpu, "Wifi": Wifi,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  id: string;
  index: number;
}

export function ServiceCard({ title, description, icon, id, index }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/services#${id}`} className="block group">
        <div className="p-8 rounded-2xl bg-background border border-border shadow-soft hover:shadow-lift hover:border-foreground/20 transition-all duration-300 h-full">
          <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="h-6 w-6 text-foreground" />
          </div>
          <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
