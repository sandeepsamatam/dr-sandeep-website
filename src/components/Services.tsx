import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SmartLink } from "@/components/SmartLink";
import type { InfoCard } from "@/lib/seo-pages";

type ServicesProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  featured: InfoCard[];
  additional: InfoCard[];
  centered?: boolean;
  additionalLabel?: string;
  featuredActionLabel?: string;
};

export function Services({
  id,
  eyebrow,
  title,
  description,
  featured,
  additional,
  centered = true,
  additionalLabel = "Additional Treatment Areas",
  featuredActionLabel = "Explore specialty"
}: ServicesProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} centered={centered} />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {featured.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 70}
            className="group h-full rounded-[1.5rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-premium"
          >
            {service.href ? (
              <SmartLink href={service.href} className="flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand-900 to-brand-700 text-lg font-bold text-accent-500 shadow-md transition-transform group-hover:scale-110">
                  0{index + 1}
                </div>
                <h2 className="mt-6 text-xl font-bold text-ink transition-colors group-hover:text-brand-700">{service.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors group-hover:text-accent-600">
                    {featuredActionLabel}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </SmartLink>
            ) : (
              <div className="flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand-900 to-brand-700 text-lg font-bold text-accent-500 shadow-md">
                  0{index + 1}
                </div>
                <h2 className="mt-6 text-xl font-bold text-ink">{service.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-line bg-gradient-to-br from-white to-brand-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-800">
          {additionalLabel}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {additional.map((service) =>
            service.href ? (
              <SmartLink
                key={service.title}
                href={service.href}
                className="group rounded-[1.5rem] border border-white bg-white/60 px-5 py-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-md"
              >
                <h3 className="text-base font-bold text-ink group-hover:text-brand-700">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
              </SmartLink>
            ) : (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-white bg-white/60 px-5 py-5 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-base font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
