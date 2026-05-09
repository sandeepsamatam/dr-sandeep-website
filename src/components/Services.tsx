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
            className="h-full rounded-[2rem] border border-white bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
          >
            {service.href ? (
              <SmartLink href={service.href} className="flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
                  0{index + 1}
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-brand-700">
                  {featuredActionLabel}
                </span>
              </SmartLink>
            ) : (
              <div className="flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
                  0{index + 1}
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <div className="mt-6 rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
          {additionalLabel}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {additional.map((service) =>
            service.href ? (
              <SmartLink
                key={service.title}
                href={service.href}
                className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4 transition hover:border-brand-100 hover:bg-brand-50/40"
              >
                <h3 className="text-sm font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
              </SmartLink>
            ) : (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4"
              >
                <h3 className="text-sm font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
