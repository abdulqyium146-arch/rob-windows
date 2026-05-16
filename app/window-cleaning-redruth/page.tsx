import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-redruth";

export const metadata: Metadata = {
  title: "Window Cleaning Redruth | Window Cleaner Redruth Cornwall",
  description:
    "Professional window cleaning in Redruth, Cornwall. Serving homes and businesses across Redruth, Pool and Illogan. Rated 4.9★. Fully insured. Free no-obligation quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Redruth", "window cleaner Redruth", "window cleaning TR15", "window cleaning Camborne area"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
