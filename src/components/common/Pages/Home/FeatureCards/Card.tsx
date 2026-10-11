import type { ReactNode } from 'react';
import { ArrowButton } from './ArrowButton';

export function Card({
  visual,
  title,
  text,
  href,
}: {
  visual: ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]">
      <div className="relative h-[260px] overflow-hidden sm:h-[280px]">{visual}</div>

      <div className="mt-auto flex items-end justify-between gap-6 p-6 pt-8 sm:px-6">
        <div className="max-w-sm">
          <h3 className="text-[15px] font-semibold leading-snug text-[var(--foreground)]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-sky-300/70">{text}</p>
        </div>
        <ArrowButton href={href} label={title} />
      </div>
    </article>
  );
}
