import { ArrowUpRight, Check, Webhook } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function WebhookHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-16 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Real-time event delivery
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Build custom flows with <DeveloperGradientText>webhooks.</DeveloperGradientText>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Send monitor events to the tools and services you already use. Respond to outages,
            recoveries, and changes with your own workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ShaderButton href="/register">Get started for free</ShaderButton>
            <Link
              href="/api-docs"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Read the docs <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
        <div
          role="img"
          aria-label="Webhook event sent from a monitor to a connected service"
          className="relative mx-auto w-full max-w-xl"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2rem] bg-[image:var(--background-image-brand-gradient)] opacity-20 blur-2xl"
          />
          <div className="relative rounded-2xl border border-white/10 bg-[#151e30] p-5 shadow-2xl shadow-black/30 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-semibold">Webhook delivery</span>
              <span className="rounded-full bg-brand-blue/15 px-3 py-1 text-[10px] font-semibold text-blue-200">
                Live event
              </span>
            </div>
            <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue-light">
                <Webhook aria-hidden="true" className="size-6" />
              </span>
              <div>
                <p className="text-xs font-semibold">Monitor status changed</p>
                <p className="mt-1 text-[10px] text-slate-400">website-api · just now</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-4 text-slate-400" />
            </div>
            <pre className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-[#0d1422] p-4 text-[10px] leading-6 text-slate-300 sm:text-xs">
              <code>{`{
  "event": "monitor.down",
  "monitor": "website-api",
  "timestamp": "2026-10-28T00:00:00Z"
}`}</code>
            </pre>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
              <Check aria-hidden="true" className="size-4 text-brand-blue-light" /> Delivered to
              your endpoint
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
