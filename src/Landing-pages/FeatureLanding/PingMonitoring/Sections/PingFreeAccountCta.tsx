import ShaderButton from '@/components/shader-button/ShaderButton';
import Image from 'next/image';

export default function PingFreeAccountCta() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* Top brand glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,var(--color-brand-blue,rgba(18,121,193,0.35))_0%,transparent_100%)] blur-[110px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Top Ratings Badge */}
          <div className="inline-flex items-center gap-6 px-4 py-2 rounded-xl border border-[color-mix(in_srgb,var(--border)_60%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--surface)_90%,transparent)_0%,color-mix(in_srgb,var(--surface)_60%,transparent)_100%)] backdrop-blur-md shadow-sm mb-10">
            <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--foreground)]">
              <span>4.7</span>
              <span className="text-[var(--color-brand-blue)] text-base">★</span>
              <span className="text-[var(--muted)] font-normal text-xs ml-1">stars out of 5</span>
            </div>
            <div className="h-4 w-[1px] bg-[var(--border)]"></div>
            <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--foreground)]">
              <span>284+</span>
              <span className="text-[var(--muted)] font-normal text-xs ml-1">
                reviews on <span className="font-extrabold text-[var(--foreground)]">G</span>
              </span>
            </div>
          </div>
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-8">
            Get your FREE account now, 50 monitors included!
          </h2>
          {/* Primary CTA */}

          <ShaderButton href="/register">Start monitoring in 30 seconds</ShaderButton>
          <p className="mt-4 text-sm text-[var(--muted)]">No credit card required</p>
          {/* Available Also On Section */}
          <div className="mt-12 space-y-4">
            <p className="text-xs sm:text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
              Available also on:
            </p>

            <div className="flex items-center justify-center gap-4">
              {/* Google Play Store Badge */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[linear-gradient(180deg,#18181b_0%,#09090b_100%)] border border-[color-mix(in_srgb,var(--border)_40%,transparent)] hover:border-[var(--color-brand-blue)] transition-all group"
              >
                <Image
                  src="/play-store.png"
                  alt=""
                  aria-hidden
                  width={40}
                  height={40}
                  className="h-5 w-5 invert"
                />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">
                    GET IT ON
                  </div>
                  <div className="text-xs font-bold text-white">Google Play</div>
                </div>
              </a>

              {/* Apple App Store Badge */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[linear-gradient(180deg,#18181b_0%,#09090b_100%)] border border-[color-mix(in_srgb,var(--border)_40%,transparent)] hover:border-[var(--color-brand-blue)] transition-all group"
              >
                <Image
                  src="/Apple_Store.webp"
                  alt=""
                  aria-hidden
                  width={40}
                  height={40}
                  className="h-5 w-5 invert"
                />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">
                    Download on the
                  </div>
                  <div className="text-xs font-bold text-white">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
