import Link from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: LinkProps & { variant?: "primary" | "secondary"; className?: string }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 dark:focus-visible:ring-zinc-500/60";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      : "border border-zinc-300/70 bg-transparent text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900";

  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}

