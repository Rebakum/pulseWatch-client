'use client';

import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

import { PREVIEW_ROWS, PREVIEW_SEGMENT_COUNT } from './statusPages.constants';

const SEGMENTS = Array.from({ length: PREVIEW_SEGMENT_COUNT }, (_, index) => index);
const BACK_LAYERS = [
  'md:[transform:translateZ(-60px)]',
  'md:[transform:translateZ(-30px)]',
] as const;

export function StatusPagePreview() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  const motionClasses = isVisible
    ? 'translate-x-0 opacity-100'
    : 'translate-x-16 opacity-0 lg:translate-x-32';

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative h-72 transition-[translate,opacity] duration-1000 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:h-96 ${motionClasses}`}
    >
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl dark:opacity-30" />

      <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d] md:[transform:perspective(1400px)_rotateX(55deg)_rotateZ(-30deg)]">
        {BACK_LAYERS.map((layerClass) => (
          <div
            key={layerClass}
            className={`absolute h-52 w-[88%] max-w-[540px] rounded-xl border border-[var(--border)] bg-[var(--surface)] opacity-50 ${layerClass}`}
          />
        ))}

        <div className="relative w-[88%] max-w-[540px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
              <span className="h-3 w-3 rounded-sm bg-brand-gradient" />
              Your logo
            </span>
            <span className="h-4 w-8 rounded bg-status-up/20" />
          </div>

          <div className="space-y-4 p-4">
            <div className="flex items-center gap-2 rounded-lg bg-status-up/10 px-3 py-2.5 text-sm font-semibold text-status-up">
              <span className="h-2.5 w-2.5 rounded-full bg-status-up" />
              All systems operational
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold text-[var(--muted)]">Uptime</p>

              <div className="space-y-3">
                {PREVIEW_ROWS.map((row) => (
                  <div key={row.id} className="grid grid-cols-[64px_1fr_34px] items-center gap-3">
                    <span className={`h-2 rounded bg-[var(--border)] ${row.nameWidthClass}`} />
                    <div className="flex h-3 gap-px">
                      {SEGMENTS.map((segment) => (
                        <span
                          key={segment}
                          className={`flex-1 rounded-[1px] ${
                            segment === row.downAt ? 'bg-status-down' : 'bg-status-up'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-right text-[9px] text-[var(--muted)]">{row.uptime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
