import { Upload } from 'lucide-react';

import { content } from './Content';
import UptimeBar from './UptimeBar';

// Illustration of a customizable status page, themed with project CSS variables.
export default function StatusPageMock({ brandName = 'PulseWatch' }: { brandName?: string }) {
  const { mock } = content;

  return (
    <div className="relative mx-auto w-full max-w-[580px] py-10">
      {/* Brand circle behind the card */}
      <div className="absolute right-0 top-1/2 aspect-square w-[68%] -translate-y-1/2 rounded-full bg-brand-gradient opacity-90" />

      <div className="relative z-10 w-[94%] rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl sm:p-6">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-brand-gradient" />
            <span className="font-bold">{brandName}</span>
            <span className="text-[var(--muted)]">| Service status</span>
          </p>
          <span className="flex h-6 w-24 items-center justify-center rounded bg-brand-gradient">
            <span className="h-2 w-14 rounded-sm bg-white/50" />
          </span>
        </div>

        {/* Logo upload */}
        <div className="mb-6 flex h-20 items-center justify-center gap-3 rounded-lg border border-dashed border-[var(--color-brand-blue)]/50 bg-[var(--color-brand-blue)]/10 text-sm font-semibold">
          <Upload className="h-5 w-5 text-[var(--color-brand-blue)]" aria-hidden />
          {mock.uploadLabel}
        </div>

        {/* Monitors */}
        <div className="space-y-5">
          {mock.monitors.map((m) => (
            <div key={m.name}>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--muted)]">{m.name}</span>
                <span className="font-bold text-[var(--color-status-up)]">Operational</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex w-16 shrink-0 items-center gap-1.5 text-xs font-bold text-[var(--color-status-up)] sm:w-20 sm:text-sm">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-status-up)]" />
                  {m.uptime}
                </span>
                <UptimeBar length={mock.historyLength} downAt={m.downAt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
