import {
  Activity,
  Check,
  ChevronDown,
  ChevronRight,
  Globe,
  Info,
  Mail,
  MessageCircleMore,
  MessageSquareText,
  MonitorUp,
  Phone,
  Play,
  ShieldCheck,
  Smartphone,
  Star,
  TimerReset,
  UserRound,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

import DeveloperGradientText from '../ForDevelopers/DeveloperGradientText';

const statusRows = [
  { label: 'UptimeRobot', percent: '99.98%' },
  { label: 'Monitoring API', percent: '100.00%' },
  { label: 'Support App', percent: '99.95%' },
];

const statusBenefitCards = [
  {
    icon: Activity,
    title: 'Enhanced customer satisfaction',
    description: 'Transparent communication and quick updates reduce frustration and build trust.',
  },
  {
    icon: Info,
    title: 'Inform users in advance',
    description:
      'Share announcements about upcoming maintenance or outages before they turn into support tickets.',
  },
  {
    icon: Users,
    title: 'Advanced team collaboration',
    description:
      'Improve communication between support, engineering, and customer success teams with shared status visibility.',
  },
];

const monitoredTiles = [
  { icon: MonitorUp, title: 'Website monitoring', action: 'Learn more' },
  { icon: ShieldCheck, title: 'SSL monitoring', action: 'Learn more' },
  { icon: TimerReset, title: 'Domain expiry monitoring', action: 'Learn more' },
  { icon: Zap, title: 'Key monitoring', action: 'Learn more' },
];

const supportChannels = [
  { name: 'Email', Icon: Mail },
  { name: 'SMS', Icon: Smartphone },
  { name: 'Voice call', Icon: Phone },
  { name: 'Slack', Icon: MessageSquareText },
  { name: 'Discord', Icon: MessageCircleMore },
  { name: 'PagerDuty', Icon: Zap },
];

const customerReviews = [
  {
    name: 'Lee E., Director of Information Technology',
    text: 'The public status page has been a huge win for us. It keeps customers informed without overwhelming our support team, and the setup was fast and simple.',
  },
  {
    name: 'Dean C., Senior Software Engineer',
    text: 'Great experience so far. We can announce incidents and share updates with customers without having to answer repetitive support questions.',
  },
  {
    name: 'Roberto B., Executive Vice President',
    text: 'Simple and reliable. Our customers trust the page for real-time updates, and it keeps our team focused on resolving issues instead of answering “is it down?” emails.',
  },
];

const faqItems = [
  {
    question: 'How does uptime monitoring by UptimeRobot work?',
    answer:
      'We monitor your website or API from multiple locations and trigger alerts when a check fails or a service becomes unavailable. You can tune checks, error thresholds, and alert routing to fit your infrastructure.',
    open: true,
  },
  {
    question: 'How can users subscribe to live updates from the status page?',
    answer:
      'Subscribers can opt in to email notifications, and you can tailor messages to inform customers whenever there is an incident, maintenance window, or recovery notice.',
  },
  {
    question: 'Can I get uptime monthly reports to my email?',
    answer:
      'Yes. You can configure email reports and automated summaries so stakeholders keep receiving concise updates without having to check the dashboard manually.',
  },
  {
    question: 'Can I use status pages and UptimeRobot for improved collaboration?',
    answer:
      'Absolutely. Shared incidents and public updates give support, engineering, and customer teams a single source of truth during outages and maintenance windows.',
  },
];

function StatusCard() {
  return (
    <div className="relative mx-auto max-w-[520px] rounded-[22px] border border-slate-200 bg-[#f7f9fb] p-4 shadow-[0_30px_60px_rgba(15,23,42,0.20)]">
      <div className="flex items-center justify-between gap-3 pb-3">
        <div className="flex items-center gap-2 text-[0.7rem] font-medium text-slate-500">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-blue" />
          Your website is down!
        </div>
        <button className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[0.65rem] font-semibold text-slate-700 shadow-sm">
          Subscribe
        </button>
      </div>

      <div className="space-y-3 rounded-[18px] border border-slate-200 bg-white/80 p-3 shadow-inner shadow-slate-200/50">
        {statusRows.map((row, index) => (
          <div key={row.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-[0.65rem] font-medium text-slate-700">
              <span>{row.label}</span>
              <span>{row.percent}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-[image:var(--background-image-brand-gradient)]"
                style={{ width: index === 0 ? '98%' : index === 1 ? '100%' : '94%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <main className="bg-[#f4f6f8] text-slate-900">
      <section className="relative overflow-hidden bg-[#0f172a] text-white">
        <div className="absolute left-[-6rem] top-[-4rem] h-[18rem] w-[18rem] rounded-full bg-brand-blue/20 blur-3xl" />
        <Container className="relative py-14 sm:py-18 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="max-w-xl">
              <h1 className="text-[clamp(2.8rem,4vw,4rem)] font-black leading-[0.94] tracking-[-0.06em] text-white">
                Cut down the
                <span className="mt-2 block">customer tickets</span>
                <DeveloperGradientText className="mt-2 block">
                  with uptime monitoring.
                </DeveloperGradientText>
              </h1>

              <p className="mt-6 max-w-md text-[1.05rem] leading-8 text-slate-300">
                Communicate incidents and planned maintenance via status pages to ease the load on
                your agents.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <ShaderButton className="px-6 py-3 text-sm font-semibold">
                  Start in 30 seconds
                </ShaderButton>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10">
                  No credit card required
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 bottom-[-18px] h-16 rounded-full bg-[#0d233d]/80 blur-2xl" />
              <StatusCard />
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-slate-300">
            Currently, we keep 2,500+ monitoring more than 3.4M+ users and companies.
          </p>
        </Container>
      </section>

      <section className="bg-[#f4f6f8] py-16 sm:py-20">
        <Container>
          <h2 className="text-center text-[clamp(2.1rem,3vw,3.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
            How can status page benefit <DeveloperGradientText>support?</DeveloperGradientText>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {statusBenefitCards.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-slate-200 bg-[#f8fafb] p-5 shadow-[0_18px_25px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-[1.12rem] font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f6f8] pb-16 sm:pb-20">
        <Container>
          <h2 className="text-center text-[clamp(2.2rem,3vw,3.4rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
            All you really care about{' '}
            <DeveloperGradientText>monitored in one place.</DeveloperGradientText>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {monitoredTiles.map(({ icon: Icon, title, action }) => (
              <article
                key={title}
                className="rounded-[1.4rem] border border-slate-200 bg-[#f8fafb] p-6 shadow-[0_18px_25px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[1.1rem] font-semibold text-slate-900">{title}</h3>
                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  {action}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-slate-300 pt-10">
            <h2 className="text-center text-[clamp(2rem,3vw,3rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
              Explore more status page <DeveloperGradientText>features.</DeveloperGradientText>
            </h2>

            <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
              {[
                'Change the look and density of your status page or use a dark theme.',
                'Create a CNAME DNS record to use your own domain name.',
                'Add your logo with a link to your homepage or any other website.',
                'Set password',
                'Modify the colors',
                'Adjust details',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-transparent">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[0.95rem] leading-7 text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <ShaderButton className="px-6 py-3 text-sm font-semibold">
                Create FREE Status Page
              </ShaderButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f6f8] py-8 sm:py-12">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-5 h-80 w-80 rounded-full bg-brand-blue/20 ring-[15px] ring-brand-blue/15 sm:h-[23rem] sm:w-[23rem] lg:h-[26rem] lg:w-[26rem]"
            />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#f8fafb] p-6 shadow-[0_28px_60px_rgba(15,23,42,0.06)]">
              <div className="rounded-[18px] bg-[#eef4fa] p-5">
                <div className="mb-4 flex items-center justify-between text-[0.7rem] font-medium text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-brand-blue/10 text-brand-blue">
                      <MonitorUp className="h-2.5 w-2.5" />
                    </span>
                    UptimeRobot
                  </span>
                  <span className="rounded-full bg-brand-blue/10 px-2 py-1 text-[0.63rem] font-semibold text-brand-blue">
                    99.96%
                  </span>
                </div>

                <div className="space-y-3">
                  {['Website status', 'Monitoring API', 'Support App'].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center justify-between text-[0.7rem] text-slate-600">
                          <span>{item}</span>
                          <span>{index === 0 ? '100%' : '99.98%'}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-slate-200">
                          <div
                            className="h-full rounded-full bg-[image:var(--background-image-brand-gradient)]"
                            style={{ width: index === 0 ? '100%' : '96%' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="text-[clamp(2.2rem,3vw,4rem)] font-black leading-[0.95] tracking-[-0.06em] text-slate-900">
              Improve support
              <span className="mt-2 block">response time.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Enhance efficiency by displaying real-time incident status, uptime, and production
              health in one place so support teams can resolve issues faster and give customers
              accurate updates.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f6f8] py-8 sm:py-12">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="max-w-xl lg:order-1">
            <h2 className="text-[clamp(2.2rem,3vw,4rem)] font-black leading-[0.95] tracking-[-0.06em] text-slate-900">
              Keep positive
              <span className="mt-2 block">customer reviews.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Informing your customers with live updates on your custom status page builds trust,
              reduces frustration, and keeps your reputation strong when incidents happen.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:order-2">
            <div
              aria-hidden="true"
              className="absolute -right-8 top-6 h-72 w-72 rounded-full bg-brand-blue/20 ring-[15px] ring-brand-blue/15 sm:h-[20rem] sm:w-[20rem]"
            />
            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-[#1a2b3c] p-8 shadow-[0_28px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white/10 text-white">
                    <UserRound className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
                      Customer
                    </div>
                    <div className="text-base font-semibold text-white">Support review</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#f9d56f]">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f3f6f8] p-4">
                <div className="mb-3 h-3 w-24 rounded-full bg-slate-200" />
                <div className="space-y-2.5">
                  <div className="h-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-11/12 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-4/5 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f6f8] py-8 sm:py-12">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-5 h-64 w-64 rounded-full bg-brand-blue/20 ring-[16px] ring-brand-blue/15"
            />
            <div className="relative rounded-[28px] border border-slate-200 bg-[#f9fbfa] p-8 shadow-[0_28px_60px_rgba(15,23,42,0.05)]">
              <div className="relative mx-auto flex w-full max-w-[300px] items-end gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-brand-blue/10 text-slate-900">
                  <UserRound className="h-10 w-10" />
                </div>
                <div className="flex-1 rounded-[28px] border-[3px] border-slate-900 bg-white px-4 py-5">
                  <div className="flex items-center gap-2 text-slate-900">
                    <MessageCircleMore className="h-5 w-5" />
                    <span className="text-sm font-medium">We’re on it</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="text-[clamp(2.2rem,3vw,4rem)] font-black leading-[0.95] tracking-[-0.06em] text-slate-900">
              Keep your
              <span className="mt-2 block">followers happy.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Keeping your customers informed and up to date via status pages can help you avoid
              complaints on social media and protect your brand during any outage.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-brand-blue/20 blur-3xl"
        />
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-6">
            {supportChannels.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex min-h-[112px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition-colors hover:border-brand-blue/40 hover:bg-white/[0.07]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-sky-50 text-brand-blue">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-xs font-semibold text-slate-200 sm:text-sm">{name}</span>
              </div>
            ))}
          </div>

          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Send alerts to <DeveloperGradientText>everyone.</DeveloperGradientText>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
              Get notified immediately when there&apos;s something wrong before it affects your
              customers. You can use up to 16 notification channels for it.
            </p>

            <Link
              href="/alerts-notifications"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[image:var(--background-image-brand-gradient)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5"
            >
              Show all integrations
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#0f172a] px-5 pb-16 pt-2 text-white md:px-8 lg:px-10 lg:pb-20">
        <Container>
          <h2 className="text-center text-[clamp(2.1rem,3vw,3.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
            What users love about <DeveloperGradientText>UptimeRobot.</DeveloperGradientText>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {customerReviews.map(({ name, text }) => (
              <article
                key={name}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-1 text-[#ffd166]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${name}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-slate-200">{text}</p>
                <div className="mt-5 text-sm font-semibold text-slate-100">{name}</div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0f172a] px-5 pb-20 pt-2 text-white md:px-8 lg:px-10">
        <Container className="rounded-[1.5rem] border border-white/10 bg-[#101d31] p-6 shadow-[0_28px_60px_rgba(2,8,23,0.35)]">
          <h2 className="text-center text-[clamp(2.1rem,3vw,3.2rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
            Frequently asked <DeveloperGradientText>questions.</DeveloperGradientText>
          </h2>

          <div className="mt-8 space-y-4">
            {faqItems.map(({ question, answer, open }) => (
              <details
                key={question}
                open={open}
                className="group rounded-xl border border-white/10 bg-white/3 p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                  <span>{question}</span>
                  <span className="text-brand-blue group-open:hidden">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                  <span className="hidden text-brand-blue group-open:inline">
                    <ChevronRight className="h-5 w-5 rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f6f8] px-5 py-16 md:px-8 lg:px-10">
        <Container className="max-w-4xl text-center">
          <h2 className="text-[clamp(2.2rem,3vw,3.8rem)] font-black leading-[0.96] tracking-[-0.06em] text-slate-900">
            Get your <DeveloperGradientText>FREE</DeveloperGradientText> account now, 50 monitors
            included!
          </h2>

          <ShaderButton className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,121,193,0.35)]">
            Start monitoring in 30 seconds
          </ShaderButton>

          <p className="mt-4 text-sm text-slate-700">No credit card required!</p>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#101827] px-5 py-3 text-sm font-semibold text-white shadow-lg">
              <Globe className="h-4 w-4" />
              Google Play
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#101827] px-5 py-3 text-sm font-semibold text-white shadow-lg">
              <Play className="h-4 w-4" />
              App Store
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
