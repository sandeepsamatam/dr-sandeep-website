import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/SectionHeader";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

type GalleryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

export function Gallery({ id, eyebrow, title, description, images }: GalleryProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} centered />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <Reveal
            key={image.src}
            delay={index * 60}
            className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>
            <div className="px-4 py-4">
              <h3 className="text-sm font-semibold text-ink">{image.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
