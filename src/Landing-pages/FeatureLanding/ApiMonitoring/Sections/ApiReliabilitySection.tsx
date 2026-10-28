import { Check, ChevronDown, TriangleAlert } from 'lucide-react';
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

/** dim, faded request form peeking out behind a card */
function DimPanel({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <div
      className="absolute rounded-[28px] border-2 border-[var(--border)] bg-[var(--surface)] opacity-50 [mask-image:linear-gradient(90deg,#000_30%,transparent_100%)]"
      style={{ left: x, top: y, width: w, height: h }}
    >
      <p className="absolute left-6 top-5 whitespace-nowrap text-[12px] font-semibold text-[var(--foreground)]">
        Request details
      </p>
      <p className="absolute left-6 top-12 whitespace-nowrap text-[11px] text-[var(--muted)]">
        Auth. type · None
      </p>
      <p className="absolute left-6 top-[72px] whitespace-nowrap text-[10px] text-[var(--muted)]">
        Request headers · Request body
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 1: Keep your API-powered services running smoothly (tilted card)
--------------------------------------------------------------------- */
const API_W = 490;
const API_H = 318;

const MONITORS = [
  { name: 'GET /v1/orders', code: '200 OK', bad: [] as number[] },
  { name: 'POST /v1/checkout', code: '201 Created', bad: [19] },
  { name: 'GET /v1/health', code: '200 OK', bad: [] },
];

function ApiMonitorsVisual() {
  return (
    <PlaneStage w={API_W} h={API_H} scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.78]">
      <DimPanel x={240} y={230} w={420} h={170} />

      <div className={`${CARD} relative z-[2] px-8 py-7`} style={{ width: API_W, height: API_H }}>
        <p className="text-[13px] text-[var(--foreground)]">API monitors</p>

        <div className="mt-3 space-y-4">
          {MONITORS.map((m) => (
            <div key={m.name}>
              <div className="flex items-center justify-between text-[12px]">
                <span className="flex items-center gap-2 font-semibold text-[var(--foreground)]">
                  <span className="h-2 w-2 rounded-full" style={{ background: UP }} />
                  {m.name}
                </span>
                <span style={{ color: UP }}>{m.code}</span>
              </div>
              <div className="mt-2 flex gap-[5px]">
                {Array.from({ length: 26 }, (_, i) => (
                  <span
                    key={i}
                    className="h-[20px] w-[9px] rounded-full"
                    style={{ background: m.bad.includes(i) ? DOWN : UP }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 2: Prevent cascading failures (flat card with a failing node)
--------------------------------------------------------------------- */
function CascadeNode({ right }: { right?: boolean }) {
  return (
    <div className={`flex flex-col gap-7 ${right ? 'items-start' : 'items-end'}`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex items-center gap-2">
          {right ? <span className="h-px w-9 bg-[var(--border)]" /> : null}
          <span
            className="grid size-7 place-items-center rounded-full border"
            style={{ borderColor: UP, color: UP }}
          >
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {right ? null : <span className="h-px w-9 bg-[var(--border)]" />}
        </span>
      ))}
    </div>
  );
}

function CascadeVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />

      <div className="pointer-events-none absolute -bottom-2 left-8 hidden h-24 w-[24rem] opacity-40 [mask-image:linear-gradient(90deg,transparent,black_35%,black_75%,transparent)] sm:block">
        <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]" />
      </div>

      <div
        className={`${CARD} relative mx-auto flex h-[14rem] w-full max-w-[26rem] items-center justify-center gap-3`}
      >
        <CascadeNode />
        <span
          className="grid size-20 rotate-45 place-items-center rounded-2xl border-2"
          style={{
            borderColor: DOWN,
            background: 'color-mix(in srgb, var(--color-status-down) 12%, transparent)',
          }}
        >
          <TriangleAlert
            className="-rotate-45 h-7 w-7"
            style={{ color: DOWN }}
            aria-hidden="true"
          />
        </span>
        <CascadeNode right />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 3: Go beyond "200 OK" with response checks (tilted card)
--------------------------------------------------------------------- */
const CHECK_W = 520;
const CHECK_H = 340;

function ResponseCheckVisual() {
  return (
    <PlaneStage
      w={CHECK_W}
      h={CHECK_H}
      scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]"
    >
      <DimPanel x={280} y={260} w={420} h={180} />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: CHECK_W, height: CHECK_H }}>
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-bold text-[var(--foreground)]">GET /v1/orders</p>
          <span
            className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[11px] font-semibold"
            style={{ color: UP }}
          >
            200 OK
          </span>
        </div>

        <pre className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 text-[11px] leading-5 text-[var(--muted)]">
          {`{
  "data": [],
  "status": "empty"
}`}
        </pre>

        <div
          className="mt-4 flex items-center justify-between rounded-xl border px-4 py-3 text-[11px]"
          style={{
            borderColor: 'color-mix(in srgb, var(--color-status-down) 30%, transparent)',
            background: 'color-mix(in srgb, var(--color-status-down) 10%, transparent)',
          }}
        >
          <span className="text-[var(--foreground)]">$.data.length &gt; 0</span>
          <span className="font-semibold" style={{ color: DOWN }}>
            Assertion failed
          </span>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 4: Great for AI APIs and model routers (flat JSON card)
--------------------------------------------------------------------- */
function JsonVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />

      <div className="pointer-events-none absolute -bottom-2 left-8 hidden h-24 w-[24rem] opacity-40 [mask-image:linear-gradient(90deg,transparent,black_35%,black_75%,transparent)] sm:block">
        <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)]" />
      </div>

      <div className={`${CARD} relative mx-auto w-full max-w-[26rem] px-8 py-7`}>
        <pre className="text-[12px] leading-6 text-[var(--muted)]">
          {'{\n  '}
          <span style={{ color: UP }}>&quot;model&quot;</span>: &quot;gpt-4o&quot;,
          {'\n  '}
          <span style={{ color: UP }}>&quot;usage&quot;</span>: {'{ '}
          <span style={{ color: WARN }}>&quot;total_tokens&quot;</span>: 482 {'},\n  '}
          <span style={{ color: UP }}>&quot;choices&quot;</span>: [{'{\n    '}
          <span style={{ color: UP }}>&quot;finish_reason&quot;</span>: &quot;stop&quot;
          {'\n  }]\n}'}
        </pre>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 5: Detect and respond to performance drops (tilted chart card)
--------------------------------------------------------------------- */
const LAT_W = 510;
const LAT_H = 340;

function LatencyVisual() {
  return (
    <PlaneStage w={LAT_W} h={LAT_H} scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]">
      <DimPanel x={280} y={260} w={420} h={180} />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: LAT_W, height: LAT_H }}>
        <div className="flex items-center justify-between text-[13px]">
          <p className="font-bold text-[var(--foreground)]">Response time</p>
          <span className="flex items-center gap-1 text-[var(--muted)]">
            Last 30 days <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>

        <div className="relative mt-4 h-[150px] rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3">
          <span
            className="absolute inset-y-3 right-10 w-9 rounded-sm"
            style={{ background: 'color-mix(in srgb, var(--color-status-down) 16%, transparent)' }}
          />
          <svg viewBox="0 0 300 100" className="h-full w-full" fill="none" aria-hidden="true">
            <line x1="0" y1="40" x2="300" y2="40" stroke={WARN} strokeOpacity="0.55" />
            <polyline
              points="0,78 40,74 80,70 120,76 160,66 200,72 220,40 235,8 250,70 300,68"
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
    title: 'Keep your API-powered services running smoothly',
    description:
      'Monitor your APIs for availability and performance before they disrupt users or cascade into system-wide outages (and dependent services).',
    Visual: ApiMonitorsVisual,
  },
  {
    title: 'Prevent cascading failures',
    description:
      'APIs often power mission-critical services. When an API breaks, everything connected to it can fail. Be the first to know when something goes wrong.',
    Visual: CascadeVisual,
  },
  {
    title: 'Go beyond "200 OK" with response checks',
    description:
      "Don't rely on status codes alone. Validate JSON, key fields, and expected values to catch broken responses, empty results, or unexpected messages before they cascade into bigger failures.",
    Visual: ResponseCheckVisual,
  },
  {
    title: 'Great for AI APIs and model routers',
    description:
      'AI endpoints can be available but still return unusable output. Monitor endpoints from providers like OpenAI, Anthropic, and OpenRouter. Validate structured JSON output, token usage, model metadata, and schema contracts to catch malformed responses.',
    Visual: JsonVisual,
  },
  {
    title: 'Detect and respond to performance drops',
    description:
      'Set response time thresholds to detect slow or degraded API performance before your customers do.',
    Visual: LatencyVisual,
  },
] as const;

export default function ApiReliabilitySection() {
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
