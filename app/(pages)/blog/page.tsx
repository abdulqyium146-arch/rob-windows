import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, blogListingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Cleaning Blog | Tips & Guides from Rob's Window Cleaning Cornwall",
  description:
    "Expert window cleaning tips, gutter maintenance guides, conservatory care advice and local property maintenance guides from Rob's Window Cleaning in Newquay, Cornwall.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

const blogPosts = [
  {
    slug: "how-often-should-windows-be-cleaned-cornwall",
    title: "How Often Should Windows Be Cleaned in Cornwall?",
    description: "Cornwall's coastal climate means windows need more frequent cleaning than the national average. We explain why and how to determine the right schedule for your property.",
    date: "2025-04-01",
    readTime: "4 min read",
    category: "Window Cleaning",
    tags: ["window cleaning", "Cornwall", "coastal properties", "cleaning schedule"],
  },
  {
    slug: "what-is-pure-water-window-cleaning",
    title: "What Is Pure Water Window Cleaning? The Complete Guide",
    description: "Pure water window cleaning delivers better results than traditional methods. We explain exactly how the technology works and why it's better for your windows.",
    date: "2025-03-15",
    readTime: "5 min read",
    category: "Window Cleaning",
    tags: ["pure water", "window cleaning technology", "streak-free windows"],
  },
  {
    slug: "gutter-cleaning-guide-cornwall",
    title: "The Complete Guide to Gutter Cleaning in Cornwall",
    description: "Blocked gutters cause damp, leaks and structural damage. Our complete guide covers when to clean gutters, what's involved and how to spot the warning signs.",
    date: "2025-03-01",
    readTime: "6 min read",
    category: "Gutter Cleaning",
    tags: ["gutter cleaning", "Cornwall", "property maintenance", "damp prevention"],
  },
  {
    slug: "conservatory-roof-cleaning-guide",
    title: "How to Clean a Conservatory Roof Safely",
    description: "Green algae and black streaking on conservatory roofs is a common problem in Cornwall. Learn why it happens, what not to do, and how professionals approach the cleaning.",
    date: "2025-02-15",
    readTime: "5 min read",
    category: "Conservatory",
    tags: ["conservatory cleaning", "roof algae", "Cornwall", "soft wash"],
  },
  {
    slug: "window-cleaning-newquay-seasonal-guide",
    title: "Seasonal Window Cleaning Guide for Newquay Homeowners",
    description: "Each season brings different challenges for windows in Newquay. Our seasonal guide helps you know exactly when and why to book professional window cleaning.",
    date: "2025-01-20",
    readTime: "4 min read",
    category: "Local Guide",
    tags: ["Newquay", "seasonal cleaning", "window cleaning", "Cornwall weather"],
  },
  {
    slug: "holiday-let-window-cleaning-cornwall",
    title: "Window Cleaning for Holiday Lets in Cornwall: Everything Owners Need to Know",
    description: "Holiday let owners in Cornwall face unique cleaning challenges. We explain how to set up a reliable cleaning schedule that works around guest changeovers.",
    date: "2025-01-05",
    readTime: "5 min read",
    category: "Commercial",
    tags: ["holiday let", "Cornwall", "Airbnb", "commercial window cleaning"],
  },
];

const categories = [...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogListingSchema(
              blogPosts.map((p) => ({
                slug: p.slug,
                title: p.title,
                description: p.description,
                date: p.date,
              }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Blog", url: `${siteConfig.url}/blog` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Expert Guides</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Window Cleaning Tips & Guides
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              Expert advice on window cleaning, gutter maintenance, conservatory care and exterior property maintenance — written specifically for Cornwall homeowners and property owners.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-900 cursor-pointer">All Posts</span>
            {categories.map((cat) => (
              <span key={cat} className="rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 text-sm text-slate-600 cursor-pointer hover:border-brand-200 hover:text-brand-700 transition-colors">
                {cat}
              </span>
            ))}
          </div>

          {/* Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col rounded-2xl border border-slate-100 bg-white shadow-soft overflow-hidden hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="badge badge-brand">{post.category}</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-base font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors line-clamp-2 text-balance">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 group-hover:gap-2.5 transition-all"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center rounded-3xl border border-brand-100 bg-brand-50 px-8 py-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Need Expert Advice?</h2>
            <p className="text-base text-slate-500 mb-6">
              Not sure what service you need or how often to clean? Just call or message us — we're happy to give honest, expert advice for your specific property and location in Cornwall.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/contact" className="btn-secondary">Ask a Question</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
