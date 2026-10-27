import { Activity, Check, Clock3, Laptop, Router, Server } from 'lucide-react';

import Container from '@/components/common/Container';

function AvailabilityVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-1/4 rounded-full bg-[var(--color-status-up)]/10 blur-3xl" />
      <div className="relative rotate-[-5deg] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-[var(--muted)]">Current uptime</p>
            <p className="mt-1 text-lg font-bold">99.99%</p>
          </div>
          <span className="rounded-full bg-[var(--color-status-up)]/10 px-2.5 py-1 text-[9px] font-semibold text-[var(--color-status-up)]">
            Operational
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-3">
            <p className="text-[8px] text-[var(--muted)]">Successful checks</p>
            <p className="mt-1 text-sm font-bold">1,440 / 1,440</p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-3">
            <p className="text-[8px] text-[var(--muted)]">Downtime</p>
            <p className="mt-1 text-sm font-bold">0 min</p>
          </div>
        </div>
        <div className="mt-4 flex h-9 items-end gap-[3px]" aria-hidden="true">
          {Array.from({ length: 36 }, (_, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-[var(--color-status-up)]"
              style={{ height: `${45 + ((index * 17) % 55)}%`, opacity: 0.55 + (index % 4) * 0.12 }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[8px] text-[var(--muted)]">
          <span>Last 24 hours</span>
          <span>All checks passed</span>
        </div>
      </div>
    </div>
  );
}

const DEVICES = [
  { name: 'Web server', address: '192.168.1.10', Icon: Server },
  { name: 'Office router', address: '192.168.1.1', Icon: Router },
  { name: 'Workstation', address: '192.168.1.28', Icon: Laptop },
] as const;

function DevicesVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-1/4 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="relative grid grid-cols-2 gap-3">
        {DEVICES.map(({ name, address, Icon }, index) => (
          <div
            key={name}
            className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl ${
              index === 2 ? 'col-span-2 sm:col-span-1 sm:col-start-2' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-brand-blue">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex items-center gap-1 text-[8px] font-semibold text-[var(--color-status-up)]">
                <Check className="h-3 w-3" />
                Up
              </span>
            </div>
            <p className="mt-4 text-[10px] font-bold">{name}</p>
            <p className="mt-1 font-mono text-[8px] text-[var(--muted)]">{address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResponseTimeVisual() {
  const chartPoints = [72, 66, 70, 54, 58, 43, 50, 36, 41, 26, 34, 30, 40, 22, 28, 18];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-1/4 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="relative rotate-[4deg] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl sm:p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold">Response time</p>
            <p className="mt-1 text-[8px] text-[var(--muted)]">Ping latency over the last 24 hours</p>
          </div>
          <span className="rounded-md border border-[var(--border)] px-2 py-1 text-[8px] text-[var(--muted)]">
            Last 24 hours
          </span>
        </div>
        <div className="relative mt-5 h-28 overflow-hidden rounded-lg border-b border-l border-[var(--border)] bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_26px,var(--border)_27px)]">
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[var(--border)]" />
          <svg
            aria-label="Response time trend chart"
            className="absolute inset-0 h-full w-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 320 112"
          >
            <polyline
              fill="none"
              points={chartPoints.map((point, index) => `${index * (320 / (chartPoints.length - 1))},${point}`).join(' ')}
              stroke="var(--color-status-up)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[8px] text-[var(--muted)]">
            <Activity className="h-3 w-3 text-[var(--color-status-up)]" />
            Average response
          </span>
          <span className="flex items-center gap-1 text-sm font-bold">
            34 ms <Clock3 className="h-3.5 w-3.5 text-[var(--color-status-up)]" />
          </span>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: 'Monitor server availability.',
    description:
      'Anything can happen with your server, make sure it’s always up and ping your publicly available IP address.',
    Visual: AvailabilityVisual,
  },
  {
    title: 'Monitor devices in your network.',
    description:
      'Make sure all the key devices in your network are up with our simple and reliable monitoring.',
    Visual: DevicesVisual,
  },
  {
    title: 'Monitor server response time.',
    description:
      'Spot peaks in your server response time. We are checking your server at your chosen interval.',
    Visual: ResponseTimeVisual,
  },
] as const;

export default function PingReliabilitySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-8 text-[var(--foreground)] sm:py-12">
      <Container>
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--border)] lg:block"
          />

          {FEATURES.map(({ title, description, Visual }, index) => {
            const reversed = index % 2 === 1;

            return (
              <div
                key={title}
                className={`relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 ${
                  index > 0
                    ? "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[var(--border)] before:content-['']"
                    : ''
                }`}
              >
                <div className={reversed ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}>
                  <h2 className="max-w-lg text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
                    {title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                    {description}
                  </p>
                </div>
                <div className={reversed ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}>
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
