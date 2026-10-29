const questions = [
  {
    question: 'What is response time monitoring?',
    answer:
      'Response time monitoring is a feature that provides live alerts when there’s a noticeable drop in performance, such as when a typical 200ms response time suddenly escalates to 500 or 1000ms. By setting a specific threshold, you can ensure you’re promptly notified of any significant changes, enabling you to take immediate action to maintain optimal performance.',
  },
  {
    question: 'How can I set up response time monitoring with UptimeRobot?',
    answer:
      'Add a monitor, enable response time alerts, and set a threshold that fits your service. You can then receive notifications when response times exceed that threshold.',
  },
  {
    question: "How can response time monitoring help improve my website's performance?",
    answer:
      'It helps you spot slowdowns as they happen, investigate affected services, and respond before performance issues have a wider impact on your visitors.',
  },
];

export default function ResponseTimeFaq() {
  return (
    <section className="bg-[var(--background)] px-5 py-14 text-[var(--foreground)] sm:px-8 sm:py-18">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently asked questions.
        </h2>
        <div className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {questions.map((item, index) => (
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
              <p className="mt-3 max-w-4xl pr-8 text-xs leading-relaxed text-[var(--muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
