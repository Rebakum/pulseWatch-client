import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

/** 90 tiny uptime bars. `red` = indexes shown as downtime. */
function UptimeBars({ red = [] as number[], dim = false }) {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 90 }).map((_, i) => (
        <span
          key={i}
          className={`h-3.5 w-[2.5px] rounded-[1px] ${
            red.includes(i)
              ? 'bg-status-down'
              : dim
                ? 'bg-[var(--color-brand-blue)]/40'
                : 'bg-[var(--color-brand-blue)]'
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
    <div className="relative isolate mx-auto w-full max-w-[620px] pb-10 [perspective:1200px]">
      {/* Background glow behind tilted panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] z-0 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue)]/10 blur-3xl"
      />

      {/* Tilted 3D Mockup Container */}
      <div
        className="relative z-10 origin-center transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: 'rotateX(48deg) rotateZ(-16deg) skewX(4deg) scale(0.92)' }}
      >
        {/* Main Mockup Card */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--foreground)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-blue)]" />
              PulseWatch
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-semibold text-[var(--muted)]">Service status</span>
              <span className="h-4 w-7 rounded bg-[var(--border)]" />
              <span className="h-4 w-8 rounded bg-brand-gradient shadow-[0_0_12px_color-mix(in_srgb,var(--color-brand-purple)_70%,transparent)]" />
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <span className="text-[9px] font-medium text-brand-blue-light">▢ Calendar view</span>
          </div>

          {/* Floating "All systems operational" banner */}
          <div
            className="-ml-6 mt-1 flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 shadow-xl"
            style={{ transform: 'translateZ(30px)' }}
          >
            <span className="h-3 w-3 rounded-full bg-[var(--color-brand-blue)]" />
            <p className="text-sm font-bold text-[var(--foreground)]">
              All systems <span className="text-[var(--color-brand-blue)]">operational</span>
            </p>
          </div>

          {/* Uptime metrics card */}
          <div className="mt-3.5 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
            <p className="text-[11px] font-semibold text-[var(--foreground)]">
              Uptime <span className="font-normal text-[var(--muted)]">Last 90 days</span>
            </p>
            <p className="mt-3 text-[9px] font-semibold text-[var(--muted)]">Group 1</p>

            <div className="mt-2 space-y-2.5">
              {statusRows.map((row, i) => (
                <div key={row.name} className="flex items-center gap-2.5">
                  <span className="w-20 text-[9px] font-medium text-[var(--muted)] truncate">
                    {row.name}
                  </span>
                  <span className="w-10 text-[8px] text-[var(--color-brand-blue)]">
                    {row.uptime}
                  </span>
                  <UptimeBars red={row.red} dim={i > 2} />
                  <span className="ml-auto flex items-center gap-1 text-[8px] text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                    Up
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fade overlay gradient for 3D blending */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-1/4 bottom-0 z-10 h-1/2 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent"
      />
    </div>
  );
}

export default function StatusPagesSection() {
  return (
    <section className="overflow-hidden bg-[var(--background)] py-16 text-[var(--foreground)]">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Copy */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Build trust with
            <br />
            public status pages<span className="text-[var(--color-brand-blue)]">.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Be transparent. Share your uptime with the public and inform your customers about any
            planned (or unplanned) outages.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ShaderButton
              href="/status/demo"
              className="!inline-flex !items-center !gap-2 !rounded-full"
            >
              Check LIVE demo
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ShaderButton>

            <Link href="/status-pages" className="outline-btn">
              Explore Status Pages
            </Link>
          </div>
        </div>

        {/* Right 3D Mockup */}
        <StatusPageMockup />
      </Container>
    </section>
  );
}
