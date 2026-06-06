import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sabinpaudel.com.np/sitemap.xml",
    host: "https://sabinpaudel.com.np",
  };
}
