const monitoringCards = [
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

export default function MultiLocationMonitoringCardsSection() {
  return (
    <section className="bg-[#111821] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
          <h2 className="max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Monitor the services your users depend on
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:justify-self-end">
            Keep different kinds of checks organized in one monitoring workspace.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {monitoringCards.map((title, index) => (
            <article
              key={title}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-sky-400/10 text-sky-300">
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
              <h3 className="text-xs font-semibold">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
