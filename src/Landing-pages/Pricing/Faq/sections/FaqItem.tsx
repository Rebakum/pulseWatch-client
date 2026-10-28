import { Plus } from 'lucide-react';

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export default function FaqItem({ id, question, answer, open, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-[var(--border)]">
      <h3>
        <button
          type="button"
          id={`${id}-question`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 px-2 py-5 text-left"
        >
          <span
            className={`text-base transition-colors sm:text-[17px] ${
              open
                ? 'font-semibold text-[var(--foreground)]'
                : 'text-[var(--muted)] group-hover:text-[var(--foreground)]'
            }`}
          >
            {question}
          </span>
          <Plus
            className={`h-4 w-4 shrink-0 transition-all duration-300 ${
              open
                ? 'rotate-45 text-[var(--color-brand-blue)]'
                : 'text-[var(--muted)] group-hover:text-[var(--foreground)]'
            }`}
          />
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
          <p className="px-2 pb-5 text-sm leading-relaxed text-[var(--muted)]">{answer}</p>
        </div>
      </div>
    </div>
  );
}
