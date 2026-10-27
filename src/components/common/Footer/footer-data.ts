export const BRAND = 'CodesRaft'; // product name
export const TAGLINE = ['Downtime happens.', 'Get notified!'];

export type FooterLink = { label: string; href: string };
export type FooterItem = FooterLink | { group: FooterLink[] };
export type FooterSection = { title: string; links: FooterItem[] };

export const socials = [
  { name: 'Facebook', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Discord', href: '#' },
] as const;

export const sections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Integrations', href: '/solutions/integrations' },
      { label: 'API', href: '/solutions/api' },
      { label: 'CLI', href: '/solutions/developers' },
      { label: 'MCP', href: '/solutions/api' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help center', href: '/help' },
      { label: 'FAQs', href: '/help' },
      { label: 'Locations & IPs', href: '/website-monitoring' },
      { label: 'Blog', href: '/blog' },
      { label: 'Knowledge hub', href: '/knowledge-base' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact us', href: '/enterprise' },
      { label: 'Affiliate program', href: '/business-owners' },
      { label: 'Clients', href: '/case-studies' },
      {
        group: [
          { label: 'Terms', href: '/help' },
          { label: 'Privacy', href: '/help' },
          { label: 'DPA', href: '/help' },
        ],
      },
      { label: 'Security & compliance', href: '/enterprise' },
    ],
  },
  {
    title: 'Monitoring',
    links: [
      { label: 'Website monitoring', href: '/website-monitoring' },
      { label: 'Third party monitoring', href: '/third-party-monitoring' },
      { label: 'Keyword monitoring', href: '/keyword-monitoring' },
      { label: 'Ping monitoring', href: '/ping-monitoring' },
      { label: 'Port monitoring', href: '/port-monitoring' },
      { label: 'Cron job monitoring', href: '/cron-job-monitoring' },
      { label: 'API monitoring', href: '/api-monitoring' },
      { label: 'TCP monitoring', href: '/api-monitoring' },
      { label: 'UDP monitoring', href: '/udp-monitoring' },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'Multi-location', href: '/multi-location-monitoring' },
      { label: 'Response time', href: '/response-time-monitoring' },
      { label: 'SSL expiry', href: '/ssl-monitoring' },
      { label: 'Domain expiry', href: '/domain-monitoring' },
      { label: 'DNS monitoring', href: '/dns-monitoring' },
      { label: 'Status page', href: '/status-pages' },
      { label: 'Incident Management', href: '/incident-management' },
      { label: 'IT alerting', href: '/alerts-notifications' },
    ],
  },
  {
    title: 'Comparison',
    links: [
      { label: 'Statuspage', href: '/pricing' },
      { label: 'BetterStack', href: '/pricing' },
      { label: 'Site24×7', href: '/pricing' },
      { label: 'Pingdom', href: '/pricing' },
      { label: 'Uptime.com', href: '/pricing' },
      { label: 'Uptime Kuma', href: '/pricing' },
      { label: 'OhDear', href: '/pricing' },
      { label: 'Cronitor', href: '/pricing' },
    ],
  },
  {
    title: 'Free tools',
    links: [
      { label: 'Is it down?', href: '/tools/is-it-down' },
      { label: 'Subnet calculator', href: '/tools/dns-lookup' },
      { label: 'MX lookup', href: '/tools/dns-lookup' },
      { label: 'Uptime calculator', href: '/tools/uptime-calculator' },
      { label: 'Crontab generator', href: '/tools/uptime-calculator' },
      { label: 'Web change detection', href: '/keyword-monitoring' },
      { label: 'DNS Lookup', href: '/tools/dns-lookup' },
      { label: 'Competitor Monitoring', href: '/third-party-monitoring' },
    ],
  },
];
