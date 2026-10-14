import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { integrations } from './integrations';

const card = 'rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-lg';

// Built with HTML + CSS variables only, so it follows the project theme.
export default function FeatureIllustration() {
  return (
    <div
      role="img"
      aria-label="Monitoring dashboard illustration showing status, response time and integrations"
      className="relative mx-auto h-[320px] w-full max-w-[440px]"
    >
      {/* Background circle */}
      <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60" />

      {/* Status pill */}
      <div
        className={`${card} absolute left-[6%] top-[10%] flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-[var(--color-status-up)] opacity-60 motion-safe:animate-ping" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--color-status-up)]" />
        </span>
        Operational
      </div>

      {/* Shield */}
      <div
        className={`${card} absolute right-[5%] top-[3%] flex h-14 w-14 items-center justify-center`}
      >
        <ShieldCheck className="h-6 w-6 text-[var(--color-brand-blue)]" aria-hidden />
      </div>

      {/* Response time chart */}
      <div className={`${card} absolute right-[2%] top-[33%] w-[66%] px-3 py-2.5`}>
        <svg viewBox="0 0 200 44" className="h-10 w-full" aria-hidden>
          <defs>
            <linearGradient id="adv-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" style={{ stopColor: 'var(--color-brand-blue)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-brand-magenta)' }} />
            </linearGradient>
          </defs>
          <path
            d="M0 26 L14 25 L26 27 L38 22 L48 26 L60 18 L70 28 L82 24 L92 12 L100 30 L112 22 L122 26 L134 8 L144 28 L156 20 L168 26 L180 16 L190 24 L200 22"
            fill="none"
            stroke="url(#adv-grad)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Settings list */}
      <div className={`${card} absolute bottom-[6%] left-[4%] w-[44%] space-y-3 p-4`}>
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-4 rounded bg-[var(--muted)]/50" />
            <span className="h-2 flex-1 rounded bg-[var(--border)]" />
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-4 rounded bg-[var(--muted)]/50" />
          <div className="relative h-2 flex-1 rounded bg-[var(--border)]">
            <span className="absolute inset-y-0 left-0 w-1/3 rounded bg-brand-gradient" />
          </div>
        </div>
      </div>

      {/* Integrations */}
      <ul className="absolute bottom-[4%] right-[8%] grid grid-cols-2 gap-2.5 [&>li:nth-child(even)]:translate-y-3">
        {integrations.map(({ name, icon: Icon, src }) => (
          <li
            key={name}
            title={name}
            className={`${card} flex h-10 w-10 items-center justify-center rounded-full shadow-md`}
          >
            {src ? (
              <Image src={src} alt={name} width={20} height={20} className="h-5 w-5" />
            ) : (
              Icon && <Icon className="h-4 w-4 text-[var(--color-brand-blue)]" aria-label={name} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
