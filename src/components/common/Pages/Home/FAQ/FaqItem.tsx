'use client';

import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { ReactNode } from 'react';

type FaqItemProps = {
  id: string;
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ id, question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="py-2">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-3 text-left"
        >
          <span
            className={`text-base font-semibold tracking-tight transition-colors sm:text-lg ${
              isOpen
                ? 'text-[var(--foreground)]'
                : 'text-[var(--foreground)] group-hover:text-brand-blue'
            }`}
          >
            {question}
          </span>

          {/* + rotates into × when open */}
          <Plus
            aria-hidden
            className={`size-5 shrink-0 transition-transform duration-300 ${
              isOpen
                ? 'rotate-45 text-brand-blue'
                : 'text-[var(--muted)] group-hover:text-[var(--foreground)]'
            }`}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pb-4 pr-8 pt-1 text-sm leading-relaxed text-[var(--muted)]">
              {typeof answer === 'string' ? <p>{answer}</p> : answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
