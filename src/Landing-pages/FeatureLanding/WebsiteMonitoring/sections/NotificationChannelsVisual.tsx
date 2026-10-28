import { Bell, Mail, MessageSquare, Phone, type LucideIcon } from 'lucide-react';

interface ChannelRow {
  id: string;
  label: string;
  Icon: LucideIcon;
  detail?: string;
  note?: string;
}

const CHANNELS: ChannelRow[] = [
  { id: 'email', label: 'Email', Icon: Mail, detail: 'you@example.com' },
  { id: 'sms', label: 'SMS', Icon: MessageSquare, note: "The first monitor's threshold is 15 minutes" },
  { id: 'voice', label: 'Voice call', Icon: Phone },
  { id: 'push', label: 'Push notification', Icon: Bell },
];

const Toggle = () => (
  <span className="ml-auto inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-brand-blue p-0.5">
    <span className="h-4 w-4 translate-x-4 rounded-full bg-white" />
  </span>
);

export default function NotificationChannelsVisual() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
      <p className="text-sm font-semibold text-[var(--foreground)]">
        Alert notification channels.
      </p>

      <ul className="mt-4 space-y-3">
        {CHANNELS.map(({ id, label, Icon, detail, note }) => (
          <li
            key={id}
            className="flex items-center gap-3 rounded-lg bg-[color:var(--background)] px-3 py-2.5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
              <Icon className="h-4 w-4" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold text-[var(--foreground)]">{label}</span>
              {note ? (
                <span className="mt-0.5 block text-[10px] leading-snug text-[var(--color-status-warning)]">
                  {note}
                </span>
              ) : null}
              {detail ? (
                <span className="mt-0.5 block text-[10px] text-[var(--muted)]">{detail}</span>
              ) : null}
              {!note && !detail ? (
                <span className="mt-1 block h-2 w-20 rounded-full bg-[var(--border)]" />
              ) : null}
            </span>

            <Toggle />
          </li>
        ))}
      </ul>
    </div>
  );
}
