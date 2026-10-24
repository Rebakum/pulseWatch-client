import Container from '@/components/common/Container';
import Image from 'next/image';

import { awards } from './Awards';
import { content } from './Content';
import FeatureCard from './FeatureCard';

export default function FeaturesGrid() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <Container className="relative">
        <h2 className="mx-auto mb-12 max-w-2xl text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {content.titleStart}
          <span className="bg-brand-gradient box-decoration-clone bg-clip-text text-transparent">
            {content.titleHighlight}
          </span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* Awards row (hidden until you add real badges) */}
        {awards.length > 0 && (
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {awards.map((award) => (
              <li key={award.name}>
                <Image
                  src={award.src}
                  alt={award.name}
                  width={110}
                  height={110}
                  className="h-24 w-auto"
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
