import {
  MessageCircleMore,
  UserRound,
} from 'lucide-react';
import Container from '@/components/common/Container';

export default function SupportCustomerUpdates() {
  return (
<section className="bg-[#f4f6f8] py-8 sm:py-12">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-5 h-64 w-64 rounded-full bg-brand-blue/20 ring-[16px] ring-brand-blue/15"
            />
            <div className="relative rounded-[28px] border border-slate-200 bg-[#f9fbfa] p-8 shadow-[0_28px_60px_rgba(15,23,42,0.05)]">
              <div className="relative mx-auto flex w-full max-w-[300px] items-end gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-brand-blue/10 text-slate-900">
                  <UserRound className="h-10 w-10" />
                </div>
                <div className="flex-1 rounded-[28px] border-[3px] border-slate-900 bg-white px-4 py-5">
                  <div className="flex items-center gap-2 text-slate-900">
                    <MessageCircleMore className="h-5 w-5" />
                    <span className="text-sm font-medium">We’re on it</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="text-[clamp(2.2rem,3vw,4rem)] font-black leading-[0.95] tracking-[-0.06em] text-slate-900">
              Keep your
              <span className="mt-2 block">followers happy.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Keeping your customers informed and up to date via status pages can help you avoid
              complaints on social media and protect your brand during any outage.
            </p>
          </div>
        </Container>
      </section>
  );
}
