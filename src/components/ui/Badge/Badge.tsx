import type { ReactNode } from 'react';

export type BadgeVariant = 'up' | 'down' | 'paused' | 'warning' | 'neutral';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  up: 'bg-status-up/10 text-status-up',
  down: 'bg-status-down/10 text-status-down',
  paused: 'bg-status-paused/10 text-status-paused',
  warning: 'bg-status-warning/10 text-status-warning',
  neutral: 'bg-[var(--surface)] text-[var(--muted)]',
};

const STATUS_VARIANTS: BadgeVariant[] = ['up', 'down', 'paused', 'warning'];

export const Badge = ({ variant = 'neutral', children, className }: BadgeProps) => {
  const showDot = STATUS_VARIANTS.includes(variant);

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        VARIANT_CLASSES[variant],
        className ?? '',
      ].join(' ')}
    >
      {showDot ? (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      ) : null}
      {children}
    </span>
  );
};
