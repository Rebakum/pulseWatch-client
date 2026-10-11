import type { ReactNode } from 'react';

/**
 * FeatureCards — "Integrations" + "Monitor on the go" section
 * Tailwind v4 + your globals.css tokens (--background, --surface, --border, --muted, status colors).
 * The wrapper uses the `dark` class so this section is always dark, like the reference.
 */

const BRAND = 'CodesRaft'; // change to your product name

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

function ArrowButton({ href = '#', label }: { href?: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 transition hover:bg-emerald-400/15"
    >
      <svg
        viewBox="0 0 20 20"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function Card({
  visual,
  title,
  text,
  href,
}: {
  visual: ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]">
      <div className="relative h-[260px] overflow-hidden sm:h-[280px]">{visual}</div>

      <div className="mt-auto flex items-end justify-between gap-6 p-6 pt-8 sm:px-6">
        <div className="max-w-sm">
          <h3 className="text-[15px] font-semibold leading-snug text-[var(--foreground)]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-sky-300/70">{text}</p>
        </div>
        <ArrowButton href={href} label={title} />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Card 1 — integrations                                               */
/* ------------------------------------------------------------------ */

type Tile = { x: number; y: number; icon: ReactNode; active?: boolean };

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
      <span className="grid size-6 place-items-center rounded-sm bg-lime-600 text-xs font-bold text-white">
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
    icon: <Glyph className="font-mono text-xl tracking-tighter text-emerald-400">pd</Glyph>,
  },
  {
    x: 84,
    y: 116,
    icon: (
      <span className="grid size-6 place-items-center rounded-full bg-emerald-300/80 text-[10px] font-bold text-emerald-950">
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
      <svg viewBox="0 0 24 24" className="size-5 text-emerald-500" fill="currentColor">
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

function IntegrationsVisual() {
  return (
    <div className="absolute inset-0">
      {/* faint vertical grid lines behind the curve */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,transparent_0,transparent_11px,rgba(148,163,184,.12)_11px,rgba(148,163,184,.12)_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]"
      />

      {/* glowing uptime curve */}
      <svg
        aria-hidden
        viewBox="0 0 447 280"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="curve" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#34d399" stopOpacity="0" />
            <stop offset="0.45" stopColor="#34d399" stopOpacity="0.7" />
            <stop offset="1" stopColor="#6ee7b7" stopOpacity="1" />
          </linearGradient>
          <filter id="glow" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <path
          d="M0 140 C70 138 150 128 190 142 C230 158 255 158 292 122 C330 86 372 70 410 58 L447 58"
          fill="none"
          stroke="#34d399"
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

      {/* integration tiles */}
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

/* ------------------------------------------------------------------ */
/* Card 2 — mobile app                                                 */
/* ------------------------------------------------------------------ */

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

function MobileVisual() {
  return (
    <div className="absolute inset-0">
      {/* store badges */}
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

      {/* phone */}
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

      {/* floating status panel (overlaps phone, left side) */}
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

      {/* bottom fade so the phone dissolves into the card */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function FeatureCards() {
  return (
    <section className="dark bg-[var(--background)] py-16 text-[var(--foreground)]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <Card
          visual={<IntegrationsVisual />}
          title="Integrations that keep your whole team in the loop."
          text="From chat to incident management, we integrate with 20+ services so your team never misses a critical update."
          href="/integrations"
        />
        <Card
          visual={<MobileVisual />}
          title="Monitor on the go. Stay in control anywhere."
          text="Get real-time alerts and manage all your monitors from anywhere. Check statuses, pause monitors, and resolve incidents instantly."
          href="/mobile"
        />
      </div>
    </section>
  );
}
