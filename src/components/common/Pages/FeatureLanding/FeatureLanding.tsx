import type { FeatureLandingPage } from '@/constants/feature-pages';
import { Bell, Plug, Zap, type LucideIcon } from 'lucide-react';
import LogoMarquee from '../Home/LogoMarquee';

interface FeatureLandingProps {
  page: FeatureLandingPage;
}

const CARD_ICONS: LucideIcon[] = [Zap, Bell, Plug];

export default function FeatureLanding({ page }: FeatureLandingProps) {
  return (
    <>
      <section className="fl">
        <div className="fl__inner">
          <p className="fl__eyebrow">{page.eyebrow}</p>
          <h1 className="fl__title">
            {page.title}
            <span className="fl__title-accent">{page.highlight}</span>
          </h1>
          <p className="fl__desc">{page.description}</p>
        </div>

        <div className="fl__grid">
          {page.highlights.map((item, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <article key={item.title} className="fl-card">
                <span className="fl-card__icon" aria-hidden="true">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="fl-card__title">{item.title}</h3>
                <p className="fl-card__desc">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <LogoMarquee />
    </>
  );
}
