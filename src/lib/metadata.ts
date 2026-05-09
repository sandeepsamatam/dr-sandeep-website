import type { Metadata } from "next";
import { doctor } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drsandeepkanugula.com";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      locale: "en_IN",
      siteName: doctor.name
    }
  };
}

export const siteOrigin = siteUrl;
