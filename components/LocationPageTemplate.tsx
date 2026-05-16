import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, MapPin, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { testimonials } from "@/data/testimonials";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCards from "@/components/ServiceCards";
import LocationCards from "@/components/LocationCards";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import SectionHeader from "@/components/SectionHeader";
import type { Location } from "@/types";

interface LocationPageTemplateProps {
  location: Location;
}

export default function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const nearbyLocations = locations
    .filter((l) => l.id !== location.id)
    .slice(0, 8);

  const localTestimonials = testimonials
    .filter((t) =>
      t.location.toLowerCase().includes(location.name.toLowerCase()) ||
      location.nearbyAreas.some((area) => t.location.toLowerCase().includes(area.toLowerCase()))
    )
    .slice(0, 2);

  const allTestimonials = localTestimonials.length > 0 ? localTestimonials : testimonials.slice(0, 2);

  const pageUrl = `${siteConfig.url}/${location.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(location.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              `Window Cleaning ${location.name}`,
              `Professional window cleaning services in ${location.name}, ${location.county}. Residential and commercial window cleaning, gutter cleaning and exterior property maintenance.`,
              pageUrl
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
              { name: "Areas We Cover", url: `${siteConfig.url}/areas` },
              { name: `Window Cleaning ${location.name}`, url: pageUrl },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20" aria-labelledby="location-hero-heading">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-600/20 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs
            items={[
              { label: "Areas We Cover", href: "/areas" },
              { label: `Window Cleaning ${location.name}` },
            ]}
            className="mb-6 text-brand-300/60"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="badge badge-brand">
                <MapPin className="h-3 w-3 mr-1" />
                {location.name}, {location.county}
              </div>
            </div>
            <h1 id="location-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 text-balance">
              Window Cleaning in {location.name}, Cornwall
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed mb-8 max-w-2xl">
              {location.description} Professional window cleaning, gutter cleaning and exterior property maintenance — fully insured, reliable and rated 4.9★ by local customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-quote" className="btn-primary text-base px-7 py-4">
                Get a Free Quote in {location.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* About the area */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  Window Cleaning Services in {location.name}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Rob's Window Cleaning provides professional exterior cleaning services throughout {location.name} and the surrounding {location.county} area. We clean homes, bungalows, cottages, commercial properties and holiday accommodation — delivering streak-free results using pure water technology.
                </p>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  {location.county}'s coastal and rural environment means properties in {location.name} can develop algae, salt deposits and weathering faster than inland areas. Our regular cleaning schedule keeps your property looking its best all year round.
                </p>

                {/* Services checklist */}
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Services Available in {location.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {siteConfig.services.map((service) => (
                    <div key={service} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmarks / Local relevance */}
              <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Covering All of {location.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  We cover properties across {location.name}{location.postcode ? ` (${location.postcode})` : ""} including areas near:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.landmarks.map((landmark) => (
                    <span key={landmark} className="inline-flex items-center gap-1 rounded-lg bg-white border border-brand-100 px-3 py-1.5 text-xs font-medium text-brand-700">
                      <MapPin className="h-3 w-3" />
                      {landmark}
                    </span>
                  ))}
                </div>
                {location.nearbyAreas.length > 0 && (
                  <p className="text-sm text-slate-500">
                    We also cover nearby: {location.nearbyAreas.join(", ")}
                  </p>
                )}
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  What Customers in {location.name} Say
                </h2>
                <div className="space-y-4">
                  {allTestimonials.map((t) => (
                    <blockquote
                      key={t.id}
                      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      <div className="flex gap-0.5 mb-3">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed italic mb-3" itemProp="reviewBody">
                        "{t.text}"
                      </p>
                      <footer className="flex items-center justify-between">
                        <cite className="text-sm font-semibold text-slate-800 not-italic" itemProp="author">{t.name}</cite>
                        <span className="text-xs text-slate-400">{t.location}</span>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Window Cleaning in {location.name} — FAQ
                </h2>
                <FAQAccordion faqs={location.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Get a Free Quote in {location.name}
                </h3>
                <QuoteForm variant="card" />
                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Contact Us</h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium mb-2"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-slate-500">Mon–Fri 8am–6pm · Sat 8am–4pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge={`Services in ${location.name}`}
            title={`All Cleaning Services Available in ${location.name}`}
            description={`Explore our full range of exterior cleaning services available across ${location.name} and ${location.county}.`}
          />
          <ServiceCards services={services} columns={3} />
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Also Covering"
            title="Other Areas We Serve in Cornwall"
            description="Based in Newquay, we cover a wide area of North and Mid Cornwall."
          />
          <LocationCards locations={nearbyLocations} />
        </div>
      </section>
    </>
  );
}
