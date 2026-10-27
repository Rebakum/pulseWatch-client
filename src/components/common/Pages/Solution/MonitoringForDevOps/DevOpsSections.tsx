import {
  Activity,
  Bell,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Users,
  UserPlus,
} from 'lucide-react';

import Container from '@/components/common/Container';
import { Button } from '@/components/ui/Button/Button';

const FEATURES = [
  {
    title: 'Share access with your team.',
    accent: 'team',
    description:
      'Let your team access all monitors with admin, write, read, or alert-only access, get to the root cause, and add incident comments.',
    visual: 'team',
  },
  {
    title: 'Create custom status pages.',
    accent: 'status pages',
    description:
      'Use status pages to improve internal processes or share your uptime and inform users about maintenance and incidents.',
    visual: 'status',
  },
  {
    title: 'Spot peaks in your response time.',
    accent: 'response time',
    description:
      'Monitor your systems performance and track response time while getting uptime reports to your inbox. Add comments and see trace routes.',
    visual: 'response',
  },
] as const;

const ADVANCED_FEATURES = [
  {
    title: 'Maintenance windows',
    description: 'Pause alerts during planned maintenance and deployment windows.',
    Icon: Clock3,
  },
  {
    title: 'Custom alerts',
    description: 'Choose alert contacts, channels, and thresholds for each monitor.',
    Icon: Bell,
  },
  {
    title: 'Critical alerts',
    description: 'Make sure urgent incidents reach the people who need to respond.',
    Icon: ShieldCheck,
  },
  {
    title: 'SSL monitoring',
    description: 'Track certificate health and get notified before certificates expire.',
    Icon: CheckCircle2,
  },
  {
    title: 'Recurring notifications',
    description: 'Escalate unresolved incidents so critical issues do not get missed.',
    Icon: Bell,
  },
  {
    title: 'Response-time monitoring',
    description: 'Track latency trends and catch slowdowns before they become outages.',
    Icon: Activity,
  },
] as const;

function DevOpsVisual({ type }: { type: (typeof FEATURES)[number]['visual'] }) {
  return (
    <div className="relative isolate mx-auto grid min-h-[360px] w-full max-w-[500px] place-items-center sm:min-h-[420px] lg:min-h-[460px]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20"
      />

      {type === 'team' ? (
        <div className="relative z-10 w-full max-w-[350px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-xl">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <Users className="size-4 text-brand-blue" />
            Share monitor access
            <UserPlus className="ml-auto size-4 text-[var(--muted)]" />
          </div>
          <div className="space-y-2">
            {[
              { name: 'Alex Morgan', role: 'Admin', initials: 'AM' },
              { name: 'Jordan Lee', role: 'Write access', initials: 'JL' },
              { name: 'Sam Rivera', role: 'Alert-only', initials: 'SR' },
            ].map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-2.5 rounded-lg bg-[var(--surface)] px-3 py-2.5"
              >
                <span className="grid size-7 place-items-center rounded-full bg-brand-blue/10 text-[9px] font-bold text-brand-blue">
                  {member.initials}
                </span>
                <span className="text-xs font-medium">{member.name}</span>
                <span className="ml-auto text-[10px] text-[var(--muted)]">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {type === 'status' ? (
        <div className="relative z-10 w-full max-w-[380px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <div className="text-xs font-bold">Service status</div>
            <span className="rounded bg-brand-blue px-2 py-1 text-[9px] font-semibold text-white">
              Operational
            </span>
          </div>
          <div className="mt-4 rounded-lg bg-[var(--surface)] p-3">
            <p className="text-[10px] font-semibold">All systems operational</p>
            <p className="mt-1 text-[9px] text-[var(--muted)]">Updated just now</p>
          </div>
          <div className="mt-4 space-y-3">
            {['Website', 'Monitoring API'].map((service) => (
              <div key={service}>
                <div className="mb-1.5 flex justify-between text-[9px]">
                  <span>{service}</span>
                  <span className="font-semibold text-brand-blue">100% uptime</span>
                </div>
                <div className="flex gap-[2px]">
                  {Array.from({ length: 28 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-2 flex-1 rounded-[1px] bg-brand-blue"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {type === 'response' ? (
        <div className="relative z-10 w-full max-w-[380px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <ChartNoAxesCombined className="size-4 text-brand-blue" />
              Response time
            </div>
            <span className="text-[9px] text-[var(--muted)]">Last 24 hours</span>
          </div>
          <div className="mt-4 rounded-lg bg-[var(--surface)] p-3">
            <svg
              aria-label="Response time chart with a brief latency spike"
              role="img"
              viewBox="0 0 320 110"
              className="h-28 w-full"
            >
              <path d="M0 90H320M0 58H320M0 26H320" stroke="var(--border)" strokeWidth="1" />
              <path
                d="M4 78 C28 72 38 84 58 68 S92 78 112 56 S146 70 164 30 S190 74 214 48 S250 66 270 42 S298 55 316 34"
                fill="none"
                stroke="var(--color-brand-blue)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-2 flex items-center justify-between text-[9px] text-[var(--muted)]">
              <span>00:00</span>
              <span>12:00</span>
              <span>24:00</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-[var(--muted)]">
            <Clock3 className="size-3.5 text-brand-blue" />
            Average response time
            <span className="ml-auto font-bold text-[var(--foreground)]">52.6 ms</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function DevOpsFeatureRows() {
  return (
    <section className="bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <Container>
        <div className="divide-y divide-[var(--border)]">
          {FEATURES.map((feature, index) => {
            const visualFirst = index % 2 === 0;
            const accentStart = feature.title.indexOf(feature.accent);

            return (
              <article
                key={feature.visual}
                className="grid items-center gap-8 py-12 first:pt-0 last:pb-0 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:py-16"
              >
                <div className={visualFirst ? 'order-2 lg:order-1' : 'order-2'}>
                  <DevOpsVisual type={feature.visual} />
                </div>
                <div className={visualFirst ? 'order-1 lg:order-2' : 'order-1'}>
                  <h2 className="max-w-xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                    {feature.title.slice(0, accentStart)}
                    <span className="text-brand-blue">{feature.accent}</span>
                    {feature.title.slice(accentStart + feature.accent.length)}
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

export function DevOpsAdvancedFeatures() {
  return (
    <section className="bg-[var(--surface)] py-14 text-[var(--foreground)] sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          <span className="text-brand-blue">Get more</span> out of your monitoring.
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANCED_FEATURES.map(({ title, description, Icon }) => (
            <article key={title}>
              <h3 className="flex items-center gap-2 text-sm font-bold">
                <Icon aria-hidden="true" className="size-5 shrink-0 text-brand-blue" />
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/enterprise" size="lg">
            Talk to our team
          </Button>
        </div>
      </Container>
    </section>
  );
}
