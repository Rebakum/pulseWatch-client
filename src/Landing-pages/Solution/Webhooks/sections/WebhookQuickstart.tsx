import { ArrowRight, Check, KeyRound } from 'lucide-react';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const STEPS = [
  'Create an endpoint in your application',
  'Add the endpoint to your webhook settings',
  'Send a test event and verify the response',
];

export default function WebhookQuickstart() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Connect a webhook in <DeveloperGradientText>three steps.</DeveloperGradientText>
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Go from endpoint to event without a long integration project.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <article
              key={step}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <span className="grid size-8 place-items-center rounded-full bg-brand-blue text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-sm font-bold">{step}</h3>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <Check aria-hidden="true" className="size-3.5 text-brand-blue" />
                Ready for the next step
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <ShaderButton href="/api-docs">View webhook docs</ShaderButton>
          <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)]">
            <KeyRound aria-hidden="true" className="size-3.5" /> Keep endpoint secrets private
          </span>
          <ArrowRight aria-hidden="true" className="hidden size-4 text-brand-blue sm:block" />
        </div>
      </Container>
    </section>
  );
}
