import { ArrowUpRight, Bot, Code2, DollarSign, GitBranch } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const API_FEATURES = [
  {
    title: 'Included in all plans',
    description:
      'Our API comes with clear, published rate limits, so you can scale without surprises.',
    Icon: DollarSign,
  },
  {
    title: 'Integrates with your toolchain',
    description:
      'Use cURL, Postman, CI/CD, or serverless workflows. If it speaks HTTP, it can work with the API.',
    Icon: GitBranch,
  },
  {
    title: 'Your dashboard, programmatically',
    description:
      'Everything available in the UI can be managed through API endpoints, from monitors to alert contacts.',
    Icon: Code2,
  },
] as const;

export default function ApiAutomation() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Automate every monitor in <DeveloperGradientText>minutes.</DeveloperGradientText>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            Spin up, modify, or delete monitors straight from your CI/CD pipeline. No manual clicks,
            no copy-paste fatigue—just concise calls that move as fast as your deploys.
          </p>
        </div>

        <div className="mx-auto mt-7 max-w-3xl rounded-xl border border-brand-blue/30 bg-brand-blue/5 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Bot aria-hidden="true" className="size-4 text-brand-blue" />
            Using AI?
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
            Set up monitors without API keys or sign-up. Let your AI agent submit the URL and your
            email, then confirm or modify the check in one click.
          </p>
          <Link
            href="/api-docs"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue underline underline-offset-2"
          >
            See quick monitor setup for AI agents{' '}
            <ArrowUpRight aria-hidden="true" className="size-3" />
          </Link>
        </div>

        <div className="mt-9 grid gap-7 sm:grid-cols-3 sm:gap-6">
          {API_FEATURES.map(({ title, description, Icon }) => (
            <article key={title}>
              <span className="relative inline-grid size-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icon aria-hidden="true" className="size-5" />
                <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-[var(--background)] bg-brand-blue" />
              </span>
              <h3 className="mt-3 text-sm font-bold">{title}</h3>
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
