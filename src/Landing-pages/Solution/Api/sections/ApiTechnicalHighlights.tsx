import { Check } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const TECHNICAL_HIGHLIGHTS = [
  {
    title: 'Unified endpoint design',
    description: 'One base URL for all methods, with no messy versioning.',
  },
  {
    title: 'Multi-format replies',
    description: 'Choose JSON, JSONP, or XML responses to suit your tools.',
  },
  {
    title: 'Monitor types on tap',
    description: 'HTTP/S, Keyword, Ping, Port, Heartbeat, SSL, and Domain expiry.',
  },
  {
    title: 'Geo-verified checks',
    description: 'API-created monitors inherit multi-location reliability checks.',
  },
  {
    title: 'Rate-limit headers',
    description: 'Built-in rate-limit data helps your automation stay polite.',
  },
  {
    title: 'Instant webhook alerts',
    description: 'Route incident notifications to Slack, Discord, Teams, or your URL.',
  },
] as const;

export default function ApiTechnicalHighlights() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Technical <DeveloperGradientText>highlights.</DeveloperGradientText>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            A predictable API that fits into your existing automation and tooling.
          </p>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_HIGHLIGHTS.map(({ title, description }) => (
            <article key={title} className="flex gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Check aria-hidden="true" className="size-3.5" />
              </span>
              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
