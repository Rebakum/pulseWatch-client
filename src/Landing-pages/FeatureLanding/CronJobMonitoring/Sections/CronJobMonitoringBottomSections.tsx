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
import Link from 'next/link';

const TESTIMONIALS: TestimonialsSectionData = {
  title: [
    { text: 'What teams value about cron job monitoring' },
    { text: '.', tone: 'brand' },
  ],
  items: [
    {
      name: 'Data engineering team',
      role: 'Analytics and reporting',
      headline: 'We know when a pipeline misses its schedule',
      body: 'Heartbeat checks make our scheduled data jobs visible. When a check-in is late, the team can investigate before the missing data affects our reports.',
      source: 'PulseWatch',
    },
    {
      name: 'Platform operations team',
      role: 'Infrastructure',
      headline: 'A practical check for our routine backups',
      body: 'We use a heartbeat at the end of our backup task, so a failed run does not go unnoticed just because the server itself is still online.',
      source: 'PulseWatch',
    },
    {
      name: 'Application team',
      role: 'Engineering',
      headline: 'Useful visibility into scheduled work',
      body: 'Schedules, recent check-ins, and missed-run alerts give us a quick view of which recurring tasks need attention.',
      source: 'PulseWatch',
    },
  ],
};

const FAQ: FaqSectionData = {
  title: 'Frequently asked questions.',
  items: [
    {
      question: 'What is cron job monitoring?',
      answer:
        'Cron job monitoring checks that scheduled tasks report a heartbeat when they run. If a heartbeat does not arrive within the expected schedule and grace period, the monitor can alert your team.',
    },
    {
      question: 'How does heartbeat monitoring work?',
      answer:
        'Create a monitor to get a unique heartbeat URL, then call that URL from your job after the task completes successfully. PulseWatch records each check-in and watches for the next expected run.',
    },
    {
      question: 'What happens if a cron job misses a run?',
      answer:
        'If a heartbeat is not received within the configured schedule and grace period, the monitor marks the run as missed and can send notifications through your configured channels.',
    },
    {
      question: 'What types of scheduled jobs can I monitor?',
      answer:
        'You can monitor any scheduled task that can make an HTTP request, including backups, ETL pipelines, reports, data synchronization, cleanup scripts, and recurring application tasks.',
    },
    {
      question: 'How do I add a heartbeat to my cron job?',
      answer:
        'Add a request to the monitor’s unique heartbeat URL at the end of the job’s successful execution. Configure your command so the request runs only after the work completes successfully.',
    },
    {
      question: 'What is a grace period?',
      answer:
        'A grace period is extra time after the expected run before a missing heartbeat triggers an alert. It helps account for normal job runtime variation or temporary delays.',
    },
    {
      question: 'Can I monitor jobs that run at different intervals?',
      answer:
        'Yes. Configure each monitor for its own expected schedule and grace period, whether the task runs every few minutes, hourly, daily, or weekly.',
    },
    {
      question: 'Can I receive alerts when a job misses a heartbeat?',
      answer:
        'Yes. Configure the available notification channels for your monitor so the right people can respond when an expected check-in is missed.',
    },
  ],
};

const ARTICLES: ArticleCardsSectionData = {
  title: 'Relevant articles.',
  items: [
    {
      icon: 'clock',
      title: 'Best Cron Job Monitoring Tools',
      description:
        'Learn how cron monitoring works and compare tools for tracking scheduled tasks and missed runs.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'ethernet',
      title: 'How to Monitor Background Jobs with Heartbeats',
      description:
        'A practical guide to adding check-ins to scripts, workers, backups, and recurring data jobs.',
      cta: { label: 'Read more' },
    },
    {
      icon: 'target',
      title: 'Why Scheduled Jobs Fail Silently',
      description:
        'Explore common causes of missed runs and ways to get notified before a task failure impacts users.',
      cta: { label: 'Read more' },
    },
  ],
};

export function CronJobMonitoringTestimonials() {
  return <Testimonials data={TESTIMONIALS} />;
}

export function CronJobMonitoringUseCases() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-light">
          Use cases
        </p>
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Get more confidence from the jobs that run in the background.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Keep your important scheduled work visible and give the team clear signals when a run
            did not finish as expected.
          </p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[
            'Catch missing backup and database maintenance runs',
            'Verify ETL and data sync jobs check in as expected',
            'Get ahead of late reports, billing, and cleanup tasks',
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
              See when an expected heartbeat is missing, not after someone notices the result.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Monitor the check-in, get notified, and investigate while there is still time to
              rerun the task.
            </p>
            <Link href="/register" className="outline-btn mt-6">
              Start monitoring cron jobs
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="hidden items-center border-l border-[var(--border)] p-8 md:flex">
            <div className="w-full rounded-xl border border-white/10 bg-black/[0.12] p-4">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <span className="text-[11px] font-semibold">Job execution history</span>
                <span className="text-[9px] text-[var(--muted)]">Last 24 hours</span>
              </div>
              {[
                ['02:00', 'Database backup', 'Check-in received'],
                ['03:15', 'Data synchronization', 'Check-in received'],
                ['04:00', 'Usage report', 'Awaiting next run'],
              ].map(([time, job, status]) => (
                <div
                  key={job}
                  className="grid grid-cols-[48px_1fr_auto] items-center gap-2 border-b border-[var(--border)] py-3 last:border-0"
                >
                  <span className="text-[9px] text-[var(--muted)]">{time}</span>
                  <span className="text-[10px] font-medium">{job}</span>
                  <span className="text-[9px] text-brand-blue-light">{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CronJobMonitoringFaq() {
  return <FaqSection data={FAQ} />;
}

export function CronJobMonitoringArticles() {
  return <ArticleCards data={ARTICLES} />;
}

export function CronJobMonitoringFreeAccountCta() {
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
          <p className="text-xs font-semibold">Heartbeat monitors</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {['Database backup', 'Daily data sync', 'Weekly reports'].map((job) => (
              <div
                key={job}
                className="rounded-lg border border-white/[0.08] bg-black/[0.12] px-3 py-2 text-[10px] text-[var(--muted)]"
              >
                {job}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
