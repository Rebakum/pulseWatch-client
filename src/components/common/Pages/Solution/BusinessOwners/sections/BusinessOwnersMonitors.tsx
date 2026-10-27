import {
  ArrowUpRight,
  CircleCheck,
} from 'lucide-react';
import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';
import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import Link from 'next/link';
import { MONITORS, BUSINESS_FEATURES } from '../BusinessOwnersData';

export default function BusinessOwnersMonitors() {
  return (
<section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <div className="border-y border-[var(--border)] py-8 sm:py-10">
            <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              All you really care about <DeveloperGradientText>monitored</DeveloperGradientText> in one place.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {MONITORS.map(({ title, Icon, href }) => (
                <article
                  key={title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-3 min-h-10 text-xs font-semibold leading-snug">{title}</h3>
                  <Link
                    href={href}
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-brand-blue underline underline-offset-2"
                  >
                    Learn more <ArrowUpRight aria-hidden="true" className="size-3" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-8">
              <h2 className="text-center text-sm font-bold sm:text-base">
                <DeveloperGradientText>Improve</DeveloperGradientText> your operations with uptime monitoring.
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {BUSINESS_FEATURES.map(({ title, description }) => (
                  <article key={title}>
                    <h3 className="flex items-center gap-2 text-xs font-bold">
                      <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-brand-blue" />
                      {title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-[var(--muted)]">
                Set up reliable monitoring easily and protect your online presence.
              </p>
              <div className="mt-4 flex justify-center">
                <ShaderButton href="/register">Start monitoring in 30 seconds</ShaderButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
  );
}
