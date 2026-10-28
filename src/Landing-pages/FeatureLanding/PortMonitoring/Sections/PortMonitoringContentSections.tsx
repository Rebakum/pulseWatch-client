import Container from '@/components/common/Container';
import {
  Activity,
  ArrowUpRight,
  BellRing,
  Check,
  Clock3,
  Database,
  Globe2,
  Mail,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Wifi,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

const advancedFeatures = [
  {
    title: 'Recurring notifications',
    description: 'Repeat alerts at the interval your team needs until the port is reachable again.',
  },
  {
    title: 'Flexible maintenance windows',
    description: 'Pause checks during planned work and keep expected changes out of your alerts.',
  },
  {
    title: 'Multi-location checks',
    description: 'Verify availability from multiple regions and spot network-specific problems.',
  },
  {
    title: 'Team-ready alerting',
    description: 'Send clear incident notifications to the people responsible for each service.',
  },
];

const portSignals: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: 'Connection status',
    description: 'Know when a TCP port stops accepting connections.',
    Icon: Network,
  },
  {
    title: 'Response time',
    description: 'Track how quickly a service responds to each check.',
    Icon: Activity,
  },
  {
    title: 'Uptime history',
    description: 'See availability trends and the timing of past incidents.',
    Icon: Clock3,
  },
];

const monitoredServices: { title: string; port: string; Icon: LucideIcon }[] = [
  { title: 'Web services', port: '80 / 443', Icon: Globe2 },
  { title: 'Secure shell', port: '22', Icon: Terminal },
  { title: 'Mail servers', port: '25 / 465 / 587', Icon: Mail },
  { title: 'DNS services', port: '53', Icon: Network },
  { title: 'Databases', port: '3306 / 5432', Icon: Database },
  { title: 'File transfer', port: '21 / 22', Icon: Server },
  { title: 'Cache services', port: '6379 / 11211', Icon: Zap },
  { title: 'Custom TCP ports', port: 'Your port', Icon: Wifi },
  { title: 'Internal services', port: 'Private hosts', Icon: ShieldCheck },
];

const useCases = [
  'Check that critical services are reachable from outside your network',
  'Track database and cache availability across your infrastructure',
  'Find network issues before they affect customers or your team',
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-light">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
        <span className="text-brand-blue-light">.</span>
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PortAdvancedFeaturesSection() {
  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Built for reliable monitoring"
          title="Advanced checks for the services your team depends on"
          centered
        />
        <div className="mt-12 grid gap-0 sm:grid-cols-2">
          {advancedFeatures.map((feature, index) => (
            <article
              key={feature.title}
              className={`flex gap-4 border-[var(--border)] py-6 ${
                index < 2 ? 'border-b' : ''
              } ${index % 2 === 0 ? 'sm:pr-8' : 'sm:border-l sm:pl-8'}`}
            >
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue-light"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link className="outline-btn" href="/register">
            Start monitoring ports
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function PortSignalsSection() {
  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <SectionHeading title="Know more than just open or closed" />
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:justify-self-end">
            Follow connection health, response speed, and uptime history together. Get the context
            you need to understand whether a service is ready for traffic.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {portSignals.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--background)] text-brand-blue-light">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PortServiceCoverageSection() {
  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <SectionHeading title="All the ports you care about, in one place" />
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:justify-self-end">
            From customer-facing web servers to the databases behind them, keep an eye on the
            services that keep your infrastructure running.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {monitoredServices.map(({ title, port, Icon }) => (
            <article
              key={title}
              className="flex min-h-20 items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--background)] text-brand-blue-light">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs text-[var(--muted)]">{port}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PortAlertingSection() {
  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading title="Catch port failures before they reach your users" />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Get notified when a connection fails or response times change. Route alerts to email,
            SMS, Slack, or webhooks so the right people can investigate quickly.
          </p>
          <Link className="outline-btn mt-7" href="/incident-management">
            Explore incident alerting
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mx-auto w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl shadow-black/10">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <p className="text-xs font-semibold">Recent port checks</p>
            <span className="text-[10px] text-[var(--muted)]">Last 24 hours</span>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { name: 'api.example.com:443', status: 'Reachable', value: '82 ms', bars: 30 },
              { name: 'db-primary.internal:5432', status: 'Reachable', value: '24 ms', bars: 30 },
              { name: 'cache-01.internal:6379', status: 'Connection issue', value: 'Timeout', bars: 23 },
            ].map((check, index) => (
              <div
                key={check.name}
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-[11px] font-medium">{check.name}</p>
                  <span
                    className={`shrink-0 text-[10px] ${
                      index === 2 ? 'text-status-down' : 'text-brand-blue-light'
                    }`}
                  >
                    {check.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex flex-1 gap-0.5" aria-label={`${check.bars} successful checks`}>
                    {Array.from({ length: 30 }, (_, bar) => (
                      <span
                        key={bar}
                        className={`h-3 flex-1 rounded-sm ${
                          bar >= check.bars
                            ? 'bg-status-down/70'
                            : 'bg-brand-blue/80'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="w-12 text-right text-[10px] text-[var(--muted)]">
                    {check.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[11px] text-[var(--muted)]">
            <BellRing className="h-4 w-4 shrink-0 text-brand-blue-light" aria-hidden="true" />
            An alert is sent when a service cannot be reached.
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PortBenefitsSection() {
  const benefits = [
    {
      title: 'One clear overview',
      description:
        'See your important ports together instead of jumping between servers and dashboards.',
      Icon: Activity,
    },
    {
      title: 'Faster troubleshooting',
      description:
        'Use status history and response times to narrow down when a connection problem began.',
      Icon: Zap,
    },
    {
      title: 'Confidence across regions',
      description:
        'Check services from multiple locations to understand where a network issue is happening.',
      Icon: MapPin,
    },
  ];

  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Made for everyday operations"
          title="Port monitoring that keeps your team in control"
          centered
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <span className="grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--background)] text-brand-blue-light">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PortUseCasesSection() {
  return (
    <section className="bg-[var(--background)] py-16 pb-24 text-[var(--foreground)] sm:py-20 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Use cases"
          title="Get inspired by what you can monitor"
          description="Use port checks to protect uptime, troubleshoot network behavior, and keep essential services available."
        />
        <ul className="mt-8 grid gap-4 border-t border-[var(--border)] pt-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <li key={useCase} className="flex gap-3 text-sm leading-relaxed">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" aria-hidden="true" />
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] md:grid-cols-2">
          <div className="p-6 sm:p-8">
            <p className="text-lg font-semibold leading-relaxed sm:text-xl">
              Know when a port stops responding, and give your team the context to act.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Set up a port monitor in minutes and keep service availability visible in one place.
            </p>
            <Link className="outline-btn mt-6" href="/register">
              Create a free account
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative hidden min-h-56 items-center justify-center overflow-hidden border-l border-[var(--border)] p-8 md:flex">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-purple/10" />
            <div className="relative w-full max-w-sm rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="size-2 rounded-full bg-brand-blue-light" />
                Service connections
              </div>
              <div className="mt-4 space-y-3">
                {['Web server · 443', 'Database · 5432', 'Mail relay · 587'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-t border-[var(--border)] pt-3 text-[11px]"
                  >
                    <span className="text-[var(--muted)]">{item}</span>
                    <span className="font-medium text-brand-blue-light">Available</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
