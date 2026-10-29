import ShaderButton from '@/components/shader-button/ShaderButton';
import { Check as CheckIcon, Repeat2, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

const UP = 'var(--color-brand-blue-light)';

const CARD =
  'rounded-[56px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_24px_52px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.06)] text-white';
const PANEL = 'rounded-[28px] border-2 border-white/[0.06] text-white';
const FIELD = 'rounded-[10px] border-2 border-white/[0.08] bg-white/[0.03] text-white';

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

/* Right side-er dynamic DNS Incident & Resolution Cards */
function DNSMonitoringCards() {
  return (
    <div className="relative w-[780px] h-[580px]">
      {/* Root cause card */}
      <Box x={-40} y={0} w={620} h={110} className={`${CARD} p-5`}>
        <div className="text-[11px] text-[#a9b4c4] uppercase tracking-wider font-semibold">
          Root cause
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="rounded-lg bg-[var(--color-brand-purple)]/30 border border-[var(--color-brand-purple)]/50 px-2 py-0.5 text-[11px] font-bold text-white">
            DNS
          </span>
          <span className="text-xl font-bold text-white">DNS resolving problem</span>
        </div>
      </Box>

      {/* Resolution status card */}
      <Box x={-20} y={130} w={660} h={190} className={`${CARD} p-6`}>
        <div className="text-[11px] text-[#a9b4c4] uppercase tracking-wider font-semibold">
          Status
        </div>
        <div className="mt-1 flex items-center gap-2">
          <ShieldCheck size={22} style={{ color: UP }} aria-hidden="true" />
          <span className="text-xl font-bold text-white">Resolved</span>
        </div>
        <div className="mt-1 text-[11px] text-[#a9b4c4]">
          Started at Dec 12, 2025, 11:20 AM GMT+1
        </div>

        <div className="mt-4 border-t border-white/10 pt-3">
          <div className="text-[11px] text-[#a9b4c4] uppercase tracking-wider font-semibold">
            Duration
          </div>
          <div className="text-lg font-bold text-white">14 m, 30 sec</div>
          <div className="text-[11px] text-[#a9b4c4]">Resolved at Dec 12, 2025, 11:34 AM GMT+1</div>
        </div>
      </Box>

      {/* Team Box */}
      <Box x={200} y={340} w={420} h={240} className={`${PANEL} bg-[#111927]/95 p-5 text-white`}>
        <div className="flex items-center gap-3">
          <span className="grid size-[32px] place-items-center rounded-lg bg-white/[0.1] text-[12px] font-bold text-white">
            PW
          </span>
          <div>
            <div className="text-[14px] font-semibold text-white">Your team</div>
            <div className="text-[11px] text-[#a9b4c4]">Team Acme team</div>
          </div>
        </div>
        <div className="mt-3 text-[12px] text-[#a9b4c4]">Moo team</div>
        <div className="mt-6 flex justify-center">
          <span className="grid h-[42px] w-[200px] place-items-center rounded-lg bg-[image:var(--background-image-brand-gradient)] text-[13px] font-semibold text-white cursor-pointer">
            Upgrade now
          </span>
        </div>
      </Box>
    </div>
  );
}

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute -left-30 top-0 hidden h-[1500px] w-[2100px] opacity-[0.55] [mask-image:linear-gradient(90deg,#000_0%,#000_55%,transparent_100%)] lg:block"
    >
      <Box x={620} y={-110} w={1450} h={640} className={`${PANEL} bg-white/[0.03]`} />
      <Box x={760} y={-70} className="whitespace-nowrap text-[22px] font-bold text-white/85">
        Add Single monitor.
      </Box>
      <Box x={760} y={-10} className="whitespace-nowrap text-[14px] font-semibold text-white/80">
        DNS monitoring
      </Box>
      <Box x={760} y={16} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Monitor DNS record lookup and resolution changes for your domain.
      </Box>
      <Box x={760} y={70} className="whitespace-nowrap text-[12px] font-semibold text-white/80">
        Domain to monitor
      </Box>
      <Box x={760} y={98} w={560} h={44} className={FIELD}>
        <span className="absolute left-3 top-[12px] text-[12px] text-white/80">example.com</span>
      </Box>
      <Box x={1360} y={70} className="whitespace-nowrap text-[13px] font-bold text-white">
        DNS Record type
      </Box>
      <Box x={1360} y={98} w={440} h={44} className={FIELD}>
        <span className="absolute left-3 top-[12px] text-[12px] text-[#a9b4c4]">
          A / AAAA / MX / CNAME
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
        support@pulsewatch.io
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
    </div>
  );
}

export default function AutomatedDNSMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="dns-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        {/* Left Side Content */}
        <div className="relative z-10 min-w-0">
          <h1
            id="dns-monitoring-title"
            className="mb-7 text-[clamp(2.25rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            Protect your website
            <br />
            with automated DNS
            <br />
            monitoring
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Detect DNS issues before they impact your users. Get instant alerts for DNS record
            changes and outages with our advanced monitoring service.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        {/* Right Side Visual Area */}
        <div
          aria-label="DNS Monitoring Preview"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute left-5 top-[190px] z-[1] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.28] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[200px] sm:[--s:0.4] xl:top-[185px] xl:[--s:0.42] min-[1536px]:[--s:0.46]"
          >
            <Backdrop />
            <DNSMonitoringCards />
          </div>
        </div>
      </section>
    </main>
  );
}
