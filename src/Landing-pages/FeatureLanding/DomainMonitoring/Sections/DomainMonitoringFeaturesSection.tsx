import { Bell, Mail, Phone, ShieldAlert } from 'lucide-react';
import type { ReactNode } from 'react';

import Container from '@/components/common/Container';

const TAN_RISE = 0.325;
const TAN_LEAN = 0.65;

const WARN = 'var(--color-status-warning)';

const CARD =
  'rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] text-[var(--foreground)]';

const PLANE =
  'absolute left-0 origin-top-left [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)]';

function Glow() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/15 blur-[110px]" />
  );
}

function PlaneStage({
  w,
  h,
  scale,
  children,
}: {
  w: number;
  h: number;
  scale: string;
  children: ReactNode;
}) {
  const rise = Math.round(TAN_RISE * w);
  const total = Math.round(h * (1 - TAN_LEAN * TAN_RISE) + rise) + 60;

  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto w-full max-w-[34rem] ${scale}`}
      style={{ height: `calc(var(--s) * ${total}px)` }}
    >
      <Glow />
      <div className={PLANE} style={{ top: `calc(var(--s) * ${rise + 30}px)` }}>
        {children}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 1: Prevent Incidents caused by expired domain.
--------------------------------------------------------------------- */
const DOMAIN_ERR_W = 500;
const DOMAIN_ERR_H = 310;

function DomainAutoRenewFailVisual() {
  return (
    <PlaneStage
      w={DOMAIN_ERR_W}
      h={DOMAIN_ERR_H}
      scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.76]"
    >
      <div
        className={`${CARD} relative z-[2] px-8 py-7`}
        style={{ width: DOMAIN_ERR_W, height: DOMAIN_ERR_H }}
      >
        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span className="font-semibold tracking-wider">Domain.</span>
          <span>Registrar: Cloudflare</span>
        </div>

        <p className="mt-4 flex items-center gap-2 text-[20px] font-bold leading-tight text-[var(--foreground)]">
          <ShieldAlert className="h-5 w-5" style={{ color: WARN }} aria-hidden="true" />
          Auto-renew failed
        </p>
        <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
          <p className="text-[12px] font-semibold" style={{ color: WARN }}>
            Expires in 14 days
          </p>
          <p className="mt-1 text-[11px] text-[var(--muted)]">Payment method declined</p>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 2: Get notified about the domain expiration date.
--------------------------------------------------------------------- */
function DomainExpiryAlertVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />
      <div className={`${CARD} relative mx-auto w-full max-w-[28rem] p-6`}>
        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full" style={{ background: WARN }} />
            PULSEWATCH
          </span>
          <span>5 min</span>
        </div>

        <p className="mt-3 text-[18px] font-bold">PulseWatch</p>
        <p className="mt-1 text-[12px] text-[var(--muted)]">Domain is expiring in 14 days!</p>

        <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-[11px] text-[var(--muted)]">
          <p className="font-medium text-[var(--foreground)]">www.client-eshop.com</p>
          <p className="mt-1">Domain expiration alert triggered</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 3: Choose your preferred type of notifications.
--------------------------------------------------------------------- */
const NOTIF_W = 500;
const NOTIF_H = 310;

function NotificationsChannelsVisual() {
  return (
    <PlaneStage w={NOTIF_W} h={NOTIF_H} scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.76]">
      <div
        className={`${CARD} relative z-[2] px-8 py-7`}
        style={{ width: NOTIF_W, height: NOTIF_H }}
      >
        <div className="text-[12px] font-semibold text-[var(--foreground)]">
          Alert notification-channels
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <span className="flex items-center gap-2 text-[12px] text-[var(--foreground)]">
              <Mail className="h-4 w-4 text-brand-blue" /> E-mail
            </span>
            <span className="h-4 w-8 rounded-full bg-[image:var(--background-image-brand-gradient)] p-0.5">
              <span className="block h-3 w-3 rounded-full bg-white ml-auto" />
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <span className="flex items-center gap-2 text-[12px] text-[var(--foreground)]">
              <Phone className="h-4 w-4 text-brand-blue" /> SMS
            </span>
            <span className="h-4 w-8 rounded-full bg-[image:var(--background-image-brand-gradient)] p-0.5">
              <span className="block h-3 w-3 rounded-full bg-white ml-auto" />
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <span className="flex items-center gap-2 text-[12px] text-[var(--foreground)]">
              <Bell className="h-4 w-4 text-brand-blue" /> Push notifications
            </span>
            <span className="h-4 w-8 rounded-full bg-[image:var(--background-image-brand-gradient)] p-0.5">
              <span className="block h-3 w-3 rounded-full bg-white ml-auto" />
            </span>
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

const FEATURES = [
  {
    title: 'Prevent Incidents caused by expired domain.',
    description:
      'Take your website monitoring to the next level with additional domain expiration monitoring. Keep track of your domain expiration and prevent domain expiry issues with automatic notifications.',
    Visual: DomainAutoRenewFailVisual,
  },
  {
    title: 'Get notified about the domain expiration date.',
    description:
      'Use domain monitoring to receive alerts 30, 14 and 7 days before your domain name expires and on the day it expires, and view the domain expiration date anytime in your dashboard.',
    Visual: DomainExpiryAlertVisual,
  },
  {
    title: 'Choose your preferred type of notifications.',
    description:
      'Get instant alerts via email, SMS, voice call or through one of many integrations (such as Slack, Zapier, Splunk, etc.)',
    Visual: NotificationsChannelsVisual,
  },
] as const;

export default function DomainMonitoringFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-8 text-[var(--foreground)] sm:py-12">
      <Container>
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--border)] lg:block"
          />

          {FEATURES.map(({ title, description, Visual }, index) => {
            const reversed = index % 2 === 1;

            return (
              <div
                key={title}
                className={`relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 ${
                  index > 0
                    ? "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[var(--border)] before:content-['']"
                    : ''
                }`}
              >
                <div className={reversed ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}>
                  <h2 className="max-w-lg text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
                    {title}
                    <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                    {description}
                  </p>
                </div>

                <div className={reversed ? 'lg:order-1' : undefined}>
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
