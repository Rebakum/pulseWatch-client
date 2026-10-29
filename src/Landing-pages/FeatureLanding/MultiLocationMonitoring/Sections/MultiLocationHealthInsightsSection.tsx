const insights = [
  { title: 'Response time', value: 'Compare by region', accent: 'text-sky-300' },
  { title: 'SSL expiry', value: 'Renew with time to spare', accent: 'text-violet-300' },
  { title: 'Domain expiry', value: 'Keep renewals visible', accent: 'text-indigo-300' },
];

export default function MultiLocationHealthInsightsSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-16 text-[var(--foreground)] sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <h2 className="max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          See more than just{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">up</span> or{' '}
          <span className="text-red-500">down</span>
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          Regional checks add response-time, certificate, and domain context to your service health
          view, so teams can investigate changes with greater clarity.
        </p>
        <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <span
                aria-hidden="true"
                className={`grid size-9 shrink-0 place-items-center rounded-lg bg-white/[0.04] ${item.accent}`}
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="M4 18V6m0 12h16M7 14l4-4 3 2 5-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-xs font-semibold">{item.title}</h3>
                <p className="mt-1 text-[11px] text-[var(--muted)]">{item.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
