import { CTA } from './constants';
import DashboardBackdrop from './DashboardBackdrop';
import GlowButton from './GlowButton';
import RatingBadge from './RatingBadge';

export default function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* top brand glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[110px]"
      />

      <DashboardBackdrop />

      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <RatingBadge />

          <h2 className="mt-14 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl md:text-[56px] md:leading-[1.1]">
            {CTA.headline.plain}{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {CTA.headline.accent}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {CTA.sub}
          </p>

          <div className="mt-9">
            <GlowButton href={CTA.button.href}>{CTA.button.label}</GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
