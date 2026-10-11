import type { ReactNode } from 'react';

const BRAND = 'CodesRaft';

function StoreBadge({ children, className }: { children: ReactNode; className: string }) {
  return (
    <span className={`grid size-9 place-items-center rounded-lg ${className}`}>{children}</span>
  );
}

function UpCircle({ size = 'size-12' }: { size?: string }) {
  return (
    <span
      className={`grid ${size} place-items-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30`}
    >
      <span className="grid size-2/3 place-items-center rounded-full bg-[var(--color-status-up)] text-white">
        <svg
          viewBox="0 0 20 20"
          className="size-1/2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        >
          <path d="M5 12l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>
  );
}

function StatRow({ color, label, value }: { color: string; label: string; value: number }) {
  return (
    <div className="flex items-center justify-between text-[9px] text-slate-300">
      <span className="flex items-center gap-1.5">
        <i className={`size-1.5 rounded-full ${color}`} />
        {label}
      </span>
      <span>{value}</span>
    </div>
  );
}

export function MobileVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[22%] top-12 flex gap-3">
        <StoreBadge className="bg-sky-500 text-white">
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M8 18l7-12M9 6l8 12M5 14h14" />
          </svg>
        </StoreBadge>
        <StoreBadge className="bg-transparent text-emerald-400">
          <svg viewBox="0 0 24 24" className="size-7" fill="currentColor">
            <path d="M5 3l14 9-14 9z" />
          </svg>
        </StoreBadge>
      </div>

      <div className="absolute left-[53%] top-6 h-[300px] w-[250px] overflow-hidden rounded-t-[28px] border border-slate-600/60 bg-[var(--background)] shadow-[0_0_60px_rgba(0,0,0,.6)]">
        <div className="flex items-center justify-between px-4 pt-3 text-[8px] text-slate-400">
          <span>9:41</span>
          <span className="h-3 w-16 rounded-full bg-black" />
          <span>●●●</span>
        </div>

        <div className="mt-3 flex items-center justify-between px-4">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--foreground)]">
            <i className="size-1.5 rounded-full bg-emerald-400" />
            {BRAND}
          </span>
          <span className="grid size-5 place-items-center rounded-md border border-[var(--border)] text-[8px] text-slate-400">
            ◉
          </span>
        </div>

        <div className="mx-3 mt-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-[10px] font-medium text-[var(--foreground)]">Current status</p>
          <div className="mt-2 flex items-center gap-4">
            <UpCircle size="size-14" />
            <div className="text-[9px] text-slate-400">
              <p className="text-base font-semibold leading-none text-[var(--foreground)]">6</p>
              <p>Up</p>
            </div>
            <div className="text-[9px] text-slate-400">
              <p className="text-base font-semibold leading-none text-[var(--foreground)]">1</p>
              <p>Paused</p>
            </div>
          </div>
        </div>

        <div className="mx-3 mt-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-[10px] font-medium text-[var(--foreground)]">Last 24 hours</p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-[9px] text-slate-400">
            <p>
              <b className="block text-sm text-[var(--foreground)]">4</b>Incidents
            </p>
            <p>
              <b className="block text-sm text-[var(--foreground)]">3</b>Affected monitors
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[8%] top-[112px] w-[190px] space-y-2">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)]/95 p-3 shadow-xl backdrop-blur">
          <p className="text-[9px] font-medium text-[var(--foreground)]">Current status</p>
          <div className="mt-2 flex items-center gap-3">
            <UpCircle size="size-9" />
            <div className="flex-1 space-y-1">
              <StatRow color="bg-rose-500" label="Down" value={0} />
              <StatRow color="bg-emerald-400" label="Up" value={6} />
              <StatRow color="bg-slate-500" label="Paused" value={1} />
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-[var(--border)] pt-2 text-[8px] text-slate-400">
            <span>
              Latest alert · <span className="text-slate-300">example.com</span>
            </span>
            <i className="size-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)]/95 p-2.5 text-[8px] shadow-xl backdrop-blur">
          <p className="text-slate-500">{BRAND}</p>
          <p className="font-medium text-[var(--foreground)]">Monitor is back up</p>
          <p className="text-slate-400">api.example.com is up again</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}
