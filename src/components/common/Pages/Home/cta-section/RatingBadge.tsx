import { CTA } from './constants';
import G2Icon from './G2Icon';

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="size-5 text-status-warning" fill="currentColor" aria-hidden>
      <path d="M10 1.5l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L10 15.3l-5.4 2.9 1.1-6.1L1.2 7.9l6.1-.8L10 1.5z" />
    </svg>
  );
}

export default function RatingBadge() {
  return (
    <div className="inline-flex items-center gap-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 px-5 py-4 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-1.5">
        <p className="flex items-center gap-2 text-2xl font-semibold leading-none text-[var(--foreground)]">
          {CTA.rating.score}
          <Star />
        </p>
        <p className="text-xs text-[var(--muted)]">{CTA.rating.label}</p>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <p className="text-2xl font-semibold leading-none text-[var(--foreground)]">
          {CTA.reviews.count}
        </p>
        <p className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
          {CTA.reviews.label}
          <G2Icon />
        </p>
      </div>
    </div>
  );
}
