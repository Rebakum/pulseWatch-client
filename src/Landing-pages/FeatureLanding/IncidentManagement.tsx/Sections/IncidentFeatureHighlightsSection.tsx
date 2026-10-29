import Link from 'next/link';

const features = [
  {
    title: 'Recurring notifications',
    description: "Configure recurring alerts so you never miss a critical incident, even if it's already flagged.",
  },
  {
    title: 'Set up request timeout',
    description: 'Adjust the notification delay up to 30 seconds to accommodate sites that need more time to respond.',
  },
  {
    title: 'Share incident updates',
    description: 'Send live status updates to your subscribers through your Public Status Page to keep them informed.',
  },
  {
    title: 'Website uptime',
    description: 'Continuously monitor your site’s availability, and get instant alerts for any downtime, worldwide.',
  },
  {
    title: 'Domain and SSL monitoring',
    description: 'Avoid surprise expirations with early warnings before your domain or SSL certificates run out.',
  },
  {
    title: 'Add team members',
    description: 'Give your colleagues access to the dashboard for faster, more efficient collaboration and incident resolution.',
  },
];

export default function IncidentFeatureHighlightsSection() {
  return (
    <section className="bg-[#111821] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Explore more PulseWatch <span className="text-sky-400">features.</span>
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:gap-y-10">
          {features.map((feature) => (
            <article key={feature.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sky-400/10 text-sky-400"
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
