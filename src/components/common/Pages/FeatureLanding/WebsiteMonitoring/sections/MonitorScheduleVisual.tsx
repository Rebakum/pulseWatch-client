const INTERVALS = ['10 sec', '30 sec', '1 min', '5 min', '15 min'] as const;
const TEAM_CHANNELS = [0, 1] as const;

export default function MonitorScheduleVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl sm:-rotate-3">
        <p className="text-xs font-semibold text-[var(--foreground)]">Monitor schedule</p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {INTERVALS.map((interval) => (
            <li
              key={interval}
              className={
                interval === '30 sec'
                  ? 'rounded-full border border-brand-blue/40 bg-brand-blue/15 px-2.5 py-1 text-[10px] font-semibold text-brand-blue'
                  : 'rounded-full border border-[var(--border)] bg-[color:var(--background)] px-2.5 py-1 text-[10px] text-[var(--muted)]'
              }
            >
              {interval}
            </li>
          ))}
        </ul>

        <div className="mt-4 space-y-2">
          <div className="h-2 w-full rounded-full bg-[var(--border)]" />
          <div className="h-2 w-2/3 rounded-full bg-[var(--border)]" />
        </div>
      </div>

      <div className="relative z-10 -mt-5 ml-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl sm:ml-14">
        <p className="text-xs font-semibold text-[var(--foreground)]">Channels for the team</p>
        <ul className="mt-3 space-y-2.5">
          {TEAM_CHANNELS.map((row) => (
            <li key={row} className="flex items-center gap-3">
              <span className="h-7 w-7 shrink-0 rounded-full bg-brand-blue/15" />
              <span className="flex-1 space-y-1.5">
                <span className="block h-2 w-24 rounded-full bg-[var(--border)]" />
                <span className="block h-2 w-16 rounded-full bg-[var(--border)]" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 -mt-3 ml-2 w-fit rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl sm:ml-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          Push notification
        </p>
        <p className="mt-1 text-xs text-[var(--foreground)]">Sent to your devices</p>
      </div>
    </div>
  );
}
