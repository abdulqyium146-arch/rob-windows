import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/config/site";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const slug = "window-cleaning-st-columb-major";

export const metadata: Metadata = {
  title: "Window Cleaning St Columb Major | Window Cleaner Cornwall",
  description:
    "Professional window cleaning in St Columb Major, Cornwall. Serving the market town and surrounding rural villages. Rated 4.9★. Fully insured. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["window cleaning St Columb Major", "window cleaner St Columb Major", "window cleaning TR9"],
};

export default function Page() {
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
