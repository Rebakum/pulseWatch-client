const questions = [
  {
    question: 'What is DNS and why do DNS records matter?',
    answer: (
      <>
        <p>
          DNS, or Domain Name System, translates domain names like yoursite.com into the IP
          addresses servers use to communicate. Every website, email delivery, and online service
          depends on DNS working correctly.
        </p>
        <p className="mt-2">
          DNS records control where that traffic goes. If a record changes unexpectedly because of
          a misconfiguration, accidental edit, or security issue, websites and services can break
          even while their servers stay online.
        </p>
      </>
    ),
  },
  {
    question: 'What DNS record types can I monitor with UptimeRobot?',
    answer:
      'DNS monitoring can check common DNS records, including A, AAAA, CNAME, MX, NS, and TXT records, and alert you when their values change.',
  },
  {
    question: 'What kinds of problems does DNS monitoring catch?',
    answer:
      'It can help detect unexpected record changes, missing or incorrect DNS responses, propagation issues, and configuration problems that make a domain unreachable.',
  },
  {
    question: "What's the difference between DNS monitoring and domain monitoring?",
    answer:
      'DNS monitoring checks records and their responses. Domain monitoring tracks domain registration and renewal status, including expiration dates.',
  },
  {
    question: 'Can I monitor multiple domains and multiple records?',
    answer:
      'Yes. Configure checks for the domains and records you rely on, and review their status from your monitoring workspace.',
  },
  {
    question: 'How do I set up DNS monitoring?',
    answer:
      'Create a DNS monitor, enter the domain and record type to check, then configure the expected value and notification preferences.',
  },
  {
    question: 'Which plans include DNS monitoring?',
    answer:
      'The plans and their included monitor types can change. Check the current pricing details in your account for availability.',
  },
  {
    question: 'How is DNS monitoring different from a tool like DNSChecker?',
    answer:
      'A DNS lookup tool provides an on-demand check. DNS monitoring repeatedly checks configured records and can notify you when a change or failure is detected.',
  },
];

export default function DnsFaqSection() {
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
