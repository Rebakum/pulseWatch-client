import ShaderButton from '@/components/shader-button/ShaderButton';

export default function DnsFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#111821] px-5 py-16 text-center text-white sm:px-8 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 max-w-3xl rounded-full bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto inline-flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-left">
          <span>
            <strong className="block text-lg">4.7</strong>
            <span className="text-[9px] text-slate-400">STARS OUT OF 5</span>
          </span>
          <span className="h-8 w-px bg-white/10" aria-hidden="true" />
          <span>
            <strong className="block text-lg">284+</strong>
            <span className="text-[9px] text-slate-400">REVIEWS ON G2</span>
          </span>
        </div>
        <h2 className="mt-7 text-2xl font-bold tracking-tight sm:text-4xl">
          Get your <span className="bg-brand-gradient bg-clip-text text-transparent">FREE</span>{' '}
          account now, 50 monitors included
          <span className="bg-brand-gradient bg-clip-text text-transparent">!</span>{' '}
        </h2>
        <ShaderButton href="/register" className="mt-5">
          Start monitoring in 30 seconds
        </ShaderButton>
        <p className="mt-2 text-[11px] text-slate-400">No credit card required</p>
        <p className="mt-7 text-xs font-semibold text-slate-300">Available also on:</p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <a
            href="https://play.google.com/store"
            className="rounded-md border border-white/20 px-4 py-2 text-[10px] font-semibold text-slate-200 transition-colors hover:bg-white/10"
          >
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            className="rounded-md border border-white/20 px-4 py-2 text-[10px] font-semibold text-slate-200 transition-colors hover:bg-white/10"
          >
            App Store
          </a>
        </div>
      </div>
    </section>
  );
}
