import {
  ArrowRight,
  BellRing,
  Bot,
  ChartNoAxesCombined,
  GitBranch,
  MessageCircle,
  Network,
  Triangle,
  Zap,
  type LucideIcon,
} from 'lucide-react';

import ShaderButton from '@/components/shader-button/ShaderButton';

type Provider = {
  name: string;
  Mark: LucideIcon | 'aws';
  status: string;
  warning?: boolean;
};

const providers: Provider[] = [
  { name: 'Amazon Web Services', Mark: 'aws', status: 'Operational' },
  { name: 'Vercel', Mark: Triangle, status: 'Operational' },
  { name: 'GitHub', Mark: GitBranch, status: 'Operational' },
  { name: 'OpenAI', Mark: Bot, status: 'Minor outage', warning: true },
  { name: 'Discord', Mark: MessageCircle, status: 'Operational' },
];

const activeIncidents = [
  { state: 'Ongoing', provider: 'Stripe', text: 'Payout processing delays' },
  { state: 'Ongoing', provider: 'Stripe', text: 'Elevated API latency' },
];

const resolvedIncidents = [
  { state: 'Resolved', provider: 'Stripe', text: 'Issuing card declines elevated' },
  { state: 'Resolved', provider: 'Stripe', text: 'Payment tokenization errors' },
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
    Icon: BellRing,
  },
  {
    title: 'Understand the impact',
    description: 'Review incident history and availability trends to find recurring risks.',
    Icon: ChartNoAxesCombined,
  },
];

export default function ThirdPartyMonitoringHero() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      {/* ================= HERO ================= */}
      <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12">
        {/* Left content */}
        <div className="relative z-10 min-w-0">
          <h1 className="mb-7 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]">
            Is it your{' '}
            <span className="bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent">
              code
            </span>
            ,
            <br />
            or is it them
            <span className="bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent">
              ?
            </span>
          </h1>

          <p className="mb-8 max-w-[620px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            PulseWatch already watches your systems. Third party monitoring watches the providers
            they run on, so incidents at payment providers, cloud platforms, CDNs, and APIs show up
            in the same dashboard and reach you through the same alerts.
            <br />
            You know where to look before you start digging through your own logs.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring Third Party services
            <ArrowRight size={18} aria-hidden="true" />
          </ShaderButton>
        </div>

        {/* Right visual */}
        <div className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]">
          {/* Ambient glow uses explicit stops for consistent rendering. */}
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-[-0%] z-0 rounded-full"
          />

          {/* ---------- Layer 1: dashboard (xl+) ---------- */}
          <div
            aria-hidden="true"
            className="absolute left-[43%] top-[410px] z-[1] hidden h-0 w-0 origin-top-left text-[#e5e7eb] opacity-[0.5] [transform:skewY(-16deg)_skewX(33deg)] xl:top-[420px] xl:block"
          >
            {/* backdrop panel */}
            <div
            //   className="
            // absolute -left-[160px] -top-[310px] h-[460px] w-[640px] rounded-[22px] border border-white/[0.05] bg-[linear-gradient(155deg,#172133,#0d1421)]"
            />

            {/* availability */}
            <div className="absolute left-[258px] top-[-263px] h-[62px] w-[150px] rounded-xl border border-white/[0.07] bg-white/[0.04] p-2.5">
              <small className="block text-[9px] text-[#a9b4c4]">Availability</small>
              <strong className="text-sm">99.98%</strong>
            </div>

            {/* last 30 days */}
            <div className="absolute left-[424px] top-[-211px] h-[58px] w-[200px] rounded-xl border border-white/[0.07] bg-white/[0.04] p-2.5">
              <small className="block text-[9px] text-[#a9b4c4]">Last 30 days</small>
              <strong className="text-sm text-[#ef5b5b]">2 incidents</strong>
            </div>

            {/* active incidents */}
            <div className="absolute left-[135px] top-[-125px] h-[115px] w-[340px] overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2">
              <p className="mb-1 text-[9px] font-semibold text-[#a9b4c4]">Active incidents</p>
              {activeIncidents.map((incident) => (
                <div
                  key={incident.text}
                  className="grid grid-cols-[66px_40px_minmax(0,1fr)] items-center gap-2 border-t border-white/[0.07] py-2 text-[9px] text-[#a9b4c4]"
                >
                  <span className="flex items-center gap-1.5 text-[#ef5b5b]">
                    <i className="size-1.5 shrink-0 rounded-full bg-current" />
                    {incident.state}
                  </span>
                  <span>{incident.provider}</span>
                  <span className="truncate">{incident.text}</span>
                </div>
              ))}
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
              <div className="mt-2 rounded-md bg-[image:var(--background-image-brand-gradient)] p-1.5 text-center font-semibold text-white">
                Upgrade now
              </div>
            </div>

            {/* latest incidents */}
            <div className="absolute left-[132px] top-[11px] h-[135px] w-[330px] overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2.5">
              <p className="mb-1 text-[9px] font-semibold">Latest incidents</p>
              {resolvedIncidents.map((incident) => (
                <div
                  key={incident.text}
                  className="grid grid-cols-[66px_40px_minmax(0,1fr)] items-center gap-2 border-t border-white/[0.07] py-3 text-[9px] text-[#a9b4c4]"
                >
                  <span className="flex items-center gap-1.5 text-[var(--color-brand-blue)]">
                    <i className="size-1.5 shrink-0 rounded-full bg-current" />
                    {incident.state}
                  </span>
                  <span>{incident.provider}</span>
                  <span className="truncate">{incident.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Layer 2: fade gradient ---------- */}
          <div
            aria-hidden="true"
            className="third-party-visual-fade pointer-events-none absolute inset-y-0 left-[64%] z-[2] hidden w-[45%] xl:block"
          />

          {/* ---------- Layer 3: provider cards ---------- */}
          <div
            aria-hidden="true"
            className="absolute left-[2%] top-[100px] z-[3] flex w-[88%] flex-col gap-3.5 sm:left-[4%] sm:w-[70%] lg:top-[120px] lg:w-[62%] xl:left-[10%] xl:top-[160px] xl:w-[53%] min-[1440px]:w-[47%]"
          >
            {providers.map(({ name, Mark, status, warning }) => (
              <div
                key={name}
                className="relative flex h-[46px] min-w-0 origin-top-left items-center gap-2.5 rounded-[20px] border border-white/[0.09] bg-[linear-gradient(180deg,#19222f,#111823)] px-3.5 shadow-[0_12px_26px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors [transform:skewY(-12deg)_skewX(18deg)] hover:border-[var(--color-brand-blue)]/40 max-sm:h-[40px] max-sm:gap-1.5 max-sm:rounded-[14px] max-sm:px-2 lg:[transform:skewY(-16deg)_skewX(22deg)]"
              >
                {/* Provider logo */}
                <span className="grid size-5 shrink-0 place-items-center text-white">
                  {Mark === 'aws' ? (
                    <span className="text-[9px] font-bold">aws</span>
                  ) : (
                    <Mark size={15} aria-hidden="true" />
                  )}
                </span>

                {/* Provider name */}
                <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold text-white max-sm:text-[10px]">
                  {name}
                </span>

                {/* Status badge */}
                <span
                  className={
                    warning
                      ? 'shrink-0 rounded-md border border-[#f0a24b]/40 bg-[#f0a24b]/[0.14] px-1.5 py-0.5 text-[10px] font-medium text-[#f0a24b] max-sm:text-[8px]'
                      : 'shrink-0 rounded-md border border-[var(--color-brand-blue)]/25 bg-[var(--color-brand-blue)]/[0.12] px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-brand-blue)] max-sm:text-[8px]'
                  }
                >
                  {status}
                </span>

                {/* Add button decoration */}
                <span className="shrink-0 rounded-md border border-white/[0.08] bg-[#263146] px-2 py-1 text-[10px] text-[#d3dae4] max-sm:px-1.5 max-sm:text-[8px]">
                  ＋ Add
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
