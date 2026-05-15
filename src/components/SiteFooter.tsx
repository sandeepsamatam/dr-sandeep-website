import { SmartLink } from "@/components/SmartLink";
import { doctor, socialLinks } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.93 1.32a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.76 3.76 0 0 0 12 8.25Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="m12 2.6 2.88 5.84 6.45.94-4.67 4.55 1.1 6.43L12 17.34 6.24 20.36l1.1-6.43L2.67 9.38l6.45-.94L12 2.6Z" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 12.25A4.62 4.62 0 1 0 7.38 7.63 4.63 4.63 0 0 0 12 12.25Zm0 1.75c-4.09 0-7.5 2.33-7.5 5.25 0 .41.34.75.75.75h13.5a.75.75 0 0 0 .75-.75C19.5 16.33 16.09 14 12 14Z" />
    </svg>
  );
}

function SocialIcon({ kind }: { kind: string }) {
  if (kind === "instagram") {
    return <InstagramIcon />;
  }

  if (kind === "reviews") {
    return <StarIcon />;
  }

  return <ProfileIcon />;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-white/85">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-3xl text-ink">{doctor.name}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-brand-700">
              Orthopaedic Specialist in Visakhapatnam
            </p>
            <div className="mt-5 space-y-2 text-sm leading-7 text-muted">
              <p><strong>Primary Location:</strong> Q1 Hospitals, Visakhapatnam</p>
              <p><strong>Areas Served:</strong> MVP Colony, Gajuwaka, Madhurawada, Seethammadhara, Vizag</p>
              <p>{doctor.phoneDisplay}</p>
              <p>{doctor.email}</p>
              <p>Trusted premium orthopaedic care in Visakhapatnam</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("/") ? undefined : link.href.startsWith("#") ? undefined : "_blank"}
                  rel={link.href.startsWith("/") ? undefined : link.href.startsWith("#") ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-2 text-xs font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
                >
                  <SocialIcon kind={link.kind} />
                  <span>{link.label}</span>
                </SmartLink>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-brand-100 bg-brand-50/80 px-5 py-4 text-sm shadow-soft">
            <p className="font-semibold text-ink">Emergency? Call Now</p>
            <SmartLink href={doctor.phoneLink} className="mt-2 inline-flex font-semibold text-brand-700">
              {doctor.phoneDisplay}
            </SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
