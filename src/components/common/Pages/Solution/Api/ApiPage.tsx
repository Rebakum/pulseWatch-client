import {
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  DollarSign,
  GitBranch,
  Gauge,
  Globe2,
  Plug,
  Plus,
  ShieldCheck,
  Webhook,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../ForDevelopers/DeveloperGradientText';

const API_FEATURES = [
  {
    title: 'Included in all plans',
    description:
      'Our API comes with clear, published rate limits, so you can scale without surprises.',
    Icon: DollarSign,
  },
  {
    title: 'Integrates with your toolchain',
    description:
      'Use cURL, Postman, CI/CD, or serverless workflows. If it speaks HTTP, it can work with the API.',
    Icon: GitBranch,
  },
  {
    title: 'Your dashboard, programmatically',
    description:
      'Everything available in the UI can be managed through API endpoints, from monitors to alert contacts.',
    Icon: Code2,
  },
] as const;

const TECHNICAL_HIGHLIGHTS = [
  {
    title: 'Unified endpoint design',
    description: 'One base URL for all methods, with no messy versioning.',
  },
  {
    title: 'Multi-format replies',
    description: 'Choose JSON, JSONP, or XML responses to suit your tools.',
  },
  {
    title: 'Monitor types on tap',
    description: 'HTTP/S, Keyword, Ping, Port, Heartbeat, SSL, and Domain expiry.',
  },
  {
    title: 'Geo-verified checks',
    description: 'API-created monitors inherit multi-location reliability checks.',
  },
  {
    title: 'Rate-limit headers',
    description: 'Built-in rate-limit data helps your automation stay polite.',
  },
  {
    title: 'Instant webhook alerts',
    description: 'Route incident notifications to Slack, Discord, Teams, or your URL.',
  },
] as const;

const COMMUNITY_BUILDS = [
  {
    title: 'Grafana & Prometheus',
    description:
      'Bring uptime metrics into Grafana and Prometheus dashboards alongside your server metrics.',
    Icon: Gauge,
  },
  {
    title: 'Ansible & Terraform',
    description:
      'Automate monitor onboarding as infrastructure code and keep new services under watch.',
    Icon: Plug,
  },
  {
    title: 'Integrately / Make workflows',
    description:
      'Use monitor events to start workflows, notify teams, or connect your existing services.',
    Icon: Webhook,
  },
  {
    title: 'WordPress plugin',
    description:
      'Surface uptime and service status in the tools and dashboards your team already uses.',
    Icon: Globe2,
  },
  {
    title: 'Keep-awake pings',
    description:
      'Use heartbeat monitoring to check scheduled jobs and keep important tasks accountable.',
    Icon: ShieldCheck,
  },
  {
    title: 'Custom heartbeat stacks',
    description:
      'Combine local health checks with external alerts for a clearer view of your operations.',
    Icon: Bot,
  },
] as const;

const COMMUNITY_QUOTES = [
  {
    quote:
      'I built an Integrately/Make scenario that receives all webhook events from PulseWatch, locates or creates the right ticket on our system, and closes it on recovery.',
    name: 'Emmaly',
    date: 'June 2023',
  },
  {
    quote:
      'I added the API to our Grafana dashboard today. I also added another table widget for reporting on latest status, average response time, and 7 day uptime.',
    name: 'Amy',
    date: 'October 2023',
  },
  {
    quote:
      'If I put uptime data in Prometheus then I can make a dashboard in GCP’s Cloud Alerting/Monitoring and then not have to hear everyone tell me Grafana is too complicated.',
    name: 'Muddycow',
    date: 'December 2023',
  },
  {
    quote:
      'PulseWatch has been keeping my website online 24/7 for many months now, with a 99% uptime. That’s absolutely insane!',
    name: 'Jb',
    date: 'April 2025',
  },
  {
    quote:
      'Several people have built Terraform providers that use the API to create resources in their own reusable, idempotent code.',
    name: 'Renomaros',
    date: 'June 2024',
  },
  {
    quote:
      'The main goal is to have its own, independent heartbeat server, to be able to integrate with any alerting provider—including UptimeRobot.',
    name: 'Tomasz Klim',
    date: 'April 2025',
  },
] as const;

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

function ApiPreview() {
  return (
    <div
      role="img"
      aria-label="API access preview with a monitor reset endpoint and successful connection"
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 blur-3xl"
      />
      <div className="relative space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-300">
            <Plug aria-hidden="true" className="size-10 text-brand-blue-light sm:size-14" />
            <span className="text-xl font-semibold sm:text-3xl">API access</span>
          </div>
          <span className="grid size-16 place-items-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/20 sm:size-20">
            <Check aria-hidden="true" className="size-10 sm:size-12" strokeWidth={3} />
          </span>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#1b2537] p-5 text-slate-400 shadow-2xl shadow-black/20 sm:p-7">
          <p className="text-sm sm:text-lg">
            <span className="font-semibold text-brand-blue-light">GET</span> post /monitors/{'{id}'}/reset
          </p>
          <p className="mt-3 text-sm sm:text-lg">&quot;nextLink&quot;: &quot;string&quot;,</p>
        </div>
        <div className="flex items-center justify-end gap-3 rounded-xl border border-white/5 bg-[#1b2537] p-3 sm:p-4">
          <span className="rounded-lg bg-[#101827] px-5 py-3 text-sm text-slate-400">Cancel</span>
          <span className="rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ApiPage() {
  return (
    <main aria-label="PulseWatch API">
      <section className="relative isolate overflow-hidden bg-[#101827] py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-0 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
        />
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Monitor everything.
              <br />
              Automate <DeveloperGradientText>anything.</DeveloperGradientText>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Plug the PulseWatch REST API into your codebase and handle uptime, status pages, SSL,
              cron jobs, maintenance windows, and more from a single endpoint.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ShaderButton href="/api-docs">API Docs (V3)</ShaderButton>
              <Link
                href="/api-docs"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                View legacy API docs <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
          <ApiPreview />
        </Container>
      </section>

      <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Automate every monitor in <DeveloperGradientText>minutes.</DeveloperGradientText>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
              Spin up, modify, or delete monitors straight from your CI/CD pipeline. No manual
              clicks, no copy-paste fatigue—just concise calls that move as fast as your deploys.
            </p>
          </div>

          <div className="mx-auto mt-7 max-w-3xl rounded-xl border border-brand-blue/30 bg-brand-blue/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Bot aria-hidden="true" className="size-4 text-brand-blue" />
              Using AI?
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              Set up monitors without API keys or sign-up. Let your AI agent submit the URL and
              your email, then confirm or modify the check in one click.
            </p>
            <Link
              href="/api-docs"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue underline underline-offset-2"
            >
              See quick monitor setup for AI agents <ArrowUpRight aria-hidden="true" className="size-3" />
            </Link>
          </div>

          <div className="mt-9 grid gap-7 sm:grid-cols-3 sm:gap-6">
            {API_FEATURES.map(({ title, description, Icon }) => (
              <article key={title}>
                <span className="relative inline-grid size-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Icon aria-hidden="true" className="size-5" />
                  <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-[var(--background)] bg-brand-blue" />
                </span>
                <h3 className="mt-3 text-sm font-bold">{title}</h3>
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Technical <DeveloperGradientText>highlights.</DeveloperGradientText>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              A predictable API that fits into your existing automation and tooling.
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNICAL_HIGHLIGHTS.map(({ title, description }) => (
              <article key={title} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Built with the <DeveloperGradientText>PulseWatch API.</DeveloperGradientText>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              From hobby projects to enterprise workflows. See what our community builds.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {COMMUNITY_BUILDS.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="relative isolate overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.07)] sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 top-1/2 -z-10 size-28 -translate-y-1/2 rounded-full bg-brand-blue/10"
                />
                <Icon aria-hidden="true" className="size-6 text-brand-blue" />
                <h3 className="mt-3 text-sm font-bold">{title}</h3>
                <p className="mt-2 max-w-lg text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <ShaderButton href="/api-docs">Start building with API</ShaderButton>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              <DeveloperGradientText>Community</DeveloperGradientText> spotlight.
            </h2>
          </div>
          <div className="mt-8 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_QUOTES.map(({ quote, name, date }) => (
              <article
                key={name}
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <p className="text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  &quot;{quote}&quot;
                </p>
                <p className="mt-3 text-xs font-bold">{name}</p>
                <p className="text-xs text-[var(--muted)]">{date}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-0 -z-10 size-[30rem] rounded-full bg-brand-blue/15 blur-3xl"
        />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Start using the API in <DeveloperGradientText>seconds.</DeveloperGradientText>
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Get up and running in moments with your email address.
            </p>
          </div>
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <h3 className="text-sm font-bold">
                <span className="mr-1 text-brand-blue-light">1</span> Grab your key
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Copy it from Integrations &amp; API in your dashboard.
              </p>
            </li>
            <li>
              <h3 className="text-sm font-bold">
                <span className="mr-1 text-brand-blue-light">2</span> Fire your first call
              </h3>
              <pre className="mt-2 overflow-x-auto rounded-lg border border-white/10 bg-[#1b2537] p-3 text-[10px] leading-relaxed text-slate-200">
                <code>{`curl -X POST https://api.pulsewatch.com/v2/getMonitors \\
  -d 'api_key=YOUR_API_KEY_HERE&format=json'`}</code>
              </pre>
            </li>
            <li>
              <h3 className="text-sm font-bold">
                <span className="mr-1 text-brand-blue-light">3</span> Parse the JSON
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                The response includes status, uptime ratio, and average response time.
              </p>
            </li>
            <li>
              <h3 className="text-sm font-bold">
                <span className="mr-1 text-brand-blue-light">4</span> That’s it!
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Create, edit, or delete monitors and alert contacts on the fly.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-14 text-center text-[var(--foreground)] sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to <DeveloperGradientText>build?</DeveloperGradientText>
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Get your API key and start creating with the PulseWatch API in just a few clicks.
          </p>
          <div className="mt-6 flex justify-center">
            <ShaderButton href="/api-docs">Start building with API</ShaderButton>
          </div>
        </Container>
      </section>

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
    </main>
  );
}
