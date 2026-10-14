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
          { label: 'Website & endpoint monitoring', href: '#features' },
          { label: 'Keyword monitoring', href: '#features' },
          { label: 'Ping monitoring', href: '#features' },
          { label: 'Port monitoring', href: '#features' },
          { label: 'Cron job monitoring', href: '#features' },
          { label: 'API monitoring', href: '#features' },
        ],
      },
      {
        title: 'Monitoring features',
        icon: Gauge,
        column: 2,
        links: [
          { label: 'Response time monitoring', href: '#features' },
          { label: 'SSL monitoring', href: '#features' },
          { label: 'Domain monitoring', href: '#features' },
          { label: 'DNS monitoring', href: '#features' },
          { label: 'Maintenance windows', href: '#features' },
          { label: 'Multi-location monitoring', href: '#features', isComingSoon: true },
        ],
      },
      {
        column: 3,
        links: [
          { label: 'Incident management', href: '#features', icon: ShieldAlert },
          { label: 'Status pages', href: '#features', icon: Radio },
          { label: 'Alerts & notifications', href: '#features', icon: BellRing },
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
          { label: 'DevOps', href: '#solutions' },
          { label: 'Developers', href: '#solutions' },
          { label: 'Marketers', href: '#solutions' },
          { label: 'Support', href: '#solutions' },
          { label: 'Business owners', href: '#solutions' },
        ],
      },
      {
        title: 'Go further with',
        icon: Rocket,
        column: 2,
        links: [
          { label: 'API', href: '#solutions' },
          { label: 'Integrations', href: '#solutions' },
          { label: 'Webhooks', href: '#solutions' },
          { label: 'CLI', href: '#solutions', isComingSoon: true },
          { label: 'Mobile app', href: '#', isComingSoon: true },
        ],
      },
      {
        title: 'Meet our users',
        icon: Heart,
        column: 2,
        links: [{ label: 'Case studies', href: '#', isComingSoon: true }],
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
          { label: 'Help center', href: '#', isComingSoon: true },
          { label: 'API docs', href: '#', isComingSoon: true },
          { label: 'Knowledge base', href: '#', isComingSoon: true },
          { label: 'System status', href: '#', isComingSoon: true },
        ],
      },
      {
        title: 'Community',
        icon: MessagesSquare,
        column: 2,
        links: [
          { label: 'Roadmap', href: '#', isComingSoon: true },
          { label: 'Blog', href: '#', isComingSoon: true },
          { label: 'Changelog', href: '#', isComingSoon: true },
          { label: 'Suggest a feature', href: '#', isComingSoon: true },
        ],
      },
      {
        title: 'Free tools',
        icon: Wrench,
        column: 3,
        links: [
          { label: 'Uptime calculator', href: '#', isComingSoon: true },
          { label: 'DNS lookup', href: '#', isComingSoon: true },
          { label: 'SSL checker', href: '#', isComingSoon: true },
          { label: 'Is it down?', href: '#', isComingSoon: true },
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
