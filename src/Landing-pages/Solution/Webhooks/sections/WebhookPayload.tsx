import { Braces } from 'lucide-react';

import Container from '@/components/common/Container';

import DeveloperGradientText from '../../ForDevelopers/sections/DeveloperGradientText';

export default function WebhookPayload() {
  return (
    <section className="bg-[var(--background)] py-12 text-[var(--foreground)] sm:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <span className="grid size-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
            <Braces aria-hidden="true" className="size-5" />
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Structured payloads. <DeveloperGradientText>Useful context.</DeveloperGradientText>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Event data gives your endpoint the information it needs to route and process an incident
            with less manual work.
          </p>
        </div>
        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-[#101827] p-5 text-xs leading-7 text-slate-200 shadow-xl sm:p-7">
          <code>{`{
  "event": "monitor.down",
  "createdAt": "2026-10-28T00:00:00Z",
  "data": {
    "monitorId": "mon_123",
    "name": "Production website",
    "url": "https://example.com",
    "status": "down",
    "responseTime": 0
  }
}`}</code>
        </pre>
      </Container>
    </section>
  );
}
