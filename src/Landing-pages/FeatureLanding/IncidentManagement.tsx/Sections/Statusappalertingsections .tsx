import { Apple, Check, ChevronRight, Play } from 'lucide-react';
import type { ReactNode } from 'react';

/* =====================================================================
   Three sections from the screenshot:

     1. Build trust with public status pages.          (text left, skewed visual right)
     2. Monitor on the go. Stay in control anywhere.   (bordered card: phone left, text right)
     3. Catch every incident before it reaches your users. (text left, skewed visual right)

   No green anywhere. The "up / healthy" colour is the brand blue (UP below)
   and the outlined buttons use the same blue. Change UP / ACCENT in one
   place if you want another colour.

   Skewed visuals use the same plane as the other heroes:
   skewY(-18deg) skewX(33deg), children placed in "design px", scaled by --s.
===================================================================== */

const ACCENT = '#3b9be8';
const UP = 'var(--color-brand-blue-light, #3b9be8)';
const DOWN = 'var(--color-status-down, #ef4444)';

const GRADIENT_BG = 'bg-[linear-gradient(90deg,#1479c0,#5568b0,#85429a)]';

const PLANE_CARD =
  'overflow-hidden rounded-[36px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_24px_52px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.06)]';

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

function Blur({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`blur-[3px] ${className}`}>{children}</span>;
}

/* absolutely positioned box, coordinates in design px (skewed scenes) */
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

/* puts its children on the skewed plane */
function Plane({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative mx-auto h-[280px] w-full max-w-[480px] [mask-image:linear-gradient(90deg,#000_75%,transparent_100%)] sm:h-[320px]"
    >
      <div
        aria-hidden="true"
        className="absolute left-2 top-[110px] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.4] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:left-4 sm:top-[124px] sm:[--s:0.48]"
      >
        {children}
      </div>
    </div>
  );
}

/* outlined pill button / link */
function PillLink({
  href,
  children,
  glow = false,
}: {
  href: string;
  children: ReactNode;
  glow?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b9be8] ${
        glow
          ? 'border-[#3b9be8] text-white shadow-[0_0_18px_rgba(59,155,232,0.45)]'
          : 'border-[#3b9be8]/45 text-[#cfe6fa]'
      }`}
    >
      {children}
    </a>
  );
}

function Copy({ title, body, children }: { title: ReactNode; body: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h2 className="mb-4 max-w-[440px] text-[clamp(1.6rem,2.6vw,2rem)] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--foreground)]">
        {title}
      </h2>
      <p className="mb-6 max-w-[440px] text-[15px] leading-[1.7] text-[var(--muted)]">{body}</p>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

/* uptime strip: array of booleans -> bars (design px) */
function Bars({
  x,
  y,
  count,
  down,
  h = 34,
  gap = 13,
}: {
  x: number;
  y: number;
  count: number;
  down: number[];
  h?: number;
  gap?: number;
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="absolute w-[6px] rounded-full"
          style={{
            left: x + i * gap,
            top: y,
            height: h,
            background: down.includes(i) ? DOWN : UP,
          }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Section 1: public status pages                                      */
/* ------------------------------------------------------------------ */

const STATUS_ROWS = [
  { name: 'Website', pct: '100%', down: [] as number[] },
  { name: 'API', pct: '99.98%', down: [31] },
  { name: 'Checkout', pct: '100%', down: [] },
  { name: 'Database', pct: '99.95%', down: [12, 13] },
];

function StatusPageVisual() {
  return (
    <Plane label="Example public status page showing all systems operational">
      <Box x={0} y={0} w={700} h={420} className={PLANE_CARD}>
        {/* top bar */}
        <Box
          x={30}
          y={26}
          className="whitespace-nowrap text-[18px] font-semibold leading-[26px] text-white"
        >
          Acme status
        </Box>
        <Box
          x={500}
          y={20}
          w={170}
          h={38}
          className={`grid place-items-center rounded-[10px] text-[15px] font-semibold text-white ${GRADIENT_BG}`}
        >
          Subscribe
        </Box>

        {/* banner */}
        <Box
          x={30}
          y={84}
          w={640}
          h={60}
          className="flex items-center gap-3 rounded-[14px] border-2 px-5 text-[22px] font-bold text-white"
        >
          <span
            className="grid size-[26px] place-items-center rounded-full"
            style={{ background: UP }}
          >
            <Check size={16} strokeWidth={3.5} className="text-[#0b1320]" aria-hidden="true" />
          </span>
          All systems operational
        </Box>

        {/* monitors */}
        <Box x={30} y={170} className="whitespace-nowrap text-[15px] text-[#8a94a6]">
          Uptime, last 50 days
        </Box>
        {STATUS_ROWS.map(({ name, pct, down }, i) => (
          <Box
            key={name}
            x={0}
            y={204 + i * 52}
            w={700}
            h={52}
            className="border-t-2 border-white/[0.06]"
          >
            <Box
              x={30}
              y={13}
              className="whitespace-nowrap text-[17px] leading-[24px] text-white/85"
            >
              {name}
            </Box>
            <Bars x={190} y={8} count={38} down={down} h={32} gap={12} />
            <Box
              x={630}
              y={13}
              className="whitespace-nowrap text-[15px] leading-[24px] text-[#a9b4c4]"
            >
              {pct}
            </Box>
          </Box>
        ))}
      </Box>
    </Plane>
  );
}

function StatusPagesSection() {
  return (
    <div className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <Copy
        title={
          <>
            Build trust with
            <br />
            public status pages.
          </>
        }
        body="Be transparent. Share your uptime with the public and inform your customers about any planned (or unplanned) outages."
      >
        <PillLink href="/status-pages/demo" glow>
          Check LIVE demo
          <ChevronRight size={14} aria-hidden="true" />
        </PillLink>
        <PillLink href="/status-pages">Explore Status Pages</PillLink>
      </Copy>
      <StatusPageVisual />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2: mobile app                                               */
/* ------------------------------------------------------------------ */

const PHONE_MONITORS = [
  { name: 'checkout.myshop.com', note: 'Up for 12 days' },
  { name: 'api.clientwebshop.com', note: 'Up for 3 days' },
  { name: 'mail.companymail.net', note: 'Up for 8 days' },
];

function StoreBadge({ children, label }: { children: ReactNode; label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="grid size-[30px] place-items-center rounded-[8px] border border-white/15 bg-white/[0.07] text-white"
    >
      {children}
    </span>
  );
}

function PhoneVisual() {
  return (
    <div className="relative mx-auto h-[320px] w-full max-w-[340px]">
      {/* blue glow behind the phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(59,155,232,0.28), rgba(85,104,176,0.1) 60%, transparent 100%)',
        }}
      />

      {/* store badges */}
      <div className="absolute right-3 top-0 z-[2] flex gap-2">
        <StoreBadge label="App Store">
          <Apple size={16} aria-hidden="true" />
        </StoreBadge>
        <StoreBadge label="Google Play">
          <Play size={14} fill="currentColor" aria-hidden="true" />
        </StoreBadge>
      </div>

      {/* phone, bottom is cropped with a fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 top-[34px] w-[210px] -translate-x-1/2 overflow-hidden rounded-t-[30px] border-2 border-b-0 border-white/[0.14] bg-[#0f1621] p-3 [mask-image:linear-gradient(180deg,#000_70%,transparent_100%)]"
      >
        <div className="mx-auto mb-2 h-[5px] w-[44px] rounded-full bg-white/15" />
        <p className="text-[8px] text-[#8a94a6]">Current status</p>

        <div className="mt-1.5 flex items-center gap-3 rounded-[12px] border border-white/[0.08] bg-white/[0.04] p-2.5">
          <span
            className="grid size-[38px] shrink-0 place-items-center rounded-full"
            style={{ background: `color-mix(in srgb, ${UP} 25%, transparent)` }}
          >
            <span
              className="grid size-[24px] place-items-center rounded-full"
              style={{ background: UP }}
            >
              <Check size={13} strokeWidth={3.5} className="text-[#0b1320]" />
            </span>
          </span>
          <div className="flex-1 space-y-1 text-[8px] text-white/80">
            {[
              ['Down', 0, DOWN],
              ['Up', 7, UP],
              ['Paused', 0, '#7b8aa3'],
            ].map(([label, n, c]) => (
              <div key={label as string} className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="size-[6px] rounded-full" style={{ background: c as string }} />
                  {label}
                </span>
                <span className="font-semibold">{n}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mb-1 mt-3 text-[8px] text-[#8a94a6]">Monitors</p>
        <div className="space-y-1.5">
          {PHONE_MONITORS.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-2 rounded-[10px] border border-white/[0.07] bg-white/[0.035] p-2"
            >
              <span className="size-[8px] shrink-0 rounded-full" style={{ background: UP }} />
              <div className="min-w-0">
                <p className="truncate text-[9px] font-semibold text-white">
                  <Blur>{m.name}</Blur>
                </p>
                <p className="text-[7.5px] text-[#8a94a6]">{m.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAppSection() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.015] px-6 py-10 sm:px-10 lg:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <PhoneVisual />
        <Copy
          title={
            <>
              Monitor on the go.
              <br />
              Stay in control anywhere.
            </>
          }
          body="Get real-time alerts and manage all your monitors from anywhere. Check statuses, pause monitors, and resolve incidents instantly."
        >
          <PillLink href="/mobile-app">Explore our mobile app</PillLink>
        </Copy>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3: alerting                                                 */
/* ------------------------------------------------------------------ */

const ALERT_ROWS = [
  { name: 'shop.myshop.com', t: '2 min ago' },
  { name: 'api.clientwebshop.com', t: '1 h ago' },
  { name: 'monitor-01.internal', t: '3 h ago' },
];

function AlertingVisual() {
  return (
    <Plane label="Example down alert with the last 24 hours of uptime">
      <Box x={0} y={0} w={700} h={420} className={PLANE_CARD}>
        {/* notification header */}
        <Box x={30} y={28}>
          <span
            className="block size-[24px] rounded-full"
            style={{
              background: DOWN,
              boxShadow: `0 0 0 6px color-mix(in srgb, ${DOWN} 28%, transparent)`,
            }}
          />
        </Box>
        <Box x={72} y={26} className="whitespace-nowrap text-[16px] leading-[28px] text-white/60">
          UptimeRobot
        </Box>
        <Box
          x={580}
          y={26}
          w={90}
          className="whitespace-nowrap text-right text-[16px] leading-[28px] text-white/50"
        >
          now
        </Box>
        <Box
          x={30}
          y={76}
          className="whitespace-nowrap text-[24px] font-bold leading-[32px] text-white"
        >
          checkout.myshop.com is down
        </Box>
        <Box x={30} y={112} className="whitespace-nowrap text-[16px] leading-[24px] text-[#a9b4c4]">
          <Blur>Connection timeout after 30 seconds</Blur>
        </Box>

        {/* last 24 hours */}
        <Box
          x={30}
          y={166}
          w={640}
          h={104}
          className="rounded-[16px] border-2 border-white/[0.08] bg-white/[0.03]"
        >
          <Box x={22} y={14} className="text-[16px] leading-[22px] text-white/85">
            Last 24 hours
          </Box>
          <Box x={540} y={14} className="text-[16px] leading-[22px] text-white/65">
            98.4%
          </Box>
          <Bars x={22} y={52} count={38} down={[33, 34, 37]} h={34} gap={16} />
        </Box>

        {/* dim list below */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-[290px] h-[130px] w-full opacity-60 [mask-image:linear-gradient(180deg,#000_0%,transparent_100%)]"
        >
          {ALERT_ROWS.map(({ name, t }, i) => (
            <Box
              key={name}
              x={0}
              y={i * 44}
              w={700}
              h={44}
              className="border-t-2 border-white/[0.06]"
            >
              <Box
                x={30}
                y={10}
                className="whitespace-nowrap text-[16px] leading-[24px] text-[#a9b4c4]"
              >
                <Blur>{name}</Blur>
              </Box>
              <Box
                x={560}
                y={10}
                className="whitespace-nowrap text-[15px] leading-[24px] text-[#8a94a6]"
              >
                {t}
              </Box>
            </Box>
          ))}
        </div>
      </Box>
    </Plane>
  );
}

function AlertingSection() {
  return (
    <div className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <Copy
        title="Catch every incident before it reaches your users."
        body="Get notified the instant something breaks: by email, SMS, phone call, Slack, or webhook. Watch your whole stack from one place and pick the channels that reach your team fastest, so critical issues never sit unseen."
      >
        <PillLink href="/alerting">Explore IT alerting</PillLink>
      </Copy>
      <AlertingVisual />
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function StatusAppAlertingSections() {
  return (
    <section className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <StatusPagesSection />
        <div className="py-6 lg:py-10">
          <MobileAppSection />
        </div>
        <AlertingSection />
      </div>
    </section>
  );
}
