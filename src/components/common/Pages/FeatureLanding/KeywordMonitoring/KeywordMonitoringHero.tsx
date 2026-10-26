import { Check } from 'lucide-react';

import ShaderButton from '@/components/shader-button/ShaderButton';

/* Same tilt recipe as ThirdPartyMonitoringHero (provider cards). */
const CARD_TILT =
  'origin-top-left [transform:skewY(-12deg)_skewX(18deg)] lg:[transform:skewY(-16deg)_skewX(22deg)]';

const CARD_BASE =
  'relative rounded-[20px] border border-white/[0.09] bg-[linear-gradient(180deg,#19222f,#111823)] shadow-[0_12px_26px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]';

const GRADIENT_TEXT =
  'bg-gradient-to-r from-[#1479c0] via-[#5568b0] to-[#85429a] bg-clip-text text-transparent';

/* red tag text inside the code card */
function Tag({ children }: { children: string }) {
  return <span className="text-[#ef6b6b]">{children}</span>;
}

function CheckMark() {
  return (
    <Check
      size={14}
      strokeWidth={2.5}
      aria-hidden="true"
      className="ml-2 inline shrink-0 align-middle text-[var(--color-brand-blue-light)]"
    />
  );
}

export default function KeywordMonitoringHero() {
  return (
    <main className="overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <section
        aria-labelledby="keyword-monitoring-title"
        className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-10"
      >
        {/* ---------- Left content ---------- */}
        <div className="relative z-10 min-w-0">
          <h1
            id="keyword-monitoring-title"
            className="mb-7 text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--foreground)]"
          >
            Create simple
            <br />
            <span className={GRADIENT_TEXT}>keyword-based</span>
            <br />
            monitors<span className={GRADIENT_TEXT}>.</span>
          </h1>

          <p className="mb-8 max-w-[480px] text-base leading-[1.7] text-[var(--muted)] sm:text-lg">
            When you need to check for a specific keyword or a keyword phrase on a page.
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
          aria-label="Example keyword monitor alert and the page it checks"
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
            className="absolute left-[44%] top-[400px] z-[1] hidden h-0 w-0 origin-top-left text-[#e5e7eb] opacity-[0.6] [transform:skewY(-16deg)_skewX(33deg)] xl:block"
          >
            {/* tabs */}
            <div className="absolute left-[0px] top-[-315px] flex w-[420px] gap-6 text-[9px] text-[#a9b4c4]">
              <span>Monitors</span>
              <span>Status pages</span>
              <span className="font-semibold text-white">Monitor type</span>
            </div>

            {/* keyword form */}
            <div className="absolute left-[110px] top-[-285px] h-[250px] w-[420px] overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.035] px-4 py-3">
              <p className="text-[11px] font-semibold text-white">Keyword monitoring</p>
              <p className="mt-1 text-[8px] leading-[1.5] text-[#a9b4c4]">
                Check the presence or absence of specific text in the request&apos;s response body
                (typically HTML or JSON).
              </p>

              <p className="mt-3 text-[8px] text-[#a9b4c4]">Keyword to look for</p>
              <div className="mt-1 rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1.5 text-[9px]">
                &quot;availability&quot;:&quot;Out of stock&quot;
              </div>

              <div className="mt-3 flex items-center gap-2 text-[8px] text-[#a9b4c4]">
                <span className="size-2.5 rounded-sm border border-white/20 bg-white/[0.06]" />
                Alert when keyword exists
              </div>

              <p className="mt-3 text-[9px] font-semibold text-white">How we will notify you?</p>
              <div className="mt-2 grid grid-cols-2 gap-3 text-[8px] text-[#a9b4c4]">
                <div>
                  <span className="flex items-center gap-1.5 text-white">
                    <i className="size-2.5 rounded-sm bg-[var(--color-brand-blue)]" />
                    E-mail
                  </span>
                  <span className="mt-0.5 block">john.doe@example.com</span>
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
              <button className="mt-3 rounded-md bg-[image:var(--background-image-brand-gradient)] p-1.5 text-center font-semibold text-white">
                Upgrade now
              </button>
            </div>
          </div>

          {/* ---------- Layer 2: fade gradient ---------- */}
          <div
            aria-hidden="true"
            className="third-party-visual-fade pointer-events-none absolute inset-y-0 left-[64%] z-[2] hidden w-[45%] xl:block"
          />

          {/* ---------- Layer 3: notification + code cards ---------- */}
          <div
            aria-hidden="true"
            className="absolute left-[2%] top-[90px] z-[3] flex w-[88%] flex-col gap-6 sm:left-[4%] sm:w-[72%] lg:top-[110px] lg:w-[66%] lg:gap-8 xl:left-[6%] xl:top-[130px] xl:w-[64%]"
          >
            {/* push notification */}
            <div
              className={`${CARD_BASE} ${CARD_TILT} px-5 py-4 max-sm:rounded-[14px] max-sm:px-3.5 max-sm:py-3`}
            >
              <div className="flex items-center justify-between text-[10px] tracking-wide text-[#a9b4c4]">
                <span className="flex items-center gap-2 font-medium uppercase">
                  <i className="size-4 rounded-full bg-[image:var(--background-image-brand-gradient)] shadow-[0_0_10px_rgba(85,104,176,0.7)]" />
                  PulseWatch
                </span>
                <span>NOW</span>
              </div>
              <p className="mt-2 text-[15px] font-bold text-white max-sm:text-[12px]">PulseWatch</p>
              <p className="mt-0.5 text-[13px] text-[#c4cdd9] max-sm:text-[11px]">
                The product is in stock now!
              </p>
            </div>

            {/* matched page source */}
            <div
              className={`${CARD_BASE} ${CARD_TILT} ml-[8%] px-5 py-4 text-[12.5px] leading-[1.75] text-[#e5e7eb] max-sm:rounded-[14px] max-sm:px-3.5 max-sm:py-3 max-sm:text-[10px]`}
            >
              <div className="whitespace-nowrap">
                <Tag>&lt;div class=</Tag>&quot;product-detail&quot;<Tag>&gt;</Tag>
              </div>
              <div className="whitespace-nowrap pl-3">
                <Tag>&lt;h1&gt;</Tag> <b className="text-white">Sony WH-1000XM5</b>{' '}
                <Tag>&lt;/h1&gt;</Tag>
                <CheckMark />
              </div>
              <div className="whitespace-nowrap pl-3">
                <Tag>&lt;p class=</Tag>&quot;price&quot;<Tag>&gt;</Tag>$279.99
                <Tag>&lt;/p&gt;</Tag>
              </div>
              <div className="whitespace-nowrap pl-3">
                <Tag>&lt;p class=</Tag>&quot;stock-status&quot;<Tag>&gt;</Tag>{' '}
                <b className="text-white">In Stock</b> <Tag>&lt;/p&gt;</Tag>
                <CheckMark />
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
      </section>
    </main>
  );
}
