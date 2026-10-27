import {
  Star,
  UserRound,
} from 'lucide-react';
import Container from '@/components/common/Container';

export default function SupportCustomerReviews() {
  return (
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
  );
}
