"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialCarousel({ testimonials, className }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-card px-8 py-10 md:px-12 md:py-12">
        <div className="absolute top-8 left-8 text-brand-100">
          <Quote className="h-16 w-16" />
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative"
          >
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-5 w-5 ${s <= testimonials[current].rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`}
                />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-8 relative z-10">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold text-slate-900">{testimonials[current].name}</div>
                <div className="text-sm text-slate-500">{testimonials[current].location}</div>
                <div className="text-xs text-brand-600 mt-1">{testimonials[current].service}</div>
              </div>
              <div className="text-xs text-slate-400">{formatDate(testimonials[current].date)}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-brand-600" : "w-2 bg-slate-200 hover:bg-slate-300"}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of mini reviews */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {testimonials.slice(0, 3).map((t) => (
          <div key={t.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
            <div className="flex gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-3">&ldquo;{t.text}&rdquo;</p>
            <div>
              <div className="text-sm font-semibold text-slate-800">{t.name}</div>
              <div className="text-xs text-slate-400">{t.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
