import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/branding";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL || "https://legitcreations.com.ng";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}