import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Gutter Cleaning Cornwall | Professional Gutter Clearance Across the County",
  description:
    "Professional gutter cleaning and clearance services across Cornwall. Blocked gutters cause damp and structural damage. Serving Newquay, Truro, Falmouth and all of Cornwall. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/gutter-cleaning-cornwall` },
  keywords: [
    "gutter cleaning Cornwall",
    "gutter clearance Cornwall",
    "gutter cleaning services Cornwall",
    "blocked gutters Cornwall",
    "professional gutter cleaning Cornwall",
  ],
  openGraph: {
    title: "Gutter Cleaning Cornwall | Professional Gutter Clearance Across the County",
    description:
      "Expert gutter cleaning and clearance across Cornwall. Prevent damp and water damage. Free no-obligation quotes.",
    url: `${siteConfig.url}/gutter-cleaning-cornwall`,
  },
};

const faqs = [
  {
    question: "Do you clean gutters across all of Cornwall?",
    answer:
      "Yes. We provide professional gutter cleaning across our Cornwall service area, including Newquay, Truro, Falmouth, Padstow, Perranporth, Wadebridge, Bodmin, Redruth, St Austell and surrounding villages. Contact us to confirm availability for your postcode.",
  },
  {
    question: "How often should gutters be cleaned in Cornwall?",
    answer:
      "Most properties in Cornwall benefit from gutter cleaning at least twice a year — in late autumn after leaf fall, and in spring after winter storms. Properties near dense tree cover or in exposed coastal locations may need quarterly clearing.",
  },
  {
    question: "What does gutter cleaning cost in Cornwall?",
    answer:
      "Gutter cleaning in Cornwall typically costs from £50 for a small terraced property, rising to £70–£150 for semi-detached and detached homes. We provide free no-obligation quotes for all properties.",
  },
  {
    question: "Do you clean gutters on two-storey properties in Cornwall?",
    answer:
      "Yes. We use high-reach vacuum systems and extended poles that safely clean gutters on two and three-storey properties without ladders in most cases. This is safer and avoids damage to fascias and gutters.",
  },
  {
    question: "Can blocked gutters cause damp inside my Cornwall home?",
    answer:
      "Yes — this is one of the most common causes of damp in Cornish properties. Overflowing gutters saturate exterior brickwork, allowing moisture to penetrate internal walls. Regular gutter cleaning is the most cost-effective way to prevent damp.",
  },
];

const features = [
  "Full debris clearance — leaves, moss, lichen and silt removed",
  "Downpipe flushing to confirm clear drainage",
  "Gutter condition inspection and report",
  "Before and after photographs provided",
  "Debris removed and disposed of — not left on site",
  "High-reach vacuum systems — safe from ground level",
  "Gutter guard fitting available to slow future blockage",
  "£5 million public liability insurance on every job",
];

const relatedGuides = [
  {
    title: "The Complete Guide to Gutter Cleaning in Cornwall",
    href: "/blog/gutter-cleaning-guide-cornwall",
    desc: "When to clean, what's involved and how to spot the early warning signs of blocked gutters.",
  },
  {
    title: "How Often Should Windows Be Cleaned in Cornwall?",
    href: "/blog/how-often-should-windows-be-cleaned-cornwall",
    desc: "Cornwall's coastal climate and its impact on exterior property maintenance.",
  },
];

export default function GutterCleaningCornwallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Gutter Cleaning Cornwall",
              "Professional gutter cleaning and clearance services across Cornwall. Serving Newquay, Truro, Falmouth, Padstow and all surrounding areas.",
              `${siteConfig.url}/gutter-cleaning-cornwall`,
              siteConfig.areaServed
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Services", url: `${siteConfig.url}/services` },
              { name: "Gutter Cleaning Cornwall", url: `${siteConfig.url}/gutter-cleaning-cornwall` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Gutter Cleaning Cornwall" },
            ]}
            className="mb-6 text-brand-300/60"
          />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Cornwall-Wide Service</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
              Professional Gutter Cleaning Across Cornwall
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed mb-8">
              Blocked gutters are one of the leading causes of damp and structural damage in Cornish
              properties. We clear gutters safely and thoroughly across Cornwall — leaving your drainage
              fully restored and your property protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-quote" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-secondary-light">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="badge badge-slate mb-4">What&apos;s Included</div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6 text-balance">
                Thorough Gutter Clearance — Protecting Cornwall Properties
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                Cornwall&apos;s combination of mature trees, Atlantic storms and high rainfall makes gutters
                block faster than almost anywhere else in the UK. Leaf fall, moss, lichen and wind-blown
                debris pack gutters within months. Our professional clearance service restores full drainage
                capacity and includes a condition inspection so you know exactly what state your gutters are in.
              </p>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                We serve residential and commercial properties across Cornwall, from terraced cottages to
                large detached homes and commercial premises. All work is fully insured with £5 million
                public liability cover.
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:sticky lg:top-24">
              <QuoteForm variant="card" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-slate-50" aria-labelledby="areas-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="areas-heading" className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Gutter Cleaning Locations Across Cornwall
            </h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">
              We provide gutter cleaning services across our Cornwall coverage area. Click your location to
              find out more about window and exterior cleaning services near you.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                href={`/${loc.slug}`}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white p-4 text-center hover:border-brand-200 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <MapPin className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-700 transition-colors">
                  {loc.name}
                </span>
                <span className="text-xs text-slate-400">{loc.postcode}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white" aria-labelledby="related-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="related-heading" className="text-2xl font-bold text-slate-900 mb-8">
            Other Exterior Cleaning Services We Offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services
              .filter((s) => s.id !== "gutter-cleaning")
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s.id}
                  href={`/${s.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:border-brand-100 hover:bg-brand-50 transition-all"
                >
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-700 transition-colors mb-1">
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-2">{s.shortDescription}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-brand-500 shrink-0 mt-0.5 transition-colors" />
                </Link>
              ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            We also offer{" "}
            <Link href="/window-cleaning-cornwall" className="text-brand-600 hover:text-brand-700 font-medium">
              window cleaning across Cornwall
            </Link>{" "}
            and{" "}
            <Link
              href="/conservatory-roof-cleaning-cornwall"
              className="text-brand-600 hover:text-brand-700 font-medium"
            >
              conservatory roof cleaning across Cornwall
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Helpful Gutter Cleaning Guides</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {relatedGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <BookOpen className="h-5 w-5 text-brand-500" />
                <div className="text-base font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                  {g.title}
                </div>
                <div className="text-sm text-slate-500">{g.desc}</div>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                  Read guide <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 mb-8">
            Gutter Cleaning Cornwall — Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/free-quote" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/gutter-cleaning-newquay" className="btn-secondary">
              Gutter Cleaning Newquay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
