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

/* ---------------- Main card: Response Time ---------------- */
function ResponseTimeCard() {
  return (
    <Box x={0} y={0} w={780} h={860} className={CARD}>
      <Box x={52} y={50} className="text-[32px] font-bold leading-[40px] text-white">
        Response time
      </Box>

      {/* Response time chart graph preview */}
      <Box x={52} y={120} w={676} h={240} className={`${PANEL} bg-white/[0.02] p-6`}>
        <div className="flex justify-between text-xs text-[#a9b4c4]">
          <span>1,600 ms</span>
          <span>Last 30 days</span>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">1,597.43 ms</span>
          <span className="text-xs text-[#a9b4c4]">Maximum</span>
        </div>
        <div className="mt-4 flex items-center gap-6 text-xs text-[#a9b4c4]">
          <span>Apr 11, 23</span>
          <span>May 1, 23</span>
          <span>May 18, 23</span>
          <span>May 25, 23</span>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs text-[var(--color-brand-blue-light)]">
          <span>⚡ 123.12 ms</span>
          <span className="text-[#a9b4c4]">Average</span>
        </div>
      </Box>

      {/* Alert status preview box */}
      <Box x={52} y={400} w={520} h={200} className={`${PANEL} bg-[#111927]/90 p-6`}>
        <div className="flex items-center gap-3">
          <span className="grid size-3 rounded-full bg-[var(--color-status-warning)]" />
          <span className="text-xs font-semibold text-[#a9b4c4]">UPTIMEROBOT</span>
        </div>
        <div className="mt-3 text-lg font-bold text-white">UptimeRobot</div>
        <div className="mt-1 text-sm font-medium text-white/90">Slow response time detected!</div>
        <div className="mt-4 space-y-2 text-xs text-[#a9b4c4]">
          <div className="flex justify-between">
            <span>Team</span>
            <span className="text-white">Team Acme team</span>
          </div>
          <div className="flex justify-between">
            <span>Moo team</span>
            <span className="rounded-full bg-[image:var(--background-image-brand-gradient)] px-3 py-1 font-semibold text-white">
              Upgrade now
            </span>
          </div>
        </div>
      </Box>
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
    </div>
  );
}

export default function ResponseTimeMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="response-time-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        <div className="relative z-10 min-w-0">
          <h1
            id="response-time-title"
            className="mb-7 text-[clamp(2.25rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            Enhance performance
            <br />
            with <span className={GRADIENT_TEXT}>response</span>
            <br />
            <span className={GRADIENT_TEXT}>time</span> monitoring
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Sit back and get live alerts when your website or service responds slower than usual.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        <div
          aria-label="Example monitor with response time performance"
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
            <ResponseTimeCard />
          </div>
        </div>
      </section>
    </main>
  );
}
