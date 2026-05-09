import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";

type ProfileProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  specialty: string;
  credentials: string[];
  experience: string;
  location: string;
  profilePoints: string[];
  specializations: string[];
};

export function Profile({
  id,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  name,
  specialty,
  credentials,
  experience,
  location,
  profilePoints,
  specializations
}: ProfileProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6 md:p-8">
          <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50 shadow-soft sm:max-w-[260px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={615}
              height={910}
              sizes="(max-width: 768px) 70vw, 320px"
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />

          <div className="mt-6 rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
            <h2 className="font-display text-4xl text-ink">{name}</h2>
            <p className="mt-2 text-lg font-medium text-brand-700">{specialty}</p>

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
                <p className="mt-2 text-lg font-semibold text-ink">{experience}</p>
              </div>
              <div className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-700">Current Practice</p>
                <p className="mt-2 text-lg font-semibold text-ink">{location}</p>
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
  );
}
