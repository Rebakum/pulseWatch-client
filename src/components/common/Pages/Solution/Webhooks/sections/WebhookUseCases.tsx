import { ClipboardList, MessageSquare, Radio, Wrench } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

const USE_CASES = [
  { title: 'Notify the right team', detail: 'Send incidents to chat or on-call tools.', Icon: MessageSquare },
  { title: 'Open an incident', detail: 'Create a ticket when a monitor changes state.', Icon: ClipboardList },
  { title: 'Trigger automation', detail: 'Start a runbook or workflow from an event.', Icon: Wrench },
  { title: 'Update internal systems', detail: 'Keep dashboards and service records current.', Icon: Radio },
] as const;

export default function WebhookUseCases() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Make every event <DeveloperGradientText>useful.</DeveloperGradientText></h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map(({ title, detail, Icon }) => (
            <article key={title} className="flex gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue"><Icon aria-hidden="true" className="size-4" /></span>
              <div><h3 className="text-sm font-bold">{title}</h3><p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{detail}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
