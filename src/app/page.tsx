import Image from "next/image";
import Script from "next/script";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import {
  differentiators,
  doctor,
  faqs,
  galleryImages,
  heroHighlights,
  navigation,
  profilePoints,
  services,
  socialLinks,
  testimonials
} from "@/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  medicalSpecialty: "Orthopedic",
  telephone: doctor.phoneDisplay,
  email: doctor.email,
  areaServed: doctor.city,
  description:
    "AIIMS-trained orthopaedic specialist in Visakhapatnam offering fracture care, spine treatment, joint replacement, sports injury care, and pediatric orthopaedics.",
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
  knowsAbout: services.map((service) => service.title)
};

const featuredServices = services.filter((service) => service.featured);
const additionalServices = services.filter((service) => !service.featured);

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.93 1.32a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.76 3.76 0 0 0 12 8.25Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M21.6 12.23c0-.7-.06-1.22-.19-1.76H12v3.31h5.53a4.87 4.87 0 0 1-2.06 3.2l2.9 2.25c1.69-1.56 3.23-3.98 3.23-6.99ZM12 22c2.7 0 4.97-.9 6.63-2.44l-2.9-2.25c-.81.54-1.86.93-3.73.93-2.87 0-5.31-1.94-6.18-4.54H2.82v2.32A10 10 0 0 0 12 22Zm-6.18-8.3A5.96 5.96 0 0 1 5.5 12c0-.59.11-1.16.32-1.7V7.98H2.82A10 10 0 0 0 2 12c0 1.61.38 3.13 1.05 4.46l2.77-2.76Zm6.18-7.94c1.55 0 2.94.53 4.03 1.58l3.01-3A10.03 10.03 0 0 0 12 2a10 10 0 0 0-9.18 5.98L5.82 10.3c.87-2.6 3.31-4.54 6.18-4.54Z" />
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

  if (kind === "profile") {
    return <ProfileIcon />;
  }

  if (kind === "reviews") {
    return <StarIcon />;
  }

  return <GoogleIcon />;
}

export default function Home() {
  return (
    <>
      <Script id="doctor-schema" type="application/ld+json">
        {JSON.stringify(schema)}
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

            <div className="hidden items-center gap-2 xl:flex">
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("#") ? undefined : "_blank"}
                  rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
                >
                  <SocialIcon kind={link.kind} />
                </a>
              ))}
            </div>

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
            <div className="absolute inset-0 medical-grid opacity-45" />
            <div className="absolute left-0 top-8 h-52 w-52 rounded-full bg-brand-100/80 blur-3xl sm:h-72 sm:w-72" />
            <div className="absolute right-0 top-14 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl sm:h-96 sm:w-96" />

            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
              <Reveal className="relative grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                <div className="order-2 text-center lg:order-1 lg:text-left">
                  <div className="inline-flex rounded-full border border-brand-100 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-soft sm:text-xs">
                    AIIMS-Trained Orthopaedic Specialist
                  </div>

                  <h1 className="mt-3 max-w-3xl font-display text-[2.15rem] leading-[0.98] text-ink sm:text-5xl lg:text-[3.65rem]">
                    Advanced Orthopaedic Care in Visakhapatnam
                  </h1>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-7 lg:text-lg">
                    Consult an AIIMS-trained orthopaedic specialist for fractures, joint pain, spine
                    conditions, and advanced bone care.
                  </p>

                  <div className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row lg:max-w-none">
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

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-sm font-medium text-ink lg:justify-start">
                    {heroHighlights.map((item) => (
                      <div key={item} className="inline-flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                            <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("#") ? undefined : "_blank"}
                        rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                        className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-2 text-xs font-semibold text-brand-800 shadow-soft transition hover:border-brand-300 hover:bg-brand-50"
                      >
                        <SocialIcon kind={link.kind} />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    Trusted orthopaedic care in Vizag, serving patients across Visakhapatnam with
                    hospital-based consultation and clearer treatment guidance.
                  </p>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="mx-auto w-full max-w-[70%] sm:max-w-[280px] lg:mr-0 lg:max-w-[400px]">
                    <div className="overflow-hidden rounded-xl border border-white/80 bg-white shadow-soft">
                      <Image
                        src={doctor.heroImage}
                        alt={`${doctor.name} consulting patient in Visakhapatnam`}
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

          <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Services"
              title="Advanced orthopaedic treatments for pain relief and mobility"
              description="Serving patients across Visakhapatnam and Vizag with focused treatment areas for fractures, spine care, sports injuries, pediatric orthopaedics, and joint replacement."
              centered
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {featuredServices.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 70}
                  className="rounded-[2rem] border border-white bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                  <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-brand-700">
                    Book consultation
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Additional Treatment Areas
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {additionalServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-ink">{service.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="profile" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal className="rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6 md:p-8">
                <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50 shadow-soft">
                  <Image
                    src={doctor.profileImage}
                    alt={doctor.name}
                    width={1152}
                    height={768}
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <SectionHeading
                  eyebrow="Doctor Profile"
              title="Trusted orthopaedic expertise with clear, patient-friendly guidance"
              description="A premium healthcare website should make the doctor's credentials, training, and hospital affiliation instantly understandable."
                />

                <div className="mt-6 rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
                  <h3 className="font-display text-4xl text-ink">{doctor.name}</h3>
                  <p className="mt-2 text-lg font-medium text-brand-700">{doctor.specialty}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Qualification</p>
                      <div className="mt-2 space-y-1 text-lg font-semibold text-ink">
                        {doctor.qualifications.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Training</p>
                      <p className="mt-2 text-lg font-semibold text-ink">{doctor.residency}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Experience</p>
                      <p className="mt-2 text-lg font-semibold text-ink">{doctor.experience}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Hospital</p>
                      <p className="mt-2 text-lg font-semibold text-ink">{doctor.location}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {profilePoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-[1.5rem] border border-brand-100 bg-brand-50/60 px-4 py-4">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-soft">
                          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                            <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                          </svg>
                        </span>
                        <p className="text-sm leading-7 text-ink">{point}</p>
                      </div>
                    ))}
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
              description="Short, high-trust points reduce friction and help new visitors in Visakhapatnam and Vizag decide faster."
              theme="dark"
            />

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
              title="Clinic, consultation, and procedural snapshots"
              description="A restrained gallery adds trust and atmosphere without overwhelming the page or slowing down the first view."
              centered
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-sm font-semibold text-ink">{image.title}</p>
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
                  className="rounded-[2rem] border border-white bg-white p-6 shadow-soft"
                >
                  <div className="flex items-center gap-1 text-brand-500" aria-hidden="true">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p className="mt-4 text-base leading-8 text-muted">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="text-base font-semibold text-ink">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-brand-700">{testimonial.note}</p>
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
              description="Short answers help patients understand when to seek care and how to book quickly."
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
                    Explore recent updates and patient-facing review platforms for added credibility.
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
                  title="Call, WhatsApp, or book an appointment in seconds."
                  description="Choose the easiest way to connect and the clinic team will help you with the next step quickly across Visakhapatnam and Vizag."
                />

                <div className="mt-6 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
                  <p className="text-base leading-7 text-muted">
                    Call, WhatsApp, or book your consultation in seconds for faster orthopaedic support.
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
                        Fractures, sports injuries, spine pain, joint replacement guidance, and
                        orthopaedic care with clear next steps.
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
                  <p>Location: Q1 Hospitals, Visakhapatnam</p>
                  <p>Phone: {doctor.phoneDisplay}</p>
                  <p>Email: {doctor.email}</p>
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
