import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(
        "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary-strong",
        variant === "secondary" &&
          "border border-line bg-surface text-foreground hover:border-primary",
        variant === "ghost" && "text-primary hover:text-primary-strong",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
