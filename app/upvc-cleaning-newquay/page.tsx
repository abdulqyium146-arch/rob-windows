import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const slug = "upvc-cleaning-newquay";

export const metadata: Metadata = {
  title: "UPVC Cleaning Newquay | UPVC Window & Door Cleaning Cornwall",
  description:
    "Expert UPVC cleaning in Newquay, Cornwall. Windows, doors, frames and cladding restored to a bright finish. Algae and mould removed. Safe cleaning. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["UPVC cleaning Newquay", "UPVC window cleaning Cornwall", "UPVC restoration Newquay"],
};

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
