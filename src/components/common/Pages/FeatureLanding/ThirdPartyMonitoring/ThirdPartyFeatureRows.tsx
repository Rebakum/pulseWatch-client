import Container from '@/components/common/Container';
import {
  IncidentsVisual,
  ProvidersVisual,
  StatusVisual,
} from './ThirdPartyVisuals';

interface ThirdPartyRow {
  visual: 'status' | 'incidents' | 'providers';
  head: string; // white part of the title
  accent: string; // brand-gradient part of the title
  lines: string[]; // each entry = one line block (like the <br /> in the reference)
}

const ROWS: ThirdPartyRow[] = [
  {
    visual: 'status',
    head: 'Your monitors can be up while your product is',
    accent: 'broken.',
    lines: [
      'Your product might use Stripe for checkout, an identity provider for logins, and a CDN for images. When one of those services breaks, your site can break with it while your own monitors stay up.',
      'Third party monitoring tracks those services and finds the one that failed, alerting you through the same channels you already use without counting the incident as downtime for your own monitors.',
    ],
  },
  {
    visual: 'incidents',
    head: 'Find out before the status page',
    accent: 'does.',
    lines: [
      'Providers don’t always post incidents immediately, and some incidents never appear on their status pages. We track user reports alongside official status updates, giving you another signal that something is wrong. In one AWS incident we measured, our alert went out 10 minutes before AWS acknowledged the issue.',
    ],
  },
  {
    visual: 'providers',
    head: 'Why not just subscribe to their status',
    accent: 'pages?',
    lines: [
      'A bookmarked status page doesn’t page you at 3 A.M, and once your product depends on a dozen outside services, that’s a dozen separate pages and subscriptions to keep track of.',
      'Third party monitoring brings them into the same place as your own monitors, so you can see both sides of an outage without checking providers one by one.',
    ],
  },
];

const VISUALS = {
  status: StatusVisual,
  incidents: IncidentsVisual,
  providers: ProvidersVisual,
} as const;

export default function ThirdPartyFeatureRows() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <div className="relative">
          {/* vertical divider (desktop, column-er majhkhane) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[var(--border)] lg:block"
          />

          {ROWS.map((row, index) => {
            const reversed = index % 2 === 1;
            const Visual = VISUALS[row.visual];
            const rowPadY = [
              index > 0 ? 'pt-14 lg:pt-20' : '',
              index < ROWS.length - 1 ? 'pb-14 lg:pb-20' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div
                key={row.visual}
                className={`relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${rowPadY} ${
                  index > 0
                    ? "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[var(--border)] before:content-['']"
                    : ''
                }`}
              >
                <div className={reversed ? 'lg:order-2' : undefined}>
                  <h2 className="max-w-[36rem] text-2xl font-bold leading-snug tracking-tight sm:text-[1.75rem]">
                    {row.head}{' '}
                    <span className="bg-brand-gradient bg-clip-text text-transparent">
                      {row.accent}
                    </span>
                  </h2>

                  <p className="mt-4 max-w-[30rem] text-sm leading-relaxed text-[var(--muted)]">
                    {row.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>

                <div className={reversed ? 'lg:order-1' : undefined}>
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
