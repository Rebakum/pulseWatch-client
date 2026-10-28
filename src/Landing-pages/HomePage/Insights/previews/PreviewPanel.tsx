import type { ReactNode } from 'react';

interface PreviewPanelProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function PreviewPanel({ children, title, className = '' }: PreviewPanelProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-lg ${className}`}
    >
      {title ? <p className="mb-3 text-xs font-semibold">{title}</p> : null}
      {children}
    </div>
  );
}
