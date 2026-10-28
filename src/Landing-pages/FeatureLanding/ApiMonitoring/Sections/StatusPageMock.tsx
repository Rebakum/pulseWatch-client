const SERVICES = [
  { label: 'Website', uptime: '100%' },
  { label: 'API', uptime: '99.99%' },
  { label: 'CDN', uptime: '99.98%' },
  { label: 'Database', uptime: '100%' },
] as const;

const BAR_PATTERN = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1] as const;

/** CSS-only public status page mock (tilted product card on large screens). */
export default function StatusPageMock() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 rounded-full bg-brand-purple/20 blur-3xl" />

      <div className="mx-auto max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl lg:-rotate-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold">WebsiteStatus</span>
          <span className="rounded-full bg-[var(--color-status-up)]/15 px-2.5 py-1 text-[9px] font-bold text-[var(--color-status-up)]">
            Status uptime
          </span>
        </div>

        <div className="mt-4">
          <p className="text-sm font-bold text-[var(--color-status-up)]">All systems operational</p>
          <p className="mt-0.5 text-[9px] text-[var(--muted)]">Updated 1 min ago</p>
        </div>

        <div className="mt-4 space-y-2.5">
          {SERVICES.map((service) => (
            <div key={service.label} className="flex items-center gap-3">
              <span className="w-14 shrink-0 text-[9px] text-[var(--muted)]">{service.label}</span>
              <div className="flex flex-1 gap-[3px]">
                {BAR_PATTERN.map((on, barIndex) => (
                  <span
                    key={barIndex}
                    className={`h-4 flex-1 rounded-[2px] ${
                      on ? 'bg-[var(--color-status-up)]' : 'bg-[var(--color-status-up)]/35'
                    }`}
                  />
                ))}
              </div>
              <span className="w-9 shrink-0 text-right text-[9px] font-semibold text-[var(--color-status-up)]">
                {service.uptime}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
