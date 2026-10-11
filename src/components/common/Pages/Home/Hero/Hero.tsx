'use client';

import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-gradient opacity-10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto w-full max-w-7xl px-8 text-center">
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs sm:text-sm font-medium mb-8 shadow-sm">
          <div className="flex -space-x-1 overflow-hidden">
            <span className="inline-block w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-[10px] font-bold">
              ✓
            </span>
            <span className="inline-block w-5 h-5 rounded-full bg-[var(--color-brand-purple)] flex items-center justify-center text-white text-[10px] font-bold">
              ★
            </span>
            <span className="inline-block w-5 h-5 rounded-full bg-[var(--color-brand-magenta)] flex items-center justify-center text-white text-[10px] font-bold">
              ✦
            </span>
          </div>
          <span className="text-[var(--muted)]">
            Trusted by over <strong className="text-[var(--foreground)]">3.4M+ developers</strong> &
            engineering teams
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
          Meet the #1 <br />
          <span className="bg-clip-text text-transparent bg-brand-gradient">
            intelligent uptime monitoring
          </span>{' '}
          platform.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--muted)] mb-10 leading-relaxed">
          Keep your applications, APIs, and servers running smoothly with lightning-fast real-time
          checks, instant alerts, and status pages.
        </p>

        {/* Email Input / CTA Form */}
        <div className="max-w-xl mx-auto mb-12">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center p-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg transition-all focus-within:ring-2 focus-within:ring-[var(--color-brand-blue)]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full px-4 py-3 bg-transparent text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none text-base"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium bg-brand-gradient hover:opacity-90 transition-opacity shadow-md cursor-pointer"
              >
                <span>Start free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl border border-[var(--color-status-up)]/30 bg-[var(--color-status-up)]/10 text-[var(--color-status-up)] font-medium">
              🎉 Thanks! Check your email to set up your first monitor.
            </div>
          )}
        </div>

        {/* Feature Checkmarks Bar */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-sm text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[var(--color-status-up)]/20 text-[var(--color-status-up)] flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span>
              50 monitors for <strong className="text-[var(--foreground)]">free</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[var(--color-status-up)]/20 text-[var(--color-status-up)] flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span>20+ integrations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[var(--color-status-up)]/20 text-[var(--color-status-up)] flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span>Real-time web & mobile alerts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[var(--color-status-up)]/20 text-[var(--color-status-up)] flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span>Public status pages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
