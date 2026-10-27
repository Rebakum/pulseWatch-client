'use client';

import { Bell, Check, ChevronDown, Clock3, Globe2, Plus, Server, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Container from '@/components/common/Container';

const STEP_DURATION_MS = 6000;

const STEPS = [
  {
    title: '1. Add your services',
    description: 'Choose the production endpoints and jobs you want to monitor.',
  },
  {
    title: '2. Tune your checks',
    description: 'Select check intervals, regions, and response thresholds.',
  },
  {
    title: '3. Connect alerting',
    description: 'Route incidents to your on-call channels and integrations.',
  },
  {
    title: '4. Improve reliability',
    description: 'Use monitoring history to investigate and prevent outages.',
  },
] as const;

function MonitorSetupPage() {
  return (
    <div className="grid min-h-[440px] items-center gap-8 p-5 text-[var(--foreground)] sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12 lg:p-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          New monitor
        </p>
        <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
          Add a service to monitor
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
          Choose a monitor type and enter the service address.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {[
            { label: 'Website / API', Icon: Globe2, active: true },
            { label: 'Server', Icon: Server, active: false },
            { label: 'Keyword', Icon: ShieldCheck, active: false },
            { label: 'Cron job', Icon: Clock3, active: false },
          ].map(({ label, Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-[var(--foreground)] shadow-sm transition-colors ${
                active
                  ? 'border-brand-blue/40 bg-brand-blue/5 shadow-brand-blue/5'
                  : 'border-[var(--border)] bg-[var(--background)]'
              }`}
            >
              <Icon className={`size-4 ${active ? 'text-brand-blue' : 'text-[var(--muted)]'}`} />
              <span className="text-xs font-semibold">{label}</span>
              {active ? <Check className="ml-auto size-4 text-brand-blue" /> : null}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-xl shadow-slate-900/5 sm:p-6">
        <p id="devops-monitor-url" className="text-xs font-semibold">
          Website or endpoint URL
        </p>
        <div className="mt-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3.5 text-sm text-[var(--muted)]">
          https://api.example.com/health
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-[var(--surface)] px-3 py-3.5">
          <span className="text-xs font-medium">Monitor name</span>
          <span className="text-xs text-[var(--muted)]">Production API</span>
        </div>
        <span
          aria-hidden="true"
          className="mt-5 inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20"
        >
          <Plus className="size-4" />
          Add monitor
        </span>
      </div>
    </div>
  );
}

function CheckSettingsPage() {
  return (
    <div className="grid min-h-[440px] items-center gap-8 p-5 text-[var(--foreground)] sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          Monitor settings
        </p>
        <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">Tune how checks run</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          Choose the frequency and locations that fit your service.
        </p>

        <div className="mt-7 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-xl shadow-slate-900/5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold">Check interval</span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs">
              1 minute <ChevronDown className="size-3.5 text-[var(--muted)]" />
            </span>
          </div>
          <div className="mt-5 h-2 rounded-full bg-[var(--border)]">
            <div className="relative h-full w-[42%] rounded-full bg-brand-blue">
              <span className="absolute -right-2 -top-1.5 size-5 rounded-full border-2 border-brand-blue bg-[var(--background)]" />
            </div>
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-[var(--muted)]">
            <span>30 sec</span>
            <span>1 min</span>
            <span>5 min</span>
            <span>30 min</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-xl shadow-slate-900/5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <Globe2 className="size-4 text-brand-blue" />
          Check locations
        </div>
        <div className="mt-4 space-y-2">
          {[
            { region: 'North America', selected: true },
            { region: 'Europe', selected: true },
            { region: 'Asia Pacific', selected: false },
          ].map(({ region, selected }) => (
            <div
              key={region}
              className="flex items-center gap-3 rounded-lg bg-[var(--surface)] px-3 py-3"
            >
              <span
                className={`grid size-4 place-items-center rounded border ${
                  selected ? 'border-brand-blue bg-brand-blue text-white' : 'border-[var(--border)]'
                }`}
              >
                {selected ? <Check className="size-3" /> : null}
              </span>
              <span className="text-xs">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AlertingPage() {
  return (
    <div className="grid min-h-[440px] items-center gap-8 p-5 text-[var(--foreground)] sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          Notifications
        </p>
        <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
          Choose where alerts go
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          Notify your on-call team when a monitor needs attention.
        </p>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-xl shadow-slate-900/5">
          <Bell className="size-5 text-brand-blue" />
          <div>
            <p className="text-xs font-semibold">Incident notifications</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">
              Sent when a service is down or recovers
            </p>
          </div>
          <span className="ml-auto rounded-full bg-brand-blue px-2.5 py-1 text-[10px] font-semibold text-white">
            Enabled
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-xl shadow-slate-900/5 sm:p-6">
        <p className="text-xs font-semibold">Alert channels</p>
        <div className="mt-4 space-y-2">
          {[
            { channel: 'Email', destination: 'devops@example.com', enabled: true },
            { channel: 'Slack', destination: '#on-call', enabled: true },
            { channel: 'SMS', destination: '+1 (555) 010-2040', enabled: false },
          ].map(({ channel, destination, enabled }) => (
            <div
              key={channel}
              className="flex items-center gap-3 rounded-lg bg-[var(--surface)] px-3 py-3"
            >
              <span
                className={`size-2 rounded-full ${enabled ? 'bg-brand-blue' : 'bg-[var(--border)]'}`}
              />
              <div>
                <p className="text-xs font-semibold">{channel}</p>
                <p className="mt-0.5 text-[10px] text-[var(--muted)]">{destination}</p>
              </div>
              <span className="ml-auto text-[10px] text-[var(--muted)]">
                {enabled ? 'Active' : 'Off'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReliabilityPage() {
  return (
    <div className="h-full w-full bg-[var(--surface)]">
      <Image
        src="/DashboardPreview.JPG"
        alt="PulseWatch dashboard showing service status, uptime statistics, and response-time history"
        width={1274}
        height={714}
        className="h-full w-full object-contain"
        sizes="100vw"
      />
    </div>
  );
}

const STEP_PAGES = [MonitorSetupPage, CheckSettingsPage, AlertingPage, ReliabilityPage] as const;

export default function DevOpsSetupShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    const intervalId = window.setInterval(() => {
      setProgress(Math.min(((Date.now() - startedAt) / STEP_DURATION_MS) * 100, 100));
    }, 60);
    const timeoutId = window.setTimeout(() => {
      setActiveStep((current) => (current + 1) % STEPS.length);
      setProgress(0);
    }, STEP_DURATION_MS);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [activeStep, cycleKey]);

  const ActivePage = STEP_PAGES[activeStep];

  return (
    <section className="relative isolate overflow-hidden bg-[var(--surface)] py-10 text-[var(--foreground)] sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--color-brand-blue)_10%,transparent),transparent_68%)]"
      />
      <Container>
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-[var(--background)] px-3.5 py-1.5 text-xs font-semibold text-brand-blue shadow-sm">
            <span className="size-1.5 rounded-full bg-brand-blue" />A clearer path to reliable
            releases
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Add monitoring to your <span className="text-brand-blue">workflow.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Set up service checks, tune alerting, and keep operational visibility alongside your
            deployments.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--background)] shadow-[0_32px_90px_-38px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.03]"
          aria-live="polite"
        >
          <div className="flex items-center gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-7">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-rose-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="hidden h-5 w-px bg-[var(--border)] sm:block" />
            <span className="text-sm font-bold tracking-tight">PulseWatch</span>
            <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1.5 text-xs font-semibold text-brand-blue">
              <span className="size-1.5 animate-pulse rounded-full bg-brand-blue" />
              Live preview
            </span>
            <span className="hidden text-xs font-medium text-[var(--muted)] sm:inline">
              Step {activeStep + 1} of {STEPS.length}
            </span>
          </div>
          <div
            id="devops-setup-preview"
            className="aspect-video min-h-[620px] w-full bg-[var(--surface)] sm:min-h-[560px] lg:min-h-0"
            role="region"
            aria-label={`${STEPS[activeStep].title} preview`}
          >
            <ActivePage />
          </div>
        </div>

        <div
          className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4"
          role="group"
          aria-label="Setup steps"
        >
          {STEPS.map((step, index) => {
            const isActive = activeStep === index;
            const isComplete = index < activeStep;

            return (
              <button
                key={step.title}
                type="button"
                aria-pressed={isActive}
                aria-controls="devops-setup-preview"
                onClick={() => {
                  setProgress(0);
                  setActiveStep(index);
                  setCycleKey((current) => current + 1);
                }}
                className={`group min-w-0 rounded-2xl border p-4 text-left transition-all duration-200 focus-visible:rounded-2xl sm:p-5 ${
                  isActive
                    ? 'border-brand-blue/30 bg-[var(--background)] shadow-lg shadow-brand-blue/10 ring-1 ring-brand-blue/10'
                    : 'border-transparent bg-[var(--background)]/60 hover:border-[var(--border)] hover:bg-[var(--background)] hover:shadow-md'
                }`}
              >
                <span className="flex items-start gap-3">
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold transition-colors ${
                      isActive || isComplete
                        ? 'bg-brand-blue text-white'
                        : 'bg-[var(--surface)] text-[var(--muted)]'
                    }`}
                  >
                    {isComplete ? <Check aria-hidden="true" className="size-4" /> : index + 1}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-sm font-bold ${isActive ? 'text-brand-blue' : ''}`}
                    >
                      {step.title.replace(/^\d+\.\s*/, '')}
                    </span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                      {step.description}
                    </span>
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-1.5 overflow-hidden rounded-full bg-[var(--border)]"
                >
                  <span
                    className={`block h-full rounded-full bg-brand-blue ${
                      isActive ? 'transition-[width] duration-75 ease-linear' : ''
                    }`}
                    style={{
                      width: isComplete ? '100%' : isActive ? `${progress}%` : '0%',
                    }}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function DevOpsSetupCta() {
  return (
    <section className="bg-[var(--foreground)] py-14 text-[var(--background)] sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold leading-relaxed sm:text-xl">
            Keep your services visible in production. Get the signal your team needs to respond
            confidently when something changes.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[image:var(--background-image-brand-gradient)] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Start monitoring for free
          </Link>
        </div>
      </Container>
    </section>
  );
}
