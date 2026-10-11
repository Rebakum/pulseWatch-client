import { Mail } from 'lucide-react';
import { Badge, type BadgeVariant } from '@/components/ui/Badge/Badge';

type UptimeSegmentState = 'up' | 'down' | 'paused';

interface MockMonitor {
  id: string;
  name: string;
  target: string;
  status: BadgeVariant;
  statusLabel: string;
  response: string;
  incidentNote?: string;
  segments: UptimeSegmentState[];
}

const SEGMENT_COUNT = 30;

const buildSegments = (
  overrides: Partial<Record<number, UptimeSegmentState>> = {},
): UptimeSegmentState[] =>
  Array.from({ length: SEGMENT_COUNT }, (_, index) => overrides[index] ?? 'up');

const buildUniformSegments = (state: UptimeSegmentState): UptimeSegmentState[] =>
  Array.from({ length: SEGMENT_COUNT }, () => state);

// Static placeholder monitors for the hero preview — not real data.
const MOCK_MONITORS: MockMonitor[] = [
  {
    id: 'mock-marketing-site',
    name: 'Marketing site',
    target: 'https://pulsewatch.dev',
    status: 'up',
    statusLabel: 'Up',
    response: '142 ms',
    segments: buildSegments(),
  },
  {
    id: 'mock-public-api',
    name: 'Public API',
    target: 'https://api.pulsewatch.dev',
    status: 'up',
    statusLabel: 'Up',
    response: '87 ms',
    segments: buildSegments(),
  },
  {
    id: 'mock-checkout-service',
    name: 'Checkout service',
    target: 'https://checkout.pulsewatch.dev',
    status: 'down',
    statusLabel: 'Down',
    response: 'Timed out',
    incidentNote: 'Incident detected 2 min ago',
    segments: buildSegments({ 26: 'down', 27: 'down', 28: 'down', 29: 'down' }),
  },
  {
    id: 'mock-staging-worker',
    name: 'Staging worker',
    target: 'ping 10.0.0.8',
    status: 'paused',
    statusLabel: 'Paused',
    response: '—',
    segments: buildUniformSegments('paused'),
  },
];

const SEGMENT_CLASSES: Record<UptimeSegmentState, string> = {
  up: 'bg-status-up',
  down: 'bg-status-down',
  paused: 'bg-status-paused/60',
};

const STATUS_DOT_CLASSES: Record<BadgeVariant, string> = {
  up: 'bg-status-up',
  down: 'bg-status-down',
  paused: 'bg-status-paused',
  warning: 'bg-status-warning',
  neutral: 'bg-[var(--muted)]',
};

// Static response-time samples (ms) for the sparkline — placeholder data.
const RESPONSE_TIME_SAMPLES = [
  42, 38, 40, 34, 36, 30, 33, 28, 31, 26, 29, 24, 27, 22, 25, 21, 24, 19, 22, 18, 21, 17, 20, 16,
  19, 15, 18, 14, 17, 13,
];

const SPARKLINE_POINTS = RESPONSE_TIME_SAMPLES.map(
  (value, index) => `${index * 9},${value}`,
).join(' ');

export const HeroMockup = () => (
  <div className="relative">
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-2xl shadow-brand-blue/10">
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-[var(--border)] px-4 py-3"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-status-down/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-status-warning/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-status-up/40" />
        <span className="ml-auto text-[10px] uppercase tracking-wider text-[var(--muted)]">
          Sample data
        </span>
      </div>

      <div className="px-4 py-4 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-[var(--foreground)]">Monitors</h3>
          <div className="flex items-center gap-1.5">
            <Badge variant="up">2 up</Badge>
            <Badge variant="down">1 down</Badge>
            <Badge variant="paused">1 paused</Badge>
          </div>
        </div>

        <ul className="mt-4 space-y-1">
          {MOCK_MONITORS.map((monitor) => (
            <li key={monitor.id} className="rounded-lg px-2 py-2 hover:bg-[var(--surface)]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  {monitor.status === 'up' ? (
                    <span
                      aria-hidden="true"
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-up opacity-60 motion-reduce:animate-none"
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={[
                      'relative inline-flex h-2.5 w-2.5 rounded-full',
                      STATUS_DOT_CLASSES[monitor.status],
                    ].join(' ')}
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--foreground)]">
                    {monitor.name}
                  </p>
                  <p className="truncate text-xs text-[var(--muted)]">{monitor.target}</p>
                </div>

                <span className="hidden shrink-0 text-xs tabular-nums text-[var(--muted)] sm:inline">
                  {monitor.response}
                </span>
                <Badge variant={monitor.status}>{monitor.statusLabel}</Badge>
              </div>

              {monitor.incidentNote ? (
                <p className="mt-1.5 pl-[22px] text-xs font-medium text-status-down">
                  {monitor.incidentNote}
                </p>
              ) : null}

              <div aria-hidden="true" className="mt-2 flex gap-[2px] pl-[22px]">
                {monitor.segments.map((segment, index) => (
                  <span
                    key={`${monitor.id}-segment-${index}`}
                    className={['h-1.5 flex-1 rounded-full', SEGMENT_CLASSES[segment]].join(' ')}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-[var(--muted)]">
              Response time · last 30 checks
            </p>
            <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">Sample data</p>
          </div>
          <svg
            viewBox="0 0 261 48"
            role="img"
            aria-label="Sample response time trend"
            className="mt-2 h-14 w-full"
          >
            <defs>
              <linearGradient id="hero-sparkline-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-brand-blue)" />
                <stop offset="100%" stopColor="var(--color-brand-magenta)" />
              </linearGradient>
            </defs>
            <polyline
              points={SPARKLINE_POINTS}
              fill="none"
              stroke="url(#hero-sparkline-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>

    <div className="absolute -bottom-4 -right-4 hidden items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 shadow-lg md:flex">
      <Mail aria-hidden="true" className="h-4 w-4 text-brand-blue" />
      <span className="text-xs font-medium text-[var(--foreground)]">Email alert sent</span>
    </div>
  </div>
);
