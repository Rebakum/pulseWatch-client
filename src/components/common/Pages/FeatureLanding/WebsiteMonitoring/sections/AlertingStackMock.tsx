const CHART_HEIGHTS = [30, 55, 40, 70, 60, 85, 50, 75, 90, 65, 80, 95, 70, 88, 60, 78] as const;

const SIDE_ROWS = [
  { tone: 'bg-[var(--color-status-up)]' },
  { tone: 'bg-[var(--color-brand-purple)]' },
  { tone: 'bg-[var(--color-status-up)]' },
  { tone: 'bg-[var(--color-brand-purple)]' },
  { tone: 'bg-[var(--color-status-up)]' },
] as const;

/** CSS-only stack monitoring mock: main chart card with a channels panel behind. */
export default function AlertingStackMock() {
  return (
    <div className="relative min-h-[17rem]">
      <div className="absolute right-0 top-8 hidden w-36 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl sm:block">
        <p className="text-[8px] font-bold uppercase tracking-wide text-[var(--muted)]">Channels</p>
        <div className="mt-2 space-y-2">
          {SIDE_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${row.tone}`} />
              <span className="h-1.5 flex-1 rounded-full bg-[var(--border)]" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl sm:mr-10">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand-gradient text-[10px] font-bold text-white">
            P
          </span>
          <div>
            <p className="text-[11px] font-bold">PulseWatch</p>
            <p className="text-[9px] text-[var(--muted)]">Smart. Connected. Monitored.</p>
          </div>
          <span className="ml-auto rounded-full bg-[var(--color-status-up)]/15 px-2.5 py-1 text-[9px] font-bold text-[var(--color-status-up)]">
            UP
          </span>
        </div>

        <div className="mt-4 flex h-28 items-end gap-1">
          {CHART_HEIGHTS.map((height, barIndex) => (
            <span
              key={barIndex}
              style={{ height: `${height}%` }}
              className="flex-1 rounded-t-[3px] bg-gradient-to-t from-[var(--color-status-up)]/20 to-[var(--color-status-up)]"
            />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[9px] font-bold text-[var(--color-status-up)]">Uptime 99.99%</span>
          <span className="text-[9px] text-[var(--muted)]">Latency 142 ms</span>
        </div>
      </div>
    </div>
  );
}
