import { Activity, Bell, Check, Code2, MonitorCheck, UserRound } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../DeveloperGradientText';

const FEATURES = [
  {
    title: 'Effortless uptime monitoring.',
    accent: 'Effortless',
    description:
      'Simply configure your monitors and alerts, then get notified if any of your endpoints ever go down.',
    visual: 'monitor',
  },
  {
    title: 'Constant monitoring checks.',
    accent: 'Constant',
    description:
      'Uptime monitoring helps you keep an eye on potential endpoints errors and avoid downtime with sensible 30-second monitoring.',
    visual: 'checks',
  },
  {
    title: 'Enhanced user experience.',
    accent: 'Enhanced',
    description:
      'Catch issues immediately to avoid leaving users disappointed and protect the experience you worked hard to build.',
    visual: 'experience',
  },
] as const;

const FEATURE_CIRCLE_CLASS =
  'absolute size-72 rounded-full bg-brand-blue/25 ring-1 ring-brand-blue/15 sm:size-80 lg:size-96';

function FeatureMockup({ visual }: { visual: (typeof FEATURES)[number]['visual'] }) {
  if (visual === 'monitor') {
    return (
      <div className="relative grid min-h-[260px] place-items-center sm:min-h-[300px]">
        <div
          aria-hidden="true"
          className={FEATURE_CIRCLE_CLASS}
        />
        <div className="relative z-10 w-[82%] max-w-[390px] rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <MonitorCheck aria-hidden="true" className="size-5" />
            </span>
            <span className="text-sm font-bold">Service overview</span>
            <span className="ml-auto rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue">
              Healthy
            </span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ['Uptime', '99.99%'],
              ['Response', '42 ms'],
              ['Checks', '30 sec'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-[var(--surface)] p-3">
                <p className="text-[10px] text-[var(--muted)]">{label}</p>
                <p className="mt-1 text-xs font-bold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-end gap-1" aria-hidden="true">
            {[22, 34, 28, 42, 31, 48, 36, 44, 30, 40, 35, 50, 37, 46, 34, 43].map(
              (height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-sm bg-brand-blue/70"
                  style={{ height }}
                />
              ),
            )}
          </div>
        </div>
      </div>
    );
  }

  if (visual === 'checks') {
    return (
      <div className="relative grid min-h-[260px] place-items-center sm:min-h-[300px]">
        <div
          aria-hidden="true"
          className={FEATURE_CIRCLE_CLASS}
        />
        <div className="relative z-10 w-[78%] max-w-[350px] rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold">Monitor interval</p>
              <p className="mt-1 text-[10px] text-[var(--muted)]">Production API</p>
            </div>
            <Activity aria-hidden="true" className="size-5 text-brand-blue" />
          </div>
          <div className="mt-7 flex items-center justify-between text-[10px] text-[var(--muted)]">
            <span>30 sec</span>
            <span>1 min</span>
            <span>5 min</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-[var(--border)]">
            <div className="relative h-full w-[34%] rounded-full bg-brand-blue">
              <span className="absolute -right-2 -top-1 size-4 rounded-full border-2 border-brand-blue bg-[var(--background)]" />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-brand-blue/5 px-3 py-2.5 text-xs font-semibold text-brand-blue">
            <Check aria-hidden="true" className="size-4" />
            Checks are running
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid min-h-[260px] place-items-center sm:min-h-[300px]">
      <div
        aria-hidden="true"
        className={FEATURE_CIRCLE_CLASS}
      />
      <div className="relative z-10 w-[82%] max-w-[390px] rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
            <UserRound aria-hidden="true" className="size-6" />
          </span>
          <div>
            <p className="text-sm font-bold">Developer on-call</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Incident notification</p>
          </div>
          <span className="ml-auto grid size-8 place-items-center rounded-full bg-brand-blue text-white">
            <Bell aria-hidden="true" className="size-4" />
          </span>
        </div>
        <div className="mt-5 rounded-xl bg-[var(--surface)] p-4">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Code2 aria-hidden="true" className="size-4 text-brand-blue" />
            API response time increased
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-[var(--muted)]">
            Check the incident details and respond before users are affected.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DeveloperFeatureRows() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-20">
      <Container>
        <div className="divide-y divide-[var(--border)]">
          {FEATURES.map((feature, index) => {
            const visualFirst = index % 2 === 0;
            const accentIndex = feature.title.indexOf(feature.accent);

            return (
              <article
                key={feature.visual}
                className="grid items-center gap-8 py-9 first:pt-0 last:pb-0 sm:gap-12 sm:py-14 lg:grid-cols-2 lg:gap-16"
              >
                <div className={visualFirst ? 'order-2 lg:order-1' : 'order-2'}>
                  <FeatureMockup visual={feature.visual} />
                </div>
                <div className={visualFirst ? 'order-1 lg:order-2' : 'order-1'}>
                  <h2 className="max-w-xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                    {feature.title.slice(0, accentIndex)}
                    <DeveloperGradientText>{feature.accent}</DeveloperGradientText>
                    {feature.title.slice(accentIndex + feature.accent.length)}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
