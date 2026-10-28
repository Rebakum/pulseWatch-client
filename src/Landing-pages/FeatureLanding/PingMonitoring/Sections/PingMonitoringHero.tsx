import { ArrowUpToLine, Check as CheckIcon, ChevronDown, Repeat2, Waves } from 'lucide-react';
import type { ReactNode } from 'react';

import ShaderButton from '@/components/shader-button/ShaderButton';

/* =====================================================================
   Geometry measured from the reference screenshot (edge detection):
   - every horizontal edge rises 18deg  -> skewY(-18deg)
   - every left edge leans ~33deg       -> skewX(33deg)
   - cards, backdrop panels and text all sit on this ONE plane, so the
     whole scene is a single transformed layer.
   Children are positioned in "design px" (2x the reference px) and the
   scene is scaled by --s (0.5 on desktop = same size as the reference).
===================================================================== */

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

/* project colours */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down)';
const WARN = 'var(--color-status-warning)';

const CARD =
  'overflow-hidden rounded-[44px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.94),rgba(17,24,35,0.94))] shadow-[0_24px_52px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.06)]';

const PANEL = 'rounded-[28px] border-2 border-white/[0.06]';

/* Last-24-hours strip: 26 checks, 3 of them down (matches the reference) */
const DOWN_BARS = new Set([18, 19, 25]);
const UPTIME_BARS = Array.from({ length: 26 }, (_, i) => !DOWN_BARS.has(i));

const X_LABELS = [
  { left: 106, text: "Apr 20, '23" },
  { left: 210, text: "May 5, '23" },
  { left: 312, text: "May 12, '23" },
  { left: 420, text: "May 18, '23" },
  { left: 526, text: "May 25, '23" },
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

function Check({ on = true }: { on?: boolean }) {
  return (
    <span
      className={`grid size-[18px] shrink-0 place-items-center rounded-[5px] border-2 ${
        on
          ? 'border-transparent bg-[image:var(--background-image-brand-gradient)]'
          : 'border-white/15 bg-white/[0.05]'
      }`}
    >
      {on ? (
        <CheckIcon size={12} strokeWidth={3.5} className="text-white" aria-hidden="true" />
      ) : null}
    </span>
  );
}

/* ---------------------------------------------------------------------
   Card 1: Response time
--------------------------------------------------------------------- */
function ResponseTimeCard() {
  return (
    <Box x={0} y={0} w={578} h={382} className={CARD}>
      {/* header */}
      <Box x={30} y={28} className="flex items-center gap-3 whitespace-nowrap">
        <span className="text-[16px] font-bold text-white">Response time</span>
        <Blur className="text-[13px] text-[#a9b4c4]">ping.example.com</Blur>
      </Box>
      <Box
        x={402}
        y={28}
        w={136}
        className="flex items-center justify-end gap-1.5 whitespace-nowrap text-[13px] text-[#c4cdd9]"
      >
        Last 30 days
        <ChevronDown size={14} aria-hidden="true" />
      </Box>

      {/* y axis */}
      <Box x={14} y={69} w={64} className="text-right text-[11px] leading-[20px] text-[#8a94a6]">
        1,400 ms
      </Box>
      <Box x={14} y={141} w={64} className="text-right text-[11px] leading-[20px] text-[#8a94a6]">
        800 ms
      </Box>
      <Box x={14} y={214} w={64} className="text-right text-[11px] leading-[20px] text-[#8a94a6]">
        10 ms
      </Box>

      {/* blurred series name inside chart */}
      <Box x={330} y={86} className="whitespace-nowrap">
        <Blur className="text-[12px] text-[#a9b4c4]">Ping response time</Blur>
      </Box>

      {/* red incident band */}
      <Box
        x={506}
        y={60}
        w={44}
        h={176}
        className="bg-[linear-gradient(180deg,rgba(239,68,68,0.2),rgba(239,68,68,0.12))]"
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
        {/* grid */}
        <line
          x1="0"
          y1="20"
          x2="462"
          y2="20"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <line x1="0" y1="165" x2="462" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        {/* threshold */}
        <line x1="0" y1="88" x2="462" y2="88" stroke={WARN} strokeWidth="1.5" strokeOpacity="0.6" />

        {/* latency before the spike */}
        <polyline
          stroke={UP}
          strokeWidth="3"
          points="2,162 56,159 72,148 86,145 112,142 136,139 162,143 186,138 212,141 226,150"
        />
        {/* spike */}
        <polyline stroke={DOWN} strokeWidth="3" points="226,150 248,26 270,148" />
        {/* latency after the spike */}
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
          className="text-center text-[10px] leading-[20px] text-[#8a94a6]"
        >
          {text}
        </Box>
      ))}

      {/* average */}
      <Box x={22} y={292} className="text-[#a9b4c4]">
        <Waves size={18} aria-hidden="true" />
      </Box>
      <Box
        x={62}
        y={290}
        className="whitespace-nowrap text-[20px] font-bold leading-[28px] text-white"
      >
        101.66 ms
      </Box>
      <Box x={22} y={324} className="text-[11px] leading-[16px] text-white/80">
        Average
      </Box>

      {/* maximum (own bordered tile) */}
      <Box x={316} y={262} w={226} h={84} className="rounded-[16px] border-2 border-white/[0.07]" />
      <Box
        x={334}
        y={284}
        className="whitespace-nowrap text-[20px] font-bold leading-[28px] text-white"
      >
        1,546.96 ms
      </Box>
      <Box x={334} y={318} className="text-[11px] leading-[16px] text-white/80">
        Maximum
      </Box>
      <Box x={496} y={290} className="text-[var(--color-status-down)]">
        <ArrowUpToLine size={18} aria-hidden="true" />
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Card 2: Last 24 hours
--------------------------------------------------------------------- */
function Last24Card() {
  return (
    <Box x={-52} y={414} w={408} h={132} className={CARD}>
      <Box x={26} y={38} className="text-[16px] leading-[22px] text-white/90">
        Last 24 hours
      </Box>
      <Box x={296} y={28} className="text-[15px] leading-[20px] text-white/70">
        100%
      </Box>

      {UPTIME_BARS.map((up, i) => (
        <span
          key={i}
          className="absolute h-[24px] w-[7px] rounded-full"
          style={{
            left: 26 + i * 13.2,
            top: 76,
            background: up ? UP : DOWN,
          }}
        />
      ))}
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Card 3: Current status
--------------------------------------------------------------------- */
function CurrentStatusCard() {
  return (
    <Box x={-100} y={580} w={408} h={140} className={CARD}>
      <Box x={26} y={33} className="text-[16px] leading-[22px] text-white/90">
        Current status
      </Box>
      <Box x={26} y={78} className="text-[24px] font-extrabold leading-[32px]">
        <span style={{ color: DOWN }}>Down</span>
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Backdrop (dim monitor form + account box), same plane, fades right
--------------------------------------------------------------------- */
function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 hidden h-[1000px] w-[1400px] opacity-[0.65] [mask-image:linear-gradient(90deg,#000_0%,#000_50%,transparent_100%)] lg:block"
    >
      {/* form panel */}
      <Box x={330} y={224} w={1000} h={372} className={`${PANEL} bg-white/[0.03]`} />

      <Box x={372} y={266} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Make sure your server or any device in the network is always available with the ping
        monitoring.
      </Box>

      {/* host field */}
      <Box
        x={360}
        y={348}
        w={940}
        h={44}
        className="rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]"
      >
        <span className="absolute left-3 top-[13px] size-[14px] rounded-[3px] border-2 border-white/20" />
        <span className="absolute left-[70px] top-[11px] whitespace-nowrap text-[11px] text-[#a9b4c4]">
          E.g. 80.70.11.12 or example.com
        </span>
      </Box>

      {/* notifications */}
      <Box x={372} y={392} className="whitespace-nowrap text-[12px] font-bold text-white">
        How we will notify you?
      </Box>

      <Box x={356} y={456} className="flex items-center gap-2 text-[12px] text-white/90">
        <Check />
        E-mail
      </Box>
      <Box x={384} y={478} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        john.doe@example.com
      </Box>
      <Box
        x={384}
        y={498}
        className="flex items-center gap-1.5 whitespace-nowrap text-[10px] text-[#a9b4c4]"
      >
        <Repeat2 size={12} aria-hidden="true" />
        No delay, no repeat
      </Box>

      <Box x={566} y={456} className="flex items-center gap-2 text-[12px] text-white/90">
        <Check />
        SMS message
      </Box>
      <Box x={594} y={478} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        john.doe@example.com
      </Box>
      <Box
        x={594}
        y={498}
        className="flex items-center gap-1.5 whitespace-nowrap text-[10px] text-[#a9b4c4]"
      >
        <Repeat2 size={12} aria-hidden="true" />
        No delay, no repeat
      </Box>

      <Box x={800} y={456} className="flex items-center gap-2 text-[12px] text-[#a9b4c4]">
        <Check on={false} />
        Voice call
      </Box>
      <Box x={828} y={478} className="whitespace-nowrap text-[11px]">
        <span style={{ color: UP }}>Add phone number</span>
      </Box>
      <Box x={828} y={498} className="whitespace-nowrap text-[10px] text-[#a9b4c4]">
        No delay, no repeat
      </Box>

      <Box x={362} y={526} className="whitespace-nowrap text-[10px] text-[#a9b4c4]">
        You can set up notifications for <span style={{ color: UP }}>Integrations &amp; Teams</span>{' '}
        in the specific tab and edit it later.
      </Box>

      {/* monitor interval panel */}
      <Box x={340} y={594} w={1000} h={330} className={`${PANEL} bg-white/[0.035]`} />
      <Box x={360} y={614} className="whitespace-nowrap text-[13px] font-bold text-white">
        Monitor interval
      </Box>
      <Box x={360} y={642} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Your monitor will be checked every 5 minutes. We recommend to use at least 1-minute checks
        available in paid plans.
      </Box>

      {/* slider */}
      <Box x={360} y={676} w={840} h={8} className="rounded-full bg-white/[0.08]" />
      <Box
        x={360}
        y={676}
        w={158}
        h={8}
        className="rounded-full bg-[image:var(--background-image-brand-gradient)]"
      />
      <Box x={506} y={670} w={20} h={20} className="rounded-full bg-[#cfd3dc]" />
      {[
        { x: 367, t: '30 s' },
        { x: 438, t: '1 m' },
        { x: 518, t: '5 m' },
        { x: 640, t: '30 m' },
        { x: 762, t: '1 h' },
      ].map(({ x, t }) => (
        <Box
          key={t}
          x={x - 30}
          y={702}
          w={60}
          className="text-center text-[10px] leading-[18px] text-[#a9b4c4]"
        >
          {t}
        </Box>
      ))}

      <Box x={358} y={756} className="whitespace-nowrap text-[13px] font-bold text-white">
        Add tags
      </Box>
      <Box x={358} y={784} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Optional. Use tags to group monitors, so you are able to easily manage them in lists and
        reports.
      </Box>
      <Box
        x={366}
        y={806}
        w={420}
        h={38}
        className="rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]"
      >
        <span className="absolute left-3 top-[9px] text-[11px] text-[#a9b4c4]">
          Click to add a tag...
        </span>
      </Box>

      {/* account box */}
      <Box x={60} y={524} w={300} h={296} className={`${PANEL} bg-[#111927]/90`}>
        <span className="absolute left-[30px] top-[24px] grid size-[24px] place-items-center rounded-full bg-white/[0.1] text-[9px] font-bold text-white">
          JD
        </span>
        <span className="absolute left-[104px] top-[16px] whitespace-nowrap text-[12px] font-semibold text-white">
          John Doe
        </span>
        <span className="absolute left-[104px] top-[34px] whitespace-nowrap text-[9px] text-[#a9b4c4]">
          Team owner
        </span>

        <span className="absolute left-[30px] top-[84px] text-[9px] text-[#a9b4c4]">
          Your teams
        </span>
        <Blur className="absolute left-[30px] top-[108px] whitespace-nowrap text-[11px] text-[#a9b4c4]">
          Your team
        </Blur>
        <Blur className="absolute left-[30px] top-[140px] whitespace-nowrap text-[11px] text-[#a9b4c4]">
          Team Acme team
        </Blur>
        <span className="absolute left-[36px] top-[204px] grid size-[16px] place-items-center rounded-full bg-white/[0.08] text-[8px] text-white">
          M
        </span>
        <span className="absolute left-[86px] top-[204px] whitespace-nowrap text-[11px] text-[#a9b4c4]">
          Moo team
        </span>
        <span className="absolute left-[24px] top-[236px] grid h-[40px] w-[184px] place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-[12px] font-semibold text-white">
          Upgrade now
        </span>
      </Box>
    </div>
  );
}

export default function PingMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="ping-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        {/* ---------- Left content ---------- */}
        <div className="relative z-10 min-w-0">
          <h1
            id="ping-monitoring-title"
            className="mb-7 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            <span className={GRADIENT_TEXT}>Ping</span> any device or
            <br />
            server
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[480px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Make sure your server or any device in the network is always available with the ping
            monitoring.
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
          aria-label="Example ping monitor response time, uptime and current status"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          {/* ambient glow (shared with the third-party / keyword heroes) */}
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />

          {/* one plane: skewY(-18deg) skewX(33deg), scaled by --s */}
          <div
            aria-hidden="true"
            className="absolute -left-1 top-[110px] z-[1] xl:-left-5 h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.38] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[128px] sm:[--s:0.5] xl:[--s:0.58] min-[1536px]:[--s:0.6]"
          >
            <Backdrop />
            <ResponseTimeCard />
            <Last24Card />
            <CurrentStatusCard />
          </div>
        </div>
      </section>
    </main>
  );
}
