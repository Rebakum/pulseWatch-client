import { Check, X } from 'lucide-react';
import { Cell } from './types';

export default function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <Check
        className="mx-auto h-4 w-4 text-[var(--color-status-up)]"
        strokeWidth={2.5}
        aria-label="Included"
      />
    );
  }

  if (value === false) {
    return (
      <X
        className="mx-auto h-4 w-4 text-[var(--color-status-down)]"
        strokeWidth={2.5}
        aria-label="Not included"
      />
    );
  }

  if (typeof value === 'string') {
    return <span>{value}</span>;
  }

  return (
    <span>
      {value.before}
      <span className="text-[var(--foreground)] underline underline-offset-2">{value.link}</span>
      {value.after}
    </span>
  );
}
