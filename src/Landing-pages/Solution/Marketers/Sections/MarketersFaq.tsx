import { Plus } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const FAQS = [
  {
    question: 'What makes PulseWatch a good choice for marketers?',
    answer:
      'PulseWatch gives you a central place to monitor campaign websites, SSL certificates, domains, and keywords. You can receive alerts when a check detects an availability or content issue, helping your team investigate sooner.',
  },
  {
    question: 'Is there a learning curve involved in using PulseWatch?',
    answer:
      'You can start by adding the URL or service you want to monitor and choosing how often it should be checked. No monitoring agent or code change is needed for standard public website checks.',
  },
  {
    question: 'How can uptime monitoring help protect the customer experience?',
    answer:
      'Monitoring checks can notify your team when a website or campaign page stops responding. Your team can then investigate the issue and decide whether campaign changes are needed.',
  },
] as const;

export default function MarketersFaq() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[30rem] rounded-full bg-brand-blue/10 blur-3xl"
      />
      <Container>
        <div className="mx-auto max-w-4xl border-t border-white/20 pt-8 sm:pt-10">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
          </h2>
          <div className="mt-6 divide-y divide-white/15 border-b border-white/15">
            {FAQS.map(({ question, answer }, index) => (
              <details key={question} className="group py-4" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:text-base">
                  {question}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full text-brand-blue-light transition-colors group-open:bg-brand-blue/15">
                    <Plus
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-45"
                    />
                  </span>
                </summary>
                <p className="max-w-3xl pb-1 pr-8 pt-3 text-sm leading-relaxed text-slate-300">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
