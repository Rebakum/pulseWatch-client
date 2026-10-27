import Link from 'next/link';

import Container from '@/components/common/Container';

import { content } from './Content';
import IntegrationsIllustration from './IntegrationsSection.tsx IntegrationsIllustration';

export default function IntegrationsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <Container className="relative grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Copy (first on mobile, right side on desktop) */}
        <div className="md:order-2">
          <h2 className="mb-6 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
            {content.titleEnd}
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>

          <p className="mb-8 max-w-md text-base leading-relaxed text-[var(--foreground)]/85 sm:text-lg">
            {content.description}
          </p>

          <Link
            href={content.link.href}
            className="font-bold text-[var(--color-brand-blue)] underline underline-offset-4 transition-colors hover:text-[var(--color-brand-magenta)]"
          >
            {content.link.label}
          </Link>
        </div>

        {/* Illustration */}
        <div className="md:order-1">
          <IntegrationsIllustration />
        </div>
      </Container>
    </section>
  );
}
