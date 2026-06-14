import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = ""; // TODO: replace with project URL when assigned.

const paths = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/features", changefreq: "monthly", priority: "0.9" },
  { path: "/how-it-works", changefreq: "monthly", priority: "0.8" },
  { path: "/pricing", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
  { path: "/legal/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/cookies", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/disclaimer", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/acceptable-use", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/data-retention", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/refund", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/gdpr", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/ccpa", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/children-privacy", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
