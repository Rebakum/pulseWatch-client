import { Bell, ChevronDown, Info, Plus } from 'lucide-react';
import type { ReactNode } from 'react';

import Container from '@/components/common/Container';

/* =====================================================================
   Tilted cards sit on ONE plane: horizontal edges rise 18deg (skewY -18),
   left edges lean 33deg (skewX 33). Cards are laid out in "design px" and
   the plane is scaled by --s so it fits the column at every breakpoint.
===================================================================== */

const TAN_RISE = 0.325; // tan(18deg)
const TAN_LEAN = 0.65; // tan(33deg)

/* project colours (no green) */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down)';
const WARN = 'var(--color-status-warning)';

const CARD =
  'rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]';

const PLANE =
  'absolute left-0 origin-top-left [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)]';

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

/** dim, faded panel peeking out behind a tilted card */
function DimPanel({
  x,
  y,
  w,
  h,
  title,
  lines,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines: string[];
}) {
  return (
    <div
      className="absolute rounded-[28px] border-2 border-[var(--border)] bg-[var(--surface)] opacity-50 [mask-image:linear-gradient(90deg,#000_30%,transparent_100%)]"
      style={{ left: x, top: y, width: w, height: h }}
    >
      <p className="absolute left-6 top-5 whitespace-nowrap text-[12px] font-semibold text-[var(--foreground)]">
        {title}
      </p>
      {lines.map((line, i) => (
        <p
          key={line}
          className="absolute left-6 whitespace-nowrap text-[11px] text-[var(--muted)]"
          style={{ top: 48 + i * 24 }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 1: Respond swiftly to region-specific outages (tilted alert card)
--------------------------------------------------------------------- */
const OUTAGE_W = 500;
const OUTAGE_H = 330;
const OUTAGE_BARS = 28;
const OUTAGE_DOWN = new Set([22, 23, 24, 25]);

function OutageAlertVisual() {
  return (
    <PlaneStage
      w={OUTAGE_W}
      h={OUTAGE_H}
      scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.76]"
    >
      <DimPanel
        x={250}
        y={250}
        w={420}
        h={170}
        title="Region to monitor from"
        lines={['Default (auto-select by PulseWatch)', 'North America · Europe']}
      />

      <div
        className={`${CARD} relative z-[2] px-8 py-7`}
        style={{ width: OUTAGE_W, height: OUTAGE_H }}
      >
        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-white">
              <Bell className="h-3 w-3" aria-hidden="true" />
            </span>
            PULSEWATCH
          </span>
          <span>2 min</span>
        </div>

        <p className="mt-4 text-[22px] font-bold leading-tight text-[var(--foreground)]">
          Region outage – EU-West
        </p>
        <p className="mt-2 text-[12px] leading-relaxed text-[var(--muted)]">
          api.example.com is DOWN in Frankfurt. US-East and AP-Southeast unaffected.
        </p>

        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-[var(--foreground)]">Last 24 hours</span>
            <span className="text-[var(--muted)]">91.667%</span>
          </div>
          <div className="mt-3 flex gap-[5px]">
            {Array.from({ length: OUTAGE_BARS }, (_, i) => (
              <span
                key={i}
                className="h-[26px] w-[9px] rounded-full"
                style={{ background: OUTAGE_DOWN.has(i) ? DOWN : UP }}
              />
            ))}
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 2: Keep your focus local (flat region picker)
--------------------------------------------------------------------- */
const REGIONS = [
  { name: 'North America', color: '#6b7cc9' },
  { name: 'Europe', color: '#4a9fe0' },
  { name: 'Asia Pacific', color: DOWN },
  { name: 'Australia', color: '#85429a' },
];

function RegionPickerVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />

      <div className="pointer-events-none absolute -bottom-2 left-8 hidden h-24 w-[24rem] opacity-40 [mask-image:linear-gradient(90deg,transparent,black_35%,black_75%,transparent)] sm:block">
        <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]" />
      </div>

      <div className={`${CARD} relative mx-auto w-full max-w-[27rem] p-6`}>
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--foreground)]">
          Region to monitor from
          <Info className="h-3 w-3 text-[var(--muted)]" />
        </p>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex flex-1 items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[11px] text-[var(--foreground)]">
            <span className="flex items-center gap-2">
              <span className="h-3 w-4 rounded-[3px] bg-[image:var(--background-image-brand-gradient)]" />
              Default (auto-select by PulseWatch)
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-[var(--muted)]" />
          </div>
          <span className="grid size-8 place-items-center rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
            <Plus className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-3 space-y-2">
          {REGIONS.map((r) => (
            <div
              key={r.name}
              className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-[12px] text-[var(--foreground)]"
            >
              <span className="h-3.5 w-5 rounded-[3px]" style={{ background: r.color }} />
              {r.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 3: Improve user experience (tilted response-time chart)
--------------------------------------------------------------------- */
const PERF_W = 520;
const PERF_H = 340;

function PerformanceVisual() {
  return (
    <PlaneStage w={PERF_W} h={PERF_H} scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]">
      <DimPanel
        x={290}
        y={270}
        w={420}
        h={190}
        title="Current status"
        lines={['Up · Europe', 'Up · North America']}
      />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: PERF_W, height: PERF_H }}>
        <div className="flex items-center justify-between text-[13px]">
          <p className="font-bold text-[var(--foreground)]">Response time</p>
          <span className="flex items-center gap-1 text-[var(--muted)]">
            Last 24 hours <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>

        <div className="relative mt-4 h-[150px] rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3">
          <span
            className="absolute inset-y-3 right-12 w-9 rounded-sm"
            style={{ background: 'color-mix(in srgb, var(--color-status-down) 16%, transparent)' }}
          />
          <svg viewBox="0 0 300 100" className="h-full w-full" fill="none" aria-hidden="true">
            <line x1="0" y1="40" x2="300" y2="40" stroke={WARN} strokeOpacity="0.55" />
            <polyline
              points="0,72 40,70 80,66 120,72 160,60 200,68 225,36 240,10 255,64 300,62"
              stroke={UP}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <p className="text-[11px] text-[var(--muted)]">Average</p>
            <p className="mt-1 text-[18px] font-bold text-[var(--foreground)]">101.66 ms</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <p className="text-[11px] text-[var(--muted)]">Maximum</p>
            <p className="mt-1 text-[18px] font-bold text-[var(--foreground)]">1,546.96 ms</p>
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Section data (text from the reference)
--------------------------------------------------------------------- */
const FEATURES = [
  {
    title: 'Respond swiftly to region-specific outages',
    description:
      "Receive real-time notifications the moment one region encounters performance issues. With up to 21 integrations, including push notifications, email, and SMS, you'll be ready to act, no matter where you are.",
    Visual: OutageAlertVisual,
  },
  {
    title: 'Keep your focus local',
    description:
      "Tailor your monitoring to the regions that matter most. With location-specific monitoring, you'll only get alerts when issues affect your local audience. Choose from four regions (North America, Europe, Asia, and Australia) or let PulseWatch auto-assign with the Default option. Assign multiple regions to a single monitor for broader coverage without the clutter.",
    Visual: RegionPickerVisual,
  },
  {
    title: 'Improve user experience',
    description:
      'Identify regional slowdowns or connectivity issues to ensure every visitor enjoys a fast, seamless experience. Monitor performance across the globe, all from a single, user-friendly dashboard.',
    Visual: PerformanceVisual,
  },
] as const;

export default function MultiLocationReliabilitySection() {
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
