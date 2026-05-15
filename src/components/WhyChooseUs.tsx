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
      className="relative overflow-hidden bg-brand-900 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 medical-grid opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} theme="dark" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 60}
              className="group rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-sm transition hover:border-accent-500/30 hover:bg-white/10"
            >
              <div className="flex flex-col gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-500 transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M7.63 13.23 4.4 10l-1.17 1.18 4.4 4.4L16.77 6.4 15.6 5.23l-7.97 8Z" />
                  </svg>
                </span>
                <p className="text-base font-semibold leading-7 text-white">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
