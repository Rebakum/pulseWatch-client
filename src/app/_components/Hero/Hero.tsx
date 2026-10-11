import { CheckCircle2 } from 'lucide-react';
import { HeroMockup } from './HeroMockup';
import { HeroSignupForm } from './HeroSignupForm';
import { NOTIFICATION_CHANNELS } from '@/constants/navigation';

const HERO_BENEFITS: string[] = [
  'Free plan to get started',
  'Instant email alerts when something breaks',
  'Public status pages for your users',
  'Uptime and response-time reports',
];

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-brand-blue opacity-15 blur-3xl dark:opacity-25" />
      <div className="absolute -top-24 right-[-10rem] h-[26rem] w-[26rem] rounded-full bg-brand-magenta opacity-15 blur-3xl dark:opacity-25" />
      <div className="absolute inset-x-0 top-0 h-[36rem] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:4rem_4rem] opacity-50 [mask-image:radial-gradient(60%_55%_at_50%_0%,black,transparent)]" />
    </div>

    <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-24">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-up opacity-70 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-status-up" />
          </span>
          Website &amp; server monitoring
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Know the moment your site{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">goes down</span>.
        </h1>

        <p className="mt-5 text-lg font-medium text-[var(--muted)]">
          Every Check. Every Pulse. Always Aware.
        </p>

        <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          PulseWatch checks your websites, APIs and servers around the clock, confirms real
          outages, and alerts you before your users notice.
        </p>

        <ul className="mt-8 space-y-3">
          {HERO_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
              />
              <span className="text-sm text-[var(--foreground)] sm:text-base">{benefit}</span>
            </li>
          ))}
        </ul>

        <HeroSignupForm />

        <a
          href="#features"
          className="mt-6 inline-flex items-center text-sm font-medium text-brand-blue transition-colors hover:text-brand-purple"
        >
          See how it works →
        </a>
      </div>

      <div className="mt-16 lg:mt-0">
        <HeroMockup />
      </div>
    </div>

    <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[var(--border)] pt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Notified through
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {NOTIFICATION_CHANNELS.map((channel) => (
            <li
              key={channel.label}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)]"
            >
              <channel.icon aria-hidden="true" className="h-4 w-4" />
              {channel.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
