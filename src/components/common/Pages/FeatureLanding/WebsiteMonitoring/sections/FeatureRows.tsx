import Container from '@/components/common/Container';
import type { FeatureRowsSectionData } from '@/types/landing';
import { Play, Smartphone } from 'lucide-react';
import FeatureRowVisual from './FeatureRowVisual';

interface FeatureRowsProps {
  data: FeatureRowsSectionData;
}

const STOP_WORDS = new Set(['of', 'the', 'a', 'an', 'our', 'with', 'to', 'type']);

function splitTitle(title: string): [string, string] {
  const words = title.trim().split(/\s+/);
  if (words.length < 3) return ['', title];

  const secondLast = words[words.length - 2].toLowerCase();
  const tail = STOP_WORDS.has(secondLast) ? 1 : 2;

  return [words.slice(0, words.length - tail).join(' '), words.slice(-tail).join(' ')];
}

export default function FeatureRows({ data }: FeatureRowsProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <div className="relative">
          {/* vertical divider (desktop, column-er majhkhane) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--border)] lg:block"
          />

          {data.rows.map((row, index) => {
            const reversed = index % 2 === 1;
            const [head, tail] = splitTitle(row.title);
            const rowPadY = [
              index > 0 ? 'pt-14 lg:pt-20' : '',
              index < data.rows.length - 1 ? 'pb-14 lg:pb-20' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div
                key={`${row.visual}-${index}`}
                className={`relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${rowPadY} ${
                  index > 0
                    ? "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[var(--border)] before:content-['']"
                    : ''
                }`}
              >
                <div className={reversed ? 'lg:order-2' : undefined}>
                  <h2 className="max-w-[22rem] text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
                    {head}{' '}
                    <span className="bg-brand-gradient bg-clip-text text-transparent">{tail}</span>
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                    {row.description}
                  </p>

                  {row.badges ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {row.badges.map((badge, i) => (
                        <span
                          key={badge.label}
                          className="inline-flex items-center gap-2.5 rounded-lg border border-[var(--border)] bg-black px-3.5 py-2 text-white transition hover:border-brand-blue"
                        >
                          {i === 0 ? (
                            <Play className="h-5 w-5 fill-white" />
                          ) : (
                            <Smartphone className="h-5 w-5" />
                          )}
                          <span className="leading-none">
                            <span className="block text-[8px] uppercase tracking-wide text-white/70">
                              {badge.sublabel}
                            </span>
                            <span className="mt-0.5 block text-[13px] font-semibold">
                              {badge.label}
                            </span>
                          </span>
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className={reversed ? 'lg:order-1' : undefined}>
                  <FeatureRowVisual visual={row.visual} index={index} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
