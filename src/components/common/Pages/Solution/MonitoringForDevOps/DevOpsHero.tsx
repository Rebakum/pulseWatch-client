import { Activity, Check, Cloud, GitBranch, Server, ShieldCheck } from 'lucide-react';

import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';

const PIPELINE_STEPS = ['Build', 'Test', 'Deploy'];
const SERVICE_CHECKS = ['API', 'Web app', 'Workers', 'Database'];

export default function DevOpsHero() {
  return (
    <section
      aria-labelledby="devops-monitoring-title"
      className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      <Container className="grid min-h-[620px] grid-cols-1 items-center gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-12">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue">
            Monitoring for DevOps
          </p>
          <h1
            id="devops-monitoring-title"
            className="max-w-[620px] text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
          >
            Ship with confidence.{' '}
            <span className="text-brand-blue">Know when services go down.</span>
          </h1>

          <p className="mt-8 max-w-[560px] text-lg leading-[1.65] text-[var(--muted)] sm:text-[1.35rem]">
            Monitor production services, automate checks in your workflow, and alert the right
            people before an incident impacts customers.
          </p>

          <p className="mt-10 text-lg leading-relaxed text-[var(--foreground)] sm:text-[1.35rem]">
            Start with <strong>50 free monitors.</strong>
          </p>

          <ShaderButton
            href="/register"
            className="!mt-8 !min-h-[60px] !min-w-[276px] !px-8 !py-4 !text-base !font-semibold"
          >
            Start monitoring for free
          </ShaderButton>
        </div>

        <div
          aria-label="DevOps dashboard illustration showing a healthy deployment pipeline and monitored services"
          role="img"
          className="relative mx-auto flex min-h-[360px] w-full max-w-[500px] items-center justify-center sm:min-h-[420px] lg:min-h-[460px]"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20"
          />

          <div className="relative z-10 w-full">
            <div className="mb-6 ml-[8%] inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 text-lg font-bold text-brand-blue shadow-lg sm:text-xl">
              <Activity aria-hidden="true" className="size-5" />
              All systems operational
            </div>

            <div className="ml-auto w-[94%] rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <GitBranch aria-hidden="true" className="size-4 text-brand-blue" />
                  Deployment pipeline
                </div>
                <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue">
                  Main · passed
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {PIPELINE_STEPS.map((step) => (
                  <div
                    key={step}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] px-2 py-2.5 text-xs font-medium"
                  >
                    <Check aria-hidden="true" className="size-3.5 text-brand-blue" />
                    {step}
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                {SERVICE_CHECKS.map((service, index) => {
                  const Icon = index === 3 ? Server : index === 2 ? Cloud : ShieldCheck;

                  return (
                    <div
                      key={service}
                      className="flex items-center gap-2.5 rounded-lg bg-[var(--background)] px-3 py-2.5"
                    >
                      <Icon aria-hidden="true" className="size-4 text-[var(--muted)]" />
                      <span className="text-xs font-medium">{service}</span>
                      <span className="ml-auto text-[10px] text-[var(--muted)]">
                        {index === 0 ? '32 ms' : index === 1 ? '48 ms' : '41 ms'}
                      </span>
                      <span className="size-2 rounded-full bg-brand-blue" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
