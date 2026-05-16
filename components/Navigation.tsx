"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Window Cleaning", href: "/window-cleaning-newquay" },
      { label: "Gutter Cleaning", href: "/gutter-cleaning-newquay" },
      { label: "Conservatory Roof Cleaning", href: "/conservatory-roof-cleaning-newquay" },
      { label: "Fascia & Soffit Cleaning", href: "/fascia-soffit-cleaning-newquay" },
      { label: "UPVC Cleaning", href: "/upvc-cleaning-newquay" },
      { label: "Commercial Window Cleaning", href: "/commercial-window-cleaning-newquay" },
      { label: "Residential Window Cleaning", href: "/residential-window-cleaning-newquay" },
    ],
  },
  {
    label: "Areas",
    href: "/areas",
    children: [
      { label: "Newquay", href: "/window-cleaning-newquay" },
      { label: "Perranporth", href: "/window-cleaning-perranporth" },
      { label: "Truro", href: "/window-cleaning-truro" },
      { label: "Padstow", href: "/window-cleaning-padstow" },
      { label: "St Austell", href: "/window-cleaning-st-austell" },
      { label: "Wadebridge", href: "/window-cleaning-wadebridge" },
      { label: "Falmouth", href: "/window-cleaning-falmouth" },
      { label: "View All Areas →", href: "/areas" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Rob's Window Cleaning — Home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 shadow-brand group-hover:bg-brand-700 transition-colors">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="block text-base font-bold text-slate-900 leading-tight">Rob's Window</span>
              <span className="block text-xs font-medium text-brand-600 leading-tight">Cleaning · Newquay</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-1 w-64 rounded-2xl border border-slate-100 bg-white p-2 shadow-card"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              {siteConfig.phone}
            </a>
            <Link href="/free-quote" className="btn-primary text-sm px-5 py-2.5">
              Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-xl p-2 text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-600" />
                  Call Now
                </a>
                <Link href="/free-quote" className="btn-primary justify-center text-sm py-3">
                  Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
