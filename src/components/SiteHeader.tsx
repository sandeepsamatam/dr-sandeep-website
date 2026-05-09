import Image from "next/image";
import { SmartLink } from "@/components/SmartLink";
import { doctor, navigation } from "@/lib/site";
import { routePaths } from "@/lib/seo-pages";

type SiteHeaderProps = {
  home?: boolean;
};

export function SiteHeader({ home = false }: SiteHeaderProps) {
  const navItems = home
    ? navigation
    : [
        { label: "About", href: routePaths.about },
        { label: "Services", href: routePaths.services },
        { label: "Profile", href: `${routePaths.about}#profile-highlights` },
        { label: "Gallery", href: `${routePaths.about}#clinical-gallery` },
        { label: "Contact", href: routePaths.book }
      ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <SmartLink href={home ? "#home" : routePaths.home} className="flex min-w-0 items-center gap-3">
          <div className="h-9 w-9 overflow-hidden rounded-full border border-brand-100 bg-brand-50 shadow-soft sm:h-11 sm:w-11">
            <Image
              src={doctor.profileImage}
              alt={doctor.name}
              width={96}
              height={96}
              sizes="44px"
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-lg leading-none text-ink sm:text-2xl">
              {doctor.name}
            </p>
            <p className="mt-1 truncate text-[11px] uppercase tracking-[0.22em] text-brand-700 sm:text-xs">
              {doctor.specialty}
            </p>
          </div>
        </SmartLink>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-700"
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <SmartLink
            href={home ? "#contact" : routePaths.book}
            className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800"
          >
            Book Appointment
          </SmartLink>
          <SmartLink
            href={doctor.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
          >
            WhatsApp Now
          </SmartLink>
        </div>
      </div>
    </header>
  );
}
