import ReviewsCarousel from './ReviewsCarousel';
import { reviews } from './reviews';

export default function TrustSection({ brandName = 'PulseWatch' }: { brandName?: string }) {
  if (reviews.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 max-w-md text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Why users trust {brandName}
          <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
        </h2>

        <ReviewsCarousel reviews={reviews} />
      </div>
    </section>
  );
}
