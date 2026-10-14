'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import ReviewCard from './ReviewCard';
import type { Review } from './reviews';

const AUTOPLAY_MS = 4000;

// Cards per slide: 1 on mobile, 2 on tablet, 3 on desktop
function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return perView;
}

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const perView = usePerView();

  // Not enough reviews to slide? Repeat them so the carousel still moves
  const base = reviews.length > perView ? reviews : [...reviews, ...reviews];
  const n = base.length;

  // Clones on both ends give the seamless infinite loop
  const slides = [...base.slice(-perView), ...base, ...base.slice(0, perView)];

  const [index, setIndex] = useState(perView);
  const [animate, setAnimate] = useState(false);
  const [paused, setPaused] = useState(false);

  // Reset position when the layout changes
  useEffect(() => {
    setAnimate(false);
    setIndex(perView);
  }, [perView, n]);

  const go = useCallback((delta: number) => {
    setAnimate(true);
    setIndex((i) => i + delta);
  }, []);

  const goTo = (i: number) => {
    setAnimate(true);
    setIndex(perView + i);
  };

  // Autoplay (pauses on hover/focus, off for reduced motion)
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, go]);

  // After sliding onto a clone, jump (without animation) to the real slide
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (index >= perView + n) {
      setAnimate(false);
      setIndex(index - n);
    } else if (index < perView) {
      setAnimate(false);
      setIndex(index + n);
    }
  };

  const active = ((((index - perView) % n) + n) % n) % reviews.length;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="-mx-2 overflow-hidden py-4">
        <div
          className={`flex ${animate ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((review, i) => (
            <div
              key={i}
              aria-hidden={i < perView || i >= perView + n}
              className="flex shrink-0 px-2"
              style={{ flexBasis: `${100 / perView}%` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--color-brand-blue)] hover:text-[var(--foreground)]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? 'w-6 bg-brand-gradient'
                  : 'w-2 bg-[var(--border)] hover:bg-[var(--muted)]'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next review"
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--muted)] transition-colors hover:border-[var(--color-brand-blue)] hover:text-[var(--foreground)]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
