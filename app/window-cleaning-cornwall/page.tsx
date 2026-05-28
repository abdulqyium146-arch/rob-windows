import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Star, Sparkles, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Window Cleaning Cornwall | Professional Service Across the County",
  description:
    "Professional window cleaning services across Cornwall. Serving Newquay, Truro, Falmouth, Padstow, Perranporth and 15+ locations. Fully insured, pure water technology. Free no-obligation quotes.",
  alternates: { canonical: `${siteConfig.url}/window-cleaning-cornwall` },
  keywords: [
    "window cleaning Cornwall",
    "window cleaner Cornwall",
    "window cleaning services Cornwall",
    "professional window cleaning Cornwall",
    "window cleaners Cornwall",
  ],
  openGraph: {
    title: "Window Cleaning Cornwall | Professional Service Across the County",
    description:
      "Professional window cleaning services across Cornwall. Fully insured, pure water technology. Free no-obligation quotes.",
    url: `${siteConfig.url}/window-cleaning-cornwall`,
  },
};

const faqs = [
  {
    question: "Do you cover the whole of Cornwall for window cleaning?",
    answer:
      "Yes. We cover a wide area of Cornwall from our base in Newquay, including Truro, Falmouth, Padstow, Perranporth, St Austell, Wadebridge, Redruth, Bodmin, St Columb Major and all surrounding villages. Contact us to confirm coverage for your specific postcode.",
  },
  {
    question: "How often should windows be cleaned in Cornwall?",
    answer:
      "Due to Cornwall's coastal climate and salt air, we recommend window cleaning every 4–6 weeks for coastal properties and every 6–8 weeks for inland properties. Salt deposits build up quickly near the coast and will etch glass permanently if left untreated.",
  },
  {
    question: "What does window cleaning cost in Cornwall?",
    answer:
      "Window cleaning in Cornwall starts from £10 per visit for small residential properties, rising to £25+ for larger detached homes. Commercial window cleaning is priced on application. We provide free, no-obligation quotes for all properties across Cornwall.",
  },
  {
    question: "Do you use pure water window cleaning across Cornwall?",
    answer:
      "Yes. We use professional pure water fed pole systems throughout Cornwall. Pure water is filtered to zero dissolved solids, which means it leaves no mineral residue when it dries — giving a streak-free, spot-free finish on every visit.",
  },
  {
    question: "Can you set up a regular window cleaning round anywhere in Cornwall?",
    answer:
      "Yes. We operate regular scheduled rounds across our coverage area in Cornwall. We offer 4-weekly, 6-weekly and 8-weekly schedules with a text reminder the day before each visit. No contracts — you can pause or cancel at any time.",
  },
];

const relatedServices = services.filter((s) =>
  ["window-cleaning", "commercial-window-cleaning", "residential-window-cleaning"].includes(s.id)
);

const relatedGuides = [
  {
    title: "How Often Should Windows Be Cleaned in Cornwall?",
    href: "/blog/how-often-should-windows-be-cleaned-cornwall",
    desc: "Cornwall's coastal climate means more frequent cleaning than the national average.",
  },
  {
    title: "What Is Pure Water Window Cleaning?",
    href: "/blog/what-is-pure-water-window-cleaning",
    desc: "How pure water technology delivers a streak-free finish every time.",
  },
  {
    title: "Seasonal Window Cleaning Guide for Newquay Homeowners",
    href: "/blog/window-cleaning-newquay-seasonal-guide",
    desc: "What each season means for your windows and when to book.",
  },
  {
    title: "Window Cleaning for Holiday Lets in Cornwall",
    href: "/blog/holiday-let-window-cleaning-cornwall",
    desc: "How holiday let owners can set up a schedule that works around changeovers.",
  },
];

const features = [
  "Pure water fed pole system — streak-free results every time",
  "Reaches second and third-floor windows safely from the ground",
  "Frames, sills and reveals cleaned as standard",
  "Interior window cleaning available on request",
  "Regular 4-weekly, 6-weekly and 8-weekly scheduled rounds",
  "Text reminder the day before every visit",
  "No contracts — pause or cancel at any time",
  "£5 million public liability insurance on every job",
];

export default function WindowCleaningCornwallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Window Cleaning Cornwall",
              "Professional window cleaning services across Cornwall using pure water technology. Covering Newquay, Truro, Falmouth, Padstow and 15+ locations.",
              `${siteConfig.url}/window-cleaning-cornwall`,
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
              { name: "Window Cleaning Cornwall", url: `${siteConfig.url}/window-cleaning-cornwall` },
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
              { label: "Window Cleaning Cornwall" },
            ]}
            className="mb-6 text-brand-300/60"
          />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Cornwall-Wide Service</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
              Professional Window Cleaning Across Cornwall
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed mb-8">
              Based in Newquay, we provide professional window cleaning services to homes and businesses
              across Cornwall. Pure water technology, fully insured, and available on a regular schedule
              that suits you — with no contracts required.
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
                Complete Window Cleaning Service for Cornwall Homes &amp; Businesses
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                Cornwall&apos;s coastal environment is one of the harshest in the UK for windows. Salt air from
                the Atlantic deposits on glass within days, causing streaking, hazing and — if left untreated
                — permanent etching. Our pure water fed pole system removes salt, grime and algae completely,
                leaving a streak-free finish that stays cleaner for longer.
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

      {/* Areas Grid */}
      <section className="section-padding bg-slate-50" aria-labelledby="areas-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <div className="badge badge-slate mb-4">Coverage Map</div>
            <h2 id="areas-heading" className="text-3xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
              Window Cleaning Locations Across Cornwall
            </h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">
              We cover a wide area of Cornwall from our Newquay base. Click your area to learn more about
              window cleaning services near you.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.id}
                href={`/${loc.slug}`}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white p-4 text-center hover:border-brand-200 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <MapPin className="h-5 w-5 text-brand-500 group-hover:text-brand-600 transition-colors" />
                <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-700 transition-colors">
                  {loc.name}
                </span>
                <span className="text-xs text-slate-400">{loc.postcode}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Not seeing your area?{" "}
            <Link href="/contact" className="text-brand-600 hover:text-brand-700 font-medium">
              Contact us to check coverage
            </Link>{" "}
            — we cover many villages and rural properties not listed above.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white" aria-labelledby="related-services-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="related-services-heading" className="text-2xl font-bold text-slate-900 mb-8">
            Related Cleaning Services Across Cornwall
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services
              .filter((s) => !["window-cleaning"].includes(s.id))
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s.id}
                  href={`/${s.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:border-brand-100 hover:bg-brand-50 transition-all duration-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 text-brand-600 group-hover:border-brand-200 transition-colors">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-700 transition-colors mb-1">
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {s.shortDescription}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Blog Guides */}
      <section className="section-padding bg-slate-50" aria-labelledby="guides-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="guides-heading" className="text-2xl font-bold text-slate-900 mb-8">
            Helpful Window Cleaning Guides for Cornwall
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <BookOpen className="h-5 w-5 text-brand-500" />
                <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug">
                  {g.title}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">{g.desc}</div>
                <div className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "500+", label: "Cornwall customers" },
              { stat: "4.9★", label: "Average review score" },
              { stat: "10+", label: "Years serving Cornwall" },
              { stat: "£5m", label: "Public liability cover" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold text-brand-600 mb-1">{item.stat}</div>
                <div className="text-xs text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 mb-8">
              Window Cleaning Cornwall — Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Rating */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-6 w-6 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-2xl font-bold text-slate-900 mb-2">
            Rated {siteConfig.rating.value}/5 by {siteConfig.rating.count}+ Cornwall customers
          </p>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">
            Trusted by homes and businesses across Cornwall for reliable, streak-free window cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/free-quote" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/reviews" className="btn-secondary">
              Read Customer Reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
