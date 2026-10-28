'use client';

import Container from '@/components/common/Container';
import { ArrowRight, CheckCircle2, Code2, Globe2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Choose an endpoint',
    description: 'Add a REST or GraphQL URL and select the request method.',
    screenTitle: 'Configure an API request',
  },
  {
    number: '02',
    title: 'Set request and assertions',
    description: 'Add headers or a body, then validate status codes and response payloads.',
    screenTitle: 'Define response assertions',
  },
  {
    number: '03',
    title: 'Set checks and notifications',
    description: 'Choose regions, check intervals, latency thresholds, and alert channels.',
    screenTitle: 'Choose check schedule and alerts',
  },
];

export default function ApiMonitoringSetup() {
  const [activeStep, setActiveStep] = useState(0);

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
              Easy setup: 3 steps to monitor an API.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base lg:justify-self-end">
            Configure a real request and define what a healthy response looks like. PulseWatch
            checks the endpoint on a schedule and alerts you if the response changes.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
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
              PulseWatch · Create API monitor
            </span>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <div className={`space-y-4 rounded-2xl border border-white/[0.08] bg-black/[0.12] p-4 transition-transform duration-500 ${activeStep === 0 ? 'lg:rotate-[-1deg]' : 'lg:rotate-[1deg]'}`}>
              <p className="text-xs font-semibold">{steps[activeStep].screenTitle}</p>
              <div>
                <label className="text-[10px] font-semibold text-[var(--muted)]">Request</label>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 rounded-lg border border-white/[0.08] bg-[var(--background)]/70 px-3 py-2.5">
                  <span className="rounded bg-brand-blue/10 px-2 py-1 text-[9px] font-bold text-brand-blue-light">
                    GET
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[10px] sm:text-xs">
                    https://api.example.com/v1/orders
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/[0.08] bg-[var(--background)]/70 p-3">
                  <p className="text-[9px] text-[var(--muted)]">Expected status</p>
                  <p className="mt-1 text-xs font-semibold">200 OK</p>
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-[var(--background)]/70 p-3">
                  <p className="text-[9px] text-[var(--muted)]">Timeout</p>
                  <p className="mt-1 text-xs font-semibold">10 seconds</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-[var(--background)]/70 p-3">
                <p className="text-[9px] text-[var(--muted)]">Authentication header</p>
                <p className="mt-1 truncate text-[10px] font-medium">Authorization: Bearer ••••••••</p>
              </div>
            </div>
            <div className={`rounded-2xl border border-white/[0.08] bg-black/[0.12] p-4 transition-transform duration-500 ${activeStep === 2 ? 'lg:rotate-[-1deg]' : 'lg:rotate-[1deg]'}`}>
              <div className="flex items-center gap-2">
                {activeStep === 2 ? (
                  <Globe2 className="h-4 w-4 text-brand-blue-light" aria-hidden="true" />
                ) : (
                  <Code2 className="h-4 w-4 text-brand-blue-light" aria-hidden="true" />
                )}
                <p className="text-xs font-semibold">
                  {activeStep === 0
                    ? 'Request configuration'
                    : activeStep === 1
                      ? 'Response payload assertions'
                      : 'Schedule and regions'}
                </p>
              </div>
              <div className="mt-4 rounded-xl border border-white/[0.08] bg-[#080d16] p-3">
                <p className="text-[9px] font-medium text-[var(--muted)]">Expected JSON response</p>
                <pre className="mt-2 overflow-x-auto text-[10px] leading-relaxed text-brand-blue-light">
{`{
  "status": "success",
  "data": {
    "orders": [],
    "count": 0
  }
}`}
                </pre>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Status = 200', '$.status = success', 'Latency < 500 ms'].map((check) => (
                  <span
                    key={check}
                    className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-2.5 py-1 text-[9px] text-[var(--muted)]"
                  >
                    {check}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
            <span className="text-[10px] text-[var(--muted)]">
              {activeStep === 0
                ? 'Select a method, URL, and request configuration.'
                : activeStep === 1
                  ? 'Validate status, headers, response body, and JSON values.'
                  : 'Choose a check interval and where alerts should be delivered.'}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-[10px] font-semibold text-white">
              Save API monitor
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
