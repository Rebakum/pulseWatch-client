import type { ReactNode } from 'react';

interface LayeredPreviewProps {
  main: ReactNode;
  floating: ReactNode;
}

export function LayeredPreview({ main, floating }: LayeredPreviewProps) {
  return (
    <div className="relative h-[440px] sm:h-[480px]">
      <div className="absolute right-0 top-8 w-[84%] overflow-hidden opacity-90 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_30%),linear-gradient(to_bottom,black_65%,transparent)]">
        {main}
      </div>
      <div className="absolute left-0 top-0 z-10 w-[46%] space-y-3">{floating}</div>
    </div>
  );
}
