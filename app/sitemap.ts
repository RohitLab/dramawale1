import { MetadataRoute } from "next";

const BASE_URL = "https://www.dramawale.com";

// Use static dates — update these when page content changes significantly.
// Avoids all pages showing identical lastModified on every build.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/academy`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/school-services`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/teacher-training`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/scripts-hub`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/katharang`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
