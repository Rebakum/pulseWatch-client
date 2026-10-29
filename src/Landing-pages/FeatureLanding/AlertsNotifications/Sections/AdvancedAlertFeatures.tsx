import Link from 'next/link';
import {
  BellRing,
  CalendarClock,
  Clock3,
  MapPin,
  MessageSquareText,
  Siren,
} from 'lucide-react';

const features = [
  {
    title: 'Recurring notifications',
    description:
      'Set threshold and recurrence parameters so that you don’t miss any serious outage.',
    Icon: BellRing,
  },
  {
    title: 'Maintenance windows',
    description: 'Set up maintenance windows to pause monitoring during the maintenance.',
    Icon: CalendarClock,
  },
  {
    title: 'Incident management',
    description:
      'Get a single overview of all incidents. Filter by status, root cause, or custom tags, tag teammates for instant collaboration, and push updates to your status pages.',
    Icon: Siren,
  },
  {
    title: 'Response time monitoring',
    description:
      'See your response times in a chart and get alerts when your website or service responds slower than usual.',
    Icon: Clock3,
  },
  {
    title: 'Multi-location checks',
    description:
      'Create monitors with specific monitoring regions you can choose and catch issues that only appear in specific locations.',
    Icon: MapPin,
  },
  {
    title: 'SMS and voice call notifications',
    description: 'No internet? We can call or text you when something goes wrong.',
    Icon: MessageSquareText,
  },
];

export default function AdvancedAlertFeatures() {
  return (
    <section className="bg-[#111821] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="bg-brand-gradient bg-clip-text text-transparent">Advanced features</span>{' '}
          for advanced users.
        </h2>
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
          {features.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className={`flex gap-3 border-white/10 py-5 ${
                index < features.length - 2 ? 'border-b' : ''
              }`}
            >
              <Icon
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-sky-300"
                strokeWidth={1.8}
              />
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-sky-400/70 px-5 text-xs font-semibold text-sky-200 transition-colors hover:bg-sky-400/10"
          >
            Book an Enterprise demo
          </Link>
        </div>
      </div>
    </section>
  );
}