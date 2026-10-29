const monitoringTypes = [
  'Website monitoring',
  'Keyword monitoring',
  'Ping monitoring',
  'Port monitoring',
  'Cron job monitoring',
  'DNS monitoring',
  'UDP monitoring',
  'TCP monitoring',
  'API monitoring',
];

export default function SslMonitoringTypesSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-16 text-[var(--foreground)] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
          <h2 className="max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            All you really care about monitored in one place.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:justify-self-end">
            From Websites and APIs to servers and cron jobs, PulseWatch watches every layer. Nine
            monitor types, one dashboard.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {monitoringTypes.map((type, index) => (
            <article
              key={type}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-sky-400/20 bg-sky-400/[0.06] text-sky-400">
                <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                  {index % 3 === 0 ? (
                    <path
                      d="M4 5h16v14H4zM8 9h8M8 13h5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : index % 3 === 1 ? (
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                  ) : (
                    <path
                      d="M12 3v4m0 10v4M3 12h4m10 0h4m-2.6-6.4-2.8 2.8m-7.2 7.2-2.8 2.8m0-12.8 2.8 2.8m7.2 7.2 2.8 2.8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </span>
              <h3 className="text-xs font-semibold">{type}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
