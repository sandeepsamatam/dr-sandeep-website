import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Services } from "@/components/Services";
import { buildPageMetadata } from "@/lib/metadata";
import { doctor } from "@/lib/site";
import { orthopaedicServiceGroups, routePaths } from "@/lib/seo-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Orthopaedic Services in Visakhapatnam | Dr. Sandeep Kanugula",
  description:
    "Explore orthopaedic services in Visakhapatnam including arthroscopy, sports injury treatment, robotic joint replacement, paediatric orthopaedics, fracture care, spine treatment, hand surgery, foot and ankle surgery, and complex trauma care.",
  path: routePaths.services,
  keywords: [
    "orthopaedic services in Visakhapatnam",
    "sports injury specialist in Vizag",
    "robotic joint replacement in Visakhapatnam",
    "paediatric orthopaedic doctor in Vizag",
    "fracture treatment Visakhapatnam"
  ]
});

const serviceFaqs = [
  {
    question: "Which services are the main focus of the practice?",
    answer:
      "The leading focus areas are arthroscopy and sports injuries, robotic joint replacement, and paediatric orthopaedics."
  },
  {
    question: "Do you still treat fractures and spine problems?",
    answer:
      "Yes. Fracture care, trauma support, and spine-related orthopaedic symptoms remain part of the broader service scope."
  },
  {
    question: "Can I visit this page first and book later?",
    answer:
      "Yes. You can review the services first and book an appointment whenever you are ready."
  },
  {
    question: "Are there dedicated pages for major services?",
    answer:
      "Yes. Dedicated pages are available for sports injuries, arthroscopy, robotic joint replacement, and paediatric orthopaedics."
  }
];

export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <Hero
          id="services-home"
          badge="Orthopaedic Services in Visakhapatnam"
          title="Comprehensive Orthopaedic Services in Visakhapatnam"
          description="Orthopaedic care for sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, fractures, spine symptoms, and advanced trauma management."
          highlights={[
            "Arthroscopy and sports injuries",
            "Robotic joint replacement",
            "Paediatric orthopaedics",
            "Hospital-based orthopaedic care"
          ]}
          imageSrc={doctor.heroImage}
          imageAlt="Orthopaedic services in Visakhapatnam consultation"
          primaryAction={{ label: "Book Appointment", href: routePaths.book }}
          secondaryAction={{
            label: "WhatsApp Now",
            href: doctor.whatsappLink,
            target: "_blank",
            rel: "noreferrer"
          }}
          compact
        />

        <Services
          eyebrow="Service Directory"
          title="Core specialties and broader orthopaedic services"
          description="The practice combines focused specialty care with treatment for fractures, trauma, spine conditions, and reconstructive orthopaedics."
          featured={orthopaedicServiceGroups.featured}
          additional={orthopaedicServiceGroups.secondary}
          additionalLabel="Secondary Orthopaedic Services"
        />

        <FAQ
          eyebrow="Services FAQ"
          title="Common questions about orthopaedic services in Visakhapatnam"
          description="Answers to help patients understand which orthopaedic service may be most relevant to their condition."
          faqs={serviceFaqs}
        />

        <CTA
          eyebrow="Specialty Care"
          title="Explore the specialty page that best matches your concern"
          description="Learn more about sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, and related treatment areas."
          primaryAction={{ label: "Book Appointment", href: routePaths.book }}
          secondaryAction={{ label: "About Dr. Sandeep", href: routePaths.about }}
          links={[
            { label: "Sports injury specialist", href: routePaths.sportsInjury },
            { label: "Arthroscopy surgeon", href: routePaths.arthroscopy },
            { label: "Robotic joint replacement", href: routePaths.roboticJoint },
            { label: "Paediatric orthopaedic doctor", href: routePaths.paediatric }
          ]}
        />
      </main>
    </PageShell>
  );
}
