import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";

type WhyChooseUsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export function WhyChooseUs({ id, eyebrow, title, description, items }: WhyChooseUsProps) {
  return (
    <section
      id={id}
      className="bg-[linear-gradient(135deg,#0b3f86_0%,#0a58b0_52%,#0f3c80_100%)] py-14 text-white sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} theme="dark" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
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
  );
}
