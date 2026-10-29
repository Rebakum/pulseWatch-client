import ShaderButton from '@/components/shader-button/ShaderButton';
import { Check as CheckIcon, Repeat2, ShieldAlert, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

const UP = 'var(--color-brand-blue-light)';
const WARN = 'var(--color-status-warning)';

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

function DomainCertCard() {
  return (
    <Box x={-20} y={0} w={780} h={520} className={CARD}>
      <Box x={52} y={40} className="text-[36px] font-bold leading-[46px] text-white">
        Domain &amp; SSL cert.
      </Box>

      {/* Domain Expiring Warning Item */}
      <Box x={52} y={120} w={676} h={105} className={`${PANEL} bg-white/[0.02] px-6 py-4`}>
        <div className="text-xs text-[#a9b4c4]">Domain exp. in 14 days</div>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-2xl font-bold text-white">12/07/2026</span>
          <ShieldAlert size={26} style={{ color: WARN }} aria-hidden="true" />
        </div>
      </Box>

      {/* Valid SSL Item */}
      <Box x={52} y={235} w={676} h={105} className={`${PANEL} bg-white/[0.02] px-6 py-4`}>
        <div className="text-xs text-[#a9b4c4]">SSL exp. valid until</div>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-2xl font-bold text-white">12/07/2027</span>
          <ShieldCheck size={26} style={{ color: UP }} aria-hidden="true" />
        </div>
      </Box>
    </Box>
  );
}

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
        PulseWatch domain monitoring
      </Box>
      <Box x={760} y={16} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Use PulseWatch domain monitor to track expiration and status.
      </Box>
      <Box x={760} y={70} className="whitespace-nowrap text-[12px] font-semibold text-white/80">
        Domain URL to monitor
      </Box>
      <Box x={760} y={98} w={560} h={44} className={FIELD}>
        <span className="absolute left-3 top-[12px] text-[12px] text-white/80">
          https://example.com
        </span>
      </Box>
      <Box x={1360} y={70} className="whitespace-nowrap text-[13px] font-bold text-white">
        Tags
      </Box>
      <Box x={1360} y={98} w={440} h={44} className={FIELD}>
        <span className="absolute left-3 top-[12px] text-[12px] text-[#a9b4c4]">
          domain, production
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

      <Box x={780} y={410} w={1280} h={300} className={`${PANEL} bg-white/[0.035]`} />
      <Box x={820} y={436} className="whitespace-nowrap text-[14px] font-bold text-white">
        Monitor interval
      </Box>
      <Box x={820} y={466} className="whitespace-nowrap text-[11px] text-[#a9b4c4]">
        Your domain monitor will be checked daily for expiration warnings.
      </Box>
      <Box x={820} y={510} w={1100} h={9} className="rounded-full bg-white/[0.08]" />
      <Box
        x={820}
        y={510}
        w={440}
        h={9}
        className="rounded-full bg-[image:var(--background-image-brand-gradient)]"
      />

      {/* Team box */}
      <Box x={370} y={420} w={420} h={400} className={`${PANEL} bg-[#111927]/95 text-white`}>
        <span className="absolute left-[34px] top-[30px] grid size-[30px] place-items-center rounded-full bg-white/[0.1] text-[11px] font-bold text-white">
          PW
        </span>
        <span className="absolute left-[88px] top-[18px] whitespace-nowrap text-[14px] font-semibold text-white">
          PulseWatch Team
        </span>
        <span className="absolute left-[88px] top-[40px] whitespace-nowrap text-[11px] text-[#a9b4c4]">
          Owner
        </span>
        <span className="absolute left-[34px] top-[104px] text-[11px] text-[#a9b4c4]">
          Your teams
        </span>
        <span className="absolute left-[50px] top-[140px] whitespace-nowrap text-[13px] text-[#a9b4c4]">
          PulseWatch workspace
        </span>
        <span className="absolute left-[50px] top-[290px] grid h-[48px] w-[220px] place-items-center rounded-full bg-[image:var(--background-image-brand-gradient)] text-[14px] font-semibold text-white">
          Upgrade now
        </span>
      </Box>
    </div>
  );
}

export default function DomainMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="domain-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        <div className="relative z-10 min-w-0">
          <h1
            id="domain-monitoring-title"
            className="mb-7 text-[clamp(2.25rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            Don&apos;t let your{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent"> domains</span>
            <br />
            slip away
            <span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Keep your online presence secure and avoid any potential damage by monitoring your
            domain&apos;s expiration date.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        <div
          aria-label="Example monitor with domain and SSL status"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute -left-12 top-[190px] z-[1] h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.28] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[200px] sm:[--s:0.4] xl:top-[185px] xl:[--s:0.42] min-[1536px]:[--s:0.46]"
          >
            <Backdrop />
            <DomainCertCard />
          </div>
        </div>
      </section>
    </main>
  );
}
