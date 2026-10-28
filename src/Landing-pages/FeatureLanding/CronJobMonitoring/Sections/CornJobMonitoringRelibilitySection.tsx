import { Bell, Mail, Network, Terminal } from 'lucide-react';
import type { ReactNode } from 'react';

import Container from '@/components/common/Container';

/* =====================================================================
   Geometry measured from the reference: every tilted card sits on ONE
   plane — horizontal edges rise 18deg (skewY -18), left edges lean 33deg
   (skewX 33). Cards are laid out in "design px" and the plane is scaled
   by --s so it fits the column at every breakpoint.
===================================================================== */

const TAN_RISE = 0.325; // tan(18deg)
const TAN_LEAN = 0.65; // tan(33deg)

/* project colours (Brand Blue/Purple theme - No Green) */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down)';

const CARD =
  'rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]';

const PLANE =
  'absolute left-0 origin-top-left [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)]';

/* ---------- shared helpers ---------- */

function Glow() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/15 blur-[110px]" />
  );
}

/** Stage for a tilted plane. w/h = design size of the main card. */
function PlaneStage({
  w,
  h,
  scale,
  children,
}: {
  w: number;
  h: number;
  scale: string;
  children: ReactNode;
}) {
  const rise = Math.round(TAN_RISE * w);
  const total = Math.round(h * (1 - TAN_LEAN * TAN_RISE) + rise) + 60;

  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto w-full max-w-[34rem] ${scale}`}
      style={{ height: `calc(var(--s) * ${total}px)` }}
    >
      <Glow />
      <div className={PLANE} style={{ top: `calc(var(--s) * ${rise + 30}px)` }}>
        {children}
      </div>
    </div>
  );
}

/** dim, faded form panel peeking out behind a tilted card */
function DimPanel({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <div
      className="absolute rounded-[28px] border-2 border-[var(--border)] bg-[var(--surface)] opacity-50 [mask-image:linear-gradient(90deg,#000_30%,transparent_100%)]"
      style={{ left: x, top: y, width: w, height: h }}
    >
      <p className="absolute left-6 top-5 whitespace-nowrap text-[12px] font-semibold text-[var(--foreground)]">
        How we will notify you?
      </p>
      <p className="absolute left-6 top-12 whitespace-nowrap text-[11px] text-[var(--muted)]">
        E-mail · job.doe@example.com
      </p>
      <p className="absolute left-6 top-[72px] whitespace-nowrap text-[10px] text-[var(--muted)]">
        No delay in repeat
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 1: Monitor intranet devices connected to the internet (Tiles & Cards)
--------------------------------------------------------------------- */
const TILE =
  'grid h-40 w-40 place-items-center rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)]';

const CRON_DAYS = Array.from({ length: 20 }, (_, i) => i === 7 || i === 12);

function IntranetDevicesVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />

      <div className="pointer-events-none absolute -left-4 top-24 hidden h-[17rem] w-[24rem] opacity-40 [mask-image:linear-gradient(90deg,transparent,black_35%,black_75%,transparent)] sm:block">
        <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-[9px] text-[var(--muted)]">
            Scheduled pings check-in automatically to ensure your local intranet servers are
            reachable.
          </p>
          <div className="mt-3 h-6 rounded-md border border-[var(--border)] bg-[var(--background)]" />
          <div className="mt-2 h-6 rounded-md border border-[var(--border)] bg-[var(--background)]" />
        </div>
      </div>

      <div className="relative mx-auto grid w-fit grid-cols-2 gap-2.5 sm:ml-auto sm:mr-6">
        <div className={`${TILE} !place-items-start content-center px-5`}>
          <div>
            <p className="text-xs text-[var(--muted)]">Last 7 days</p>
            <p className="mt-1 text-xl font-bold" style={{ color: UP }}>
              100%
            </p>
            <p className="mt-2 whitespace-nowrap text-[10px] text-[var(--muted)]">
              0 incidents, 0 m down
            </p>
          </div>
        </div>

        <div className={TILE}>
          <Network
            className="h-16 w-16 text-[var(--foreground)]/80"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        <div className={TILE}>
          <Terminal
            className="h-16 w-16 text-[var(--foreground)]/80"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        <div className={`${TILE} !place-items-start content-center px-4`}>
          <div>
            <div className="grid grid-cols-5 gap-[3px]">
              {CRON_DAYS.map((down, i) => (
                <span
                  key={i}
                  className="h-[10px] w-[10px] rounded-[2px]"
                  style={{ background: down ? DOWN : UP }}
                />
              ))}
            </div>
            <p className="mt-2.5 text-[10px] text-[var(--foreground)] font-semibold">May 26</p>
            <p className="text-[10px]" style={{ color: UP }}>
              97.54%
            </p>
            <p className="text-[9px] text-[var(--muted)]">2 inc., 14 h, 30 m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 2: Use Windows task scheduler for monitoring (tilted card)
--------------------------------------------------------------------- */
const SCHEDULER_W = 520;
const SCHEDULER_H = 340;

function TaskSchedulerVisual() {
  return (
    <PlaneStage
      w={SCHEDULER_W}
      h={SCHEDULER_H}
      scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]"
    >
      <DimPanel x={280} y={260} w={420} h={180} />

      <div
        className={`${CARD} relative z-[2] p-8`}
        style={{ width: SCHEDULER_W, height: SCHEDULER_H }}
      >
        <p className="text-[14px] font-bold text-[var(--foreground)]">
          Windows PowerShell / Task Scheduler
        </p>
        <p className="mt-1 text-[11px] text-[var(--muted)]">
          Send HTTP heartbeat requests automatically on schedule
        </p>

        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 font-mono text-[10px] text-[var(--muted)]">
          <p className="text-[var(--foreground)] font-semibold mb-1"># PowerShell Script Example</p>
          <p>Invoke-WebRequest -Uri &quot;https://ping.pulsewatch.com/v1/job-token&quot;</p>
          <div className="mt-3 flex items-center justify-between text-[11px] border-t border-[var(--border)] pt-2">
            <span className="flex items-center gap-1.5" style={{ color: UP }}>
              <span className="h-2 w-2 rounded-full" style={{ background: UP }} />
              Status: Active Heartbeat
            </span>
            <span>Every 10 mins</span>
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 3: Choose your preferred type of notifications (tilted card / settings)
--------------------------------------------------------------------- */
const NOTIF_W = 540;
const NOTIF_H = 340;

function NotificationsVisual() {
  return (
    <PlaneStage
      w={NOTIF_W}
      h={NOTIF_H}
      scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]"
    >
      <DimPanel x={280} y={260} w={420} h={180} />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: NOTIF_W, height: NOTIF_H }}>
        <p className="text-[16px] font-bold text-[var(--foreground)]">
          Alert notification channels
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--muted)]" />
              <div>
                <p className="text-[12px] font-medium text-[var(--foreground)]">E-mail</p>
                <p className="text-[10px] text-[var(--muted)]">job.doe@example.com</p>
              </div>
            </div>
            <div className="h-5 w-9 rounded-full bg-[var(--color-brand-blue-light)] p-0.5">
              <div className="h-4 w-4 rounded-full bg-white translate-x-4" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <div className="flex items-center gap-3">
              <Terminal size={18} className="text-[var(--muted)]" />
              <div>
                <p className="text-[12px] font-medium text-[var(--foreground)]">SMS</p>
                <p className="text-[10px] text-[var(--color-status-warning)]">Add phone number ⚠</p>
              </div>
            </div>
            <div className="h-5 w-9 rounded-full bg-[var(--color-brand-blue-light)] p-0.5">
              <div className="h-4 w-4 rounded-full bg-white translate-x-4" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-[var(--muted)]" />
              <div>
                <p className="text-[12px] font-medium text-[var(--foreground)]">Voice call</p>
                <p className="text-[10px] text-[var(--muted)]">Add phone number</p>
              </div>
            </div>
            <div className="h-5 w-9 rounded-full bg-[var(--border)] p-0.5">
              <div className="h-4 w-4 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Section Data Configuration matching Cron Job Monitoring Layout
--------------------------------------------------------------------- */
const FEATURES = [
  {
    title: 'Monitor intranet devices connected to the internet',
    description:
      'Cron job monitoring is a great choice if you want to know whether your device is connected to the internet all the time.',
    Visual: IntranetDevicesVisual,
  },
  {
    title: 'Use Windows task scheduler for monitoring',
    description:
      'Use Powershell to send HTTP requests to us and we will notify you if they do not arrive on time.',
    Visual: TaskSchedulerVisual,
  },
  {
    title: 'Choose your preferred type of notifications',
    description:
      'Get instant alerts via email, SMS, voice call or through one of many integrations (such as Slack, Zapier, Splunk, etc.)',
    Visual: NotificationsVisual,
  },
] as const;

export default function CornJobMonitoringRelibilitySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-8 text-[var(--foreground)] sm:py-12">
      <Container>
        <div className="relative">
          {/* vertical divider (desktop) */}
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
                    <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                    {description}
                  </p>
                </div>

                <div className={reversed ? 'lg:order-1' : undefined}>
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
