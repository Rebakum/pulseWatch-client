import Link from 'next/link';

const features = [
  {
    title: 'Recurring notifications',
    description:
      "Set threshold and recurrence parameters so that you don't miss any serious outage.",
  },
  {
    title: 'Maintenance windows',
    description: 'Set up maintenance windows to pause the monitoring during the maintenance.',
  },
  {
    title: 'Incident management',
    description:
      'Get a single overview of all incidents. Filter by status, root cause, or custom tags, tag teammates for instant collaboration, and push updates to your status pages.',
  },
  {
    title: 'Response time monitoring',
    description:
      'See your response times in a chart and get alerts when your website or service responds slower than usual.',
  },
  {
    title: 'Multi-location checks',
    description:
      'Create monitors with specific monitoring regions you can choose and catch issues that only appear in specific locations.',
  },
  {
    title: 'SMS and voice call notifications',
    description: 'No Internet? We can call or text you when something goes wrong.',
  },
];

export default function DnsAdvancedFeaturesSection() {
  return (
    <section className="bg-[#111821] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="text-sky-400">Advanced features</span> for advanced users.
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
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
