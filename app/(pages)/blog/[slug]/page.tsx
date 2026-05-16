import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
  faqs?: Array<{ question: string; answer: string }>;
}

const posts: Record<string, BlogPost> = {
  "how-often-should-windows-be-cleaned-cornwall": {
    slug: "how-often-should-windows-be-cleaned-cornwall",
    title: "How Often Should Windows Be Cleaned in Cornwall?",
    description: "Cornwall's coastal climate means windows need more frequent cleaning than the national average. We explain why and how to determine the right schedule for your property.",
    date: "2025-04-01",
    readTime: "4 min read",
    category: "Window Cleaning",
    tags: ["window cleaning", "Cornwall", "coastal properties", "cleaning schedule"],
    content: `
Cornwall's unique coastal and maritime climate creates conditions that cause windows to become dirty faster than in most other parts of the UK. Understanding why — and how to set the right cleaning schedule — can save you money and keep your property looking its best year-round.

## Why Windows Get Dirty Faster in Cornwall

The main culprit is salt air. When sea breezes carry microscopic salt particles inland, they deposit on every surface they touch — including your windows. Salt is hygroscopic, meaning it attracts moisture, which causes streaking, hazing and eventually pitting on glass if left uncleaned.

Cornwall also experiences high rainfall, which contrary to popular belief does not clean windows. Rain carries airborne dust, pollen and pollution which bond to the glass surface. As rainwater evaporates, these contaminants are left behind as visible deposits.

Add in the algae-friendly mild, damp climate and you have the perfect conditions for green biological growth on frames and sills — especially on north and east-facing elevations.

## Recommended Cleaning Frequencies

**Coastal properties (within 1 mile of the sea):** Every 4 weeks. Properties in Newquay, Perranporth, Padstow, Falmouth and other coastal towns are directly exposed to salt-laden air and should be cleaned monthly to prevent salt etching.

**Inland rural properties:** Every 6–8 weeks. Reduced salt exposure but increased organic debris (pollen, spores, dust) from surrounding countryside means bi-monthly cleans are typically sufficient.

**Urban and town-centre properties:** Every 6 weeks. Reduced salt but higher traffic pollution means regular cleaning is still important for appearance and glass protection.

**Commercial properties:** Every 2–4 weeks. First impressions matter for businesses. Most shops, restaurants and offices in Newquay and Truro benefit from fortnightly or monthly commercial window cleaning.

## Signs Your Windows Need Cleaning

- Visible salt haze or white streaking on the glass
- Green algae growth on frames or sills
- Water spots that don't disappear after rain
- Difficulty seeing clearly through the glass in bright sunlight
- Dark deposits in the corners of frame and glass junctions

## The Cost of Neglect

Regularly cleaned windows last significantly longer than neglected ones. Salt deposits, if left, will eventually etch into the glass surface causing permanent damage that no cleaning can reverse. Algae growth in rubber seals degrades them faster, leading to draughts and water ingress.

The cost of regular window cleaning is a fraction of the cost of replacing damaged glass or seals.

## Setting Up a Regular Schedule

The easiest approach is to set up a regular cleaning round with a trusted local window cleaner. At Rob's Window Cleaning, we text you the day before every visit, clean to the same high standard every time, and you can adjust or pause your schedule whenever needed — no contract.

For most Newquay homeowners, we recommend starting with a 4–6 weekly schedule and adjusting based on how quickly your windows visibly soil between cleans.
    `,
    faqs: [
      {
        question: "How often should windows be cleaned in a coastal location like Newquay?",
        answer: "For coastal properties in Newquay and similar locations, we recommend window cleaning every 4 weeks. Salt air deposits build up rapidly on glass near the sea, and monthly cleaning prevents salt etching and keeps your views clear.",
      },
      {
        question: "Does rain clean windows?",
        answer: "No — rain does not clean windows. Rainwater carries dust, pollen and pollutants which bond to the glass. As rain evaporates, these deposits are left behind, often making windows appear dirtier than before.",
      },
      {
        question: "What happens if I don't clean windows regularly?",
        answer: "Salt and mineral deposits will eventually etch into the glass surface, causing permanent damage. Algae growth in seals degrades rubber faster, potentially leading to draughts and water ingress. Regular cleaning is protective maintenance.",
      },
    ],
  },
  "what-is-pure-water-window-cleaning": {
    slug: "what-is-pure-water-window-cleaning",
    title: "What Is Pure Water Window Cleaning? The Complete Guide",
    description: "Pure water window cleaning delivers better results than traditional methods. We explain exactly how the technology works and why it's better for your windows.",
    date: "2025-03-15",
    readTime: "5 min read",
    category: "Window Cleaning",
    tags: ["pure water", "window cleaning technology", "streak-free windows"],
    content: `
Pure water window cleaning has become the industry standard for professional window cleaners across the UK — and for good reason. It delivers consistently better results than traditional methods, is safer for both cleaners and properties, and is more environmentally friendly.

## What Is Pure Water?

Ordinary tap water contains dissolved minerals — calcium, magnesium, silica and various other compounds. These minerals are what cause the white streaky residue left behind when tap water dries on glass.

Pure water has had these minerals removed through a multi-stage filtration process. The water we use in our systems is typically purified to a TDS (Total Dissolved Solids) reading of zero parts per million — meaning it contains absolutely nothing but H₂O.

## How the Purification Process Works

Professional pure water systems use a combination of filtration stages:

1. **Sediment filter** — removes particles, rust and debris from the supply water
2. **Carbon filter** — removes chlorine and organic compounds
3. **Reverse osmosis membrane** — removes up to 98% of dissolved minerals
4. **Deionisation resin** — removes the remaining dissolved solids to achieve zero TDS

The resulting water is aggressively "hungry" for dissolved minerals — which is precisely what makes it so effective for cleaning glass.

## How Pure Water Cleaning Works in Practice

The purified water is stored in a tank on our vehicle and pumped to a soft-bristle brush on the end of a telescopic pole. The brush agitates and dissolves dirt, grime and mineral deposits on the glass surface.

The pure water then rinses away everything — and as it dries, it leaves absolutely no residue. No minerals, no smears, no streaks. Just perfectly clean glass.

## Why It's Better Than Traditional Methods

Traditional window cleaning uses a squeegee and a solution of water mixed with detergent. This method works well at ground floor level but has limitations:

- Requires ladders for upper floors, creating safety risks
- Squeegee technique leaves thin lines of moisture which can attract dust
- Detergent residue can cause faster resoiling
- Access to some windows (above conservatory roofs, bay windows) is difficult

Pure water systems use poles extending to 30 feet or more, allowing us to clean second and third-floor windows safely from the ground. The zero-residue finish also means windows stay cleaner for longer between visits.

## Is Pure Water Cleaning Safe for All Windows?

Yes. Pure water is gentle on glass, frames and seals. It contains no chemicals or solvents. It is safe for UPVC, timber and aluminium frames, and for tinted and double-glazed units.

The brush head is made from soft microfibre bristles that agitate without scratching.

## Environmental Benefits

Pure water cleaning uses no chemicals — just water. The water used in the process eventually evaporates harmlessly. Our systems are designed to minimise water usage, typically using less water per clean than a traditional bucket-and-squeegee approach.
    `,
    faqs: [
      {
        question: "What is pure water window cleaning?",
        answer: "Pure water window cleaning uses water filtered to zero dissolved minerals. This ultra-pure water is applied to glass via a soft brush on a telescopic pole. As it dries, it leaves no residue — giving a perfectly streak-free finish without any chemicals.",
      },
      {
        question: "Does pure water window cleaning leave streaks?",
        answer: "No — it produces the opposite result. Because pure water contains no minerals, there is nothing to leave behind when it dries. The result is a perfectly clear, streak-free and spot-free glass surface.",
      },
      {
        question: "Is pure water cleaning safe for double glazing?",
        answer: "Yes. Pure water contains no chemicals or solvents and is entirely safe for all types of glazing including double-glazed units, triple glazing, tinted glass and Low-E coatings.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: siteConfig.name },
            publisher: { "@type": "Organization", name: siteConfig.name },
          }),
        }}
      />
      {post.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Blog", url: `${siteConfig.url}/blog` },
              { name: post.title, url: `${siteConfig.url}/blog/${slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
            className="mb-6 text-brand-300/60"
          />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-300/60">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">{post.description}</p>
              <div
                className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-800"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n## /g, "\n<h2>").replace(/\n### /g, "\n<h3>").replace(/\n\n/g, "</p><p>").replace(/\n- /g, "</li><li>") }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* FAQs */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <FAQAccordion faqs={post.faqs} />
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Need Professional Window Cleaning in Cornwall?
                </h3>
                <p className="text-sm text-slate-600 mb-5">
                  Get a free, no-obligation quote from Rob's Window Cleaning — Newquay's trusted local specialists.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/free-quote" className="btn-primary text-sm">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/window-cleaning-newquay" className="btn-secondary text-sm">
                    Window Cleaning Newquay
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-24">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">About Rob's Window Cleaning</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Newquay's trusted window cleaning and exterior property maintenance specialists. Serving Cornwall for 10+ years.
                  </p>
                  <Link href="/free-quote" className="btn-primary w-full justify-center text-sm">
                    Get a Free Quote
                  </Link>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Related Posts</h3>
                  <div className="space-y-3">
                    {Object.values(posts)
                      .filter((p) => p.slug !== slug)
                      .slice(0, 3)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="block text-sm text-slate-700 hover:text-brand-600 transition-colors leading-snug"
                        >
                          {p.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <div className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 font-medium transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}
