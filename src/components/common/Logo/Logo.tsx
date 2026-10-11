import Link from 'next/link';
import { useId } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className, showText = true }: LogoProps) => {
  const gradientId = `pulsewatch-logo-gradient-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <Link
      href="/"
      aria-label="PulseWatch home"
      className={['inline-flex items-center gap-2', className ?? ''].join(' ')}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="h-7 w-7 shrink-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-blue)" />
            <stop offset="100%" stopColor="var(--color-brand-magenta)" />
          </linearGradient>
        </defs>
        <path
          d="M2 12h4l2.5-6 3.5 12 3-8 1.5 2H22"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showText ? (
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-brand-blue">Pulse</span>
          <span className="text-brand-purple dark:text-brand-magenta">Watch</span>
        </span>
      ) : null}
    </Link>
  );
};
