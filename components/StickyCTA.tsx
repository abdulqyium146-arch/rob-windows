"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200 px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.1)]"
          >
            <div className="flex gap-3 max-w-sm mx-auto">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-brand-200 bg-brand-50 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-100 transition-colors"
                aria-label="Call Rob's Window Cleaning"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <Link
                href="/free-quote"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors shadow-brand"
              >
                <MessageSquare className="h-4 w-4" />
                Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop floating button */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 right-8 z-50 hidden lg:flex flex-col gap-3"
          >
            <Link
              href="/free-quote"
              className="flex items-center gap-2 rounded-2xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-brand hover:bg-brand-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-soft hover:bg-slate-50 transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              {siteConfig.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
