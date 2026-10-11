import { Check } from 'lucide-react';

import { LayeredPreview } from './LayeredPreview';
import { PreviewPanel } from './PreviewPanel';

const SCHEDULE_ROWS = [
  { label: 'Starts', value: 'Fri, 23:00' },
  { label: 'Duration', value: '30 minutes' },
] as const;

const OPTIONS = ['Show on status page', 'Pause alerts during the window'] as const;

const AFFECTED_MONITORS = [
  { id: 'a-1', name: 'Marketing site', isSelected: true },
  { id: 'a-2', name: 'Public API', isSelected: true },
  { id: 'a-3', name: 'Checkout', isSelected: true },
  { id: 'a-4', name: 'Docs', isSelected: false },
  { id: 'a-5', name: 'Blog', isSelected: false },
] as const;

export function MaintenancePreview() {
  return (
    <LayeredPreview
      main={
        <div className="space-y-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="text-sm font-bold">Edit Friday night maintenance</p>

          <PreviewPanel title="Monitors in this window" className="shadow-none">
            <ul className="space-y-2">
              {AFFECTED_MONITORS.map((monitor) => (
                <li key={monitor.id} className="flex items-center gap-2 text-[10px]">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded border ${
                      monitor.isSelected
                        ? 'border-brand-blue bg-brand-blue text-white'
                        : 'border-[var(--border)]'
                    }`}
                  >
                    {monitor.isSelected ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                  </span>
                  {monitor.name}
                </li>
              ))}
            </ul>
          </PreviewPanel>

          <PreviewPanel title="Description" className="shadow-none">
            <p className="text-[10px] leading-snug text-[var(--muted)]">
              Database upgrade. Brief interruptions are possible.
            </p>
          </PreviewPanel>
        </div>
      }
      floating={
        <>
          <PreviewPanel title="Next maintenance">
            <p className="text-[10px] text-[var(--muted)]">Friday night update</p>
            <p className="mt-1 text-lg font-bold">In 3 days</p>
          </PreviewPanel>

          <PreviewPanel title="Schedule">
            <dl className="space-y-2">
              {SCHEDULE_ROWS.map((row) => (
                <div key={row.label} className="flex justify-between text-[10px]">
                  <dt className="text-[var(--muted)]">{row.label}</dt>
                  <dd className="font-semibold">{row.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-3 space-y-2 border-t border-[var(--border)] pt-3">
              {OPTIONS.map((option) => (
                <li key={option} className="flex items-center justify-between gap-2 text-[10px]">
                  {option}
                  <span className="relative h-4 w-7 shrink-0 rounded-full bg-brand-blue">
                    <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" />
                  </span>
                </li>
              ))}
            </ul>
          </PreviewPanel>
        </>
      }
    />
  );
}
