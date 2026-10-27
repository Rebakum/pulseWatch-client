import { RefreshCw, TimerReset } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

export default function WebhookRetries() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Resilient delivery for <DeveloperGradientText>real-world networks.</DeveloperGradientText></h2><p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">Endpoints can be temporarily unavailable. Design your receiver to handle repeat delivery safely and acknowledge requests promptly.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5"><RefreshCw aria-hidden="true" className="size-6 text-brand-blue" /><h3 className="mt-3 text-sm font-bold">Handle retries safely</h3><p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">Use event identifiers and idempotent handlers to avoid duplicate side effects.</p></article>
          <article className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5"><TimerReset aria-hidden="true" className="size-6 text-brand-blue" /><h3 className="mt-3 text-sm font-bold">Respond quickly</h3><p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">Return a successful status after accepting the payload, then process longer work asynchronously.</p></article>
        </div>
      </Container>
    </section>
  );
}
