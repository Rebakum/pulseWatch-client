import Link from 'next/link';

const learningResources = [
  {
    number: '01',
    title: 'A practical guide to website availability',
    description: 'Learn which uptime signals help teams understand service health.',
  },
  {
    number: '02',
    title: 'Monitoring networks across regions',
    description: 'Explore how location and network paths affect what users experience.',
  },
  {
    number: '03',
    title: 'Choosing the right monitor type',
    description: 'Compare common checks for websites, APIs, DNS, and other services.',
  },
];

export default function MultiLocationLearningResourcesSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-12 text-[var(--foreground)] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-lg font-bold tracking-tight">Explore monitoring guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {learningResources.map((resource) => (
            <article
              key={resource.number}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <span className="text-3xl font-semibold tracking-tight text-slate-500">
                {resource.number}
              </span>
              <h3 className="mt-5 text-sm font-semibold">{resource.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {resource.description}
              </p>
              <Link
                href="/resources"
                className="mt-5 inline-flex min-h-8 items-center rounded-full border border-sky-400/60 px-4 text-[11px] font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
              >
                Read guide
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
