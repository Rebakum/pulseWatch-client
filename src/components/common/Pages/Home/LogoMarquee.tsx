import { createElement } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

interface MarqueeProps extends HTMLAttributes<HTMLElement> {
  direction?: 'left' | 'right';
  scrollamount?: number | string;
  scrolldelay?: number | string;
  pauseonhover?: boolean | string;
  children?: ReactNode;
}

const Marquee = ({ children, ...props }: MarqueeProps) =>
  createElement('marquee', props, children);

interface LogoBadge {
  name: string;
  symbol: string;
}

const ROW_ONE_LOGOS: LogoBadge[] = [
  { name: 'n8n', symbol: '⚡' },
  { name: 'Canva', symbol: '🎨' },
  { name: 'OVHcloud', symbol: '☁️' },
  { name: 'Akamai', symbol: '🌐' },
  { name: 'RMIT University', symbol: '🎓' },
  { name: 'ATLASSIAN', symbol: '🚀' },
  { name: 'GitHub', symbol: '🐙' },
  { name: 'Slack', symbol: '💬' },
];

const ROW_TWO_LOGOS: LogoBadge[] = [
  { name: "MOODY'S", symbol: '📈' },
  { name: 'SIEMENS', symbol: '⚙️' },
  { name: 'intel', symbol: '💻' },
  { name: 'Electronic Arts', symbol: '🎮' },
  { name: 'IBM', symbol: '🖥️' },
  { name: 'adyen', symbol: '💳' },
  { name: 'Stanford University', symbol: '🏛️' },
  { name: 'BBC', symbol: '📺' },
];

const LogoBadgeItem = ({ name, symbol }: LogoBadge) => (
  <li className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-bold tracking-wider text-[var(--muted)] shadow-sm transition-colors hover:text-[var(--foreground)] sm:text-base">
    <span className="text-lg" aria-hidden="true">
      {symbol}
    </span>
    <span>{name}</span>
  </li>
);

export default function LogoMarquee() {
  return (
    <section
      aria-labelledby="trusted-by-title"
      className="border-y border-[var(--border)] bg-[var(--background)] py-10 text-[var(--foreground)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="trusted-by-title"
          className="mb-8 text-center text-xs font-semibold tracking-widest text-[var(--muted)] sm:text-sm"
        >
          TRUSTED BY OVER 3,400+ ENGINEERING TEAMS AND GLOBAL ENTERPRISES
        </h2>

        <div className="relative space-y-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-24" />

          <Marquee
            direction="left"
            scrollamount={4}
            scrolldelay={20}
            pauseonhover="true"
            className="block w-full"
          >
            <ul className="flex w-max items-center gap-4">
              {ROW_ONE_LOGOS.map((logo) => (
                <LogoBadgeItem key={logo.name} name={logo.name} symbol={logo.symbol} />
              ))}
            </ul>
          </Marquee>

          <Marquee
            direction="right"
            scrollamount={4}
            scrolldelay={20}
            pauseonhover="true"
            className="block w-full"
          >
            <ul className="flex w-max items-center gap-4">
              {ROW_TWO_LOGOS.map((logo) => (
                <LogoBadgeItem key={logo.name} name={logo.name} symbol={logo.symbol} />
              ))}
            </ul>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
