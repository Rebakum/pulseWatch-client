'use client';

import Container from '@/components/common/Container';
import { ArrowRight, CheckCircle2, Clock3, Copy, Link2, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Create a heartbeat monitor',
    description: 'Name the job and choose how often it should report a successful run.',
  },
  {
    number: '02',
    title: 'Add the check-in URL',
    description: 'Copy the unique heartbeat URL into the end of your scheduled script.',
  },
  {
    number: '03',
    title: 'Choose alerts and grace time',
    description: 'Set a tolerance window and select where missed-run notifications should go.',
  },
];

export default function CronJobSetupSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const heartbeatUrl = 'https://pulsewatch.example/heartbeat/your-id';

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <Container>
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-light">
              Quick setup
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Easy setup: 3 steps to monitor a cron job.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base lg:justify-self-end">
            Add one heartbeat check-in to a successful run. PulseWatch watches the schedule and
            alerts you if the next check-in does not arrive.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <button
              type="button"
              key={step.number}
              onClick={() => setActiveStep(index)}
              aria-pressed={activeStep === index}
              className={`relative cursor-pointer overflow-hidden rounded-2xl border p-5 text-left backdrop-blur-xl transition-all duration-300 ${
                activeStep === index
                  ? 'border-brand-blue/40 bg-brand-blue/5 shadow-lg shadow-brand-blue/10'
                  : 'border-white/10 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--surface)_82%,transparent),color-mix(in_srgb,var(--background)_96%,transparent))]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-brand-blue-light">
                  STEP {step.number}
                </span>
                {activeStep === index ? (
                  <CheckCircle2 className="h-5 w-5 text-brand-blue-light" aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
              {activeStep === index ? (
                <span className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
                  <span key={activeStep} className="setup-progress block h-full w-0 bg-brand-gradient" />
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--surface)_90%,transparent),color-mix(in_srgb,var(--background)_98%,transparent))] p-5 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-4">
            <div className="flex gap-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-rose-400/70" />
              <span className="size-2.5 rounded-full bg-amber-300/70" />
              <span className="size-2.5 rounded-full bg-brand-blue-light/80" />
            </div>
            <span className="text-[10px] font-medium text-[var(--muted)] sm:text-xs">
              PulseWatch · Create cron job monitor
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <div className={`space-y-4 rounded-2xl border border-white/[0.08] bg-black/[0.12] p-4 transition-transform duration-500 ${activeStep === 0 ? 'lg:rotate-[-1deg]' : 'lg:rotate-[1deg]'}`}>
              <div>
                <label className="text-[10px] font-semibold text-[var(--muted)]">Monitor name</label>
                <div className="mt-1.5 rounded-lg border border-white/[0.08] bg-[var(--background)]/70 px-3 py-2.5 text-xs">
                  nightly-database-backup
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-semibold text-[var(--muted)]">Schedule</label>
                  <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[var(--background)]/70 px-3 py-2.5 text-xs">
                    <Clock3 className="h-3.5 w-3.5 text-brand-blue-light" aria-hidden="true" />
                    Every 24 hours
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-[var(--muted)]">Grace period</label>
                  <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[var(--background)]/70 px-3 py-2.5 text-xs">
                    <Settings2 className="h-3.5 w-3.5 text-brand-blue-light" aria-hidden="true" />
                    10 minutes
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-white/[0.08] pt-3">
                {['Email alerts', 'Slack alerts', 'Recurring notifications'].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-2.5 py-1 text-[9px] text-[var(--muted)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className={`rounded-2xl border border-white/[0.08] bg-black/[0.12] p-4 transition-transform duration-500 ${activeStep === 2 ? 'lg:rotate-[-1deg]' : 'lg:rotate-[1deg]'}`}>
              <div className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-brand-blue-light" aria-hidden="true" />
                <p className="text-xs font-semibold">
                  {activeStep === 0
                    ? 'Create a heartbeat monitor'
                    : activeStep === 1
                      ? 'Add the check-in URL to your job'
                      : 'Choose alerts and grace time'}
                </p>
              </div>
              <p className="mt-2 text-[10px] leading-relaxed text-[var(--muted)]">
                Add your unique check-in URL to the end of the job. Call it only after the work
                completes successfully.
              </p>
              <div className="mt-4 rounded-xl border border-white/[0.08] bg-[#080d16] p-3">
                <p className="text-[9px] font-medium text-[var(--muted)]">Example command</p>
                <code className="mt-2 block break-all text-[10px] leading-relaxed text-brand-blue-light sm:text-xs">
                  backup-database &amp;&amp; curl --fail {heartbeatUrl}
                </code>
              </div>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(heartbeatUrl);
                    setCopyState('copied');
                  } catch {
                    setCopyState('failed');
                  }
                }}
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[10px] font-medium text-[var(--muted)] transition-colors hover:border-brand-blue/40 hover:text-brand-blue-light"
              >
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                {copyState === 'copied'
                  ? 'Heartbeat URL copied'
                  : copyState === 'failed'
                    ? 'Copy failed; select the URL above'
                    : 'Copy heartbeat URL'}
              </button>
              <span className="sr-only" aria-live="polite">
                {copyState === 'copied'
                  ? 'Heartbeat URL copied to clipboard.'
                  : copyState === 'failed'
                    ? 'Could not copy the heartbeat URL. Select and copy the URL above.'
                    : ''}
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
            <span className="text-[10px] text-[var(--muted)]">
              One check-in per successful execution.
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-[10px] font-semibold text-white">
              Save monitor
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/register" className="outline-btn">
            Start monitoring in 30 seconds
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
