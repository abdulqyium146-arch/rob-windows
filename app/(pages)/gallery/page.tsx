import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery | Window Cleaning Results — Rob's Window Cleaning Cornwall",
  description:
    "See the results of our professional window cleaning, gutter cleaning and exterior cleaning services across Newquay and Cornwall. Before and after photos.",
  alternates: { canonical: `${siteConfig.url}/gallery` },
};

const galleryItems = [
  { id: 1, category: "Window Cleaning", location: "Newquay", alt: "Sparkling clean windows on a detached house in Newquay after professional window cleaning" },
  { id: 2, category: "Gutter Cleaning", location: "Perranporth", alt: "Before and after gutter cleaning — blocked gutters cleared in Perranporth, Cornwall" },
  { id: 3, category: "Conservatory Cleaning", location: "Padstow", alt: "Conservatory roof cleaned — green algae removed from polycarbonate roof in Padstow" },
  { id: 4, category: "Window Cleaning", location: "Truro", alt: "Commercial window cleaning in Truro city centre — shop front windows gleaming" },
  { id: 5, category: "Fascia & Soffit", location: "Wadebridge", alt: "Fascia and soffit cleaning — white UPVC restored after green algae removal in Wadebridge" },
  { id: 6, category: "UPVC Cleaning", location: "Newquay", alt: "UPVC window frames restored to bright white in Newquay, Cornwall" },
  { id: 7, category: "Window Cleaning", location: "Falmouth", alt: "Harbour-view property window cleaning in Falmouth — sea salt and grime removed" },
  { id: 8, category: "Gutter Cleaning", location: "St Austell", alt: "Gutters cleared and downpipes flushed in St Austell — before and after" },
  { id: 9, category: "Window Cleaning", location: "Bodmin", alt: "Residential window cleaning in Bodmin — streak-free results with pure water system" },
];

const categories = ["All", ...new Set(galleryItems.map((g) => g.category))];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Gallery", url: `${siteConfig.url}/gallery` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Gallery" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Our Work</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Results That Speak for Themselves
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              Take a look at the results we achieve for customers across Newquay and Cornwall. Every property is treated with the same care and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium cursor-pointer transition-colors ${
                  cat === "All"
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] border border-slate-100"
              >
                {/* Placeholder image — replace with real images */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 text-center p-6">
                  <div className="text-brand-300 text-6xl mb-3">🪟</div>
                  <div className="badge badge-brand mb-2">{item.category}</div>
                  <p className="text-sm text-brand-600 font-medium">{item.location}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.alt}</p>
                </div>
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div>
                    <div className="badge badge-brand mb-1">{item.category}</div>
                    <p className="text-sm text-white font-medium">{item.location}, Cornwall</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center rounded-3xl border border-brand-100 bg-brand-50 p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to See These Results at Your Property?</h2>
            <p className="text-base text-slate-500 mb-6 max-w-xl mx-auto">
              Get a free, no-obligation quote and join 500+ happy customers across Newquay and Cornwall.
            </p>
            <Link href="/free-quote" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
