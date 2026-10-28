import ShaderButton from '@/components/shader-button/ShaderButton';
import {
  ArrowRight,
  Database,
  Mail,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
  type LucideIcon,
} from 'lucide-react';

type MonitoredPort = {
  name: string;
  Mark: LucideIcon;
  port: string;
  status: string;
  warning?: boolean;
};

const monitoredPorts: MonitoredPort[] = [
  { name: 'smtp-relay company.net', Mark: Mail, port: 'Port 587', status: 'Up (0.226s)' },
  { name: 'db-prod-01', Mark: Database, port: 'Port 5432', status: 'Up (0.14s)' },
  {
    name: 'cache-redis-01',
    Mark: Server,
    port: 'Port 6379',
    status: 'Down for 18m',
    warning: true,
  },
];

const capabilities: {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: 'See every dependency',
    description: 'Keep provider health alongside your own service status in one clear view.',
    Icon: Network,
  },
  {
    title: 'Catch incidents early',
    description: 'Spot upstream degradation before it becomes a customer-facing outage.',
    Icon: Zap,
  },
  {
    title: 'Get actionable alerts',
    description:
      'Route provider incidents through the notification channels your team already uses.',
    Icon: ShieldCheck,
  },
  {
    title: 'Understand the impact',
    description: 'Review incident history and availability trends to find recurring risks.',
    Icon: Terminal,
  },
];

export default function PortMonitoringHero() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      {/* ================= HERO ================= */}
      <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12">
        {/* Left content */}
        <div className="relative z-10 min-w-0">
          <h1 className="mb-7 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]">
            Monitor any specific{' '}
            <span className="bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] bg-clip-text text-transparent">
              port
            </span>{' '}
            on your server.
          </h1>

          <p className="mb-8 max-w-[620px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Check that the service behind a port is still accepting connections, not just that the
            server answers a ping. Watch your mail, database, SSH, and FTP ports from 15+ global
            locations.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
            <ArrowRight size={18} aria-hidden="true" />
          </ShaderButton>
        </div>

        {/* Right visual */}
        <div className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-0%] z-0 rounded-full bg-emerald-500/10 blur-3xl"
          />

          {/* ---------- Layer 1: Background Dashboard Panels (xl+) ---------- */}
          <div
            aria-hidden="true"
            className="absolute left-[43%] top-[410px] z-[1] hidden h-0 w-0 origin-top-left text-[#e5e7eb] opacity-[0.5] [transform:skewY(-16deg)_skewX(33deg)] xl:top-[420px] xl:block"
          >
            {/* availability */}
            <div className="absolute left-[258px] top-[-263px] h-[62px] w-[150px] rounded-xl border border-white/[0.07] bg-white/[0.04] p-2.5">
              <small className="block text-[9px] text-[#a9b4c4]">Availability</small>
              <strong className="text-sm">99.98%</strong>
            </div>

            {/* last 30 days */}
            <div className="absolute left-[424px] top-[-211px] h-[58px] w-[200px] rounded-xl border border-white/[0.07] bg-white/[0.04] p-2.5">
              <small className="block text-[9px] text-[#a9b4c4]">Last 30 days</small>
              <strong className="text-sm text-[#10b981]">0 incidents</strong>
            </div>

            {/* account box */}
            <div className="absolute left-0 top-0 h-[150px] w-[120px] overflow-hidden rounded-xl border border-white/[0.07] bg-[#111927]/95 p-2.5 text-[9px]">
              <div className="mb-2 flex items-center gap-2">
                <b className="grid size-6 shrink-0 place-items-center rounded-full bg-white/[0.08] text-[8px]">
                  JD
                </b>
                <span className="font-semibold">
                  John Doe
                  <small className="block text-[7px] text-[#a9b4c4]">Team owner</small>
                </span>
              </div>
              <small className="block text-[8px] text-[#a9b4c4]">Your teams</small>
              <span className="mt-1 block truncate text-[#a9b4c4]">Team Acme team</span>
              <span className="mt-1 block truncate text-[#a9b4c4]">Moo team</span>
              <div className="mt-2 rounded-md bg-emerald-600 p-1.5 text-center font-semibold text-white">
                Upgrade now
              </div>
            </div>
          </div>

          {/* ---------- Layer 2: fade gradient ---------- */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[64%] z-[2] hidden w-[45%] bg-gradient-to-r from-transparent to-[var(--background)] xl:block"
          />

          {/* ---------- Layer 3: Monitored Port Cards ---------- */}
          <div
            aria-hidden="true"
            className="absolute left-[2%] top-[100px] z-[3] flex w-[88%] flex-col gap-3.5 sm:left-[4%] sm:w-[70%] lg:top-[120px] lg:w-[62%] xl:left-[10%] xl:top-[160px] xl:w-[53%] min-[1440px]:w-[47%]"
          >
            {monitoredPorts.map(({ name, Mark, port, status, warning }) => (
              <div
                key={name}
                className="relative flex h-[46px] min-w-0 origin-top-left items-center gap-2.5 rounded-[20px] border border-white/[0.09] bg-[linear-gradient(180deg,#19222f,#111823)] px-3.5 shadow-[0_12px_26px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors [transform:skewY(-12deg)_skewX(18deg)] hover:border-emerald-500/40 max-sm:h-[40px] max-sm:gap-1.5 max-sm:rounded-[14px] max-sm:px-2 lg:[transform:skewY(-16deg)_skewX(22deg)]"
              >
                {/* Port Icon */}
                <span className="grid size-5 shrink-0 place-items-center text-white">
                  <Mark size={15} aria-hidden="true" />
                </span>

                {/* Port & service name */}
                <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold text-white max-sm:text-[10px]">
                  {name} <span className="text-[var(--muted)] font-normal">({port})</span>
                </span>

                {/* Status badge */}
                <span
                  className={
                    warning
                      ? 'shrink-0 rounded-md border border-[#ef5b5b]/40 bg-[#ef5b5b]/[0.14] px-1.5 py-0.5 text-[10px] font-medium text-[#ef5b5b] max-sm:text-[8px]'
                      : 'shrink-0 rounded-md border border-emerald-500/25 bg-emerald-500/[0.12] px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 max-sm:text-[8px]'
                  }
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-[72px]">
        <div className="mb-10 max-w-[640px]">
          <p className="mb-3 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] bg-clip-text text-xs font-semibold uppercase tracking-[0.12em] text-transparent">
            One connected view
          </p>

          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The full picture,{' '}
            <span className="bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] bg-clip-text text-transparent">
              not just your piece of it.
            </span>
          </h2>

          <p className="leading-7 text-[var(--muted)]">
            When a server port has trouble, get the context to understand what is happening and
            where to look next.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-500/35"
            >
              <span className="mb-4 inline-grid size-11 place-items-center rounded-xl bg-emerald-500/[0.14] text-emerald-400">
                <Icon size={21} aria-hidden="true" />
              </span>

              <h3 className="mb-2 text-base font-semibold">{title}</h3>

              <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="mx-auto mb-16 flex w-full max-w-[1240px] flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div className="flex w-full flex-col items-start justify-between gap-7 rounded-3xl border border-emerald-500/25 bg-[color:var(--surface)] bg-[image:radial-gradient(circle_at_15%_0%,rgba(16,185,129,0.16),transparent_55%)] px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center">
          <div className="max-w-[680px]">
            <p className="mb-3 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] bg-clip-text text-xs font-semibold uppercase tracking-[0.12em] text-transparent">
              Stay ahead of the next incident
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl">
              Know when a server port stops responding.
            </h2>

            <p className="leading-7 text-[var(--muted)]">
              Bring port and TCP monitoring into your workflow with PulseWatch.
            </p>
          </div>

          <ShaderButton href="/register">
            Get started free
            <ArrowRight size={18} aria-hidden="true" />
          </ShaderButton>
        </div>
      </section>
    </main>
  );
}
