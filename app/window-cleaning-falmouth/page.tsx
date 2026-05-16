import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-falmouth";

export const metadata: Metadata = {
  title: "Window Cleaning Falmouth | Window Cleaner Falmouth Cornwall",
  description:
    "Expert window cleaning in Falmouth, Cornwall. Serving homes and businesses near Falmouth Harbour and Pendennis Castle. Rated 4.9★. Fully insured. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Falmouth", "window cleaner Falmouth", "window cleaning TR11", "harbour window cleaning Cornwall"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
