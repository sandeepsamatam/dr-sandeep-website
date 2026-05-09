import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SmartLink } from "@/components/SmartLink";

type Testimonial = {
  quote: string;
  name: string;
  note: string;
};

type TestimonialsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
  ctaHref?: string;
  ctaLabel?: string;
};

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="m12 2.6 2.88 5.84 6.45.94-4.67 4.55 1.1 6.43L12 17.34 6.24 20.36l1.1-6.43L2.67 9.38l6.45-.94L12 2.6Z" />
    </svg>
  );
}

export function Testimonials({
  id,
  eyebrow,
  title,
  description,
  testimonials,
  ctaHref,
  ctaLabel
}: TestimonialsProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} centered />

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
              <p className="mt-4 text-base leading-8 text-muted">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-auto border-t border-line pt-5">
                <p className="text-base font-semibold text-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-brand-700">{testimonial.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {ctaHref && ctaLabel ? (
        <div className="mt-8 text-center">
          <SmartLink
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800"
          >
            {ctaLabel}
          </SmartLink>
        </div>
      ) : null}
    </section>
  );
}
