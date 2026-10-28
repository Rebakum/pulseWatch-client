import { Quote } from 'lucide-react';
import { useId } from 'react';

import type { Review } from './reviews';

const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

export default function ReviewCard({ review }: { review: Review }) {
  const rating = review.rating ?? 5;
  const gradientId = useId();

  return (
    <article className="group relative h-full w-full rounded-3xl bg-linear-to-b from-[var(--border)] to-transparent p-px transition-all duration-300 hover:-translate-y-1 hover:from-[var(--color-brand-blue)]/50 hover:to-[var(--color-brand-magenta)]/30 hover:shadow-[0_24px_50px_-28px_color-mix(in_srgb,var(--color-brand-purple)_70%,transparent)]">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-[var(--surface)] p-6 sm:p-8">
        {/* Soft brand glow in the corner */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-gradient opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />
        <Quote className="absolute right-6 top-6 h-8 w-8 text-[var(--color-brand-purple)]/25" />

        {/* Brand-gradient stars */}
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style={{ stopColor: 'var(--color-brand-blue)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-brand-magenta)' }} />
            </linearGradient>
          </defs>
        </svg>
        <div className="mb-5 flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path d={STAR_PATH} fill={i < rating ? `url(#${gradientId})` : 'var(--border)'} />
            </svg>
          ))}
        </div>

        {/* Reviewer */}
        <p className="text-sm font-bold">{review.name}</p>
        {review.role && <p className="text-sm text-[var(--muted)]">{review.role}</p>}

        {/* Review */}
        <h3 className="mt-5 text-[15px] font-bold leading-snug">{review.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">{review.text}</p>

        {/* Source */}
        <p className="mt-auto border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
          Reviewed on{' '}
          <a
            href={review.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-brand-blue)] underline underline-offset-2 transition-colors hover:text-[var(--color-brand-magenta)]"
          >
            {review.source}
          </a>
        </p>
      </div>
    </article>
  );
}
