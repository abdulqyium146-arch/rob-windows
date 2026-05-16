import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const slug = "conservatory-roof-cleaning-newquay";

export const metadata: Metadata = {
  title: "Conservatory Roof Cleaning Newquay | Cornwall",
  description:
    "Specialist conservatory roof cleaning in Newquay, Cornwall. Green algae, black streaks and moss removed safely. Polycarbonate and glass roofs. Free quotes.",
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  keywords: ["conservatory roof cleaning Newquay", "conservatory cleaning Cornwall", "algae removal conservatory", "polycarbonate roof cleaning"],
};

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
