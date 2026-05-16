import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Window Cleaning Newquay, Cornwall`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "window cleaning Newquay",
    "window cleaner Newquay",
    "gutter cleaning Newquay",
    "conservatory roof cleaning Cornwall",
    "exterior cleaning Newquay",
    "UPVC cleaning Cornwall",
    "fascia soffit cleaning Newquay",
    "commercial window cleaning Newquay",
    "window cleaning Cornwall",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Window Cleaning Newquay, Cornwall`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Window Cleaning Newquay`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Window Cleaning Newquay`,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: siteConfig.url },
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="font-sans bg-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
