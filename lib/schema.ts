import { siteConfig } from "@/config/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "CleaningService"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone.replace(/\s/g, ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: "Cornwall" },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: "40000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Cleaning Services",
      itemListElement: siteConfig.services.map((service, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    priceRange: "££",
    paymentAccepted: "Cash, Bank Transfer, Online Payment",
    currenciesAccepted: "GBP",
    knowsAbout: siteConfig.services,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-GB",
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
  areas: string[] = ["Newquay", "Cornwall"]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone.replace(/\s/g, ""),
    },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: "Cornwall" },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        },
      ],
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-GB",
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: "Window Cleaning Tips",
    wordCount: post.content.trim().split(/\s+/).length,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
  };
}

export function reviewSchema(
  reviews: Array<{ name: string; rating: number; text: string; date: string }>
) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    datePublished: r.date,
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
    },
  }));
}
