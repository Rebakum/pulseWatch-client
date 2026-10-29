import Link from 'next/link';

const features = [
  {
    title: 'Stay informed with subscribers',
    description:
      'Let customers subscribe to status updates and keep them in the loop when an incident changes.',
    detail: 'Email subscriptions',
  },
  {
    title: 'Share progress as it happens',
    description:
      'Post incident updates and maintenance announcements directly where your users can find them.',
    detail: 'Incident updates',
  },
  {
    title: 'Bring status into your website',
    description:
      'Display uptime and service health in your product or website with an embeddable status widget.',
    detail: 'Status widget',
  },
];

export default function StatusPageMoreFeatures() {
  return (
    <section className="bg-[#111821] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
          More ways to keep customers informed.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          Go beyond a status dashboard and make service communication part of your customer
          experience.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <span className="grid h-32 place-items-center rounded-xl border border-white/5 bg-gradient-to-br from-sky-400/[0.08] to-indigo-500/[0.08]">
                <span className="grid size-16 place-items-center rounded-2xl border border-sky-300/20 bg-sky-400/10 text-2xl text-sky-300">
                  {feature.detail === 'Email subscriptions'
                    ? '✉'
                    : feature.detail === 'Incident updates'
                      ? '↗'
                      : '▣'}
                </span>
              </span>
              <h3 className="mt-5 text-sm font-semibold">{feature.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">
                {feature.description}
              </p>
              <Link
                href="/features/status-page"
                className="mt-5 text-xs font-semibold text-sky-300 transition-colors hover:text-sky-200"
              >
                {feature.detail} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
