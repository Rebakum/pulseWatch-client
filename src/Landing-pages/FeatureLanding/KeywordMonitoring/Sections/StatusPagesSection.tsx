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
            red.includes(i) ? 'bg-rose-500' : dim ? 'bg-emerald-500/40' : 'bg-emerald-500'
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
        className="pointer-events-none absolute left-1/2 top-[40%] z-0 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      {/* Tilted 3D Mockup Container */}
      <div
        className="relative z-10 origin-center transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: 'rotateX(48deg) rotateZ(-16deg) skewX(4deg) scale(0.92)' }}
      >
        {/* Main Mockup Card */}
        <div className="rounded-2xl border border-white/10 bg-[#0c1421] p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              UptimeRobot
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-semibold text-slate-300">Service status</span>
              <span className="h-4 w-7 rounded bg-white/10" />
              <span className="h-4 w-8 rounded bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <span className="text-[9px] font-medium text-emerald-400">▢ Calendar view</span>
          </div>

          {/* Floating "All systems operational" banner */}
          <div
            className="-ml-6 mt-1 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-[#09101b] px-3.5 py-2.5 shadow-xl"
            style={{ transform: 'translateZ(30px)' }}
          >
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <p className="text-sm font-bold text-white">
              All systems <span className="text-emerald-400">operational</span>
            </p>
          </div>

          {/* Uptime metrics card */}
          <div className="mt-3.5 rounded-xl border border-white/5 bg-[#080d17] p-4">
            <p className="text-[11px] font-semibold text-white">
              Uptime <span className="font-normal text-slate-400">Last 90 days</span>
            </p>
            <p className="mt-3 text-[9px] font-semibold text-slate-400">Group 1</p>

            <div className="mt-2 space-y-2.5">
              {statusRows.map((row, i) => (
                <div key={row.name} className="flex items-center gap-2.5">
                  <span className="w-20 text-[9px] font-medium text-slate-300 truncate">
                    {row.name}
                  </span>
                  <span className="w-10 text-[8px] text-emerald-400">{row.uptime}</span>
                  <UptimeBars red={row.red} dim={i > 2} />
                  <span className="ml-auto flex items-center gap-1 text-[8px] text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
        className="pointer-events-none absolute -inset-x-1/4 bottom-0 z-10 h-1/2 bg-gradient-to-t from-[#090e17] via-[#090e17]/80 to-transparent"
      />
    </div>
  );
}

export default function StatusPagesSection() {
  return (
    <section className="overflow-hidden bg-[#090e17] py-16 text-white">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Copy */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Build trust with
            <br />
            public status pages<span className="text-emerald-400">.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            Be transparent. Share your uptime with the public and inform your customers about any
            planned (or unplanned) outages.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ShaderButton
              href="/status/demo"
              className="!inline-flex !items-center !gap-2 !rounded-full !border !border-emerald-500/40 !bg-emerald-500/10 !px-5 !py-2.5 !text-xs !font-semibold !text-emerald-400 hover:!bg-emerald-500 hover:!text-black"
            >
              Check LIVE demo
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ShaderButton>

            <Link
              href="/status-pages"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
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
