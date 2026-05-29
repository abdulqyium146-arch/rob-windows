import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import { testimonials, averageRating } from "@/data/testimonials";
import { formatDate } from "@/lib/utils";
import { breadcrumbSchema, reviewsPageSchema, localBusinessReviewsSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Customer Reviews | Rob's Window Cleaning Newquay Cornwall",
  description:
    "Read genuine customer reviews for Rob's Window Cleaning in Newquay, Cornwall. Rated 4.9/5 from 127+ verified reviews. Window cleaning, gutter cleaning and more.",
  alternates: { canonical: `${siteConfig.url}/reviews` },
};

export default function ReviewsPage() {
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    stars: rating,
    count: testimonials.filter((t) => t.rating === rating).length,
    percentage: Math.round((testimonials.filter((t) => t.rating === rating).length / testimonials.length) * 100),
  }));

  return (
    <>
      {/* Single LocalBusiness entity with reviews nested inside — correct schema.org pattern */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessReviewsSchema(
              testimonials.map((t) => ({ name: t.name, rating: t.rating, text: t.text, date: t.date }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Reviews", url: `${siteConfig.url}/reviews` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Reviews" }]} className="mb-6 text-brand-300/60" />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">Customer Reviews</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              What Our Customers Say
            </h1>
            <p className="text-lg text-brand-200/80 leading-relaxed">
              Genuine reviews from homeowners and businesses across Newquay and Cornwall. We&apos;re proud of our reputation and let our customers&apos; words speak for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Rating overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {/* Overall rating */}
            <div className="text-center rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-soft">
              <div className="text-6xl font-bold text-slate-900 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center gap-1 mb-3" aria-label={`${averageRating.toFixed(1)} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-6 w-6 text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <div className="text-sm text-slate-500">Based on {testimonials.length} reviews</div>
            </div>

            {/* Rating breakdown */}
            <div className="lg:col-span-2 space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20 shrink-0">
                    <span className="text-sm text-slate-600">{item.stars}</span>
                    <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-500 w-8 text-right shrink-0">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review grid — clean HTML, no microdata (JSON-LD handles schema) */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 ${s <= t.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="text-brand-100" aria-hidden="true">
                    <Quote className="h-8 w-8" />
                  </div>
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <cite className="text-sm font-semibold text-slate-900 not-italic">{t.name}</cite>
                    <div className="text-xs text-slate-400">{t.location}</div>
                    <div className="text-xs text-brand-600 mt-0.5">{t.service}</div>
                  </div>
                  <time className="text-xs text-slate-400" dateTime={t.date}>{formatDate(t.date)}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <TrustBadges />
        </div>
      </section>
    </>
  );
}
