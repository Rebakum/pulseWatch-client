import Container from '@/components/common/Container';
import type { FaqSectionData } from '@/types/landing';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  data: FaqSectionData;
}

export default function FaqSection({ data }: FaqSectionProps) {
  return (
    <section
      aria-labelledby="website-monitoring-faq-title"
      className="bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20"
    >
      <Container>
        <h2
          id="website-monitoring-faq-title"
          className="text-2xl font-extrabold tracking-tight sm:text-3xl"
        >
          {data.title}
        </h2>

        <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {data.items.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-sm font-semibold marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:text-base">
                {question}
                <ChevronDown
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-[var(--muted)]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
