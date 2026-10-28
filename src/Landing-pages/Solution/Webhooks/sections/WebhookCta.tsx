import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function WebhookCta() {
  return (
    <section className="bg-[var(--background)] py-14 text-center text-[var(--foreground)] sm:py-20">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Your workflows, connected
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to build with <DeveloperGradientText>webhooks?</DeveloperGradientText>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          Connect monitor events to the tools your team relies on and start automating incident
          response.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ShaderButton href="/register">Start monitoring for free</ShaderButton>
          <Link
            href="/api-docs"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Read webhook docs <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
