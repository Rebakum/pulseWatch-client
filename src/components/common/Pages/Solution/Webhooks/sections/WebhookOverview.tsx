import { ArrowRight, BellRing, Workflow } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

const STEPS = [
  { title: 'Monitor detects an event', description: 'An uptime check reports a state change.', Icon: BellRing },
  { title: 'Webhook sends the payload', description: 'A structured event is posted to your endpoint.', Icon: Workflow },
  { title: 'Your workflow takes action', description: 'Notify a team, open a ticket, or run automation.', Icon: ArrowRight },
] as const;

export default function WebhookOverview() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">From monitor event to <DeveloperGradientText>action.</DeveloperGradientText></h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">Connect uptime signals to the systems where your team gets work done.</p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {STEPS.map(({ title, description, Icon }, index) => (
            <article key={title} className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue"><Icon aria-hidden="true" className="size-5" /></span>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-brand-blue">Step 0{index + 1}</p>
              <h3 className="mt-1 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
