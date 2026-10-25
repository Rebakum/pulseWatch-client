import Container from '@/components/common/Container';
import { ChannelsVisual, KeywordFormVisual, WatchdogVisual } from './KeywordVisuals';

interface KeywordRow {
  visual: 'form' | 'watchdog' | 'channels';
  head: string; // foreground part of the title
  accent: string; // brand-gradient part of the title
  lines: string[]; // each entry = one line block
}

const ROWS: KeywordRow[] = [
  {
    visual: 'form',
    head: 'Monitor the presence or absence of any word or',
    accent: 'phrase.',
    lines: [
      'Set up an unlimited number of monitors based on whether the keyword is or is not included in the page HTML code.',
    ],
  },
  {
    visual: 'watchdog',
    head: 'A watchdog for any',
    accent: 'website.',
    lines: [
      "Is the product you want to buy out of stock and the shop doesn't have a watchdog? Just set up a keyword monitor!",
    ],
  },
  {
    visual: 'channels',
    head: 'Choose your preferred type of',
    accent: 'notifications.',
    lines: [
      'Get instant alerts via email, SMS, voice call or through one of many integrations (such as Slack, Zapier, Splunk, etc.)',
    ],
  },
];

const VISUALS = {
  form: KeywordFormVisual,
  watchdog: WatchdogVisual,
  channels: ChannelsVisual,
} as const;

export default function KeywordFeatureRows() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <div className="relative">
          {/* vertical divider (desktop, middle of the columns) */}
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
