import { BarChart3, Layers3, Server } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function WebhookScale() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            A pattern that scales with <DeveloperGradientText>your systems.</DeveloperGradientText>
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Keep integrations understandable as monitors, services, and teams grow.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'One receiver per workflow',
              text: 'Separate responsibilities for simpler maintenance.',
              Icon: Layers3,
            },
            {
              title: 'Queue longer tasks',
              text: 'Acknowledge quickly and move work to a background queue.',
              Icon: Server,
            },
            {
              title: 'Watch delivery health',
              text: 'Track errors, processing time, and event volume.',
              Icon: BarChart3,
            },
          ].map(({ title, text, Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <Icon aria-hidden="true" className="size-6 text-brand-blue" />
              <h3 className="mt-3 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
