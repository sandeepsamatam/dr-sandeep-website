import Image from "next/image";
import Script from "next/script";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import {
  benefits,
  differentiators,
  doctor,
  heroHighlights,
  navigation,
  services,
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
  availableLanguage: ["English", "Telugu", "Hindi"],
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
  }
};

const featuredServices = services.filter((service) => service.featured);
const additionalServices = services.filter((service) => !service.featured);

export default function Home() {
  return (
    <>
      <Script id="doctor-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <div className="pb-24 xl:pb-0">
        <header className="sticky top-0 z-40 border-b border-white/70 bg-white/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-700 text-sm font-bold text-white shadow-card">
                SK
              </div>
              <div>
                <p className="font-display text-xl leading-none text-ink sm:text-2xl">{doctor.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-brand-700 sm:text-xs">
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
            <div className="absolute inset-0 medical-grid opacity-50" />
            <div className="absolute left-0 top-8 h-56 w-56 rounded-full bg-brand-100/80 blur-3xl sm:h-72 sm:w-72" />
            <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl sm:h-96 sm:w-96" />

            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-16">
              <Reveal className="relative">
                <div className="inline-flex rounded-full border border-brand-100 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-soft sm:text-xs">
                  AIIMS-Trained Orthopaedic Care
                </div>

                <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[0.98] text-ink sm:text-5xl lg:text-6xl">
                  Advanced Orthopaedic Care in Visakhapatnam
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8 lg:text-lg">
                  Consult an AIIMS-trained orthopaedic specialist for joint pain, fractures, and
                  advanced bone conditions.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800"
                  >
                    Book Appointment
                  </a>
                  <a
                    href={doctor.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
                  >
                    WhatsApp Now
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-ink">
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
              </Reveal>

              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,#0f3c80_0%,#0b2f63_100%)] p-5 text-white shadow-soft sm:p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,197,255,0.42),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />

                  <div className="relative">
                    <div className="mx-auto h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-white/20 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.45)] sm:h-[110px] sm:w-[110px] lg:h-[120px] lg:w-[120px]">
                      <Image
                        src={doctor.heroImage}
                        alt={doctor.name}
                        width={240}
                        height={240}
                        className="h-full w-full object-cover object-center"
                        priority
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <p className="font-display text-3xl sm:text-4xl">{doctor.name}</p>
                      <p className="mt-1 text-sm text-brand-100 sm:text-base">{doctor.specialty}</p>
                    </div>

                    <div className="mt-5 rounded-[1.5rem] bg-white/10 p-5 text-center backdrop-blur">
                      {doctor.qualifications.map((item) => (
                        <p key={item} className="text-sm leading-7 text-slate-100">
                          {item}
                        </p>
                      ))}
                      <p className="text-sm leading-7 text-slate-100">{doctor.residency}</p>

                      <div className="mt-4 rounded-[1.25rem] border border-white/12 bg-white/8 px-4 py-3">
                        <p className="text-sm font-medium text-brand-100">{doctor.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="About Doctor"
              title="Experienced orthopaedic care with a patient-first approach"
              description="Concise, trust-building information helps patients quickly understand the doctor’s core expertise and feel confident booking a consultation."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.92fr]">
              <Reveal className="rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
                <p className="text-base leading-8 text-muted">
                  Dr. Sandeep Kanugula is an orthopaedic surgeon in Visakhapatnam with advanced
                  training from NIMS and senior residency experience at AIIMS, New Delhi. He
                  offers focused care for pain relief, mobility restoration, and clearer treatment
                  planning.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="rounded-[1.5rem] border border-brand-100 bg-brand-50/60 px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-soft">
                          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                            <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                          </svg>
                        </span>
                        <p className="text-sm font-semibold text-ink">{benefit.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100} className="rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-700">Consultation Highlights</p>
                <div className="mt-4 space-y-4">
                  <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Experience</p>
                    <p className="mt-2 text-lg font-semibold text-ink">{doctor.experience}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Hospital</p>
                    <p className="mt-2 text-lg font-semibold text-ink">{doctor.location}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Training</p>
                    <p className="mt-2 text-lg font-semibold text-ink">AIIMS, New Delhi</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Services"
              title="Comprehensive Orthopaedic Treatments"
              description="Top concerns are highlighted first so patients can find relevant treatment areas faster."
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
                More Treatment Areas
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

          <section
            id="why-us"
            className="bg-[linear-gradient(135deg,#0b3f86_0%,#0a58b0_52%,#0f3c80_100%)] py-14 text-white sm:py-16 lg:py-20"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Why patients choose Dr. Sandeep Kanugula"
                description="Short, high-trust points improve clarity and reduce friction for first-time visitors."
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

          <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Book Consultation"
                  title="Reach the clinic quickly and book in seconds"
                  description="Fast contact details and a simple form keep the lead capture experience clear and usable on mobile."
                />

                <div className="mt-6 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
                  <p className="text-base leading-7 text-muted">
                    Call now for immediate consultation or book your appointment in seconds.
                  </p>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Phone</p>
                      <a href={doctor.phoneLink} className="mt-2 block text-lg font-semibold text-ink sm:text-xl">
                        {doctor.phoneDisplay}
                      </a>
                    </div>

                    <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Location</p>
                      <p className="mt-2 text-lg font-semibold text-ink sm:text-xl">{doctor.location}</p>
                    </div>

                    <div className="rounded-[1.5rem] border border-line bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-ink">Consultation support</p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Joint pain, fractures, sports injuries, arthritis care, and treatment
                        planning with clear next steps.
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
