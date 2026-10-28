import {
  BellRing,
  ChartNoAxesCombined,
  CircleCheck,
  Clock3,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const BENEFIT_COLUMNS = [
  [
    {
      label: 'Campaign readiness',
      title: 'Know when a landing page is unavailable',
      description:
        'Keep important campaign URLs visible and get an alert when a monitor detects an availability issue.',
      Icon: Globe2,
    },
    {
      label: 'Customer trust',
      title: 'Protect every brand touchpoint',
      description:
        'Monitor certificates and domain expiry so preventable lapses do not interrupt customer access.',
      Icon: ShieldCheck,
    },
  ],
  [
    {
      label: 'Fast response',
      title: 'Route alerts to the right people',
      description:
        'Choose notification channels that fit your team and respond when an issue is detected.',
      Icon: BellRing,
    },
    {
      label: 'Performance signals',
      title: 'See response-time changes',
      description:
        'Review response-time data alongside uptime checks to spot changes that may affect visitors.',
      Icon: ChartNoAxesCombined,
    },
  ],
  [
    {
      label: 'Simple setup',
      title: 'Add monitors without complicated setup',
      description: 'Create monitors for the pages and services your team wants to keep an eye on.',
      Icon: CircleCheck,
    },
    {
      label: 'Always-on checks',
      title: 'Keep watch between campaign reviews',
      description:
        'Let scheduled checks run in the background while your team focuses on its next campaign.',
      Icon: Clock3,
    },
  ],
] as const;

export default function MarketersBenefits() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-brand-blue/10 blur-3xl"
      />
      <Container>
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          What marketers can count on with{' '}
          <DeveloperGradientText>PulseWatch.</DeveloperGradientText>
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFIT_COLUMNS.map((column, index) => (
            <div key={index} className="space-y-3">
              {column.map(({ label, title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-5 transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      {label}
                    </span>
                    <Icon aria-hidden="true" className="size-4 text-brand-blue-light" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
