import {
  Check,
  MonitorUp,
} from 'lucide-react';
import Container from '@/components/common/Container';

export default function SupportResponseTime() {
  return (
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
  );
}
