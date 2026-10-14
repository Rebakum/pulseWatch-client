'use client';

import { Check, X } from 'lucide-react';
import React, { useState } from 'react';

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Billing Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Unmatched affordability<span className="text-brand-blue">.</span>
              <br />
              Exceptional monitoring<span className="text-brand-blue">.</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-xs text-[var(--muted)]">Save ~15% with annual billing.</span>
            <div className="flex items-center gap-3 bg-[var(--surface)] px-4 py-2 rounded-full border border-[var(--border)]">
              <span
                className={`text-sm font-medium ${isAnnual ? 'text-[var(--foreground)]' : 'text-[var(--muted)]'}`}
              >
                Annual
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-12 h-6 bg-slate-700 rounded-full relative transition-colors cursor-pointer flex items-center p-1"
              >
                <div
                  className={`w-4 h-4 bg-brand-blue rounded-full transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}
                ></div>
              </button>
              <span
                className={`text-sm font-medium ${!isAnnual ? 'text-[var(--foreground)]' : 'text-[var(--muted)]'}`}
              >
                Monthly
              </span>
            </div>
          </div>
        </div>

        {/* Top 4 Cards Grid (Solo, Team, Scale, Enterprise) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Solo Plan */}
          <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Solo</h3>
              </div>
              <div className="text-xs text-[var(--muted)] mb-4 bg-[var(--background)] py-1.5 px-3 rounded-lg inline-block border border-[var(--border)]">
                10 monitors
              </div>
              <div className="mb-4 flex min-h-10 flex-wrap items-baseline gap-2">
                <span className="text-3xl font-extrabold line-through text-[var(--muted)]">
                  $10
                </span>
                <span className="text-4xl font-extrabold text-[var(--foreground)]">
                  {isAnnual ? '$9' : '$10'}
                </span>
                <span className="text-xs text-[var(--muted)]">/month</span>
              </div>
              <p className="mb-6 min-h-8 text-xs text-[var(--muted)]">
                Good for freelancers and small sites.
              </p>

              <button className="w-full py-3 bg-brand-gradient hover:opacity-90 text-white font-bold rounded-full mb-6 transition-opacity text-sm">
                Subscribe now
              </button>

              <div className="space-y-3 text-xs border-t border-[var(--border)] pt-6">
                <div className="font-semibold text-[var(--foreground)]">10 monitors</div>
                <div className="text-[var(--muted)]">+ 5 third party service monitor</div>
                <div className="text-[var(--muted)] pt-2">Everything in Free, plus:</div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 60-second monitoring
                  interval
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> All monitor types +
                  SSL &amp; DNS
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 3 status pages, own
                  domain
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 12-month data
                  retention
                </div>
              </div>
            </div>
          </div>

          {/* Team Plan (Featured/Most Popular) */}
          <div className="bg-[var(--surface)] p-6 rounded-2xl border-2 border-brand-blue flex flex-col justify-between relative shadow-lg shadow-brand-blue/20">
            <div className="absolute -top-3 right-6 bg-brand-gradient text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              ⭐ Most popular
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Team</h3>
              </div>
              <div className="text-xs text-[var(--muted)] mb-4 bg-[var(--background)] py-1.5 px-3 rounded-lg inline-block border border-[var(--border)]">
                100 monitors
              </div>
              <div className="mb-4 flex min-h-10 flex-wrap items-baseline gap-2">
                <span className="text-3xl font-extrabold line-through text-[var(--muted)]">
                  $41
                </span>
                <span className="text-4xl font-extrabold text-[var(--foreground)]">
                  {isAnnual ? '$35' : '$41'}
                </span>
                <span className="text-xs text-[var(--muted)]">/month</span>
              </div>
              <p className="mb-6 min-h-8 text-xs text-[var(--muted)]">
                For small teams running production services.
              </p>

              <button className="shader-btn w-full !rounded-full !py-3 font-bold text-white text-sm mb-6">
                Subscribe now
              </button>

              <div className="space-y-3 text-xs border-t border-[var(--border)] pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[var(--foreground)]">100 monitors</span>
                  <span className="text-[10px] bg-brand-blue/15 text-brand-blue px-2 py-0.5 rounded">
                    Best
                  </span>
                </div>
                <div className="text-[var(--muted)]">+20 Third party service monitors</div>
                <div className="text-[var(--muted)] pt-2">Everything in Solo, plus:</div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 30 sec. monitoring
                  interval
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 3 seats included
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 100 status pages,
                  white label
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Webhook, Zapier &amp;
                  PagerDuty
                </div>
              </div>
            </div>
          </div>

          {/* Scale Plan */}
          <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Scale</h3>
              </div>
              <div className="text-xs text-[var(--muted)] mb-4 bg-[var(--background)] py-1.5 px-3 rounded-lg inline-block border border-[var(--border)]">
                200 monitors
              </div>
              <div className="mb-4 flex min-h-10 flex-wrap items-baseline gap-2">
                <span className="text-3xl font-extrabold line-through text-[var(--muted)]">
                  $77
                </span>
                <span className="text-4xl font-extrabold text-[var(--foreground)]">
                  {isAnnual ? '$65' : '$77'}
                </span>
                <span className="text-xs text-[var(--muted)]">/month</span>
              </div>
              <p className="mb-6 min-h-8 text-xs text-[var(--muted)]">
                For high-volume, self-serve monitoring.
              </p>

              <button className="w-full py-3 bg-brand-gradient hover:opacity-90 text-white font-bold rounded-full mb-6 transition-opacity text-sm">
                Subscribe now
              </button>

              <div className="space-y-3 text-xs border-t border-[var(--border)] pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[var(--foreground)]">200 monitors</span>
                  <span className="text-[10px] bg-brand-blue/15 text-brand-blue px-2 py-0.5 rounded">
                    New
                  </span>
                </div>
                <div className="text-[var(--muted)]">+50 Third party service monitors</div>
                <div className="text-[var(--muted)] pt-2">Everything in Team, plus:</div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 15 sec. monitoring
                  interval
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 200 or 500 monitors
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 6 seats included
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Unlimited status pages
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Enterprise</h3>
              </div>
              <div className="mb-4 inline-block border border-transparent px-3 py-1.5 text-xs text-[var(--muted)] opacity-0">
                spacer
              </div>
              <div className="mb-4 flex min-h-10 flex-wrap items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[var(--foreground)]">Let's talk</span>
              </div>
              <p className="mb-6 min-h-8 text-xs text-[var(--muted)]">
                For custom scale, compliance &amp; procurement.
              </p>

              <button className="w-full py-3 bg-brand-gradient hover:opacity-90 text-white font-bold rounded-full mb-6 transition-opacity text-sm">
                Book a demo
              </button>

              <div className="space-y-3 text-xs border-t border-[var(--border)] pt-6">
                <div className="font-semibold text-[var(--foreground)]">Any amount you need</div>
                <div className="text-[var(--muted)] pt-2">Everything in Scale, plus:</div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Custom &amp; faster
                  monitoring intervals
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Dedicated CSM +
                  private Slack
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> SOC 2, DPA, MSA &amp;
                  security review
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> SLA + white-glove
                  onboarding
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Custom invoicing (PO,
                  wire, net terms)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Plan Bottom Banner */}
        <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--border)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-xl">
            <div className="flex items-baseline gap-4 mb-2">
              <h3 className="text-2xl font-bold">Free</h3>
              <div>
                <span className="text-3xl font-extrabold">$0</span>
                <span className="text-xs text-[var(--muted)]">/month</span>
              </div>
            </div>
            <p className="text-xs text-[var(--muted)]">
              Good for hobby and non-profit projects. No credit card required!
            </p>
          </div>

          <button className="px-6 py-3 border border-brand-blue text-brand-blue hover:bg-brand-blue/10 rounded-full font-medium text-sm transition-colors">
            Register now
          </button>
        </div>

        {/* Free Plan Features List */}
        <div className="mt-8 bg-[var(--surface)] p-8 rounded-2xl border border-[var(--border)]">
          <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-6">
            50 monitors
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[var(--color-status-up)]" /> 5 min. monitoring interval
            </div>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> Dependency monitoring
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[var(--color-status-up)]" /> HTTP, port &amp; ping
              monitor
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Keyword monitor
            </div>

            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> API monitoring
            </div>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> UDP monitoring
            </div>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> Location specific monitoring
            </div>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> Slow response alerts
            </div>

            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> DNS monitoring
            </div>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> SSL &amp; Domain exp. monitor
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Only 5 integrations
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[var(--color-status-up)]" /> Basic status pages
            </div>

            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> Notify contacts unavailable
            </div>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <X className="w-4 h-4 text-red-500" /> No login seats available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
