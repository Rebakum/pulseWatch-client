import Container from '@/components/common/Container';
import { TrendingUp } from 'lucide-react';

import ReviewsCarousel from './ReviewsCarousel';
import { reviews } from './Revirws';

const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

export default function EnterpriseReviews({ brandName = 'PulseWatch' }: { brandName?: string }) {
  if (reviews.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-10 text-[var(--foreground)]">
      {/* Shared star gradient */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="rv-star-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--color-brand-blue)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-brand-magenta)' }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative brand circles */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-gradient opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-gradient opacity-10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center">
          {/* Premium badge */}
          <span className="rv-badge mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/70 px-4 py-1.5 text-xs font-semibold text-[var(--muted)] shadow-sm backdrop-blur">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
              <path d={STAR_PATH} fill="url(#rv-star-grad)" />
            </svg>
            Rated 4.9 / 5 by engineering teams
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why <span className="bg-brand-gradient bg-clip-text text-transparent">users trust</span>{' '}
            {brandName}
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>

          <p className="mx-auto mt-4 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
            <TrendingUp className="h-4 w-4 text-[var(--color-status-up)]" aria-hidden />
            Trusted by teams monitoring 40,000+ endpoints worldwide
          </p>
        </div>

        {/* Auto-play infinite-loop carousel */}
        <ReviewsCarousel reviews={reviews} />
      </Container>
    </section>
  );
}
