import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/branding";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL || "https://legitcreations.com.ng";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/dossier/strategic-growth`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/dossier/digital-integration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}