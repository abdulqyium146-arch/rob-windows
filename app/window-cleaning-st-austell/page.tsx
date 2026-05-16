import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-st-austell";

export const metadata: Metadata = {
  title: "Window Cleaning St Austell | Window Cleaner St Austell Cornwall",
  description:
    "Professional window cleaning in St Austell, Cornwall. Residential and commercial window cleaning across St Austell and surrounding villages. Rated 4.9★. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning St Austell", "window cleaner St Austell", "window cleaning PL25", "window cleaning Cornwall"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
