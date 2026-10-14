import { Check } from 'lucide-react';
import { content } from './Content';

export default function EnterpriseReady() {
  return (
    <section className="relative overflow-hidden dark bg-[var(--background)] py-10 text-[var(--foreground)] md:py-16">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: heading + checklist */}
          <div>
            <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {content.titleStart}
              <span className="bg-brand-gradient box-decoration-clone bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
            </h2>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-[var(--foreground)]/85 sm:text-base">
              {content.description}
            </p>

            <ul>
              {content.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-[var(--border)] py-3 text-sm font-medium last:border-b-0"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stats */}
          <dl className="flex flex-col justify-center gap-10">
            {content.stats.map((stat) => (
              <div key={stat.value}>
                <dt className="bg-brand-gradient bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-[var(--muted)]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
