import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const slug = "fascia-soffit-cleaning-newquay";

export const metadata: Metadata = {
  title: "Fascia & Soffit Cleaning Newquay | Roofline Cleaning Cornwall",
  description:
    "Professional fascia, soffit and roofline cleaning in Newquay, Cornwall. Restore white UPVC to a bright finish. Green algae and mould removed. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["fascia cleaning Newquay", "soffit cleaning Newquay", "roofline cleaning Cornwall", "UPVC roofline cleaning"],
};

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
