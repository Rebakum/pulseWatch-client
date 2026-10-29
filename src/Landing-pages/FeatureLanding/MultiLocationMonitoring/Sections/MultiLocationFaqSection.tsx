const multiLocationQuestions = [
  {
    question: 'What is multi-location monitoring?',
    answer:
      'It checks your website or service from multiple geographic regions, helping you tell a regional issue from a wider outage.',
  },
  {
    question: 'How does a regional check work?',
    answer:
      'A monitor runs from the locations you select. Results are grouped so you can compare response and availability by region.',
  },
  {
    question: 'How many locations can I use?',
    answer:
      'Available locations depend on your plan. The monitor settings show the regions you can choose for your account.',
  },
  {
    question: 'Do I need a separate monitor for every region?',
    answer: 'No. Add multiple locations to one monitor and review their results together.',
  },
  {
    question: 'What happens when one location detects an issue?',
    answer:
      'The result is associated with that region. Your alert rules determine whether it opens or updates an incident.',
  },
  {
    question: 'Can I change locations later?',
    answer: 'Yes. Update the monitor configuration whenever your coverage requirements change.',
  },
];

export default function MultiLocationFaqSection() {
  return (
    <section className="bg-[var(--background)] px-5 py-14 text-[var(--foreground)] sm:px-8 sm:py-18">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently asked{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">questions</span>
        </h2>
        <div className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {multiLocationQuestions.map((item, index) => (
            <details key={item.question} className="group py-4" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium marker:hidden">
                {item.question}
                <span
                  className="text-sky-300 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl pr-8 text-xs leading-relaxed text-[var(--muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
