const LINE =
  'M0 120 C60 118 110 122 160 112 C220 100 260 108 320 92 C380 76 430 80 490 60 C540 44 580 40 620 22';

/** Line color = text-status-up (from your @theme token) */
export default function ResponseChart() {
  return (
    <svg viewBox="0 0 620 150" preserveAspectRatio="none" className="h-full w-full text-status-up">
      <defs>
        <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 70, 110].map((y) => (
        <line key={y} x1="0" x2="620" y1={y} y2={y} className="stroke-[var(--border)]" />
      ))}
      <path d={`${LINE} L620 150 L0 150 Z`} fill="url(#chart-fill)" />
      <path d={LINE} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
