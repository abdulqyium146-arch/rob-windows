export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  price?: string;
  faqs: FAQ[];
  image?: string;
  keywords: string[];
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  county: string;
  description: string;
  landmarks: string[];
  nearbyAreas: string[];
  postcode?: string;
  faqs: FAQ[];
  lat?: number;
  lng?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  category: string;
  tags: string[];
  image?: string;
  content?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
