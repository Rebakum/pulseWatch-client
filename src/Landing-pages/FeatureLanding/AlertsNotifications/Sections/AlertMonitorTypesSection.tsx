import { Activity, Globe2, ShieldCheck } from 'lucide-react';

const types = [
  { title: 'Response time', Icon: Activity },
  { title: 'SSL expiry', Icon: ShieldCheck },
  { title: 'Domain expiry', Icon: Globe2 },
];

export default function AlertMonitorTypesSection() {
  return (
    <section className="bg-[#111821] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-3 sm:grid-cols-[1fr_0.8fr] sm:items-end">
          <h2 className="max-w-md text-2xl font-bold tracking-tight sm:text-3xl">
            Know more than
            <br />
            just{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">up or down.</span>
          </h2>
          <p className="max-w-md text-xs leading-relaxed text-sky-200/80 sm:justify-self-end">
            Multi-location checks, response time tracking, SSL and domain expiry alerts. The details
            that turn raw uptime data into something you can actually action.
          </p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {types.map(({ title, Icon }) => (
            <article
              key={title}
              className="flex min-h-[72px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-[#101721]">
                <Icon className="size-4 text-sky-300" aria-hidden="true" strokeWidth={1.8} />
              </span>
              <h3 className="text-xs font-semibold">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}