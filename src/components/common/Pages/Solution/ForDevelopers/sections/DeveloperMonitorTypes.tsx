import {
  Activity,
  ArrowUpRight,
  Clock3,
  Code2,
  Globe2,
  LockKeyhole,
  Layers3,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../DeveloperGradientText';

const MONITORS = [
  { title: 'Website monitoring', href: '/website-monitoring', Icon: Globe2 },
  { title: 'SSL monitoring', href: '/ssl-monitoring', Icon: LockKeyhole },
  { title: 'Port monitoring', href: '/port-monitoring', Icon: Layers3 },
  { title: 'Cron job monitoring', href: '/cron-job-monitoring', Icon: Clock3 },
  { title: 'Keyword monitoring', href: '/keyword-monitoring', Icon: Code2 },
  { title: 'Ping monitoring', href: '/ping-monitoring', Icon: Activity },
] as const;

export default function DeveloperMonitorTypes() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="border-t border-[var(--border)] pt-8">
          <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
            All you really care about <DeveloperGradientText>monitored</DeveloperGradientText> in
            one place.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {MONITORS.map(({ title, href, Icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex min-h-40 flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:min-h-44 sm:p-5"
              >
                <span className="relative grid size-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon aria-hidden="true" className="relative z-10 size-5" />
                </span>
                <span className="mt-4 text-xs font-bold leading-snug sm:text-sm">{title}</span>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[10px] font-semibold text-brand-blue">
                  Learn more
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
