import {
  Braces,
  Check,
  Globe2,
  Gauge,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../DeveloperGradientText';

const REASONS = [
  {
    title: '50 free monitors',
    description: 'Start monitoring your services with room to grow.',
    Icon: Check,
  },
  {
    title: 'HTTP status code checks',
    description: 'Validate expected responses and catch unexpected errors.',
    Icon: Braces,
  },
  {
    title: 'Custom headers',
    description: 'Monitor endpoints that require specific request headers.',
    Icon: Sparkles,
  },
  {
    title: 'Easy-to-use API',
    description: 'Connect monitor management to your own tooling.',
    Icon: Gauge,
  },
  {
    title: 'Detailed status pages',
    description: 'Share service health and incident updates in one place.',
    Icon: Globe2,
  },
  {
    title: 'Reliable checks',
    description: 'Get an external view of important production endpoints.',
    Icon: ShieldCheck,
  },
] as const;

export default function DeveloperReasons() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            More reasons to consider <DeveloperGradientText>PulseWatch.</DeveloperGradientText>
          </h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ title, description, Icon }) => (
            <article key={title} className="flex gap-3">
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Icon aria-hidden="true" className="size-3.5" />
              </span>
              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          Start with the essentials. Add more monitors as your services grow.
        </p>
        <div className="mt-4 flex justify-center">
          <ShaderButton href="/register">Start monitoring for free</ShaderButton>
        </div>
      </Container>
    </section>
  );
}
