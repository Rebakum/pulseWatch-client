import { Share2, ShieldCheck, Zap } from 'lucide-react';

const PIPE = {
  fill: 'none',
  stroke: 'var(--muted)',
  strokeOpacity: 0.55,
  strokeWidth: 7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Hub-and-spoke illustration: pure SVG, colored only with project CSS variables.
// Tiles use generic icons; swap them for official brand logos if you have permission.
export default function IntegrationsIllustration() {
  return (
    <svg
      viewBox="0 0 460 320"
      role="img"
      aria-label="Monitoring hub connected to alerting, security, dashboard and automation tools"
      className="mx-auto h-auto w-full max-w-[480px]"
    >
      <defs>
        <linearGradient id="int-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: 'var(--color-brand-blue)' }} />
          <stop offset="100%" style={{ stopColor: 'var(--color-brand-magenta)' }} />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="230" cy="165" r="125" fill="var(--surface)" stroke="var(--border)" />

      {/* Pipes */}
      <g {...PIPE}>
        <path d="M85 75 H168 Q178 75 178 85 V150 H205" />
        <path d="M88 240 H168 Q178 240 178 230 V175 H205" />
        <path d="M250 163 H330 Q340 163 340 153 V120" />
        <path d="M240 182 L258 200 H335 Q345 200 345 210 V226" />
      </g>

      {/* Hub cloud */}
      <path
        d="M205 180 a14 14 0 0 1 2 -28 a20 20 0 0 1 38 -6 a18 18 0 0 1 7 34 z"
        fill="url(#int-grad)"
      />
      <path
        d="M220 165 l8 8 l15 -17"
        fill="none"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Laptop */}
      <rect
        x="290"
        y="30"
        width="112"
        height="78"
        rx="5"
        fill="var(--surface)"
        stroke="var(--muted)"
        strokeWidth="3"
      />
      <rect x="280" y="108" width="132" height="6" rx="3" fill="var(--muted)" opacity="0.7" />
      <path
        d="M333 68 l9 9 l17 -20"
        fill="none"
        stroke="url(#int-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tiles */}
      <g className="drop-shadow-md">
        <rect
          x="42"
          y="52"
          width="44"
          height="44"
          rx="10"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <rect
          x="44"
          y="218"
          width="44"
          height="44"
          rx="10"
          fill="var(--surface)"
          stroke="var(--border)"
        />
        <rect
          x="324"
          y="226"
          width="44"
          height="44"
          rx="10"
          fill="var(--surface)"
          stroke="var(--border)"
        />
      </g>
      <Zap
        x={52}
        y={62}
        width={24}
        height={24}
        className="text-[var(--color-brand-purple)]"
        aria-hidden
      />
      <ShieldCheck
        x={54}
        y={228}
        width={24}
        height={24}
        className="text-[var(--color-brand-blue)]"
        aria-hidden
      />
      <Share2
        x={334}
        y={236}
        width={24}
        height={24}
        className="text-[var(--foreground)]"
        aria-hidden
      />
    </svg>
  );
}
