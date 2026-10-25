import type { ReactNode } from 'react';
import type { Tile } from './types';

const Glyph = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <span className={`text-sm font-bold leading-none ${className}`}>{children}</span>
);

const tiles: Tile[] = [
  // row 1
  {
    x: 17,
    y: 34,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5 text-rose-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="3" />
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <path d="M12 11l-4 4M12 11l4 4M9 17h6" />
      </svg>
    ),
  },
  {
    x: 39,
    y: 53,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 text-sky-400" fill="currentColor">
        <path d="M21 4L3 11l5 2 2 6 3-4 5 4 3-15zM9 13l8-6-6 7z" />
      </svg>
    ),
  },
  { x: 61, y: 33, icon: <Glyph className="text-orange-500 text-xl">✳</Glyph> },
  {
    x: 84,
    y: 51,
    icon: (
      <span className="grid size-6 place-items-center rounded-sm bg-brand-blue text-xs font-bold text-white">
        &gt;
      </span>
    ),
  },
  // row 2
  {
    x: 17,
    y: 93,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <path d="M9 4l-1 16" stroke="#36c5f0" />
        <path d="M16 4l-1 16" stroke="#2eb67d" />
        <path d="M4 9h16" stroke="#ecb22e" />
        <path d="M3.5 15h16" stroke="#e01e5a" />
      </svg>
    ),
  },
  {
    x: 39,
    y: 114,
    icon: (
      <span className="grid size-6 place-items-center rounded-md bg-indigo-500 text-xs font-bold text-white">
        T
      </span>
    ),
  },
  {
    x: 61,
    y: 93,
    icon: <Glyph className="font-mono text-xl tracking-tighter text-brand-blue-light">pd</Glyph>,
  },
  {
    x: 84,
    y: 116,
    icon: (
      <span className="grid size-6 place-items-center rounded-full bg-brand-blue-light/80 text-[10px] font-bold text-white">
        ▮●
      </span>
    ),
  },
  // row 3
  {
    x: 17,
    y: 156,
    icon: (
      <span className="grid size-6 place-items-center rounded-md bg-indigo-400 text-[10px] font-bold text-white">
        ◖◗
      </span>
    ),
  },
  {
    x: 39,
    y: 176,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5 text-brand-blue" fill="currentColor">
        <path d="M4 4h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    x: 61,
    y: 156,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <ellipse cx="12" cy="11" rx="8" ry="6.5" />
        <path d="M8 17l-2 4 5-3" />
      </svg>
    ),
  },
  { x: 84, y: 176, icon: <Glyph className="font-serif text-lg italic text-sky-400">P</Glyph> },
];

export function IntegrationsVisual() {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,transparent_0,transparent_11px,rgba(148,163,184,.12)_11px,rgba(148,163,184,.12)_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]"
      />

      <svg
        aria-hidden
        viewBox="0 0 447 280"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="curve" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#4a9fe0" stopOpacity="0" />
            <stop offset="0.45" stopColor="#4a9fe0" stopOpacity="0.7" />
            <stop offset="1" stopColor="#79bff0" stopOpacity="1" />
          </linearGradient>
          <filter id="glow" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <path
          d="M0 140 C70 138 150 128 190 142 C230 158 255 158 292 122 C330 86 372 70 410 58 L447 58"
          fill="none"
          stroke="#4a9fe0"
          strokeOpacity="0.5"
          strokeWidth="5"
          filter="url(#glow)"
        />
        <path
          d="M0 140 C70 138 150 128 190 142 C230 158 255 158 292 122 C330 86 372 70 410 58 L447 58"
          fill="none"
          stroke="url(#curve)"
          strokeWidth="1.6"
        />
      </svg>

      {tiles.map((t, i) => (
        <div
          key={i}
          className="absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[0_0_24px_rgba(0,0,0,.35)]"
          style={{ left: `${t.x}%`, top: t.y + 22 }}
        >
          {t.icon}
        </div>
      ))}
    </div>
  );
}
