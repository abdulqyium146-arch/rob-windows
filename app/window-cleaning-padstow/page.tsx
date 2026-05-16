import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-padstow";

export const metadata: Metadata = {
  title: "Window Cleaning Padstow | Window Cleaner Padstow Cornwall",
  description:
    "Professional window cleaning in Padstow, Cornwall. Serving homes, holiday lets and businesses near Padstow Harbour. Rated 4.9★. Fully insured. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Padstow", "window cleaner Padstow", "holiday let window cleaning Padstow", "window cleaning PL28"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
