"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
  id,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 mb-4">
          {badge}
        </div>
      )}
      <h2 id={id} className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-slate-500 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}
