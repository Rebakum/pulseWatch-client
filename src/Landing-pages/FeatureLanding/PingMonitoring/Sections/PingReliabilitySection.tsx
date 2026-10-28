import { ArrowUpToLine, ChevronDown, HardDrive, Laptop, Lock, Waves } from 'lucide-react';
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

/* project colours */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down)';
const WARN = 'var(--color-status-warning)';

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

/** absolutely positioned box, coordinates in design px */
function Box({
  x,
  y,
  w,
  h,
  className = '',
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`absolute ${className}`} style={{ left: x, top: y, width: w, height: h }}>
      {children}
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
        E-mail · john.doe@example.com
      </p>
      <p className="absolute left-6 top-[72px] whitespace-nowrap text-[10px] text-[var(--muted)]">
        No delay, no repeat
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 1: server availability (tilted status card)
--------------------------------------------------------------------- */
const AVAIL_W = 470;
const AVAIL_H = 318;
const AVAIL_BARS = 26;

function AvailabilityVisual() {
  return (
    <PlaneStage w={AVAIL_W} h={AVAIL_H} scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.78]">
      <DimPanel x={240} y={230} w={420} h={170} />

      <div
        className={`${CARD} relative z-[2] px-8 py-7`}
        style={{ width: AVAIL_W, height: AVAIL_H }}
      >
        <p className="text-[13px] text-[var(--foreground)]">Current status</p>
        <p className="mt-1.5 text-[26px] font-extrabold leading-none" style={{ color: UP }}>
          Up
        </p>
        <p className="mt-2.5 text-[13px] text-[var(--foreground)]">
          Currently up for 15 d, 14 h, 4 m
        </p>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] text-[var(--foreground)]">Last check</p>
            <p className="mt-1.5 text-[22px] font-extrabold leading-none" style={{ color: UP }}>
              25 seconds ago
            </p>
            <p className="mt-2.5 text-[13px] text-[var(--foreground)]">Checked every 5 min</p>
          </div>

          <span
            className="mt-3 inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[var(--background)] px-3 py-1.5 text-[12px] font-semibold"
            style={{ color: UP }}
          >
            <Lock className="h-3.5 w-3.5" style={{ color: WARN }} />
            Get 60 sec. checks
          </span>
        </div>

        <p className="mt-5 text-[13px] text-[var(--foreground)]">Last 24 hours</p>
        <div className="mt-2 flex gap-[6px]">
          {Array.from({ length: AVAIL_BARS }, (_, i) => (
            <span key={i} className="h-[26px] w-[9px] rounded-full" style={{ background: UP }} />
          ))}
        </div>
        <p className="mt-2.5 text-[12px] text-[var(--muted)]">0 incidents, 0 m down</p>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 2: devices (straight tiles over a dim backdrop)
--------------------------------------------------------------------- */
const TILE =
  'grid h-40 w-40 place-items-center rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)]';

/* 30 checks: true = incident day (two, like the reference) */
const DAYS = Array.from({ length: 30 }, (_, i) => i === 9 || i === 19);

function DevicesVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />

      {/* dim, blurred settings form behind the tiles */}
      <div className="pointer-events-none absolute -left-4 top-24 hidden h-[17rem] w-[24rem] opacity-40 [mask-image:linear-gradient(90deg,transparent,black_35%,black_75%,transparent)] sm:block">
        <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-[9px] text-[var(--muted)]">
            Make sure the device in the network is always available.
          </p>
          <div className="mt-3 h-6 rounded-md border border-[var(--border)] bg-[var(--background)]" />
          <div className="mt-2 h-6 rounded-md border border-[var(--border)] bg-[var(--background)]" />
          <div className="mt-6 grid grid-cols-2 gap-4 text-[8px] text-[var(--muted)]">
            <div>
              <span className="block">SMS message</span>
              <span className="mt-1 block">john.doe@example.com</span>
            </div>
            <div>
              <span className="block">Voice call</span>
              <span className="mt-1 block">Add phone</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid w-fit grid-cols-2 gap-2.5 sm:ml-auto sm:mr-6">
        <div className={`${TILE} !place-items-start content-center px-5`}>
          <div>
            <p className="text-sm text-[var(--foreground)]">Last 7 days</p>
            <p className="mt-2 text-xl font-bold" style={{ color: UP }}>
              100%
            </p>
            <p className="mt-2 whitespace-nowrap text-[11px] text-[var(--muted)]">
              0 incidents, 0 m down
            </p>
          </div>
        </div>

        <div className={TILE}>
          <HardDrive
            className="h-24 w-24 text-[var(--foreground)]/80"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        <div className={TILE}>
          <Laptop
            className="h-24 w-24 text-[var(--foreground)]/80"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        <div className={`${TILE} !place-items-start content-center px-4`}>
          <div>
            <div className="grid grid-cols-7 gap-[3px]">
              {DAYS.map((down, i) => (
                <span
                  key={i}
                  className="h-[11px] w-[11px] rounded-[3px]"
                  style={{ background: down ? DOWN : UP }}
                />
              ))}
            </div>
            <p className="mt-3 text-[10px] text-[var(--foreground)]">May 26</p>
            <p className="text-[10px] font-semibold" style={{ color: UP }}>
              97.849%
            </p>
            <p className="text-[9px] text-[var(--muted)]">2 inc., 14 h, 30 m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 3: response time (tilted chart card)
--------------------------------------------------------------------- */
const RT_W = 578;
const RT_H = 382;

const X_LABELS = [
  { left: 106, text: "Apr 20, '23" },
  { left: 210, text: "May 5, '23" },
  { left: 312, text: "May 12, '23" },
  { left: 420, text: "May 18, '23" },
  { left: 526, text: "May 25, '23" },
];

function ResponseTimeVisual() {
  return (
    <PlaneStage w={RT_W} h={RT_H} scale="[--s:0.38] sm:[--s:0.55] lg:[--s:0.48] xl:[--s:0.64]">
      <DimPanel x={300} y={300} w={460} h={200} />

      <div className={`${CARD} relative z-[2]`} style={{ width: RT_W, height: RT_H }}>
        <Box x={30} y={28} className="text-[16px] font-bold text-[var(--foreground)]">
          Response time
        </Box>
        <Box
          x={396}
          y={22}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[var(--background)] px-3 py-1.5 text-[13px] text-[var(--foreground)]"
        >
          Last 30 days
          <ChevronDown size={14} aria-hidden="true" />
        </Box>

        {/* y axis */}
        <Box
          x={14}
          y={69}
          w={64}
          className="text-right text-[11px] leading-[20px] text-[var(--muted)]"
        >
          1,400 ms
        </Box>
        <Box
          x={14}
          y={141}
          w={64}
          className="text-right text-[11px] leading-[20px] text-[var(--muted)]"
        >
          800 ms
        </Box>
        <Box
          x={14}
          y={214}
          w={64}
          className="text-right text-[11px] leading-[20px] text-[var(--muted)]"
        >
          10 ms
        </Box>

        {/* red incident band */}
        <Box
          x={506}
          y={60}
          w={44}
          h={176}
          className="bg-[linear-gradient(180deg,rgba(220,38,38,0.28),rgba(220,38,38,0.16))]"
        />

        {/* chart */}
        <svg
          aria-hidden="true"
          width={462}
          height={180}
          viewBox="0 0 462 180"
          className="absolute"
          style={{ left: 88, top: 56 }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="0" y1="165" x2="462" y2="165" stroke="var(--border)" strokeWidth="2" />
          {/* threshold */}
          <line
            x1="0"
            y1="88"
            x2="462"
            y2="88"
            stroke={WARN}
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <polyline
            stroke={UP}
            strokeWidth="3"
            points="2,162 56,159 72,148 86,145 112,142 136,139 162,143 186,138 212,141 226,150"
          />
          <polyline stroke={DOWN} strokeWidth="3" points="226,150 248,26 270,148" />
          <polyline
            stroke={UP}
            strokeWidth="3"
            points="270,148 278,153 286,145 312,144 356,143 410,140"
          />
        </svg>

        {/* x axis */}
        {X_LABELS.map(({ left, text }) => (
          <Box
            key={text}
            x={left - 40}
            y={248}
            w={80}
            className="text-center text-[10px] leading-[20px] text-[var(--muted)]"
          >
            {text}
          </Box>
        ))}

        {/* average */}
        <Box x={22} y={292} className="text-[var(--muted)]">
          <Waves size={18} aria-hidden="true" />
        </Box>
        <Box
          x={62}
          y={290}
          className="whitespace-nowrap text-[20px] font-bold leading-[28px] text-[var(--foreground)]"
        >
          101.66 ms
        </Box>
        <Box x={22} y={324} className="text-[11px] leading-[16px] text-[var(--muted)]">
          Average
        </Box>

        {/* maximum */}
        <Box x={316} y={292} className="text-[var(--color-status-down)]">
          <ArrowUpToLine size={18} aria-hidden="true" />
        </Box>
        <Box
          x={346}
          y={290}
          className="whitespace-nowrap text-[20px] font-bold leading-[28px] text-[var(--foreground)]"
        >
          1,546.96 ms
        </Box>
        <Box x={316} y={324} className="text-[11px] leading-[16px] text-[var(--muted)]">
          Maximum
        </Box>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Section
--------------------------------------------------------------------- */
const FEATURES = [
  {
    title: 'Monitor server availability',
    description:
      'Anything can happen with your server, make sure it’s always up and ping your publicly available IP address.',
    Visual: AvailabilityVisual,
  },
  {
    title: 'Monitor devices in your network',
    description:
      'Make sure all the key devices in your network are up with our simple and reliable monitoring.',
    Visual: DevicesVisual,
  },
  {
    title: 'Monitor server response time',
    description:
      'Spot peaks in your server response time. We are checking your server every minute.',
    Visual: ResponseTimeVisual,
  },
] as const;

export default function PingReliabilitySection() {
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
