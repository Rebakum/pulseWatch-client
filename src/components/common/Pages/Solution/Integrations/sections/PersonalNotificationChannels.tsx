import { Bell, Mail, MessageSquare, Phone, Smartphone } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

const PERSONAL_CHANNELS = [
  { title: 'E-mail', Icon: Mail },
  { title: 'SMS', Icon: Smartphone },
  { title: 'Voice call', Icon: Phone },
  { title: 'Email to SMS', Icon: MessageSquare },
  { title: 'Mobile app push', Icon: Bell },
] as const;

export default function PersonalNotificationChannels() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-4xl">
          <DeveloperGradientText>Personal</DeveloperGradientText> notification channels.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PERSONAL_CHANNELS.map(({ title, Icon }) => (
            <article
              key={title}
              className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.07)] transition-transform hover:-translate-y-1"
            >
              <span className="relative grid size-14 place-items-center text-slate-900">
                <Icon aria-hidden="true" className="size-12 stroke-[1.6]" />
                <span className="absolute right-0 top-1 size-4 rounded-full bg-brand-blue ring-2 ring-[var(--background)]" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
