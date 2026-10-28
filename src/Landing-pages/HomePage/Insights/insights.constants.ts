export type InsightId =
  | 'multi-location'
  | 'response-time'
  | 'incidents'
  | 'team-access'
  | 'maintenance';

export interface InsightTab {
  id: InsightId;
  title: string;
  description: string;
  href: string;
  isComingSoon?: boolean;
}

export const INSIGHT_TABS: readonly InsightTab[] = [
  {
    id: 'multi-location',
    title: 'Multi-location checks',
    description:
      'Verify uptime from several regions to tell a local problem from a real outage and cut false alerts.',
    href: '#features',
    isComingSoon: true,
  },
  {
    id: 'response-time',
    title: 'Response-time reports',
    description:
      'Track average, minimum and maximum response times and spot slowdowns before they turn into downtime.',
    href: '#features',
  },
  {
    id: 'incidents',
    title: 'Incident management',
    description:
      'Every confirmed outage becomes an incident with a full timeline from detection to recovery.',
    href: '#features',
  },
  {
    id: 'team-access',
    title: 'Team access',
    description:
      'Invite teammates and assign roles so everyone sees what they need and edits only what they should.',
    href: '#features',
  },
  {
    id: 'maintenance',
    title: 'Maintenance windows',
    description:
      'Schedule planned work so alerts stay quiet, while real failures are still kept in your incident history.',
    href: '#features',
  },
];
