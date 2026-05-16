import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-perranporth";

export const metadata: Metadata = {
  title: "Window Cleaning Perranporth | Window Cleaner Perranporth Cornwall",
  description:
    "Professional window cleaning in Perranporth, Cornwall. Serving homes and holiday lets near Perranporth Beach. Rated 4.9★. Fully insured. Free no-obligation quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Perranporth", "window cleaner Perranporth", "window cleaning TR6", "coastal window cleaning Cornwall"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
