import { Plan, Row, Section, Values } from './types';

/* Shared grid: label column on desktop; on mobile the label sits on its own row */
export const GRID = 'grid grid-cols-4 lg:grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))]';

export const plans: Plan[] = [
  { name: 'Free', price: '$0', cta: 'Register now' },
  { name: 'Solo', prefix: 'Starts at', price: '$108/y', cta: 'Subscribe now' },
  { name: 'Team', price: '$420/y', cta: 'Subscribe now', featured: true },
  { name: 'Scale', prefix: 'Starts at', price: '$780/y', cta: 'Subscribe now' },
];

export const payments = ['Visa', 'Mastercard', 'Discover', 'Amex'];

const ALL: Values = [true, true, true, true];
const PAID: Values = [false, true, true, true];
const TEAM_UP: Values = [false, false, true, true];

const row = (label: string, values: Values, opts: Partial<Row> = {}): Row => ({
  label,
  values,
  info: true,
  ...opts,
});

export const sections: Section[] = [
  {
    title: 'Monitoring',
    rows: [
      row('Monitoring interval', ['5 minutes', '60 seconds', '30 seconds', '15 seconds']),
      row('HTTPS monitoring', ALL),
      row('3rd party service monitoring', [false, '1-5', '20', '40-100']),
      row('Keyword monitoring', ALL),
      row('Ping monitoring', ALL),
      row('Port monitoring', ALL),
      row('API monitoring', PAID),
      row('UDP monitoring', PAID),
      row('Location-specific monitoring', PAID),
      row('Slow response alerts', PAID),
      row('DNS monitoring', PAID),
      row('SSL monitoring', PAID),
      row('Domain exp. monitoring', PAID),
      row('Heartbeat monitoring', PAID),
      row('Custom headers & statuses', PAID),
      row('Maintenance windows', PAID),
      row('Incidents with root cause details', ["Can't comment", "Can't comment", true, true]),
    ],
  },
  {
    title: 'Notification & Reporting',
    rows: [
      row('Email, SMS, Voice call, Email2SMS', ALL),
      row(
        'Free SMS / Voice call credits',
        [
          { before: 'Not included, can be ', link: 'added' },
          '10-20 incl.',
          '30 incl.',
          '50-200 incl.',
        ],
        { highlight: true },
      ),
      row('Monthly email reports', ['Only first 3 months', 'Included', 'Included', 'Included']),
      row('Basic 3rd party integrations', ALL),
      row('Slack, Mattermost, Telegram & MS Teams', PAID, { info: false }),
      row('Webhook, Zapier, Pagerduty', TEAM_UP, { info: false }),
      row('Recurring and prolonging notifications', PAID),
    ],
  },
  {
    title: 'Status pages',
    rows: [
      row('Number of status pages', ['1', '3', '100', 'Unlimited']),
      row('Custom design', PAID),
      row('Own domain', PAID),
      row('Translations', PAID),
      row('Whitelabeled status page', TEAM_UP),
      row('Password on status page', TEAM_UP),
      row('Status page subscribers', TEAM_UP),
      row('Search engine opt-out', TEAM_UP),
      row('Status page Analytics', TEAM_UP),
    ],
  },
  {
    title: 'Account',
    rows: [
      row('API', ALL),
      row('Notify-only seats included', [
        false,
        { before: '0, ', link: 'add more here' },
        { before: '3, ', link: 'add more here' },
        { before: '5, ', link: 'add more here' },
      ]),
      row('Login seats included', [
        false,
        false,
        { before: '3, ', link: 'add', after: ' for $15/19 / mo.' },
        { before: '5, ', link: 'add', after: ' for $15/19 / mo.' },
      ]),
      row('Mobile app (Android & iOS)', ALL),
      row('Data retention', ['3 months', '12 months', '24 months', '24 months']),
      row('Two-Factor authentication', ALL),
    ],
  },
];
