import { Activity, ChevronDown, MessageCircle, Radio, Target } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import SplitHeader from '../FeatureLanding/WebsiteMonitoring/sections/SplitHeader';

const NAV_ITEMS = [
  { label: 'Monitoring', Icon: Activity, active: true },
  { label: 'Incidents', Icon: Radio, active: false },
  { label: 'Status pages', Icon: Target, active: false },
] as const;

const FIELD =
  'rounded-md border border-[var(--border)] bg-[color:var(--background)] px-3 py-2 text-[10px] text-[var(--muted)]';

function PingMonitorMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
      <div className="grid lg:grid-cols-[11rem_1fr_11rem]">
        <aside className="hidden border-r border-[var(--border)] bg-[color:var(--background)] p-4 sm:block">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-gradient text-[10px] font-bold text-white">
              P
            </span>
            <span className="text-xs font-bold tracking-tight">PulseWatch</span>
          </div>
          <nav className="mt-5 space-y-1">
            {NAV_ITEMS.map(({ label, Icon, active }) => (
              <span
                key={label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                  active
                    ? 'bg-[var(--color-status-up)]/10 font-semibold text-[var(--color-status-up)]'
                    : 'text-[var(--muted)]'
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                {label}
              </span>
            ))}
          </nav>
          <div className="mt-8 flex items-center gap-2 border-t border-[var(--border)] pt-3">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-blue/30 text-[10px] font-bold">
              K
            </span>
            <span className="text-[11px] font-semibold">Kristián</span>
            <ChevronDown className="ml-auto h-3 w-3 text-[var(--muted)]" />
          </div>
        </aside>

        <div className="p-5 sm:p-6">
          <p className="text-[11px] font-semibold">Monitoring interval</p>
          <p className="mt-1 text-[9px] text-[var(--muted)]">
            Choose how often PulseWatch checks your host.
          </p>
          <div className="mt-3 h-1 rounded-full bg-[var(--border)]">
            <div className="relative h-1 w-[28%] rounded-full bg-brand-blue">
              <span className="absolute -right-1.5 -top-1 h-3 w-3 rounded-full border-2 border-brand-blue bg-[var(--surface)]" />
            </div>
          </div>
          <div className="mt-1.5 flex justify-between text-[8px] text-[var(--muted)]">
            <span>30 sec</span>
            <span>1 min</span>
            <span>5 min</span>
            <span>30 min</span>
          </div>

          <p className="mt-5 text-[11px] font-semibold">Host or IP address</p>
          <p className="mt-0.5 text-[9px] text-[var(--muted)]">
            Enter the device or server you want to keep reachable.
          </p>
          <div className={`${FIELD} mt-1.5 flex items-center gap-2`}>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-up)]" />
            54.183.78.11
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[11px] font-semibold">IP version</p>
              <div className={`${FIELD} mt-1.5 flex items-center justify-between`}>
                IPv4 / IPv6
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold">Check region</p>
              <div className={`${FIELD} mt-1.5 flex items-center justify-between`}>
                North America
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-2.5">
            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded bg-brand-blue text-[9px] text-white">
              ✓
            </span>
            <div className="pb-4">
              <p className="text-[11px] font-semibold">Alert when host is unreachable</p>
              <p className="mt-0.5 text-[9px] leading-relaxed text-[var(--muted)]">
                Get notified when the device stops responding to ping checks.
              </p>
            </div>
          </div>

          <ShaderButton type="button">Create monitor</ShaderButton>
        </div>

        <aside className="hidden border-l border-[var(--border)] p-4 lg:block">
          <p className="text-[11px] font-bold text-brand-blue">Monitor details</p>
          <p className="mt-3 text-[11px] text-[var(--muted)]">Integrations &amp; Teams</p>
          <p className="mt-2 text-[11px] text-[var(--muted)]">Maintenance info</p>
        </aside>
      </div>

      <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[color:var(--background)] shadow-lg">
        <MessageCircle className="h-4 w-4 text-[var(--muted)]" />
      </span>
    </div>
  );
}

export default function PingMonitoringSetupShowcase() {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <SplitHeader
          title={[{ text: 'Set up ping monitoring in seconds' }, { text: '.', tone: 'brand' }]}
          description="Add a server, public IP, or network device and get notified as soon as it stops responding or its latency changes."
        />

        <div className="mt-12">
          <PingMonitorMock />
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/register" className="outline-btn">
            Start monitoring in 30 seconds
          </Link>
        </div>
      </Container>
    </section>
  );
}
