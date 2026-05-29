import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqSchema, serviceSchema, breadcrumbSchema, serviceOfferSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCards from "@/components/ServiceCards";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import SectionHeader from "@/components/SectionHeader";
import type { Service } from "@/types";

interface ServicePageTemplateProps {
  service: Service;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const serviceTestimonials = testimonials
    .filter((t) => t.service.toLowerCase().includes(service.title.toLowerCase().split(" ")[0]))
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              service.title,
              service.description,
              `${siteConfig.url}/${service.slug}`
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
              { name: service.title, url: `${siteConfig.url}/${service.slug}` },
            ])
          ),
        }}
      />
      {service.price && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              serviceOfferSchema(
                service.title,
                service.description,
                `${siteConfig.url}/${service.slug}`,
                service.price
              )
            ),
          }}
        />
      )}

      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20" aria-labelledby="service-hero-heading">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-600/20 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
            className="mb-6 text-brand-300/60"
          />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Newquay, Cornwall</div>
            <h1 id="service-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 text-balance">
              {service.title} in Newquay, Cornwall
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed mb-8 max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-quote" className="btn-primary text-base px-7 py-4">
                Get a Free Quote
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
            {/* Content column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  What's Included in Our {service.title} Service
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              {service.price && (
                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    How Much Does {service.title} Cost in Newquay?
                  </h2>
                  <p className="text-base font-semibold text-brand-700 mb-3">{service.price}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    All prices are subject to a free on-site or telephone assessment. We provide transparent, no-hidden-charges quotes with no obligation to proceed.
                  </p>
                </div>
              )}

              {/* Social proof */}
              {serviceTestimonials.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    What Customers Say About Our {service.title} Service
                  </h2>
                  <div className="space-y-4">
                    {serviceTestimonials.map((t) => (
                      <blockquote
                        key={t.id}
                        className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
                      >
                        <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
                          ))}
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed italic mb-3">
                          &ldquo;{t.text}&rdquo;
                        </p>
                        <footer className="flex items-center justify-between">
                          <cite className="text-sm font-semibold text-slate-800 not-italic">{t.name}</cite>
                          <span className="text-xs text-slate-400">{t.location}</span>
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {service.title} FAQs
                </h2>
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24">
                <QuoteForm variant="card" />
                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Get in Touch</h3>
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

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Also Available"
            title="Other Services We Offer"
            description="Combine services for the best value and keep your entire property exterior looking its best."
          />
          <ServiceCards services={relatedServices} columns={3} />
        </div>
      </section>

      {/* Cornwall-Wide Hub Links */}
      <section className="py-10 bg-brand-50 border-t border-brand-100">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs font-semibold text-brand-700 uppercase tracking-wider mb-4">County-Wide Services</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall" },
              { label: "Gutter Cleaning Cornwall", href: "/gutter-cleaning-cornwall" },
              { label: "Conservatory Roof Cleaning Cornwall", href: "/conservatory-roof-cleaning-cornwall" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm font-semibold text-brand-700 hover:border-brand-400 transition-colors"
              >
                {item.label}
                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
