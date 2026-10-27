import { Activity, Check, Clock3, ShieldAlert } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

const EVENTS = [
  { title: 'Monitor down', detail: 'A check detects an outage.', Icon: ShieldAlert },
  { title: 'Monitor up', detail: 'A service recovers.', Icon: Check },
  { title: 'Response-time change', detail: 'Performance crosses your threshold.', Icon: Activity },
  { title: 'Heartbeat missed', detail: 'A scheduled task does not report in time.', Icon: Clock3 },
] as const;

export default function WebhookEventTypes() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Events that keep your <DeveloperGradientText>workflow moving.</DeveloperGradientText></h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map(({ title, detail, Icon }) => (
            <article key={title} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm">
              <Icon aria-hidden="true" className="size-6 text-brand-blue" />
              <h3 className="mt-4 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">{detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
