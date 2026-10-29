const insights = [
  { title: 'Response time', accent: 'text-sky-400', kind: 'chart' },
  { title: 'SSL expiry', accent: 'text-blue-400', kind: 'shield' },
  { title: 'Domain expiry', accent: 'text-indigo-300', kind: 'domain' },
];

export default function DnsHealthInsightsSection() {
  return (
    <section className="bg-[#111821] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <h2 className="max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          Know more than
          <br />
          just <span className="bg-brand-gradient bg-clip-text text-transparent">up </span> or{' '}
          <span className="text-red-500">down.</span>
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:justify-self-end">
          Multi-location checks, response time tracking, SSL and domain expiry alerts. The details
          that turn raw uptime data into something you can actually act on.
        </p>
        <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="flex min-h-14 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4"
            >
              <span
                aria-hidden="true"
                className={`grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] ${insight.accent}`}
              >
                {insight.kind === 'shield' ? (
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="M12 3 19 6v5c0 4.6-2.9 8-7 10-4.1-2-7-5.4-7-10V6l7-3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : insight.kind === 'domain' ? (
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <rect
                      x="3.5"
                      y="6"
                      width="17"
                      height="12"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M7 10h10M7 14h6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="M4 18V6m0 12h16M7 14l4-4 3 2 5-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <h3 className="text-xs font-semibold">{insight.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
