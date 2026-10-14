'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState, type CSSProperties } from 'react';

import {
  CHECK_INTERVALS,
  DEFAULT_INTERVAL_INDEX,
  DEFAULT_REGION_INDEX,
  DEFAULT_TIER_INDEX,
  MONITOR_TIERS,
  REGIONS,
  content,
} from './Content';

const usd = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const fieldClass =
  'w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-4 pr-10 text-sm font-medium text-[var(--foreground)] transition hover:border-brand-blue/50 focus:border-brand-blue [&>option]:bg-[var(--surface)] [&>option]:text-[var(--foreground)]';

const sliderClass =
  'h-2 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--surface)] [&::-moz-range-thumb]:bg-brand-blue [&::-moz-range-track]:h-2 [&::-moz-range-track]:border-none [&::-moz-range-track]:bg-transparent [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--surface)] [&::-webkit-slider-thumb]:bg-brand-blue [&::-webkit-slider-thumb]:shadow-md';

const sliderFillStyle = (fill: number): CSSProperties => ({
  background: `linear-gradient(to right, var(--color-brand-blue) 0%, var(--color-brand-blue) ${fill}%, var(--border) ${fill}%, var(--border) 100%)`,
});

export default function SavingsCalculator() {
  const [tierIndex, setTierIndex] = useState(DEFAULT_TIER_INDEX);
  const [intervalIndex, setIntervalIndex] = useState(DEFAULT_INTERVAL_INDEX);
  const [regionIndex, setRegionIndex] = useState(DEFAULT_REGION_INDEX);
  const [usesPlatform, setUsesPlatform] = useState(true);

  const estimate = useMemo(() => {
    const tier = MONITOR_TIERS[tierIndex];
    const interval = CHECK_INTERVALS[intervalIndex];
    const region = REGIONS[regionIndex];

    const suiteCost = Math.round(tier.suiteAnnual * interval.suite * region.suite);
    const pulseCost = Math.round(tier.pulseAnnual * interval.pulse * region.pulse);
    const savings = suiteCost - pulseCost;

    return {
      suiteCost,
      pulseCost,
      savings,
      savingsPercent: Math.round((savings / suiteCost) * 100),
    };
  }, [tierIndex, intervalIndex, regionIndex]);

  const fill = (tierIndex / (MONITOR_TIERS.length - 1)) * 100;

  return (
    <section
      id="savings"
      className="relative isolate overflow-hidden scroll-mt-24 bg-[var(--background)] py-10 text-[var(--foreground)] md:py-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-brand-purple/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {content.titleStart}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.5)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* ---------- Controls ---------- */}
            <div className="space-y-7">
              <div>
                <p className="text-sm font-bold">{content.controls.monitorsTitle}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{content.controls.monitorsHint}</p>

                <div className="mt-5">
                  <input
                    type="range"
                    min={0}
                    max={MONITOR_TIERS.length - 1}
                    step={1}
                    value={tierIndex}
                    onChange={(event) => setTierIndex(Number(event.target.value))}
                    aria-label={content.controls.monitorsTitle}
                    aria-valuetext={`${MONITOR_TIERS[tierIndex].label} monitors`}
                    className={sliderClass}
                    style={sliderFillStyle(fill)}
                  />

                  <div className="mt-3 flex justify-between">
                    {MONITOR_TIERS.map((tier, index) => (
                      <span
                        key={tier.monitors}
                        className={`text-[11px] ${
                          index === tierIndex
                            ? 'font-bold text-[var(--foreground)]'
                            : 'text-[var(--muted)]'
                        }`}
                      >
                        {tier.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="savings-interval" className="text-sm font-bold">
                  {content.controls.intervalTitle}
                </label>
                <div className="relative mt-2.5">
                  <select
                    id="savings-interval"
                    value={intervalIndex}
                    onChange={(event) => setIntervalIndex(Number(event.target.value))}
                    className={fieldClass}
                  >
                    {CHECK_INTERVALS.map((option, index) => (
                      <option key={option.label} value={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="savings-regions" className="text-sm font-bold">
                  {content.controls.regionsTitle}
                </label>
                <div className="relative mt-2.5">
                  <select
                    id="savings-regions"
                    value={regionIndex}
                    onChange={(event) => setRegionIndex(Number(event.target.value))}
                    className={fieldClass}
                  >
                    {REGIONS.map((option, index) => (
                      <option key={option.label} value={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-bold">{content.controls.platformTitle}</p>
                <div className="mt-2.5 grid grid-cols-2 gap-3">
                  {[
                    { label: content.controls.yes, value: true },
                    { label: content.controls.no, value: false },
                  ].map((option) => {
                    const active = usesPlatform === option.value;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setUsesPlatform(option.value)}
                        className={`rounded-xl border py-3 text-sm font-semibold transition ${
                          active
                            ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
                            : 'border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:border-brand-blue/50 hover:text-[var(--foreground)]'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ---------- Results ---------- */}
            <div className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-7">
              <dl className="space-y-4" aria-live="polite">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-[var(--foreground)]/80">
                    {content.results.suiteLabel}
                  </dt>
                  <dd className="shrink-0 text-sm font-bold text-[var(--foreground)]">
                    {usd(estimate.suiteCost)}
                    <span className="ml-1 text-xs font-medium text-[var(--muted)]">
                      {content.results.suffix}
                    </span>
                  </dd>
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-[var(--foreground)]/80">
                    {content.results.pulseLabel}
                  </dt>
                  <dd className="shrink-0 text-sm font-bold text-[var(--foreground)]">
                    {usd(estimate.pulseCost)}
                    <span className="ml-1 text-xs font-medium text-[var(--muted)]">
                      {content.results.suffix}
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="my-6 border-t border-[var(--border)]" />

              <p className="text-4xl font-extrabold tracking-tight text-[var(--color-status-up)] sm:text-5xl">
                {usd(estimate.savings)}
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                {content.results.savingsCaption} ({estimate.savingsPercent}%{' '}
                {content.results.lower})
              </p>

              <p className="mt-5 text-sm font-semibold leading-snug">
                {usesPlatform ? content.results.overpaying : content.results.switching}
              </p>

              <div className="mt-auto pt-8">
                <Link
                  href={content.cta.href}
                  className="block w-full rounded-full bg-brand-gradient py-3.5 text-center text-sm font-bold text-white transition hover:opacity-90"
                >
                  {content.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[var(--muted)]">{content.disclaimer}</p>
      </div>
    </section>
  );
}
