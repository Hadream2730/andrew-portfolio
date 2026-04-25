import Link from "next/link";
import type { Project } from "@/content/projects";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.timeframe}
          </div>
        </div>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.categories.slice(0, 4).map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

