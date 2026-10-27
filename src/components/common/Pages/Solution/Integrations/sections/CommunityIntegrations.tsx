import { ArrowUpRight, Webhook } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

const COMMUNITY_INTEGRATIONS = [
  {
    name: 'PagerTree',
    description: 'Connect uptime monitoring to PagerTree and keep incidents in your on-call flow.',
  },
  {
    name: 'Pipedream',
    description: 'Build and run workflows using monitor events and your existing tools.',
  },
  {
    name: 'Jiralert',
    description: 'Manage on-call schedules and respond to incidents quickly.',
  },
  {
    name: 'Zenduty',
    description: 'Escalate alerts to on-call teams and coordinate incident response.',
  },
] as const;

export default function CommunityIntegrations() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
          Built by our <DeveloperGradientText>great community.</DeveloperGradientText>
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMMUNITY_INTEGRATIONS.map(({ name, description }) => (
            <article
              key={name}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Webhook aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-3 text-sm font-bold">{name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{description}</p>
              <Link
                href="/alerts-notifications"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue underline underline-offset-2"
              >
                Learn more <ArrowUpRight aria-hidden="true" className="size-3" />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/alerts-notifications"
            className="inline-flex items-center gap-2 rounded-full bg-[image:var(--background-image-brand-gradient)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5"
          >
            Explore integrations <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
