import Container from '@/components/common/Container';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';
import { supportChannels } from './SupportData';

export default function SupportAlertChannels() {
  return (
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
  );
}
