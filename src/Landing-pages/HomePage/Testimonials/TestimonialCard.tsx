import { Quote } from 'lucide-react';

import type { Testimonial } from './testimonials.data';

interface TestimonialCardProps {
  item: Testimonial;
}

function getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <figure className="relative flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lg">
      {item.isSample ? (
        <span className="absolute right-4 top-4 rounded-full bg-status-warning/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-status-warning">
          Sample
        </span>
      ) : null}

      <div>
        <Quote className="h-7 w-7 text-brand-blue/70" aria-hidden="true" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
          {item.company}
        </p>
        <blockquote className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {item.quote}
        </blockquote>
      </div>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white"
        >
          {getInitials(item.name)}
        </span>
        <span>
          <span className="block text-sm font-semibold">{item.name}</span>
          <span className="block text-xs text-[var(--muted)]">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
