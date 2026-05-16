import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-truro";

export const metadata: Metadata = {
  title: "Window Cleaning Truro | Window Cleaner Truro Cornwall",
  description:
    "Professional window cleaning in Truro, Cornwall. Residential and commercial window cleaning in Cornwall's city. Rated 4.9★. Fully insured. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Truro", "window cleaner Truro", "commercial window cleaning Truro", "window cleaning TR1"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
