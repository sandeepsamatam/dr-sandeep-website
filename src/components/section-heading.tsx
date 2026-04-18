type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  theme = "light"
}: SectionHeadingProps) {
  const dark = theme === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span
        className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${
          dark
            ? "border border-white/10 bg-white/5 text-brand-100"
            : "border border-brand-100 bg-white text-brand-700 shadow-soft"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-4xl leading-tight md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-slate-300" : "text-muted"}`}>
        {description}
      </p>
    </div>
  );
}
