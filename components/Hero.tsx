"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Star, CheckCircle2, ArrowRight, Shield, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

const features = [
  "Fully Insured — £5m Public Liability",
  "Free, No-Obligation Quotes",
  "Pure Water Technology",
  "Regular Scheduled Rounds",
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Areas Covered" },
];

interface HeroProps {
  headline?: string;
  subheadline?: string;
  location?: string;
}

export default function Hero({
  headline = "Newquay's Trusted Window Cleaning Specialists",
  subheadline = "Professional window cleaning, gutter cleaning, conservatory roof cleaning and exterior property maintenance across Newquay and Cornwall. Reliable, insured and streak-free results every time.",
  location = "Newquay, Cornwall",
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-brand-900 to-brand-800 pt-24 pb-0 lg:pt-32"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-600/20 blur-[100px]" />
        <div className="absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-brand-400/10 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-brand-700/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-600/20 px-4 py-1.5 text-sm text-brand-200 mb-8"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span>Rated {siteConfig.rating.value}/5 from {siteConfig.rating.count}+ reviews in {location}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 text-balance"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-200/80 leading-relaxed mb-8 max-w-2xl mx-auto text-balance"
          >
            {subheadline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
            >
              Get Your Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-16"
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-1.5 text-sm text-brand-200/70">
                <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                {feature}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-brand-900/50 backdrop-blur-sm px-6 py-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-brand-300/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trust indicators below stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 py-10 text-xs text-brand-300/60"
        >
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4" />
            <span>£5m Public Liability Insurance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="h-4 w-4" />
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            <span>No Contract Required</span>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="relative -mb-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white" aria-hidden="true">
          <path d="M0 80L48 69.3C96 59 192 37 288 26.7C384 16 480 16 576 26.7C672 37 768 59 864 64C960 69 1056 59 1152 48C1248 37 1344 27 1392 21.3L1440 16V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
