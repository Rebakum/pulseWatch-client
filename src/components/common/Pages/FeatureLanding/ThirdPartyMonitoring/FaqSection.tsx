'use client';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is third party monitoring?',
      answer:
        'Third party monitoring tracks the outside services your product depends on and alerts you when one of them has an incident: payment processors, cloud infrastructure, CDNs, identity providers, AI APIs, and anything else you call but do not run. UptimeRobot covers more than 6,000 providers. You add the ones you use and select which of their components matter to you.',
    },
    {
      question: 'How is it different from monitoring my own website?',
      answer:
        'Monitoring your own website checks your own endpoints directly. Third party monitoring directly integrates with status data provided by external SaaS and cloud vendors, giving you early warnings when infrastructure you don’t own goes down.',
    },
    {
      question: 'Does a third party service use one of my monitors?',
      answer:
        'No, third party services have a separate allowance and quota, so tracking them never uses or depletes your regular monitor quota.',
    },
    {
      question: 'Can I get alerts for only one part of a provider?',
      answer:
        'Yes! You can choose specific sub-components (such as Stripe API, Payments, or Dashboard) so you only get alerted for the parts that actually affect your app.',
    },
    {
      question: 'Which providers can I track?',
      answer:
        'You can track 6,000+ providers including AWS, Cloudflare, Stripe, OpenAI, GitHub, Vercel, Twilio, SendGrid, and many more.',
    },
    {
      question: 'What happens when a provider has an incident?',
      answer:
        'When an incident is detected, an alert is triggered through your configured channels (Slack, Email, SMS, Webhooks, PagerDuty, etc.) with detailed component-level status.',
    },
    {
      question: 'Where does the incident data come from?',
      answer:
        'The incident data comes directly from provider status feeds and historical telemetry powering IsDown, which UptimeRobot acquired in 2026.',
    },
  ];

  const toggleFaq = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] py-20 px-6 sm:px-10 lg:px-16 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12">
          Frequently asked questions
          <span className="text-[var(--color-status-up)]">.</span>
        </h2>

        {/* Accordion List */}
        <div className="divide-y divide-[color-mix(in_srgb,var(--border)_40%,transparent)] border-t border-b border-[color-mix(in_srgb,var(--border)_40%,transparent)]">
          {faqs.map((faq: FaqItem, index: number) => {
            const isOpen: boolean = openIndex === index;

            return (
              <div key={index} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                >
                  <span
                    className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                      isOpen
                        ? 'text-[var(--foreground)]'
                        : 'text-[var(--foreground)] opacity-90 group-hover:opacity-100'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon (+ / ×) */}
                  <span className="ml-4 shrink-0 flex items-center justify-center">
                    {isOpen ? (
                      <span className="text-[var(--color-status-up)] text-2xl font-semibold leading-none select-none">
                        ×
                      </span>
                    ) : (
                      <span className="text-[var(--muted)] text-xl font-medium leading-none group-hover:text-[var(--foreground)] transition-colors select-none">
                        +
                      </span>
                    )}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="mt-4 pr-8">
                    <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
