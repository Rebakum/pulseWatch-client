import { ArrowUpRight, Check, Plug } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

function ApiPreview() {
  return (
    <div
      role="img"
      aria-label="API access preview with a monitor reset endpoint and successful connection"
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 blur-3xl"
      />
      <div className="relative space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-300">
            <Plug aria-hidden="true" className="size-10 text-brand-blue-light sm:size-14" />
            <span className="text-xl font-semibold sm:text-3xl">API access</span>
          </div>
          <span className="grid size-16 place-items-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/20 sm:size-20">
            <Check aria-hidden="true" className="size-10 sm:size-12" strokeWidth={3} />
          </span>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#1b2537] p-5 text-slate-400 shadow-2xl shadow-black/20 sm:p-7">
          <p className="text-sm sm:text-lg">
            <span className="font-semibold text-brand-blue-light">GET</span> post /monitors/{'{id}'}
            /reset
          </p>
          <p className="mt-3 text-sm sm:text-lg">&quot;nextLink&quot;: &quot;string&quot;,</p>
        </div>
        <div className="flex items-center justify-end gap-3 rounded-xl border border-white/5 bg-[#1b2537] p-3 sm:p-4">
          <span className="rounded-lg bg-[#101827] px-5 py-3 text-sm text-slate-400">Cancel</span>
          <span className="rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ApiHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-16 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Monitor everything.
            <br />
            Automate <DeveloperGradientText>anything.</DeveloperGradientText>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Plug the PulseWatch REST API into your codebase and handle uptime, status pages, SSL,
            cron jobs, maintenance windows, and more from a single endpoint.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ShaderButton href="/api-docs">API Docs (V3)</ShaderButton>
            <Link
              href="/api-docs"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              View legacy API docs <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
        <ApiPreview />
      </Container>
    </section>
  );
}
