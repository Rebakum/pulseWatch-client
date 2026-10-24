import type { HeadingSegment } from '@/types/landing';
import { Fragment } from 'react';

const TONE_CLASS: Record<NonNullable<HeadingSegment['tone']>, string> = {
  green: 'text-[var(--color-status-up)]',
  red: 'text-[var(--color-status-down)]',
  brand: 'bg-brand-gradient bg-clip-text text-transparent',
};

interface SegmentedTitleProps {
  segments: HeadingSegment[];
  className?: string;
}

export default function SegmentedTitle({ segments, className }: SegmentedTitleProps) {
  return (
    <h2 className={className}>
      {segments.map((segment, index) =>
        segment.tone ? (
          <span key={index} className={TONE_CLASS[segment.tone]}>
            {segment.text}
          </span>
        ) : (
          <Fragment key={index}>{segment.text}</Fragment>
        ),
      )}
    </h2>
  );
}
