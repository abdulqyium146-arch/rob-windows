import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const slug = "window-cleaning-newquay";

export const metadata: Metadata = {
  title: "Window Cleaning Newquay | Professional Window Cleaner Cornwall",
  description:
    "Expert window cleaning in Newquay, Cornwall. Pure water technology, streak-free results. Residential and commercial window cleaning. Rated 4.9★. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Newquay", "window cleaner Newquay", "pure water window cleaning Cornwall", "residential window cleaning Newquay", "window cleaning TR7"],
};

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
