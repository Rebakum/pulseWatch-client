'use client';

import { ArrowRight, Check } from 'lucide-react';
import React, { useState } from 'react';

import ShaderButton from '@/components/shader-button/ShaderButton';

const features: React.ReactNode[] = [
  <>
    50 monitors for <strong className="text-[var(--foreground)]">free</strong>
  </>,
  '20+ integrations',
  'Real-time alerts, web & mobile',
  'Public status pages',
];

export default function Hero() {
  const [site, setSite] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (site.trim()) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-gradient opacity-10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Trust Badge */}
        {/* <div className="mx-auto mb-8 inline-flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-left shadow-sm">
          <div className="flex items-center -space-x-1">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-[11px] font-bold text-white">
              ✓
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-purple)] text-[11px] font-bold text-white">
              ★
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-magenta)] text-[11px] font-bold text-white">
              ✦
            </span>
          </div>
          <p className="text-sm leading-snug text-[var(--foreground)]">
            Over 3.4M+ users
            <br />
            trust {BRAND_NAME}.
          </p>
        </div> */}

        {/* Main Headline */}
        <h1 className="mx-auto mb-8 max-w-5xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Meet the #1 <br />
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            intelligent uptime monitoring
          </span>{' '}
          service
          <span className="text-brand-blue">.</span>
        </h1>

        {/* Feature Checkmarks Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base text-[var(--muted)] sm:text-lg">
          {features.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-brand-blue" strokeWidth={2.5} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Input / CTA Form */}
        <div className="mx-auto max-w-xl">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-stretch gap-2 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg transition-all focus-within:ring-2 focus-within:ring-[var(--color-brand-blue)] sm:flex-row sm:items-center sm:rounded-full"
            >
              <input
                type="text"
                inputMode="url"
                required
                value={site}
                onChange={(e) => setSite(e.target.value)}
                placeholder="eg. mywebsite.com"
                className="w-full bg-transparent px-5 py-3 text-base text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none"
              />
              <ShaderButton
                className="w-full shrink-0 px-6 py-3.5 text-sm sm:w-auto"
                onClick={(e) => e.currentTarget.form?.requestSubmit()}
              >
                <span>Start monitoring for free</span>
                <ArrowRight className="h-4 w-4" />
              </ShaderButton>
            </form>
          ) : (
            <div className="rounded-xl border border-[var(--color-status-up)]/30 bg-[var(--color-status-up)]/10 p-4 font-medium text-brand-blue">
              🎉 Thanks! Check your email to set up your first monitor.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
