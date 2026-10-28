import Container from '@/components/common/Container';
import type { ArticleCardIcon, ArticleCardsSectionData } from '@/types/landing';
import { Clock, EthernetPort, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

const ICONS: Record<ArticleCardIcon, LucideIcon> = {
  ethernet: EthernetPort,
  clock: Clock,
  target: Target,
};

interface ArticleCardsProps {
  data: ArticleCardsSectionData;
}

export default function ArticleCards({ data }: ArticleCardsProps) {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{data.title}</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {data.items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <div className="flex justify-center py-3">
                  <Icon className="h-14 w-14 text-[var(--muted)]" strokeWidth={1.5} />
                </div>

                <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>

                <div className="mt-5">
                  {item.cta.href ? (
                    <Link href={item.cta.href} className="outline-btn outline-btn--sm">
                      {item.cta.label}
                    </Link>
                  ) : (
                    <span className="outline-btn outline-btn--sm cursor-default">
                      {item.cta.label}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
