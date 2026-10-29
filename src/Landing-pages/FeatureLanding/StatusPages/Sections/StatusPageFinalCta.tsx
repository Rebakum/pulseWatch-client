import Link from 'next/link';

export default function StatusPageFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#111821] px-4 py-16 text-center text-white sm:px-6 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 max-w-3xl rounded-full bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto inline-flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-left">
          <span>
            <strong className="block text-lg">4.7 <span className="text-sky-400">★</span></strong>
            <span className="text-[9px] text-slate-400">stars out of 5</span>
          </span>
          <span className="h-8 w-px bg-white/10" aria-hidden="true" />
          <span>
            <strong className="block text-lg">284+</strong>
            <span className="text-[9px] text-slate-400">reviews on G2</span>
          </span>
        </div>
        <h2 className="mx-auto mt-7 max-w-4xl text-2xl font-bold tracking-tight sm:text-4xl">
          Create your status page in 30 seconds.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          Keep users informed with a hosted status page.
          <br />
          No credit card required. 50 monitors for free.
        </p>
        <Link
          href="/register"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110"
        >
          Get a free status page
        </Link>
        <p className="mt-2 text-[11px] text-slate-400">No trial. No credit card.</p>
      </div>
    </section>
  );
}
