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
    publisher: { "@id": `${siteConfig.url}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/?s={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function homePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: `Window Cleaning Newquay | ${siteConfig.name}`,
    description: siteConfig.description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      ],
    },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about#page`,
    url: `${siteConfig.url}/about`,
    name: `About ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} — Newquay's trusted window cleaning and exterior property maintenance specialist. 10+ years experience, fully insured, rated 4.9★.`,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
      ],
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#page`,
    url: `${siteConfig.url}/contact`,
    name: `Contact ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} in Newquay, Cornwall. Call, email or fill in our contact form for a free no-obligation quote. We respond within 2 hours.`,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
      ],
    },
  };
}

export function collectionPageSchema(
  name: string,
  url: string,
  description: string,
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#page`,
    url,
    name,
    description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function blogListingSchema(
  posts: Array<{ slug: string; title: string; description: string; date: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": ["Blog", "CollectionPage"],
    "@id": `${siteConfig.url}/blog#page`,
    url: `${siteConfig.url}/blog`,
    name: "Window Cleaning Tips & Guides",
    description:
      "Expert advice on window cleaning, gutter maintenance, conservatory care and exterior property maintenance — written for Cornwall homeowners and property owners.",
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#business` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/blog/${post.slug}#article`,
      headline: post.title,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.description,
    })),
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
          eligibleRegion: { "@type": "State", name: "Cornwall" },
        },
      ],
    },
  };
}

export function serviceOfferSchema(
  name: string,
  description: string,
  url: string,
  price: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${url}#offer`,
    name,
    description,
    url,
    seller: { "@id": `${siteConfig.url}/#business` },
    itemOffered: {
      "@type": "Service",
      name,
      description,
      provider: { "@id": `${siteConfig.url}/#business` },
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      description: price,
    },
    eligibleRegion: {
      "@type": "AdministrativeArea",
      name: "Cornwall",
      containedInPlace: { "@type": "Country", name: "United Kingdom" },
    },
    availability: "https://schema.org/InStock",
  };
}

export function localBusinessPerLocationSchema(location: {
  name: string;
  slug: string;
  postcode?: string;
  lat?: number;
  lng?: number;
  county: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "CleaningService"],
    "@id": `${siteConfig.url}/${location.slug}#localbusiness`,
    name: `${siteConfig.name} — ${location.name}`,
    url: `${siteConfig.url}/${location.slug}`,
    telephone: siteConfig.phone.replace(/\s/g, ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.county,
      ...(location.postcode ? { postalCode: location.postcode } : {}),
      addressCountry: "GB",
    },
    ...(location.lat != null && location.lng != null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: location.lat,
            longitude: location.lng,
          },
        }
      : {}),
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: { "@type": "State", name: location.county },
    },
    parentOrganization: { "@id": `${siteConfig.url}/#business` },
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Exterior Cleaning Services in ${location.name}`,
      itemListElement: siteConfig.services.map((service, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: service },
      })),
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
  return blogPostingSchema(post);
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
    isPartOf: { "@id": `${siteConfig.url}/blog#page` },
    about: { "@id": `${siteConfig.url}/#business` },
  };
}

export function howToSchema(
  name: string,
  description: string,
  url: string,
  steps: Array<{ name: string; text: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name,
    description,
    url,
    inLanguage: "en-GB",
    author: { "@id": `${siteConfig.url}/#business` },
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function imageGallerySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${siteConfig.url}/gallery#gallery`,
    url: `${siteConfig.url}/gallery`,
    name: `${siteConfig.name} — Results Gallery`,
    description:
      "Before and after photos of professional window cleaning, gutter cleaning and exterior cleaning services across Newquay and Cornwall.",
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    creator: { "@id": `${siteConfig.url}/#business` },
    about: { "@id": `${siteConfig.url}/#business` },
  };
}

export function localBusinessReviewsSchema(
  reviews: Array<{ name: string; rating: number; text: string; date: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(siteConfig.rating.value),
      reviewCount: String(siteConfig.rating.count),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };
}

export function reviewsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/reviews#page`,
    url: `${siteConfig.url}/reviews`,
    name: `Customer Reviews | ${siteConfig.name}`,
    description: `Read genuine customer reviews for ${siteConfig.name} in Newquay, Cornwall. Rated ${siteConfig.rating.value}/5 from ${siteConfig.rating.count}+ verified reviews.`,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
    mainEntity: { "@id": `${siteConfig.url}/#business` },
  };
}
