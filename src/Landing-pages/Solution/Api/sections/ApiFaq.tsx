import { Plus } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

const API_FAQS = [
  {
    question: 'Where do I find my API key?',
    answer:
      'Log in to your dashboard and navigate to Integrations & API in the left sidebar. Choose API and create your main API keys or monitor-specific API keys.',
  },
  {
    question: 'Can an AI agent create a monitor without API credentials?',
    answer:
      'Yes. Quick monitor setup lets an AI agent submit a monitor request for your review. Confirm the monitor in your account before it starts running.',
  },
  {
    question: 'Are there rate limits?',
    answer:
      'Yes. API requests have published rate limits. Check the response headers and API documentation for the current limits and remaining request quota.',
  },
  {
    question: 'Can I query without a body parameter?',
    answer:
      'Yes. For endpoints that do not require a request body, omit the body parameter. Refer to the endpoint documentation for required fields.',
  },
  {
    question: 'Does the API cost extra?',
    answer:
      'API access is included in the plans. Monitor counts and plan-specific features still follow your selected subscription.',
  },
] as const;

export default function ApiFaq() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container className="max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
        </h2>
        <div className="mt-6 divide-y divide-[var(--border)]">
          {API_FAQS.map(({ question, answer }, index) => (
            <details key={question} open={index === 0} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold sm:text-base">
                {question}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[var(--border)] text-brand-blue transition-colors group-open:border-brand-blue group-open:bg-brand-blue group-open:text-white">
                  <Plus
                    aria-hidden="true"
                    className="size-4 transition-transform group-open:rotate-45"
                  />
                </span>
              </summary>
              <p className="max-w-3xl pt-3 pr-10 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
