import { Container } from "@/components/ui/Container";
import { site } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-zinc-800/70">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-600 dark:text-zinc-300">
            <div className="font-medium text-zinc-900 dark:text-zinc-100">
              {site.name}
            </div>
            <div>{site.role}</div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={site.contact.calendly}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

