import { Badge, type BadgeVariant } from '@/components/ui/Badge/Badge';
import { Card } from '@/components/ui/Card/Card';
import type { Monitor, MonitorStatus } from '@/types/monitor.types';

interface DashboardStat {
  label: string;
  value: string;
  note: string;
}

/*
 * PLACEHOLDER DATA — clearly marked on purpose.
 * The dashboard is wired to the API in a later task; these constants are
 * replaced by apiClient calls once the monitors/checks endpoints exist.
 */
const PLACEHOLDER_STATS: DashboardStat[] = [
  { label: 'Uptime (30 days)', value: '99.94%', note: 'Across all monitors' },
  { label: 'Monitors up', value: '11 / 12', note: '1 monitor needs attention' },
  { label: 'Open incidents', value: '1', note: 'Public API — down for 6 min' },
  { label: 'Avg response', value: '238 ms', note: 'Last 100 checks' },
];

const PLACEHOLDER_MONITORS: Monitor[] = [
  {
    id: 'ph-monitor-1',
    userId: 'ph-user-1',
    name: 'Marketing site',
    type: 'HTTP',
    url: 'https://your-site.com',
    intervalSeconds: 60,
    timeoutMs: 5000,
    expectedStatusCodes: [200, 301],
    status: 'UP',
    isPaused: false,
    createdAt: '2026-10-01T09:00:00.000Z',
    updatedAt: '2026-10-11T08:00:00.000Z',
  },
  {
    id: 'ph-monitor-2',
    userId: 'ph-user-1',
    name: 'Public API',
    type: 'HTTP',
    url: 'https://api.your-site.com/health',
    intervalSeconds: 30,
    timeoutMs: 5000,
    expectedStatusCodes: [200],
    status: 'DOWN',
    isPaused: false,
    createdAt: '2026-10-01T09:05:00.000Z',
    updatedAt: '2026-10-11T08:00:00.000Z',
  },
  {
    id: 'ph-monitor-3',
    userId: 'ph-user-1',
    name: 'Billing worker host',
    type: 'PING',
    url: 'ping 10.0.0.8',
    intervalSeconds: 120,
    timeoutMs: 3000,
    expectedStatusCodes: [],
    status: 'PAUSED',
    isPaused: true,
    createdAt: '2026-10-02T11:00:00.000Z',
    updatedAt: '2026-10-10T17:30:00.000Z',
  },
];

const STATUS_TO_BADGE: Record<MonitorStatus, BadgeVariant> = {
  UP: 'up',
  DOWN: 'down',
  PAUSED: 'paused',
  WARNING: 'warning',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Overview</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            A quick pulse of everything you monitor.
          </p>
        </div>
        <Badge variant="warning">Placeholder data</Badge>
      </div>

      <p className="rounded-lg border border-status-warning/40 bg-status-warning/5 px-4 py-3 text-sm text-status-warning">
        The values below are placeholder data. Live metrics arrive with the monitoring
        engine task.
      </p>

      <section aria-label="Key metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {PLACEHOLDER_STATS.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-slate-900 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{stat.note}</p>
          </Card>
        ))}
      </section>

      <Card title="Monitors" description="Status of your monitored endpoints.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Monitor
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Type
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Interval
                </th>
                <th scope="col" className="py-2 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {PLACEHOLDER_MONITORS.map((monitor) => (
                <tr key={monitor.id}>
                  <td className="py-3 pr-4">
                    <p className="font-medium text-slate-900 dark:text-white">{monitor.name}</p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                      {monitor.url}
                    </p>
                  </td>
                  <td className="py-3 pr-4 text-slate-600 dark:text-slate-300">{monitor.type}</td>
                  <td className="py-3 pr-4 tabular-nums text-slate-600 dark:text-slate-300">
                    {monitor.intervalSeconds}s
                  </td>
                  <td className="py-3">
                    <Badge variant={STATUS_TO_BADGE[monitor.status]}>{monitor.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
