import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — full access
      { userAgent: "*", allow: "/" },

      // Google
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Googlebot-Video", allow: "/" },
      { userAgent: "AdsBot-Google", allow: "/" },
      { userAgent: "Google-InspectionTool", allow: "/" },

      // Bing / Microsoft
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "msnbot", allow: "/" },
      { userAgent: "BingPreview", allow: "/" },

      // Apple
      { userAgent: "Applebot", allow: "/" },

      // OpenAI — GPT training + browsing
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },

      // Anthropic — Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },

      // Google Gemini / Bard
      { userAgent: "Google-Extended", allow: "/" },

      // Meta AI
      { userAgent: "meta-externalagent", allow: "/" },

      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },

      // You.com
      { userAgent: "YouBot", allow: "/" },

      // Common SEO crawlers
      { userAgent: "Semrushbot", allow: "/" },
      { userAgent: "AhrefsBot", allow: "/" },
      { userAgent: "MJ12bot", allow: "/" },
      { userAgent: "DotBot", allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
