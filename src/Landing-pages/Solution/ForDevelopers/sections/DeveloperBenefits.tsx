import { BellRing, Clock3, ShieldCheck } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from './DeveloperGradientText';

const BENEFITS = [
  {
    title: 'Receive immediate notifications',
    description:
      'Get alerts through the channels you prefer as soon as a monitor detects an outage, so your team can respond sooner.',
    Icon: BellRing,
  },
  {
    title: 'Monitor response time and timeout',
    description:
      'See response-time changes and tune timeout thresholds to catch slowdowns before they affect customers.',
    Icon: Clock3,
  },
  {
    title: 'Domain & SSL certificate monitoring',
    description:
      'Keep track of domain and certificate expiry dates with advance notifications, helping prevent avoidable interruptions.',
    Icon: ShieldCheck,
  },
] as const;

export default function DeveloperBenefits() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Benefits of <DeveloperGradientText>hassle-free</DeveloperGradientText> monitoring.
          </h2>
        </div>
        <div className="mt-8 grid gap-7 md:grid-cols-3 md:gap-9">
          {BENEFITS.map(({ title, description, Icon }) => (
            <article key={title} className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
