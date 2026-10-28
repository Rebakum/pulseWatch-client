import { ArrowUpRight, Check, Users } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function IntegrationsShowcase() {
  return (
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
                <span className="font-semibold text-slate-100">
                  PulseWatch <span className="text-slate-400">| Service status</span>
                </span>
                <span className="rounded-sm bg-brand-blue px-2 py-1 text-[9px] font-semibold text-white">
                  Subscribe
                </span>
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
              Showcase your service uptime with the{' '}
              <DeveloperGradientText>status page.</DeveloperGradientText>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Highlight your service reliability and build trust with your website visitors and
              potential customers.
            </p>
            <Link
              href="/status-pages"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-light underline underline-offset-4 hover:text-white"
            >
              Check the LIVE Status Page Example{' '}
              <ArrowUpRight aria-hidden="true" className="size-4" />
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
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-brand-blue" /> Website monitor alert
                </span>
                <span className="text-slate-400">Now</span>
              </div>
              <p className="mt-3 text-xs font-bold">UptimeRobot</p>
              <p className="mt-1 text-[10px] text-slate-500">Down monitor detected!</p>
              <div className="mt-3 space-y-2 border-t border-slate-200 pt-3">
                {['John Doe', 'Tara A.', 'Jim Reed'].map((person) => (
                  <div
                    key={person}
                    className="flex items-center justify-between text-[10px] text-slate-600"
                  >
                    <span className="flex items-center gap-2">
                      <span className="grid size-5 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                        <Users aria-hidden="true" className="size-3" />
                      </span>
                      {person}
                    </span>
                    <span className="text-brand-blue">Notified</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-1 text-[9px] text-brand-blue">
                <Check aria-hidden="true" className="size-3" /> Team notified
              </div>
            </div>
          </div>
          <div className="max-w-xl lg:order-2">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Add your team members to keep them{' '}
              <DeveloperGradientText>notified.</DeveloperGradientText>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Invite your team to access monitors, receive notifications, and manage incidents.
              Choose the access level that works for each person.
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
  );
}
