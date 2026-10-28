import { KeyRound, LockKeyhole, ShieldCheck } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const ITEMS = [
  {
    title: 'HTTPS endpoints',
    detail: 'Send event data over encrypted connections.',
    Icon: LockKeyhole,
  },
  {
    title: 'Verify each request',
    detail: 'Validate the sender before processing a payload.',
    Icon: ShieldCheck,
  },
  {
    title: 'Keep credentials private',
    detail: 'Store secrets in your server environment, not client code.',
    Icon: KeyRound,
  },
] as const;

export default function WebhookSecurity() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Security belongs in <DeveloperGradientText>every event.</DeveloperGradientText>
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ITEMS.map(({ title, detail, Icon }) => (
            <article key={title} className="rounded-xl border border-[var(--border)] p-5">
              <Icon aria-hidden="true" className="size-6 text-brand-blue" />
              <h3 className="mt-3 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
