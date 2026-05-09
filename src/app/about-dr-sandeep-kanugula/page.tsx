import type { Metadata } from "next";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Profile } from "@/components/Profile";
import { Testimonials } from "@/components/Testimonials";
import { buildPageMetadata } from "@/lib/metadata";
import {
  aboutPoints,
  credentials,
  doctor,
  galleryImages,
  profilePoints,
  specializations,
  testimonials,
  topTrustBadge
} from "@/lib/site";
import { aboutPageHighlights, aboutSnapshot, routePaths } from "@/lib/seo-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "About Dr. Sandeep Kanugula | Orthopaedic Doctor in Visakhapatnam",
  description:
    "Learn about Dr. Sandeep Kanugula, an AIIMS-trained orthopaedic doctor in Visakhapatnam with training from NIMS Hyderabad, Ganga Hospital Coimbatore, BIRRD Tirupati, and advanced exposure across sports injury, joint replacement, trauma, and paediatric orthopaedics.",
  path: routePaths.about,
  keywords: [
    "Dr Sandeep Kanugula orthopaedic doctor",
    "AIIMS-trained orthopaedic surgeon",
    "orthopaedic doctor in Visakhapatnam",
    "Ganga Hospital fellowship orthopaedic doctor",
    "paediatric orthopaedic doctor Vizag"
  ]
});

export default function AboutDoctorPage() {
  return (
    <PageShell>
      <main>
        <Hero
          id="about-home"
          badge={topTrustBadge}
          title="About Dr. Sandeep Kanugula"
          description="AIIMS-trained orthopaedic surgeon in Visakhapatnam with advanced grounding from NIMS Hyderabad, fellowship exposure from Ganga Medical Centre & Hospital Coimbatore, paediatric orthopaedic exposure from BIRRD Tirupati, and broader specialty learning across sports injury, trauma, and advanced joint care."
          highlights={aboutPageHighlights}
          imageSrc={doctor.profileImage}
          imageAlt={`Portrait of ${doctor.name}, orthopaedic surgeon in Visakhapatnam`}
          primaryAction={{ label: "Book Appointment", href: routePaths.book }}
          secondaryAction={{
            label: "WhatsApp Now",
            href: doctor.whatsappLink,
            target: "_blank",
            rel: "noreferrer"
          }}
          compact
        />

        <About
          eyebrow="Training & Background"
          title="Academic depth, fellowship exposure, and practical orthopaedic focus"
          description="Training background, surgical exposure, and current clinical focus presented clearly for patients and referring doctors."
          body="Dr. Sandeep Kanugula serves patients across Visakhapatnam and Vizag with a trust-first orthopaedic approach shaped by AIIMS New Delhi, Nizam's Institute of Medical Sciences Hyderabad, and Ganga Medical Centre & Hospital Coimbatore. His broader exposure also includes paediatric orthopaedic learning at BIRRD Hospital Tirupati, advanced perspectives from Dr Ramesh Sen at Max Super Speciality Hospital Mohali, and deformity or foot-and-ankle-aligned experience associated with Dr KN Subramanian and Vale Hospital Madurai."
          points={aboutPoints}
          snapshotItems={aboutSnapshot}
        />

        <Profile
          id="profile-highlights"
          eyebrow="Doctor Profile"
          title="Orthopaedic authority built around modern techniques and patient-first recovery"
          description="Focused expertise in sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, trauma, and recovery planning."
          imageSrc={doctor.profileImage}
          imageAlt={`Portrait of ${doctor.name}, orthopaedic surgeon in Visakhapatnam`}
          name={doctor.name}
          specialty={doctor.specialty}
          credentials={credentials}
          experience={doctor.experience}
          location={doctor.location}
          profilePoints={profilePoints}
          specializations={specializations}
        />

        <Gallery
          id="clinical-gallery"
          eyebrow="Clinical Visuals"
          title="Consultation and procedure visuals that reflect the doctor's core expertise"
          description="Consultation, imaging review, and procedure-focused visuals from the doctor's orthopaedic practice."
          images={galleryImages}
        />

        <Testimonials
          eyebrow="Patient Confidence"
          title="Grounded patient feedback that supports trust and clarity"
          description="Patient experiences from Visakhapatnam that reflect clear communication, clinical guidance, and recovery support."
          testimonials={testimonials}
          ctaHref={routePaths.book}
          ctaLabel="Book an appointment"
        />

        <CTA
          eyebrow="Next Step"
          title="Move from doctor research to direct consultation"
          description="Review the doctor's services, explore areas of expertise, or book an orthopaedic consultation."
          primaryAction={{ label: "Book Appointment", href: routePaths.book }}
          secondaryAction={{
            label: "View Services",
            href: routePaths.services
          }}
          links={[
            { label: "Sports injury specialist", href: routePaths.sportsInjury },
            { label: "Robotic joint replacement", href: routePaths.roboticJoint },
            { label: "Paediatric orthopaedic doctor", href: routePaths.paediatric }
          ]}
        />
      </main>
    </PageShell>
  );
}
