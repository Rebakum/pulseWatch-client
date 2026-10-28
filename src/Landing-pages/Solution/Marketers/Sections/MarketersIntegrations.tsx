import {
  Bell,
  MessageCircle,
  MessageSquare,
  Smartphone,
  Volume2,
  Webhook,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const CHANNELS = [
  { title: 'Email', Icon: MessageSquare },
  { title: 'SMS', Icon: Smartphone },
  { title: 'Voice call', Icon: Volume2 },
  { title: 'Mobile app push', Icon: Bell },
  { title: 'Slack', Icon: MessageCircle },
  { title: 'Microsoft Teams', Icon: MessageSquare },
  { title: 'Discord', Icon: MessageCircle },
  { title: 'Zapier', Icon: Zap },
  { title: 'Webhooks', Icon: Webhook },
] as const;

export default function MarketersIntegrations() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-brand-blue/20 blur-3xl"
      />
      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8">
          {CHANNELS.map(({ title, Icon }) => (
            <div key={title} className="flex flex-col items-center gap-2.5 text-center">
              <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-blue-200 sm:size-12">
                <Icon aria-hidden="true" className="size-5 sm:size-6" />
              </span>
              <span className="text-[10px] font-semibold text-slate-200 sm:text-xs">{title}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Campaign alerts
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Get notified <DeveloperGradientText>immediately.</DeveloperGradientText>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
            Get live alerts and pause your campaigns before you burn through the whole budget for
            nothing. Choose from notification channels that work for your team.
          </p>
          <Link
            href="/alerts-notifications"
            className="mt-6 inline-flex items-center text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
          >
            Show all integrations
          </Link>
        </div>
      </Container>
    </section>
  );
}
