import Image from "next/image";
import Script from "next/script";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import {
  aboutPoints,
  credentials,
  differentiators,
  doctor,
  faqs,
  galleryImages,
  heroHighlights,
  navigation,
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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  medicalSpecialty: "Orthopedic",
  telephone: doctor.phoneDisplay,
  email: doctor.email,
  areaServed: [doctor.city, doctor.regionAlias],
  description:
    "AIIMS-trained orthopaedic specialist with advanced training from NIMS Hyderabad and Ganga Hospital, Coimbatore, offering arthroscopy, sports injury care, robotic joint replacement, and paediatric orthopaedic treatment in Visakhapatnam.",
  availableLanguage: ["English", "Telugu", "Hindi"],
  sameAs: socialLinks
    .filter((link) => !link.href.startsWith("#"))
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

const featuredServices = services.slice(0, 3);
const additionalServices = services.slice(3);

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.93 1.32a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.76 3.76 0 0 0 12 8.25Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="m12 2.6 2.88 5.84 6.45.94-4.67 4.55 1.1 6.43L12 17.34 6.24 20.36l1.1-6.43L2.67 9.38l6.45-.94L12 2.6Z" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 12.25A4.62 4.62 0 1 0 7.38 7.63 4.63 4.63 0 0 0 12 12.25Zm0 1.75c-4.09 0-7.5 2.33-7.5 5.25 0 .41.34.75.75.75h13.5a.75.75 0 0 0 .75-.75C19.5 16.33 16.09 14 12 14Z" />
    </svg>
  );
}

function SocialIcon({ kind }: { kind: string }) {
  if (kind === "instagram") {
    return <InstagramIcon />;
  }

  if (kind === "reviews") {
    return <StarIcon />;
  }

  return <ProfileIcon />;
}

export default function Home() {
  return (
    <>
      <Script id="physician-schema" type="application/ld+json">
        {JSON.stringify(physicianSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <div className="pb-24 xl:pb-0">
        <header className="sticky top-0 z-40 border-b border-white/70 bg-white/92 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
            <a href="#home" className="flex min-w-0 items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-full border border-brand-100 bg-brand-50 shadow-soft sm:h-11 sm:w-11">
                <Image
                  src={doctor.profileImage}
                  alt={doctor.name}
                  width={96}
                  height={96}
                  sizes="44px"
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-lg leading-none text-ink sm:text-2xl">
                  {doctor.name}
                </p>
                <p className="mt-1 truncate text-[11px] uppercase tracking-[0.22em] text-brand-700 sm:text-xs">
                  {doctor.specialty}
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-brand-700">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800"
              >
                Book Appointment
              </a>
              <a
                href={doctor.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </header>

        <main id="home">
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 medical-grid opacity-[0.05]" />
            <div className="absolute left-0 top-8 h-52 w-52 rounded-full bg-brand-100/60 blur-3xl sm:h-72 sm:w-72" />
            <div className="absolute right-0 top-14 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl sm:h-96 sm:w-96" />

            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9">
              <Reveal className="relative grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
                <div className="order-2 text-center lg:order-1 lg:text-left">
                  <div className="inline-flex rounded-full border border-brand-100 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-soft sm:text-xs">
                    {topTrustBadge}
                  </div>

                  <h1 className="mt-3 max-w-3xl font-display text-[2.15rem] leading-[0.98] text-ink sm:text-5xl lg:max-w-2xl lg:text-[3.45rem]">
                    Advanced Orthopaedic Care in Visakhapatnam
                  </h1>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-7 lg:text-lg">
                    AIIMS-trained orthopaedic specialist with advanced training from NIMS
                    Hyderabad and Ganga Hospital, Coimbatore, focused on arthroscopy, sports
                    injuries, robotic joint replacement, and paediatric orthopaedics in
                    Visakhapatnam.
                  </p>

                  <div className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row lg:max-w-xl">
                    <a
                      href="#contact"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800 sm:flex-1 lg:w-auto lg:flex-none"
                    >
                      Book Appointment
                    </a>
                    <a
                      href={doctor.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50 sm:flex-1 lg:w-auto lg:flex-none"
                    >
                      WhatsApp Now
                    </a>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm font-medium text-ink sm:grid-cols-2 lg:max-w-[48rem]">
                    {heroHighlights.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/85 px-3 py-2 shadow-soft"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                            <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="mx-auto w-full max-w-[70%] sm:max-w-[280px] lg:mr-0 lg:max-w-[400px]">
                    <div className="overflow-hidden rounded-xl border border-white/80 bg-white shadow-soft">
                      <Image
                        src={doctor.heroImage}
                        alt="AIIMS-trained orthopaedic doctor in Visakhapatnam during consultation"
                        width={3800}
                        height={4900}
                        priority
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 280px, 400px"
                        className="h-auto w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="About Doctor"
              title="Clinical expertise shaped by AIIMS training, fellowship exposure, and patient-first recovery care"
              description="Serving patients across Visakhapatnam and Vizag with focused expertise in sports injury care, arthroscopy, robotic joint replacement, and paediatric orthopaedics."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal className="rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
                <p className="text-base leading-8 text-muted">
                  Dr. Sandeep Kanugula is an AIIMS-trained orthopaedic doctor in Visakhapatnam
                  with advanced academic training from NIMS Hyderabad and fellowship exposure at
                  Ganga Hospital, Coimbatore. His care is centered on arthroscopy, sports
                  injuries, robotic joint replacement, paediatric orthopaedics, and clear
                  recovery-focused planning.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {aboutPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.5rem] border border-brand-100 bg-brand-50/60 px-4 py-4"
                    >
                      <p className="text-sm leading-7 text-ink">{point}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100} className="rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-700">Authority Snapshot</p>
                <div className="mt-4 space-y-4">
                  <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Training</p>
                    <p className="mt-2 text-lg font-semibold text-ink">AIIMS, New Delhi</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Education</p>
                    <p className="mt-2 text-lg font-semibold text-ink">NIMS Hyderabad</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Fellowship</p>
                    <p className="mt-2 text-lg font-semibold text-ink">Ganga Hospital, Coimbatore</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Current Practice</p>
                    <p className="mt-2 text-lg font-semibold text-ink">{doctor.location}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Services"
              title="Specialized orthopaedic services with priority focus on sports injuries, arthroscopy, and advanced joint care"
              description="Serving patients across Visakhapatnam and Vizag with stronger focus on arthroscopy, sports injuries, robotic joint replacement, and paediatric orthopaedics while continuing broader orthopaedic care."
              centered
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {featuredServices.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 70}
                  className="h-full rounded-[2rem] border border-white bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
                      0{index + 1}
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                    <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-brand-700">
                      Book consultation
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Additional Treatment Areas
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {additionalServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4"
                  >
                    <h3 className="text-sm font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="profile" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal className="rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6 md:p-8">
                <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50 shadow-soft sm:max-w-[260px]">
                  <Image
                    src={doctor.profileImage}
                    alt={`Portrait of ${doctor.name}, orthopaedic doctor in Visakhapatnam`}
                    width={615}
                    height={910}
                    sizes="(max-width: 768px) 70vw, 320px"
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <SectionHeading
                  eyebrow="Doctor Profile"
                  title="Orthopaedic expertise built on strong training, modern techniques, and recovery-focused care"
                  description="AIIMS training, NIMS academic grounding, and Ganga Hospital fellowship exposure presented with clear focus on the doctor's strongest treatment areas."
                />

                <div className="mt-6 rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
                  <h3 className="font-display text-4xl text-ink">{doctor.name}</h3>
                  <p className="mt-2 text-lg font-medium text-brand-700">{doctor.specialty}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4 sm:col-span-2">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Credentials</p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {credentials.map((item) => (
                          <p key={item} className="text-base font-semibold text-ink">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Experience</p>
                      <p className="mt-2 text-lg font-semibold text-ink">{doctor.experience}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Current Practice</p>
                      <p className="mt-2 text-lg font-semibold text-ink">{doctor.location}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {profilePoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-[1.5rem] border border-brand-100 bg-brand-50/60 px-4 py-4"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-soft">
                          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                            <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                          </svg>
                        </span>
                        <p className="text-sm leading-7 text-ink">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.75rem] border border-brand-100 bg-white p-5 shadow-soft">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                      Specializations
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {specializations.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-brand-100 bg-brand-50 px-3.5 py-2 text-xs font-semibold text-brand-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section
            id="why-us"
            className="bg-[linear-gradient(135deg,#0b3f86_0%,#0a58b0_52%,#0f3c80_100%)] py-14 text-white sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Why patients choose Dr. Sandeep Kanugula"
                description="Sharper trust signals help new patients understand the doctor's training, focus areas, and treatment approach at a glance."
                theme="dark"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {differentiators.map((item, index) => (
                  <Reveal
                    key={item}
                    delay={index * 60}
                    className="rounded-[1.75rem] border border-white/10 bg-white/8 px-5 py-5 backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/12 text-brand-100">
                        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                          <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                        </svg>
                      </span>
                      <p className="text-sm font-semibold leading-6 text-white">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Photo Gallery"
              title="Focused consultation and procedure visuals that support the doctor's strongest specialties"
              description="A restrained gallery keeps the page premium while reinforcing sports injury care, arthroscopy planning, and advanced orthopaedic treatment."
              centered
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {galleryImages.map((image, index) => (
                <Reveal
                  key={image.src}
                  delay={index * 60}
                  className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="text-sm font-semibold text-ink">{image.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by patients across Visakhapatnam"
              description="A grounded tone and clean presentation reinforce trust without adding noise."
              centered
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  key={`${testimonial.name}-${index}`}
                  delay={index * 60}
                  className="h-full rounded-[2rem] border border-white bg-white p-6 shadow-soft"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-1 text-brand-500" aria-hidden="true">
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <StarIcon key={starIndex} />
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-8 text-muted">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="mt-auto border-t border-line pt-5">
                      <p className="text-base font-semibold text-ink">{testimonial.name}</p>
                      <p className="mt-1 text-sm text-brand-700">{testimonial.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800"
              >
                Book your consultation today
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked orthopaedic questions"
              description="Short, mobile-friendly answers keep the focus on sports injuries, arthroscopy, robotic joint replacement, paediatric orthopaedics, and booking clarity."
              centered
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq, index) => (
                <Reveal
                  key={faq.question}
                  delay={index * 50}
                  className="rounded-[2rem] border border-white bg-white p-6 shadow-soft"
                >
                  <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-2 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                    Social & Reviews
                  </p>
                  <p className="mt-2 text-base leading-7 text-muted">
                    Explore recent updates, patient feedback, and more about the doctor in a clean,
                    low-friction way.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("#") ? undefined : "_blank"}
                      rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-3 rounded-full border border-brand-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-100"
                    >
                      <SocialIcon kind={link.kind} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Book Consultation"
                  title="Call, WhatsApp, or book your consultation in seconds."
                  description="Connect quickly for arthroscopy, sports injury care, robotic joint replacement, paediatric orthopaedics, or broader orthopaedic treatment in Visakhapatnam and Vizag."
                />

                <div className="mt-6 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
                  <p className="text-base leading-7 text-muted">
                    Call, WhatsApp, or book your consultation in seconds.
                  </p>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Phone</p>
                      <a href={doctor.phoneLink} className="mt-2 block text-lg font-semibold text-ink sm:text-xl">
                        {doctor.phoneDisplay}
                      </a>
                    </div>

                    <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Hospital</p>
                      <p className="mt-2 text-lg font-semibold text-ink sm:text-xl">{doctor.location}</p>
                    </div>

                    <div className="rounded-[1.5rem] border border-line bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-ink">Consultation support</p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Arthroscopy, sports injury treatment, robotic joint replacement,
                        paediatric orthopaedics, fracture care, and broader orthopaedic guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <ContactForm />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/70 bg-white/85">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-display text-3xl text-ink">{doctor.name}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-brand-700">
                  Orthopaedic Specialist in Visakhapatnam
                </p>
                <div className="mt-5 space-y-2 text-sm leading-7 text-muted">
                  <p>Q1 Hospitals, Visakhapatnam</p>
                  <p>{doctor.phoneDisplay}</p>
                  <p>{doctor.email}</p>
                  <p>Trusted orthopaedic care in Vizag</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("#") ? undefined : "_blank"}
                      rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-2 text-xs font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
                    >
                      <SocialIcon kind={link.kind} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-brand-100 bg-brand-50/80 px-5 py-4 text-sm shadow-soft">
                <p className="font-semibold text-ink">Emergency? Call Now</p>
                <a href={doctor.phoneLink} className="mt-2 inline-flex font-semibold text-brand-700">
                  {doctor.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <StickyContactBar />
    </>
  );
}

