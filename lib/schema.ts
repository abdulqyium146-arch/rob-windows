import { siteConfig } from "@/config/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
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
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "16:00" },
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
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Cleaning Services",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    image: `${siteConfig.url}/images/og-image.jpg`,
    priceRange: "££",
    paymentAccepted: "Cash, Bank Transfer, Online Payment",
    currenciesAccepted: "GBP",
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

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Newquay",
      containedInPlace: { "@type": "State", name: "Cornwall" },
    },
    url,
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function reviewSchema(reviews: Array<{ name: string; rating: number; text: string; date: string }>) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    datePublished: r.date,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
  }));
}
