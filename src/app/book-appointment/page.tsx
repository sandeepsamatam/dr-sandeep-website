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
      <main>
        <Hero
          id="book-home"
          badge="Book Orthopaedic Appointment"
          title="Book an Orthopaedic Consultation in Visakhapatnam"
          description="Book a consultation for sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, fracture care, or broader orthopaedic treatment."
          highlights={[
            "Call, WhatsApp, or appointment form",
            "AIIMS-trained orthopaedic specialist",
            "Q1 Hospitals, Visakhapatnam",
            "Prompt appointment coordination"
          ]}
          imageSrc={doctor.heroImage}
          imageAlt="Book orthopaedic appointment in Visakhapatnam"
          primaryAction={{ label: "Call Now", href: doctor.phoneLink }}
          secondaryAction={{
            label: "WhatsApp Now",
            href: doctor.whatsappLink,
            target: "_blank",
            rel: "noreferrer"
          }}
          compact
        />

        <Contact
          eyebrow="Appointment Form"
          title="Call, WhatsApp, or book your consultation in seconds."
          description="Choose the easiest way to connect for an orthopaedic consultation in Visakhapatnam."
          supportText="Choose the fastest booking option for sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, or any broader orthopaedic concern."
          consultationText="Arthroscopy, sports injury treatment, robotic joint replacement, paediatric orthopaedics, fracture care, spine and back treatment, and advanced orthopaedic guidance."
        />

        <Testimonials
          eyebrow="Patient Confidence"
          title="Local patient trust built on clear guidance and follow-up care"
          description="Patient feedback that reflects consultation clarity, confidence, and orthopaedic support."
          testimonials={testimonials.slice(0, 2)}
        />
      </main>
    </PageShell>
  );
}
