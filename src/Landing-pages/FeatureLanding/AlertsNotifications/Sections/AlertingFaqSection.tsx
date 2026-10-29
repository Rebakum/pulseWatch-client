const faqs = [
  {
    question: 'What is IT alerting software?',
    answer:
      'IT alerting software continuously monitors your systems and services and notifies you when something goes wrong, such as downtime, slow response times, or failed checks. Instead of discovering issues through user complaints, teams receive real-time alerts that allow them to investigate root causes, reduce downtime, and restore services faster.',
  },
  {
    question: 'What types of issues can I get alerts for?',
    answer:
      'Get notified about outages, slow response times, SSL or domain expiry, and other monitor-specific incidents across your websites, APIs, servers, and services.',
  },
  {
    question: 'Can I monitor multiple services and environments?',
    answer:
      'Yes. Organize monitors across multiple services, teams, and environments, then configure the right alert contacts for each one.',
  },
  {
    question: 'How fast are alerts delivered?',
    answer:
      'Alerts are sent as soon as a monitor detects an issue, with recurring notifications available until the incident is resolved.',
  },
  {
    question: 'Which alert channels are supported?',
    answer:
      'Receive notifications through email, SMS, voice calls, and integrations with the tools your team already uses.',
  },
  {
    question: 'Will alerting impact my systems performance?',
    answer:
      'No. Checks run externally and monitor availability and response without adding load to the systems being monitored.',
  },
];

export default function AlertingFaqSection() {
  return (
    <section className="bg-[#111821] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Frequently asked questions.
        </h2>
        <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group py-4 sm:py-4.5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-medium marker:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="bg-brand-gradient bg-clip-text text-lg leading-none text-transparent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pr-7 text-xs leading-relaxed text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}