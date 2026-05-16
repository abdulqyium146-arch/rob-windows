import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-bodmin";

export const metadata: Metadata = {
  title: "Window Cleaning Bodmin | Window Cleaner Bodmin Cornwall",
  description:
    "Professional window cleaning in Bodmin, Cornwall's county town. Serving homes and businesses across Bodmin and surrounding villages. Rated 4.9★. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning Bodmin", "window cleaner Bodmin", "window cleaning PL31", "window cleaning Cornwall"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
