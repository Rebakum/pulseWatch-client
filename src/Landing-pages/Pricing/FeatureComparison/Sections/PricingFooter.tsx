import { payments } from './data';

export default function PricingFooter() {
  return (
    <div className="mt-14 text-center">
      <p className="mb-5 text-sm font-semibold">
        No risk, cancel anytime! We have a 14-day money back guarantee!
      </p>

      <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
        {payments.map((name) => (
          <span
            key={name}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--muted)]"
          >
            {name}
          </span>
        ))}
      </div>

      <span className="text-xs text-[var(--muted)] underline underline-offset-2">
        See machine-readable pricing (for AI agents)
      </span>
    </div>
  );
}
