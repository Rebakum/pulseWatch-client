import type { HeadingSegment } from '@/types/landing';
import SegmentedTitle from './SegmentedTitle';

interface SplitHeaderProps {
  title: HeadingSegment[];
  description: string;
}

export default function SplitHeader({ title, description }: SplitHeaderProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:gap-16">
      <SegmentedTitle
        segments={title}
        className="max-w-md text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl"
      />
      <p className="max-w-md text-sm leading-relaxed text-[var(--muted)] lg:pt-2">{description}</p>
    </div>
  );
}
