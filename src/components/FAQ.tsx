import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { FaqItem } from "@/lib/seo-pages";

type FAQProps = {
  eyebrow: string;
  title: string;
  description: string;
  faqs: FaqItem[];
  id?: string;
};

export function FAQ({ eyebrow, title, description, faqs, id }: FAQProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} centered />

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {faqs.map((faq, index) => (
          <Reveal
            key={faq.question}
            delay={index * 50}
            className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-bold text-brand-900">{faq.question}</h3>
            <p className="mt-3 text-base leading-7 text-muted">{faq.answer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
