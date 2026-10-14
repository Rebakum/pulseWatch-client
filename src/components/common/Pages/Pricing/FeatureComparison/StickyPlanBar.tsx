'use client';

import { useEffect, useRef, useState } from 'react';

import PlanButton from './PlanButton';
import { GRID, plans } from './data';

// Sticky plan bar: gets a card background only once it sticks to the top
export default function StickyPlanBar() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      rootMargin: '-17px 0px 0px 0px',
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px" />
      <div
        className={`sticky top-4 z-20 rounded-2xl border px-2 py-4 transition-all duration-200 sm:px-4 ${GRID} ${
          stuck
            ? 'border-[var(--border)] bg-[var(--surface)]/95 shadow-lg backdrop-blur'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="hidden lg:block" />
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col items-center gap-1 px-1 text-center sm:px-2"
          >
            <h3 className="text-base font-bold sm:text-xl">{plan.name}</h3>
            <p className="mb-2 text-[11px] text-[var(--muted)] sm:text-xs">
              {plan.prefix ? `${plan.prefix} ` : ''}
              <strong className="text-[var(--foreground)]">{plan.price}</strong>
            </p>
            <PlanButton plan={plan} />
          </div>
        ))}
      </div>
    </>
  );
}
