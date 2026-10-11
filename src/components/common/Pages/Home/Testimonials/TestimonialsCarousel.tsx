'use client';

import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from './testimonials.data';

interface TestimonialsCarouselProps {
  items: readonly Testimonial[];
}

const CARD_GAP_PX = 24;
const POSITION_TOLERANCE_PX = 4;
const AUTOPLAY_INTERVAL_MS = 4000;
const SCROLL_SETTLE_DELAY_MS = 150;

const controlClassName =
  'flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-brand-blue';

function getSetWidth(track: HTMLUListElement, itemCount: number): number {
  const firstCard = track.children[0] as HTMLElement | undefined;
  const firstClone = track.children[itemCount] as HTMLElement | undefined;
  if (!firstCard || !firstClone) return 0;
  return firstClone.offsetLeft - firstCard.offsetLeft;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  // Original cards + one identical copy, so the track can wrap around invisibly.
  const loopItems = [
    ...items.map((item) => ({ item, key: `${item.id}-original`, isClone: false })),
    ...items.map((item) => ({ item, key: `${item.id}-clone`, isClone: true })),
  ];

  // When the view reaches the copy, jump back by exactly one set (looks identical).
  const normalizePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const setWidth = getSetWidth(track, items.length);
    if (setWidth > 0 && track.scrollLeft >= setWidth - POSITION_TOLERANCE_PX) {
      track.scrollLeft -= setWidth;
    }
  }, [items.length]);

  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;

      const firstCard = track.firstElementChild as HTMLElement | null;
      const step = firstCard ? firstCard.offsetWidth + CARD_GAP_PX : track.clientWidth;
      const behavior = prefersReducedMotion() ? 'auto' : 'smooth';

      if (direction === 1) {
        normalizePosition();
      } else if (track.scrollLeft < step - POSITION_TOLERANCE_PX) {
        // Going back from the first card: first jump to the same view inside the copy.
        track.scrollLeft += getSetWidth(track, items.length);
      }

      track.scrollBy({ left: direction * step, behavior });
    },
    [items.length, normalizePosition],
  );

  const handleScroll = () => {
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    settleTimerRef.current = setTimeout(normalizePosition, SCROLL_SETTLE_DELAY_MS);
  };

  useEffect(() => {
    return () => {
      if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || isInteracting || prefersReducedMotion()) return;

    const timer = setInterval(() => scrollByCard(1), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPlaying, isInteracting, scrollByCard]);

  return (
    <div
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={() => setIsInteracting(false)}
    >
      <ul
        ref={trackRef}
        onScroll={handleScroll}
        tabIndex={0}
        aria-label="Customer feedback"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopItems.map(({ item, key, isClone }) => (
          <li
            key={key}
            aria-hidden={isClone || undefined}
            inert={isClone || undefined}
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <TestimonialCard item={item} />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous feedback"
          className={controlClassName}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => setIsPlaying((value) => !value)}
          aria-label={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
          aria-pressed={isPlaying}
          className={controlClassName}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next feedback"
          className={controlClassName}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
