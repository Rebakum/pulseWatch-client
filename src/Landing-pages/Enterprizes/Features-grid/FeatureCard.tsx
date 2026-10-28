import type { Feature } from './Content';

export default function FeatureCard({ title, description, icon: Icon }: Feature) {
  return (
    <article className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-blue)]/40 hover:shadow-[0_20px_40px_-28px_color-mix(in_srgb,var(--color-brand-purple)_70%,transparent)]">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <Icon className="h-[18px] w-[18px]" aria-hidden />
        </span>
        <h3 className="text-[15px] font-bold leading-snug">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </article>
  );
}
