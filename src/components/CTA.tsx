import { SmartLink } from "@/components/SmartLink";

type CTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
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
  links?: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
};

export function CTA({
  eyebrow = "Next Step",
  title,
  description,
  primaryAction,
  secondaryAction,
  links = [],
  className = ""
}: CTAProps) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`.trim()}>
      <div className="rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>
        </div>

        <div className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <SmartLink
            href={primaryAction.href}
            target={primaryAction.target}
            rel={primaryAction.rel}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800 sm:flex-1"
          >
            {primaryAction.label}
          </SmartLink>

          {secondaryAction ? (
            <SmartLink
              href={secondaryAction.href}
              target={secondaryAction.target}
              rel={secondaryAction.rel}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50 sm:flex-1"
            >
              {secondaryAction.label}
            </SmartLink>
          ) : null}
        </div>

        {links.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <SmartLink
                key={link.href}
                href={link.href}
                className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-800 transition hover:border-brand-200 hover:bg-brand-100"
              >
                {link.label}
              </SmartLink>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
