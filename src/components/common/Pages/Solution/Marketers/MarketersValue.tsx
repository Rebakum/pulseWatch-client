import { ChartNoAxesCombined, ShieldCheck, ThumbsUp } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../ForDevelopers/DeveloperGradientText';

const VALUES = [
  {
    title: 'Improve email campaigns',
    description: 'Make sure the pages linked from your emails are working with uptime monitoring.',
    Icon: ChartNoAxesCombined,
  },
  {
    title: 'Protect brand reputation',
    description:
      'Build customer trust by keeping your website accessible and avoiding broken experiences.',
    Icon: ShieldCheck,
  },
  {
    title: 'Optimize user experience',
    description: 'Keep an eye on website availability and performance to maximize usability.',
    Icon: ThumbsUp,
  },
] as const;

export default function MarketersValue() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          <DeveloperGradientText>Explore</DeveloperGradientText> the value of uptime monitoring.
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {VALUES.map(({ title, description, Icon }) => (
            <article key={title}>
              <span className="relative inline-grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icon aria-hidden="true" className="size-5" />
                <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-[var(--background)] bg-brand-blue" />
              </span>
              <h3 className="mt-3 text-sm font-bold">{title}</h3>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
