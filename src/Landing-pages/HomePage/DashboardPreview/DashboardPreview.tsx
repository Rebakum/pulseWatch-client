import {
  Activity,
  AlertCircle,
  BarChart3,
  BellRing,
  CheckCircle2,
  Globe,
  Layers,
  Lock,
  Pause,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section
      aria-label="Dashboard preview"
      className="bg-[var(--background)] py-10 text-[var(--foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl backdrop-blur-md sm:p-4">
          {/* Outer Glow Effect */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gradient opacity-15 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--color-brand-blue)] opacity-10 blur-[120px] pointer-events-none rounded-full" />

          {/* Main Container */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden shadow-inner flex flex-col md:flex-row min-h-[580px] text-[var(--foreground)]">
            {/* Left Sidebar */}
            <aside className="w-full md:w-60 border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--surface)]/50 p-4 flex flex-col justify-between shrink-0">
              <div className="space-y-6">
                {/* Logo Brand */}
                <div className="flex items-center gap-2 px-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-status-up)] animate-pulse" />
                  <span className="font-bold text-base tracking-tight text-[var(--foreground)]">
                    CodesRaft <span className="text-[var(--color-brand-blue)]">Uptime</span>
                  </span>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-brand-gradient text-white font-medium text-xs sm:text-sm shadow-sm transition-all">
                    <Activity className="w-4 h-4" />
                    <span>Monitoring</span>
                  </button>

                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] text-xs sm:text-sm transition-all">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-4 h-4" />
                      <span>Incidents</span>
                    </div>
                    <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-[var(--color-status-down)]/10 text-[var(--color-status-down)] font-bold">
                      0
                    </span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] text-xs sm:text-sm transition-all">
                    <Globe className="w-4 h-4" />
                    <span>Status Pages</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] text-xs sm:text-sm transition-all">
                    <Wrench className="w-4 h-4" />
                    <span>Maintenance</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] text-xs sm:text-sm transition-all">
                    <Users className="w-4 h-4" />
                    <span>Team Members</span>
                  </button>

                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] text-xs sm:text-sm transition-all">
                    <Layers className="w-4 h-4" />
                    <span>Integrations & API</span>
                  </button>
                </nav>
              </div>

              {/* Quick Info Box */}
              <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xs space-y-1 mt-6">
                <p className="text-[var(--muted)]">Active Plan</p>
                <p className="font-semibold text-[var(--color-brand-blue)]">Pro Monitoring</p>
              </div>
            </aside>

            {/* Main Content Dashboard Area */}
            <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-x-auto">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-status-up)]/15 border border-[var(--color-status-up)]/30 flex items-center justify-center text-[var(--color-status-up)] shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold tracking-tight">yourwebsite.com</h2>
                      <span className="px-2 py-0.5 text-[10px] rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]">
                        HTTP(S)
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted)] flex items-center gap-2 mt-0.5">
                      <span>Client 1</span> • <span>Server Europe (Frankfurt)</span>
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--border)] text-xs font-medium transition-all">
                    <BellRing className="w-3.5 h-3.5 text-[var(--color-brand-blue)]" />
                    <span>Test alert</span>
                  </button>
                  <button className="p-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-all">
                    <Pause className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] transition-all">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Top Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Status Card */}
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between">
                  <span className="text-xs text-[var(--muted)]">Current status</span>
                  <div className="mt-2">
                    <span className="text-xl font-bold text-[var(--color-status-up)] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-status-up)] animate-ping" />
                      Up
                    </span>
                    <p className="text-[11px] text-[var(--muted)] mt-1">
                      Currently up for 12d, 18h, 42m
                    </p>
                  </div>
                </div>

                {/* Last Check Card */}
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between">
                  <span className="text-xs text-[var(--muted)]">Last check</span>
                  <div className="mt-2">
                    <span className="text-xl font-bold">14 seconds ago</span>
                    <p className="text-[11px] text-[var(--muted)] mt-1">Checked every 60 seconds</p>
                  </div>
                </div>

                {/* Last 24 Hours Bar Chart */}
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--muted)]">Last 24 hours</span>
                    <span className="font-bold text-[var(--color-status-up)]">100%</span>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-6 rounded-sm bg-[var(--color-status-up)] opacity-90 hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-[var(--muted)] mt-2">0 incidents, 0m down</p>
                </div>

                {/* Security & Domain */}
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between">
                  <span className="text-xs text-[var(--muted)]">Domain & SSL Status</span>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--muted)] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-brand-blue)]" /> SSL
                        Valid
                      </span>
                      <span className="font-semibold text-xs">248 days</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--muted)] flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-[var(--color-brand-purple)]" /> Expiry
                      </span>
                      <span className="font-semibold text-xs">Dec 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Uptime Stats Grid */}
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    Uptime Statistics
                  </h3>
                  <span className="text-xs text-[var(--color-brand-blue)] font-medium cursor-pointer">
                    View detailed logs →
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                  <div>
                    <p className="text-xs text-[var(--muted)]">Last 7 days</p>
                    <p className="text-lg font-bold text-[var(--color-status-up)]">100%</p>
                    <p className="text-[10px] text-[var(--muted)]">0 incidents</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Last 30 days</p>
                    <p className="text-lg font-bold text-[var(--color-status-up)]">99.999%</p>
                    <p className="text-[10px] text-[var(--muted)]">1 incident, 2m down</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Last 365 days</p>
                    <p className="text-lg font-bold text-[var(--color-status-up)]">99.98%</p>
                    <p className="text-[10px] text-[var(--muted)]">3 incidents, 14m down</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)]">Next Maintenance</p>
                    <p className="text-sm font-semibold mt-1">Friday 02:00 UTC</p>
                    <p className="text-[10px] text-[var(--muted)]">In 3 days</p>
                  </div>
                </div>
              </div>

              {/* Response Time Chart Graph Mockup */}
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[var(--color-brand-blue)]" />
                    <h3 className="text-xs font-semibold">Response Time (ms)</h3>
                  </div>
                  <span className="text-xs text-[var(--muted)] bg-[var(--background)] px-2 py-1 rounded border border-[var(--border)]">
                    Last 30 days
                  </span>
                </div>

                {/* SVG Visual Graph Curve */}
                <div className="h-28 w-full relative pt-2">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 500 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-brand-blue)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--color-brand-blue)" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area Fill */}
                    <path
                      d="M0,80 Q50,75 100,78 T200,70 T250,20 T300,75 T400,65 T500,70 L500,100 L0,100 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Line Path */}
                    <path
                      d="M0,80 Q50,75 100,78 T200,70 T250,20 T300,75 T400,65 T500,70"
                      fill="none"
                      stroke="var(--color-brand-blue)"
                      strokeWidth="2.5"
                    />
                    {/* Peak Indicator */}
                    <circle
                      cx="250"
                      cy="20"
                      r="4"
                      fill="var(--color-brand-magenta)"
                      className="animate-ping"
                    />
                    <circle cx="250" cy="20" r="4" fill="var(--color-brand-magenta)" />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[10px] text-[var(--muted)] pt-1 border-t border-[var(--border)]">
                  <span>
                    Avg: <strong className="text-[var(--foreground)]">142ms</strong>
                  </span>
                  <span>
                    Min: <strong className="text-[var(--foreground)]">89ms</strong>
                  </span>
                  <span>
                    Max: <strong className="text-[var(--foreground)]">410ms</strong>
                  </span>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
