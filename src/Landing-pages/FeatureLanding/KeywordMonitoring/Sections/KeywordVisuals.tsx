import { Bell, Mail, MessageSquare, Phone, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

/* shared look (same tokens as ThirdPartyVisuals) */
const CARD =
  'rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]';

/* ONE shared tilt for every rotated layer. Desktop (lg) only. */
const TILT = 'lg:origin-top-left lg:[transform:skewY(-16deg)_skewX(30deg)]';

function Hairline() {
  return (
    <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
  );
}

function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:h-[24rem]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/20 blur-[110px]" />
      <div className="relative space-y-3 lg:static lg:space-y-0">{children}</div>
    </div>
  );
}

function Toggle({ on = true }: { on?: boolean }) {
  return (
    <span
      className={`ml-auto inline-flex h-4 w-7 shrink-0 items-center rounded-full p-0.5 ${
        on ? 'bg-brand-blue' : 'bg-[var(--border)]'
      }`}
    >
      <span className={`h-3 w-3 rounded-full bg-white ${on ? 'translate-x-3' : ''}`} />
    </span>
  );
}

/* red tag text inside the code card */
function Tag({ children }: { children: string }) {
  return <span className="text-[#ef6b6b]">{children}</span>;
}

/* ---------- dim "channels" panel that sits BEHIND the tilted form ---------- */
function BackdropPanel({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-[1] hidden w-[16rem] opacity-60 lg:block ${TILT} [mask-image:linear-gradient(115deg,black_25%,transparent_88%)] ${className}`}
    >
      <div className={`${CARD} space-y-2.5 px-4 py-3`}>
        <div className="flex items-center gap-2">
          <span className="h-2 w-16 rounded-full bg-[var(--border)]" />
          <Toggle />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-24 rounded-full bg-[var(--border)]" />
          <Toggle />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-12 rounded-full bg-[var(--border)]" />
          <Toggle on={false} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Row 1: keyword form (tilted) ---------- */
export function KeywordFormVisual() {
  return (
    <Stage>
      <BackdropPanel className="lg:left-[48%] lg:top-[58%]" />

      <div
        className={`${CARD} relative z-[3] px-5 py-4 lg:absolute lg:left-[6%] lg:top-[24%] lg:w-[66%] ${TILT}`}
      >
        <Hairline />
        <p className="text-[10px] font-semibold text-[var(--muted)]">Keyword to look for</p>
        <div className="mt-1.5 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[10px] text-[var(--foreground)]">
          Is, Add or &quot;add&quot;, &quot;availability&quot;, &quot;Out of stock&quot;
        </div>

        <p className="mt-3 text-[10px] font-semibold text-[var(--muted)]">
          Alert when keyword exists
        </p>
        <div className="mt-1.5 flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[10px] text-[var(--foreground)]">
          Alert when keyword <span className="font-semibold">does not exist</span>
          <Toggle />
        </div>

        <div className="mt-3 flex items-center gap-2 text-[10px] text-[var(--foreground)]">
          <span className="grid h-3.5 w-3.5 place-items-center rounded bg-brand-blue text-[8px] text-white">
            ✓
          </span>
          Case-sensitive check
        </div>
      </div>
    </Stage>
  );
}

/* ---------- Row 2: notification + page source (straight, fading) ---------- */
export function WatchdogVisual() {
  return (
    <Stage>
      <div className="relative mx-auto w-full max-w-[26rem] lg:absolute lg:left-[8%] lg:top-4">
        <div className={`${CARD} relative z-10 px-5 py-3.5`}>
          <Hairline />
          <div className="flex items-center justify-between text-[9px] tracking-wide text-[var(--muted)]">
            <span className="flex items-center gap-2 font-medium uppercase">
              <i className="size-3.5 rounded-full bg-[image:var(--background-image-brand-gradient)]" />
              PulseWatch
            </span>
            <span>NOW</span>
          </div>
          <p className="mt-1.5 text-sm font-bold text-[var(--foreground)]">PulseWatch</p>
          <p className="text-xs text-[var(--muted)]">The product is in stock now!</p>
        </div>

        <div className="[mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]">
          <div
            className={`${CARD} relative -mt-1 ml-3 mr-[6%] px-5 pb-6 pt-5 text-[10px] leading-[1.7] text-[var(--foreground)]`}
          >
            <div className="whitespace-nowrap">
              <Tag>&lt;div class=</Tag>&quot;product-detail&quot;<Tag>&gt;</Tag>
            </div>
            <div className="whitespace-nowrap pl-3">
              <Tag>&lt;h1&gt;</Tag> <b>Sony WH-1000XM5</b> <Tag>&lt;/h1&gt;</Tag>
            </div>
            <div className="whitespace-nowrap pl-3">
              <Tag>&lt;p class=</Tag>&quot;price&quot;<Tag>&gt;</Tag>$279.99<Tag>&lt;/p&gt;</Tag>
            </div>
            <div className="whitespace-nowrap pl-3">
              <Tag>&lt;p class=</Tag>&quot;stock-status&quot;<Tag>&gt;</Tag> <b>In Stock</b>{' '}
              <Tag>&lt;/p&gt;</Tag>
            </div>
            <div className="whitespace-nowrap pl-3">
              <Tag>&lt;p&gt;</Tag>Free shipping on orders over $50.
            </div>
            <div className="whitespace-nowrap pl-5">
              Usually ships within 2-3 business days.<Tag>&lt;/p&gt;</Tag>
            </div>
            <div className="whitespace-nowrap">
              <Tag>&lt;/div&gt;</Tag>
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* ---------- Row 3: notification channels (tilted) ---------- */
interface Channel {
  label: string;
  detail: string;
  Icon: LucideIcon;
  on: boolean;
}

const CHANNELS: Channel[] = [
  { label: 'E-mail', detail: 'john.doe@example.com', Icon: Mail, on: true },
  { label: 'SMS', detail: '+1 202 555 0143', Icon: MessageSquare, on: true },
  { label: 'Voice call', detail: 'No delay, no repeat', Icon: Phone, on: false },
  { label: 'Push notification', detail: 'Mobile app', Icon: Bell, on: true },
];

export function ChannelsVisual() {
  return (
    <Stage>
      <BackdropPanel className="lg:left-[50%] lg:top-[66%]" />

      <div
        className={`${CARD} relative z-[3] overflow-hidden lg:absolute lg:left-[6%] lg:top-[18%] lg:w-[66%] ${TILT}`}
      >
        <Hairline />
        <p className="px-5 pt-4 text-[11px] font-semibold text-[var(--foreground)]">
          Alert notification channels.
        </p>
        {CHANNELS.map(({ label, detail, Icon, on }) => (
          <div
            key={label}
            className="flex items-center gap-3 border-t border-[var(--border)] px-5 py-3 first:border-t-0 [&:nth-child(2)]:mt-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-semibold text-[var(--foreground)]">
                {label}
              </span>
              <span className="block text-[9px] text-[var(--muted)]">{detail}</span>
            </span>
            <Toggle on={on} />
          </div>
        ))}
      </div>
    </Stage>
  );
}
