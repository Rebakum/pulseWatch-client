import type { ComponentProps, ReactNode } from 'react';

type ShaderButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  href?: string; // href dile <a>, na dile <button>
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
    return (
      <a href={href} className={cls}>
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
