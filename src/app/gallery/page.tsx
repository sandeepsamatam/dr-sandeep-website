import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageShell } from "@/components/PageShell";
import { CTA } from "@/components/CTA";
import { buildPageMetadata } from "@/lib/metadata";
import { galleryImages, doctor } from "@/lib/site";
import { routePaths } from "@/lib/seo-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Clinical Gallery | Dr. Sandeep Kanugula in Visakhapatnam",
  description:
    "View the clinical gallery of Dr. Sandeep Kanugula, AIIMS-trained orthopaedic surgeon in Visakhapatnam, featuring consultation, procedure, and orthopaedic care visuals.",
  path: routePaths.gallery,
  keywords: [
    "Dr Sandeep Kanugula gallery",
    "orthopaedic clinic Visakhapatnam photos",
    "sports injury treatment images Vizag",
    "robotic joint replacement photos"
  ]
});

export default function GalleryPage() {
  return (
    <PageShell>
      <main className="pt-8">
        <Gallery
          id="gallery-main"
          eyebrow="Clinical Visuals"
          title="Consultation and procedure visuals that reflect the doctor's core expertise"
          description="A look inside the clinical environment, patient consultations, imaging review, and advanced procedure-focused care provided at Q1 Hospitals, Visakhapatnam."
          images={galleryImages}
        />

        <CTA
          eyebrow="Next Step"
          title="Ready for an expert orthopaedic evaluation?"
          description="Book a consultation today for a thorough assessment of your condition."
          primaryAction={{ label: "Book Appointment", href: routePaths.book }}
          secondaryAction={{
            label: "WhatsApp Now",
            href: doctor.whatsappLink,
            target: "_blank",
            rel: "noreferrer"
          }}
          links={[
            { label: "About Dr. Sandeep", href: routePaths.about },
            { label: "View all orthopaedic services", href: routePaths.services }
          ]}
        />
      </main>
    </PageShell>
  );
}
