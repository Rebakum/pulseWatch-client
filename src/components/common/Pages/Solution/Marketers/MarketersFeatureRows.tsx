import { ArrowDownToLine, Check, Globe2, Search, ShieldCheck, Sparkles } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../ForDevelopers/DeveloperGradientText';

const ROWS = [
  {
    title: 'Maintain your SEO ranking.',
    accent: 'SEO',
    description:
      'Avoid search engine penalties with uptime monitoring by ensuring consistent accessibility for your landing pages.',
    visual: 'seo',
  },
  {
    title: 'Set up and sit back.',
    accent: 'sit back',
    description:
      'Start monitoring your landing pages in just a few clicks and get alerted immediately if anything goes wrong.',
    visual: 'setup',
  },
] as const;

function SearchResultMockup() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-64 rounded-full bg-brand-blue/25 ring-1 ring-brand-blue/15 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 w-[88%] max-w-[480px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="flex items-center gap-2 border-b border-[var(--border)] pb-4">
          <Search aria-hidden="true" className="size-4 text-brand-blue" />
          <span className="h-2 flex-1 rounded-full bg-[var(--border)]" />
          <span className="rounded-full bg-brand-blue/10 px-2 py-1 text-[9px] font-semibold text-brand-blue">
            Live
          </span>
        </div>
        <div className="mt-5">
          <p className="text-sm font-semibold text-brand-blue">yourbrand.com/summer-sale</p>
          <p className="mt-2 text-base font-semibold leading-snug">
            Summer offers — shop the latest collection
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
            Discover seasonal offers and new arrivals. Shop now with fast, secure checkout.
          </p>
        </div>
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-brand-blue/5 px-3 py-2.5 text-xs font-medium">
          <ShieldCheck aria-hidden="true" className="size-4 text-brand-blue" />
          <span>Page check passed</span>
          <span className="ml-auto text-[10px] text-[var(--muted)]">42 ms</span>
        </div>
      </div>
    </div>
  );
}

function SetupMonitorMockup() {
  return (
    <div className="relative grid min-h-[280px] place-items-center sm:min-h-[340px]">
      <div
        aria-hidden="true"
        className="absolute size-64 rounded-full bg-brand-blue/25 ring-1 ring-brand-blue/15 sm:size-80 lg:size-96"
      />
      <div className="relative z-10 w-[88%] max-w-[480px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Globe2 aria-hidden="true" className="size-4 text-brand-blue" />
            Create a monitor
          </div>
          <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[9px] font-semibold text-brand-blue">
            Website
          </span>
        </div>
        <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-[10px] font-semibold">Website URL</p>
          <p className="mt-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs text-[var(--muted)]">
            https://yourbrand.com/campaign
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
          <Sparkles aria-hidden="true" className="size-3.5" />
          Create monitor
          <ArrowDownToLine aria-hidden="true" className="size-3.5 rotate-[-90deg]" />
        </div>
      </div>
    </div>
  );
}

export default function MarketersFeatureRows() {
  return (
    <section className="bg-[var(--background)] py-10 text-[var(--foreground)] sm:py-16">
      <Container>
        <div className="divide-y divide-[var(--border)]">
          {ROWS.map((row, index) => {
            const visualFirst = index === 0;
            const accentIndex = row.title.indexOf(row.accent);
            const Visual = row.visual === 'seo' ? SearchResultMockup : SetupMonitorMockup;

            return (
              <article
                key={row.visual}
                className="grid items-center gap-6 py-8 first:pt-0 last:pb-0 sm:gap-10 sm:py-12 lg:grid-cols-2 lg:gap-14"
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
                  {index === 1 ? (
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
  );
}
