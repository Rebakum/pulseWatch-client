import { Check, Globe2, Send } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/DeveloperGradientText';

export default function WebhookDelivery() {
  return (
    <section className="bg-[var(--surface)] py-12 text-[var(--foreground)] sm:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm lg:order-1">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <span className="text-xs font-semibold">Recent delivery</span><span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue">200 OK</span>
          </div>
          <div className="mt-4 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue"><Send aria-hidden="true" className="size-4" /></span><div><p className="text-xs font-semibold">monitor.recovered</p><p className="mt-1 text-[10px] text-[var(--muted)]">https://your-service.com/hooks/uptime</p></div></div>
          <div className="mt-4 flex items-center gap-2 text-xs text-[var(--muted)]"><Check aria-hidden="true" className="size-4 text-brand-blue" />Payload accepted by endpoint</div>
        </div>
        <div className="order-1 lg:order-2"><Globe2 aria-hidden="true" className="size-8 text-brand-blue" /><h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Deliver events to <DeveloperGradientText>your endpoint.</DeveloperGradientText></h2><p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">Connect an HTTPS endpoint you control and let your application decide what happens next.</p></div>
      </Container>
    </section>
  );
}
