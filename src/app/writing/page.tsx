import { Container } from "@/components/ui/Container";

const writing = [
  {
    title: "Designing evals for LLM systems",
    description: "A practical approach to offline + online evaluation.",
    href: "#",
  },
  {
    title: "RAG architecture: what actually matters",
    description: "Retrieval quality, caching, and observability in practice.",
    href: "#",
  },
  {
    title: "Shipping AI safely",
    description: "Guardrails, redaction, and human-in-the-loop workflows.",
    href: "#",
  },
];

export default function WritingPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Writing
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Short notes, talks, and write-ups about building production AI
            systems.
          </p>

          <div className="mt-10 space-y-4">
            {writing.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="block rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
              >
                <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.description}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

