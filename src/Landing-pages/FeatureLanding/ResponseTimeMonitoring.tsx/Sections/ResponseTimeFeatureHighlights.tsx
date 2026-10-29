import Link from 'next/link';

const features = [
  {
    title: 'Re-checks before alerting',
    description:
      'Before we alert you, a different data center in the same region re-checks the failure.',
  },
  {
    title: 'Recurring notifications',
    description:
      'Set threshold and recurrence parameters so you do not miss any serious outages.',
  },
  {
    title: 'Share incident updates',
    description: 'Send status updates via email to your Status page subscribers.',
  },
  {
    title: 'Website uptime',
    description: 'Track the uptime of your website and receive live notifications when something happens.',
  },
  {
    title: 'Domain and SSL monitoring',
    description:
      'Get alerts 30, 14 and 7 days before your domain or SSL certificate expires, and on the expiry day.',
  },
  {
    title: 'Add team members',
    description: 'Share access with your coworkers, keep them notified, and let them manage monitors.',
  },
];

export default function ResponseTimeFeatureHighlights() {
  return (
    <section className="bg-[#111821] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Explore more uptime monitoring features.
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="flex gap-3">
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
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/enterprise"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-sky-400/70 px-5 text-xs font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
          >
            Book an Enterprise demo
          </Link>
        </div>
      </div>
    </section>
  );
}
