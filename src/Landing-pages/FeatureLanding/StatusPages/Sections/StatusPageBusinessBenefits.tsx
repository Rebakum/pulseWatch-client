const benefits = [
  {
    title: 'Reduce support requests',
    description:
      'Give users a single source of truth for service health, helping your team spend less time answering repeat questions.',
  },
  {
    title: 'Build customer trust',
    description:
      'Communicate transparently during incidents and show customers that you are actively working on a resolution.',
  },
  {
    title: 'Protect revenue and credibility',
    description:
      'Keep customers informed when services are disrupted and reassure them with clear progress updates.',
  },
];

export default function StatusPageBusinessBenefits() {
  return (
    <section className="bg-[#111821] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Communicate with confidence
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Protect revenue and credibility with a status page.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            When a service issue occurs, clear communication helps customers understand what is
            happening and what to expect next.
          </p>
        </div>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sky-400/10 text-sm font-semibold text-sky-300">
                0{index + 1}
              </span>
              <span>
                <h3 className="text-sm font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{benefit.description}</p>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
