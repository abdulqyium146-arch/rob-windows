"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Droplets, Sun, Home, Zap, Building2, House, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Droplets,
  Sun,
  Home,
  Zap,
  Building2,
  House,
};

interface ServiceCardsProps {
  services: Service[];
  className?: string;
  columns?: 2 | 3 | 4;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiceCards({ services, className, columns = 3 }: ServiceCardsProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "grid gap-6",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {services.map((service) => {
        const Icon = iconMap[service.icon] ?? Sparkles;
        return (
          <motion.div key={service.id} variants={cardVariants}>
            <Link href={`/${service.slug}`} className="group block h-full">
              <article className="flex flex-col h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-brand-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
                  {service.shortDescription}
                </p>
                {service.price && (
                  <div className="text-xs font-medium text-brand-600 mb-3">{service.price}</div>
                )}
                <div className="flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
