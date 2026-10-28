import { Activity, Clock3, Gauge } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function WebhookObservability() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Keep event handling <DeveloperGradientText>observable.</DeveloperGradientText>
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
            <Activity aria-hidden="true" className="size-6 text-brand-blue" />
            <h3 className="mt-3 text-sm font-bold">Log event IDs</h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              Trace each event through your application logs and incident tools.
            </p>
          </article>
          <article className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
            <Gauge aria-hidden="true" className="size-6 text-brand-blue" />
            <h3 className="mt-3 text-sm font-bold">Measure processing</h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              Track receiver latency and surface bottlenecks in your own monitoring.
            </p>
          </article>
          <article className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
            <Clock3 aria-hidden="true" className="size-6 text-brand-blue" />
            <h3 className="mt-3 text-sm font-bold">Review event history</h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              Keep the context needed to investigate changes and improve workflows.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
