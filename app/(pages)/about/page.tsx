import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Shield, Award, Heart, Users, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema";
import TrustBadges from "@/components/TrustBadges";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Rob's Window Cleaning | Newquay, Cornwall",
  description:
    "Learn about Rob's Window Cleaning — Newquay's trusted local window cleaning and exterior property maintenance specialist. 10+ years experience, fully insured.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    icon: Shield,
    title: "Reliability First",
    description: "We turn up when we say we will, clean to the same high standard every visit, and keep you informed. No surprises, no no-shows.",
  },
  {
    icon: Award,
    title: "Professional Results",
    description: "Using professional-grade pure water systems and years of technique, we deliver results that DIY simply can't match.",
  },
  {
    icon: Heart,
    title: "Local & Community Focused",
    description: "We're Newquay people, serving Newquay people. We genuinely care about the communities we work in across Cornwall.",
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    description: "Most of our customers have been with us for years. We value loyalty and always treat every property as if it were our own.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "About", url: `${siteConfig.url}/about` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">About Us</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 text-balance">
              Newquay's Trusted Window Cleaning Specialists
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              Rob's Window Cleaning has been keeping properties across Newquay and Cornwall spotlessly clean for over a decade. We're a local business built on trust, reliability and outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-brand mb-4">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                A Local Business Built on Reputation
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  Rob's Window Cleaning was founded right here in Newquay with a simple mission: to provide a genuinely professional, reliable exterior cleaning service that local homeowners and businesses can depend on.
                </p>
                <p>
                  Over the years, we've grown from a single-van operation into a trusted local business covering all of Newquay and a wide area of North and Mid Cornwall — from Perranporth to Truro, Padstow to Falmouth.
                </p>
                <p>
                  We invest in professional-grade equipment, including pure water fed pole systems that deliver streak-free results on any property. We're fully insured, never cut corners, and pride ourselves on the consistency of our work.
                </p>
                <p>
                  Cornwall's coastal environment is uniquely challenging — salt air, damp conditions and mild winters create the perfect conditions for algae, moss and grime to build up quickly on windows, gutters and fascias. We understand this environment better than anyone, and we tailor our approach accordingly.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Happy Customers", color: "bg-brand-50 text-brand-700" },
                { value: "4.9★", label: "Average Rating", color: "bg-amber-50 text-amber-700" },
                { value: "10+", label: "Years Experience", color: "bg-green-50 text-green-700" },
                { value: "£5m", label: "Public Liability Cover", color: "bg-purple-50 text-purple-700" },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-2xl ${stat.color} p-6 text-center border`}>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm font-medium opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge badge-brand mx-auto mb-4">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance/accreditation */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Fully Insured & Professional</h2>
            <p className="text-base text-slate-500">We carry full public liability insurance to protect you and your property on every job.</p>
          </div>
          <TrustBadges />
          <div className="mt-10 max-w-2xl mx-auto rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What to Expect When You Book</h3>
            <div className="space-y-3">
              {[
                "Free no-obligation quote provided — no pressure",
                "Text message reminder the day before your clean",
                "Punctual arrival within the agreed time window",
                "Professional clean to our consistent high standard",
                "Gates and access left exactly as found",
                "Instant rebooking available if you want a regular service",
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-white" aria-labelledby="our-services-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="our-services-heading" className="text-2xl font-bold text-slate-900 mb-6">Our Services Across Cornwall</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall", desc: "Pure water technology across the county" },
              { label: "Gutter Cleaning Cornwall", href: "/gutter-cleaning-cornwall", desc: "Clearance and drainage restoration" },
              { label: "Conservatory Roof Cleaning", href: "/conservatory-roof-cleaning-cornwall", desc: "Safe soft-wash for all roof types" },
              { label: "Window Cleaning Newquay", href: "/window-cleaning-newquay", desc: "Our home town service" },
              { label: "Fascia & Soffit Cleaning", href: "/fascia-soffit-cleaning-newquay", desc: "Roofline restoration" },
              { label: "Commercial Window Cleaning", href: "/commercial-window-cleaning-newquay", desc: "Businesses and holiday lets" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-1 rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 hover:border-brand-200 hover:bg-brand-50 transition-all"
              >
                <span className="text-sm font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                  {item.label}
                </span>
                <span className="text-xs text-slate-500">{item.desc}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/areas" className="btn-secondary">
              Areas We Cover
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/reviews" className="btn-secondary">
              Customer Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
              <p className="text-base text-slate-500 mb-6">Get your free, no-obligation quote today. We&apos;ll respond within 2 hours.</p>
              <div className="space-y-3">
                {["Free, no-obligation quote", "Response within 2 hours", "No long-term contract", "Serving 15+ areas in Cornwall"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
