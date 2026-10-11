export const BRAND = 'CodesRaft'; // product name
export const TAGLINE = ['Downtime happens.', 'Get notified!'];

export type FooterLink = { label: string; href: string };
export type FooterItem = FooterLink | { group: FooterLink[] }; // group = "Terms / Privacy / DPA"
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
      { label: 'Integrations', href: '/integrations' },
      { label: 'API', href: '/api' },
      { label: 'CLI', href: '/cli' },
      { label: 'MCP', href: '/mcp' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help center', href: '/help' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Locations & IPs', href: '/locations' },
      { label: 'Blog', href: '/blog' },
      { label: 'Knowledge hub', href: '/knowledge' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'Affiliate program', href: '/affiliate' },
      { label: 'Clients', href: '/clients' },
      {
        group: [
          { label: 'Terms', href: '/terms' },
          { label: 'Privacy', href: '/privacy' },
          { label: 'DPA', href: '/dpa' },
        ],
      },
      { label: 'Security & compliance', href: '/security' },
    ],
  },
  {
    title: 'Monitoring',
    links: [
      { label: 'Website monitoring', href: '#' },
      { label: 'Third party monitoring', href: '#' },
      { label: 'Keyword monitoring', href: '#' },
      { label: 'Ping monitoring', href: '#' },
      { label: 'Port monitoring', href: '#' },
      { label: 'Cron job monitoring', href: '#' },
      { label: 'API monitoring', href: '#' },
      { label: 'TCP monitoring', href: '#' },
      { label: 'UDP monitoring', href: '#' },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'Multi-location', href: '#' },
      { label: 'Response time', href: '#' },
      { label: 'SSL expiry', href: '#' },
      { label: 'Domain expiry', href: '#' },
      { label: 'DNS monitoring', href: '#' },
      { label: 'Status page', href: '#' },
      { label: 'Incident Management', href: '#' },
      { label: 'IT alerting', href: '#' },
    ],
  },
  {
    title: 'Comparison',
    links: [
      { label: 'Statuspage', href: '#' },
      { label: 'BetterStack', href: '#' },
      { label: 'Site24×7', href: '#' },
      { label: 'Pingdom', href: '#' },
      { label: 'Uptime.com', href: '#' },
      { label: 'Uptime Kuma', href: '#' },
      { label: 'OhDear', href: '#' },
      { label: 'Cronitor', href: '#' },
    ],
  },
  {
    title: 'Free tools',
    links: [
      { label: 'Is it down?', href: '#' },
      { label: 'Subnet calculator', href: '#' },
      { label: 'MX lookup', href: '#' },
      { label: 'Uptime calculator', href: '#' },
      { label: 'Crontab generator', href: '#' },
      { label: 'Web change detection', href: '#' },
      { label: 'DNS Lookup', href: '#' },
      { label: 'Competitor Monitoring', href: '#' },
    ],
  },
];
