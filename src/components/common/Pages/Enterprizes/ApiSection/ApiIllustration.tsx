import { Menu, Plus, TriangleAlert } from 'lucide-react';

// Built with HTML + CSS variables only, so it follows the project theme.
export default function ApiIllustration() {
  return (
    <div
      role="img"
      aria-label="Phone mockup showing a down-website push notification from the PulseWatch API"
      className="relative mx-auto h-[380px] w-full max-w-[440px]"
    >
      {/* Background circle */}
      <div className="absolute bottom-0 left-[4%] h-[290px] w-[290px] rounded-full bg-brand-gradient opacity-90" />

      {/* Phone */}
      <div className="absolute right-[6%] top-0 h-[360px] w-[170px] overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
        {/* App header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-slate-900 px-3 py-2.5">
          <Menu className="h-3.5 w-3.5 text-white/80" aria-hidden />
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-up)]" />
            PulseWatch
          </span>
          <Plus className="h-3.5 w-3.5 text-white/80" aria-hidden />
        </div>

        {/* Status gauge, half-hidden behind the header */}
        <div className="-mt-8 ml-auto mr-auto h-16 w-16 rounded-full bg-[var(--color-status-down)]" />

        {/* Skeleton feed */}
        <div className="mt-6 space-y-3 px-3">
          <span className="block h-2.5 w-14 rounded-full bg-white/90" />
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-12 rounded-full bg-[var(--color-status-down)]" />
            <span className="h-2.5 w-8 rounded-full bg-white/90" />
          </div>
          <span className="block h-2.5 w-20 rounded-full bg-slate-600" />
          <div className="flex items-center justify-between gap-2">
            <span className="h-2.5 w-16 rounded-full bg-white/90" />
            <span className="h-2.5 w-10 rounded-full bg-slate-600" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="h-2.5 w-14 rounded-full bg-slate-500" />
            <span className="h-2 w-2 rounded-full bg-[var(--color-status-up)]" />
          </div>
          <span className="block h-2.5 w-8 rounded-full bg-slate-600" />
        </div>
      </div>

      {/* Push notification */}
      <div className="absolute left-0 top-[52px] z-20 w-[92%] rounded-2xl bg-[var(--surface)] p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-status-down)]">
            <TriangleAlert className="h-4 w-4 text-white" aria-hidden />
          </span>
          <span className="h-3.5 flex-1 rounded-full bg-[var(--muted)]/40" />
          <span className="text-xs font-semibold uppercase text-[var(--muted)]">Now</span>
        </div>
        <p className="mt-3 text-base font-bold text-[var(--foreground)]">Your website is down!</p>
      </div>
    </div>
  );
}
