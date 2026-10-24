import { Clock } from 'lucide-react';

interface MonitorAlertCardProps {
  status: 'down' | 'up';
  message: string;
  time?: string;
}

const DOT = {
  down: 'bg-status-down shadow-[0_0_16px_var(--color-status-down)]',
  up: 'bg-status-up shadow-[0_0_16px_var(--color-status-up)]',
} as const;

export default function MonitorAlertCard({ status, message, time }: MonitorAlertCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.75)]">
      <span className={`mt-1 h-5 w-5 shrink-0 rounded-full ${DOT[status]}`} />

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
          PulseWatch
        </p>
        <p className="mt-1 text-base font-bold text-[var(--foreground)]">example.com</p>
        <p className="text-sm text-[var(--muted)]">{message}</p>
      </div>

      {time ? (
        <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
          <Clock className="h-3 w-3" />
          {time}
        </span>
      ) : null}
    </div>
  );
}
