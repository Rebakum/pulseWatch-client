import Link from 'next/link';
import type { ReactNode } from 'react';

/* =====================================================================
   IT Alerting Hero Component (Right visual exact to image 7)
===================================================================== */

const CARD =
  'overflow-hidden rounded-[40px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_24px_52px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.06)]';

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

/* ---------------------------------------------------------------------
   Notification Card 1 (Red Down Alert)
--------------------------------------------------------------------- */
function NotificationCardTop() {
  return (
    <Box x={0} y={0} w={560} h={185} className={CARD}>
      <Box x={28} y={26}>
        <span
          className="block size-7 rounded-full bg-red-500"
          style={{ boxShadow: '0 0 0 6px rgba(239, 68, 68, 0.28)' }}
        />
      </Box>
      <Box
        x={76}
        y={30}
        className="text-[16px] font-medium uppercase tracking-[0.04em] text-white/60"
      >
        PulseWatch
      </Box>
      <Box x={440} y={26} w={96} className="text-right text-[16px] text-white/55">
        25 min
      </Box>
      <Box x={28} y={72} className="text-[26px] font-bold text-white">
        PulseWatch
      </Box>
      <Box x={28} y={114} className="text-[20px] text-white/75">
        api.core-backend-v2 is down!
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Notification Card 2 (Resolved Alert)
--------------------------------------------------------------------- */
function NotificationCardBottom() {
  return (
    <Box x={0} y={205} w={560} h={185} className={CARD}>
      <Box x={28} y={26}>
        <span className="block size-7 rounded-full bg-brand-blue-light shadow-[0_0_12px_var(--color-brand-blue-light)]" />
      </Box>
      <Box
        x={76}
        y={30}
        className="text-[16px] font-medium uppercase tracking-[0.04em] text-white/60"
      >
        PulseWatch
      </Box>
      <Box x={440} y={26} w={96} className="text-right text-[16px] text-white/55">
        NOW
      </Box>
      <Box x={28} y={72} className="text-[24px] font-bold text-white">
        PulseWatch
      </Box>
      <Box x={28} y={114} className="text-[18px] text-white/75">
        Resolved incident on api.core-backend-v2
      </Box>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Account Box (Behind the cards)
--------------------------------------------------------------------- */
function AccountBox() {
  return (
    <Box x={60} y={420} w={300} h={280} className={`${PANEL} bg-[#111927]/90 p-5`}>
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-white/10 text-xs font-bold text-white">
          JD
        </span>
        <div>
          <div className="text-sm font-semibold text-white">John Doe</div>
          <div className="text-xs text-[#a9b4c4]">Team owner</div>
        </div>
      </div>
      <div className="mt-6 text-xs text-[#a9b4c4]">Your teams</div>
      <div className="mt-2 space-y-2 text-sm text-white/80">
        <div>Your team</div>
        <div>Team Acme team</div>
      </div>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Monitors Table (Background plane)
--------------------------------------------------------------------- */
function MonitorsTableBackdrop() {
  return (
    <Box x={500} y={-140} w={900} h={580} className={`${PANEL} bg-white/[0.03] p-6`}>
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 text-sm font-semibold text-[#8a94a6]">
        <span>Monitor</span>
        <span>Root cause</span>
        <span>Incidents</span>
      </div>
      <div className="mt-4 space-y-4">
        {[
          { name: 'checkout.myshop.com', cause: 'Internal Server Error', code: '500' },
          { name: 'api.clientwebshop.com', cause: 'Service Unavailable', code: '503' },
          { name: 'mail.companymail.net', cause: 'Degraded performance', code: 'SLOW' },
        ].map((row) => (
          <div key={row.name} className="flex items-center justify-between text-sm text-white/80">
            <span>{row.name}</span>
            <span className="rounded bg-red-500/20 px-2 py-0.5 text-xs text-red-400">
              {row.code} {row.cause}
            </span>
            <span className="text-white/50">1</span>
          </div>
        ))}
      </div>
    </Box>
  );
}

/* ---------------------------------------------------------------------
   Right Scene Composite
--------------------------------------------------------------------- */
function RightAlertingScene() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 h-[700px] w-[1400px] opacity-[0.85] [mask-image:linear-gradient(90deg,#000_0%,#000_50%,transparent_100%)] lg:block"
    >
      <MonitorsTableBackdrop />
      <AccountBox />
      <NotificationCardTop />
      <NotificationCardBottom />
    </div>
  );
}

export default function HostedStatusPageHero() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="status-page-hero-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:py-16 overflow-hidden lg:overflow-visible"
      >
        {/* ---------- Left Content ---------- */}
        <div className="relative z-10 min-w-0">
          <h1
            id="status-page-hero-title"
            className="mb-7 max-w-[560px] text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            Protect your systems with reliable IT alerting{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">software</span>.
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Detect incidents before they impact users or operations. Get instant alerts for outages,
            performance issues, and critical events across your IT infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/register"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3 font-semibold text-white shadow-[0_0_24px_rgba(18,121,193,0.35)] transition-all hover:brightness-110 hover:shadow-[0_0_32px_rgba(18,121,193,0.5)]"
            >
              Start monitoring for free
            </Link>
          </div>
        </div>

        {/* ---------- Right Visual (3D Skewed Alerting Visual) ---------- */}
        <div
          aria-label="IT alerting software preview visual"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 50% at 55% 45%, rgba(74,159,224,0.18), rgba(104,48,143,0.04) 55%, transparent 75%)',
            }}
          />

          {/* Skewed Perspective Container */}
          <div
            aria-hidden="true"
            className="absolute left-2 top-[140px] z-[1] xl:-left-2 h-0 w-0 origin-top-left text-[#e5e7eb] [--s:0.32] [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)] sm:top-[160px] sm:[--s:0.42] xl:[--s:0.48] min-[1536px]:[--s:0.52]"
          >
            <RightAlertingScene />
          </div>
        </div>
      </section>
    </main>
  );
}
