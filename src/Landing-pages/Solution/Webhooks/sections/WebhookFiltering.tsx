import { ListFilter, SlidersHorizontal } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function WebhookFiltering() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container className="grid items-center gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="flex items-center gap-2 text-xs font-semibold">
            <SlidersHorizontal aria-hidden="true" className="size-4 text-brand-blue" />
            Event subscriptions
          </p>
          <div className="mt-4 space-y-3">
            {['Monitor goes down', 'Monitor recovers', 'Heartbeat missed'].map((event) => (
              <div
                key={event}
                className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--background)] p-3 text-xs"
              >
                <span>{event}</span>
                <span className="size-4 rounded border border-brand-blue bg-brand-blue/10" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <ListFilter aria-hidden="true" className="size-8 text-brand-blue" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Subscribe to the events <DeveloperGradientText>you need.</DeveloperGradientText>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Keep integrations focused by choosing the monitor events relevant to each workflow and
            team.
          </p>
        </div>
      </Container>
    </section>
  );
}
