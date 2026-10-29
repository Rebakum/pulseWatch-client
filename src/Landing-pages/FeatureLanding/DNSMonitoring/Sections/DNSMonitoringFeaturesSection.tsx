import { Check, Network, ShieldAlert } from 'lucide-react';
import type { ReactNode } from 'react';

import Container from '@/components/common/Container';

const TAN_RISE = 0.325;
const TAN_LEAN = 0.65;

const DOWN = 'var(--color-status-down)';

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
   Row 1: Monitor all DNS records.
--------------------------------------------------------------------- */
const DNS_RECORDS_W = 500;
const DNS_RECORDS_H = 310;

function DNSRecordsVisual() {
  return (
    <PlaneStage
      w={DNS_RECORDS_W}
      h={DNS_RECORDS_H}
      scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.76]"
    >
      <div
        className={`${CARD} relative z-[2] px-8 py-7`}
        style={{ width: DNS_RECORDS_W, height: DNS_RECORDS_H }}
      >
        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span className="font-semibold tracking-wider">DNS Records</span>
          <span>A, AAAA, CNAME, MX</span>
        </div>

        <p className="mt-4 flex items-center gap-2 text-[20px] font-bold leading-tight text-[var(--foreground)]">
          <Network className="h-5 w-5 text-brand-blue" aria-hidden="true" />
          Track all DNS changes
        </p>
        <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
          <p className="text-[12px] font-semibold text-brand-blue">Active monitoring</p>
          <p className="mt-1 text-[11px] text-[var(--muted)]">All records secure and consistent</p>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 2: Instant alerts on changes.
--------------------------------------------------------------------- */
function DNSAlertVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />
      <div className={`${CARD} relative mx-auto w-full max-w-[28rem] p-6`}>
        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full" style={{ background: DOWN }} />
            PULSEWATCH
          </span>
          <span>5 min</span>
        </div>

        <p className="mt-3 text-[18px] font-bold">PulseWatch</p>
        <p className="mt-1 text-[12px] text-[var(--muted)]">DNS Monitor is down!</p>

        <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-[11px] text-[var(--muted)]">
          <p className="font-medium text-[var(--foreground)]">www.client-eshop.com</p>
          <p className="mt-1">DNS record change or outage detected</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 3: Prevent downtime and security risks.
--------------------------------------------------------------------- */
function DNSSecurityVisual() {
  return (
    <PlaneStage
      w={DNS_RECORDS_W}
      h={DNS_RECORDS_H}
      scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.76]"
    >
      <div
        className={`${CARD} relative z-[2] px-8 py-7 flex flex-col justify-center items-center text-center`}
        style={{ width: DNS_RECORDS_W, height: DNS_RECORDS_H }}
      >
        <div className="h-12 w-12 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center mb-3">
          <ShieldAlert className="h-6 w-6 text-brand-blue" />
        </div>
        <p className="text-[18px] font-bold text-[var(--foreground)]">
          Security & Uptime Protection
        </p>
        <p className="mt-2 text-xs text-[var(--muted)] max-w-xs">
          Detect accidental or malicious changes before they impact website visitors.
        </p>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 4: Easy and quick setup.
--------------------------------------------------------------------- */
function DNSSetupVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />
      <div className={`${CARD} relative mx-auto w-full max-w-[28rem] p-6`}>
        <div className="text-[12px] font-semibold text-[var(--foreground)] mb-3">Record type</div>
        <div className="space-y-2">
          {['AAAA', 'A', 'MX', 'CNAME', 'TXT'].map((type, idx) => (
            <div
              key={type}
              className={`rounded-lg border px-3 py-2 text-xs flex items-center justify-between ${
                idx === 1
                  ? 'border-brand-blue/60 bg-brand-blue/10 text-white font-medium'
                  : 'border-[var(--border)] bg-[var(--background)] text-[var(--muted)]'
              }`}
            >
              <span>{type}</span>
              {idx === 1 && <Check className="h-3.5 w-3.5 text-brand-blue" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: 'Monitor all DNS records.',
    description:
      'Track A, NS, CNAME, SOA, PTR, MX, TXT, AAAA, SRV, DS, NSECC, DNSKEY, NSEC3, SPF records for any unexpected changes. It helps you keep your domain settings secure and consistent at all times.',
    Visual: DNSRecordsVisual,
  },
  {
    title: 'Instant alerts on changes.',
    description:
      'Get notified immediately when a DNS record is modified, added, or deleted. This way, you can act fast to fix issues before they cause downtime or security risks.',
    Visual: DNSAlertVisual,
  },
  {
    title: 'Prevent downtime and security risks.',
    description:
      'DNS monitoring helps you detect accidental or malicious changes before they affect your website visitors. Stay in control and keep your services running smoothly without disruptions.',
    Visual: DNSSecurityVisual,
  },
  {
    title: 'Easy and quick setup.',
    description:
      "Add your domain and choose which records you want to monitor. Setup only takes a few minutes, and you'll start receiving alerts automatically if anything changes.",
    Visual: DNSSetupVisual,
  },
] as const;

export default function DNSMonitoringFeaturesSection() {
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
