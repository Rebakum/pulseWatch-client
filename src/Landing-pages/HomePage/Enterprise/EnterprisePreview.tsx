'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { ENTERPRISE_PREVIEW_SRC } from './enterprise.constants';

const REVEAL_THRESHOLD = 0.25;

export function EnterprisePreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: REVEAL_THRESHOLD },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const motionClasses = isVisible
    ? 'translate-x-0 opacity-100'
    : 'translate-x-16 opacity-0 lg:translate-x-40';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`relative mt-10 h-52 transition-[translate,opacity] duration-1000 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:h-72 lg:absolute lg:-bottom-[25%] lg:-right-[25%] lg:top-[8%] lg:mt-0 lg:h-auto lg:w-[60%] xl:-right-[20%] xl:w-[80%] ${motionClasses}`}
    >
      <div className="absolute inset-0 origin-left [mask-image:linear-gradient(to_right,transparent,black_6%),linear-gradient(to_bottom,black_60%,transparent_95%)] [mask-composite:intersect] lg:[transform:perspective(1600px)_translateY(6%)_rotateX(50deg)_rotateZ(-20deg)_scale(1.15)]">
        <Image
          src={ENTERPRISE_PREVIEW_SRC}
          alt=""
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover object-left-top opacity-90"
        />
      </div>
    </div>
  );
}
