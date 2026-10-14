// All colors come from the global CSS variables, so the illustration follows light/dark theme.
const INK = 'var(--foreground)';
const BG = 'var(--background)';
const MUTED = 'var(--muted)';
const RED = 'var(--color-status-down)';
const BRAND = 'url(#clb-grad)';

type PersonProps = {
  x: number;
  y: number;
  flip?: boolean;
  headset?: boolean;
};

function Person({ x, y, flip = false, headset = true }: PersonProps) {
  const transform = flip ? `translate(${x + 100} ${y}) scale(-1 1)` : `translate(${x} ${y})`;

  return (
    <g transform={transform} strokeLinecap="round" strokeLinejoin="round">
      {/* torso */}
      <path
        d="M22 104 C22 76 34 62 50 62 C66 62 78 76 78 104 Z"
        fill={BG}
        stroke={INK}
        strokeWidth="3"
      />

      {/* head */}
      <circle cx="50" cy="36" r="18" fill={BG} stroke={INK} strokeWidth="3" />
      <path d="M33 33 C35 17 65 17 67 33" fill="none" stroke={INK} strokeWidth="3" />

      {headset && (
        <>
          <path d="M31 37 C31 22 69 22 69 37" fill="none" stroke={INK} strokeWidth="3" />
          <rect
            x="24"
            y="34"
            width="9"
            height="16"
            rx="4.5"
            fill={BG}
            stroke={INK}
            strokeWidth="3"
          />
          <rect
            x="67"
            y="34"
            width="9"
            height="16"
            rx="4.5"
            fill={BG}
            stroke={INK}
            strokeWidth="3"
          />
        </>
      )}

      {/* laptop */}
      <rect x="26" y="76" width="48" height="32" rx="5" fill={BG} stroke={INK} strokeWidth="3" />
      <path d="M34 86 h32 M34 95 h20" stroke={INK} strokeWidth="2.5" opacity="0.35" />
    </g>
  );
}

function Alert({ x, y }: { x: number; y: number }) {
  const rays = [
    [-18, 0],
    [-13, -13],
    [0, -18],
    [13, -13],
    [18, 0],
    [13, 13],
    [0, 18],
    [-13, 13],
  ];

  return (
    <g transform={`translate(${x} ${y})`} stroke={RED} strokeWidth="3" strokeLinecap="round">
      <circle r="7" fill={RED} stroke="none" />
      {rays.map(([dx, dy]) => (
        <line key={`${dx}-${dy}`} x1={dx * 0.6} y1={dy * 0.6} x2={dx} y2={dy} />
      ))}
    </g>
  );
}

function SpeechBubble({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 50 L12 66 L34 50 Z" fill={BG} stroke={INK} strokeWidth="3" />
      <rect x="0" y="0" width="66" height="50" rx="12" fill={BG} stroke={INK} strokeWidth="3" />
      {/* hides the bubble border where the tail joins */}
      <path d="M16 50 H34" stroke={BG} strokeWidth="5" />

      {/* shield with check */}
      <path
        d="M33 9 L48 15 V26 C48 34 41 40 33 43 C25 40 18 34 18 26 V15 Z"
        fill={BRAND}
        stroke={INK}
        strokeWidth="2.5"
      />
      <path d="M26 26 l5 5 l10 -11" fill="none" stroke="#ffffff" strokeWidth="3" />
    </g>
  );
}

export default function CollaborateIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] pt-10">
      {/* Brand circle behind the card (top-left, peeking out) */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 aspect-square w-[72%] rounded-full bg-brand-gradient opacity-90"
      />

      <div className="relative z-10 ml-[14%] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl sm:p-7">
        <svg
          viewBox="0 0 440 360"
          className="h-auto w-full"
          role="img"
          aria-label="Team members connected to a website, collaborating on monitors and incidents"
        >
          <defs>
            <linearGradient id="clb-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style={{ stopColor: 'var(--color-brand-blue)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-brand-magenta)' }} />
            </linearGradient>
          </defs>

          {/* decorative square behind the address bar */}
          <rect
            x="132"
            y="0"
            width="66"
            height="50"
            rx="8"
            fill="var(--color-brand-blue)"
            opacity="0.18"
          />

          {/* address bar */}
          <rect
            x="140"
            y="10"
            width="150"
            height="58"
            rx="16"
            fill={BG}
            stroke={INK}
            strokeWidth="3.5"
          />
          <circle cx="188" cy="39" r="16" fill={RED} />
          <text
            x="216"
            y="49"
            textAnchor="middle"
            fill={INK}
            fontSize="26"
            fontWeight="800"
            letterSpacing="1"
          >
            www
          </text>
          <g transform="translate(256 40)">
            <path
              d="M0 0 L0 24 L6 18 L11 27 L16 25 L11 16 L20 15 Z"
              fill={INK}
              stroke={BG}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>

          {/* dashed connections */}
          <g stroke={MUTED} strokeWidth="2.5" strokeDasharray="8 8" strokeLinecap="round">
            <path d="M190 72 L118 162" />
            <path d="M255 72 L345 162" />
            <path d="M222 72 L230 252" />
          </g>

          <Person x={60} y={150} />
          <Person x={295} y={150} flip />
          <Person x={180} y={240} headset={false} />

          <SpeechBubble x={252} y={258} />

          <Alert x={152} y={220} />
          <Alert x={392} y={220} />
          <Alert x={158} y={318} />
        </svg>
      </div>
    </div>
  );
}
