import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const url = siteConfig.url;

const blogPosts = [
  { slug: "how-often-should-windows-be-cleaned-cornwall", date: "2025-04-01" },
  { slug: "what-is-pure-water-window-cleaning", date: "2025-03-15" },
  { slug: "gutter-cleaning-guide-cornwall", date: "2025-03-01" },
  { slug: "conservatory-roof-cleaning-guide", date: "2025-02-15" },
  { slug: "window-cleaning-newquay-seasonal-guide", date: "2025-01-20" },
  { slug: "holiday-let-window-cleaning-cornwall", date: "2025-01-05" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url, lastModified: new Date("2025-05-01"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${url}/about`, lastModified: new Date("2025-05-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${url}/services`, lastModified: new Date("2025-05-01"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${url}/areas`, lastModified: new Date("2025-05-01"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${url}/reviews`, lastModified: new Date("2025-05-01"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${url}/contact`, lastModified: new Date("2025-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${url}/free-quote`, lastModified: new Date("2025-05-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${url}/blog`, lastModified: new Date("2025-04-01"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${url}/site-map`, lastModified: new Date("2025-05-01"), changeFrequency: "monthly", priority: 0.4 },
    // Cornwall hub pages — county-level authority targets
    { url: `${url}/window-cleaning-cornwall`, lastModified: new Date("2025-05-01"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${url}/gutter-cleaning-cornwall`, lastModified: new Date("2025-05-01"), changeFrequency: "monthly", priority: 0.95 },
    { url: `${url}/conservatory-roof-cleaning-cornwall`, lastModified: new Date("2025-05-01"), changeFrequency: "monthly", priority: 0.95 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${url}/${s.slug}`,
    lastModified: new Date("2025-05-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Exclude Newquay: its slug "window-cleaning-newquay" is already emitted by servicePages above,
  // so including it here would create a duplicate URL in the sitemap.
  const locationPages: MetadataRoute.Sitemap = locations
    .filter((l) => l.id !== "newquay")
    .map((l) => ({
      url: `${url}/${l.slug}`,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
