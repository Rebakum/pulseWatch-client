import { CreditCard, ShoppingBag, Wallet } from 'lucide-react';
import type { ReactNode } from 'react';

/* shared look (same tokens as FeatureVisuals) */
const CARD =
  'rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]';

/* ONE shared tilt for every rotated layer (measured from the reference):
   rows climb 16deg to the right, left edges lean right 30deg.
   Only on desktop (lg); mobile gets a normal stacked layout. */
const TILT = 'lg:origin-top-left lg:[transform:skewY(-16deg)_skewX(30deg)]';

/* hairline gradient on top of a front card (brand colors from global css) */
function Hairline() {
  return (
    <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
  );
}

/* ---------- shared: desktop layered stage, mobile normal stack ---------- */
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:h-[24rem]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/20 blur-[110px]" />
      <div className="relative space-y-3 lg:static lg:space-y-0">{children}</div>
    </div>
  );
}

/* ---------- incidents data + row ---------- */
const INCIDENTS = [
  {
    state: 'Ongoing',
    provider: 'Stripe',
    text: 'Payout processing delays',
    date: '06/10/2026, 1:20 PM GMT+3',
  },
  {
    state: 'Ongoing',
    provider: 'Stripe',
    text: 'Elevated API latency',
    date: '06/10/2026, 10:00 AM GMT+3',
  },
  {
    state: 'Resolved',
    provider: 'Stripe',
    text: 'Issuing card declines elevated',
    date: '06/05/2026, 4:10 PM GMT+3',
  },
  {
    state: 'Resolved',
    provider: 'Stripe',
    text: 'Payment tokenization errors',
    date: '06/03/2026, 9:45 AM GMT+3',
  },
] as const;

function IncidentRow({
  state,
  provider,
  text,
  date,
  compact = false,
}: (typeof INCIDENTS)[number] & { compact?: boolean }) {
  const ongoing = state === 'Ongoing';
  return (
    <div className="flex items-center gap-2.5 border-t border-[var(--border)] py-2.5 text-[10px] first:border-t-0">
      <span
        className={`h-3 w-3 shrink-0 rounded-full ${ongoing ? 'bg-status-down' : 'bg-status-up'}`}
      />
      <span
        className={`w-11 shrink-0 font-semibold ${ongoing ? 'text-status-down' : 'text-status-up'}`}
      >
        {state}
      </span>
      <span className="w-9 shrink-0 font-semibold text-[var(--foreground)]">{provider}</span>
      <span className="min-w-0 flex-1 truncate whitespace-nowrap font-medium text-[var(--foreground)]">{text}</span>
      {compact ? null : (
        <>
          <span className="hidden shrink-0 whitespace-nowrap text-[8px] text-[var(--muted)] sm:inline">{date}</span>
          <span className="shrink-0 rounded bg-status-warning px-1.5 py-0.5 text-[8px] font-bold text-black/80">
            Minor
          </span>
        </>
      )}
    </div>
  );
}

/* ---------- dim dashboard that sits BEHIND the tilted cards (desktop only) ---------- */
function Backdrop({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-[1] hidden w-[21rem] opacity-65 lg:block ${TILT} [mask-image:linear-gradient(115deg,black_25%,transparent_88%)] ${className}`}
    >
      <div className="flex gap-3">
        <div className="h-44 w-28 shrink-0 rounded-2xl border border-status-up/20 bg-status-up/10" />
        <div className="min-w-0 flex-1 space-y-3">
          <div className={`${CARD} px-3 py-2`}>
            <p className="text-[9px] font-semibold text-[var(--muted)]">Active incidents</p>
            {INCIDENTS.slice(0, 2).map((item) => (
              <IncidentRow key={item.text} {...item} compact />
            ))}
          </div>
          <div className={`${CARD} px-3 py-2`}>
            <p className="text-[9px] font-semibold text-[var(--muted)]">Latest incidents</p>
            {INCIDENTS.slice(2).map((item) => (
              <IncidentRow key={item.text} {...item} compact />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Row 1: Current status + Last 30 days (tilted) ---------- */
export function StatusVisual() {
  return (
    <Stage>
      <Backdrop className="lg:left-[32%] lg:top-[66%]" />

      <div
        className={`${CARD} relative z-[3] px-5 py-4 lg:absolute lg:left-[3%] lg:top-[30%] lg:w-[50%] ${TILT}`}
      >
        <Hairline />
        <p className="text-[11px] font-semibold text-[var(--foreground)]">Current status</p>
        <p className="mt-1 text-2xl font-extrabold leading-none text-status-up">Up</p>
        <p className="mt-1.5 text-[10px] text-[var(--foreground)]">Currently up for 5 d, 14 h, 5 m</p>
      </div>

      <div
        className={`${CARD} relative z-[4] px-5 py-4 lg:absolute lg:left-[16%] lg:top-[58%] lg:w-[58%] ${TILT}`}
      >
        <Hairline />
        <span className="absolute right-5 top-3 text-[10px] font-semibold text-[var(--muted)]">
          100%
        </span>
        <p className="text-[11px] font-semibold text-[var(--foreground)]">Last 30 days</p>
        <p className="mt-1 text-xl font-extrabold leading-none text-status-down">2 incidents</p>
      </div>
    </Stage>
  );
}

/* ---------- Row 2: Active incidents (straight) + stacked dim cards ---------- */
export function IncidentsVisual() {
  return (
    <Stage>
      <div className="relative mx-auto w-full max-w-[30rem] lg:absolute lg:left-[6%] lg:top-6">
        <div className={`${CARD} relative z-10 px-5 py-4`}>
          <Hairline />
          <p className="mb-1 text-[10px] font-semibold text-[var(--foreground)]">
            Active incidents
          </p>
          {INCIDENTS.slice(0, 3).map((item) => (
            <IncidentRow key={item.text} {...item} />
          ))}
        </div>

        {/* stacked layers under the card, fading out */}
        <div className="[mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]">
          <div className={`${CARD} relative -mt-2 ml-3 mr-[8%] px-5 pb-3 pt-5 opacity-60`}>
            {INCIDENTS.slice(2).map((item) => (
              <IncidentRow key={item.text} {...item} />
            ))}
          </div>
          <div className={`${CARD} relative -mt-1 ml-6 mr-[14%] h-14 opacity-30`} />
        </div>
      </div>
    </Stage>
  );
}

/* ---------- Row 3: Provider status list (tilted) ---------- */
const PROVIDERS = [
  { name: 'Stripe', Icon: CreditCard, status: 'Operational', warning: false },
  { name: 'PayPal', Icon: Wallet, status: 'Operational', warning: false },
  { name: 'Shopify', Icon: ShoppingBag, status: 'Minor outage', warning: true },
] as const;

export function ProvidersVisual() {
  return (
    <Stage>
      <Backdrop className="lg:left-[36%] lg:top-[70%]" />

      <div
        className={`${CARD} relative z-[3] overflow-hidden lg:absolute lg:left-[3%] lg:top-[38%] lg:w-[62%] ${TILT}`}
      >
        <Hairline />
        {PROVIDERS.map(({ name, Icon, status, warning }) => (
          <div
            key={name}
            className="flex items-center gap-3 border-t border-[var(--border)] px-5 py-4 first:border-t-0"
          >
            <span
              className={`h-3 w-3 shrink-0 rounded-full ${warning ? 'bg-status-warning' : 'bg-status-up'}`}
            />
            <Icon className="h-4 w-4 shrink-0 text-[var(--foreground)]" aria-hidden="true" />
            <span className="text-xs font-semibold text-[var(--foreground)]">{name}</span>
            <span
              className={`ml-auto shrink-0 rounded border px-2 py-0.5 text-[9px] font-semibold ${
                warning
                  ? 'border-status-warning/40 bg-status-warning/20 text-status-warning'
                  : 'border-status-up/30 bg-status-up/20 text-status-up'
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </Stage>
  );
}