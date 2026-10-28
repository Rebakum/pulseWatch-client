export type MonitorTier = {
  monitors: number;
  label: string;
  suiteAnnual: number;
  pulseAnnual: number;
};

export type IntervalOption = {
  label: string;
  suite: number;
  pulse: number;
};

export type RegionOption = {
  label: string;
  suite: number;
  pulse: number;
};

export const DEFAULT_TIER_INDEX = 2;
export const DEFAULT_INTERVAL_INDEX = 0;
export const DEFAULT_REGION_INDEX = 1;

export const MONITOR_TIERS: MonitorTier[] = [
  { monitors: 25, label: '25', suiteAnnual: 450, pulseAnnual: 216 },
  { monitors: 50, label: '50', suiteAnnual: 700, pulseAnnual: 312 },
  { monitors: 100, label: '100', suiteAnnual: 1050, pulseAnnual: 420 },
  { monitors: 200, label: '200', suiteAnnual: 1800, pulseAnnual: 780 },
  { monitors: 500, label: '500', suiteAnnual: 3600, pulseAnnual: 1560 },
  { monitors: 1000, label: '1000+', suiteAnnual: 6300, pulseAnnual: 2760 },
];

export const CHECK_INTERVALS: IntervalOption[] = [
  { label: 'Every 15 seconds', suite: 1.6, pulse: 1.25 },
  { label: 'Every 30 seconds', suite: 1.3, pulse: 1.1 },
  { label: 'Every 1 minute', suite: 1, pulse: 1 },
  { label: 'Every 5 minutes', suite: 0.7, pulse: 0.9 },
];

export const REGIONS: RegionOption[] = [
  { label: '1 region', suite: 1, pulse: 1 },
  { label: '2 regions', suite: 1.2, pulse: 1.15 },
  { label: '3 regions', suite: 1.35, pulse: 1.25 },
  { label: '5 regions', suite: 1.6, pulse: 1.4 },
  { label: '8 regions', suite: 1.9, pulse: 1.55 },
];

export const content = {
  titleStart: 'Calculate your ',
  titleHighlight: 'savings',
  description:
    'See what a full observability suite costs you for uptime monitoring alone, and what the same coverage costs with PulseWatch.',

  controls: {
    monitorsTitle: 'Websites or services you monitor',
    monitorsHint: 'Use the slider to choose a monitor tier',
    intervalTitle: 'How often checks run',
    regionsTitle: 'Regions you monitor from',
    platformTitle: 'Using an observability platform today?',
    yes: 'Yes',
    no: 'No',
  },

  results: {
    suiteLabel: 'Estimated observability suite cost',
    pulseLabel: 'PulseWatch cost',
    suffix: '/yr',
    savingsCaption: 'estimated savings per year',
    lower: 'lower',
    overpaying: 'You’re likely overpaying for uptime monitoring alone.',
    switching: 'Same coverage, a fraction of the price when you switch.',
  },

  cta: { label: 'Book an Enterprise demo', href: '/register' },

  disclaimer:
    'Estimates only, based on typical observability pricing ranges. Actual costs vary by configuration.',
} as const;
