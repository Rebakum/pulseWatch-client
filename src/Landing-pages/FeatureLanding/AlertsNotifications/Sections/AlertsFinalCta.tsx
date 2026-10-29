import Link from 'next/link';

export default function AlertsFinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101721] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-blue-950/35 via-indigo-950/10 to-transparent"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 w-full opacity-25"
      >
        <defs>
          <linearGradient id="alerts-chart-line" x1="0" x2="1">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset=".5" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path d="M0 205 C150 195 190 190 285 200 S420 185 510 188 650 168 735 179 880 155 970 161 1100 135 1200 144" fill="none" stroke="url(#alerts-chart-line)" strokeWidth="2" />
        <path d="M0 220 C180 211 220 204 320 214 S500 200 590 202 740 190 830 193 1000 178 1200 180 L1200 260 L0 260Z" fill="url(#alerts-chart-line)" fillOpacity=".08" />
      </svg>
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto inline-flex items-center gap-5 rounded-xl border border-white/10 bg-[#151d28]/90 px-5 py-3">
          <p className="text-left text-lg font-bold">
            4.7 <span className="bg-brand-gradient bg-clip-text text-transparent">★</span>
            <span className="mt-1 block text-[9px] font-normal text-slate-400">stars out of 5</span>
          </p>
          <span aria-hidden="true" className="h-8 w-px bg-white/10" />
          <p className="text-left text-lg font-bold">
            284+
            <span className="mt-1 block text-[9px] font-normal text-slate-400">reviews on G2</span>
          </p>
        </div>

        <h2 className="mx-auto mt-7 max-w-4xl text-2xl font-bold tracking-tight sm:text-4xl">
          Get your FREE account now, 50 monitors included!
        </h2>
        <Link
          href="/register"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gradient px-6 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110"
        >
          Start monitoring in 30 seconds
        </Link>
        <p className="mt-2 text-[11px] text-slate-400">No credit card required!</p>

        <div className="mt-7">
          <p className="text-[10px] font-semibold text-slate-300">Available also on:</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-white/20 bg-black/50 px-3 text-left"
            >
              <span aria-hidden="true" className="text-sm text-sky-300">▶</span>
              <span className="text-[8px] leading-tight text-slate-300">
                GET IT ON
                <strong className="block text-[11px] text-white">Google Play</strong>
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-white/20 bg-black/50 px-3 text-left"
            >
              <span aria-hidden="true" className="text-sm text-white">●</span>
              <span className="text-[8px] leading-tight text-slate-300">
                Download on the
                <strong className="block text-[11px] text-white">App Store</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}