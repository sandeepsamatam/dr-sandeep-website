import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { SnapshotItem } from "@/lib/seo-pages";

type AboutProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  body: string;
  points: string[];
  snapshotLabel?: string;
  snapshotItems: SnapshotItem[];
};

export function About({
  id,
  eyebrow,
  title,
  description,
  body,
  points,
  snapshotLabel = "Authority Snapshot",
  snapshotItems
}: AboutProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
          <p className="text-base leading-8 text-muted">{body}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {points.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-brand-100 bg-brand-50/60 px-4 py-4"
              >
                <p className="text-sm leading-7 text-ink">{point}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="rounded-[2rem] border border-white bg-white p-6 shadow-soft md:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-700">{snapshotLabel}</p>
          <div className="mt-4 space-y-4">
            {snapshotItems.map((item) => (
              <div key={`${item.label}-${item.value}`} className="rounded-[1.5rem] border border-line bg-slate-50 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
