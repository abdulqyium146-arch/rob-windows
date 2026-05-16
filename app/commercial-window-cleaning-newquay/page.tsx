import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const slug = "commercial-window-cleaning-newquay";

export const metadata: Metadata = {
  title: "Commercial Window Cleaning Newquay | Business Window Cleaner Cornwall",
  description:
    "Professional commercial window cleaning in Newquay, Cornwall for shops, offices, hotels, restaurants and business premises. Scheduled contracts. Fully insured. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["commercial window cleaning Newquay", "business window cleaning Cornwall", "office window cleaning Newquay", "hotel window cleaning Cornwall"],
};

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
