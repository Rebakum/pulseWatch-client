import { Activity, CheckCircle2, GitBranch, ShieldCheck } from 'lucide-react';

import Container from '@/components/common/Container';
import KeywordFreeAccountCta from '@/Landing-pages/FeatureLanding/KeywordMonitoring/Sections/KeywordFreeAccountCta';
import StatusPagesSection from '@/Landing-pages/FeatureLanding/KeywordMonitoring/Sections/KeywordMonitotoringStatusPageSection';
import TeamMembersSection from '@/Landing-pages/FeatureLanding/KeywordMonitoring/Sections/TeamMembersSection';
import ArticleCards from '@/Landing-pages/FeatureLanding/WebsiteMonitoring/sections/ArticleCards';
import FaqSection from '@/Landing-pages/FeatureLanding/WebsiteMonitoring/sections/FaqSection';
import type { ArticleCardsSectionData, FaqSectionData } from '@/types/landing';

const ARTICLES: ArticleCardsSectionData = {
  title: 'DevOps resources.',
  items: [
    {
      icon: 'target',
      title: 'A Practical Guide to Production Monitoring',
      description:
        'Learn what to monitor in production and how reliable checks help teams spot service issues early.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'ethernet',
      title: 'Monitoring Services After a Deployment',
      description:
        'Build post-deploy checks into your release process and verify that critical endpoints remain healthy.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'clock',
      title: 'Designing Useful On-call Alerts',
      description:
        'Reduce alert noise with clear thresholds, sensible recurrence, and notifications routed to the right team.',
      cta: { label: 'Read more' },
    },
  ],
};

const FAQ: FaqSectionData = {
  title: 'Frequently asked questions.',
  items: [
    {
      question: 'How does PulseWatch help DevOps teams?',
      answer:
        'PulseWatch checks websites, APIs, servers, and scheduled jobs, then notifies your team when a monitor detects an outage or response-time issue. This adds an external availability signal alongside your existing observability tools.',
    },
    {
      question: 'Can I use monitoring checks after a deployment?',
      answer:
        'Yes. Use monitor checks to verify that important services are available after a release. You can connect monitoring events to your workflow using integrations and webhooks.',
    },
    {
      question: 'Which services can DevOps teams monitor?',
      answer:
        'Monitor public websites, API endpoints, network services, keywords, DNS, third-party providers, and scheduled jobs from one account.',
    },
    {
      question: 'Can I route alerts to my on-call team?',
      answer:
        'Yes. Configure notification channels such as email, SMS, voice calls, and supported integrations so incidents reach the people who need to respond.',
    },
    {
      question: 'Does PulseWatch support maintenance windows?',
      answer:
        'Yes. Schedule maintenance windows to pause notifications during planned work and reduce avoidable alert noise.',
    },
    {
      question: 'Can I share service status with stakeholders?',
      answer:
        'Yes. Public status pages let you communicate service health and incident updates to customers or internal stakeholders.',
    },
    {
      question: 'Can I get started for free?',
      answer:
        'Yes. Create an account and start with up to 50 free monitors. No credit card is required to get started.',
    },
  ],
};

export function DevOpsTrustSections() {
  return (
    <>
      <section className="bg-[var(--background)] pb-8 pt-14 text-[var(--foreground)] sm:pt-20">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Your service health and incidents,{' '}
            <span className="text-brand-blue">in one place.</span>
          </h2>
        </Container>
      </section>
      <StatusPagesSection />
      <TeamMembersSection />
    </>
  );
}

export function DevOpsTestimonials() {
  const capabilities = [
    {
      title: 'Find problems early',
      description:
        'Run regular checks against important endpoints and services to spot availability changes.',
      Icon: Activity,
    },
    {
      title: 'Connect checks to releases',
      description:
        'Use integrations and webhooks to keep monitoring signals close to your deployment workflow.',
      Icon: GitBranch,
    },
    {
      title: 'Respond with confidence',
      description:
        'Share service status and notify the people responsible when an incident needs attention.',
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[var(--surface)] py-14 text-[var(--foreground)] sm:py-20">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Monitoring that supports <span className="text-brand-blue">your workflow.</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {capabilities.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6"
            >
              <Icon aria-hidden="true" className="size-6 text-brand-blue" />
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DevOpsCustomerStory() {
  return (
    <section className="bg-[var(--background)] py-14 text-[var(--foreground)] sm:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Keep releases and services <span className="text-brand-blue">on track.</span>
        </h2>
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center text-center">
          <CheckCircle2 aria-hidden="true" className="size-12 text-brand-blue" />
          <p className="mt-5 text-base font-semibold leading-relaxed sm:text-lg">
            When a service changes, your team should know quickly and have the context to act.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Keep availability checks, response-time history, and incident notifications together to
            investigate issues with a clearer picture.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function DevOpsArticles() {
  return <ArticleCards data={ARTICLES} />;
}

export function DevOpsFaq() {
  return <FaqSection data={FAQ} className="py-14 sm:py-20" />;
}

export function DevOpsFreeAccountCta() {
  return <KeywordFreeAccountCta />;
}
