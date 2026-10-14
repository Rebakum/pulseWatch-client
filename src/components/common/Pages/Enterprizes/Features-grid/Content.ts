import {
  CalendarClock,
  Gauge,
  Globe,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Siren,
  Timer,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const content = {
  titleStart: 'Get all the features you need in ',
  titleHighlight: 'one intuitive dashboard',

  // Keep these in sync with the pricing comparison table.
  features: [
    {
      title: 'Fast monitoring interval',
      description:
        'Check critical endpoints more frequently with intervals as short as 15 seconds on Scale, to detect issues sooner and maintain peak performance.',
      icon: Timer,
    },
    {
      title: 'Domain & SSL monitoring',
      description: 'Get alerts before your domain or SSL certificates expire.',
      icon: ShieldCheck,
    },
    {
      title: 'Notify & login seats',
      description:
        'Assign alerts and manage user access so your team and clients get the right information at the right time.',
      icon: Users,
    },
    {
      title: 'Maintenance windows',
      description:
        'Pause downtime alerts during scheduled maintenance to avoid unnecessary notifications.',
      icon: CalendarClock,
    },
    {
      title: 'Heartbeat monitoring',
      description:
        'Keep an eye on cron jobs and background tasks, and get alerted when an expected check-in does not arrive.',
      icon: HeartPulse,
    },
    {
      title: 'Status pages',
      description:
        'Share real-time status with your customers using custom design and your own domain.',
      icon: Globe,
    },
    {
      title: 'Slow response alerts',
      description:
        'Get alerted when your website or service responds slower than usual, before users start to notice.',
      icon: Gauge,
    },
    {
      title: 'Location specific checks',
      description:
        'Create monitors for specific regions and catch issues that only appear in certain locations.',
      icon: MapPin,
    },
    {
      title: 'Incidents with root cause',
      description:
        'See incidents with root cause details in one place, so your team can fix problems faster.',
      icon: Siren,
    },
  ] satisfies Feature[],
};
