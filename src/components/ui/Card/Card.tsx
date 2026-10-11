import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const Card = ({ title, description, children, className, ...rest }: CardProps) => (
  <div
    className={[
      'rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900',
      className ?? '',
    ].join(' ')}
    {...rest}
  >
    {title !== undefined || description !== undefined ? (
      <div className="border-b border-slate-200 px-5 py-4 dark:border-slate-800">
        {title !== undefined ? (
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
        ) : null}
        {description !== undefined ? (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
        ) : null}
      </div>
    ) : null}
    <div className="p-5">{children}</div>
  </div>
);
