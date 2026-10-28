import { Activity, ChevronDown, Filter } from 'lucide-react';

import ShaderButton from '@/components/shader-button/ShaderButton';

/* Same tilt recipe as KeywordMonitoringHero (provider cards). */
const CARD_TILT =
  'origin-top-left [transform:skewY(-12deg)_skewX(18deg)] lg:[transform:skewY(-16deg)_skewX(22deg)]';

const CARD_BASE =
  'relative rounded-[20px] border border-white/[0.09] bg-[linear-gradient(180deg,#19222f,#111823)] shadow-[0_12px_26px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]';

const UPTIME_BARS = Array.from({ length: 32 });

export default function PingMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="ping-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-12"
      >
        {/* ---------- Left content ---------- */}
        <div className="relative z-10 min-w-0">
          <h1
            id="ping-monitoring-title"
            className="mb-7 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            <span className="bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent">
              Ping
            </span>{' '}
            any device or
            <br />
            server
            <span className="bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent">
              .
            </span>
          </h1>

          <p className="mb-8 max-w-[480px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            Make sure your server or any device in the network is always available with the ping
            monitoring.
          </p>

          <ShaderButton
            href="/register"
            className="!inline-flex !min-h-12 !items-center !justify-center !gap-2 !rounded-full !px-6 !py-3 !font-medium"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        {/* ---------- Right visual ---------- */}
        <div
          aria-label="Example ping monitor response time and server availability status"
          className="relative isolate min-h-[440px] w-full min-w-0 sm:min-h-[520px] lg:min-h-[570px]"
        >
          {/* ambient glow (shared with third-party hero) */}
          <div
            aria-hidden="true"
            className="third-party-visual-glow pointer-events-none absolute inset-0 z-0 rounded-full"
          />

          {/* ---------- Layer 1: dim monitor-settings form (xl+) ---------- */}
          <div
            aria-hidden="true"
            className="absolute left-[50%] top-[400px] z-[1] hidden h-0 w-0 origin-top-left text-[#e5e7eb] opacity-[0.6] [transform:skewY(-16deg)_skewX(33deg)] xl:block"
          >
            {/* tabs */}
            <div className="absolute left-[0px] top-[-315px] flex w-[420px] gap-6 text-[9px] text-[#a9b4c4]">
              <span>Monitors</span>
              <span>Status pages</span>
              <span className="font-semibold text-white">Monitor type</span>
            </div>

            {/* ping form */}
            <div className="absolute left-[110px] top-[-285px] h-[250px] w-[420px] overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 py-3">
              <p className="text-[11px] font-semibold text-white">Ping monitoring</p>
              <p className="mt-1 text-[8px] leading-[1.5] text-[#a9b4c4]">
                Check reachability, latency spikes, and network packet loss for any server or IP.
              </p>

              <p className="mt-3 text-[8px] text-[#a9b4c4]">Host / IP address to ping</p>
              <div className="mt-1 flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1.5 font-mono text-[9px] text-white">
                <span className="size-1.5 rounded-full bg-[#22c55e]" />
                54.183.78.11 / id.example.com
              </div>

              <div className="mt-3 flex items-center gap-2 text-[8px] text-[#a9b4c4]">
                <span className="size-2.5 rounded-sm border border-white/20 bg-white/[0.06]" />
                Alert when host is unreachable
              </div>

              <p className="mt-3 text-[9px] font-semibold text-white">How we will notify you?</p>
              <div className="mt-2 grid grid-cols-2 gap-3 text-[8px] text-[#a9b4c4]">
                <div>
                  <span className="flex items-center gap-1.5 text-white">
                    <i className="size-2.5 rounded-sm bg-[var(--color-brand-blue)]" />
                    E-mail
                  </span>
                  <span className="mt-0.5 block truncate">john.doe@example.com</span>
                  <span className="block text-[7px]">No delay, no repeat</span>
                </div>
                <div>
                  <span className="flex items-center gap-1.5 text-white">
                    <i className="size-2.5 rounded-sm bg-[var(--color-brand-blue)]" />
                    SMS message
                  </span>
                  <span className="mt-0.5 block">+1 202 555 0143</span>
                  <span className="block text-[7px]">No delay, no repeat</span>
                </div>
              </div>

              <p className="mt-3 text-[7px] leading-[1.5] text-[#a9b4c4]">
                Extended and recurrent notifications are available on Solo, Team and Enterprise
                plans. You can set up notifications for Integrations &amp; Teams in the specific
                tab.
              </p>
            </div>

            {/* account box */}
            <div className="absolute left-[-120px] top-[40px] h-[150px] w-[130px] overflow-hidden rounded-xl border border-white/[0.07] bg-[#111927]/95 p-2.5 text-[9px]">
              <small className="block text-[8px] text-[#a9b4c4]">Your teams</small>
              <span className="mt-1.5 flex items-center gap-1.5 text-white">
                <b className="grid size-4 place-items-center rounded-full bg-white/[0.08] text-[7px]">
                  Y
                </b>
                Your team
              </span>
              <span className="mt-1.5 flex items-center gap-1.5 text-[#a9b4c4]">
                <b className="grid size-4 place-items-center rounded-full bg-white/[0.08] text-[7px]">
                  T
                </b>
                Team Acme team
              </span>
              <span className="mt-1.5 flex items-center gap-1.5 text-[#a9b4c4]">
                <b className="grid size-4 place-items-center rounded-full bg-white/[0.08] text-[7px]">
                  M
                </b>
                Moo team
              </span>
              <div className="mt-3 rounded-md bg-[image:var(--background-image-brand-gradient)] p-1.5 text-center font-semibold text-white">
                Upgrade now
              </div>
            </div>
          </div>

          {/* ---------- Layer 2: fade gradient ---------- */}
          <div
            aria-hidden="true"
            className="third-party-visual-fade pointer-events-none absolute inset-y-0 left-[60%] z-[2] hidden w-[45%] xl:block"
          />

          {/* ---------- Layer 3: response time + uptime + status cards ---------- */}
          <div
            aria-hidden="true"
            className="absolute left-[0%] top-[40px] z-[3] flex w-[89%] flex-col gap-5 sm:left-[4%] sm:w-[72%] lg:top-[90px] lg:w-[66%] lg:gap-6 xl:left-[6%] xl:top-[100px] xl:w-[64%]"
          >
            {/* Card 1: Response Time Card */}
            <div
              className={`${CARD_BASE} ${CARD_TILT} px-1 py-4 max-sm:rounded-[14px] max-sm:px-3.5 max-sm:py-3`}
            >
              {/* Header */}
              <div className="flex items-center justify-between text-[11px] text-[#a9b4c4]">
                <span className="text-[13px] font-bold text-white max-sm:text-[11px]">
                  Response time
                </span>
                <span className="flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[9.5px]">
                  Last 30 days
                  <ChevronDown size={11} className="text-[#a9b4c4]" />
                </span>
              </div>

              {/* High-Fidelity SVG Chart */}
              <div className="relative mt-2.5 h-[115px] w-full max-sm:h-[95px]">
                {/* Y-axis labels */}
                <div className="pointer-events-none absolute left-0 top-0 flex h-full flex-col justify-between py-0.5 text-[8px] text-[#6b7280]">
                  <span>1,400 ms</span>
                  <span>800 ms</span>
                  <span>10 ms</span>
                </div>

                <svg
                  viewBox="0 0 380 110"
                  className="h-full w-full pl-9"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
                      <stop offset="90%" stopColor="#22c55e" stopOpacity="0.01" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient id="chartLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="50%" stopColor="#22c55e" />
                      <stop offset="56%" stopColor="#ef4444" />
                      <stop offset="62%" stopColor="#ef4444" />
                      <stop offset="68%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>

                    <linearGradient id="chartSpikeGlow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                      <stop offset="50%" stopColor="#ef4444" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal gridlines */}
                  <line
                    x1="0"
                    y1="10"
                    x2="380"
                    y2="10"
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="0"
                    y1="50"
                    x2="380"
                    y2="50"
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="3 3"
                  />
                  <line x1="0" y1="90" x2="380" y2="90" stroke="rgba(255,255,255,0.06)" />

                  {/* Red highlight vertical glow */}
                  <rect x="208" y="6" width="44" height="84" fill="url(#chartSpikeGlow)" />
                  <line
                    x1="230"
                    y1="10"
                    x2="230"
                    y2="90"
                    stroke="#ef4444"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    opacity="0.4"
                  />

                  {/* Area fill */}
                  <path
                    d="M 0,84 Q 40,82 80,84 T 160,83 T 205,84 C 215,84 222,44 230,10 C 238,44 245,84 255,84 T 320,83 T 380,84 L 380,95 L 0,95 Z"
                    fill="url(#chartAreaGrad)"
                  />

                  {/* Latency line */}
                  <path
                    d="M 0,84 Q 40,82 80,84 T 160,83 T 205,84 C 215,84 222,44 230,10 C 238,44 245,84 255,84 T 320,83 T 380,84"
                    fill="none"
                    stroke="url(#chartLineGrad)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Red spike apex */}
                  <circle cx="230" cy="10" r="3" fill="#ef4444" />
                  <circle
                    cx="230"
                    cy="10"
                    r="7"
                    fill="#ef4444"
                    opacity="0.25"
                    className="animate-pulse"
                  />
                </svg>

                {/* X-axis date labels */}
                <div className="flex justify-between pl-9 pt-1 text-[7.5px] text-[#6b7280]">
                  <span>Apr 20, 23</span>
                  <span>May 5, 23</span>
                  <span>May 12, 23</span>
                  <span>May 18, 23</span>
                  <span>May 25, 23</span>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.07] pt-2 text-[10px]">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <Activity size={12} className="text-brand-b" />
                    <span className="text-[14px] max-sm:text-[12px]">101.66 ms</span>
                  </div>
                  <span className="text-[9px] text-[#a9b4c4]">Average</span>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1.5 font-bold text-white">
                    <span className="text-[14px] max-sm:text-[12px]">1,546.96 ms</span>
                    <Filter size={11} className="text-[#ef4444]" />
                  </div>
                  <span className="text-[9px] text-[#a9b4c4]">Maximum</span>
                </div>
              </div>
            </div>

            {/* Card 2: Last 24 Hours Uptime Card */}
            <div
              className={`${CARD_BASE} ${CARD_TILT} ml-[%] px-1 py-3.5 max-sm:rounded-[14px] max-sm:px-3.5 max-sm:py-2.5`}
            >
              <div className="flex items-center justify-between text-[11px] max-sm:text-[9.5px]">
                <span className="font-semibold text-white">Last 24 hours</span>
                <span className="font-bold text-brand-blue">100%</span>
              </div>

              {/* Tick bars */}
              <div className="mt-2 flex items-center justify-between gap-1 overflow-hidden py-0.5">
                {UPTIME_BARS.map((_, i) => {
                  const isRecent = i >= UPTIME_BARS.length - 3;
                  return (
                    <span
                      key={i}
                      className={`h-[15px] w-[3.5px] rounded-full transition-transform max-sm:h-[12px] max-sm:w-[2.5px] ${
                        isRecent
                          ? 'bg-[#3ede75] shadow-[0_0_6px_rgba(62,222,117,0.85)]'
                          : 'bg-[#22c55e]'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Team Owner */}
              <div className="mt-2 flex items-center gap-2 border-t border-white/[0.06] pt-1.5">
                <div className="grid size-4 place-items-center rounded-full bg-white/[0.08] text-[7px] font-bold text-white">
                  JD
                </div>
                <div className="min-w-0 leading-none">
                  <span className="block truncate text-[9.5px] font-semibold text-white">
                    John Doe
                  </span>
                  <span className="mt-0.5 block text-[7.5px] text-[#a9b4c4]">Team owner</span>
                </div>
              </div>
            </div>

            {/* Card 3: Current status & Team upgrade */}
            <div
              className={`${CARD_BASE} ${CARD_TILT} ml-[30%] flex items-center justify-between px-5 py-3 max-sm:rounded-[14px] max-sm:px-3.5 max-sm:py-2.5`}
            >
              <div>
                <span className="block text-[8.5px] font-medium uppercase tracking-wider text-[#a9b4c4]">
                  Current status
                </span>
                <span className="text-[15px] font-extrabold text-[#ef4444] max-sm:text-[13px]">
                  Down
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[9.5px] text-[#a9b4c4] max-sm:hidden">Moo team</span>
                <div className="rounded-md bg-[image:var(--background-image-brand-gradient)] px-3 py-1 text-[9px] font-semibold text-white shadow-[0_0_12px_rgba(85,104,176,0.5)]">
                  Upgrade now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
