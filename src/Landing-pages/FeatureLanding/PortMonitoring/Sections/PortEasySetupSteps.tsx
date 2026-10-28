'use client';

import ShaderButton from '@/components/shader-button/ShaderButton';
import { ArrowRight, CheckCircle2, Clock, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Create port monitoring',
    description:
      'Choose the Port monitoring type, enter the URL, IP or host to monitor and choose the port.',
    screenTitle: 'Add single monitor.',
  },
  {
    id: 2,
    title: 'Adjust the settings',
    description:
      'Get alerts when port is closed or open, add tags or group, and add notification channels.',
    screenTitle: 'Configure alert thresholds & notifications.',
  },
  {
    id: 3,
    title: 'Set up intervals',
    description: 'Adjust the monitoring intervals, location to monitor from, or advanced settings.',
    screenTitle: 'Define check intervals & global locations.',
  },
];

export default function PortEasySetupSteps() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto progression every 4 seconds (Optional: can be controlled manually via clicks)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[var(--background)] py-20 text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Easy setup:{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">3 clicks</span> to
              create a port monitor.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)] sm:text-base">
            Be the first to know when a service goes down. Reliable monitoring warns you before any
            significant trouble and saves you money.
          </p>
        </div>

        {/* 3 Interactive Cards / Stages */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  isActive
                    ? 'border-brand-blue bg-[var(--surface)] shadow-lg shadow-brand-blue/10'
                    : 'border-white/10 bg-[var(--surface)]/50 hover:border-white/20'
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'bg-brand-gradient bg-clip-text text-transparent' : 'text-[var(--muted)]'}`}
                  >
                    Step 0{step.id}
                  </span>
                  {isActive && <CheckCircle2 className="h-5 w-5 text-brand-blue" />}
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>

                {/* Progress Bar Animation */}
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
                    <div className="setup-progress h-full w-0 bg-brand-gradient" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Display Window (Changes based on active step) */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1320] p-6 shadow-2xl sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex size-3 rounded-full bg-red-500/80" />
              <span className="flex size-3 rounded-full bg-yellow-500/80" />
              <span className="flex size-3 rounded-full bg-brand-gradient" />
            </div>
            <span className="text-xs font-medium text-[var(--muted)]">
              PulseWatch Dashboard Preview
            </span>
          </div>

          <div className="transition-all duration-500">
            <h4 className="mb-6 text-xl font-semibold text-white">
              {steps[activeStep].screenTitle}
            </h4>

            {/* Step 1 Screen Mockup */}
            {activeStep === 0 && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs text-[var(--muted)]">Monitor Type</span>
                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-brand-blue/30 bg-brand-blue/10 p-3 text-sm font-medium">
                    <Terminal className="h-4 w-4 text-brand-blue" />
                    <span className="bg-brand-gradient bg-clip-text text-transparent">
                      Port monitoring (TCP)
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:col-span-2">
                  <span className="text-xs text-[var(--muted)]">IP / Host & Port</span>
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-black/40 px-3 py-2 text-sm text-white sm:col-span-2 border border-white/10">
                      192.168.1.10
                    </div>
                    <div className="rounded-lg bg-black/40 px-3 py-2 text-sm text-white border border-white/10">
                      Port 5432
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 Screen Mockup */}
            {activeStep === 1 && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs text-[var(--muted)]">Alert Triggers</span>
                  <div className="mt-3 space-y-2">
                    <label className="flex items-center gap-2 text-sm text-white">
                      <input type="checkbox" defaultChecked className="accent-brand-blue" /> Alert
                      when port is closed
                    </label>
                    <label className="flex items-center gap-2 text-sm text-white">
                      <input type="checkbox" defaultChecked className="accent-brand-blue" /> Alert
                      on high latency
                    </label>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs text-[var(--muted)]">Notification Channels</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-brand-blue/30 px-3 py-1 text-xs bg-brand-gradient bg-clip-text text-transparent">
                      Slack
                    </span>
                    <span className="rounded-full border border-brand-blue/30 px-3 py-1 text-xs bg-brand-gradient bg-clip-text text-transparent">
                      Email
                    </span>
                    <span className="rounded-full border border-brand-blue/30 px-3 py-1 text-xs bg-brand-gradient bg-clip-text text-transparent">
                      Webhook
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 Screen Mockup */}
            {activeStep === 2 && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs text-[var(--muted)]">Check Interval</span>
                  <div className="mt-3 flex items-center justify-between rounded-lg bg-black/40 p-3 text-sm text-white border border-white/10">
                    <span>Every 1 minute</span>
                    <Clock className="h-4 w-4 text-brand-blue" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs text-[var(--muted)]">Global Regions</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white border border-white/10">
                      US East
                    </span>
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white border border-white/10">
                      EU Central
                    </span>
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white border border-white/10">
                      Asia Pacific
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <ShaderButton href="/register" className="">
            Start monitoring in 30 seconds
            <ArrowRight className="h-4 w-4" />
          </ShaderButton>
        </div>
      </div>
    </section>
  );
}
