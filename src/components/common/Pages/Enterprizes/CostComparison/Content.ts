export type ComparisonContent = {
  title: string;
  items: string[];
  footer?: string;
};

export const content = {
  titleStart: 'Stop paying for an ',
  titleHighlight: 'observability suite',
  titleEnd: ' to run uptime checks',
  description:
    'Full observability platforms were built to debug distributed systems and come with traces, custom metrics, log volume and session replay, all priced accordingly. If your job is knowing the moment a service goes down, you are paying for many products to use just one service.',

  suite: {
    title: 'What a full observability suite costs you',
    items: [
      'Consumption-based billing across many products',
      'Synthetic checks charged per run, multiplied by frequency and locations',
      'Invoices that are hard to predict or explain',
      'Weeks of instrumentation plus a dedicated owner to maintain it',
      'Paying for tracing and log depth nobody opens',
    ],
    // Add a sourced spend figure here if you have one, e.g. 'Typical mid-market spend: ...'
    footer: '',
  } satisfies ComparisonContent,

  lean: {
    title: 'What lean monitoring gives you',
    items: [
      'Flat, tiered pricing with no per-run or per-location multipliers',
      '15-second checks on the Scale plan, location-specific monitoring on paid plans',
      'A bill you can forecast a year out',
      'Live in minutes, no agents to deploy',
      'Enterprise options (SLA, dedicated CSM, custom invoicing) without the suite tax',
    ],
    footer: 'Starting price: $108 per year',
  } satisfies ComparisonContent,
};
