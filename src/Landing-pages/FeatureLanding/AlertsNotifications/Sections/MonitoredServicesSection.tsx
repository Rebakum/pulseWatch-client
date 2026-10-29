import {
  Activity,
  Clock3,
  Code2,
  Globe2,
  KeyRound,
  Network,
  Radio,
  Server,
  Workflow,
} from 'lucide-react';

const services = [
  { title: 'Website monitoring', Icon: Globe2 },
  { title: 'Keyword monitoring', Icon: KeyRound },
  { title: 'Ping monitoring', Icon: Activity },
  { title: 'Port monitoring', Icon: Network },
  { title: 'Cron job monitoring', Icon: Clock3 },
  { title: 'DNS monitoring', Icon: Server },
  { title: 'UDP monitoring', Icon: Radio },
  { title: 'TCP monitoring', Icon: Workflow },
  { title: 'API monitoring', Icon: Code2 },
];

export default function MonitoredServicesSection() {
  return (
    <section className="bg-[#111821] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-3 sm:grid-cols-[1fr_0.8fr] sm:items-end">
          <h2 className="max-w-md text-2xl font-bold tracking-tight sm:text-3xl">
            All you really care about
            <br />
            monitored in one place.
          </h2>
          <p className="max-w-md text-xs leading-relaxed text-sky-200/80 sm:justify-self-end">
            From websites and APIs to servers and cron jobs, PulseWatch watches every layer. Nine
            monitor types, one dashboard.
          </p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, Icon }) => (
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