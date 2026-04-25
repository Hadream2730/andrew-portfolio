import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function Section({
  title,
  eyebrow,
  description,
  children,
  id,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="max-w-2xl">
            {eyebrow ? (
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                {description}
              </p>
            ) : null}
          </div>
          {children ? <div>{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

