import {
  Activity,
  ChevronDown,
  FileText,
  MessageCircle,
  Plug,
  Siren,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import SplitHeader from '../../WebsiteMonitoring/sections/SplitHeader';

const NAV_ITEMS = [
  { label: 'Monitoring', Icon: Activity, active: true },
  { label: 'Incidents', Icon: Siren, active: false },
  { label: 'Status pages', Icon: FileText, active: false },
  { label: 'Maintenance', Icon: Wrench, active: false },
  { label: 'Team members', Icon: Users, active: false },
  { label: 'Integrations & API', Icon: Plug, active: false },
] as const;

const FIELD =
  'rounded-md border border-[var(--border)] bg-[color:var(--background)] px-3 py-2 text-[10px] text-[var(--muted)]';

function Toggle({ on = true }: { on?: boolean }) {
  return (
    <span
      className={`inline-flex h-4 w-7 shrink-0 items-center rounded-full p-0.5 ${
        on ? 'bg-brand-blue' : 'bg-[var(--border)]'
      }`}
    >
      <span className={`h-3 w-3 rounded-full bg-white ${on ? 'translate-x-3' : ''}`} />
    </span>
  );
}

/** CSS-only recreation of the keyword "create monitor" screen (no image asset). */
function KeywordSetupMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
      <div className="grid lg:grid-cols-[11rem_1fr_11rem]">
        {/* sidebar */}
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
                  active ? 'bg-brand-blue/10 font-semibold text-brand-blue' : 'text-[var(--muted)]'
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

        {/* form */}
        <div className="p-5 sm:p-6">
          {/* interval slider */}
          <p className="text-[11px] font-semibold">Monitoring interval</p>
          <p className="mt-1 text-[9px] text-[var(--muted)]">
            Your monitor will be checked every 5 minutes.
          </p>
          <div className="mt-3 h-1 rounded-full bg-[var(--border)]">
            <div className="relative h-1 w-[28%] rounded-full bg-brand-blue">
              <span className="absolute -right-1.5 -top-1 h-3 w-3 rounded-full border-2 border-brand-blue bg-[var(--surface)]" />
            </div>
          </div>
          <div className="mt-1.5 flex justify-between text-[8px] text-[var(--muted)]">
            <span>1 min</span>
            <span>5 min</span>
            <span>30 min</span>
            <span>60 min</span>
          </div>

          {/* separate alert */}
          <div className="mt-5 flex items-start gap-2.5">
            <Toggle on={false} />
            <div>
              <p className="text-[11px] font-semibold">Send a separate alert when a check fails</p>
              <p className="mt-0.5 text-[9px] leading-relaxed text-[var(--muted)]">
                Get an extra notification the moment the keyword rule is broken, before the monitor
                is marked as down.
              </p>
            </div>
          </div>

          {/* IP version */}
          <p className="mt-5 text-[11px] font-semibold">Internet Protocol version</p>
          <p className="mt-0.5 text-[9px] text-[var(--muted)]">
            Select which IP version the monitor should use.
          </p>
          <div className={`${FIELD} mt-1.5 flex items-center justify-between`}>
            IPv4 / IPv6 (prefer IPv4)
            <ChevronDown className="h-3 w-3" />
          </div>

          {/* redirects */}
          <div className="mt-5 flex items-start gap-2.5">
            <Toggle />
            <div>
              <p className="text-[11px] font-semibold">Follow redirections</p>
              <p className="mt-0.5 text-[9px] leading-relaxed text-[var(--muted)]">
                The monitor will follow redirects and check the final page for your keyword.
              </p>
            </div>
          </div>

          {/* status codes */}
          <p className="mt-5 text-[11px] font-semibold">List HTTP status codes</p>
          <p className="mt-0.5 text-[9px] text-[var(--muted)]">
            Treat these response codes as a successful check.
          </p>
          <div className={`${FIELD} mt-1.5 flex items-center gap-1.5`}>
            {['2xx', '3xx'].map((code) => (
              <span
                key={code}
                className="rounded bg-brand-blue/20 px-1.5 py-0.5 text-[9px] font-semibold text-brand-blue"
              >
                {code}
              </span>
            ))}
            <X className="ml-auto h-3 w-3" />
          </div>

          {/* auth */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[11px] font-semibold">Auth type</p>
              <div className={`${FIELD} mt-1.5 flex items-center justify-between`}>
                None
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold">Auth credentials</p>
              <div className={`${FIELD} mt-1.5`}>Username</div>
            </div>
          </div>
          <button className="mt-3 rounded-md bg-[image:var(--background-image-brand-gradient)] p-1.5 text-center font-semibold text-white text-[12px]">
            Create monitor
          </button>
        </div>

        {/* right panel */}
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

export default function KeywordSetupShowcase() {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <SplitHeader
          title={[{ text: 'Set up keyword monitoring in seconds' }, { text: '.', tone: 'brand' }]}
          description="Be the first who knows that your website is down. Reliable monitoring warns you before any significant troubles and saves you money."
        />

        <div className="mt-12">
          <KeywordSetupMock />
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
