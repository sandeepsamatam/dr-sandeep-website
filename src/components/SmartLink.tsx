import Link from "next/link";
import type { ReactNode } from "react";

type SmartLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function SmartLink({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel
}: SmartLinkProps) {
  const isInternal = href.startsWith("/");

  if (isInternal && !target) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target={target} rel={rel} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
