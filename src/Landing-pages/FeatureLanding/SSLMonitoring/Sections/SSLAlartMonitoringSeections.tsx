import Container from '@/components/common/Container';
import type { SpotlightRowsSectionData } from '@/types/landing';
import { ArrowUpRight, Mail, Network, Phone, Plus, Webhook } from 'lucide-react';
import Link from 'next/link';
import SpotlightRows from '../../CronJobMonitoring/Sections/SpotlightRows';

/* project colours (no green) */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down)';

/* ---------------------------------------------------------------------
   1. Build trust with public status pages (existing SpotlightRows visual)
--------------------------------------------------------------------- */
const STATUS_DATA: SpotlightRowsSectionData = {
  rows: [
    {
      title: 'Build trust with public status pages.',
      description:
        'Be transparent. Share your uptime with the public and inform your customers about any planned (or unplanned) outages.',
      ctas: [
        { label: 'Check LIVE demo', href: '/status-pages', variant: 'light', arrow: true },
        { label: 'Explore Status Pages', href: '/status-pages' },
      ],
      visual: 'statusPage',
    },
  ],
};

export function SSLStatusPages() {
  return <SpotlightRows data={STATUS_DATA} />;
}

/* ---------------------------------------------------------------------
   2. Add your team members to keep them notified (bordered panel)
--------------------------------------------------------------------- */
function InviteMock() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[26rem]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-brand-purple/15 blur-[90px]" />

      {/* dim list behind the dialog */}
      <div className="absolute -left-10 top-6 hidden h-40 w-44 space-y-3 opacity-40 [mask-image:linear-gradient(90deg,transparent,black_60%)] sm:block">
        {['Team members', 'John Doe', 'Sarah Lee', 'Alex Kim'].map((n) => (
          <div key={n} className="h-3 w-full rounded bg-[var(--border)]" title={n} />
        ))}
      </div>

      <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] text-[var(--foreground)]">
        <p className="flex items-center gap-2 text-[11px] font-semibold">
          <Plus className="h-3.5 w-3.5" style={{ color: UP }} />
          Invite team member
        </p>
        <p className="mt-2 text-[9px] leading-relaxed text-[var(--muted)]">
          Choose the level of access: read, write or notify-only.
        </p>

        <div className="mt-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[10px] text-[var(--muted)]">
          name@company.com
        </div>
        <div className="mt-2 flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[10px]">
          <span>Read &amp; notify-only</span>
          <span className="text-[var(--muted)]">⌄</span>
        </div>

        <div className="mt-4 flex justify-end gap-2 text-[10px]">
          <span className="rounded-md border border-[var(--border)] px-3 py-1.5 text-[var(--muted)]">
            Cancel
          </span>
          <span className="rounded-md bg-[image:var(--background-image-brand-gradient)] px-3 py-1.5 font-semibold text-white">
            Send invite
          </span>
        </div>
      </div>
    </div>
  );
}

export function SSLTeamSection() {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)] sm:py-14">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-[var(--border)] p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <InviteMock />

          <div>
            <h2 className="max-w-md text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
              Add your team members to keep them notified
              <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              You can invite all your team members to access your monitors, keep them notified and
              manage incidents. Choose from three levels of user access: read, write and
              notify-only.
            </p>
            <Link className="outline-btn mt-6" href="/incident-management">
              Explore incident management
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------------
   3. Catch every incident before it reaches your users
--------------------------------------------------------------------- */
const CHANNELS = [
  { label: 'Email', Icon: Mail },
  { label: 'SMS', Icon: Phone },
  { label: 'Slack', Icon: Network },
  { label: 'Webhook', Icon: Webhook },
];

function AlertingMock() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[28rem] [transform:perspective(1200px)_rotateX(6deg)_rotateZ(-4deg)]"
    >
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-brand-purple/15 blur-[90px]" />

      <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] text-[var(--foreground)]">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 text-[10px]">
          <span className="flex items-center gap-2 text-[var(--muted)]">
            <span className="size-2 rounded-full" style={{ background: DOWN }} />
            PULSEWATCH
          </span>
          <span className="text-[var(--muted)]">now</span>
        </div>

        <p className="mt-3 text-[13px] font-semibold">Monitor is DOWN</p>
        <p className="mt-1 text-[10px] text-[var(--muted)]">api.example.com · HTTP 503</p>

        <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3">
          <div className="flex items-center justify-between text-[10px]">
            <span>Last 24 hours</span>
            <span className="text-[var(--muted)]">99.482%</span>
          </div>
          <div className="mt-2 flex gap-[3px]">
            {Array.from({ length: 34 }, (_, i) => (
              <span
                key={i}
                className="h-4 flex-1 rounded-full"
                style={{ background: i > 29 && i < 32 ? DOWN : UP }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {CHANNELS.map(({ label, Icon }) => (
            <span
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] py-2 text-[9px] text-[var(--muted)]"
            >
              <Icon className="h-3.5 w-3.5" style={{ color: UP }} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SSLAlertingSection() {
  return (
    <section className="bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="max-w-md text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
            Catch every incident before it reaches your users
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Get notified the instant something breaks: by email, SMS, Phone call, Slack, or webhook.
            Watch your whole stack from one place and pick the channels that reach your team
            fastest, so critical issues never sit unseen.
          </p>
          <Link className="outline-btn mt-6" href="/alerts-notifications">
            Explore IT alerting
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <AlertingMock />
      </Container>
    </section>
  );
}
