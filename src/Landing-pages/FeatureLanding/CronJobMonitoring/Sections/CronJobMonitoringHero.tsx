import { Check as CheckIcon, ChevronDown, Repeat2 } from 'lucide-react';
import type { ReactNode } from 'react';

import ShaderButton from '@/components/shader-button/ShaderButton';

/* Same plane as the Ping / Port heroes: skewY(-18deg) skewX(33deg),
   children in "design px", whole scene scaled by --s. */

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

/* project colours (no green) */
const DOWN = 'var(--color-status-down)';
const UP = 'var(--color-brand-blue-light)';

const CARD =
  'rounded-[56px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.94),rgba(17,24,35,0.94))] shadow-[0_24px_52px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.06)]';
const PANEL = 'rounded-[28px] border-2 border-white/[0.06]';

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

/* ---------------- Card 1: availability summary ---------------- */
const SUMMARY = [
  { label: 'Last 7 days', value: '100%', note: '0 incidents, 0 m down' },
  { label: 'Last 30 days', value: '99.653%', note: '1 incident, 3 m, 7 m down' },
  { label: 'Last 365 days', value: '98.441%', note: '7 incidents, 6 d, 14 h, 20 m down' },
];

function SummaryCard() {
  return (
    <Box x={0} y={0} w={1010} h={180} className={CARD}>
      {SUMMARY.map((s, i) => (
        <div key={s.label}>
          <Box x={34 + i * 330} y={30} className="whitespace-nowrap text-[15px] text-white/80">
            {s.label}
          </Box>
          <Box
            x={34 + i * 330}
            y={62}
            className="whitespace-nowrap text-[26px] font-extrabold leading-[34px]"
          >
            <span className="bg-gradient-to-r from-[#4a9fe0] to-[#85429a] bg-clip-text text-transparent">
              {s.value}
            </span>
          </Box>
          <Box x={34 + i * 330} y={112} className="whitespace-nowrap text-[13px] text-white/75">
            {s.note}
          </Box>
          {i > 0 ? <Box x={i * 330 - 12} y={26} w={2} h={128} className="bg-white/[0.07]" /> : null}
        </div>
      ))}
    </Box>
  );
}

/* ---------------- Card 2: monthly uptime dot grids ---------------- */
const MONTHS = [
  { name: 'May 26', days: 31, bad: [9, 15], pct: '97.849%', note: '2 inc., 14 h, 30 m' },
  { name: 'Apr 26', days: 30, bad: [] as number[], pct: '100%', note: '0 inc., 0 m' },
  { name: 'Mar 26', days: 31, bad: [17], pct: '99.462%', note: '1 inc., 4 h, 0 m' },
  { name: 'Feb 26', days: 28, bad: [3, 4], pct: '98.214%', note: '2 inc., 7 h, 20 m' },
];

function MonthsCard() {
  return (
    <Box x={-70} y={214} w={1040} h={390} className={CARD}>
      {MONTHS.map((m, mi) => (
        <div key={m.name}>
          {Array.from({ length: m.days }, (_, d) => (
            <span
              key={d}
              className="absolute size-[28px] rounded-[8px]"
              style={{
                left: 40 + mi * 250 + (d % 7) * 33,
                top: 40 + Math.floor(d / 7) * 33,
                background: m.bad.includes(d) ? DOWN : UP,
              }}
            />
          ))}
          <Box x={40 + mi * 250} y={226} className="whitespace-nowrap text-[14px] text-white/90">
            {m.name}
          </Box>
          <Box x={40 + mi * 250} y={252} className="whitespace-nowrap text-[15px] font-bold">
            <span className="bg-gradient-to-r from-[#4a9fe0] to-[#85429a] bg-clip-text text-transparent">
              {m.pct}
            </span>
          </Box>
          <Box x={40 + mi * 250} y={282} className="whitespace-nowrap text-[12px] text-white/75">
            {m.note}
          </Box>
        </div>
      ))}
    </Box>
  );
}

/* ---------------- Backdrop: dim "Add single monitor" form ---------------- */
function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 hidden h-[1300px] w-[1600px] opacity-[0.55] [mask-image:linear-gradient(90deg,#000_0%,#000_50%,transparent_100%)] lg:block"
    >
      <Box x={330} y={150} w={1260} h={560} className={`${PANEL} bg-white/[0.03]`} />
      <Box x={600} y={170} className="whitespace-nowrap text-[18px] font-bold text-white/80">
        Add Single monitor.
      </Box>
      <Box x={1180} y={236} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Your jobs arrive on time.
      </Box>

      <Box x={400} y={470} className="whitespace-nowrap text-[13px] font-bold text-white">
        How we will notify you?
      </Box>
      <Box x={400} y={510} className="flex items-center gap-2 text-[12px] text-white/90">
        <Check />
        E-mail
      </Box>
      <Box x={430} y={534} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        john.doe@example.com
      </Box>
      <Box
        x={430}
        y={556}
        className="flex items-center gap-1.5 whitespace-nowrap text-[10px] text-[#a9b4c4]"
      >
        <Repeat2 size={12} aria-hidden="true" />
        No delay, no repeat
      </Box>
      <Box x={730} y={510} className="flex items-center gap-2 text-[12px] text-white/90">
        <Check />
        SMS message
      </Box>
      <Box x={760} y={534} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        +1 555 010 0000
      </Box>
      <Box x={760} y={556} className="whitespace-nowrap text-[10px] text-[#a9b4c4]">
        No delay, no repeat
      </Box>

      <Box x={470} y={640} w={1000} h={380} className={`${PANEL} bg-white/[0.035]`} />
      <Box x={510} y={664} className="whitespace-nowrap text-[13px] font-bold text-white">
        When we should expect your request?
      </Box>
      <Box x={510} y={690} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        We will expect the request from your service every day.
      </Box>
      <Box
        x={510}
        y={730}
        w={70}
        h={42}
        className="rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]"
      >
        <span className="absolute left-3 top-[10px] text-[12px] text-white/80">1</span>
      </Box>
      <Box
        x={600}
        y={730}
        w={300}
        h={42}
        className="flex items-center justify-between rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03] px-3"
      >
        <span className="text-[12px] text-white/80">day</span>
        <ChevronDown size={14} aria-hidden="true" />
      </Box>
      <Box x={510} y={800} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        We will wait max 10 minutes for your request to arrive before we send an alert.
      </Box>
      <Box
        x={510}
        y={830}
        w={70}
        h={42}
        className="rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]"
      >
        <span className="absolute left-3 top-[10px] text-[12px] text-white/80">10</span>
      </Box>
      <Box
        x={600}
        y={830}
        w={300}
        h={42}
        className="flex items-center justify-between rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03] px-3"
      >
        <span className="text-[12px] text-white/80">minutes</span>
        <ChevronDown size={14} aria-hidden="true" />
      </Box>
      <Box x={510} y={920} className="whitespace-nowrap text-[13px] font-bold text-white">
        Add tags
      </Box>

      {/* account box */}
      <Box x={90} y={700} w={340} h={320} className={`${PANEL} bg-[#111927]/90`}>
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
        <span className="absolute left-[44px] top-[116px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Your team
        </span>
        <span className="absolute left-[44px] top-[150px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Team Acme team
        </span>
        <span className="absolute left-[44px] top-[190px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Moo team
        </span>
        <span className="absolute left-[40px] top-[240px] grid h-[42px] w-[190px] place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-[13px] font-semibold text-white">
          Upgrade now
        </span>
      </Box>
    </div>
  );
}

export default function CronMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="cron-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        <div className="relative z-10 min-w-0">
          <h1
            id="cron-monitoring-title"
            className="mb-7 text-[clamp(2.25rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            <span className={GRADIENT_TEXT}>Cron job</span> monitoring
            <br />
            that catches the run
            <br />
            that never happened
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Your scheduled jobs check in with PulseWatch when they finish. If a ping shows up late
            or not at all, you get an alert, so a job that quietly stopped running never slips by.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        <div
          aria-label="Example cron job uptime history"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute -left-6 top-[170px] z-[1] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.28] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[180px] sm:[--s:0.4] xl:top-[190px] xl:[--s:0.44] min-[1536px]:[--s:0.48]"
          >
            <Backdrop />
            <SummaryCard />
            <MonthsCard />
          </div>
        </div>
      </section>
    </main>
  );
}
