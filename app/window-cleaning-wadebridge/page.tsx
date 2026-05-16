import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-wadebridge";

export const metadata: Metadata = {
  title: "Window Cleaning Wadebridge | Window Cleaner Wadebridge Cornwall",
  description:
    "Professional window cleaning in Wadebridge, Cornwall. Serving homes and businesses in the Camel Valley town. Rated 4.9★. Fully insured. Free no-obligation quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Wadebridge", "window cleaner Wadebridge", "window cleaning PL27", "window cleaning Camel Valley"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
