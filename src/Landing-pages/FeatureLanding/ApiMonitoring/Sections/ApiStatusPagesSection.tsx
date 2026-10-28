import Container from '@/components/common/Container';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SpotlightRowVisual from './SpotlightRowVisual';

export default function ApiStatusPagesSection() {
  const row = {
    title: 'Build trust with clear API status updates.',
    description:
      'Share endpoint availability and incident updates with customers during degradation or planned maintenance.',
    ctas: [{ label: 'Explore status pages', href: '/status-pages' }],
    visual: 'statusPage' as const,
  };

  return (
    <section className="bg-[var(--background)] py-16 text-[var(--foreground)] lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-lg text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
              {row.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {row.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {row.ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 font-medium text-[var(--foreground)] hover:opacity-80 transition-opacity"
                >
                  {cta.label}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <SpotlightRowVisual visual={row.visual} />
          </div>
        </div>
      </Container>
    </section>
  );
}
