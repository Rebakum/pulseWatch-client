import type { InputHTMLAttributes } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  hideLabel?: boolean;
}

const BASE_CLASSES =
  'block w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 disabled:cursor-not-allowed disabled:bg-[var(--surface)] disabled:text-[var(--muted)]';

const ERROR_CLASSES = 'border-status-down focus:border-status-down focus:ring-status-down/20';

export const Input = ({
  id,
  label,
  error,
  hint,
  hideLabel = false,
  className,
  ...rest
}: InputProps) => {
  const describedBy =
    error !== undefined ? `${id}-error` : hint !== undefined ? `${id}-hint` : undefined;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className={
          hideLabel ? 'sr-only' : 'block text-sm font-medium text-[var(--foreground)]'
        }
      >
        {label}
      </label>
      <input
        id={id}
        className={[BASE_CLASSES, error !== undefined ? ERROR_CLASSES : '', className ?? '']
          .filter(Boolean)
          .join(' ')}
        aria-invalid={error !== undefined || undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {error !== undefined ? (
        <p id={`${id}-error`} aria-live="polite" className="text-sm text-status-down">
          {error}
        </p>
      ) : hint !== undefined ? (
        <p id={`${id}-hint`} className="text-sm text-[var(--muted)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
};
