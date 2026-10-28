import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { MousePointer2 } from 'lucide-react';
import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function BusinessOwnersHero() {
  return (
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
              Ensure smooth operations and avoid potential loss from website downtime and other
              incidents.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ShaderButton href="/register">Start in 30 seconds</ShaderButton>
              <span className="text-xs text-slate-300">No credit card required</span>
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
  );
}
