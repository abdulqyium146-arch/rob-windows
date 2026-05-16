export const siteConfig = {
  name: "Rob's Window Cleaning",
  shortName: "Robs Window Cleaning",
  description:
    "Professional window cleaning, gutter cleaning, conservatory roof cleaning and exterior property cleaning services in Newquay, Cornwall. Trusted, reliable and fully insured.",
  url: "https://robswindowcleaning.co.uk",
  phone: "07XXX XXXXXX",
  email: "rob@robswindowcleaning.co.uk",
  address: {
    streetAddress: "Newquay",
    addressLocality: "Newquay",
    addressRegion: "Cornwall",
    postalCode: "TR7",
    addressCountry: "GB",
  },
  geo: {
    latitude: "50.4130",
    longitude: "-5.0755",
  },
  social: {
    facebook: "https://facebook.com/robswindowcleaning",
    instagram: "https://instagram.com/robswindowcleaning",
  },
  openingHours: [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00",
  ],
  rating: {
    value: "4.9",
    count: "127",
  },
  areaServed: [
    "Newquay",
    "Perranporth",
    "Truro",
    "Wadebridge",
    "Padstow",
    "St Austell",
    "Redruth",
    "Falmouth",
    "Bodmin",
    "St Columb Major",
    "Quintrell Downs",
    "Crantock",
    "Holywell Bay",
    "Cubert",
    "Mawgan Porth",
  ],
  services: [
    "Window Cleaning",
    "Gutter Cleaning",
    "Conservatory Roof Cleaning",
    "Fascia and Soffit Cleaning",
    "UPVC Cleaning",
    "Commercial Window Cleaning",
    "Residential Window Cleaning",
    "Cladding Cleaning",
    "Roofline Cleaning",
  ],
};

export type SiteConfig = typeof siteConfig;
