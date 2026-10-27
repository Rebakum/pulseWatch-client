import {
  Activity,
  ArrowUpRight,
  Bell,
  ChartNoAxesCombined,
  Check,
  CircleCheck,
  Globe2,
  KeyRound,
  Mail,
  MessageCircle,
  MessageSquare,
  MonitorCheck,
  MonitorUp,
  MousePointer2,
  Phone,
  ShieldCheck,
  Smartphone,
  Star,
  TimerReset,
  ThumbsUp,
  Webhook,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../ForDevelopers/DeveloperGradientText';

const CHANNELS = [
  { title: 'Email', Icon: Mail },
  { title: 'SMS', Icon: Smartphone },
  { title: 'Voice call', Icon: Phone },
  { title: 'Mobile app push', Icon: Bell },
  { title: 'Microsoft Teams', Icon: MessageSquare },
  { title: 'Slack', Icon: MessageCircle },
  { title: 'Google Chat', Icon: MessageSquare },
  { title: 'PagerDuty', Icon: Activity },
  { title: 'Pushbullet', Icon: Zap },
  { title: 'Webhooks', Icon: Webhook },
] as const;

const BENEFITS = [
  {
    title: 'Improved customer experience',
    description:
      'Uptime monitoring enables you to provide a seamless user experience, which can enhance relationships and loyalty among your customers.',
    Icon: ThumbsUp,
  },
  {
    title: 'Get valuable insights and reports',
    description:
      'Stay informed and up-to-date with monthly reports delivered via email. These summaries provide a detailed overview of your overall uptime, number of incidents, total downtime, and the longest incident.',
    Icon: ChartNoAxesCombined,
  },
  {
    title: 'Build trust with status pages',
    description:
      'Custom status pages can serve as a demonstration of your SLA. Promote transparency and reduce the workload of your customer support team.',
    Icon: ShieldCheck,
  },
];

const MONITORS = [
  { title: 'Website monitoring', Icon: MonitorUp, href: '/website-monitoring' },
  { title: 'SSL monitoring', Icon: ShieldCheck, href: '/ssl-monitoring' },
  { title: 'Port monitoring', Icon: MonitorCheck, href: '/port-monitoring' },
  { title: 'Cron job monitoring', Icon: TimerReset, href: '/cron-job-monitoring' },
  { title: 'Keyword monitoring', Icon: KeyRound, href: '/keyword-monitoring' },
  { title: 'Ping monitoring', Icon: Activity, href: '/ping-monitoring' },
] as const;

const BUSINESS_FEATURES = [
  {
    title: 'Protect brand reputation',
    description:
      'Enhance customer loyalty and trust of your customers while avoiding bad social reviews and product ratings.',
  },
  {
    title: 'No tech skills required',
    description:
      'Setting up your first monitor is simple and can be done without any installation.',
  },
  {
    title: 'Responsive live chat',
    description:
      'Our quick-response customer support team is ready to assist you via email or chat.',
  },
] as const;

const REVIEWS = [
  {
    name: 'Will B., CEO & President',
    title: 'Great tool to monitor status of your website',
    text: 'I cannot say anything negative about PulseWatch. It lets us know when clients cannot access their accounts and provides real-time updates.',
  },
  {
    name: 'Costas V., Technical Manager & Supervisor',
    title: 'Great value with the free plan!',
    text: 'Easily easy to use, add monitors of different kinds and monitor your services. Beats the competition in response time even with the free plan.',
  },
  {
    name: 'Mark L., Operations Manager',
    title: 'Great service',
    text: 'Great service that allows you to monitor the downtime of the website in multiple ways. Integrations with different software allow for an easy notification stream.',
  },
  {
    name: 'Eyal C., CEO',
    title: 'Must have tool!',
    text: 'Easy to use, simple, monitoring our sites are needed. Couldn’t ask for more.',
  },
  {
    name: 'Drew M., CEO',
    title: 'Great product, great support!',
    text: 'It just worked. Intuitive interface. Support answered my question fast and was very helpful.',
  },
  {
    name: 'Bret W., Managing Director',
    title: 'Reliable, expandable and extremely well priced',
    text: 'I always know within seconds of a server or endpoint going down and can take action. Excellent price, excellent service.',
  },
] as const;

const FAQS = [
  {
    question: 'Can I delegate different access levels to my team members?',
    answer:
      'PulseWatch allows you to assign different access permissions to your employees based on their roles and responsibilities. You can grant them access to manage monitors, view reports, add or edit monitors, or receive alerts while keeping configuration access limited.',
  },
  {
    question: 'Do you offer tailored solutions for larger enterprises?',
    answer:
      'Yes. Larger teams can scale monitoring, notification channels, and team access to their needs. Visit our enterprise page to explore advanced options.',
  },
  {
    question: 'How does uptime monitoring support strategic decision-making?',
    answer:
      'Uptime history and reports help you understand reliability trends, prioritize improvements, and make informed decisions about the services your business depends on.',
  },
] as const;

function MonitorSetupVisual() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-72 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 ring-1 ring-brand-blue/20 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 w-[88%] max-w-[480px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div>
            <p className="text-sm font-bold">Create a monitor</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Watch your business website</p>
          </div>
          <span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
            <Globe2 aria-hidden="true" className="size-5" />
          </span>
        </div>
        <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-[10px] font-semibold">Website URL</p>
          <p className="mt-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs text-[var(--muted)]">
            https://yourbusiness.com
          </p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[var(--surface)] p-3">
            <p className="text-[10px] text-[var(--muted)]">Check interval</p>
            <p className="mt-1 text-xs font-semibold">30 seconds</p>
          </div>
          <div className="rounded-lg bg-[var(--surface)] p-3">
            <p className="text-[10px] text-[var(--muted)]">Alert me via</p>
            <p className="mt-1 text-xs font-semibold">Email + SMS</p>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[image:var(--background-image-brand-gradient)] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-blue/20">
          Start monitoring
          <MousePointer2 aria-hidden="true" className="size-3.5" />
        </div>
      </div>
    </div>
  );
}

function UptimeVisual() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-72 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 ring-1 ring-brand-blue/20 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 w-[88%] max-w-[480px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">Website</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">yourbusiness.com</p>
          </div>
          <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue">
            Operational
          </span>
        </div>
        <div className="mt-6 grid grid-cols-[repeat(30,minmax(0,1fr))] gap-1" aria-hidden="true">
          {Array.from({ length: 30 }, (_, index) => (
            <span
              key={index}
              className={`h-8 rounded-sm ${index === 17 ? 'bg-brand-blue-light' : 'bg-brand-blue'}`}
            />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-2 font-semibold">
            <span className="size-2.5 rounded-full bg-brand-blue" />
            100.00% uptime
          </span>
          <span className="text-[var(--muted)]">Last 30 days</span>
        </div>
      </div>
    </div>
  );
}

function HealthDashboardVisual() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-72 rounded-full bg-[image:var(--background-image-brand-gradient)] opacity-20 ring-1 ring-brand-blue/20 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 grid w-[88%] max-w-[480px] grid-cols-[1fr_auto] gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="rounded-xl bg-[#101827] p-4 text-white">
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span>Availability</span>
            <Activity aria-hidden="true" className="size-4 text-brand-blue-light" />
          </div>
          <div className="mt-6 flex h-24 items-end gap-1" aria-hidden="true">
            {[26, 42, 34, 57, 48, 65, 50, 72, 59, 78, 64, 86].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm bg-[image:var(--background-image-brand-gradient)]"
                style={{ height }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <span className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[10px] font-semibold">
            Uptime <span className="mt-1 block text-brand-blue">99.99%</span>
          </span>
          <span className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[10px] font-semibold">
            Response <span className="mt-1 block text-brand-blue">42 ms</span>
          </span>
        </div>
      </div>
    </div>
  );
}

const FEATURE_ROWS = [
  {
    title: 'Implement and use in a few clicks.',
    accent: 'few clicks',
    description:
      'PulseWatch is a simple cloud-based uptime monitoring solution that does not require technical knowledge.',
    visual: MonitorSetupVisual,
  },
  {
    title: 'Maintain reliable operations.',
    accent: 'reliable',
    description:
      'Make sure your websites and systems perform at their best and protect your company’s reputation.',
    visual: UptimeVisual,
  },
  {
    title: 'Save costs and boost efficiency.',
    accent: 'costs',
    description:
      'Ensure your services are always up and let your team focus on what matters instead of discovering incidents too late.',
    visual: HealthDashboardVisual,
  },
] as const;

export default function BusinessOwnersPage() {
  return (
    <main aria-label="Uptime monitoring for business owners">
      <section className="relative isolate overflow-hidden bg-[#101827] py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-0 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
        />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Uptime monitoring for <DeveloperGradientText>business owners.</DeveloperGradientText>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Ensure smooth operations and avoid potential loss from website downtime and other incidents.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ShaderButton href="/register">Start in 30 seconds</ShaderButton>
                <span className="text-xs text-slate-400">No credit card required</span>
              </div>
            </div>

            <div
              role="img"
              aria-label="Business uptime dashboard showing website health and monitoring activity"
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-[image:var(--background-image-brand-gradient)] opacity-20 blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-[#151e30] p-5 shadow-2xl shadow-black/30 sm:p-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-[#0d1422] p-4">
                    <div className="flex h-24 items-end gap-1 border-b border-l border-slate-500/60 p-2">
                      {[20, 33, 28, 48, 38, 58, 52, 72].map((height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-sm bg-[image:var(--background-image-brand-gradient)]"
                          style={{ height }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-[10px] text-slate-400">Business health</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0d1422] p-4">
                    <p className="text-[10px] font-semibold text-slate-300">Your website</p>
                    <div className="mt-3 space-y-2">
                      {['Website', 'Checkout', 'API'].map((item) => (
                        <div key={item} className="flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">{item}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-light" />
                        </div>
                      ))}
                    </div>
                    <MousePointer2 aria-hidden="true" className="ml-auto mt-3 size-5 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#0d1422] p-3">
                  <span className="text-xs font-semibold">Availability this month</span>
                  <span className="text-xs font-semibold text-blue-200">99.99%</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-xs text-slate-400">
            A reliable signal for your website, checkout, and essential business services.
          </p>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-20">
        <Container>
          <div className="divide-y divide-[var(--border)]">
            {FEATURE_ROWS.map((row, index) => {
              const visualFirst = index % 2 === 0;
              const accentIndex = row.title.indexOf(row.accent);
              const Visual = row.visual;

              return (
                <article
                  key={row.title}
                  className="grid items-center gap-8 py-9 first:pt-0 last:pb-0 sm:gap-12 sm:py-14 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={visualFirst ? 'order-2 lg:order-1' : 'order-2'}>
                    <Visual />
                  </div>
                  <div className={visualFirst ? 'order-1 lg:order-2' : 'order-1'}>
                    <h2 className="max-w-xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                      {row.title.slice(0, accentIndex)}
                      <DeveloperGradientText>{row.accent}</DeveloperGradientText>
                      {row.title.slice(accentIndex + row.accent.length)}
                    </h2>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                      {row.description}
                    </p>
                    {index === 0 ? (
                      <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
                        <Check aria-hidden="true" className="size-4 text-brand-blue" />
                        No code or installation required
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 -z-10 size-[30rem] -translate-y-1/2 rounded-full bg-brand-blue/25 blur-3xl"
        />
        <Container className="grid items-center gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 sm:gap-5">
            {CHANNELS.map(({ title, Icon }) => (
              <div key={title} className="flex flex-col items-center gap-2.5 text-center">
                <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-blue-200 sm:size-12">
                  <Icon aria-hidden="true" className="size-5 sm:size-6" />
                </span>
                <span className="text-[10px] font-semibold text-slate-200 sm:text-xs">{title}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Business alerts
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Empower incident <DeveloperGradientText>response.</DeveloperGradientText>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
              Ensure the right people get instant notifications through the channels your team already uses, so they can start working on a solution quickly.
            </p>
            <Link
              href="/alerts-notifications"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              Show all integrations <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            <DeveloperGradientText>Benefits</DeveloperGradientText> of effective uptime monitoring.
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {BENEFITS.map(({ title, description, Icon }) => (
              <article key={title}>
                <span className="relative inline-grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
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

      <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <div className="border-y border-[var(--border)] py-8 sm:py-10">
            <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              All you really care about <DeveloperGradientText>monitored</DeveloperGradientText> in one place.
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {MONITORS.map(({ title, Icon, href }) => (
                <article
                  key={title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-3 min-h-10 text-xs font-semibold leading-snug">{title}</h3>
                  <Link
                    href={href}
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-brand-blue underline underline-offset-2"
                  >
                    Learn more <ArrowUpRight aria-hidden="true" className="size-3" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-8">
              <h2 className="text-center text-sm font-bold sm:text-base">
                <DeveloperGradientText>Improve</DeveloperGradientText> your operations with uptime monitoring.
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {BUSINESS_FEATURES.map(({ title, description }) => (
                  <article key={title}>
                    <h3 className="flex items-center gap-2 text-xs font-bold">
                      <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-brand-blue" />
                      {title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-[var(--muted)]">
                Set up reliable monitoring easily and protect your online presence.
              </p>
              <div className="mt-4 flex justify-center">
                <ShaderButton href="/register">Start monitoring in 30 seconds</ShaderButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl"
        />
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Why <DeveloperGradientText>business owners</DeveloperGradientText> use PulseWatch.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map(({ name, title, text }) => (
              <article
                key={name}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-5 transition-colors hover:bg-white/[0.08]"
              >
                <p className="text-[10px] text-slate-400">{name}</p>
                <div className="mt-2 flex items-center gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="size-3 fill-current" />
                  ))}
                </div>
                <h3 className="mt-2 text-xs font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{text}</p>
                <a
                  href="#reviews"
                  className="mt-3 inline-block text-[10px] font-semibold text-brand-blue-light underline underline-offset-2"
                >
                  Reviewed on
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#101827] pb-12 text-white sm:pb-16">
        <Container>
          <div className="mx-auto max-w-4xl border-t border-white/15 pt-8">
            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
            </h2>
            <div className="mt-6 divide-y divide-white/15">
              {FAQS.map(({ question, answer }, index) => (
                <details key={question} open={index === 0} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                    {question}
                    <span className="text-lg leading-none text-brand-blue-light group-open:hidden">+</span>
                    <span className="hidden text-lg leading-none text-brand-blue-light group-open:inline">−</span>
                  </summary>
                  <p className="max-w-3xl pt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-14 text-center text-[var(--foreground)] sm:py-20">
        <Container>
          <h2 className="text-lg font-bold tracking-tight sm:text-2xl">
            Get your FREE account now, 50 monitors included!
          </h2>
          <div className="mt-5 flex justify-center">
            <ShaderButton href="/register">Start monitoring in 30 seconds</ShaderButton>
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">No credit card required!</p>
          <p className="mt-6 text-xs text-[var(--muted)]">Available also on:</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              aria-label="Get it on Google Play"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-left text-white transition-transform hover:scale-[1.03]"
            >
              <Image src="/play-store.png" alt="" width={22} height={22} className="size-5 object-contain" />
              <span className="text-[9px] leading-tight">
                GET IT ON
                <strong className="block text-xs">Google Play</strong>
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Download on the App Store"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-left text-white transition-transform hover:scale-[1.03]"
            >
              <Image src="/apple.png" alt="" width={22} height={22} className="size-5 object-contain" />
              <span className="text-[9px] leading-tight">
                Download on the
                <strong className="block text-xs">App Store</strong>
              </span>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
