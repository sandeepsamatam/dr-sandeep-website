import { doctor } from "@/lib/site";

export function StickyContactBar() {
  return (
    <>
      <a
        href={doctor.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-4 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.8)] transition hover:scale-[1.02] sm:inline-flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current text-white"
          >
            <path d="M19.05 4.94A9.87 9.87 0 0 0 12.02 2a9.96 9.96 0 0 0-8.63 14.94L2 22l5.2-1.35a10.01 10.01 0 0 0 4.81 1.23h.01c5.51 0 9.98-4.47 9.98-9.97A9.9 9.9 0 0 0 19.05 4.94ZM12.02 20.2h-.01a8.25 8.25 0 0 1-4.2-1.14l-.3-.18-3.08.8.82-3-.2-.31a8.29 8.29 0 0 1-1.28-4.43c0-4.58 3.72-8.3 8.3-8.3 2.22 0 4.3.86 5.87 2.43a8.24 8.24 0 0 1 2.42 5.87c0 4.58-3.72 8.3-8.29 8.3Zm4.55-6.2c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.96-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.44-1.36-1.69-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.65.31-.23.25-.86.84-.86 2.05 0 1.2.88 2.36 1 2.52.13.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.39.51.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </span>
        <span className="pr-1">WhatsApp</span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-100 bg-white/95 p-3 shadow-[0_-12px_35px_-24px_rgba(15,23,42,0.45)] backdrop-blur xl:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3">
          <a
            href={doctor.phoneLink}
            className="flex items-center justify-center rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800"
          >
            Call Now
          </a>
          <a
            href={doctor.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-100"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </>
  );
}
