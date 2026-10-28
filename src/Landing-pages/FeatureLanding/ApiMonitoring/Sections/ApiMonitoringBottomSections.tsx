import type {
  ArticleCardsSectionData,
  FaqSectionData,
  TestimonialsSectionData,
} from '@/types/landing';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';
import ArticleCards from './ArticleCards';
import FaqSection from './FaqSection';
import Testimonials from './Testimonials';

const TESTIMONIALS: TestimonialsSectionData = {
  title: [{ text: 'What teams value about API monitoring' }, { text: '.', tone: 'brand' }],
  items: [
    {
      name: 'API platform team',
      role: 'Engineering',
      headline: 'We see response issues before customers report them',
      body: 'Scheduled endpoint checks make it easier to spot latency changes and unexpected status codes before they become support tickets.',
      source: 'PulseWatch',
    },
    {
      name: 'Product engineering team',
      role: 'Software development',
      headline: 'Payload assertions catch more than uptime checks',
      body: 'A successful status code is not enough for every endpoint. Checking response content helps us catch issues that a simple availability check can miss.',
      source: 'PulseWatch',
    },
    {
      name: 'Operations team',
      role: 'Site reliability',
      headline: 'Clear endpoint history helps us investigate',
      body: 'Response times, regions, and check history give the team useful context when an API becomes slow or unavailable.',
      source: 'PulseWatch',
    },
  ],
};

const FAQ: FaqSectionData = {
  title: 'Frequently asked questions.',
  items: [
    {
      question: 'What is API monitoring?',
      answer:
        'API monitoring sends scheduled requests to an endpoint and checks whether it responds as expected. Checks can include availability, HTTP status codes, response time, headers, and response content.',
    },
    {
      question: 'Which API endpoints can I monitor?',
      answer:
        'You can monitor REST, GraphQL, and other HTTP-based API endpoints that are reachable from the configured monitoring locations.',
    },
    {
      question: 'Can I configure request methods and headers?',
      answer:
        'API checks can be configured with the request details your endpoint requires, such as an HTTP method, headers, authentication, and a request body.',
    },
    {
      question: 'Can I check API response payloads?',
      answer:
        'Yes. Configure assertions for expected response content or JSON values, so checks can detect a response that has the right status but incorrect data.',
    },
    {
      question: 'Which HTTP status codes can I validate?',
      answer:
        'Set the expected status code or acceptable response behavior for the endpoint. An unexpected response can be marked as a failed check and trigger an alert.',
    },
    {
      question: 'Can I monitor API response time?',
      answer:
        'Yes. Each check records response timing so you can review latency history and set thresholds for slower-than-expected responses.',
    },
    {
      question: 'Can I monitor APIs from multiple locations?',
      answer:
        'Where available, you can configure checks from multiple regions to compare endpoint reachability and response time across locations.',
    },
    {
      question: 'How do I get alerts when an API check fails?',
      answer:
        'Configure notification channels for the monitor. PulseWatch can notify your team when a request fails, an assertion does not match, or response time exceeds the configured threshold.',
    },
  ],
};

const ARTICLES: ArticleCardsSectionData = {
  title: 'Relevant articles.',
  items: [
    {
      icon: 'ethernet',
      title: 'API Monitoring: A Practical Guide to Endpoint Checks',
      description:
        'Learn how scheduled requests, status validation, and response assertions help keep APIs reliable.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'clock',
      title: 'How to Track API Response Times',
      description:
        'Understand API latency and use response-time history to find slowdowns before they affect users.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'target',
      title: 'Status Codes Are Not the Whole Story',
      description:
        'See why checking response payloads and expected data can catch API failures that status-only checks miss.',
      cta: { label: 'Read more' },
    },
  ],
};

export function ApiMonitoringTestimonials() {
  return <Testimonials data={TESTIMONIALS} />;
}

export function ApiMonitoringUseCases() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-light">
          Use cases
        </p>
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Get more confidence from the APIs your product depends on.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Check every critical endpoint for reachability, performance, and the response data
            your users and applications expect.
          </p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[
            'Catch API timeouts, 4xx/5xx responses, and slow requests',
            'Validate payloads from checkout, authentication, and data endpoints',
            'Compare response performance across regions and over time',
          ].map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 border-l border-brand-blue/40 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-brand-blue)_7%,transparent),transparent)] px-4 py-3 text-sm leading-relaxed"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-blue-light" />
              {text}
            </div>
          ))}
        </div>
        <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(110deg,color-mix(in_srgb,var(--surface)_92%,transparent),color-mix(in_srgb,var(--background)_96%,transparent))] backdrop-blur-xl md:grid-cols-2">
          <div className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold leading-relaxed sm:text-xl">
              Validate the response your users actually depend on.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Monitor status codes, timing, and response content together, then alert your team
              when an endpoint behaves unexpectedly.
            </p>
            <Link href="/register" className="outline-btn mt-6">
              Start monitoring APIs
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="hidden items-center border-l border-[var(--border)] p-8 md:flex">
            <div className="w-full rounded-xl border border-white/10 bg-black/[0.12] p-4">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <span className="text-[11px] font-semibold">API check results</span>
                <span className="text-[9px] text-[var(--muted)]">Last 24 hours</span>
              </div>
              {[
                ['GET /v1/orders', '200 OK', '184 ms'],
                ['POST /v1/checkout', '201 OK', '236 ms'],
                ['GET /v1/health', '200 OK', '92 ms'],
              ].map(([endpoint, status, latency]) => (
                <div
                  key={endpoint}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-[var(--border)] py-3 last:border-0"
                >
                  <span className="truncate text-[10px] font-medium">{endpoint}</span>
                  <span className="text-[9px] text-brand-blue-light">{status}</span>
                  <span className="text-[9px] text-[var(--muted)]">{latency}</span>
                </div>
              ))}
              <div className="mt-3 flex items-end gap-1">
                {[22, 30, 25, 39, 33, 44, 36, 27, 41, 32, 48, 37, 29, 43, 35, 40].map(
                  (height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t-sm bg-brand-blue/75"
                      style={{ height: `${height}px` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApiMonitoringFaq() {
  return <FaqSection data={FAQ} />;
}

export function ApiMonitoringArticles() {
  return <ArticleCards data={ARTICLES} />;
}

export function ApiMonitoringFreeAccountCta() {
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
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--surface)_85%,transparent),color-mix(in_srgb,var(--background)_96%,transparent))] p-4 text-left opacity-80 backdrop-blur-xl"
        >
          <p className="text-xs font-semibold">Monitored API endpoints</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {['GET · Orders API', 'POST · Checkout API', 'GET · Health endpoint'].map((endpoint) => (
              <div
                key={endpoint}
                className="rounded-lg border border-white/[0.08] bg-black/[0.12] px-3 py-2 text-[10px] text-[var(--muted)]"
              >
                {endpoint}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
