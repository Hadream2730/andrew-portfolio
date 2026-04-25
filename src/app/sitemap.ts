import type { MetadataRoute } from "next";
import { projects, site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.seo.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/projects`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/writing`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...projectRoutes];
}

