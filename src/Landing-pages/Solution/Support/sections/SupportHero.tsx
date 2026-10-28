import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';
import { statusRows } from './SupportData';

export default function SupportHero() {
  return (
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
  );
}

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
