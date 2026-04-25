import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/ui/Container";
import { capabilities, experience, metrics, projects, site, stack } from "@/content";
import Image from "next/image";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <main className="flex flex-col">
      {/* 1) Hero */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <Tag>{site.role}</Tag>
                <Tag>{site.location}</Tag>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
                {site.tagline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                {site.summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={site.ctas.primary.href} variant="primary">
                  {site.ctas.primary.label}
                </ButtonLink>
                <ButtonLink href={site.ctas.secondary.href} variant="secondary">
                  {site.ctas.secondary.label}
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                    <Image
                      src="/avatar.png"
                      alt={`${site.name} headshot`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {site.name}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-300">
                      {site.role}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {site.location}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Focus areas
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <li>LLM applications + agents</li>
                  <li>Evaluation + observability</li>
                  <li>Production ML systems (MLOps)</li>
                  <li>Applied ML (NLP/CV)</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2) Impact metrics */}
      <section className="border-y border-zinc-200/70 bg-white py-10 dark:border-zinc-800/70 dark:bg-black">
        <Container>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.slice(0, 4).map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {m.label}
                </dt>
                <dd className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {m.value}
                </dd>
                {m.detail ? (
                  <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    {m.detail}
                  </dd>
                ) : null}
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 3) Featured case studies */}
      <Section
        id="featured"
        eyebrow="Case studies"
        title="Featured work"
        description="Outcome-first case studies with enough technical depth to evaluate senior-level scope."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* 4) Capabilities */}
      <Section
        id="capabilities"
        eyebrow="What I build"
        title="Capabilities"
        description="The areas I’m most effective in—where I can lead and ship end-to-end."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {c.title}
              </div>
              <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {c.description}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5) Experience snapshot */}
      <Section
        id="experience"
        eyebrow="Experience"
        title="Recent roles"
        description="Metric-first highlights with scope, ownership, and cross-functional impact."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {experience.slice(0, 4).map((e) => (
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
                {e.bullets.slice(0, 3).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 6) Tech stack */}
      <Section
        id="stack"
        eyebrow="Stack"
        title="Tools I ship with"
        description="A curated stack—focused on what I’ve used to deliver production results."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(stack).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="text-sm font-semibold capitalize text-zinc-900 dark:text-zinc-100">
                {group.replaceAll("_", " ")}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8) Contact CTA */}
      <section className="border-t border-zinc-200/70 py-16 dark:border-zinc-800/70">
        <Container>
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              Contact
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Let’s build something that ships.
            </div>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Open to senior AI/ML roles and selective consulting/advisory
              engagements. Use the scheduling link to book time.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.contact.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Book a call
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
