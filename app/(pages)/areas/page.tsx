import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { locations } from "@/data/locations";
import LocationCards from "@/components/LocationCards";
import TrustBadges from "@/components/TrustBadges";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeader from "@/components/SectionHeader";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Cover | Window Cleaning Across Cornwall",
  description:
    "Rob's Window Cleaning covers Newquay and all of North and Mid Cornwall including Perranporth, Truro, Padstow, St Austell, Wadebridge, Falmouth, Redruth and more.",
  alternates: { canonical: `${siteConfig.url}/areas` },
};

const extendedAreas = [
  "Quintrell Downs", "Crantock", "Holywell Bay", "Cubert", "Mawgan Porth",
  "St Columb Road", "Goonhavern", "Indian Queens", "Mitchell", "Perranporth",
  "St Agnes", "Chacewater", "Portreath", "Hayle area", "Camborne",
];

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Areas We Cover", url: `${siteConfig.url}/areas` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Areas We Cover" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Service Area</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 text-balance">
              Window Cleaning Across Cornwall
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              Based in Newquay, we cover all of North and Mid Cornwall. From Perranporth to Truro, Padstow to Falmouth — if you're in Cornwall, we likely cover your area. Select your location below or contact us to confirm coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Main locations */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Main Locations"
            title="Towns & Cities We Serve"
            description="We provide regular window cleaning and exterior cleaning services in these towns across Cornwall."
          />
          <LocationCards locations={locations} />
        </div>
      </section>

      {/* Villages and extended coverage */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Villages & Rural"
            title="Villages & Surrounding Areas"
            description="We also cover many villages and rural properties across North and Mid Cornwall. Here are some of the additional areas we serve:"
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {extendedAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-soft"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">
            Don't see your area? <Link href="/contact" className="text-brand-600 hover:text-brand-700 font-medium">Contact us</Link> to check — we cover more than this list.
          </p>
        </div>
      </section>

      {/* Map placeholder + coverage info */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                Our Service Coverage Area
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-4">
                We cover a radius of approximately 30 miles from our base in Newquay, encompassing all of North Cornwall, much of Mid Cornwall and extending south towards Falmouth and Redruth.
              </p>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                This includes coastal towns, rural villages, holiday parks, farms and properties on the edge of Bodmin Moor. We're experienced with all types of property across the Cornish landscape.
              </p>
              <div className="space-y-3">
                {[
                  "North Cornwall coast — Newquay, Padstow, Perranporth",
                  "Mid Cornwall — Truro, St Austell, Bodmin",
                  "West Cornwall — Redruth, Camborne, Falmouth",
                  "Rural and farm properties across Cornwall",
                  "Holiday parks and static caravan parks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-brand-500 shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Not Sure If We Cover You?</h3>
              <p className="text-sm text-slate-500 mb-6">
                Simply call or send us a message with your postcode and we'll confirm whether we cover your area — usually within the hour.
              </p>
              <div className="space-y-3">
                <Link href="/free-quote" className="btn-primary w-full justify-center">
                  Request a Quote
                </Link>
                <Link href="/contact" className="btn-secondary w-full justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <TrustBadges />
        </div>
      </section>
    </>
  );
}
