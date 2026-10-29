import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BellRing,
  BookOpen,
  Gauge,
  Hash,
  Heart,
  Mail,
  MessagesSquare,
  Radio,
  Rocket,
  Send,
  ShieldAlert,
  Users,
  Webhook,
  Wrench,
} from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  isComingSoon?: boolean;
}

export interface NavGroup {
  title?: string;
  icon?: LucideIcon;
  column: 1 | 2 | 3;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href?: string;
  columns?: 2 | 3;
  groups?: NavGroup[];
}

export interface NotificationChannel {
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Features',
    columns: 3,
    groups: [
      {
        title: 'Uptime monitoring',
        icon: Activity,
        column: 1,
        links: [
          { label: 'Website & endpoint monitoring', href: '/website-monitoring' },
          { label: 'Third-party monitoring', href: '/third-party-monitoring' },
          { label: 'Ping monitoring', href: '/ping-monitoring' },
          { label: 'Keyword monitoring', href: '/keyword-monitoring' },
          { label: 'Port monitoring', href: '/port-monitoring' },
          { label: 'Cron job monitoring', href: '/cron-job-monitoring' },
          { label: 'API monitoring', href: '/api-monitoring' },
          { label: 'UDP monitoring', href: '/udp-monitoring' },
        ],
      },
      {
        title: 'Monitoring features',
        icon: Gauge,
        column: 2,
        links: [
          { label: 'Multi-location monitoring', href: '/multi-location-monitoring' },
          { label: 'Response time monitoring', href: '/response-time-monitoring' },
          { label: 'SSL monitoring', href: '/ssl-monitoring' },
          { label: 'Domain monitoring', href: '/domain-monitoring' },
          { label: 'DNS monitoring', href: '/dns-monitoring' },
          { label: 'Maintenance windows', href: '/maintenance-windows' },
        ],
      },
      {
        column: 3,
        links: [
          { label: 'Incident management', href: '/incident-management', icon: ShieldAlert },
          { label: 'Status pages', href: '/status-pages', icon: Radio },
          {
            label: 'Alerts & notifications',
            href: '/alerts-notifications',
            icon: BellRing,
          },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    columns: 2,
    groups: [
      {
        title: 'For every team',
        icon: Users,
        column: 1,
        links: [
          { label: 'DevOps', href: '/solutions/devops' },
          { label: 'Developers', href: '/solutions/developers' },
          { label: 'Marketers', href: '/solutions/marketers' },
          { label: 'Support', href: '/solutions/support' },
          { label: 'Business owners', href: '/solutions/business-owners' },
        ],
      },
      {
        title: 'Go further with',
        icon: Rocket,
        column: 2,
        links: [
          { label: 'API', href: '/solutions/api' },
          { label: 'Integrations', href: '/solutions/integrations' },
          { label: 'Webhooks', href: '/solutions/webhooks' },
          { label: 'CLI', href: '/solutions/cli', isComingSoon: true },
          { label: 'Mobile app', href: '/solutions/mobile-app', isComingSoon: true },
        ],
      },
      {
        title: 'Meet our users',
        icon: Heart,
        column: 2,
        links: [{ label: 'Case studies', href: '/solutions/case-studies', isComingSoon: true }],
      },
    ],
  },
  { label: 'Enterprise', href: '/enterprise' },
  {
    label: 'Resources',
    columns: 3,
    groups: [
      {
        title: 'Help & learn',
        icon: BookOpen,
        column: 1,
        links: [
          { label: 'Help center', href: '/help', isComingSoon: true },
          { label: 'API docs', href: '/api-docs', isComingSoon: true },
          { label: 'Knowledge base', href: '/knowledge-base', isComingSoon: true },
          { label: 'System status', href: '/status', isComingSoon: true },
        ],
      },
      {
        title: 'Community',
        icon: MessagesSquare,
        column: 2,
        links: [
          { label: 'Roadmap', href: '/roadmap', isComingSoon: true },
          { label: 'Blog', href: '/blog', isComingSoon: true },
          { label: 'Changelog', href: '/changelog', isComingSoon: true },
          { label: 'Suggest a feature', href: '/suggest-a-feature', isComingSoon: true },
        ],
      },
      {
        title: 'Free tools',
        icon: Wrench,
        column: 3,
        links: [
          { label: 'Uptime calculator', href: '/tools/uptime-calculator', isComingSoon: true },
          { label: 'DNS lookup', href: '/tools/dns-lookup', isComingSoon: true },
          { label: 'SSL checker', href: '/tools/ssl-checker', isComingSoon: true },
          { label: 'Is it down?', href: '/tools/is-it-down', isComingSoon: true },
        ],
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
];

export const NOTIFICATION_CHANNELS: NotificationChannel[] = [
  { label: 'Email', icon: Mail },
  { label: 'Webhook', icon: Webhook },
  { label: 'Slack', icon: Hash },
  { label: 'Discord', icon: MessagesSquare },
  { label: 'Telegram', icon: Send },
];
