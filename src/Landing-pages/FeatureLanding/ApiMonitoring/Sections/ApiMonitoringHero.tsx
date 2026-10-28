import { Check as CheckIcon, ChevronDown, Play } from 'lucide-react';
import type { ReactNode } from 'react';

import ShaderButton from '@/components/shader-button/ShaderButton';

/* Same plane as the Ping / Port / Cron heroes:
   skewY(-18deg) skewX(33deg), children in "design px", scaled by --s. */

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

const UP = 'var(--color-brand-blue-light)';

const CARD =
  'rounded-[56px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.95),rgba(17,24,35,0.95))] shadow-[0_24px_52px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.06)]';
const PANEL = 'rounded-[28px] border-2 border-white/[0.06]';
const FIELD = 'rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03]';

const ASSERTIONS = [
  { key: 'statusCode', op: 'equals', value: '200' },
  { key: '$.data.system_status', op: 'equals', value: 'operational' },
  { key: '$.data.payment_gateway', op: 'equals', value: 'connected' },
];

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

/* ---------------- Main card: the API monitor ---------------- */
function MonitorCard() {
  return (
    <Box x={0} y={0} w={1150} h={560} className={CARD}>
      {/* status badge */}
      <Box
        x={44}
        y={52}
        w={92}
        h={92}
        className="rounded-full border-[3px] border-white/10 bg-white/[0.04]"
      >
        <span className="absolute inset-[14px] grid place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-white">
          <Play size={22} fill="currentColor" aria-hidden="true" />
        </span>
      </Box>

      <Box
        x={170}
        y={48}
        className="whitespace-nowrap text-[34px] font-bold leading-[44px] text-white"
      >
        Monitor on Checkout Service API
      </Box>
      <Box x={170} y={96} className="whitespace-nowrap text-[17px] leading-[24px] text-[#a9b4c4]">
        API monitor for{' '}
        <span style={{ color: UP }}>https://api.mystore.com/v1/checkout/health</span>
      </Box>
      <Box x={170} y={134} className="flex items-center gap-3 whitespace-nowrap">
        {['Production', 'Critical'].map((t) => (
          <span
            key={t}
            className="rounded-[8px] border-2 border-white/[0.08] bg-white/[0.07] px-3 text-[14px] leading-[28px] text-[#c4cdd9]"
          >
            {t}
          </span>
        ))}
      </Box>

      {/* assertions panel */}
      <Box x={70} y={216} w={1010} h={290} className={`${PANEL} bg-black/[0.22]`}>
        <Box x={36} y={26} className="whitespace-nowrap text-[22px] font-bold text-white">
          Assertions.
        </Box>
        <Box x={36} y={64} className="whitespace-nowrap text-[14px] text-[#a9b4c4]">
          Monitor is up if all assertions pass
        </Box>
        {ASSERTIONS.map((a, i) => (
          <Box
            key={a.key}
            x={36}
            y={116 + i * 54}
            className="flex items-center gap-4 whitespace-nowrap"
          >
            <span
              className="grid size-[28px] place-items-center rounded-full border-2"
              style={{ borderColor: UP, color: UP }}
            >
              <CheckIcon size={15} strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-[17px] font-medium text-white">{a.key}</span>
            <span className="text-[15px] text-[#a9b4c4]">{a.op}</span>
            <span className="text-[17px] text-white">{a.value}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* ---------------- Backdrop: dim request form + account box ---------------- */
function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 hidden h-[1500px] w-[1900px] opacity-[0.55] [mask-image:linear-gradient(90deg,#000_0%,#000_55%,transparent_100%)] lg:block"
    >
      <Box x={300} y={-70} w={1500} h={460} className={`${PANEL} bg-white/[0.03]`} />
      <Box x={720} y={0} className="whitespace-nowrap text-[14px] font-bold text-white/80">
        Auto Single monitor.
      </Box>
      <Box x={1230} y={120} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        with JSON assertions
      </Box>
      <Box x={1520} y={250} className="whitespace-nowrap text-[13px] font-bold text-white">
        Tags
      </Box>
      <Box x={1520} y={278} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Type to add tag...
      </Box>

      <Box x={900} y={470} w={900} h={620} className={`${PANEL} bg-white/[0.035]`} />
      <Box
        x={940}
        y={500}
        className="flex items-center gap-2 whitespace-nowrap text-[13px] font-bold text-white"
      >
        <ChevronDown size={14} aria-hidden="true" />
        Request details
      </Box>
      <Box x={940} y={546} className="whitespace-nowrap text-[12px] font-semibold text-white/80">
        Auth. type
      </Box>
      <Box
        x={940}
        y={574}
        w={460}
        h={42}
        className={`${FIELD} flex items-center justify-between px-3`}
      >
        <span className="text-[12px] text-white/80">None</span>
        <ChevronDown size={14} aria-hidden="true" />
      </Box>
      <Box x={940} y={650} className="whitespace-nowrap text-[12px] font-semibold text-white/80">
        Request headers
      </Box>
      <Box x={940} y={678} w={460} h={42} className={FIELD}>
        <span className="absolute left-3 top-[11px] text-[12px] text-[#a9b4c4]">XXXXXXXX</span>
      </Box>
      <Box x={940} y={754} className="whitespace-nowrap text-[12px] font-semibold text-white/80">
        Request body
      </Box>
      <Box x={940} y={782} w={460} h={120} className={FIELD}>
        <span className="absolute left-3 top-[12px] text-[12px] text-[#a9b4c4]">key: value</span>
      </Box>

      {/* account box */}
      <Box x={260} y={640} w={360} h={340} className={`${PANEL} bg-[#111927]/90`}>
        <span className="absolute left-[30px] top-[26px] grid size-[28px] place-items-center rounded-full bg-white/[0.1] text-[10px] font-bold text-white">
          JD
        </span>
        <span className="absolute left-[80px] top-[16px] whitespace-nowrap text-[13px] font-semibold text-white">
          John Doe
        </span>
        <span className="absolute left-[80px] top-[36px] whitespace-nowrap text-[10px] text-[#a9b4c4]">
          Team owner
        </span>
        <span className="absolute left-[30px] top-[90px] text-[10px] text-[#a9b4c4]">
          Your teams
        </span>
        <span className="absolute left-[44px] top-[122px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Your team
        </span>
        <span className="absolute left-[44px] top-[158px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Team Acme team
        </span>
        <span className="absolute left-[44px] top-[198px] whitespace-nowrap text-[12px] text-[#a9b4c4]">
          Moo team
        </span>
        <span className="absolute left-[44px] top-[252px] grid h-[44px] w-[200px] place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-[13px] font-semibold text-white">
          Upgrade now
        </span>
      </Box>
    </div>
  );
}

export default function ApiMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="api-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        <div className="relative z-10 min-w-0">
          <h1
            id="api-monitoring-title"
            className="mb-7 text-[clamp(2.25rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            Ensure API reliability
            <br />
            with proactive
            <br />
            <span className={GRADIENT_TEXT}>API monitoring</span>
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Stay one step ahead with instant alerts on API downtime or slow responses.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        <div
          aria-label="Example API monitor with assertions"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute -left-4 top-[210px] z-[1] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.26] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[220px] sm:[--s:0.4] xl:top-[225px] xl:[--s:0.5] min-[1536px]:[--s:0.54]"
          >
            <Backdrop />
            <MonitorCard />
          </div>
        </div>
      </section>
    </main>
  );
}
