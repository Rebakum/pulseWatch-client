import ShaderButton from '@/components/shader-button/ShaderButton';
import { ChevronDown, Filter, Navigation, Search } from 'lucide-react';
import type { ReactNode } from 'react';

/* =====================================================================
   Incident-management hero (matches the reference screenshot)

   Geometry (unchanged from the ping hero, it is the same plane):
   - every horizontal edge rises 18deg  -> skewY(-18deg)
   - every left edge leans ~33deg       -> skewX(33deg)
   - cards, backdrop and text all sit on this ONE plane, so the whole
     scene is a single transformed layer.
   Children are positioned in "design px" (2x the reference px) and the
   scene is scaled by --s (0.5 on desktop = same size as the reference).

   Layer order (back -> front):
     1. Backdrop      : dim monitors table + account box (fades to the right)
     2. Status card   : "Current status" + "Latest alert" strip
     3. Notification  : "UptimeRobot / api.core-backend-v2 is down!"
===================================================================== */

/* project colours (fallbacks keep it working if a token is missing) */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down, #ef4444)';
const WARN = 'var(--color-status-warning, #f59e0b)';
const PAUSED = '#7b8aa3';

const CARD =
  'overflow-hidden rounded-[40px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_24px_52px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.06)]';

const PANEL = 'rounded-[28px] border-2 border-white/[0.06]';

/* rows of the dim monitors table behind the cards */
type Tone = 'down' | 'warn';

const INCIDENTS: {
  host: string;
  code: string;
  cause: string;
  tone: Tone;
  count: string;
  when: string;
}[] = [
  {
    host: 'checkout.myshop.com',
    code: '500',
    cause: 'Internal Server Error',
    tone: 'down',
    count: '3',
    when: 'May 14, 2026, 10:46 AM',
  },
  {
    host: 'api.clientwebshop.com',
    code: '503',
    cause: 'Service Unavailable',
    tone: 'down',
    count: '1',
    when: 'May 14, 2026, 09:12 AM',
  },
  {
    host: 'mail.companymail.net',
    code: 'SLOW',
    cause: 'Degraded performance',
    tone: 'warn',
    count: '6',
    when: 'May 13, 2026, 11:02 PM',
  },
  {
    host: 'monitor-01.internal',
    code: 'TMO',
    cause: 'Connection timeout',
    tone: 'down',
    count: '2',
    when: 'May 13, 2026, 07:30 PM',
  },
  {
    host: 'api.quickdelivery.io',
    code: 'ERR',
    cause: 'Certificate error',
    tone: 'down',
    count: '1',
    when: 'May 12, 2026, 03:18 PM',
  },
  {
    host: 'api.openai.com/v1',
    code: '429',
    cause: 'Too Many Requests',
    tone: 'warn',
    count: '4',
    when: 'May 12, 2026, 01:44 PM',
  },
];

const STATUS_ROWS = [
  { label: 'Down', color: DOWN, count: 1 },
  { label: 'Up', color: UP, count: 6 },
  { label: 'Paused', color: PAUSED, count: 0 },
];

/* absolutely positioned box, coordinates in design px */
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

function Blur({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`blur-[4px] ${className}`}>{children}</span>;
}

/* small coloured error-code badge ("500", "SLOW", "TMO" ...) */
function Badge({ code, tone }: { code: string; tone: Tone }) {
  const color = tone === 'down' ? DOWN : WARN;
  return (
    <span
      className="inline-block rounded-[6px] px-2 py-[2px] text-[12px] font-bold leading-[16px]"
      style={{ color, background: `color-mix(in srgb, ${color} 22%, transparent)` }}
    >
      {code}
    </span>
  );
}

/* red status dot with soft halo (used by the notification + alert strip) */
function RedDot({ size, className = '' }: { size: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: DOWN,
        boxShadow: `0 0 0 ${Math.round(size * 0.22)}px color-mix(in srgb, ${DOWN} 28%, transparent)`,
      }}
    />
  );
}

/* ---------------------------------------------------------------------
   Layer 3: push notification
--------------------------------------------------------------------- */
function NotificationCard() {
  return (
    <Box x={0} y={0} w={560} h={205} className={CARD}>
      <Box x={28} y={30}>
        <RedDot size={34} />
      </Box>
      <Box
        x={82}
        y={34}
        className="whitespace-nowrap text-[17px] font-medium uppercase leading-[26px] tracking-[0.04em] text-white/60"
      >
        UptimeRobot
      </Box>
      <Box
        x={440}
        y={30}
        w={96}
        className="whitespace-nowrap text-right text-[19px] leading-[26px] text-white/55"
      >
        NOW
      </Box>

      <Box x={28} y={72} className="whitespace-nowrap">
        <Blur className="text-[14px] text-[#a9b4c4]">checkout service</Blur>
      </Box>
      <Box
        x={28}
        y={92}
        className="whitespace-nowrap text-[29px] font-bold leading-[38px] text-white"
      >
        UptimeRobot
      </Box>
      <Box x={28} y={136} className="whitespace-nowrap text-[22px] leading-[30px] text-white/75">
        api.core-backend-v2 is down!
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Layer 2: current status + latest alert
--------------------------------------------------------------------- */
function CurrentStatusCard() {
  return (
    <Box x={-70} y={170} w={700} h={300} className={CARD}>
      <Box
        x={32}
        y={62}
        className="whitespace-nowrap text-[24px] font-bold leading-[32px] text-white"
      >
        Current status
      </Box>

      {/* big red status dial */}
      <Box x={34} y={108} w={112} h={112}>
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{ background: `color-mix(in srgb, ${DOWN} 24%, transparent)` }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-[14px] grid place-items-center rounded-full"
          style={{
            background: DOWN,
            boxShadow: `0 0 28px color-mix(in srgb, ${DOWN} 55%, transparent)`,
          }}
        >
          <Navigation
            size={30}
            className="rotate-[-45deg] text-[#1a0d12]"
            fill="currentColor"
            aria-hidden="true"
          />
        </span>
      </Box>

      {/* legend + counts */}
      {STATUS_ROWS.map(({ label, color, count }, i) => (
        <Box
          key={label}
          x={176}
          y={92 + i * 40}
          w={470}
          h={36}
          className="flex items-center justify-between border-b-2 border-white/[0.06] text-[22px] text-white/85"
        >
          <span className="flex items-center gap-3">
            <span className="size-[14px] rounded-full" style={{ background: color }} />
            {label}
          </span>
          <span className="pr-1 font-semibold text-white">{count}</span>
        </Box>
      ))}

      {/* latest alert strip */}
      <Box x={0} y={222} w={700} h={78} className="border-t-2 border-white/[0.06] bg-black/20">
        <Box x={32} y={12} className="whitespace-nowrap text-[15px] leading-[20px] text-white/55">
          Latest alert
        </Box>
        <Box x={32} y={34} className="whitespace-nowrap text-[22px] leading-[30px]">
          <span className="font-semibold text-white">api.core-backend-v2 is down</span>{' '}
          <span className="text-white/50">2 min ago</span>
        </Box>
        <Box x={628} y={22}>
          <span
            aria-hidden="true"
            className="grid size-[34px] place-items-center rounded-full border-2"
            style={{ borderColor: `color-mix(in srgb, ${DOWN} 55%, transparent)` }}
          >
            <span className="size-[14px] rounded-full" style={{ background: DOWN }} />
          </span>
        </Box>
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Layer 1: backdrop (monitors table + account box), fades to the right
--------------------------------------------------------------------- */
function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 hidden h-[900px] w-[1700px] opacity-[0.7] [mask-image:linear-gradient(90deg,#000_0%,#000_45%,transparent_100%)] lg:block"
    >
      {/* monitors table panel */}
      <Box x={560} y={-190} w={1050} h={700} className={`${PANEL} bg-white/[0.03]`}>
        {/* toolbar */}
        <Box
          x={30}
          y={40}
          w={330}
          h={40}
          className="flex items-center gap-2 rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03] px-3 text-[14px] text-[#a9b4c4]"
        >
          <Search size={14} aria-hidden="true" />
          Search by name or url
        </Box>
        <Box
          x={390}
          y={40}
          w={130}
          h={40}
          className="flex items-center justify-between rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03] px-3 text-[14px] text-[#c4cdd9]"
        >
          All tags
          <ChevronDown size={14} aria-hidden="true" />
        </Box>
        <Box
          x={540}
          y={40}
          w={200}
          h={40}
          className="flex items-center justify-between rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03] px-3 text-[14px] text-[#c4cdd9]"
        >
          Down first
          <ChevronDown size={14} aria-hidden="true" />
        </Box>
        <Box
          x={770}
          y={40}
          w={110}
          h={40}
          className="flex items-center justify-center gap-2 rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03] text-[14px] text-[#c4cdd9]"
        >
          <Filter size={14} aria-hidden="true" />
          Filter
        </Box>

        {/* column headers */}
        <Box x={30} y={112} className="text-[14px] text-[#8a94a6]">
          Monitor
        </Box>
        <Box x={400} y={112} className="text-[14px] text-[#8a94a6]">
          Root cause
        </Box>
        <Box x={730} y={112} className="text-[14px] text-[#8a94a6]">
          Incidents
        </Box>
        <Box x={850} y={112} className="text-[14px] text-[#8a94a6]">
          Started
        </Box>

        {/* rows */}
        {INCIDENTS.map(({ host, code, cause, tone, count, when }, i) => (
          <Box
            key={host}
            x={0}
            y={148 + i * 72}
            w={1050}
            h={72}
            className="border-t-2 border-white/[0.05]"
          >
            <Box
              x={30}
              y={22}
              className="whitespace-nowrap text-[17px] leading-[26px] text-white/80"
            >
              {host}
            </Box>
            <Box
              x={400}
              y={22}
              className="flex items-center gap-3 whitespace-nowrap text-[17px] leading-[26px] text-white/75"
            >
              <Badge code={code} tone={tone} />
              {cause}
            </Box>
            <Box x={730} y={22} className="text-[17px] leading-[26px] text-white/70">
              {count}
            </Box>
            <Box
              x={850}
              y={22}
              className="whitespace-nowrap text-[15px] leading-[26px] text-[#8a94a6]"
            >
              {when}
            </Box>
          </Box>
        ))}
      </Box>

      {/* account box */}
      <Box x={60} y={470} w={300} h={296} className={`${PANEL} bg-[#111927]/90`}>
        <span className="absolute left-[30px] top-[24px] grid size-[34px] place-items-center rounded-full bg-white/[0.1] text-[11px] font-bold text-white">
          JD
        </span>
        <span className="absolute left-[78px] top-[20px] whitespace-nowrap text-[14px] font-semibold text-white">
          John Doe
        </span>
        <span className="absolute left-[78px] top-[42px] whitespace-nowrap text-[11px] text-[#a9b4c4]">
          Team owner
        </span>

        <span className="absolute left-[30px] top-[96px] text-[11px] text-[#a9b4c4]">
          Your teams
        </span>
        <span className="absolute left-[30px] top-[128px] whitespace-nowrap text-[13px] text-white/80">
          Your team
        </span>
        <span className="absolute left-[30px] top-[162px] whitespace-nowrap text-[13px] text-white/80">
          Team Acme team
        </span>
        <span className="absolute left-[30px] top-[196px] grid size-[18px] place-items-center rounded-full bg-white/[0.08] text-[9px] text-white">
          M
        </span>
        <span className="absolute left-[60px] top-[196px] whitespace-nowrap text-[13px] text-white/80">
          Moo team
        </span>
        <span className="absolute left-[24px] bg-brand-gradient top-[238px] grid h-[40px] w-[252px] place-items-center rounded-full text-[13px] font-semibold text-white">
          Upgrade now
        </span>
      </Box>
    </div>
  );
}

export default function IncidentManagementHero() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="incident-management-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 overflow-hidden px-4 py-16 sm:px-6 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:overflow-visible lg:px-8 lg:py-12"
      >
        {/* ---------- Left content ---------- */}
        <div className="relative z-10 min-w-0">
          <h1
            id="incident-management-title"
            className="mb-7 max-w-[560px] text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            Stay in <span className="bg-brand-gradient bg-clip-text text-transparent">control</span>{' '}
            of outages with better incident management
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Track, filter, and resolve incidents quickly to ensure your site stays up, while your
            entire team stays on the same page.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        {/* ---------- Right visual ---------- */}
        <div
          aria-label="Example incident dashboard: a down alert notification, current status and the monitors list"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 50% at 55% 45%, rgba(74,159,224,0.22), rgba(74,159,224,0.06) 55%, transparent 75%)',
            }}
          />

          <div
            aria-hidden="true"
            className="absolute left-4 top-[170px] z-[1] xl:left-2 h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.34] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[190px] sm:[--s:0.42] xl:[--s:0.48] min-[1536px]:[--s:0.52]"
          >
            <Backdrop />
            <CurrentStatusCard />
            <NotificationCard />
          </div>
        </div>
      </section>
    </main>
  );
}
