import Container from '@/components/common/Container';
import { Activity, Check, Globe2, MousePointer2 } from 'lucide-react';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function BusinessOwnersFeatures() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-20">
      <Container>
        <div className="divide-y divide-[var(--border)]">
          {FEATURE_ROWS.map((row, index) => {
            const visualFirst = index % 2 === 0;
            const accentIndex = row.title.indexOf(row.accent);
            const Visual = row.visual;

            return (
              <article
                key={row.title}
                className="grid items-center gap-8 py-9 first:pt-0 last:pb-0 sm:gap-12 sm:py-14 lg:grid-cols-2 lg:gap-16"
              >
                <div className={visualFirst ? 'order-2 lg:order-1' : 'order-2'}>
                  <Visual />
                </div>
                <div className={visualFirst ? 'order-1 lg:order-2' : 'order-1'}>
                  <h2 className="max-w-xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                    {row.title.slice(0, accentIndex)}
                    <DeveloperGradientText>{row.accent}</DeveloperGradientText>
                    {row.title.slice(accentIndex + row.accent.length)}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {row.description}
                  </p>
                  {index === 0 ? (
                    <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
                      <Check aria-hidden="true" className="size-4 text-brand-blue" />
                      No code or installation required
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function MonitorSetupVisual() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-72 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 ring-1 ring-brand-blue/20 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 w-[88%] max-w-[480px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div>
            <p className="text-sm font-bold">Create a monitor</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Watch your business website</p>
          </div>
          <span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
            <Globe2 aria-hidden="true" className="size-5" />
          </span>
        </div>
        <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-[10px] font-semibold">Website URL</p>
          <p className="mt-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs text-[var(--muted)]">
            https://yourbusiness.com
          </p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[var(--surface)] p-3">
            <p className="text-[10px] text-[var(--muted)]">Check interval</p>
            <p className="mt-1 text-xs font-semibold">30 seconds</p>
          </div>
          <div className="rounded-lg bg-[var(--surface)] p-3">
            <p className="text-[10px] text-[var(--muted)]">Alert me via</p>
            <p className="mt-1 text-xs font-semibold">Email + SMS</p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[image:var(--background-image-brand-gradient)] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-blue/20">
          Start monitoring
          <MousePointer2 aria-hidden="true" className="size-3.5" />
        </div>
      </div>
    </div>
  );
}

function UptimeVisual() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-72 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 ring-1 ring-brand-blue/20 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 w-[88%] max-w-[480px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">Website</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">yourbusiness.com</p>
          </div>
          <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue">
            Operational
          </span>
        </div>
        <div className="mt-6 grid grid-cols-[repeat(30,minmax(0,1fr))] gap-1" aria-hidden="true">
          {Array.from({ length: 30 }, (_, index) => (
            <span
              key={index}
              className={`h-8 rounded-sm ${index === 17 ? 'bg-brand-blue-light' : 'bg-brand-blue'}`}
            />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-2 font-semibold">
            <span className="size-2.5 rounded-full bg-brand-blue" />
            100.00% uptime
          </span>
          <span className="text-[var(--muted)]">Last 30 days</span>
        </div>
      </div>
    </div>
  );
}

function HealthDashboardVisual() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-72 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 ring-1 ring-brand-blue/20 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 grid w-[88%] max-w-[480px] grid-cols-[1fr_auto] gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="rounded-xl bg-[#101827] p-4 text-white">
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>Availability</span>
            <Activity aria-hidden="true" className="size-4 text-brand-blue-light" />
          </div>
          <div className="mt-6 flex h-24 items-end gap-1" aria-hidden="true">
            {[26, 42, 34, 57, 48, 65, 50, 72, 59, 78, 64, 86].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm bg-[image:var(--background-image-brand-gradient)]"
                style={{ height }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <span className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[10px] font-semibold">
            Uptime <span className="mt-1 block text-brand-blue">99.99%</span>
          </span>
          <span className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[10px] font-semibold">
            Response <span className="mt-1 block text-brand-blue">42 ms</span>
          </span>
        </div>
      </div>
    </div>
  );
}

const FEATURE_ROWS = [
  {
    title: 'Implement and use in a few clicks.',
    accent: 'few clicks',
    description:
      'PulseWatch is a simple cloud-based uptime monitoring solution that does not require technical knowledge.',
    visual: MonitorSetupVisual,
  },
  {
    title: 'Maintain reliable operations.',
    accent: 'reliable',
    description:
      'Make sure your websites and systems perform at their best and protect your company’s reputation.',
    visual: UptimeVisual,
  },
  {
    title: 'Save costs and boost efficiency.',
    accent: 'costs',
    description:
      'Ensure your services are always up and let your team focus on what matters instead of discovering incidents too late.',
    visual: HealthDashboardVisual,
  },
] as const;
