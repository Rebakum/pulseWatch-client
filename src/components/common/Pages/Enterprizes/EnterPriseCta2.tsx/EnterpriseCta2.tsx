import ShaderButton from '@/components/shader-button/ShaderButton';
import { content } from './Content';

export default function EnterpriseCta2() {
  return (
    <section className=" dark relative overflow-hidden bg-[var(--surface)] py-16 text-[var(--foreground)] sm:py-20">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center sm:px-8">
        <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {content.titleStart}
          <span className="bg-brand-gradient box-decoration-clone bg-clip-text text-transparent">
            {content.titleHighlight}
          </span>
          {content.titleEnd}
          <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
        </h2>

        <p className="mb-8 text-sm text-[var(--foreground)]/85 sm:text-base">
          {content.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <ShaderButton className="px-7 py-3.5 text-sm">{content.primaryCta}</ShaderButton>
          <button
            type="button"
            className="rounded-full border border-[var(--border)] bg-[var(--background)] px-7 py-3.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--color-brand-blue)]"
          >
            {content.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
