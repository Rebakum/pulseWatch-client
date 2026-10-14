import { logos } from './Logos';

export default function TrustedBy({ title = 'Logo strip preview' }: { title?: string }) {
  return (
    <section className="border-y border-[var(--border)]/70 bg-[var(--surface)]/40 py-10 text-[var(--foreground)] md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {title}
        </p>

        {logos.length > 0 ? (
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12">
            {logos.map((logo) => (
              <li key={logo.name}>
                <div className="inline-flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)]/70 px-4 py-3 shadow-sm">
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-extrabold ${logo.tone}`}
                  >
                    {logo.mark}
                  </span>
                  <span className="text-sm font-bold tracking-tight text-[var(--foreground)]">
                    {logo.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-sm text-[var(--muted)]">
            Enterprise uptime monitoring built for teams that can&apos;t afford downtime.
          </p>
        )}
      </div>
    </section>
  );
}
