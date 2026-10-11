import { InsightsTabs } from './InsightsTabs';

export function Insights() {
  return (
    <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
        <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          See everything. Control everything.{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">Miss nothing.</span>
        </h2>
        <p className="max-w-lg leading-relaxed text-[var(--muted)] lg:justify-self-end">
          Go beyond simple up-or-down checks with incident tracking, uptime reports and team access
          that grow with your product.
        </p>
      </div>

      <InsightsTabs />
    </section>
  );
}
