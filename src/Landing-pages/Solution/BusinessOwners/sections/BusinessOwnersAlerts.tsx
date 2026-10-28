import Container from '@/components/common/Container';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';
import { CHANNELS } from './BusinessOwnersData';

export default function BusinessOwnersAlerts() {
  return (
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
            Ensure the right people get instant notifications through the channels your team already
            uses, so they can start working on a solution quickly.
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
  );
}
