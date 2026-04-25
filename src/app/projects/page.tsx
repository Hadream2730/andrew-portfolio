import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content";

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Projects
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Outcome-driven case studies. Each focuses on problem framing,
            constraints, technical approach, and measurable results.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </main>
  );
}

