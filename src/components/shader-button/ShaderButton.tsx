import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';

type ShaderButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  className?: string;
} & Omit<ComponentProps<'button'>, 'children' | 'className'>;

export default function ShaderButton({
  children,
  icon,
  href,
  className = '',
  ...rest
}: ShaderButtonProps) {
  const cls = `shader-btn ${className}`;
  const inner = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    if (href.startsWith('/') || href.startsWith('#')) {
      return (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      );
    }

    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  );
}
