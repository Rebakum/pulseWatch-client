import { Bell, Mail, Network, ShieldCheck, Terminal } from 'lucide-react';
import type { ReactNode } from 'react';

import Container from '@/components/common/Container';

/* =====================================================================
   Geometry measured from the reference: every tilted card sits on ONE
   plane — horizontal edges rise 18deg (skewY -18), left edges lean 33deg
   (skewX 33). Cards are laid out in "design px" and the plane is scaled
   by --s so it fits the column at every breakpoint.
===================================================================== */

const TAN_RISE = 0.325; // tan(18deg)
const TAN_LEAN = 0.65; // tan(33deg)

/* project colours */
const UP = 'var(--color-brand-blue-light)';
const DOWN = 'var(--color-status-down)';

const CARD =
  'rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]';

const PLANE =
  'absolute left-0 origin-top-left [transform:scale(var(--s))_skewY(-18deg)_skewX(33deg)]';

/* ---------- shared helpers ---------- */

function Glow() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/15 blur-[110px]" />
  );
}

/** Stage for a tilted plane. w/h = design size of the main card. */
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

/** absolutely positioned box, coordinates in design px */
/** dim, faded form panel peeking out behind a tilted card */
function DimPanel({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <div
      className="absolute rounded-[28px] border-2 border-[var(--border)] bg-[var(--surface)] opacity-50 [mask-image:linear-gradient(90deg,#000_30%,transparent_100%)]"
      style={{ left: x, top: y, width: w, height: h }}
    >
      <p className="absolute left-6 top-5 whitespace-nowrap text-[12px] font-semibold text-[var(--foreground)]">
        How we will notify you?
      </p>
      <p className="absolute left-6 top-12 whitespace-nowrap text-[11px] text-[var(--muted)]">
        E-mail · john.doe@example.com
      </p>
      <p className="absolute left-6 top-[72px] whitespace-nowrap text-[10px] text-[var(--muted)]">
        No delay, no repeat
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 1: Monitor any port on your server (tilted card)
--------------------------------------------------------------------- */
const PORT_W = 490;
const PORT_H = 318;
const PORT_BARS = 22;

function PortMonitoringVisual() {
  return (
    <PlaneStage w={PORT_W} h={PORT_H} scale="[--s:0.5] sm:[--s:0.7] lg:[--s:0.62] xl:[--s:0.78]">
      <DimPanel x={240} y={230} w={420} h={170} />

      <div className={`${CARD} relative z-[2] px-8 py-7`} style={{ width: PORT_W, height: PORT_H }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] text-[var(--foreground)]">Port status (Port 443)</p>
            <p className="mt-1.5 text-[24px] font-extrabold leading-none" style={{ color: UP }}>
              Open / Active
            </p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[var(--background)] px-3 py-1.5 text-[12px] font-semibold"
            style={{ color: UP }}
          >
            <ShieldCheck className="h-4 w-4" style={{ color: UP }} />
            HTTPS, FTP, SSH
          </span>
        </div>

        <p className="mt-5 text-[13px] text-[var(--foreground)]">Last check performed</p>
        <p className="mt-1.5 text-[20px] font-extrabold leading-none" style={{ color: UP }}>
          10 seconds ago
        </p>
        <p className="mt-2 text-[13px] text-[var(--muted)]">
          Checked every 60 seconds across protocols
        </p>

        <p className="mt-5 text-[13px] text-[var(--foreground)]">Recent port uptime history</p>
        <div className="mt-2 flex gap-[6px]">
          {Array.from({ length: PORT_BARS }, (_, i) => (
            <span key={i} className="h-[26px] w-[9px] rounded-full" style={{ background: UP }} />
          ))}
        </div>
        <p className="mt-2.5 text-[12px] text-[var(--muted)]">
          0 failed handshakes, 100% reachable
        </p>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 2: Make sure your email service runs smoothly (straight tiles)
--------------------------------------------------------------------- */
const TILE =
  'grid h-40 w-40 place-items-center rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)]';

const EMAIL_DAYS = Array.from({ length: 30 }, (_, i) => i === 5 || i === 18);

function EmailServiceVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem] py-6">
      <Glow />

      <div className="pointer-events-none absolute -left-4 top-24 hidden h-[17rem] w-[24rem] opacity-40 [mask-image:linear-gradient(90deg,transparent,black_35%,black_75%,transparent)] sm:block">
        <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-[9px] text-[var(--muted)]">
            Monitor POP3, IMAP, and SMTP ports to ensure reliable mail delivery.
          </p>
          <div className="mt-3 h-6 rounded-md border border-[var(--border)] bg-[var(--background)]" />
          <div className="mt-2 h-6 rounded-md border border-[var(--border)] bg-[var(--background)]" />
          <div className="mt-6 grid grid-cols-2 gap-4 text-[8px] text-[var(--muted)]">
            <div>
              <span className="block">SMTP server</span>
              <span className="mt-1 block">smtp.example.com</span>
            </div>
            <div>
              <span className="block">IMAP server</span>
              <span className="mt-1 block">imap.example.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid w-fit grid-cols-2 gap-2.5 sm:ml-auto sm:mr-6">
        <div className={`${TILE} !place-items-start content-center px-5`}>
          <div>
            <p className="text-sm text-[var(--foreground)]">Mail Uptime</p>
            <p className="mt-2 text-xl font-bold" style={{ color: UP }}>
              99.98%
            </p>
            <p className="mt-2 whitespace-nowrap text-[11px] text-[var(--muted)]">
              POP3 / IMAP / SMTP
            </p>
          </div>
        </div>

        <div className={TILE}>
          <Mail
            className="h-20 w-20 text-[var(--foreground)]/80"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        <div className={TILE}>
          <Network
            className="h-20 w-20 text-[var(--foreground)]/80"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        <div className={`${TILE} !place-items-start content-center px-4`}>
          <div>
            <div className="grid grid-cols-7 gap-[3px]">
              {EMAIL_DAYS.map((down, i) => (
                <span
                  key={i}
                  className="h-[11px] w-[11px] rounded-[3px]"
                  style={{ background: down ? DOWN : UP }}
                />
              ))}
            </div>
            <p className="mt-3 text-[10px] text-[var(--foreground)]">Mail server log</p>
            <p className="text-[10px] font-semibold" style={{ color: UP }}>
              All ports healthy
            </p>
            <p className="text-[9px] text-[var(--muted)]">0 connection drops</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   Row 3: Port monitoring for your DNS server (tilted card)
--------------------------------------------------------------------- */
const DNS_W = 520;
const DNS_H = 340;

function DnsMonitoringVisual() {
  return (
    <PlaneStage w={DNS_W} h={DNS_H} scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]">
      <DimPanel x={280} y={260} w={420} h={180} />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: DNS_W, height: DNS_H }}>
        <p className="text-[15px] font-bold text-[var(--foreground)]">DNS resolving check</p>
        <p className="mt-1 text-[12px] text-[var(--muted)]">
          Port 53 TCP check · ns1.example.com (192.168.4.50)
        </p>

        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
          <p className="text-[12px] font-semibold text-[var(--foreground)]">Activity log</p>
          <div className="mt-3 space-y-2.5 text-[11px]">
            <div className="flex items-center justify-between text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: UP }} />
                DNS port 53 TCP check · resolving query for index.html
              </span>
              <span>10s ago</span>
            </div>
            <div className="flex items-center justify-between text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: UP }} />
                DNS resolving working correctly by Technitium · 192.168.4.50
              </span>
              <span>2m ago</span>
            </div>
            <div className="flex items-center justify-between text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: DOWN }} />
                DNS Server Timeout · main nameserver unreachable
              </span>
              <span>14m ago</span>
            </div>
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 4: Choose your preferred type of notifications (tilted card / settings)
--------------------------------------------------------------------- */
const NOTIF_W = 540;
const NOTIF_H = 340;

function NotificationsVisual() {
  return (
    <PlaneStage
      w={NOTIF_W}
      h={NOTIF_H}
      scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]"
    >
      <DimPanel x={280} y={260} w={420} h={180} />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: NOTIF_W, height: NOTIF_H }}>
        <p className="text-[16px] font-bold text-[var(--foreground)]">
          Alert notification channels
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--muted)]" />
              <div>
                <p className="text-[12px] font-medium text-[var(--foreground)]">E-mail</p>
                <p className="text-[10px] text-[var(--muted)]">john.doe@example.com</p>
              </div>
            </div>
            <div className="h-5 w-9 rounded-full bg-[var(--color-brand-blue-light)] p-0.5">
              <div className="h-4 w-4 rounded-full bg-white translate-x-4" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <div className="flex items-center gap-3">
              <Terminal size={18} className="text-[var(--muted)]" />
              <div>
                <p className="text-[12px] font-medium text-[var(--foreground)]">SMS</p>
                <p className="text-[10px] text-[var(--color-status-warning)]">Add phone number ⚠</p>
              </div>
            </div>
            <div className="h-5 w-9 rounded-full bg-[var(--color-brand-blue-light)] p-0.5">
              <div className="h-4 w-4 rounded-full bg-white translate-x-4" />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-[var(--muted)]" />
              <div>
                <p className="text-[12px] font-medium text-[var(--foreground)]">Voice call</p>
                <p className="text-[10px] text-[var(--muted)]">Add phone number</p>
              </div>
            </div>
            <div className="h-5 w-9 rounded-full bg-[var(--border)] p-0.5">
              <div className="h-4 w-4 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Row 5: Get alerted when a port is closed or open (tilted card)
--------------------------------------------------------------------- */
const ALERT_W = 510;
const ALERT_H = 340;

function AlertConditionVisual() {
  return (
    <PlaneStage
      w={ALERT_W}
      h={ALERT_H}
      scale="[--s:0.42] sm:[--s:0.58] lg:[--s:0.52] xl:[--s:0.68]"
    >
      <DimPanel x={280} y={260} w={420} h={180} />

      <div className={`${CARD} relative z-[2] p-8`} style={{ width: ALERT_W, height: ALERT_H }}>
        <p className="text-[14px] font-bold text-[var(--foreground)]">Alert condition</p>
        <p className="mt-1 text-[12px] text-[var(--muted)]">Alert me if the port is</p>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--color-brand-blue-light)] bg-[var(--background)] py-2.5 text-center text-[12px] font-semibold text-[var(--color-brand-blue-light)]">
            Open
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 text-center text-[12px] font-medium text-[var(--muted)]">
            Closed
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[12px] font-semibold text-[var(--foreground)]">Recent alerts</p>
          <div className="mt-2.5 space-y-2 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-[11px]">
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full" style={{ background: UP }} />
              <span>Port is open (Port 6979)</span>
            </div>
            <p className="text-[10px] text-[var(--muted)] pl-4">Push notification · 14m ago</p>
          </div>
        </div>
      </div>
    </PlaneStage>
  );
}

/* ---------------------------------------------------------------------
   Section Data Configuration matching the new Image Layout
--------------------------------------------------------------------- */
const FEATURES = [
  {
    title: 'Monitor any port on your server',
    description:
      'Make sure databases and other services running on different ports on your server are always available. We support any port, including HTTPS, FTP, SSH, ...',
    Visual: PortMonitoringVisual,
  },
  {
    title: 'Make sure your email service runs smoothly',
    description:
      'Set up a POP3, IMAP and SMTP port monitoring and know about any issues with your essential email services.',
    Visual: EmailServiceVisual,
  },
  {
    title: 'Port monitoring for your DNS server',
    description:
      'With port monitor watching your DNS port you always know whether essential DNS connection is okay.',
    Visual: DnsMonitoringVisual,
  },
  {
    title: 'Choose your preferred type of notifications',
    description:
      'Get instant alerts via email, SMS, voice call or through one of many integrations (such as Slack, Zapier, Splunk, etc.)',
    Visual: NotificationsVisual,
  },
  {
    title: 'Get alerted when a port is closed or open',
    description:
      'Pick the alert condition for each monitor. Alert when port is closed tells you when your mail server, database, or SSH stops accepting connections. Alert when port is open tells you when a port that should stay shut, like a database or remote desktop port, becomes reachable.',
    Visual: AlertConditionVisual,
  },
] as const;

export default function PortReliabilitySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-8 text-[var(--foreground)] sm:py-12">
      <Container>
        <div className="relative">
          {/* vertical divider (desktop) */}
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
