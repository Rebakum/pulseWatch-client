import { Bell, Check, ChevronDown, Mail, MessageSquare, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import MonitorAlertCard from './MonitorAlertCard';

const CARD =
  'rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]';

/* ---------- shared: desktop-e 3D kata stage, mobile-e normal stack ---------- */
function Stage({ children, tilt = true }: { children: ReactNode; tilt?: boolean }) {
  const tiltClass = tilt
    ? 'lg:[transform:perspective(1400px)_rotateX(48deg)_rotateZ(-18deg)_scale(0.95)] lg:[mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]'
    : 'lg:[transform:rotate(-2deg)]';

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:h-[24rem]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/20 blur-[110px]" />
      <div
        className={`relative lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center ${tiltClass}`}
      >
        {children}
      </div>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-block h-4 w-8 shrink-0 rounded-full ${
        on ? 'bg-brand-gradient' : 'bg-[var(--border)]'
      }`}
    >
      <span
        className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${
          on ? 'left-[1.1rem]' : 'left-0.5'
        }`}
      />
    </span>
  );
}

/* ---------- Row 1: Monitor interval ---------- */
const INTERVALS = ['10 sec', '30 sec', '1 min', '5 min', '15 min'] as const;

export function IntervalVisual() {
  return (
    <Stage>
      <div className="w-full max-w-[26rem]">
        <div className={`${CARD} relative z-10 p-5`}>
          <p className="text-xs font-semibold text-[var(--foreground)]">Monitor interval</p>
          <p className="mt-0.5 text-[10px] text-[var(--muted)]">
            Your monitor will be checked every 30 seconds
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {INTERVALS.map((item) => {
              const active = item === '30 sec';
              return (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1 text-[10px] font-semibold ${
                    active
                      ? 'border-brand-blue/100 bg-brand-blue/20 text-brand-blue/100'
                      : 'border-[var(--border)] bg-[var(--background)] text-[var(--muted)]'
                  }`}
                >
                  {item}
                </span>
              );
            })}
          </div>

          <div className="mt-5 h-1.5 rounded-full bg-[var(--border)]">
            <div className="relative h-full w-1/4 rounded-full bg-brand-gradient">
              <span className="absolute -right-1.5 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-blue" />
            </div>
          </div>
        </div>

        <div className={`${CARD} -mt-3 ml-8 p-5`}>
          <p className="pt-3 text-xs font-semibold text-[var(--foreground)]">
            Region to monitor from
          </p>

          <div className="mt-3 flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[11px] text-[var(--foreground)]">
            Default location
            <ChevronDown className="h-3.5 w-3.5 text-[var(--muted)]" />
          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] text-[var(--muted)]">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-brand-gradient">
              <Check className="h-3 w-3 text-white" />
            </span>
            Default location (provided by PulseWatch)
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* ---------- Row 2: Alert notification channels ---------- */
const CHANNELS = [
  { icon: Mail, name: 'Email', value: 'name@example.com', on: true },
  { icon: MessageSquare, name: 'SMS', value: '+1 (555) 010-2030', on: true },
  { icon: Phone, name: 'Voice call', value: 'Not configured', on: false },
] as const;

export function ChannelsVisual() {
  return (
    <Stage tilt={false}>
      <div className="relative w-full max-w-[28rem]">
        <div className={`${CARD} p-5`}>
          <p className="text-xs font-semibold text-[var(--foreground)]">
            Alert notification channels
          </p>

          <div className="mt-4 space-y-2.5">
            {CHANNELS.map(({ icon: Icon, name, value, on }) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)]/70 px-3 py-2.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold text-[var(--foreground)]">{name}</p>
                  <p className="truncate text-[9px] text-[var(--muted)]">{value}</p>
                </div>
                <Toggle on={on} />
              </div>
            ))}

            <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)]/70 px-3 py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                <Bell className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-[var(--foreground)]">
                  Push notifications
                </p>
                <p className="text-[9px] text-[var(--muted)]">Sent to your devices</p>
              </div>
              <Toggle on />
            </div>
          </div>
        </div>

        <div
          className={`${CARD} relative z-10 -mt-4 ml-auto flex w-[62%] items-center gap-2 px-3 py-2.5`}
        >
          <span className="flex-1 rounded-md border border-[var(--border)] px-2 py-1 text-center text-[9px] font-semibold text-[var(--muted)]">
            Download iOS
          </span>
          <span className="flex-1 rounded-md bg-brand-gradient px-2 py-1 text-center text-[9px] font-semibold text-white">
            Download Android
          </span>
        </div>
      </div>
    </Stage>
  );
}

/* ---------- Row 3: Mobile app ---------- */
const PHONE_ROWS = [0, 1, 2, 3] as const;
const BARS = Array.from({ length: 16 }, (_, i) => i);

export function MobileVisual() {
  return (
    <Stage>
      <div className="relative w-full max-w-[28rem] lg:h-[20rem]">
        {/* phone frame (back) */}
        <div className={`${CARD} relative ml-auto w-[80%] rounded-[2rem] p-4 pt-8 lg:h-full`}>
          <span className="absolute left-1/2 top-3 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[var(--border)]" />
          <p className="text-[11px] font-semibold text-[var(--foreground)]">Monitors</p>

          <div className="mt-3 space-y-2 lg:mt-32">
            {PHONE_ROWS.map((row) => (
              <div
                key={row}
                className="flex items-center gap-2 rounded-lg bg-[var(--background)]/70 px-3 py-2"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-status-up" />
                <span className="h-2 w-12 shrink-0 rounded-full bg-[var(--border)]" />
                <div className="ml-auto flex items-center gap-[2px]">
                  {BARS.map((i) => (
                    <span key={i} className="h-3 w-[2px] rounded-full bg-status-up/80" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* alert cards (front) */}
        <div className="relative z-10 -mt-52 w-[78%] space-y-3 lg:absolute lg:left-0 lg:top-6 lg:mt-0">
          <MonitorAlertCard status="down" message="Down monitor detected!" time="now" />
          <MonitorAlertCard status="up" message="Monitor is back up!" />
        </div>
      </div>
    </Stage>
  );
}
