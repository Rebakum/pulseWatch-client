'use client';

import { ChevronDown, Globe } from 'lucide-react';

import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

import { PREVIEW_MONITORS, PREVIEW_STATUS_DOT_CLASS } from './getStarted.constants';

export function GetStartedPreview() {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  const motionClasses = isVisible
    ? 'translate-x-0 opacity-100'
    : '-translate-x-12 opacity-0 lg:-translate-x-24';

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative order-2 h-80 transition-[translate,opacity] duration-1000 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:h-96 lg:order-1 ${motionClasses}`}
    >
      <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-25 blur-3xl dark:opacity-35" />

      {/* Monitors list (fades out at the bottom) */}
      <div className="absolute bottom-0 left-0 top-12 w-[82%] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
        <p className="mb-3 text-sm font-bold">Monitors</p>

        <ul className="space-y-2">
          {PREVIEW_MONITORS.map((monitor) => (
            <li
              key={monitor.id}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2"
            >
              <span
                className={`h-2 w-2 rounded-full ${PREVIEW_STATUS_DOT_CLASS[monitor.status]}`}
              />
              <span className="min-w-0">
                <span className="block truncate text-[11px] font-semibold">{monitor.name}</span>
                <span className="block truncate text-[9px] text-[var(--muted)]">{monitor.url}</span>
              </span>
              <span className="text-[10px] text-[var(--muted)]">{monitor.uptime}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* "Create monitor" modal */}
      <div className="absolute right-0 top-0 w-[62%] rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-2xl sm:w-[54%]">
        <p className="text-sm font-bold">
          Create your first{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">monitor.</span>
        </p>

        <p className="mt-3 text-[10px] font-semibold">What would you like to monitor?</p>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue">
            <Globe className="h-3.5 w-3.5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] font-semibold">Website</span>
            <span className="block truncate text-[8px] text-[var(--muted)]">
              Monitor a site, API or any HTTP(S) endpoint
            </span>
          </span>
          <ChevronDown className="h-3 w-3 shrink-0 text-[var(--muted)]" />
        </div>

        <p className="mt-3 text-[10px] font-semibold">URL to monitor</p>
        <div className="mt-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-[10px] text-[var(--muted)]">
          https://
        </div>
        <button className="mt-10 inline-flex justify-center items-center rounded-full bg-brand-gradient w-full text-center py-2.5 px-4 text-sm font-semibold text-white shadow-md transition hover:opacity-90">
          Create monitor
        </button>

        <p className="mt-2 text-[8px] leading-snug text-[var(--muted)]">
          You can add more monitor types later, such as keyword, ping and port checks.
        </p>
      </div>
    </div>
  );
}
