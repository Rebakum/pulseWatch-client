import { buildLinePoints } from '@/utils/buildLinePoints';

import { PREVIEW_RESPONSE_TIMES } from './insightPreview.data';
import { PreviewPanel } from './PreviewPanel';

type MonitorTone = 'up' | 'warning';

interface MonitorDashboardMockProps {
  statusLabel: string;
  tone: MonitorTone;
}

const TONE_TEXT_CLASS: Record<MonitorTone, string> = {
  up: 'text-status-up',
  warning: 'text-status-warning',
};

const TONE_DOT_CLASS: Record<MonitorTone, string> = {
  up: 'bg-status-up',
  warning: 'bg-status-warning',
};

const CHART_WIDTH = 600;
const CHART_HEIGHT = 110;
const LINE_POINTS = buildLinePoints(PREVIEW_RESPONSE_TIMES, CHART_WIDTH, CHART_HEIGHT);
const AREA_POINTS = `0,${CHART_HEIGHT} ${LINE_POINTS} ${CHART_WIDTH},${CHART_HEIGHT}`;

const UPTIME_STATS = [
  { label: 'Last 7 days', value: '100%', detail: '0 incidents' },
  { label: 'Last 30 days', value: '99.999%', detail: '1 incident, 12 m down' },
  { label: 'Last 365 days', value: '99.95%', detail: '5 incidents' },
] as const;

const LATEST_INCIDENTS = [
  { id: 'i-1', status: 'Ongoing', reason: '503 Service Unavailable', isOngoing: true },
  { id: 'i-2', status: 'Resolved', reason: 'Connection timeout', isOngoing: false },
] as const;

export function MonitorDashboardMock({ statusLabel, tone }: MonitorDashboardMockProps) {
  return (
    <div className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${TONE_DOT_CLASS[tone]}`} />
        <div>
          <p className="text-sm font-semibold">example.com</p>
          <p className="text-[9px] text-[var(--muted)]">HTTP/S monitor for https://example.com/</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <PreviewPanel className="p-3 shadow-none">
          <p className="text-[9px] text-[var(--muted)]">Current status</p>
          <p className={`mt-1 text-sm font-bold ${TONE_TEXT_CLASS[tone]}`}>{statusLabel}</p>
        </PreviewPanel>
        <PreviewPanel className="p-3 shadow-none">
          <p className="text-[9px] text-[var(--muted)]">Last check</p>
          <p className="mt-1 text-sm font-bold">26 s ago</p>
        </PreviewPanel>
        <PreviewPanel className="p-3 shadow-none">
          <p className="text-[9px] text-[var(--muted)]">Last 24 hours</p>
          <div className="mt-2 flex h-3 gap-px">
            {Array.from({ length: 20 }, (_, index) => (
              <span key={index} className="flex-1 rounded-[1px] bg-status-up" />
            ))}
          </div>
        </PreviewPanel>
      </div>

      <PreviewPanel title="Uptime stats" className="shadow-none">
        <div className="grid grid-cols-3 gap-3">
          {UPTIME_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-[9px] text-[var(--muted)]">{stat.label}</p>
              <p className="mt-0.5 text-sm font-bold text-status-up">{stat.value}</p>
              <p className="text-[9px] text-[var(--muted)]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </PreviewPanel>

      <PreviewPanel title="Response time" className="shadow-none">
        <svg
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          preserveAspectRatio="none"
          className="h-20 w-full"
        >
          <polygon points={AREA_POINTS} className="fill-brand-blue/10" />
          <polyline
            points={LINE_POINTS}
            fill="none"
            strokeWidth="2"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className="stroke-brand-blue"
          />
        </svg>
      </PreviewPanel>

      <PreviewPanel title="Latest incidents" className="shadow-none">
        <ul className="space-y-2 text-[10px]">
          {LATEST_INCIDENTS.map((incident) => (
            <li key={incident.id} className="flex items-center justify-between">
              <span
                className={`rounded px-1.5 py-0.5 font-semibold ${
                  incident.isOngoing
                    ? 'bg-status-down/15 text-status-down'
                    : 'bg-status-up/15 text-status-up'
                }`}
              >
                {incident.status}
              </span>
              <span className="text-[var(--muted)]">{incident.reason}</span>
            </li>
          ))}
        </ul>
      </PreviewPanel>
    </div>
  );
}
