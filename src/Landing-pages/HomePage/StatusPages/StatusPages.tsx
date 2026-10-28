import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { StatusPagePreview } from './StatusPagePreview';
import { STATUS_PAGE_FEATURES } from './statusPages.constants';

export function StatusPages() {
  return (
    <section
      id="status-pages"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Keep your users informed with a{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              public status page.
            </span>
          </h2>

          <p className="mt-5 max-w-lg leading-relaxed text-[var(--muted)]">
            Share live uptime, active incidents and maintenance updates on a page that carries your
            own branding. Your users get answers without opening a support ticket.
          </p>

          <ul className="mt-8 space-y-4">
            {STATUS_PAGE_FEATURES.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#features"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue px-5 py-2.5 text-sm font-medium text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-brand-blue"
            >
              Create your status page
            </Link>
          </div>
        </div>

        <StatusPagePreview />
      </div>
    </section>
  );
}
