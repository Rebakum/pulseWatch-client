import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  link?: { label: string; href: string };
  open: boolean;
  onToggle: () => void;
};

export default function FaqItem({ id, question, answer, link, open, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-[var(--border)]">
      <h3>
        <button
          type="button"
          id={`${id}-question`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span
            className={`text-base font-semibold transition-colors sm:text-[17px] ${
              open ? 'text-blue-600' : 'text-[var(--foreground)]'
            }`}
          >
            {question}
          </span>
          {open ? (
            <Minus className="h-4 w-4 shrink-0 text-[var(--muted)]" />
          ) : (
            <Plus className="h-4 w-4 shrink-0 text-blue-600" />
          )}
        </button>
      </h3>

      {/* Smooth height animation: grid rows 0fr -> 1fr */}
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-[var(--muted)]">
            {answer}{' '}
            {link && (
              <Link href={link.href} className="font-medium text-blue-600 underline underline-offset-4">
                {link.label}
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
