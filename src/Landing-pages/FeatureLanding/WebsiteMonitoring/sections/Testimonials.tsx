import Container from '@/components/common/Container';
import type { TestimonialsSectionData } from '@/types/landing';
import { Star } from 'lucide-react';
import SegmentedTitle from './SegmentedTitle';

const STARS = [0, 1, 2, 3, 4] as const;

interface TestimonialsProps {
  data: TestimonialsSectionData;
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <SegmentedTitle
          segments={data.title}
          className="mx-auto max-w-xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {data.items.map((item) => (
            <figure key={`${item.name}-${item.headline}`} className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {STARS.map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-brand-blue text-brand-blue"
                  />
                ))}
              </div>

              <figcaption className="mt-4">
                <p className="text-sm font-bold">{item.name}</p>
                {item.role ? <p className="mt-0.5 text-xs text-[var(--muted)]">{item.role}</p> : null}
              </figcaption>

              <p className="mt-3 text-sm font-bold leading-snug">{item.headline}</p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{item.body}</p>

              <p className="mt-auto pt-5 text-[11px] text-[var(--muted)]">
                Reviewed on{' '}
                <span className="font-semibold text-brand-blue">{item.source}</span>
              </p>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
