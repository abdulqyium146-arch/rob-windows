"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { Location } from "@/types";

interface LocationCardsProps {
  locations: Location[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function LocationCards({ locations, className }: LocationCardsProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ${className ?? ""}`}
    >
      {locations.map((location) => (
        <motion.div key={location.id} variants={cardVariants}>
          <Link href={`/${location.slug}`} className="group block">
            <article className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft hover:border-brand-200 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-slate-800 group-hover:text-brand-700 transition-colors truncate">
                  {location.name}
                </div>
                <div className="text-xs text-slate-400 truncate">{location.county}</div>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-brand-500 shrink-0 transition-colors" />
            </article>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
