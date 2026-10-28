import Link from 'next/link';

import { GetStartedPreview } from './GetStartedPreview';
import { GET_STARTED_FEATURES } from './getStarted.constants';

export function GetStarted() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 lg:p-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <GetStartedPreview />

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Set up your first monitor in minutes.{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                No installs needed.
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-relaxed text-[var(--muted)]">
              Add any website, API or server, choose a check interval and an alert contact, and
              PulseWatch starts checking right away. Everything runs in the cloud, so nothing stays
              on your machine.
            </p>

            <ul className="mt-8 space-y-4">
              {GET_STARTED_FEATURES.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <Link
              href="/register"
              className="mt-10 inline-flex items-center rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Start monitoring free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
