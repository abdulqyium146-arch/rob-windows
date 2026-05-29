import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Star, Facebook, Instagram, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceLinks = [
  { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall" },
  { label: "Gutter Cleaning Cornwall", href: "/gutter-cleaning-cornwall" },
  { label: "Conservatory Roof Cleaning Cornwall", href: "/conservatory-roof-cleaning-cornwall" },
  { label: "Fascia & Soffit Cleaning", href: "/fascia-soffit-cleaning-newquay" },
  { label: "UPVC Cleaning", href: "/upvc-cleaning-newquay" },
  { label: "Commercial Cleaning", href: "/commercial-window-cleaning-newquay" },
  { label: "Residential Cleaning", href: "/residential-window-cleaning-newquay" },
];

const areaLinks = [
  { label: "Newquay", href: "/window-cleaning-newquay" },
  { label: "Perranporth", href: "/window-cleaning-perranporth" },
  { label: "Truro", href: "/window-cleaning-truro" },
  { label: "Padstow", href: "/window-cleaning-padstow" },
  { label: "St Austell", href: "/window-cleaning-st-austell" },
  { label: "Wadebridge", href: "/window-cleaning-wadebridge" },
  { label: "Falmouth", href: "/window-cleaning-falmouth" },
  { label: "Redruth", href: "/window-cleaning-redruth" },
  { label: "Bodmin", href: "/window-cleaning-bodmin" },
  { label: "View All Areas →", href: "/areas" },
];

const guideLinks = [
  { label: "How Often Should Windows Be Cleaned?", href: "/blog/how-often-should-windows-be-cleaned-cornwall" },
  { label: "What Is Pure Water Cleaning?", href: "/blog/what-is-pure-water-window-cleaning" },
  { label: "Gutter Cleaning Guide Cornwall", href: "/blog/gutter-cleaning-guide-cornwall" },
  { label: "Conservatory Roof Cleaning Guide", href: "/blog/conservatory-roof-cleaning-guide" },
  { label: "Seasonal Window Cleaning Newquay", href: "/blog/window-cleaning-newquay-seasonal-guide" },
  { label: "Holiday Let Window Cleaning", href: "/blog/holiday-let-window-cleaning-cornwall" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300" aria-label="Site footer">
      {/* Top CTA band */}
      <div className="gradient-brand py-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready for sparkling clean windows?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Get your free, no-obligation quote today. Serving Newquay and all of North Cornwall.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 rounded-xl bg-white px-3 py-2" aria-label="Rob's Window Cleaning — Home">
              <div className="relative h-8 w-[80px] overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Rob's Window Cleaning — Newquay, Cornwall"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Professional window cleaning, gutter cleaning and exterior property cleaning across Newquay and Cornwall. Trusted, insured and reliable.
            </p>
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-xs text-slate-400">{siteConfig.rating.value}/5 ({siteConfig.rating.count} reviews)</span>
            </div>
            <div className="flex gap-3">
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-green-600 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-brand-600 hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-brand-600 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Areas We Cover</h3>
            <ul className="space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Guides */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Helpful Guides</h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-slate-300 hover:text-white transition-colors font-medium">
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Call or WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <span className="text-sm text-slate-400">
                  Newquay, Cornwall, UK
                  <br />
                  <span className="text-xs text-slate-500">Covering all of North & Mid Cornwall</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
                <div className="text-sm text-slate-400">
                  <p>Mon–Fri: 8am–6pm</p>
                  <p>Saturday: 8am–4pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Rob&apos;s Window Cleaning. All rights reserved. · Newquay, Cornwall.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/site-map" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Site Map</Link>
            <Link href="/sitemap.xml" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
