const questions = [
  {
    question: 'What is Advanced Incident management?',
    answer:
      'Our Advanced Incident Management feature set helps you filter, sort, and handle incidents more effectively. You can exclude certain incidents from public reports, share a note to comments on your Public Status Page, and even tag team members to keep everyone looped in.',
  },
  {
    question: 'Why should I exclude certain incidents from reports?',
    answer:
      'Excluding internal or non-customer-impacting incidents keeps public reports focused on the service events your subscribers need to know about.',
  },
  {
    question: 'How do I push comments to Public Status Pages?',
    answer:
      'Add an update to an incident and publish it to your connected Public Status Page so subscribers can follow its progress.',
  },
  {
    question: 'Can I notify specific team members about an incident?',
    answer:
      'Yes. Tag relevant teammates on an incident to bring the right people into the response.',
  },
  {
    question: 'How do filtering and sorting help me manage incidents?',
    answer:
      'Filter and sort the incident list by status, root cause, or tags to quickly focus on the events that need attention.',
  },
  {
    question: 'Does Advanced Incident Management work with my existing alerts and integrations?',
    answer:
      'Incident management works alongside your monitor alerts and notification integrations, helping keep response updates together.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Create monitors and configure alert integrations, then open the incident view to review, filter, and manage incidents.',
  },
];

export default function IncidentFaqSection() {
  return (
    <section className="bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently asked questions.
        </h2>
        <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {questions.map((item, index) => (
            <details key={item.question} className="group py-4 sm:py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium marker:hidden sm:gap-6">
                {item.question}
                <span
                  className="text-sky-400 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-4xl pr-8 text-xs leading-relaxed text-[var(--muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
