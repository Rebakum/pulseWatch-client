import { Bell, MessageCircle, MessageSquare, Webhook, Zap } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const TOOLS = [
  { name: 'Slack', Icon: MessageCircle },
  { name: 'Microsoft Teams', Icon: MessageSquare },
  { name: 'PagerDuty', Icon: Bell },
  { name: 'Zapier', Icon: Zap },
  { name: 'Custom apps', Icon: Webhook },
] as const;

export default function WebhookIntegrations() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 size-96 rounded-full bg-brand-blue/15 blur-3xl"
      />
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {TOOLS.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <Icon aria-hidden="true" className="size-6 text-brand-blue-light" />
              <span className="mt-2 text-xs font-semibold text-slate-200">{name}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Flexible connections
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Connect to your <DeveloperGradientText>whole stack.</DeveloperGradientText>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            Send events to chat, on-call, automation platforms, or a custom service your team owns.
          </p>
        </div>
      </Container>
    </section>
  );
}
