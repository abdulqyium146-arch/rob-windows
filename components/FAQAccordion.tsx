"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
  schema?: boolean;
}

export default function FAQAccordion({ faqs, className, schema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)} itemScope={schema} itemType={schema ? "https://schema.org/FAQPage" : undefined}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          itemScope={schema}
          itemProp={schema ? "mainEntity" : undefined}
          itemType={schema ? "https://schema.org/Question" : undefined}
          className={cn(
            "rounded-2xl border transition-all duration-200",
            openIndex === index
              ? "border-brand-200 bg-brand-50/50 shadow-soft"
              : "border-slate-100 bg-white hover:border-slate-200"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span
              className="text-sm font-semibold text-slate-900 leading-relaxed"
              itemProp={schema ? "name" : undefined}
            >
              {faq.question}
            </span>
            <span className="shrink-0 mt-0.5">
              {openIndex === index ? (
                <Minus className="h-4 w-4 text-brand-600" />
              ) : (
                <Plus className="h-4 w-4 text-slate-400" />
              )}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
                itemScope={schema}
                itemProp={schema ? "acceptedAnswer" : undefined}
                itemType={schema ? "https://schema.org/Answer" : undefined}
              >
                <div className="px-6 pb-5">
                  <p
                    className="text-sm text-slate-600 leading-relaxed"
                    itemProp={schema ? "text" : undefined}
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
