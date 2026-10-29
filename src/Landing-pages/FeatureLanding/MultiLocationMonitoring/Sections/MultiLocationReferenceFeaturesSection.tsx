import Link from 'next/link';

const referenceFeatureItems = [
  {
    title: 'Reliable notifications',
    description: 'Get an alert when a monitored region reports a real service issue.',
  },
  {
    title: 'Flexible request limits',
    description: 'Tune request timeouts to match the way your service responds.',
  },
  {
    title: 'Shared incident updates',
    description: 'Keep your team and status page in sync as an incident develops.',
  },
  {
    title: 'Regional uptime',
    description: 'Compare availability across the locations that matter to your users.',
  },
  {
    title: 'Domain and certificate checks',
    description: 'Stay ahead of domain renewals and expiring SSL certificates.',
  },
  {
    title: 'Team collaboration',
    description: 'Give teammates the context they need to resolve service issues.',
  },
];

export default function MultiLocationReferenceFeaturesSection() {
  return (
    <section className="bg-[#111821] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="bg-brand-gradient bg-clip-text text-transparent">Explore</span> more ways
          to <span className="bg-brand-gradient bg-clip-text text-transparent">KEEP </span>services
          reliable
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {referenceFeatureItems.map((item) => (
            <article key={item.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sky-400/10 text-sky-300"
              >
                <svg viewBox="0 0 20 20" fill="none" className="size-3.5">
                  <path
                    d="m4 10 4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/enterprise"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-sky-400/70 px-5 text-xs font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
          >
            Talk with our team
          </Link>
        </div>
      </div>
    </section>
  );
}
