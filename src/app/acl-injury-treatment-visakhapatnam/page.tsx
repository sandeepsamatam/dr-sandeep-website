import type { Metadata } from "next";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { buildPageMetadata } from "@/lib/metadata";
import { seoLandingPages } from "@/lib/seo-pages";

const page = seoLandingPages.acl;

export const metadata: Metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords
});

export default function AclInjuryPage() {
  return <SpecialtyPage page={page} />;
}
