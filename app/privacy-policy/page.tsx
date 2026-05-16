import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Rob's Window Cleaning",
  description: "Privacy policy for Rob's Window Cleaning — how we collect, use and protect your personal data.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container-tight mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last updated: January 2025</p>
        <div className="prose prose-slate max-w-none">
          <h2>1. Who We Are</h2>
          <p>Rob's Window Cleaning is a local business based in Newquay, Cornwall, UK. We provide window cleaning and exterior property cleaning services across Cornwall.</p>
          <h2>2. Data We Collect</h2>
          <p>When you contact us or request a quote, we collect: your name, phone number, email address, property address, and any information you provide in messages. We do not collect payment card data through our website.</p>
          <h2>3. How We Use Your Data</h2>
          <p>We use your data solely to respond to your enquiry, provide quotes, and manage your account as a customer. We do not sell, share or rent your data to third parties.</p>
          <h2>4. Data Retention</h2>
          <p>We retain customer records for the duration of our business relationship and for up to 7 years thereafter for legal and accounting purposes.</p>
          <h2>5. Your Rights</h2>
          <p>You have the right to access, rectify or erase your personal data. To exercise these rights, contact us at {siteConfig.email}.</p>
          <h2>6. Cookies</h2>
          <p>This website uses minimal cookies necessary for the website to function. We do not use tracking or advertising cookies without consent.</p>
          <h2>7. Contact</h2>
          <p>For privacy enquiries: {siteConfig.email} or {siteConfig.phone}.</p>
        </div>
      </div>
    </div>
  );
}
