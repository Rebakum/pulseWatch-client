import type {
  ArticleCardsSectionData,
  FaqSectionData,
  TestimonialsSectionData,
} from '@/types/landing';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { ArrowUpRight, Star } from 'lucide-react';
import ArticleCards from './ArticleCards';
import FaqSection from './FaqSection';
import Testimonials from './Testimonials';

const TESTIMONIALS: TestimonialsSectionData = {
  title: [
    { text: 'What users love about our port monitoring' },
    { text: '.', tone: 'brand' },
  ],
  items: [
    {
      name: 'Verified User in Information Technology and Services',
      headline: 'Just what I needed',
      body: 'I use port monitoring to keep an eye on services that need to stay available. The status history makes it easy to spot when a connection starts having trouble.',
      source: 'G2.com',
    },
    {
      name: 'Achir S.',
      role: 'Growth & Operation Office',
      headline: 'A clear way to monitor service uptime',
      body: 'The dashboard is clean and straightforward. I can check the health of the services I depend on without digging through a lot of unrelated information.',
      source: 'G2.com',
    },
    {
      name: 'Szakács A.',
      role: 'Senior Software Engineer',
      headline: 'Useful visibility for self-hosted services',
      body: 'It is helpful to have different monitor types in one place. Port checks make it easier to verify the services behind my applications.',
      source: 'G2.com',
    },
  ],
};

const FAQ: FaqSectionData = {
  title: 'Frequently asked questions.',
  items: [
    {
      question: 'What is port monitoring?',
      answer:
        'Port monitoring checks whether a specific network port on a host is accepting connections. It helps verify that a service, such as a web server or database, is reachable.',
    },
    {
      question: 'What metrics are monitored?',
      answer:
        'Port monitoring can track whether a port is open or closed, connection response time, and availability over time.',
    },
    {
      question: 'What ports can I monitor?',
      answer:
        'You can monitor the ports used by your services, including common web, mail, database, DNS, and SSH ports, as well as custom ports supported by your monitor configuration.',
    },
    {
      question: 'What is the difference between port monitoring and ping monitoring?',
      answer:
        'Ping monitoring checks whether a host responds to an ICMP request. Port monitoring attempts a connection to a specific service port, so it can confirm whether an application service is accepting connections.',
    },
    {
      question: 'Can I monitor email services with port monitoring?',
      answer:
        'Yes. You can monitor the network ports used by SMTP, IMAP, and POP3 services to check whether the mail service accepts connections.',
    },
    {
      question: 'How do I set up port monitoring?',
      answer:
        'Create a port monitor, provide the hostname or IP address and port, then choose the check interval and notification channels that fit your needs.',
    },
    {
      question: 'Can I monitor multiple ports on the same server?',
      answer:
        'Yes. Create a separate monitor for each service port you want to check. This lets you see the health and history of each service independently.',
    },
    {
      question: 'Can I get alerted when a port is unavailable?',
      answer:
        'Yes. Configure notification channels for your monitor to receive an alert when a check detects a connection problem.',
    },
  ],
};

const ARTICLES: ArticleCardsSectionData = {
  title: 'Relevant articles.',
  items: [
    {
      icon: 'ethernet',
      title: 'Top 10 Port Monitoring Tools',
      description:
        'Compare port monitoring tools and learn what to look for when choosing a solution for your services.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'target',
      title: 'A Guide to POP3 and IMAP Monitoring',
      description:
        'Learn how to check mail server ports and monitor availability for email services.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'clock',
      title: 'SMTP Monitoring: Understand Email Delivery',
      description:
        'Explore why SMTP monitoring matters and how connection checks can help reveal service interruptions.',
      cta: { label: 'Read more' },
    },
  ],
};

export function PortMonitoringTestimonials() {
  return <Testimonials data={TESTIMONIALS} />;
}

export function PortMonitoringFaq() {
  return <FaqSection data={FAQ} />;
}

export function PortMonitoringArticles() {
  return <ArticleCards data={ARTICLES} />;
}

export function PortMonitoringFreeAccountCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-brand-blue/10 blur-[110px]"
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center gap-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
          <span className="flex items-center gap-1 text-sm font-bold">
            4.7
            <Star className="h-4 w-4 fill-brand-blue text-brand-blue" aria-hidden="true" />
          </span>
          <span className="h-5 w-px bg-[var(--border)]" />
          <span className="text-sm font-bold">284+ reviews</span>
        </div>
        <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Get your free account now, with 50 monitors included.
        </h2>
        <div className="mt-7">
          <ShaderButton href="/register">
            Start monitoring in 30 seconds
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </ShaderButton>
        </div>
        <p className="mt-3 text-sm text-[var(--muted)]">No credit card required</p>
        <div
          aria-hidden="true"
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-4 text-left opacity-70"
        >
          <p className="text-xs font-semibold">Your monitored services</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {['Web server · 443', 'Database · 5432', 'Mail relay · 587'].map((service) => (
              <div
                key={service}
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[10px] text-[var(--muted)]"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
