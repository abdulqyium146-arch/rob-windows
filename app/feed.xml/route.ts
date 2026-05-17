import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const posts = [
  {
    slug: "how-often-should-windows-be-cleaned-cornwall",
    title: "How Often Should Windows Be Cleaned in Cornwall?",
    description:
      "Cornwall's coastal climate means windows need more frequent cleaning than the national average. We explain why and how to determine the right schedule for your property.",
    date: "2025-04-01",
  },
  {
    slug: "what-is-pure-water-window-cleaning",
    title: "What Is Pure Water Window Cleaning? The Complete Guide",
    description:
      "Pure water window cleaning delivers better results than traditional methods. We explain exactly how the technology works and why it's better for your windows.",
    date: "2025-03-15",
  },
  {
    slug: "gutter-cleaning-guide-cornwall",
    title: "The Complete Guide to Gutter Cleaning in Cornwall",
    description:
      "Blocked gutters cause damp, leaks and structural damage. Our complete guide covers when to clean gutters, what's involved and how to spot the warning signs.",
    date: "2025-03-01",
  },
  {
    slug: "conservatory-roof-cleaning-guide",
    title: "How to Clean a Conservatory Roof Safely",
    description:
      "Green algae and black streaking on conservatory roofs is a common problem in Cornwall. Learn why it happens, what not to do, and how professionals approach the cleaning.",
    date: "2025-02-15",
  },
  {
    slug: "window-cleaning-newquay-seasonal-guide",
    title: "Seasonal Window Cleaning Guide for Newquay Homeowners",
    description:
      "Each season brings different challenges for windows in Newquay. Our seasonal guide helps you know exactly when and why to book professional window cleaning.",
    date: "2025-01-20",
  },
  {
    slug: "holiday-let-window-cleaning-cornwall",
    title: "Window Cleaning for Holiday Lets in Cornwall: Everything Owners Need to Know",
    description:
      "Holiday let owners in Cornwall face unique cleaning challenges. We explain how to set up a reliable cleaning schedule that works around guest changeovers.",
    date: "2025-01-05",
  },
];

export function GET() {
  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.name} Blog]]></title>
    <link>${siteConfig.url}/blog</link>
    <description><![CDATA[Expert window cleaning tips, gutter guides and exterior property maintenance advice from Cornwall's trusted local specialists.]]></description>
    <language>en-GB</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteConfig.url}/images/og-image.jpg</url>
      <title><![CDATA[${siteConfig.name}]]></title>
      <link>${siteConfig.url}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
