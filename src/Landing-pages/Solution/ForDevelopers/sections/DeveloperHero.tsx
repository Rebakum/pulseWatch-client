import { Activity, ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from './DeveloperGradientText';

const HEALTH_BARS = [12, 20, 15, 25, 18, 30, 22, 28, 17, 26, 21, 32];

export default function DeveloperHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-16 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Sit back and focus on <DeveloperGradientText>building.</DeveloperGradientText>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Catch uptime issues without adding another maintenance project. Add a check, keep
            shipping, and get a clear signal when something changes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ShaderButton href="/register">Start monitoring for free</ShaderButton>
            <Link
              href="/api-docs"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Explore the API <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>

        <div
          role="img"
          aria-label="Code editor and service health panel showing a monitored deployment"
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[image:var(--background-image-brand-gradient)] opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151e30] shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="size-2.5 rounded-full bg-rose-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-slate-400">deploy-check.ts</span>
              <span className="ml-auto rounded-full bg-brand-blue/15 px-2.5 py-1 text-[10px] font-semibold text-blue-200">
                Production
              </span>
            </div>
            <div className="grid gap-5 p-5 sm:p-7">
              <div className="rounded-xl border border-white/10 bg-[#0d1422] p-4 font-mono text-xs leading-7 text-slate-300 sm:text-sm">
                <p>
                  <span className="text-violet-300">const</span> monitor = {'{'}
                </p>
                <p className="pl-4">
                  url: <span className="text-emerald-300">&apos;api.yourapp.com&apos;</span>,
                </p>
                <p className="pl-4">
                  interval: <span className="text-amber-200">&apos;30s&apos;</span>,
                </p>
                <p className="pl-4">
                  regions: <span className="text-blue-200">[&apos;us&apos;, &apos;eu&apos;]</span>
                </p>
                <p>{'}'}</p>
                <p className="mt-2 text-slate-500">{'// Ship confidently. We watch the rest.'}</p>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Check aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">All systems operational</p>
                  <p className="mt-1 text-xs text-slate-400">Last check just now · 42 ms</p>
                </div>
                <span className="ml-auto hidden h-8 items-end gap-1 sm:flex" aria-hidden="true">
                  {HEALTH_BARS.map((height, index) => (
                    <span
                      key={index}
                      className="w-1.5 rounded-full bg-emerald-300/70"
                      style={{ height }}
                    />
                  ))}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Activity aria-hidden="true" className="size-4 text-brand-blue-light" />
                  Deployment check
                </span>
                <span>All regions healthy</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
