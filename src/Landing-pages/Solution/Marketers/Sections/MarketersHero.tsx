import { AlertTriangle, Check, MousePointer2 } from 'lucide-react';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const UPTIME_BARS = Array.from({ length: 28 }, (_, index) => index);

export default function MarketersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-14 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-1/4 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Don&apos;t run <DeveloperGradientText>PPC campaigns</DeveloperGradientText> on broken
              pages.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Keep your landing pages up. Use free uptime monitoring and get notified when a page
              stops working—before it wastes your campaign budget.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ShaderButton href="/register">Start monitoring for free</ShaderButton>
              <span className="text-xs text-slate-300">No credit card required</span>
            </div>
          </div>

          <div
            role="img"
            aria-label="Campaign landing page monitor showing an outage alert and recent uptime checks"
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="absolute inset-4 rounded-full bg-brand-blue/15 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#151e30] p-4 shadow-2xl shadow-black/30 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold">Campaign landing page</p>
                  <p className="mt-1 text-[10px] text-slate-400">shop.example.com/summer</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-400/10 px-2.5 py-1 text-[10px] font-semibold text-rose-300">
                  <AlertTriangle aria-hidden="true" className="size-3.5" />
                  Check failed
                </span>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="space-y-2 rounded-xl bg-[#0d1422] p-4">
                  <span className="block h-2 w-2/3 rounded bg-slate-500/60" />
                  <span className="block h-2 w-full rounded bg-slate-600/50" />
                  <span className="block h-2 w-5/6 rounded bg-slate-600/50" />
                  <span className="mt-3 block h-7 w-24 rounded-md bg-brand-blue" />
                </div>
                <div className="relative grid size-14 place-items-center rounded-xl border border-white/10 bg-[#0d1422] sm:size-16">
                  <MousePointer2 aria-hidden="true" className="size-6 text-slate-300" />
                  <span className="absolute -right-1 -top-1 size-4 rounded-full bg-rose-400 ring-4 ring-[#151e30]" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-rose-300/10 bg-rose-400/5 p-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-rose-400/10 text-rose-300">
                  <AlertTriangle aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold">Your website is down</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    HTTP 503 · Check from 3 locations
                  </p>
                </div>
                <span className="ml-auto text-[10px] text-slate-400">Now</span>
              </div>

              <div className="mt-5 rounded-xl bg-[#0d1422] p-4">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-slate-300">Recent checks</span>
                  <span className="text-slate-500">Last 24 hours</span>
                </div>
                <div className="mt-3 flex h-5 items-end gap-1" aria-hidden="true">
                  {UPTIME_BARS.map((bar) => (
                    <span
                      key={bar}
                      className={`flex-1 rounded-sm ${bar === 23 || bar === 24 ? 'bg-rose-400' : 'bg-brand-blue'}`}
                      style={{ height: `${10 + ((bar * 7) % 12)}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-slate-400">
          A reliable signal for every campaign page, checkout flow, and launch.
          <Check aria-hidden="true" className="ml-1 inline size-3.5 text-brand-blue-light" />
        </p>
      </Container>
    </section>
  );
}
