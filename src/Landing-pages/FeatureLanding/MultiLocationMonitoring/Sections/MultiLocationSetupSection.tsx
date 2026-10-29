import Link from 'next/link';

const setupSteps = [
  {
    title: 'Add a monitor',
    description: 'Choose a website, API, ping, or other supported monitor.',
  },
  {
    title: 'Adjust the settings',
    description: 'Set the check interval and response timeout for your service.',
  },
  {
    title: 'Choose regions and frequency',
    description: 'Pick where checks run and how often each location reports.',
    active: true,
  },
  {
    title: 'Configure alerts',
    description: 'Decide who is notified and what counts as a regional incident.',
  },
];

export default function MultiLocationSetupSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-16 text-[var(--foreground)] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
          <h2 className="max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Set up location-specific monitoring in minutes
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:justify-self-end">
            Add one monitor, select the regions you care about, and choose how regional results
            should trigger alerts.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {setupSteps.map((step, index) => (
            <article
              key={step.title}
              className={`relative overflow-hidden rounded-xl border p-4 ${
                step.active
                  ? 'border-sky-400/60 bg-sky-400/[0.06]'
                  : 'border-[var(--border)] bg-[var(--surface)]'
              }`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Step {index + 1}
              </span>
              <h3 className={`mt-2 text-sm font-semibold ${step.active ? 'text-sky-300' : ''}`}>
                {step.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
              {step.active ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-sky-400 to-violet-400"
                />
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/register"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-sky-400/70 px-5 text-xs font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
          >
            Start monitoring
          </Link>
        </div>
      </div>
    </section>
  );
}
