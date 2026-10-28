import { Check, X } from 'lucide-react';

type ComparisonCardProps = {
  title: string;
  items: string[];
  footer?: string;
  tone: 'bad' | 'good';
};

export default function ComparisonCard({ title, items, footer, tone }: ComparisonCardProps) {
  const good = tone === 'good';
  const Icon = good ? Check : X;

  const body = (
    <div
      className={`flex h-full flex-col rounded-[calc(1rem-1px)] bg-[var(--surface)] p-6 sm:p-8 ${
        good ? '' : 'border border-[var(--border)]'
      }`}
    >
      <h3 className="mb-6 text-base font-bold sm:text-lg">{title}</h3>

      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-b border-[var(--border)] py-3.5 text-sm last:border-b-0"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                good
                  ? 'bg-[var(--color-status-up)]/15 text-[var(--color-status-up)]'
                  : 'bg-[var(--color-status-down)]/15 text-[var(--color-status-down)]'
              }`}
            >
              <Icon className="h-3 w-3" strokeWidth={3} aria-hidden />
            </span>
            <span className="leading-snug text-[var(--foreground)]/90">{item}</span>
          </li>
        ))}
      </ul>

      {footer && (
        <p
          className={`mt-auto pt-6 text-sm font-bold ${
            good ? 'bg-brand-gradient bg-clip-text text-transparent' : ''
          }`}
        >
          {footer}
        </p>
      )}
    </div>
  );

  // Highlighted card gets a brand-gradient border + glow
  if (good) {
    return (
      <div className="h-full rounded-2xl bg-linear-to-b from-[var(--color-brand-blue)]/60 to-[var(--color-brand-magenta)]/40 p-px shadow-[0_24px_60px_-30px_color-mix(in_srgb,var(--color-brand-purple)_70%,transparent)]">
        {body}
      </div>
    );
  }

  return <div className="h-full rounded-2xl">{body}</div>;
}
