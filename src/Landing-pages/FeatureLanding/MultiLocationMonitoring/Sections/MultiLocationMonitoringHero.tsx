import { Check as CheckIcon, Repeat2 } from 'lucide-react';
import type { ReactNode } from 'react';

import ShaderButton from '@/components/shader-button/ShaderButton';

/* Same plane as the other heroes: skewY(-18deg) skewX(33deg),
   children in "design px", whole scene scaled by --s. */

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

/* project colours (no green) */
const UP = 'var(--color-brand-blue-light)';
const WARN = 'var(--color-status-warning)';

const CARD =
  'rounded-[56px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_24px_52px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.06)]';
const PANEL = 'rounded-[28px] border-2 border-white/[0.06]';
const FIELD = 'rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]';

/* simplified continent outlines (viewBox 0 0 400 200) */
const CONTINENTS = [
  /* North America */
  'M30 40 L70 28 L110 34 L128 52 L120 74 L104 92 L92 112 L76 104 L58 86 L40 68 Z',
  /* South America */
  'M100 118 L124 114 L138 136 L128 168 L112 186 L102 160 Z',
  /* Europe */
  'M176 44 L214 38 L228 52 L216 68 L190 72 L174 62 Z',
  /* Africa */
  'M184 80 L224 78 L240 108 L226 150 L204 164 L188 130 Z',
  /* Asia */
  'M228 40 L300 30 L352 48 L360 82 L330 106 L296 100 L262 112 L240 90 Z',
  /* Australia */
  'M316 134 L352 132 L360 156 L330 164 Z',
];

const LOCATIONS = [
  { x: 92, y: 98, color: UP },
  { x: 204, y: 56, color: WARN },
  { x: 312, y: 94, color: UP },
];

const REGIONS = ['Atlanta, North America', 'Poland, Europe', 'Bangkok, Thailand'];

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

/* ---------------- Main card: Regions ---------------- */
function RegionsCard() {
  return (
    <Box x={0} y={0} w={780} h={860} className={CARD}>
      <Box x={52} y={50} className="text-[40px] font-bold leading-[50px] text-white">
        Regions
      </Box>

      {/* world map */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 200"
        className="absolute"
        style={{ left: 60, top: 150, width: 660, height: 330 }}
        fill="none"
      >
        {CONTINENTS.map((d) => (
          <path
            key={d}
            d={d}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.1"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.03)"
          />
        ))}
        {LOCATIONS.map((p) => (
          <g key={`${p.x}-${p.y}`}>
            <circle cx={p.x} cy={p.y} r="17" fill={p.color} fillOpacity="0.18" />
            <circle cx={p.x} cy={p.y} r="10" fill={p.color} fillOpacity="0.35" />
            <circle cx={p.x} cy={p.y} r="6" fill={p.color} />
          </g>
        ))}
      </svg>

      {/* region list */}
      {REGIONS.map((r, i) => (
        <Box
          key={r}
          x={110 + i * 24}
          y={540 + i * 96}
          className="whitespace-nowrap text-[32px] font-medium leading-[40px] text-white"
        >
          {r}
        </Box>
      ))}
    </Box>
  );
}

/* ---------------- Backdrop: dim "Add single monitor" form ---------------- */
function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 hidden h-[1500px] w-[2100px] opacity-[0.55] [mask-image:linear-gradient(90deg,#000_0%,#000_55%,transparent_100%)] lg:block"
    >
      <Box x={620} y={-110} w={1450} h={640} className={`${PANEL} bg-white/[0.03]`} />
      <Box x={760} y={-70} className="whitespace-nowrap text-[22px] font-bold text-white/85">
        Add Single monitor.
      </Box>
      <Box x={760} y={-10} className="whitespace-nowrap text-[14px] font-semibold text-white/80">
        HTTP / website monitoring
      </Box>
      <Box x={760} y={16} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Use HTTP(S) monitor to monitor your website, API endpoint or anything running on HTTP.
      </Box>
      <Box x={760} y={70} className="whitespace-nowrap text-[12px] font-semibold text-white/80">
        URL to monitor
      </Box>
      <Box x={760} y={98} w={560} h={44} className={FIELD}>
        <span className="absolute left-3 top-[12px] text-[12px] text-white/80">example.com</span>
      </Box>
      <Box x={1360} y={70} className="whitespace-nowrap text-[13px] font-bold text-white">
        Tags
      </Box>
      <Box x={1360} y={98} w={440} h={44} className={FIELD}>
        <span className="absolute left-3 top-[12px] text-[12px] text-[#a9b4c4]">
          Type to add tag...
        </span>
      </Box>

      <Box x={760} y={200} className="whitespace-nowrap text-[13px] font-bold text-white">
        How we will notify you?
      </Box>
      <Box x={760} y={240} className="flex items-center gap-2 text-[12px] text-white/90">
        <Check />
        E-mail
      </Box>
      <Box x={790} y={266} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        john.doe@example.com
      </Box>
      <Box
        x={790}
        y={288}
        className="flex items-center gap-1.5 whitespace-nowrap text-[10px] text-[#a9b4c4]"
      >
        <Repeat2 size={12} aria-hidden="true" />
        No delay, no repeat
      </Box>
      <Box x={1090} y={240} className="flex items-center gap-2 text-[12px] text-white/90">
        <Check />
        SMS message
      </Box>
      <Box x={1120} y={266} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        +421 915 222 345
      </Box>
      <Box x={1120} y={288} className="whitespace-nowrap text-[10px] text-[#a9b4c4]">
        No delay, no repeat
      </Box>
      <Box x={760} y={332} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        You can set up notifications for <span style={{ color: UP }}>Integrations &amp; Teams</span>{' '}
        in the specific tab and edit it later.
      </Box>

      {/* monitor interval */}
      <Box x={780} y={410} w={1280} h={300} className={`${PANEL} bg-white/[0.035]`} />
      <Box x={820} y={436} className="whitespace-nowrap text-[14px] font-bold text-white">
        Monitor interval
      </Box>
      <Box x={820} y={466} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Your monitor will be checked every 5 minutes. We recommend to use at least 1-minute checks
        available in paid plans.
      </Box>
      <Box x={820} y={510} w={1100} h={9} className="rounded-full bg-white/[0.08]" />
      <Box
        x={820}
        y={510}
        w={440}
        h={9}
        className="rounded-full bg-[image:var(--background-image-brand-gradient)]"
      />
      <Box x={1250} y={504} w={21} h={21} className="rounded-full bg-[#cfd3dc]" />
      {[
        { x: 830, t: '30 s' },
        { x: 960, t: '1 m' },
        { x: 1260, t: '5 m' },
        { x: 1540, t: '30 m' },
        { x: 1840, t: '1 h' },
      ].map(({ x, t }) => (
        <Box
          key={t}
          x={x - 30}
          y={540}
          w={60}
          className="text-center text-[11px] leading-[18px] text-[#a9b4c4]"
        >
          {t}
        </Box>
      ))}

      {/* account box */}
      <Box x={420} y={680} w={420} h={400} className={`${PANEL} bg-[#111927]/90`}>
        <span className="absolute left-[34px] top-[30px] grid size-[30px] place-items-center rounded-full bg-white/[0.1] text-[11px] font-bold text-white">
          JD
        </span>
        <span className="absolute left-[88px] top-[18px] whitespace-nowrap text-[14px] font-semibold text-white">
          John Doe
        </span>
        <span className="absolute left-[88px] top-[40px] whitespace-nowrap text-[11px] text-[#a9b4c4]">
          Team owner
        </span>
        <span className="absolute left-[34px] top-[104px] text-[11px] text-[#a9b4c4]">
          Your teams
        </span>
        <span className="absolute left-[50px] top-[140px] whitespace-nowrap text-[13px] text-[#a9b4c4]">
          Your team
        </span>
        <span className="absolute left-[50px] top-[182px] whitespace-nowrap text-[13px] text-[#a9b4c4]">
          Team Acme team
        </span>
        <span className="absolute left-[50px] top-[226px] whitespace-nowrap text-[13px] text-[#a9b4c4]">
          Moo team
        </span>
        <span className="absolute left-[50px] top-[290px] grid h-[48px] w-[220px] place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-[14px] font-semibold text-white">
          Upgrade now
        </span>
      </Box>
    </div>
  );
}

export default function MultiLocationHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="multi-location-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        <div className="relative z-10 min-w-0">
          <h1
            id="multi-location-title"
            className="mb-7 text-[clamp(2.25rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            <span className={GRADIENT_TEXT}>Multi-location</span>
            <br />
            <span className={GRADIENT_TEXT}>monitoring</span>. One
            <br />
            monitor. Every region
            <br />
            covered
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Assign multiple regions to a single monitor, set region-specific alert thresholds, and
            track every incident on a single unified timeline.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        <div
          aria-label="Example monitor with multiple regions"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute -left-2 top-[190px] z-[1] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.28] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[200px] sm:[--s:0.4] xl:top-[185px] xl:[--s:0.42] min-[1536px]:[--s:0.46]"
          >
            <Backdrop />
            <RegionsCard />
          </div>
        </div>
      </section>
    </main>
  );
}
