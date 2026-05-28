import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Rob's Window Cleaning | Newquay, Cornwall",
  description:
    "Get in touch with Rob's Window Cleaning in Newquay, Cornwall. Call, email or fill in our contact form for a free no-obligation quote. We respond within 2 hours.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactDetails = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    detail: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    description: "Fastest way to reach us — we typically answer same day",
  },
  {
    icon: Mail,
    title: "Email",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "We aim to reply to all emails within 4 hours",
  },
  {
    icon: MapPin,
    title: "Based In",
    detail: "Newquay, Cornwall",
    href: undefined,
    description: "Covering all of North and Mid Cornwall",
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "Mon–Fri 8am–6pm, Sat 8am–4pm",
    href: undefined,
    description: "We're available outside these hours for urgent queries",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Contact", url: `${siteConfig.url}/contact` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Contact Us</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              Have a question or ready to book? We're friendly, responsive and happy to help. Get your free quote today — we'll respond within 2 hours during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">How to Reach Us</h2>
              <div className="space-y-5">
                {contactDetails.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors">
                          {item.detail}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-slate-900">{item.detail}</div>
                      )}
                      <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-green-100 bg-green-50 p-6 hover:bg-green-100 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-slate-900">WhatsApp Welcome</span>
                </div>
                <p className="text-sm text-slate-600">
                  Prefer to message? Tap to open WhatsApp — we read and reply to messages throughout the day.
                </p>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <QuoteForm variant="card" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
