import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyContactBar } from "@/components/sticky-contact-bar";

type PageShellProps = {
  children: ReactNode;
  home?: boolean;
};

export function PageShell({ children, home = false }: PageShellProps) {
  return (
    <>
      <div className="pb-24 xl:pb-0">
        <SiteHeader home={home} />
        {children}
        <SiteFooter />
      </div>
      <StickyContactBar />
    </>
  );
}
