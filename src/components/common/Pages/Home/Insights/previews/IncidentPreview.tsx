import { AlertTriangle } from 'lucide-react';

import { PREVIEW_TIMELINE, PREVIEW_TONE_DOT_CLASS } from './insightPreview.data';
import { LayeredPreview } from './LayeredPreview';
import { PreviewPanel } from './PreviewPanel';

const INCIDENT_FACTS = [
  { label: 'Root cause', value: '503 Service Unavailable' },
  { label: 'Started', value: 'Today, 14:02' },
  { label: 'Duration', value: '14 m 30 s' },
] as const;

export function IncidentPreview() {
  return (
    <LayeredPreview
      main={
        <div className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-status-down/15 text-status-down">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">Ongoing incident on example.com</p>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-status-down">
                Ongoing
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-3">
            {INCIDENT_FACTS.map((fact) => (
              <PreviewPanel key={fact.label} className="p-3 shadow-none">
                <dt className="text-[9px] text-[var(--muted)]">{fact.label}</dt>
                <dd className="mt-1 text-[11px] font-semibold leading-snug">{fact.value}</dd>
              </PreviewPanel>
            ))}
          </dl>

          <PreviewPanel title="Activity log" className="shadow-none">
            <ol className="space-y-3 border-l border-[var(--border)] pl-4">
              {PREVIEW_TIMELINE.map((entry) => (
                <li key={entry.id} className="relative flex justify-between gap-3 text-[10px]">
                  <span
                    className={`absolute -left-[21px] top-1 h-2 w-2 rounded-full ${PREVIEW_TONE_DOT_CLASS[entry.tone]}`}
                  />
                  <span>{entry.label}</span>
                  <span className="shrink-0 text-[var(--muted)]">{entry.time}</span>
                </li>
              ))}
            </ol>
          </PreviewPanel>

          <PreviewPanel title="Comments" className="shadow-none">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[10px] text-[var(--muted)]">
              Add a note for your team…
            </div>
          </PreviewPanel>
        </div>
      }
      floating={
        <>
          <PreviewPanel title="Status">
            <p className="text-sm font-bold text-status-down">Ongoing</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Started today at 14:02</p>
          </PreviewPanel>

          <PreviewPanel title="Failed request">
            <p className="rounded-md bg-[var(--surface)] px-2 py-1.5 font-mono text-[10px]">
              GET https://example.com/
            </p>
            <p className="mt-2 text-[10px] text-status-down">503 Service Unavailable</p>
            <p className="text-[10px] text-[var(--muted)]">Response time: timed out</p>
          </PreviewPanel>
        </>
      }
    />
  );
}
