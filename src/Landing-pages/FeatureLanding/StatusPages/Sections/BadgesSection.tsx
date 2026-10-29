import Container from '@/components/common/Container';
import type { ReactNode } from 'react';

/* project colours (no green) */
const UP = 'var(--color-brand-blue-light)';

const BADGE_GRADIENT = 'bg-[image:var(--background-image-brand-gradient)]';

/* every visual sits on the same tilted plane as the heroes */
const TILT = '[transform:skewY(-18deg)_skewX(33deg)]';

/* ---------------------------------------------------------------------
   Visuals
--------------------------------------------------------------------- */
function BadgePill({ value }: { value: string }) {
  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] ${TILT}`}
    >
      <span className="flex items-center gap-2 px-4 py-3 text-[15px] font-extrabold tracking-tight text-[var(--foreground)]">
        <span className="size-2 rounded-full" style={{ background: UP }} />
        PulseWatch
      </span>
      <span className={`${BADGE_GRADIENT} px-4 py-3 text-[15px] font-extrabold text-white`}>
        {value}
      </span>
    </div>
  );
}

function BadgeVisual({ value, caption }: { value: string; caption: ReactNode }) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-44 w-full max-w-[30rem] overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/15 blur-[90px]" />

      {/* faint page text behind the badge */}
      <p
        className={`absolute left-24 top-10 whitespace-nowrap font-mono text-[18px] font-bold leading-tight text-[var(--foreground)]/15 ${TILT}`}
      >
        {caption}
      </p>

      <div className="absolute left-6 top-[4.25rem]">
        <BadgePill value={value} />
      </div>
    </div>
  );
}

const REPORT_ROWS = [
  { label: 'SLA met', value: '99.987%' },
  { label: 'Total downtime within period', value: '12m 12s' },
  { label: 'Monthly budget time', value: '43m 12s' },
  { label: 'Target over 30 days', value: '99.90%' },
];

function SlaReportVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[17rem] w-full max-w-[30rem] overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/15 blur-[90px]" />

      <div className="absolute left-10 top-16 origin-top-left scale-[0.8]">
        <div
          className={`w-[22rem] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] ${TILT}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[9px] text-[var(--muted)]">SLA uptime</p>
              <p className="mt-1 text-[16px] font-extrabold text-[var(--foreground)]">99.987%</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-[var(--muted)]">Verdict</p>
              <p className="mt-1 text-[12px] font-bold" style={{ color: UP }}>
                SLA met
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-3">
            {REPORT_ROWS.slice(1).map((r) => (
              <div key={r.label}>
                <p className="text-[9px] text-[var(--muted)]">{r.label}</p>
                <p className="mt-1 text-[13px] font-bold text-[var(--foreground)]">{r.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[11px] font-semibold text-[var(--foreground)]">SLA report</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Rows (text from the reference)
--------------------------------------------------------------------- */
const ROWS = [
  {
    title: 'Status badge',
    description:
      'Every published status page has its own badge, ready in its settings. Copy the Markdown or HTML snippet, and visitors who click the badge land on your status page.',
    visual: <BadgeVisual value="up" caption="Build the future," />,
  },
  {
    title: 'SLA badge',
    description:
      'Set an uptime target and a period, like 99.99% per calendar month, and choose the monitors it covers. The badge shows your actual uptime and turns yellow or red when you fall below the target.',
    visual: <BadgeVisual value="99.998%" caption="Ready to move faster?" />,
  },
  {
    title: 'SLA email reports',
    description:
      'Get the result by email at the end of each SLA period, with the downtime budget you used and every monitor that had downtime. Forward it to the client as proof.',
    visual: <SlaReportVisual />,
  },
];

export default function StatusBadgesSection() {
  return (
    <section className="bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <Container>
        {/* header */}
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-md text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
            Show your uptime outside the status page
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
            PulseWatch gives you two embeddable badges: a status badge that shows whether your
            services are up right now, and an SLA badge that shows the uptime percentage you
            delivered against your target. Paste either one into a GitHub README, a docs page or
            your site footer.
          </p>
        </div>

        {/* rows */}
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--border)] lg:block"
          />

          {ROWS.map((row, index) => {
            const reversed = index === 1;

            return (
              <div
                key={row.title}
                className={`relative grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14 ${
                  index > 0
                    ? "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[var(--border)] before:content-['']"
                    : ''
                }`}
              >
                <div className={reversed ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}>
                  <h3 className="text-lg font-bold tracking-tight">{row.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                    {row.description}
                  </p>
                </div>

                <div className={reversed ? 'lg:order-1' : undefined}>{row.visual}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
