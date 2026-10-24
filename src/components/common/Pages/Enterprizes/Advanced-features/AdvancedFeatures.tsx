import Container from '@/components/common/Container';

import { content } from './content';
import FeatureIllustration from './FeatureIllustration';

export default function AdvancedFeatures() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <Container className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Copy */}
        <div>
          <h2 className="mb-6 max-w-sm text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {content.titleStart}
            <span className="bg-brand-gradient box-decoration-clone bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
            {content.titleEnd}
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--foreground)]/85 sm:text-base">
            {content.description}
          </p>
        </div>

        {/* Illustration */}
        <FeatureIllustration />
      </Container>
    </section>
  );
}
