import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import ServiceCards from "@/components/ServiceCards";
import TrustBadges from "@/components/TrustBadges";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Cleaning Services Newquay | All Exterior Cleaning Cornwall",
  description:
    "Complete exterior cleaning services in Newquay, Cornwall — window cleaning, gutter cleaning, conservatory roof cleaning, fascia & soffit cleaning, UPVC cleaning. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionPageSchema(
              "Exterior Cleaning Services Newquay Cornwall",
              `${siteConfig.url}/services`,
              "Complete exterior cleaning services across Newquay and Cornwall — window cleaning, gutter cleaning, conservatory roof cleaning, fascia & soffit cleaning, UPVC cleaning and more.",
              services.map((s) => ({ name: s.title, url: `${siteConfig.url}/${s.slug}` }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Services", url: `${siteConfig.url}/services` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">All Services</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 text-balance">
              Complete Exterior Cleaning Services in Cornwall
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              From spotless windows and clear gutters to clean conservatory roofs and bright fascias — Rob's Window Cleaning offers a full range of exterior property cleaning services across Newquay and Cornwall.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Services"
            title="What We Clean"
            description="Professional exterior cleaning for every part of your property — delivered with care, using professional equipment and eco-friendly methods."
          />
          <ServiceCards services={services} columns={3} />
        </div>
      </section>

      {/* Why book multiple */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-brand mb-4">Package Deals</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                Combine Services for Better Value
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                Many customers save money and get better results by booking multiple services in a single visit. A combined window, gutter and fascia clean takes our team a fraction of the time multiple visits would, and we pass those savings on to you.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Windows + Gutters — popular spring/autumn package",
                  "Roofline package — fascias, soffits, gutters and windows",
                  "Full exterior package — windows, gutters, fascias, UPVC",
                  "Holiday let package — changeover-ready cleaning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/free-quote" className="btn-primary">
                Ask About Package Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Service Price Guide</h3>
              <div className="space-y-4">
                {[
                  { service: "Window Cleaning (small house)", price: "From £10" },
                  { service: "Window Cleaning (large house)", price: "From £25" },
                  { service: "Gutter Cleaning", price: "From £50" },
                  { service: "Conservatory Roof Cleaning", price: "From £120" },
                  { service: "Fascia & Soffit Cleaning", price: "From £80" },
                  { service: "UPVC Cleaning", price: "From £60" },
                  { service: "Commercial — by quote", price: "POA" },
                ].map((item) => (
                  <div key={item.service} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                    <span className="text-sm text-slate-700">{item.service}</span>
                    <span className="text-sm font-semibold text-brand-700">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4">All prices are indicative. Free on-site or telephone quotes available for every job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cornwall Hub Links */}
      <section className="section-padding bg-brand-50 border-y border-brand-100">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">County-Wide Service Pages</h2>
          <p className="text-sm text-slate-500 mb-6">
            Serving customers across all of Cornwall — find your county-level service page below.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall" },
              { label: "Gutter Cleaning Cornwall", href: "/gutter-cleaning-cornwall" },
              { label: "Conservatory Roof Cleaning Cornwall", href: "/conservatory-roof-cleaning-cornwall" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-brand-200 bg-white px-5 py-3.5 text-sm font-semibold text-brand-700 hover:border-brand-400 hover:shadow-soft transition-all"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <TrustBadges />
        </div>
      </section>
    </>
  );
}
