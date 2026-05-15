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

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1 rounded-[1.5rem] border-l-4 border-accent-500 bg-gradient-to-br from-white to-brand-50 px-5 py-5 shadow-sm sm:col-span-2 lg:col-span-3">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-700">Medical Journey & Credentials</p>
                <div className="mt-6 flex flex-col gap-8">
                  {credentials.map((item, i) => (
                    <div key={item} className="relative flex items-start gap-5">
                      {i !== credentials.length - 1 && (
                        <div className="absolute left-4 top-10 bottom-[-32px] w-0.5 bg-brand-200"></div>
                      )}
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-900 to-brand-700 text-accent-500 shadow-md ring-4 ring-white">
                        <span className="text-sm font-bold">{i + 1}</span>
                      </div>
                      <p className="mt-1 text-base font-bold text-ink">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-line bg-white px-5 py-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-700">Experience</p>
                <p className="mt-2 text-xl font-bold text-ink">{experience}</p>
              </div>

              <div className="rounded-[1.5rem] border border-line bg-white px-5 py-5 shadow-sm sm:col-span-1 lg:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-700">Current Practice</p>
                <p className="mt-2 text-xl font-bold text-ink">{location}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {profilePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-[1.5rem] bg-brand-50/50 px-5 py-4 transition hover:bg-brand-50/80"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white shadow-md">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-current">
                      <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                    </svg>
                  </span>
                  <p className="text-base leading-7 text-ink">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-brand-100 bg-gradient-to-r from-brand-900 to-brand-800 p-6 shadow-premium">
              <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
                Clinical Focus & Specializations
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {specializations.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-700 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
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
