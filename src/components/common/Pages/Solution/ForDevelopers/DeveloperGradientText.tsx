import type { ReactNode } from 'react';

export default function DeveloperGradientText({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-[image:var(--background-image-brand-gradient)] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
