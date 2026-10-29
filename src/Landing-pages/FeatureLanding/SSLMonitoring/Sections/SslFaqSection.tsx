const questions = [
  {
    question: 'What is SSL monitoring?',
    answer: (
      <>
        <p>
          SSL monitoring refers to the process of continuously checking the status and validity of
          SSL/TLS certificates deployed on websites, servers, and other network devices.
        </p>
        <p className="mt-2">
          This practice is essential for maintaining the security and integrity of data transmission
          between clients and servers. SSL monitoring helps identify issues like expired,
          misconfigured, untrusted certificates in real-time, or other errors, ensuring that all
          communications remain encrypted and safeguarded against potential threats.
        </p>
        <p className="mt-2">
          It’s also an important part of your SEO as it’s one of the ranking factors.
        </p>
      </>
    ),
  },
  {
    question: 'What does an SSL Monitoring tool do?',
    answer:
      'An SSL monitoring tool checks certificate validity and expiration, helping you identify certificate issues and renew before visitors are affected.',
  },
  {
    question: 'How do you prevent your SSL Certificate from expiring?',
    answer:
      'Monitor certificate expiry and configure notifications in advance so your team has time to renew and verify the certificate.',
  },
];

export default function SslFaqSection() {
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
                  className="text-sky-400 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 max-w-4xl pr-8 text-xs leading-relaxed text-[var(--muted)]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
