import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Site Map | Rob's Window Cleaning Cornwall",
  description:
    "Full site map for Rob's Window Cleaning — all service pages, area pages and blog guides for window cleaning, gutter cleaning and exterior cleaning across Cornwall.",
  alternates: { canonical: `${siteConfig.url}/site-map` },
  robots: { index: true, follow: true },
};

const corePages = [
  { label: "Home", href: "/" },
  { label: "All Services", href: "/services" },
  { label: "Areas We Cover", href: "/areas" },
  { label: "About Rob's Window Cleaning", href: "/about" },
  { label: "Customer Reviews", href: "/reviews" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Free Quote", href: "/free-quote" },
];

const cornwallHubs = [
  { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall" },
  { label: "Gutter Cleaning Cornwall", href: "/gutter-cleaning-cornwall" },
  { label: "Conservatory Roof Cleaning Cornwall", href: "/conservatory-roof-cleaning-cornwall" },
];

const blogPosts = [
  {
    label: "How Often Should Windows Be Cleaned in Cornwall?",
    href: "/blog/how-often-should-windows-be-cleaned-cornwall",
  },
  {
    label: "What Is Pure Water Window Cleaning? The Complete Guide",
    href: "/blog/what-is-pure-water-window-cleaning",
  },
  {
    label: "The Complete Guide to Gutter Cleaning in Cornwall",
    href: "/blog/gutter-cleaning-guide-cornwall",
  },
  {
    label: "How to Clean a Conservatory Roof Safely",
    href: "/blog/conservatory-roof-cleaning-guide",
  },
  {
    label: "Seasonal Window Cleaning Guide for Newquay Homeowners",
    href: "/blog/window-cleaning-newquay-seasonal-guide",
  },
  {
    label: "Window Cleaning for Holiday Lets in Cornwall",
    href: "/blog/holiday-let-window-cleaning-cornwall",
  },
];

function Section({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
        {title}
      </h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-brand-600 hover:text-brand-800 hover:underline transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Site Map", url: `${siteConfig.url}/site-map` },
            ])
          ),
        }}
      />
    <main className="pt-28 pb-20 bg-white" id="main-content">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-700 font-medium">Site Map</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Site Map
          </h1>
          <p className="text-base text-slate-500 max-w-2xl">
            A complete index of all pages on Rob&apos;s Window Cleaning — covering every service, location
            and guide across Cornwall.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Section title="Core Pages" links={corePages} />

          <Section title="Cornwall Hub Pages" links={cornwallHubs} />

          <Section
            title="Service Pages"
            links={services.map((s) => ({ label: s.title + " Newquay", href: `/${s.slug}` }))}
          />

          <div className="sm:col-span-2">
            <Section
              title="Area Pages — Window Cleaning Across Cornwall"
              links={locations.map((l) => ({
                label: `Window Cleaning ${l.name}`,
                href: `/${l.slug}`,
              }))}
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <Section title="Blog Guides" links={blogPosts} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-brand-100 bg-brand-50 px-8 py-10 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Contact us directly — we&apos;re happy to answer any questions about our services or coverage
            across Cornwall.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/free-quote" className="btn-secondary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
