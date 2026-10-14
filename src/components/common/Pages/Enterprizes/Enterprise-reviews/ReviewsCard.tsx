import { Review } from './Revirws';

const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

// Stars use the gradient defined once in EnterpriseReviews (#rv-star-grad)
export default function ReviewCard({ review }: { review: Review }) {
  const rating = review.rating ?? 5;

  return (
    <article className="rv-card flex h-full flex-col p-6">
      <div className="rv-sheen" aria-hidden="true" />

      <div className="rv-body flex h-full flex-col">
        {/* Opening quote mark */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-4 h-8 w-8 opacity-15"
        >
          <path
            d="M7.2 6C4.9 7.6 3.5 10 3.5 13.1c0 2.9 1.8 4.9 4.3 4.9 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 1.7-3.2 3.4-4.2L7.2 6zm9.6 0c-2.3 1.6-3.7 4-3.7 7.1 0 2.9 1.8 4.9 4.3 4.9 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 1.7-3.2 3.4-4.2L16.8 6z"
            fill="url(#rv-star-grad)"
          />
        </svg>

        {/* Reviewer */}
        <div className="flex items-center gap-3">
          <span className="rv-avatar" aria-hidden="true">
            {initialsOf(review.name)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold leading-tight">{review.name}</p>
            {review.role && (
              <p className="mt-0.5 truncate text-[11px] leading-tight text-[var(--muted)]">
                {review.role}
              </p>
            )}
          </div>
        </div>

        {/* Stars */}
        <div className="mt-4 flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
              <path d={STAR_PATH} fill={i < rating ? 'url(#rv-star-grad)' : 'var(--border)'} />
            </svg>
          ))}
        </div>

        {/* Review */}
        <h3 className="mt-3 text-[15px] font-bold leading-snug">{review.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--foreground)]/75">{review.text}</p>

        {/* Source */}
        <p className="mt-auto pt-5 text-[11px] text-[var(--muted)]">
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
