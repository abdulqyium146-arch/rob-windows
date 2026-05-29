import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, imageGallerySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery | Window Cleaning Results — Rob's Window Cleaning Cornwall",
  description:
    "See the results of our professional window cleaning, gutter cleaning and exterior cleaning services across Newquay and Cornwall. Before and after photos.",
  alternates: { canonical: `${siteConfig.url}/gallery` },
};

const galleryItems = [
  {
    id: 1,
    src: "/images/window-cleaning-newquay-detached-house-result.webp",
    category: "Window Cleaning",
    location: "Newquay",
    alt: "Clean windows on a detached house in Newquay after professional window cleaning service by Rob's Window Cleaning",
  },
  {
    id: 2,
    src: "/images/gutter-fascia-soffit-cleaning-newquay-roofline.webp",
    category: "Gutter Cleaning",
    location: "Perranporth",
    alt: "Clean white gutters and fascia on a brick property in Cornwall — gutter and roofline cleaning by Rob's Window Cleaning",
  },
  {
    id: 3,
    src: "/images/conservatory-window-cleaning-newquay-professional.webp",
    category: "Conservatory Cleaning",
    location: "Padstow",
    alt: "Rob's Window Cleaning operative cleaning a conservatory with glass roof panels in Cornwall",
  },
  {
    id: 4,
    src: "/images/residential-window-cleaning-newquay-detached-house.webp",
    category: "Window Cleaning",
    location: "Truro",
    alt: "Large detached red-brick house with clean UPVC windows — residential window cleaning in Newquay Cornwall",
  },
  {
    id: 5,
    src: "/images/fascia-soffit-gutter-cleaning-newquay-upvc-roofline.webp",
    category: "Fascia & Soffit",
    location: "Wadebridge",
    alt: "Bright white UPVC fascia, soffits and gutters on a detached property — roofline cleaning in Newquay Cornwall",
  },
  {
    id: 6,
    src: "/images/upvc-conservatory-cleaning-newquay-frames.webp",
    category: "UPVC Cleaning",
    location: "Newquay",
    alt: "Clean UPVC conservatory frames and glass panels — conservatory window cleaning in Newquay Cornwall",
  },
  {
    id: 7,
    src: "/images/window-cleaning-newquay-semi-detached-upvc.webp",
    category: "Window Cleaning",
    location: "Falmouth",
    alt: "Semi-detached house with clean UPVC windows and white fascia — residential window cleaning Cornwall",
  },
  {
    id: 8,
    src: "/images/conservatory-roof-cleaning-newquay-polycarbonate.webp",
    category: "Conservatory Cleaning",
    location: "St Austell",
    alt: "Conservatory with polycarbonate roof panels cleaned by Rob's Window Cleaning in Cornwall",
  },
  {
    id: 9,
    src: "/images/conservatory-cleaning-cornwall-before.webp",
    category: "Conservatory Cleaning",
    location: "Bodmin",
    alt: "Conservatory exterior cleaning — polycarbonate roof and UPVC frames cleaned in Cornwall",
  },
];

const categories = ["All", ...new Set(galleryItems.map((g) => g.category))];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema()) }}
      />
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
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-quote" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/window-cleaning-cornwall" className="btn-secondary">
                Window Cleaning Cornwall
              </Link>
              <Link href="/gutter-cleaning-cornwall" className="btn-secondary">
                Gutter Cleaning Cornwall
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
