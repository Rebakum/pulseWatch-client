import Link from 'next/link';

import { ENTERPRISE_CTA_HREF, ENTERPRISE_HIGHLIGHTS } from './enterprise.constants';
import { EnterprisePreview } from './EnterprisePreview';

export function Enterprise() {
  return (
    <section id="enterprise" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-12 sm:px-12 lg:py-16">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
            Need more than the free plan?{' '}
            <span className="block bg-brand-gradient bg-clip-text text-transparent">
              Book an Enterprise demo.
            </span>
          </h2>

          <ul className="mt-8 space-y-3">
            {ENTERPRISE_HIGHLIGHTS.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-gradient" />
                {highlight}
              </li>
            ))}
          </ul>

          <Link
            href={ENTERPRISE_CTA_HREF}
            className="mt-10 inline-flex items-center rounded-full border border-brand-blue px-6 py-2.5 text-sm font-medium text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            Book an Enterprise demo
          </Link>
        </div>

        <EnterprisePreview />
      </div>
    </section>
  );
}
