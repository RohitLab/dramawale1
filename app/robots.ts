import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow major AI crawlers
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
    ],
    sitemap: "https://www.dramawale.com/sitemap.xml",
    host: "https://www.dramawale.com",
  };
}
