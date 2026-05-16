import type { Metadata } from "next";
import { CheckCircle2, Phone, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free Window Cleaning Quote | Rob's Window Cleaning Newquay",
  description:
    "Get a free, no-obligation window cleaning quote in Newquay, Cornwall. We respond within 2 hours. Competitive pricing, no hidden charges. Call or fill in our quote form.",
  alternates: { canonical: `${siteConfig.url}/free-quote` },
};

export default function FreeQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Free Quote", url: `${siteConfig.url}/free-quote` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Free Quote" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Free Quote</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Get Your Free, No-Obligation Quote
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              Fill in the form below and we'll get back to you with a competitive, transparent price — usually within 2 hours during business hours. No obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Quote form section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">What Happens Next</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit your request", desc: "Fill in the form with your details and the service you need." },
                    { step: "2", title: "We review your enquiry", desc: "We review your request and may call or text for any additional details." },
                    { step: "3", title: "Receive your quote", desc: "You receive a clear, itemised quote with no hidden charges within 2 hours." },
                    { step: "4", title: "You decide — no pressure", desc: "No obligation to proceed. If you're happy, we arrange your first visit." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 mb-0.5">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-slate-900 mb-4">Why Choose Rob's?</h3>
                <div className="space-y-2.5">
                  {[
                    "Rated 4.9★ by 127+ verified customers",
                    "£5m public liability insurance",
                    "10+ years experience in Cornwall",
                    "Pure water technology — streak-free results",
                    "No contract — cancel any time",
                    "Text reminder before every visit",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Got a quote within an hour and was booked in the following week. Absolutely brilliant — windows are sparkling and Rob is a pleasure to deal with."
                </p>
                <div className="text-xs font-semibold text-slate-700">— Sarah T., Newquay</div>
              </div>

              <div className="text-center border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-500 mb-3">Prefer to speak directly?</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:text-brand-700"
                >
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <QuoteForm variant="card" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
