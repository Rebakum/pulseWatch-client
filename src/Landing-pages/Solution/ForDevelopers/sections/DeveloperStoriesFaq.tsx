import { Activity, Code2, GitBranch, Plus, ShieldCheck, Zap } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from './DeveloperGradientText';

const WORKFLOWS = [
  {
    category: 'Developer experience',
    title: 'Less setup, more time to build',
    description:
      'Start with endpoint checks and sensible defaults, without taking on another agent to maintain.',
    Icon: Zap,
  },
  {
    category: 'API & automation',
    title: 'Monitoring that fits your tools',
    description:
      'Use API access and webhooks to connect monitor events to the workflows your team already owns.',
    Icon: Code2,
  },
  {
    category: 'Release confidence',
    title: 'Verify the service after changes',
    description:
      'Keep an independent view of availability as your code moves from deployment to production.',
    Icon: GitBranch,
  },
  {
    category: 'Actionable signals',
    title: 'See the context behind an alert',
    description:
      'Bring uptime, response-time history, and incident notifications together for faster investigation.',
    Icon: Activity,
  },
  {
    category: 'Service health',
    title: 'Keep important endpoints visible',
    description:
      'Choose the services that matter and get notified when a check reports a change in availability.',
    Icon: ShieldCheck,
  },
] as const;

const FAQS = [
  {
    question: 'Can I automate monitor setup?',
    answer:
      'Yes. Use the PulseWatch API and webhooks to connect monitoring tasks to your own tools and development workflow.',
  },
  {
    question: 'Do I need to install an agent?',
    answer:
      'No. PulseWatch checks public endpoints externally, so there is no monitoring agent to install or maintain.',
  },
  {
    question: 'What can I monitor?',
    answer:
      'Monitor websites, API endpoints, network services, SSL certificates, scheduled jobs, and third-party services.',
  },
  {
    question: 'How do webhooks and alert notifications work?',
    answer:
      'You can configure webhooks to receive real-time JSON payloads when a monitor goes down or recovers. Integrate directly with Slack, Discord, PagerDuty, or your custom endpoints.',
  },
  {
    question: 'Can I monitor cron jobs and background tasks?',
    answer:
      'Yes. PulseWatch supports heartbeats/heartbeat monitoring. Simply send a ping request at the end of your scheduled script, and we will alert you if it fails to report in time.',
  },
  {
    question: 'What is the maximum check frequency available via API?',
    answer:
      'PulseWatch supports high-frequency monitoring up to 30-second intervals for critical API endpoints and infrastructure.',
  },
  {
    question: 'Does PulseWatch support API authentication checks?',
    answer:
      'Yes. You can define custom HTTP headers, Bearer tokens, basic auth credentials, and custom request bodies (POST/PUT/PATCH) for deep API status validation.',
  },
  {
    question: 'Can I share monitoring data with my team or users?',
    answer:
      'Yes. You can create public or password-protected status pages, export metrics via API, and grant team access with granular role-based permissions.',
  },
] as const;

export default function DeveloperStoriesFaq() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[28rem] rounded-full bg-brand-blue/10 blur-3xl"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Designed around your workflow
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Why developers <DeveloperGradientText>love</DeveloperGradientText> PulseWatch.
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WORKFLOWS.map(({ category, title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {category}
                </span>
                <Icon aria-hidden="true" className="size-4 text-brand-blue-light" />
              </div>
              <h3 className="mt-4 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-white/10 pt-9 sm:mt-14">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Straight answers
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
            </h2>
          </div>
          <div className="mt-6 divide-y divide-white/10">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  {question}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/15 text-slate-300 transition-colors group-open:border-brand-blue group-open:bg-brand-blue group-open:text-white">
                    <Plus
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-45"
                    />
                  </span>
                </summary>
                <p className="max-w-2xl pt-3 pr-10 text-sm leading-relaxed text-slate-300">
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
