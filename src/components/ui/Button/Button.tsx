import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from '@/components/ui/Spinner/Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  href?: string;
  children: ReactNode;
}

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition disabled:cursor-not-allowed disabled:opacity-60';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-gradient text-white shadow-sm hover:brightness-110 hover:shadow-md',
  secondary:
    'border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--background)]',
  ghost: 'text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

const buildClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string => [BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className ?? ''].join(' ');

export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  href,
  className,
  children,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) => {
  const classes = buildClasses(variant, size, className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled ?? isLoading}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ? <Spinner size="sm" label="Loading" /> : null}
      {children}
    </button>
  );
};
