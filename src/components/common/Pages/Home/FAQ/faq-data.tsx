import Link from 'next/link';
import type { ReactNode } from 'react';
import { BRAND } from './constants';

export type FaqEntry = { question: string; answer: ReactNode };

const linkClass = 'font-medium text-brand-blue hover:underline';

export const faqList: FaqEntry[] = [
  {
    question: `What is ${BRAND}?`,
    answer: (
      <>
        <p>
          {BRAND} is an uptime monitoring service that continuously checks{' '}
          <Link href="#" className={linkClass}>
            websites, APIs, and other endpoints
          </Link>
          . It alerts you when anything goes down, degrades, or changes. So you can stay on top of
          your systems&apos; current states and identify issues before your users do.
        </p>
        <p>
          {BRAND} also provides tools to transparently communicate the{' '}
          <Link href="#" className={linkClass}>
            real-time status
          </Link>{' '}
          and reliability of your systems, and proactively{' '}
          <Link href="#" className={linkClass}>
            manage incidents
          </Link>{' '}
          when they happen.
        </p>
      </>
    ),
  },
  {
    question: 'What is an uptime monitor?',
    answer:
      'An uptime monitor periodically sends requests to your website or server to verify that it is online, responding normally, and returning expected status codes.',
  },
  {
    question: 'How do I monitor the uptime of a website?',
    answer: `Enter your website URL in your dashboard, choose your preferred check interval, and ${BRAND} will start monitoring it 24/7 immediately.`,
  },
  {
    question: 'How do I create a status page?',
    answer:
      'Navigate to the status page section in your dashboard, select the monitors you want to display, customize your branding, and publish your public status page in seconds.',
  },
  {
    question: `What can I monitor with ${BRAND}?`,
    answer:
      'You can monitor HTTP(S) websites, ping (ICMP) servers, port services (TCP), keyword checks, and custom API endpoints.',
  },
  {
    question: `How often does ${BRAND} check my website?`,
    answer:
      'Monitors can be checked as frequently as every 30 seconds or up to every 5 minutes depending on your chosen plan.',
  },
  {
    question: 'Can I monitor from multiple locations/regions?',
    answer:
      'Yes, enterprise and higher plans support multi-location checks across North America, Europe, Asia, and other global regions to avoid false positives.',
  },
  {
    question: 'How do I get an alert when a website is down (by email, SMS/IM, or phone)?',
    answer:
      'You can configure alert contacts via email, SMS, phone calls, or messaging integrations like Slack, Telegram, and PagerDuty.',
  },
  {
    question: `How does ${BRAND} reduce false alarms (false positives)?`,
    answer:
      'It automatically verifies downtime from multiple secondary monitoring locations before triggering an alert to ensure the issue is genuine.',
  },
];
