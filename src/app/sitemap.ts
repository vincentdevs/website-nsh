import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const PATHS = [
  "",
  "/la-nsh",
  "/evenements",
  "/retransmissions",
  "/adherer",
  "/soutenir",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
