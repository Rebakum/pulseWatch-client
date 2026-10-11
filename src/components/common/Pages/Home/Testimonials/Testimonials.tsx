import { TestimonialsCarousel } from './TestimonialsCarousel';
import { TESTIMONIALS } from './testimonials.data';

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-12 text-center">
        <h2
          id="testimonials-heading"
          className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
        >
          Built for teams that{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            can&apos;t afford downtime.
          </span>
        </h2>
      </div>

      <TestimonialsCarousel items={TESTIMONIALS} />
    </section>
  );
}
