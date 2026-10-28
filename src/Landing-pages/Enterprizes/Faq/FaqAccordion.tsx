'use client';

import { useId, useState } from 'react';

import FaqItem from './FaqItem';
import { Faq } from './faqs';

// One item open at a time; the first one starts open
export default function FaqAccordion({ items }: { items: Faq[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-[var(--border)]">
      {items.map((item, i) => (
        <FaqItem
          key={item.question}
          id={`${baseId}-${i}`}
          question={item.question}
          answer={item.answer}
          link={item.link}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
