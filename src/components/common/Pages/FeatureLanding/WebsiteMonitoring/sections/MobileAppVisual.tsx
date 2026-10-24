import MonitorAlertCard from './MonitorAlertCard';

const DASHBOARD_ROWS = [0, 1, 2] as const;

export default function MobileAppVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl sm:-rotate-3">
        <div className="flex items-center justify-between gap-4">
          <div className="h-3 w-24 rounded-full bg-[var(--border)]" />
          <div className="h-6 w-16 rounded-lg bg-brand-blue/15" />
        </div>

        <div className="mt-4 space-y-2.5">
          {DASHBOARD_ROWS.map((row) => (
            <div
              key={row}
              className="flex items-center gap-3 rounded-lg bg-[color:var(--background)] px-3 py-2.5"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-status-up)]" />
              <span className="h-2.5 flex-1 rounded-full bg-[var(--border)]" />
              <span className="h-2.5 w-10 rounded-full bg-[var(--border)]" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 -mt-12 space-y-3 sm:ml-12">
        <MonitorAlertCard status="down" message="Down monitor detected!" />
        <MonitorAlertCard status="up" message="Monitor is back up!" />
      </div>
    </div>
  );
}
