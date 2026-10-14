import ComparisonCard from './ComparisonCard';
import { content } from './Content';

export default function CostComparison() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)] md:py-16">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {content.titleStart}
            <span className="bg-brand-gradient box-decoration-clone bg-clip-text text-transparent">
              {content.titleHighlight}
            </span>
            {content.titleEnd}
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ComparisonCard tone="bad" {...content.suite} />
          <ComparisonCard tone="good" {...content.lean} />
        </div>
      </div>
    </section>
  );
}
