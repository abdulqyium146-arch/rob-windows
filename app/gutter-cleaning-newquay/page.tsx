import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const slug = "gutter-cleaning-newquay";

export const metadata: Metadata = {
  title: "Gutter Cleaning Newquay | Gutter Clearance Cornwall",
  description:
    "Professional gutter cleaning and clearance in Newquay, Cornwall. Prevent damp, leaks and water damage. Vacuum gutter cleaning. Before & after photos. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["gutter cleaning Newquay", "gutter clearance Newquay", "blocked gutters Cornwall", "gutter cleaning TR7"],
};

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
