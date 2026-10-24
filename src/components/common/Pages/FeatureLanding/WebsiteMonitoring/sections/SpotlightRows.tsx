import Container from '@/components/common/Container';
import type { SpotlightRowsSectionData } from '@/types/landing';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SpotlightRowVisual from './SpotlightRowVisual';

interface SpotlightRowsProps {
  data: SpotlightRowsSectionData;
}

export default function SpotlightRows({ data }: SpotlightRowsProps) {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        {data.rows.map((row, index) => {
          const reversed = index % 2 === 1;
          const rowPadY = [
            index > 0 ? 'pt-16 lg:pt-20' : '',
            index < data.rows.length - 1 ? 'pb-16 lg:pb-20' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={`${row.visual}-${index}`}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${rowPadY}`}
            >
              <div className={reversed ? 'lg:order-2' : undefined}>
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
                      className={`outline-btn${cta.variant === 'light' ? ' outline-btn--light' : ''}`}
                    >
                      {cta.label}
                      {cta.arrow ? <ChevronRight className="h-4 w-4" /> : null}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={reversed ? 'lg:order-1' : undefined}>
                <SpotlightRowVisual visual={row.visual} />
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
