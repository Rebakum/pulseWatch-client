import {
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Globe2,
  KeyRound,
  Link2,
  Search,
  Shield,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../ForDevelopers/DeveloperGradientText';

const MONITORS = [
  { title: 'Website monitoring', href: '/website-monitoring', Icon: Globe2 },
  { title: 'SSL monitoring', href: '/ssl-monitoring', Icon: Shield },
  { title: 'Domain expiration', href: '/domain-monitoring', Icon: CalendarClock },
  { title: 'Keyword monitoring', href: '/keyword-monitoring', Icon: Search },
] as const;

const FEATURES = [
  {
    title: 'Branded status pages',
    description: 'Customize a public status page with your colors, font, logo, and layout.',
    Icon: BadgeCheck,
  },
  {
    title: 'Response time monitoring',
    description: 'Get immediate alerts when your website takes longer than usual to load.',
    Icon: Clock3,
  },
  {
    title: 'Shared account access',
    description: 'Let coworkers access monitors, edit them, or receive live alerts.',
    Icon: UsersRound,
  },
  {
    title: '50 free monitors',
    description: 'Get started with up to 50 free monitors for websites, IPs, or keywords.',
    Icon: CheckCircle2,
  },
  {
    title: 'Domain name monitoring',
    description: 'Track domain expiration dates and get timely alerts before renewal.',
    Icon: Link2,
  },
  {
    title: 'SSL certificate monitoring',
    description: 'Keep your website protected and get notified about certificate expiry.',
    Icon: KeyRound,
  },
] as const;

export default function MarketersMonitoringOverview() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="mx-auto max-w-xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          All you really care about <DeveloperGradientText>monitored</DeveloperGradientText> in one
          place.
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MONITORS.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
            >
              <span className="relative inline-grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icon aria-hidden="true" className="size-5" />
                <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-[var(--surface)] bg-brand-blue" />
              </span>
              <span className="mt-3 flex items-center justify-between gap-2 text-sm font-semibold">
                {title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-[var(--muted)] transition group-hover:text-brand-blue"
                />
              </span>
              <span className="mt-3 inline-block text-xs font-medium text-brand-blue underline underline-offset-2">
                Learn more
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-8 sm:mt-12 sm:pt-10">
          <h3 className="text-center text-lg font-bold tracking-tight">
            Monitoring <DeveloperGradientText>features</DeveloperGradientText> to bring more
            results.
          </h3>
          <div className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, description, Icon }) => (
              <article key={title} className="flex items-start gap-2.5">
                <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                <div>
                  <h4 className="text-sm font-semibold">{title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-[var(--muted)] sm:text-sm">
            Deliver reliable monitoring with a cost-effective plan.
          </p>
          <div className="mt-5 flex justify-center">
            <ShaderButton href="/register">Start monitoring for free</ShaderButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
