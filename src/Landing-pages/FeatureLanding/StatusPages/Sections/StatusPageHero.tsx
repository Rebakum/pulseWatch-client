import type { ReactNode } from 'react';
import Link from 'next/link';

/* =====================================================================
   Hosted Status Page Hero Component
   - Matches the reference design with 3D/skewed isometric dashboard preview
===================================================================== */

const CARD =
  'overflow-hidden rounded-[32px] border-2 border-white/[0.09] bg-[linear-gradient(180deg,rgba(25,34,47,0.96),rgba(17,24,35,0.96))] shadow-[0_24px_52px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.06)]';

const SERVICES = [
  { name: 'API', uptime: '100.00%' },
  { name: 'Blog', uptime: '100.00%' },
  { name: 'Heartbeat app', uptime: '99.998%' },
  { name: 'Monitoring Engine', uptime: '96.871%', hasDegraded: true },
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

function StatusBars({
  count = 28,
  hasDegraded = false,
}: {
  count?: number;
  hasDegraded?: boolean;
}) {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: count }).map((_, i) => {
        const isProblem = hasDegraded && (i === 18 || i === 19);
        const bg = isProblem ? '#ef4444' : 'var(--color-brand-blue-light, #4a9fe0)';
        return (
          <span
            key={i}
            className="block h-[18px] w-[6px] rounded-[2px]"
            style={{
              backgroundColor: bg,
              opacity: isProblem ? 1 : 0.85,
            }}
          />
        );
      })}
    </div>
  );
}

function StatusDashboardPreview() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-0 h-[700px] w-[1400px] opacity-[0.85] [mask-image:linear-gradient(90deg,#000_0%,#000_50%,transparent_100%)] lg:block"
    >
      {/* Main Status Panel */}
      <Box x={100} y={120} w={920} h={480} className={`${CARD} bg-[#111927]/95 p-8`}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
          <div className="flex items-center gap-3">
            <span className="text-[18px] font-bold text-white">UptimeRobot</span>
          </div>
          <span className="text-[14px] text-white/50">Service status</span>
        </div>

        {/* Subtitle / Uptime timeframe */}
        <div className="mt-5 text-[14px] text-white/60">Uptime · Last 90 days</div>

        {/* Group Header */}
        <div className="mt-4 text-[13px] font-semibold uppercase tracking-wider text-white/40">
          Group 1
        </div>

        {/* Service Rows */}
        <div className="mt-3 space-y-3">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
            >
              <div className="flex items-center gap-2 text-[15px] font-medium text-white/85">
                {service.name} <span className="text-white/40">↗</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[14px] font-semibold text-white/90">{service.uptime}</span>
                <StatusBars hasDegraded={service.hasDegraded} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Metrics */}
        <div className="mt-8 grid grid-cols-4 gap-4 border-t border-white/[0.06] pt-6 text-center">
          <div>
            <div className="text-[16px] font-bold text-white">100.000%</div>
            <div className="text-[12px] text-white/50">Last 24 hours</div>
          </div>
          <div>
            <div className="text-[16px] font-bold text-white">100.000%</div>
            <div className="text-[12px] text-white/50">Last 7 days</div>
          </div>
          <div>
            <div className="text-[16px] font-bold text-white">100.000%</div>
            <div className="text-[12px] text-white/50">Last 30 days</div>
          </div>
          <div>
            <div className="text-[16px] font-bold text-white">99.374%</div>
            <div className="text-[12px] text-white/50">Last 90 days</div>
          </div>
        </div>
      </Box>

      {/* Floating Top Pill Badge: All systems operational */}
      <Box
        x={60}
        y={60}
        w={420}
        h={72}
        className={`${CARD} flex items-center gap-3 px-6 shadow-2xl`}
      >
        <span className="size-3.5 rounded-full bg-brand-blue-light shadow-[0_0_12px_var(--color-brand-blue-light)]" />
        <span className="text-[17px] font-semibold text-white">
          All systems <span className="text-brand-blue-light">operational</span>
        </span>
      </Box>
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
            Earn trust through transparency with a hosted{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              status page
            </span>
            .
          </h1>

          <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Create a single place to check what&apos;s happening during maintenance or incidents. Share
            clear updates and automated email notifications with those who depend on you.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/register"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3 font-semibold text-white shadow-[0_0_24px_rgba(18,121,193,0.35)] transition-all hover:brightness-110 hover:shadow-[0_0_32px_rgba(18,121,193,0.5)]"
            >
              Get a free status page
            </Link>

            {/* Secondary Outline Button */}
            <Link
              href="/demo"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/[0.12] bg-white/[0.03] px-7 py-3 font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.06]"
            >
              Check live demo
            </Link>
          </div>
        </div>

        {/* ---------- Right Visual (3D Skewed Dashboard) ---------- */}
        <div
          aria-label="Hosted status page preview dashboard"
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
            <StatusDashboardPreview />
          </div>
        </div>
      </section>
    </main>
  );
}
