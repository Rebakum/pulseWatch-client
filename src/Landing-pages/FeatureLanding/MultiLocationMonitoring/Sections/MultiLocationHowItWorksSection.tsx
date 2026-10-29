import Link from 'next/link';

const multiLocationSteps = [
  {
    title: 'One monitor, many regions',
    description:
      'Attach several locations to one monitor instead of maintaining separate copies.',
  },
  {
    title: 'Regional response thresholds',
    description:
      'Set the number of failed checks required before an alert is raised in each region.',
  },
  {
    title: 'Incidents that reflect reality',
    description:
      'A regional issue can be tracked without treating every location as unavailable.',
  },
  {
    title: 'Configuration that can grow',
    description:
      'Change locations or alert rules as your audience and infrastructure evolve.',
  },
];

export default function MultiLocationHowItWorksSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--background)] px-5 py-16 text-[var(--foreground)] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          How multi-location monitoring works
        </h2>
        <div className="mt-9 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {multiLocationSteps.map((step, index) => (
            <article key={step.title} className="flex gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-sky-400/40 text-xs font-semibold text-sky-300">
                {index + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link
            href="/enterprise"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-sky-400/70 px-5 text-xs font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
          >
            Discuss your monitoring needs
          </Link>
        </div>
      </div>
    </section>
  );
}
