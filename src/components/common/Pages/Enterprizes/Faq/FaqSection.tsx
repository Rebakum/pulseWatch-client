import Container from '@/components/common/Container';

import FaqAccordion from './FaqAccordion';
import { faqs } from './faqs';

export default function EnterpriseFaq({ brandName = 'PulseWatch' }: { brandName?: string }) {
  const items = faqs.map((f) => ({
    question: f.question.replaceAll('{brand}', brandName),
    answer: f.answer.replaceAll('{brand}', brandName),
    link: f.link,
  }));

  return (
    <section id="faq" className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-full max-w-5xl -translate-x-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <Container className="relative">
        <h2 className="mb-8 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          Frequently asked questions
          <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
        </h2>

        <FaqAccordion items={items} />
      </Container>
    </section>
  );
}
