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
  title: "Conservatory Roof Cleaning Cornwall | Safe Specialist Service Across the County",
  description:
    "Professional conservatory roof cleaning across Cornwall. Algae, lichen and black streaks safely removed from polycarbonate, glass and solid roofs. Serving Newquay and all of Cornwall. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/conservatory-roof-cleaning-cornwall` },
  keywords: [
    "conservatory roof cleaning Cornwall",
    "conservatory cleaning Cornwall",
    "algae removal conservatory Cornwall",
    "polycarbonate roof cleaning Cornwall",
    "conservatory cleaning services Cornwall",
  ],
  openGraph: {
    title: "Conservatory Roof Cleaning Cornwall | Safe Specialist Service",
    description:
      "Professional conservatory roof cleaning across Cornwall. Soft-wash method — safe for all roof types. Free quotes.",
    url: `${siteConfig.url}/conservatory-roof-cleaning-cornwall`,
  },
};

const faqs = [
  {
    question: "Do you clean conservatory roofs across all of Cornwall?",
    answer:
      "Yes. We provide specialist conservatory roof cleaning across our Cornwall service area including Newquay, Truro, Falmouth, Padstow, Perranporth and all surrounding areas. Contact us to confirm coverage for your postcode.",
  },
  {
    question: "How much does conservatory roof cleaning cost in Cornwall?",
    answer:
      "Conservatory roof cleaning in Cornwall typically costs between £120 and £350 depending on the size and the level of algae growth. This includes all roof panels, gutters and UPVC frames. We provide free no-obligation quotes.",
  },
  {
    question: "Can you pressure wash a conservatory roof in Cornwall?",
    answer:
      "No — pressure washing polycarbonate panels causes cracking, destroys UV coatings and forces water past seals. We use a specialist soft-wash method that safely removes biological growth without damaging any roof type.",
  },
  {
    question: "How often does a conservatory roof need cleaning in Cornwall?",
    answer:
      "In Cornwall's damp maritime climate, most conservatory roofs develop visible algae growth within 12–18 months. We recommend professional cleaning every 1–2 years, with a biocide post-treatment to slow regrowth.",
  },
  {
    question: "Does Cornwall's climate make conservatory roofs get dirty faster?",
    answer:
      "Yes. Cornwall's year-round high humidity, mild temperatures and coastal salt air create near-perfect conditions for algae, lichen and mould growth. Conservatory roofs in Cornwall typically deteriorate faster than those in colder, drier regions of the UK.",
  },
];

const features = [
  "Soft-wash method — safe for polycarbonate, glass and solid roofs",
  "Green algae, black mould and lichen removed at root level",
  "Specialist biodegradable biocide — slows future regrowth",
  "UPVC frames, gutters and cills cleaned as standard",
  "No pressure washing — no cracked panels, no blown seals",
  "Before and after photographs provided",
  "Fully insured specialist team",
  "Free no-obligation quotes for all conservatory sizes",
];

const relatedGuides = [
  {
    title: "How to Clean a Conservatory Roof Safely",
    href: "/blog/conservatory-roof-cleaning-guide",
    desc: "Why Cornwall conservatories get dirty faster, and how professionals clean them without causing damage.",
  },
  {
    title: "How Often Should Windows Be Cleaned in Cornwall?",
    href: "/blog/how-often-should-windows-be-cleaned-cornwall",
    desc: "Cornwall's coastal climate and its impact on all exterior glazing including conservatories.",
  },
];

export default function ConservatoryRoofCleaningCornwallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Conservatory Roof Cleaning Cornwall",
              "Specialist conservatory roof cleaning across Cornwall using soft-wash methods. Safe for polycarbonate, glass and solid roofs.",
              `${siteConfig.url}/conservatory-roof-cleaning-cornwall`,
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
              {
                name: "Conservatory Roof Cleaning Cornwall",
                url: `${siteConfig.url}/conservatory-roof-cleaning-cornwall`,
              },
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
              { label: "Conservatory Roof Cleaning Cornwall" },
            ]}
            className="mb-6 text-brand-300/60"
          />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Cornwall-Wide Service</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
              Conservatory Roof Cleaning Across Cornwall
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed mb-8">
              Cornwall&apos;s mild, damp climate makes conservatory roofs one of the fastest-deteriorating
              surfaces on any property. We safely remove algae, lichen and black streaking from
              polycarbonate, glass and solid conservatory roofs across the county — restoring light,
              appearance and performance without damage.
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
                Specialist Soft-Wash Cleaning for Every Conservatory Type
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                Cornwall&apos;s year-round humidity and mild temperatures create ideal conditions for algae,
                black mould and lichen to colonise conservatory roofs. Without treatment, this biological
                growth reduces light transmission, degrades roof panels and causes permanent staining.
              </p>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                Our specialist soft-wash process uses a biodegradable biocide to kill growth at the root,
                followed by low-pressure pure water rinsing. This is the only safe method for polycarbonate
                panels — pressure washing causes cracking and voided warranties. Our biocide post-treatment
                significantly slows future regrowth.
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
              Conservatory Cleaning Locations Across Cornwall
            </h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">
              We provide conservatory roof cleaning across Cornwall. Click your area to find out more about
              all exterior cleaning services available near you.
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
            Related Exterior Cleaning Services Across Cornwall
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services
              .filter((s) => s.id !== "conservatory-roof-cleaning")
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
              href="/gutter-cleaning-cornwall"
              className="text-brand-600 hover:text-brand-700 font-medium"
            >
              gutter cleaning across Cornwall
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Conservatory Cleaning Guides for Cornwall
          </h2>
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
            Conservatory Roof Cleaning Cornwall — FAQ
          </h2>
          <FAQAccordion faqs={faqs} />
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/free-quote" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/conservatory-roof-cleaning-newquay" className="btn-secondary">
              Conservatory Cleaning Newquay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
