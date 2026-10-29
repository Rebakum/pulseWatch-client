const useCases = [
  {
    title: 'Ecommerce',
    description:
      'Keep customers informed about store availability, payment processing, and order services with real-time status updates.',
    icon: '▦',
  },
  {
    title: 'IT services',
    description:
      'Communicate service health and maintenance updates to your users from one clear, dependable page.',
    icon: '⌘',
  },
  {
    title: 'SaaS',
    description:
      'Show customers the status of your product, infrastructure, and integrations whenever they need it.',
    icon: '◈',
  },
];

export default function StatusPagePopularUseCases() {
  return (
    <section className="bg-[#111821] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
          Status page use cases
        </p>
        <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
          Popular ways to use a status page.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          Share clear, timely service information with every audience, whether you run an online store,
          a SaaS product, or critical IT services.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-sky-400/10 text-xl text-sky-300">
                {item.icon}
              </span>
              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
