import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {project.categories.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {project.timeframe}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {project.summary}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Role
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {project.role}
              </div>
              <div className="mt-5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Results
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Highlights
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          {project.links?.length ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300/70 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </main>
  );
}

