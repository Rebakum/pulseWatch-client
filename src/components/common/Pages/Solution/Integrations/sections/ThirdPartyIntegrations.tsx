import {
  Bell,
  BellRing,
  MessageCircle,
  MessageSquare,
  Webhook,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

const THIRD_PARTY_INTEGRATIONS = [
  { title: 'Slack', Icon: MessageCircle, mark: 'S', tone: 'text-[#36c5f0]' },
  { title: 'Zapier', Icon: Zap, mark: '✳', tone: 'text-[#ff4f00]' },
  { title: 'PagerDuty', Icon: BellRing, mark: 'P', tone: 'text-[#06ac38]' },
  { title: 'Splunk On-Call', Icon: Bell, mark: '>', tone: 'text-[#65a637]' },
  { title: 'Telegram', Icon: MessageCircle, mark: '➤', tone: 'text-[#229ed9]' },
  { title: 'Webhooks', Icon: Webhook, mark: '{}', tone: 'text-brand-blue' },
  { title: 'Discord', Icon: MessageCircle, mark: 'D', tone: 'text-[#5865f2]' },
  { title: 'Mattermost', Icon: MessageSquare, mark: 'M', tone: 'text-[#145dbf]' },
  { title: 'Pushbullet', Icon: Bell, mark: 'P', tone: 'text-[#4ab367]' },
  { title: 'Microsoft Teams', Icon: MessageSquare, mark: 'T', tone: 'text-[#6264a7]' },
  { title: 'Google Chat', Icon: MessageSquare, mark: 'G', tone: 'text-[#34a853]' },
  { title: 'Pushover', Icon: Bell, mark: 'P', tone: 'text-[#2497e3]' },
] as const;

export default function ThirdPartyIntegrations() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
          3<sup className="text-sm">rd</sup> party{' '}
          <DeveloperGradientText>integrations.</DeveloperGradientText>
        </h2>
        <div className="mx-auto mt-7 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {THIRD_PARTY_INTEGRATIONS.map(({ title, Icon, mark, tone }) => (
            <article
              key={title}
              className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-0.5"
            >
              <span className={`relative grid size-8 place-items-center ${tone}`}>
                <Icon aria-hidden="true" className="size-7 stroke-[2.4]" />
                <span className="absolute inset-0 grid place-items-center text-xs font-black">
                  {mark}
                </span>
              </span>
              <h3 className="mt-2 text-[10px] font-semibold">{title}</h3>
            </article>
          ))}
          <Link
            href="/alerts-notifications"
            className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-0.5"
          >
            <span className="text-3xl font-bold text-brand-blue">?</span>
            <span className="mt-1 text-[10px] font-semibold">Need more?</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
