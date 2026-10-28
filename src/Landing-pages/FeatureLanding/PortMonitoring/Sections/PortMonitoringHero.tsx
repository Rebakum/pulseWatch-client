import { Check as CheckIcon, ChevronDown, Repeat2, Search, Tag, X } from 'lucide-react';
import type { ReactNode } from 'react';

import ShaderButton from '@/components/shader-button/ShaderButton';

/* =====================================================================
   Same plane as the Ping hero (measured from the reference):
   skewY(-18deg) skewX(33deg), children placed in "design px",
   whole scene scaled by --s.
===================================================================== */

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

/* project colours */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down)';

const CARD =
  'rounded-[56px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.94),rgba(17,24,35,0.94))] shadow-[0_24px_52px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.06)]';

const PANEL = 'rounded-[28px] border-2 border-white/[0.06]';

const CHIP =
  'inline-flex items-center gap-1.5 whitespace-nowrap rounded-[8px] border-2 border-white/[0.08] bg-white/[0.07] px-2.5 text-[13px] font-medium leading-[26px] text-[#c4cdd9]';

type PortRow = {
  name: string;
  port: string;
  state: string;
  down?: boolean;
  tags: string[];
  uptime: string;
  /* indexes of the red (failed) bars in the 30-bar strip */
  failed: number[];
};

const ROWS: PortRow[] = [
  {
    name: 'smtp-relay.company.net',
    port: 'Port 587',
    state: 'Up 22d 3h',
    tags: ['Mail', 'Office365'],
    uptime: '99.983%',
    failed: [18],
  },
  {
    name: 'db-prod-01',
    port: 'Port 5432',
    state: 'Up 6d 14h',
    tags: ['Database', 'PROD'],
    uptime: '99.991%',
    failed: [],
  },
  {
    name: 'cache-redis-01',
    port: 'Port 6379',
    state: 'Down for 18m',
    down: true,
    tags: ['Cache', 'Critical'],
    uptime: '98.340%',
    failed: [9, 27, 28],
  },
];

const ROW_X = [0, -76, -152];
const ROW_Y = [0, 176, 352];

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
   Toolbar above the list: select-all, tag filter, search, Filter button
--------------------------------------------------------------------- */
function Toolbar() {
  const field =
    'rounded-[18px] border-2 border-white/[0.08] bg-[linear-gradient(180deg,rgba(25,34,47,0.9),rgba(17,24,35,0.9))]';
  return (
    <>
      <Box x={-44} y={-120} w={190} h={72} className={`${field} flex items-center gap-4 px-5`}>
        <span className="size-[26px] rounded-[7px] border-2 border-white/20 bg-white/[0.06]" />
        <span className="text-[17px] text-[#c4cdd9]">0 / 3</span>
      </Box>
      <Box x={164} y={-120} w={330} h={72} className={`${field} flex items-center gap-3 px-5`}>
        <Tag size={22} className="text-[#a9b4c4]" aria-hidden="true" />
        <span className="flex-1 text-[17px] text-white/90">All tags</span>
        <ChevronDown size={20} className="text-[#a9b4c4]" aria-hidden="true" />
      </Box>
      <Box x={520} y={-120} w={470} h={72} className={`${field} flex items-center gap-3 px-5`}>
        <Search size={20} className="text-[#a9b4c4]" aria-hidden="true" />
        <span className="text-[17px] text-[#a9b4c4]">Search by name or url</span>
      </Box>
      <Box x={1010} y={-120} w={140} h={72} className={`${field} grid place-items-center`}>
        <span className="text-[17px] font-medium text-white/90">Filter</span>
      </Box>
    </>
  );
}

/* ---------------------------------------------------------------------
   One monitor row
--------------------------------------------------------------------- */
function PortCard({ row, x, y }: { row: PortRow; x: number; y: number }) {
  const dot = row.down ? DOWN : UP;
  return (
    <Box x={x} y={y} w={950} h={132} className={CARD}>
      {/* status dot */}
      <Box x={36} y={46} w={40} h={40} className="rounded-full">
        <span
          className="block size-full rounded-full"
          style={{ background: dot, boxShadow: `0 0 18px ${dot}` }}
        />
      </Box>

      {/* name */}
      <Box
        x={110}
        y={26}
        className="whitespace-nowrap text-[18px] font-semibold leading-[28px] text-white"
      >
        {row.name} <span className="font-medium">(Port {row.port.replace('Port ', '')})</span>
      </Box>

      {/* PORT chip + state */}
      <Box x={110} y={64} className="flex items-center gap-3 whitespace-nowrap">
        <span className="rounded-[8px] border-2 border-white/[0.08] bg-white/[0.07] px-2.5 text-[13px] font-semibold leading-[22px] tracking-wide text-[#a9b4c4]">
          PORT
        </span>
        <span className="text-[16px] leading-[22px]" style={{ color: row.down ? DOWN : '#a9b4c4' }}>
          {row.state}
        </span>
      </Box>

      {/* tags */}
      <Box x={470} y={40} className="flex items-center gap-2.5">
        {row.tags.map((t) => (
          <span key={t} className={CHIP}>
            {t}
            <X size={14} strokeWidth={3} aria-hidden="true" />
          </span>
        ))}
      </Box>

      {/* uptime strip */}
      {Array.from({ length: 30 }, (_, i) => (
        <span
          key={i}
          className="absolute h-[28px] w-[5px] rounded-full"
          style={{
            left: 696 + i * 8,
            top: 30,
            background: row.failed.includes(i) ? DOWN : UP,
          }}
        />
      ))}
      <Box x={796} y={68} w={110} className="text-right text-[15px] leading-[20px] text-white/55">
        {row.uptime}
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Backdrop: dim "new monitor" form + account box (same plane, fades right)
--------------------------------------------------------------------- */
function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 hidden h-[1300px] w-[1500px] opacity-[0.6] [mask-image:linear-gradient(90deg,#000_0%,#000_50%,transparent_100%)] lg:block"
    >
      {/* sidebar labels peeking out between the rows */}
      <Box x={60} y={150} className="text-[13px] text-[#a9b4c4]">
        Incidents
      </Box>
      <Box x={-10} y={330} className="text-[13px] text-[#a9b4c4]">
        Team members
      </Box>

      {/* form panel */}
      <Box x={420} y={-40} w={1060} h={620} className={`${PANEL} bg-white/[0.03]`} />
      <Box x={470} y={0} className="whitespace-nowrap text-[13px] text-[#a9b4c4]">
        Monitor TCP ports, FTP and other services running on specific TCP ports.
      </Box>

      <Box x={470} y={48} className="whitespace-nowrap text-[13px] font-bold text-white">
        Monitor name
      </Box>
      <Box
        x={470}
        y={76}
        w={560}
        h={46}
        className="rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]"
      />

      <Box x={1080} y={48} className="whitespace-nowrap text-[13px] font-bold text-white">
        TCP port
      </Box>
      <Box
        x={1080}
        y={76}
        w={340}
        h={46}
        className="rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]"
      >
        <span className="absolute left-3 top-[12px] text-[12px] text-[#a9b4c4]">e.g. 22</span>
      </Box>

      <Box x={830} y={330} className="whitespace-nowrap text-[14px] font-bold text-white">
        How we will notify you?
      </Box>

      <Box x={830} y={370} className="flex items-center gap-2 text-[13px] text-white/90">
        <Check />
        E-mail
      </Box>
      <Box x={860} y={396} className="whitespace-nowrap text-[12px] text-[#a9b4c4]">
        john.doe@example.com
      </Box>
      <Box
        x={860}
        y={418}
        className="flex items-center gap-1.5 whitespace-nowrap text-[11px] text-[#a9b4c4]"
      >
        <Repeat2 size={12} aria-hidden="true" />
        No delay, no repeat
      </Box>

      <Box x={1140} y={370} className="flex items-center gap-2 text-[13px] text-white/90">
        <Check />
        SMS message
      </Box>
      <Box x={1170} y={396} className="whitespace-nowrap text-[12px] text-[#a9b4c4]">
        john.doe@example.com
      </Box>
      <Box
        x={1170}
        y={418}
        className="flex items-center gap-1.5 whitespace-nowrap text-[11px] text-[#a9b4c4]"
      >
        <Repeat2 size={12} aria-hidden="true" />
        No delay, no repeat
      </Box>

      <Box x={1450} y={370} className="flex items-center gap-2 text-[13px] text-[#a9b4c4]">
        <Check on={false} />
        Voice call
      </Box>
      <Box x={1480} y={396} className="whitespace-nowrap text-[12px]">
        <span style={{ color: UP }}>Add phone number</span>
      </Box>

      <Box x={830} y={460} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        You can set up notifications for <span style={{ color: UP }}>Integrations &amp; Teams</span>{' '}
        in the specific tab and edit it later.
      </Box>

      {/* monitor interval panel */}
      <Box x={450} y={520} w={1060} h={380} className={`${PANEL} bg-white/[0.035]`} />
      <Box x={490} y={548} className="whitespace-nowrap text-[14px] font-bold text-white">
        Monitor interval
      </Box>
      <Box x={490} y={578} className="whitespace-nowrap text-[12px] text-[#a9b4c4]">
        Your monitor will be checked every 5 minutes. We recommend to use at least 1-minute checks
        available in paid plans.
      </Box>

      <Box x={490} y={622} w={900} h={9} className="rounded-full bg-white/[0.08]" />
      <Box
        x={490}
        y={622}
        w={200}
        h={9}
        className="rounded-full bg-[image:var(--background-image-brand-gradient)]"
      />
      <Box x={680} y={616} w={21} h={21} className="rounded-full bg-[#cfd3dc]" />
      {[
        { x: 500, t: '30 s' },
        { x: 590, t: '1 m' },
        { x: 690, t: '5 m' },
        { x: 840, t: '30 m' },
        { x: 1000, t: '1 h' },
      ].map(({ x, t }) => (
        <Box
          key={t}
          x={x - 30}
          y={652}
          w={60}
          className="text-center text-[11px] leading-[18px] text-[#a9b4c4]"
        >
          {t}
        </Box>
      ))}

      <Box
        x={490}
        y={710}
        className="flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-white/90"
      >
        <ChevronDown size={14} className="-rotate-90" aria-hidden="true" />
        Advanced settings
      </Box>
      <Box x={490} y={760} className="whitespace-nowrap text-[13px] font-bold text-white">
        Add tags
      </Box>
      <Box x={490} y={788} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Optional. Use tags to group monitors, so you are able to easily manage them in lists and
        reports.
      </Box>

      {/* account box (below the rows) */}
      <Box x={170} y={560} w={330} h={310} className={`${PANEL} bg-[#111927]/90`}>
        <span className="absolute left-[30px] top-[26px] grid size-[26px] place-items-center rounded-full bg-white/[0.1] text-[10px] font-bold text-white">
          JD
        </span>
        <span className="absolute left-[76px] top-[16px] whitespace-nowrap text-[13px] font-semibold text-white">
          John Doe
        </span>
        <span className="absolute left-[76px] top-[36px] whitespace-nowrap text-[10px] text-[#a9b4c4]">
          Team owner
        </span>
        <span className="absolute left-[30px] top-[86px] text-[10px] text-[#a9b4c4]">
          Your teams
        </span>
        <Blur className="absolute left-[44px] top-[116px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Your team
        </Blur>
        <Blur className="absolute left-[44px] top-[150px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Team Acme team
        </Blur>
        <span className="absolute left-[44px] top-[190px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Moo team
        </span>
        <span className="absolute left-[40px] top-[236px] grid h-[42px] w-[190px] place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-[13px] font-semibold text-white">
          Upgrade now
        </span>
      </Box>
    </div>
  );
}

export default function PortMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="port-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        {/* ---------- Left content ---------- */}
        <div className="relative z-10 min-w-0">
          <h1
            id="port-monitoring-title"
            className="mb-7 text-[clamp(2.25rem,3.9vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            <span className="whitespace-nowrap">Monitor any specific</span>
            <br />
            <span className={GRADIENT_TEXT}>port</span> on your server
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Check that the service behind a port is still accepting connections, not just that the
            server answers a ping. Watch your mail, database, SSH, and FTP ports from 15+ global
            locations.
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
          aria-label="Example port monitors with uptime and status"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />

          {/* one plane: skewY(-18deg) skewX(33deg), scaled by --s */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-[190px] z-[1] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.28] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[190px] sm:[--s:0.38] xl:top-[200px] xl:[--s:0.43] min-[1536px]:[--s:0.48]"
          >
            <Backdrop />
            <Toolbar />
            {ROWS.map((row, i) => (
              <PortCard key={row.name} row={row} x={ROW_X[i]} y={ROW_Y[i]} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
