import { Activity, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const assurances = ['Contractual SLA', 'SSO & audit logs', 'SOC 2'];

export default function EnterpriseHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)] md:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 -top-48 h-[30rem] w-[30rem] rounded-full bg-brand-purple/15 blur-[120px]" />
        <div className="absolute -bottom-60 -left-40 h-[28rem] w-[28rem] rounded-full bg-brand-blue/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              The leading solution for{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                enterprise uptime
              </span>{' '}
              monitoring.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Get the uptime monitoring, alerting, and status pages your business depends on without
              paying observability-suite prices for features you&apos;ll never use.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              Backed by a contractual SLA, SSO, audit logs, and SOC 2, for up to 82% less than the
              cost of a full observability suite.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                className="shader-btn w-full gap-2 !rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto sm:text-base"
              >
                Book an Enterprise demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <Link
                href="/enterprise#savings"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition hover:border-brand-blue/50 hover:bg-brand-blue/5 sm:w-auto sm:text-base"
              >
                Calculate savings
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--muted)]">
              {assurances.map((assurance) => (
                <li key={assurance} className="inline-flex items-center gap-2">
                  <Check
                    className="h-4 w-4 shrink-0 text-brand-blue"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {assurance}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto flex min-h-[360px] w-full max-w-xl items-center justify-center sm:min-h-[440px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[min(78vw,25rem)] w-[min(78vw,25rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-[0.08] blur-2xl"
            />

            <div className="absolute left-1/2 top-1/2 h-[min(70vw,22rem)] w-[min(70vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-blue/10 bg-[var(--surface)]/40 shadow-[0_30px_100px_-50px_rgba(18,121,193,0.45)]" />

            <div className="relative w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-2xl shadow-brand-blue/10 backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Activity className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Service health</p>
                    <p className="mt-0.5 text-xs text-[var(--muted)]">Live monitoring overview</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Operational
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4">
                  <p className="text-xs text-[var(--muted)]">Availability</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">99.99%</p>
                  <div className="mt-3 flex h-8 items-end gap-1" aria-hidden="true">
                    {[40, 60, 48, 72, 58, 84, 68, 92, 74, 100, 82, 95].map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t-sm bg-brand-gradient opacity-80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4">
                  <p className="text-xs text-[var(--muted)]">Active monitors</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">24</p>
                  <p className="mt-3 text-xs font-medium text-brand-blue">All systems checked</p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold">Response time</p>
                  <p className="text-xs text-[var(--muted)]">Last 24 hours</p>
                </div>
                <div className="relative h-20 overflow-hidden rounded-lg bg-brand-blue/[0.04]">
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[var(--border)]" />
                  <svg
                    viewBox="0 0 400 80"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="enterprise-chart" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#1279c1" />
                        <stop offset="100%" stopColor="#85429a" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 56 C24 53 27 30 52 37 S83 60 108 43 S141 22 164 34 S193 57 218 42 S248 48 273 29 S306 39 329 25 S369 36 400 12"
                      fill="none"
                      stroke="url(#enterprise-chart)"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-0 hidden items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-3.5 shadow-xl backdrop-blur sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold">Enterprise ready</p>
                <p className="mt-0.5 text-[11px] text-[var(--muted)]">Security &amp; compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
