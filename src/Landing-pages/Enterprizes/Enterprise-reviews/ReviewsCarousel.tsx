'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import ReviewCard from './ReviewsCard';
import type { Review } from './Revirws';

const AUTOPLAY_MS = 4500;

function readPerView() {
  if (typeof window === 'undefined') return 3;
  const w = window.innerWidth;
  return w >= 1024 ? 3 : w >= 768 ? 2 : 1;
}

function Carousel({ reviews, perView }: { reviews: Review[]; perView: number }) {
  // Repeat a short list so there is always something to slide to
  const base = reviews.length > perView ? reviews : [...reviews, ...reviews];
  const n = base.length;

  // Clones on both ends give the seamless infinite loop
  const slides = [...base.slice(-perView), ...base, ...base.slice(0, perView)];

  const [index, setIndex] = useState(perView);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const go = useCallback((delta: number) => {
    setAnimate(true);
    setIndex((i) => i + delta);
  }, []);

  const goTo = (i: number) => {
    setAnimate(true);
    setIndex(perView + i);
  };

  // Autoplay: pauses on hover/focus, off for reduced motion
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  // After sliding onto a clone, jump (without animation) back to the real slide
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

  const active = (((index - perView) % n) + n) % n;

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

      {/* Premium controls */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="rv-nav-btn"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Reviews">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-7 bg-brand-gradient' : 'w-2 bg-[var(--border)] hover:bg-[var(--muted)]'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next review"
          className="rv-nav-btn"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => setPerView(readPerView());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Remount on breakpoint change so the clone math stays in sync
  return <Carousel key={perView} reviews={reviews} perView={perView} />;
}
