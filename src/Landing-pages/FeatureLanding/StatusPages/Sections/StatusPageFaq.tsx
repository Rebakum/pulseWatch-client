const questions = [
  {
    question: 'What is a status page?',
    answer:
      'A status page (or status dashboard) is a dedicated page that shows the current health of your service and any ongoing incidents or maintenance. It gives users a reliable place to check what’s happening and subscribe to updates via email.',
  },
  {
    question: 'What are the types of status pages?',
    answer:
      'Status pages can be public or private, hosted by a monitoring provider or served on your own custom domain, depending on the audience and access you need.',
  },
  {
    question: 'How can I customize the status page?',
    answer:
      'Customize your status page with your branding, components, layout, and custom domain so it fits your service and communicates clearly.',
  },
  {
    question: 'How can I update my customers?',
    answer:
      'Post incident and maintenance updates to your status page, and let subscribers receive notifications as the situation changes.',
  },
  {
    question: 'Can I show my uptime on my own website?',
    answer:
      'Yes. Embed status information on your own website so visitors can see service health without leaving your site.',
  },
];

export default function StatusPageFaq() {
  return (
    <section className="bg-[#111821] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Status page <span className="bg-brand-gradient bg-clip-text text-transparent">FAQs.</span>
        </h2>
        <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {questions.map((item, index) => (
            <details key={item.question} className="group py-4 sm:py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium marker:hidden">
                {item.question}
                <span
                  className="text-sky-400 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-4xl pr-8 text-xs leading-relaxed text-slate-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
