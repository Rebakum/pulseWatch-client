import { Plus } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const FAQS = [
  {
    question: 'What is a webhook?',
    answer:
      'A webhook is an HTTP request sent to a URL you configure when a specific event occurs, allowing your application to react without polling.',
  },
  {
    question: 'Which events can I send to my endpoint?',
    answer:
      'Configure event notifications for monitor changes and incidents supported by your PulseWatch account. See the documentation for the current event payloads.',
  },
  {
    question: 'How should I secure my webhook receiver?',
    answer:
      'Use HTTPS, validate the request according to the supported verification method, and keep any secrets out of client-side code.',
  },
  {
    question: 'How do I avoid duplicate actions?',
    answer:
      'Make your event handling idempotent. Store a processed event identifier and safely ignore a repeated delivery.',
  },
  {
    question: 'Can I connect a custom application?',
    answer: 'Yes. Any service that can receive HTTP requests can be used as a webhook destination.',
  },
] as const;

export default function WebhookFaq() {
  return (
    <section className="bg-[#101827] py-12 text-white sm:py-16">
      <Container className="max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
        </h2>
        <div className="mt-6 divide-y divide-white/10">
          {FAQS.map(({ question, answer }, index) => (
            <details key={question} open={index === 0} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold sm:text-base">
                {question}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/15 text-slate-300 transition-colors group-open:border-brand-blue group-open:bg-brand-blue group-open:text-white">
                  <Plus
                    aria-hidden="true"
                    className="size-4 transition-transform group-open:rotate-45"
                  />
                </span>
              </summary>
              <p className="max-w-3xl pt-3 pr-10 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
