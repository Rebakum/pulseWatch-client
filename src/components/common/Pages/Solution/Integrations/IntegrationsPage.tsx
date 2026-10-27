import {
  ArrowUpRight,
  Bell,
  BellRing,
  Check,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Smartphone,
  Star,
  Users,
  Webhook,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../ForDevelopers/DeveloperGradientText';

const PERSONAL_CHANNELS = [
  { title: 'E-mail', Icon: Mail },
  { title: 'SMS', Icon: Smartphone },
  { title: 'Voice call', Icon: Phone },
  { title: 'Email to SMS', Icon: MessageSquare },
  { title: 'Mobile app push', Icon: Bell },
] as const;

const THIRD_PARTY_INTEGRATIONS = [
  { title: 'Slack', Icon: MessageCircle, mark: 'S', tone: 'text-[#36c5f0]' },
  { title: 'Zapier', Icon: Zap, mark: '✳', tone: 'text-[#ff4f00]' },
  { title: 'PagerDuty', Icon: BellRing, mark: 'P', tone: 'text-[#06ac38]' },
  { title: 'Splunk On-Call', Icon: Bell, mark: '>', tone: 'text-[#65a637]' },
  { title: 'Telegram', Icon: MessageCircle, mark: '➤', tone: 'text-[#229ed9]' },
  { title: 'Webhooks', Icon: Webhook, mark: '{}', tone: 'text-brand-blue' },
  { title: 'Discord', Icon: MessageCircle, mark: 'D', tone: 'text-[#5865f2]' },
  { title: 'Mattermost', Icon: MessageSquare, mark: 'M', tone: 'text-[#145dbf]' },
  { title: 'Pushbullet', Icon: Bell, mark: 'P', tone: 'text-[#4ab367]' },
  { title: 'Microsoft Teams', Icon: MessageSquare, mark: 'T', tone: 'text-[#6264a7]' },
  { title: 'Google Chat', Icon: MessageSquare, mark: 'G', tone: 'text-[#34a853]' },
  { title: 'Pushover', Icon: Bell, mark: 'P', tone: 'text-[#2497e3]' },
] as const;

const COMMUNITY_INTEGRATIONS = [
  {
    name: 'PagerTree',
    description: 'Connect uptime monitoring to PagerTree and keep incidents in your on-call flow.',
  },
  {
    name: 'Pipedream',
    description: 'Build and run workflows using monitor events and your existing tools.',
  },
  {
    name: 'Jiralert',
    description: 'Manage on-call schedules and respond to incidents quickly.',
  },
  {
    name: 'Zenduty',
    description: 'Escalate alerts to on-call teams and coordinate incident response.',
  },
] as const;

const INTEGRATION_REVIEWS = [
  {
    name: 'Jen Cook',
    source: 'Trustpilot.com',
    title: 'The alerts come in to my phone as soon...',
    review:
      'The alerts come in to my phone as soon as I have a site outage. I don’t need to wait for anyone else to report issues with my site.',
  },
  {
    name: 'Sander',
    source: 'Trustpilot.com',
    title: 'Uptime Robot never let us down',
    review:
      'Uptime Robot never let us down. It’s super easy to create monitors and be alerted if something is not operating as it should.',
  },
  {
    name: 'Ashley H.',
    source: 'G2.com',
    title: 'Simple and impactful',
    review:
      'It’s very seamless to create any monitor we need and the integrations make it perfect for our team’s workflow.',
  },
] as const;

export default function IntegrationsPage() {
  return (
    <main aria-label="PulseWatch integrations">
      <section className="relative isolate overflow-hidden bg-[#101827] py-20 text-white sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-0 -z-10 size-[34rem] rounded-full bg-brand-blue/15 blur-3xl"
        />
        <Container className="text-center">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Downtime happens.
            <br />
            <DeveloperGradientText>Get notified!</DeveloperGradientText>
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 sm:text-2xl">
            Everyone knows it happens. But it’s important to realize before customers do.
          </p>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#101827] pb-12 text-white sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-12 -z-10 size-[30rem] rounded-full bg-brand-blue/15 blur-3xl"
        />
        <Container>
          <div className="grid items-center gap-8 py-8 sm:gap-12 sm:py-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto grid min-h-[260px] w-full max-w-[500px] place-items-center sm:min-h-[320px]">
              <div
                aria-hidden="true"
                className="absolute size-64 rounded-full bg-brand-blue/20 ring-1 ring-brand-blue/20 sm:size-80"
              />
              <div className="relative z-10 w-[88%] rounded-xl border border-white/10 bg-[#151e30] p-5 shadow-2xl shadow-black/30 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-semibold text-slate-100">PulseWatch <span className="text-slate-400">| Service status</span></span>
                  <span className="rounded-sm bg-brand-blue px-2 py-1 text-[9px] font-semibold text-white">Subscribe</span>
                </div>
                <div className="mt-4 rounded-lg bg-brand-blue/10 p-3 text-xs text-slate-300">
                  <span className="mr-3 font-bold text-brand-blue-light">!</span>
                  All systems are operational
                </div>
                {['Uptime Robot Website', 'Monitoring API'].map((service) => (
                  <div key={service} className="mt-4">
                    <div className="flex justify-between text-[10px] text-slate-300">
                      <span>{service}</span>
                      <span className="text-brand-blue-light">Operational</span>
                    </div>
                    <div className="mt-2 flex gap-0.5" aria-hidden="true">
                      {Array.from({ length: 32 }, (_, index) => (
                        <span
                          key={index}
                          className={`h-3 flex-1 rounded-sm ${index === 23 && service.startsWith('Uptime') ? 'bg-brand-blue-light' : 'bg-brand-blue'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Showcase your service uptime with the <DeveloperGradientText>status page.</DeveloperGradientText>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Highlight your service reliability and build trust with your website visitors and potential customers.
              </p>
              <Link
                href="/status-pages"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-light underline underline-offset-4 hover:text-white"
              >
                Check the LIVE Status Page Example <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid items-center gap-8 py-8 sm:gap-12 sm:py-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto grid min-h-[240px] w-full max-w-[500px] place-items-center lg:order-1">
              <div
                aria-hidden="true"
                className="absolute size-56 rounded-full bg-brand-blue/15 ring-1 ring-brand-blue/20 sm:size-72"
              />
              <div className="relative z-10 w-[72%] max-w-[320px] rounded-xl border border-slate-200 bg-white p-4 text-slate-900 shadow-2xl shadow-black/25">
                <div className="flex items-center justify-between rounded-md bg-slate-100 px-3 py-2 text-[10px] font-semibold">
                  <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-brand-blue" /> Website monitor alert</span>
                  <span className="text-slate-400">Now</span>
                </div>
                <p className="mt-3 text-xs font-bold">UptimeRobot</p>
                <p className="mt-1 text-[10px] text-slate-500">Down monitor detected!</p>
                <div className="mt-3 space-y-2 border-t border-slate-200 pt-3">
                  {['John Doe', 'Tara A.', 'Jim Reed'].map((person) => (
                    <div key={person} className="flex items-center justify-between text-[10px] text-slate-600">
                      <span className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-brand-blue/10 text-brand-blue"><Users className="size-3" /></span>{person}</span>
                      <span className="text-brand-blue">Notified</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1 text-[9px] text-brand-blue"><Check className="size-3" /> Team notified</div>
              </div>
            </div>
            <div className="max-w-xl lg:order-2">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Add your team members to keep them <DeveloperGradientText>notified.</DeveloperGradientText>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Invite your team to access monitors, receive notifications, and manage incidents. Choose the access level that works for each person.
              </p>
              <Link
                href="/incident-management"
                className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-brand-blue-light hover:bg-white/5"
              >
                Explore incident management <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-4xl">
            <DeveloperGradientText>Personal</DeveloperGradientText> notification channels.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PERSONAL_CHANNELS.map(({ title, Icon }) => (
              <article
                key={title}
                className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.07)] transition-transform hover:-translate-y-1"
              >
                <span className="relative grid size-14 place-items-center text-slate-900">
                  <Icon aria-hidden="true" className="size-12 stroke-[1.6]" />
                  <span className="absolute right-0 top-1 size-4 rounded-full bg-brand-blue ring-2 ring-[var(--background)]" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <h2 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
            3<sup className="text-sm">rd</sup> party <DeveloperGradientText>integrations.</DeveloperGradientText>
          </h2>
          <div className="mx-auto mt-7 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {THIRD_PARTY_INTEGRATIONS.map(({ title, Icon, mark, tone }) => (
              <article
                key={title}
                className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-0.5"
              >
                <span className={`relative grid size-8 place-items-center ${tone}`}>
                  <Icon aria-hidden="true" className="size-7 stroke-[2.4]" />
                  <span className="absolute inset-0 grid place-items-center text-xs font-black">{mark}</span>
                </span>
                <h3 className="mt-2 text-[10px] font-semibold">{title}</h3>
              </article>
            ))}
            <Link
              href="/alerts-notifications"
              className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-0.5"
            >
              <span className="text-3xl font-bold text-brand-blue">?</span>
              <span className="mt-1 text-[10px] font-semibold">Need more?</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#101827] py-12 text-white sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl"
        />
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Why users <DeveloperGradientText>trust</DeveloperGradientText> PulseWatch.
          </h2>
          <div className="mt-8 grid items-start gap-4 md:grid-cols-3">
            {INTEGRATION_REVIEWS.map(({ name, source, title, review }) => (
              <article key={name} className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs text-slate-400">{name}</p>
                <div className="mt-2 flex gap-0.5 text-orange-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="size-3 fill-current" />
                  ))}
                </div>
                <h3 className="mt-2 text-sm font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{review}</p>
                <p className="mt-3 text-[10px] text-slate-400">
                  Reviewed on <span className="text-brand-blue-light underline">{source}</span>
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-14 text-center text-[var(--foreground)] sm:py-20">
        <Container>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Get your FREE account now, 50 monitors included!
          </h2>
          <Link
            href="/register"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[image:var(--background-image-brand-gradient)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5"
          >
            Start monitoring in 30 seconds
          </Link>
          <p className="mt-3 text-xs text-[var(--muted)]">No credit card required!</p>
          <p className="mt-6 text-xs text-[var(--muted)]">Available also on:</p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Link
              href="/mobile-app"
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-black px-3 py-2 text-left text-white"
            >
              <span className="text-lg">▶</span>
              <span className="text-[9px] leading-tight">GET IT ON<strong className="block text-xs">Google Play</strong></span>
            </Link>
            <Link
              href="/mobile-app"
              className="inline-flex min-h-10 items-center gap-2 rounded-md bg-black px-3 py-2 text-left text-white"
            >
              <Smartphone aria-hidden="true" className="size-5" />
              <span className="text-[9px] leading-tight">Download on the<strong className="block text-xs">App Store</strong></span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Stay <DeveloperGradientText>notified</DeveloperGradientText> on the go.
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] sm:text-xl">
            Don&apos;t forget to download our mobile app for your Android or iOS.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/mobile-app"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#101827] px-4 py-2 text-left text-white transition-transform hover:scale-[1.03]"
            >
              <span className="grid size-8 place-items-center rounded-md bg-white text-brand-blue">
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </span>
              <span className="text-[10px] leading-tight">
                GET IT ON
                <strong className="block text-sm">Google Play</strong>
              </span>
            </Link>
            <Link
              href="/mobile-app"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#101827] px-4 py-2 text-left text-white transition-transform hover:scale-[1.03]"
            >
              <span className="grid size-8 place-items-center rounded-md bg-white text-[#101827]">
                <Smartphone aria-hidden="true" className="size-5" />
              </span>
              <span className="text-[10px] leading-tight">
                Download on the
                <strong className="block text-sm">App Store</strong>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
        <Container>
          <h2 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
            Built by our <DeveloperGradientText>great community.</DeveloperGradientText>
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMMUNITY_INTEGRATIONS.map(({ name, description }) => (
              <article
                key={name}
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Webhook aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold">{name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{description}</p>
                <Link
                  href="/alerts-notifications"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue underline underline-offset-2"
                >
                  Learn more <ArrowUpRight aria-hidden="true" className="size-3" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/alerts-notifications"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--background-image-brand-gradient)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:-translate-y-0.5"
            >
              Explore integrations <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
