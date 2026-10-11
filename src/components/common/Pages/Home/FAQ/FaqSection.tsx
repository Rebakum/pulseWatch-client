'use client';

import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import FaqItem from './FaqItem';
import { faqList } from './faq-data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    // reducedMotion="user": respects the OS "reduce motion" setting
    <MotionConfig reducedMotion="user">
      <section className="overflow-hidden bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Frequently asked questions.
          </h2>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {faqList.map((faq, i) => (
              <FaqItem
                key={faq.question}
                id={`faq-${i}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
