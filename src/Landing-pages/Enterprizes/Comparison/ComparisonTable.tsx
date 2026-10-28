import Container from '@/components/common/Container';
import ShaderButton from '@/components/shader-button/ShaderButton';
import { content } from './Content ';

export default function ComparisonTable({ brandName = 'PulseWatch' }: { brandName?: string }) {
  const { competitors, rows } = content;

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      {/* Background ambient glow (same as Hero) */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-full max-w-7xl -translate-x-1/2 rounded-full bg-brand-gradient opacity-10 blur-[120px]" />

      <Container className="relative">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-brand-gradient bg-clip-text text-transparent">{brandName}</span>{' '}
            {content.title}
            <span className="bg-brand-gradient bg-clip-text text-transparent">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {content.description}
          </p>
        </div>

        {/* Table (scrolls sideways on small screens, feature column stays pinned) */}
        <div className="overflow-x-auto pb-2">
          <table className="w-full min-w-[820px] border-separate border-spacing-0 text-left text-sm">
            <caption className="sr-only">
              Comparison of {brandName} with {competitors.join(' and ')}
            </caption>

            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-10 w-[22%] bg-[var(--background)] px-4 py-4"
                >
                  <span className="sr-only">Feature</span>
                </th>
                <th
                  scope="col"
                  className="w-[26%] rounded-t-2xl bg-brand-gradient px-5 py-4 text-base font-bold text-white"
                >
                  {brandName}
                </th>
                {competitors.map((name) => (
                  <th
                    key={name}
                    scope="col"
                    className="w-[26%] border-b border-[var(--border)] px-5 py-4 text-base font-semibold text-[var(--muted)]"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => {
                const last = i === rows.length - 1;
                const line = last ? '' : 'border-b border-[var(--border)]';

                return (
                  <tr key={row.feature}>
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 bg-[var(--background)] px-4 py-4 align-top font-semibold ${line}`}
                    >
                      {row.feature}
                    </th>

                    {/* Highlighted brand column */}
                    <td
                      className={`border-x border-[var(--color-brand-blue)]/30 bg-[var(--color-brand-blue)]/10 px-5 py-4 align-top font-medium ${line} ${
                        last ? 'rounded-b-2xl border-b border-[var(--color-brand-blue)]/30' : ''
                      }`}
                    >
                      {row.values[0]}
                    </td>

                    {row.values.slice(1).map((value, j) => (
                      <td key={j} className={`px-5 py-4 align-top text-[var(--muted)] ${line}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footnote + CTA */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-[var(--muted)]">
          {content.footnote}
        </p>
        <div className="mt-8 flex justify-center">
          <ShaderButton className="px-7 py-3.5 text-sm">{content.cta}</ShaderButton>
        </div>
      </Container>
    </section>
  );
}
