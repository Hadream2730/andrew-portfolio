import { Container } from "@/components/ui/Container";
import { site } from "@/content";

export default function ContactPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Contact
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Use the scheduling link to book time.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={site.contact.calendly}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Scheduling
              </div>
              <div className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Book a call
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {site.contact.calendly}
              </div>
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}

