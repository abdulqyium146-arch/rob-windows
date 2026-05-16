import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const slug = "residential-window-cleaning-newquay";

export const metadata: Metadata = {
  title: "Residential Window Cleaning Newquay | House Window Cleaner Cornwall",
  description:
    "Trusted residential window cleaning in Newquay and Cornwall for homes, bungalows, flats and holiday lets. Regular scheduled rounds. Streak-free results. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["residential window cleaning Newquay", "house window cleaning Newquay", "window cleaner near me Newquay", "window cleaning Cornwall homes"],
};

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
