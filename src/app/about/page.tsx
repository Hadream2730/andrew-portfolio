import { Container } from "@/components/ui/Container";
import { education, experience, site } from "@/content";

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            About
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {site.summary}
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>
          <div className="mt-6 space-y-6">
            {experience.map((e) => (
              <div
                key={`${e.company}-${e.title}`}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {e.title}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-300">
                      {e.company}
                    </div>
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {e.timeframe}
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Education
          </h2>
          <div className="mt-6 space-y-6">
            {education.map((e) => (
              <div
                key={`${e.school}-${e.degree}`}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {e.degree}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-300">
                      {e.school}
                    </div>
                  </div>
                  {e.timeframe ? (
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {e.timeframe}
                    </div>
                  ) : null}
                </div>
                {e.details?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

