import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

/* All colors come from globals.css tokens:
   --background / --surface / --border / --foreground / --muted
   brand-blue, brand-blue-light, status-up, status-down */

/** 90 tiny uptime bars. `red` = indexes shown as downtime. */
function UptimeBars({ red = [] as number[], dim = false }) {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 90 }).map((_, i) => (
        <span
          key={i}
          className={`h-4 w-[3px] rounded-[1px] ${
            red.includes(i) ? 'bg-status-down' : dim ? 'bg-status-up/50' : 'bg-status-up'
          }`}
        />
      ))}
    </div>
  );
}

const statusRows = [
  { name: 'API', uptime: '100.00%', red: [] as number[] },
  { name: 'Blog', uptime: '100.00%', red: [] as number[] },
  { name: 'Heartbeat app', uptime: '99.998%', red: [62] },
  { name: 'Monitoring Engine', uptime: '99.871%', red: [] as number[] },
];

function StatusPageMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[640px] [perspective:1400px]"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, #000 45%, transparent 92%)',
        maskImage: 'linear-gradient(to bottom, #000 45%, transparent 92%)',
      }}
    >
      <div
        className="relative origin-center [transform-style:preserve-3d]"
        style={{ transform: 'rotateX(52deg) rotateZ(-18deg) skewX(6deg)' }}
      >
        {/* back panel */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl shadow-black/20 dark:shadow-black/50">
          {/* header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--foreground)]">
              <span className="h-3 w-3 rounded-full bg-status-up" />
              PulseWatch
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-[var(--foreground)]">
                Service status
              </span>
              <span className="h-5 w-8 rounded bg-[var(--border)]" />
              <span className="h-5 w-9 rounded bg-brand-blue shadow-[0_0_14px_color-mix(in_srgb,var(--color-brand-blue)_80%,transparent)]" />
            </div>
          </div>

          <div className="mt-3 flex justify-end">
            <span className="text-[9px] text-brand-blue-light">▢ Calendar view</span>
          </div>

          {/* "All systems operational" floating card */}
          <div
            className="-ml-10 mt-1 flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 shadow-xl shadow-black/20 dark:shadow-black/50"
            style={{ transform: 'translateZ(40px)' }}
          >
            <span className="h-4 w-4 rounded-full bg-status-up" />
            <p className="text-base font-bold text-[var(--foreground)]">
              All systems <span className="text-status-up">operational</span>
            </p>
          </div>

          {/* uptime card */}
          <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
            <p className="text-xs font-semibold text-[var(--foreground)]">
              Uptime <span className="font-normal text-[var(--muted)]">Last 90 days</span>
            </p>
            <p className="mt-4 text-[9px] font-semibold text-[var(--muted)]">Group 1</p>

            <div className="mt-2 space-y-3">
              {statusRows.map((row, i) => (
                <div key={row.name} className="flex items-center gap-3">
                  <span className="w-[88px] text-[9px] text-[var(--muted)]">{row.name}</span>
                  <span className="w-12 text-[8px] text-status-up">{row.uptime}</span>
                  <UptimeBars red={row.red} dim={i > 2} />
                  <span className="ml-auto flex items-center gap-1 text-[8px] text-[var(--foreground)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-status-up" />
                    Up
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* second (faded) group */}
          <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
            <div className="space-y-3">
              {[0, 1].map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <span className="w-[88px] text-[9px] text-[var(--muted)]">Service {r + 1}</span>
                  <span className="w-12 text-[8px] text-status-up/70">100.00%</span>
                  <UptimeBars dim />
                  <span className="ml-auto flex items-center gap-1 text-[8px] text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-status-up/70" />
                    Up
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section — "Build trust with public status pages." ---------- */

export default function StatusPagesSection() {
  return (
    <section className="overflow-hidden bg-[var(--background)] py-24 text-[var(--foreground)]">
      <div className="mx-auto grid max-w-[1366px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        {/* left copy */}
        <div>
          <h2 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--foreground)] md:text-5xl">
            Build trust with
            <br />
            public status pages.
          </h2>

          <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-[var(--muted)]">
            Be transparent. Share your uptime with the public and inform your customers about any
            planned (or unplanned) outages.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* globals.css .outline-btn (brand-blue hairline pill) */}
            <Link href="/status/demo" className="outline-btn">
              Check LIVE demo
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/status-pages"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-[15px] font-medium text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-blue/10"
            >
              Explore Status Pages
            </Link>
          </div>
        </div>

        {/* right mockup */}
        <StatusPageMockup />
      </div>
    </section>
  );
}
