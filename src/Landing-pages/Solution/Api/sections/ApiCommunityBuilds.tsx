import { Bot, Gauge, Globe2, Plug, ShieldCheck, Webhook } from 'lucide-react';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const COMMUNITY_BUILDS = [
  {
    title: 'Grafana & Prometheus',
    description:
      'Bring uptime metrics into Grafana and Prometheus dashboards alongside your server metrics.',
    Icon: Gauge,
  },
  {
    title: 'Ansible & Terraform',
    description:
      'Automate monitor onboarding as infrastructure code and keep new services under watch.',
    Icon: Plug,
  },
  {
    title: 'Integrately / Make workflows',
    description:
      'Use monitor events to start workflows, notify teams, or connect your existing services.',
    Icon: Webhook,
  },
  {
    title: 'WordPress plugin',
    description:
      'Surface uptime and service status in the tools and dashboards your team already uses.',
    Icon: Globe2,
  },
  {
    title: 'Keep-awake pings',
    description:
      'Use heartbeat monitoring to check scheduled jobs and keep important tasks accountable.',
    Icon: ShieldCheck,
  },
  {
    title: 'Custom heartbeat stacks',
    description:
      'Combine local health checks with external alerts for a clearer view of your operations.',
    Icon: Bot,
  },
] as const;

export default function ApiCommunityBuilds() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Built with the <DeveloperGradientText>PulseWatch API.</DeveloperGradientText>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            From hobby projects to enterprise workflows. See what our community builds.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {COMMUNITY_BUILDS.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="relative isolate overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.07)] sm:p-6"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 top-1/2 -z-10 size-28 -translate-y-1/2 rounded-full bg-brand-blue/10"
              />
              <Icon aria-hidden="true" className="size-6 text-brand-blue" />
              <h3 className="mt-3 text-sm font-bold">{title}</h3>
              <p className="mt-2 max-w-lg text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ShaderButton href="/api-docs">Start building with API</ShaderButton>
        </div>
      </Container>
    </section>
  );
}
