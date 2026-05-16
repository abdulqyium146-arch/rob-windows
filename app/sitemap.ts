import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const url = siteConfig.url;

const blogSlugs = [
  "how-often-should-windows-be-cleaned-cornwall",
  "what-is-pure-water-window-cleaning",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${url}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${url}/areas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${url}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${url}/free-quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${url}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${url}/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
