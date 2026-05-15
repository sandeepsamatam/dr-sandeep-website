import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Testimonials } from "@/components/Testimonials";
import { buildPageMetadata } from "@/lib/metadata";
import { doctor, testimonials } from "@/lib/site";
import { routePaths } from "@/lib/seo-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Book Orthopaedic Appointment in Visakhapatnam | Dr. Sandeep Kanugula",
  description:
    "Book an orthopaedic appointment in Visakhapatnam with Dr. Sandeep Kanugula for sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, fractures, and advanced orthopaedic care.",
  path: routePaths.book,
  keywords: [
    "book orthopaedic appointment Visakhapatnam",
    "orthopaedic consultation Vizag",
    "sports injury doctor appointment Visakhapatnam",
    "robotic joint replacement consultation Vizag"
  ]
});

export default function BookAppointmentPage() {
  return (
    <PageShell>
      <main className="pt-12 pb-24">
        <Contact
          eyebrow="Appointment Booking"
          title="Book your consultation"
          description="Schedule a consultation with Dr. Sandeep Kanugula at Q1 Hospitals, Visakhapatnam. Choose the most convenient way to reach out."
          supportText="Whether you need evaluation for sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, or general fracture care, we are here to help."
          consultationText="Available for primary consultations, second opinions, and post-operative follow-up care."
        />
      </main>
    </PageShell>
  );
}
