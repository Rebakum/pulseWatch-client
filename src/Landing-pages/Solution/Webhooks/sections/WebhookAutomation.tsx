import { Blocks, GitBranch, Sparkles } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function WebhookAutomation() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Automate the steps <DeveloperGradientText>after an alert.</DeveloperGradientText>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Use events as triggers and let your existing tools orchestrate the response.
          </p>
        </div>
        <div className="mt-8 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {[
            { title: 'Monitor event', Icon: Sparkles },
            { title: 'Your workflow', Icon: GitBranch },
            { title: 'Team action', Icon: Blocks },
          ].map(({ title, Icon }, index) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 text-center"
            >
              <Icon aria-hidden="true" className="mx-auto size-6 text-brand-blue" />
              <p className="mt-3 text-sm font-semibold">{title}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                {['Down or recovered', 'Route, enrich, automate'][index] ?? 'Notify and resolve'}
              </p>
            </div>
          ))}
          <span className="hidden text-brand-blue md:block">→</span>
          <span className="hidden text-brand-blue md:block">→</span>
        </div>
      </Container>
    </section>
  );
}
