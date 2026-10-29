import ShaderButton from '@/components/shader-button/ShaderButton';

export default function MultiLocationFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#111821] px-5 py-16 text-center text-white sm:px-8 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 max-w-3xl rounded-full bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-indigo-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="mx-auto inline-flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-left">
          <span>
            <strong className="block text-lg">4.8</strong>
            <span className="text-[9px] text-slate-400">TEAM RATING</span>
          </span>
          <span className="h-8 w-px bg-white/10" aria-hidden="true" />
          <span>
            <strong className="block text-lg">Global</strong>
            <span className="text-[9px] text-slate-400">REGIONAL COVERAGE</span>
          </span>
        </div>
        <h2 className="mt-7 text-2xl font-bold tracking-tight sm:text-4xl">
          Know how your service performs around the world
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
          Start with a free account and add regional checks when you are ready.
        </p>
        <ShaderButton href="/register" className="mt-5">
          Create your free account
        </ShaderButton>
        <p className="mt-2 text-[11px] text-slate-400">No credit card required</p>
      </div>
    </section>
  );
}
