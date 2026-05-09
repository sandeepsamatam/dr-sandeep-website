import Script from "next/script";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Profile } from "@/components/Profile";
import { Services } from "@/components/Services";
import { SocialLinksPanel } from "@/components/SocialLinksPanel";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import {
  aboutPoints,
  credentials,
  differentiators,
  doctor,
  faqs,
  galleryImages,
  heroHighlights,
  profilePoints,
  services,
  socialLinks,
  specializations,
  testimonials,
  topTrustBadge
} from "@/lib/site";

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drsandeepkanugula.com",
  medicalSpecialty: "Orthopedic",
  telephone: doctor.phoneDisplay,
  email: doctor.email,
  areaServed: [doctor.city, doctor.regionAlias],
  description:
    "AIIMS-trained orthopaedic specialist with advanced training from NIMS Hyderabad and Ganga Hospital, Coimbatore, offering arthroscopy, sports injury care, robotic joint replacement, and paediatric orthopaedic treatment in Visakhapatnam.",
  availableLanguage: ["English", "Telugu", "Hindi"],
  sameAs: socialLinks
    .filter((link) => !link.href.startsWith("#") && !link.href.startsWith("/"))
    .map((link) => link.href),
  worksFor: {
    "@type": "Hospital",
    name: "Q1 Hospitals"
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "NIMS Hyderabad"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "AIIMS New Delhi"
    }
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: doctor.city,
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN"
  },
  availableService: services.map((service) => ({
    "@type": "MedicalTherapy",
    name: service.title
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

const aboutSnapshot = [
  { label: "Training", value: "AIIMS, New Delhi" },
  { label: "Education", value: "NIMS Hyderabad" },
  { label: "Fellowship", value: "Ganga Hospital, Coimbatore" },
  { label: "Current Practice", value: doctor.location }
];

export default function Home() {
  return (
    <>
      <Script id="physician-schema" type="application/ld+json">
        {JSON.stringify(physicianSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <PageShell home>
        <main id="home">
          <Hero
            id="home"
            badge={topTrustBadge}
            title="Advanced Orthopaedic Care in Visakhapatnam"
            description="AIIMS-trained orthopaedic specialist with advanced training from NIMS Hyderabad and Ganga Hospital, Coimbatore, focused on arthroscopy, sports injuries, robotic joint replacement, and paediatric orthopaedics in Visakhapatnam."
            highlights={heroHighlights}
            imageSrc={doctor.heroImage}
            imageAlt="AIIMS-trained orthopaedic doctor in Visakhapatnam during consultation"
            primaryAction={{ label: "Book Appointment", href: "#contact" }}
            secondaryAction={{
              label: "WhatsApp Now",
              href: doctor.whatsappLink,
              target: "_blank",
              rel: "noreferrer"
            }}
            largeHeading
          />

          <About
            id="about"
            eyebrow="About Doctor"
            title="Clinical expertise shaped by AIIMS training, fellowship exposure, and patient-first recovery care"
            description="Serving patients across Visakhapatnam and Vizag with focused expertise in sports injury care, arthroscopy, robotic joint replacement, and paediatric orthopaedics."
            body="Dr. Sandeep Kanugula is an AIIMS-trained orthopaedic doctor in Visakhapatnam with advanced academic training from NIMS Hyderabad and fellowship exposure at Ganga Hospital, Coimbatore. His care is centered on arthroscopy, sports injuries, robotic joint replacement, paediatric orthopaedics, and clear recovery-focused planning."
            points={aboutPoints}
            snapshotItems={aboutSnapshot}
          />

          <Services
            id="services"
            eyebrow="Services"
            title="Specialized orthopaedic services with priority focus on sports injuries, arthroscopy, and advanced joint care"
            description="Serving patients across Visakhapatnam and Vizag with stronger focus on arthroscopy, sports injuries, robotic joint replacement, and paediatric orthopaedics while continuing broader orthopaedic care."
            featured={services.slice(0, 3)}
            additional={services.slice(3)}
          />

          <Profile
            id="profile"
            eyebrow="Doctor Profile"
            title="Orthopaedic expertise built on strong training, modern techniques, and recovery-focused care"
            description="AIIMS training, NIMS academic grounding, and Ganga Hospital fellowship exposure presented with clear focus on the doctor's strongest treatment areas."
            imageSrc={doctor.profileImage}
            imageAlt={`Portrait of ${doctor.name}, orthopaedic doctor in Visakhapatnam`}
            name={doctor.name}
            specialty={doctor.specialty}
            credentials={credentials}
            experience={doctor.experience}
            location={doctor.location}
            profilePoints={profilePoints}
            specializations={specializations}
          />

          <WhyChooseUs
            id="why-us"
            eyebrow="Why Choose Us"
            title="Why patients choose Dr. Sandeep Kanugula"
            description="Training, surgical focus, and recovery planning that support confident orthopaedic care."
            items={differentiators}
          />

          <Gallery
            id="gallery"
            eyebrow="Photo Gallery"
            title="Focused consultation and procedure visuals that support the doctor's strongest specialties"
            description="Selected visuals from consultation, evaluation, and advanced orthopaedic care."
            images={galleryImages}
          />

          <Testimonials
            id="testimonials"
            eyebrow="Testimonials"
            title="Trusted by patients across Visakhapatnam"
            description="A grounded tone and clean presentation reinforce trust without adding noise."
            testimonials={testimonials}
            ctaHref="#contact"
            ctaLabel="Book your consultation today"
          />

          <FAQ
            eyebrow="FAQ"
            title="Frequently asked orthopaedic questions"
            description="Short, mobile-friendly answers keep the focus on sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, and booking clarity."
            faqs={faqs}
          />

          <SocialLinksPanel links={socialLinks} />

          <Contact
            id="contact"
            eyebrow="Book Consultation"
            title="Call, WhatsApp, or book your consultation in seconds."
            description="Connect quickly for arthroscopy, sports injury care, robotic joint replacement, paediatric orthopaedics, or broader orthopaedic treatment in Visakhapatnam and Vizag."
            supportText="Call, WhatsApp, or book your consultation in seconds."
            consultationText="Arthroscopy, sports injury treatment, robotic joint replacement, paediatric orthopaedics, fracture care, and broader orthopaedic guidance."
          />
        </main>
      </PageShell>
    </>
  );
}
