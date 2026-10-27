import {
  Activity,
  Bell,
  Cable,
  Check,
  Clock3,
  Cloud,
  Crosshair,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
  Radio,
  ShieldCheck,
  Smartphone,
  Webhook,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import { Button } from '@/components/ui/Button/Button';

const INTEGRATIONS = [
  { name: 'Email', Icon: Mail },
  { name: 'SMS', Icon: Smartphone },
  { name: 'Voice call', Icon: Phone },
  { name: 'Slack', Icon: MessageCircle },
  { name: 'Pushover', Icon: Bell },
  { name: 'Pushbullet', Icon: Radio },
  { name: 'Webhooks', Icon: Webhook },
  { name: 'Splunk On-Call', Icon: Activity },
  { name: 'PagerDuty', Icon: ShieldCheck },
] as const;

const MUST_HAVE_FEATURES = [
  {
    title: '50 free monitors for life',
    accent: 'free monitors',
    description:
      'Start with 50 monitors on the free plan and begin checking your production services without a complicated setup.',
    Icon: Check,
  },
  {
    title: 'Multi-location checks',
    accent: 'Multi-location',
    description:
      'Check services from multiple regions and spot regional outages even when everything looks healthy from your location.',
    Icon: Globe2,
  },
  {
    title: 'Cloud-based setup',
    accent: 'Cloud-based',
    description:
      'Create monitors for DevOps services in a few clicks, with no agents or installations to maintain.',
    Icon: Cloud,
  },
] as const;

const MONITOR_TYPES = [
  { title: 'Port monitoring', href: '/port-monitoring', Icon: Cable },
  { title: 'Cron job monitoring', href: '/cron-job-monitoring', Icon: Clock3 },
  { title: 'Ping monitoring', href: '/ping-monitoring', Icon: Crosshair },
  { title: 'Website monitoring', href: '/website-monitoring', Icon: Globe2 },
  { title: 'SSL monitoring', href: '/ssl-monitoring', Icon: ShieldCheck },
  { title: 'Domain monitoring', href: '/domain-monitoring', Icon: Globe2 },
] as const;

export function DevOpsIntegrations() {
  return (
    <section className="bg-[#111827] py-14 text-white sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10">
          {INTEGRATIONS.map(({ name, Icon }) => (
            <div key={name} className="flex min-h-24 flex-col items-center justify-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-blue/15 text-brand-blue-light">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <span className="text-center text-sm font-semibold sm:text-base">{name}</span>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Your favorite <span className="text-brand-blue-light">integrations.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Get notified immediately and learn about incidents before they affect your users.
            Route alerts to the channels your team already uses.
          </p>
          <Button
            href="/alerts-notifications"
            size="lg"
            className="mt-8"
          >
            Show all integrations
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function DevOpsMustHaveFeatures() {
  return (
    <section className="bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Must-have <span className="text-brand-blue">features</span> for your DevOps team.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {MUST_HAVE_FEATURES.map(({ title, accent, description, Icon }) => {
            const accentStart = title.indexOf(accent);

            return (
              <article key={title} className="flex h-full flex-col">
                <span className="relative grid size-14 place-items-center bg-brand-blue/10 text-brand-blue">
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 -top-2 size-7 rounded-full bg-brand-blue/20"
                  />
                  <Icon aria-hidden="true" className="relative z-10 size-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold leading-snug sm:text-2xl">
                  {title.slice(0, accentStart)}
                  <span className="text-brand-blue">{accent}</span>
                  {title.slice(accentStart + accent.length)}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--muted)]">
                  {description}
                </p>
                <Button href="/register" className="mt-6 w-fit">
                  Start for free
                </Button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function DevOpsMonitorTypes() {
  return (
    <section className="bg-[var(--surface)] py-14 text-[var(--foreground)] sm:py-20">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
          All you care about, <span className="text-brand-blue">monitored</span> in one place.
        </h2>
        <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {MONITOR_TYPES.map(({ title, href, Icon }) => (
            <article
              key={title}
              className="flex min-h-[230px] flex-col rounded-xl bg-[var(--background)] p-5 shadow-lg shadow-slate-900/5"
            >
              <span className="relative grid size-12 place-items-center bg-brand-blue/10 text-brand-blue">
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-1 size-6 rounded-full bg-brand-blue/20"
                />
                <Icon aria-hidden="true" className="relative z-10 size-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
              <Link
                href={href}
                className="mt-auto inline-flex w-fit pt-6 text-sm font-semibold text-brand-blue underline decoration-2 underline-offset-4 transition-colors hover:text-brand-blue-light"
              >
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
