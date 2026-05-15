import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { doctor } from "@/lib/site";
import Image from "next/image";

type ContactProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  supportText: string;
  consultationText: string;
};

export function Contact({
  id,
  eyebrow,
  title,
  description,
  supportText,
  consultationText
}: ContactProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
        <Reveal>
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />

          <div className="mt-6 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
            <p className="text-base leading-7 text-muted">{supportText}</p>

            <div className="mt-5 grid gap-3">
              <div className="flex items-center gap-4 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
                  <Image src={doctor.profileImage} alt={doctor.name} fill className="object-cover object-top" sizes="64px" />
                </div>
                <div>
                  <p className="text-lg font-bold text-ink">{doctor.name}</p>
                  <p className="text-sm font-semibold text-brand-700">{doctor.specialty}</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Phone</p>
                <a href={doctor.phoneLink} className="mt-2 block text-lg font-bold text-ink sm:text-xl transition hover:text-brand-700">
                  {doctor.phoneDisplay}
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Hospital</p>
                <p className="mt-2 text-lg font-semibold text-ink sm:text-xl">{doctor.location}</p>
              </div>

              <div className="rounded-[1.5rem] border border-line bg-slate-50 p-4">
                <p className="text-sm font-semibold text-ink">Consultation support</p>
                <p className="mt-2 text-sm leading-7 text-muted">{consultationText}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
