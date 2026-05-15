import Image from "next/image";
import { SmartLink } from "@/components/SmartLink";
import { Reveal } from "@/components/reveal";

type HeroProps = {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  primaryAction: {
    label: string;
    href: string;
    target?: string;
    rel?: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
    target?: string;
    rel?: string;
  };
  id?: string;
  compact?: boolean;
  largeHeading?: boolean;
};

export function Hero({
  badge,
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
  primaryAction,
  secondaryAction,
  id = "home",
  compact = false,
  largeHeading = false
}: HeroProps) {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-0 medical-grid opacity-[0.05]" />
      <div className="absolute left-0 top-8 h-52 w-52 rounded-full bg-brand-200/40 blur-[100px] sm:h-80 sm:w-80" />
      <div className="absolute right-0 top-14 h-64 w-64 rounded-full bg-accent-500/15 blur-[120px] sm:h-96 sm:w-96" />

      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${compact ? "py-6 sm:py-8 lg:py-10" : "py-6 sm:py-8 lg:py-9"}`}>
        <Reveal className="relative grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="inline-flex rounded-full border border-accent-500/30 bg-gradient-to-r from-brand-50 to-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-800 shadow-sm sm:text-xs">
              {badge}
            </div>

            <h1
              className={`mt-3 max-w-3xl font-display leading-[0.98] text-ink sm:text-5xl ${
                largeHeading ? "text-[2.15rem] lg:max-w-2xl lg:text-[3.45rem]" : "text-[2.15rem] lg:max-w-3xl lg:text-[3.2rem]"
              }`}
            >
              {title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-7 lg:text-lg">
              {description}
            </p>

            <div className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row lg:max-w-xl">
              <SmartLink
                href={primaryAction.href}
                target={primaryAction.target}
                rel={primaryAction.rel}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-900 to-brand-700 px-6 py-3.5 text-sm font-bold text-white shadow-premium transition hover:from-brand-800 hover:to-brand-600 sm:flex-1 lg:w-auto lg:flex-none"
              >
                {primaryAction.label}
              </SmartLink>

              {secondaryAction ? (
                <SmartLink
                  href={secondaryAction.href}
                  target={secondaryAction.target}
                  rel={secondaryAction.rel}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-brand-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-brand-800 backdrop-blur-md transition hover:border-brand-300 hover:bg-brand-50 sm:flex-1 lg:w-auto lg:flex-none"
                >
                  {secondaryAction.label}
                </SmartLink>
              ) : null}
            </div>

            <div className="mt-4 grid gap-2 text-sm font-medium text-ink sm:grid-cols-2 lg:max-w-[48rem]">
              {highlights.map((item) => (
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
                  src={imageSrc}
                  alt={imageAlt}
                  width={3800}
                  height={4900}
                  priority={id === "home"}
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 280px, 400px"
                  className="h-auto w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
