export type ComparisonRow = {
  feature: string;
  // [your brand, competitor 1, competitor 2]
  values: [string, string, string];
};

// Competitor columns describe the typical behaviour of each CATEGORY.
// If you name real vendors, verify every cell against their current public pricing/docs first.
export const content = {
  title: 'vs. full observability platforms',
  description:
    'A side-by-side look at how it compares with the heavier platforms teams often reach for just to run uptime checks.',

  competitors: ['Full observability suites', 'Logs + uptime platforms'],

  rows: [
    {
      feature: 'Pricing model',
      values: [
        'Simple flat tiers, billed yearly',
        'Usage-based and modular (APM, infra, logs, synthetics)',
        'Per-seat plus usage-based feature bundles',
      ],
    },
    {
      feature: 'Starting price',
      values: [
        'Free plan, paid plans from $108/yr',
        'Varies with hosts, usage and features',
        'Varies with seats and usage',
      ],
    },
    {
      feature: 'Uptime checks',
      values: ['Yes (core product)', 'Yes (via synthetics)', 'Yes'],
    },
    {
      feature: 'Check interval',
      values: [
        '5 min on Free, down to 15 sec on Scale',
        'Depends on plan and per-run pricing',
        'Depends on plan',
      ],
    },
    {
      feature: 'Multi-location checks',
      values: [
        'Location-specific monitoring on paid plans',
        'Included, often add-on dependent',
        'Included',
      ],
    },
    {
      feature: 'Status pages',
      values: [
        '1 on Free, up to unlimited on Scale',
        'Available, often an add-on',
        'Built in (extras may cost more)',
      ],
    },
    {
      feature: 'Setup',
      values: [
        'No agents, live in minutes',
        'Agents required for full value',
        'Lightweight, partial instrumentation optional',
      ],
    },
    {
      feature: 'Observability suite (logs / APM / traces)',
      values: ['Not included, built for uptime', 'Full suite', 'Logs plus partial observability'],
    },
    {
      feature: 'SLA',
      values: [
        'Contractual SLA on Enterprise',
        'Available on enterprise tiers',
        'Available on higher tiers',
      ],
    },
    {
      feature: 'Security review & DPA',
      values: [
        'Available on Enterprise (DPA, MSA, security review)',
        'Varies by vendor',
        'Varies by vendor',
      ],
    },
    {
      feature: 'Learning curve',
      values: ['Minutes', 'Days to weeks', 'Hours to days'],
    },
  ] satisfies ComparisonRow[],

  footnote:
    'Competitor columns describe typical behaviour of each category and vary by vendor, plan and configuration.',
  cta: 'Book an Enterprise demo',
};
