import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, Star, MapPin, Zap, Shield, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { testimonials } from "@/data/testimonials";
import { generalFaqs } from "@/data/faqs";
import { faqSchema, homePageSchema, collectionPageSchema } from "@/lib/schema";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import LocationCards from "@/components/LocationCards";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import TrustBadges from "@/components/TrustBadges";
import SectionHeader from "@/components/SectionHeader";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Window Cleaning Newquay | Rob's Window Cleaning Cornwall",
  description:
    "Professional window cleaning, gutter cleaning, conservatory roof cleaning and exterior property maintenance in Newquay, Cornwall. Rated 4.9★ by 127+ customers. Free quotes.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Window Cleaning Newquay | Rob's Window Cleaning Cornwall",
    description:
      "Professional window cleaning, gutter cleaning and exterior cleaning in Newquay, Cornwall. Rated 4.9/5. Fully insured. Free no-obligation quotes.",
  },
};

const whyUs = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "£5 million public liability insurance on every job, giving you complete peace of mind.",
  },
  {
    icon: Zap,
    title: "Pure Water Technology",
    description: "Our professional pure water fed pole system delivers a streak-free, spot-free finish every time.",
  },
  {
    icon: Clock,
    title: "Regular & Reliable",
    description: "We text you the day before, arrive on time, and clean to the same high standard every visit.",
  },
  {
    icon: Star,
    title: "4.9★ Rated",
    description: "Trusted by 500+ customers across Newquay and Cornwall with consistently 5-star reviews.",
  },
];

export default function HomePage() {
  const mainFaqs = generalFaqs.slice(0, 8);

  const serviceListItems = services.map((s) => ({
    name: s.title,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://robswindowcleaning.co.uk"}/${s.slug}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(mainFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionPageSchema(
              "Exterior Cleaning Services Newquay Cornwall",
              "https://robswindowcleaning.co.uk/services",
              "Complete exterior cleaning services across Newquay and Cornwall — window cleaning, gutter cleaning, conservatory roof cleaning and more.",
              serviceListItems
            )
          ),
        }}
      />

      {/* Hero */}
      <Hero />

      {/* Services Section */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Services"
            title="Everything Your Property's Exterior Needs"
            description="From spotless windows to clear gutters and clean conservatory roofs — we provide a complete exterior cleaning service for homes and businesses across Cornwall."
            id="services-heading"
          />
          <ServiceCards services={services} />
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cornwall-Wide Hub Services */}
      <section className="py-10 bg-brand-50 border-y border-brand-100" aria-labelledby="cornwall-services-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-xs font-semibold text-brand-700 uppercase tracking-wider mb-5" id="cornwall-services-heading">
            County-Wide Coverage
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall", desc: "Pure water cleaning across all of Cornwall" },
              { label: "Gutter Cleaning Cornwall", href: "/gutter-cleaning-cornwall", desc: "Gutter clearance and drainage restoration" },
              { label: "Conservatory Cleaning Cornwall", href: "/conservatory-roof-cleaning-cornwall", desc: "Soft-wash algae removal for all roof types" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col gap-1 rounded-2xl border border-brand-200 bg-white px-5 py-4 hover:border-brand-400 hover:shadow-soft transition-all duration-200"
              >
                <span className="text-sm font-semibold text-brand-700">{item.label}</span>
                <span className="text-xs text-slate-500">{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50" aria-labelledby="why-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 mb-5">
                Why Choose Rob's
              </div>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5 text-balance">
                Newquay's Most Trusted Window Cleaning Service
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                Based in Newquay and serving all of North and Mid Cornwall, we've built a reputation for reliability, professionalism and outstanding results. Whether you're a homeowner wanting regular window cleans or a business needing a dependable commercial cleaning service, we deliver.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "No contracts required — cancel any time",
                  "Same reliable service every visit",
                  "Eco-friendly pure water cleaning",
                  "Covers Newquay and 15+ surrounding areas",
                  "Residential, commercial and holiday let specialists",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/free-quote" className="btn-primary">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  About Rob's Window Cleaning
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-slate-100" aria-label="Trust indicators">
        <div className="container mx-auto px-4 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50" aria-labelledby="reviews-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Customer Reviews"
            title="What Our Customers Say"
            description="Don't just take our word for it. Here's what real customers across Newquay and Cornwall say about our service."
            id="reviews-heading"
          />
          <TestimonialCarousel testimonials={testimonials} />
          <div className="mt-8 text-center">
            <Link href="/reviews" className="btn-secondary">
              Read All Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="section-padding bg-white" aria-labelledby="areas-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Areas We Cover"
            title="Window Cleaning Across Cornwall"
            description="Based in Newquay, we cover a wide area of North and Mid Cornwall. Find your area below or contact us to check coverage."
            id="areas-heading"
          />
          <LocationCards locations={locations} />
          <div className="mt-8 text-center">
            <Link href="/areas" className="btn-secondary">
              <MapPin className="h-4 w-4" />
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 mb-5">
                Common Questions
              </div>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                Got a question about our window cleaning or exterior cleaning services? Here are the answers to the most common questions we receive.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/free-quote" className="btn-primary">
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="btn-secondary"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <FAQAccordion faqs={mainFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-white" aria-labelledby="quote-heading" id="quote">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 mb-5">
                Free Quote
              </div>
              <h2 id="quote-heading" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5 text-balance">
                Get Your Free, No-Obligation Quote
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                Fill in the form and we'll get back to you within 2 hours during business hours with a competitive, transparent price for your property.
              </p>
              <div className="space-y-4">
                {[
                  "Free, no-obligation quotes",
                  "Response within 2 hours",
                  "Competitive, transparent pricing",
                  "No hidden charges",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center gap-3 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic mb-3">
                  "Extremely easy to deal with — got a quote same day and was on the round the following week. Rob's Window Cleaning is exactly the kind of reliable local service you hope to find."
                </p>
                <div className="text-sm font-semibold text-slate-800">David K. — Newquay</div>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
