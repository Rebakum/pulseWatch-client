import { PREVIEW_RESPONSE_STATS } from './insightPreview.data';
import { LayeredPreview } from './LayeredPreview';
import { MonitorDashboardMock } from './MonitorDashboardMock';
import { PreviewPanel } from './PreviewPanel';

export function ResponseTimePreview() {
  return (
    <LayeredPreview
      main={<MonitorDashboardMock statusLabel="Slow response" tone="warning" />}
      floating={
        <>
          <PreviewPanel title="Response time · 30 days">
            <dl className="space-y-2">
              {PREVIEW_RESPONSE_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between text-[11px]">
                  <dt className="text-[var(--muted)]">{stat.label}</dt>
                  <dd className="font-bold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </PreviewPanel>

          <PreviewPanel>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-status-warning" />
              <div>
                <p className="text-[11px] font-semibold">Slowdown detected</p>
                <p className="mt-0.5 text-[10px] leading-snug text-[var(--muted)]">
                  Response time rose to 420 ms, about 3x the usual average.
                </p>
              </div>
            </div>
          </PreviewPanel>
        </>
      }
    />
  );
}
