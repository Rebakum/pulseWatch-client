export interface PreviewRegion {
  id: string;
  name: string;
  location: string;
  responseTime: string;
  dotPosition: string;
}

export const PREVIEW_REGIONS: readonly PreviewRegion[] = [
  {
    id: 'na',
    name: 'North America',
    location: 'Virginia',
    responseTime: '86 ms',
    dotPosition: 'left-[22%] top-[40%]',
  },
  {
    id: 'eu',
    name: 'Europe',
    location: 'Frankfurt',
    responseTime: '112 ms',
    dotPosition: 'left-[48%] top-[26%]',
  },
  {
    id: 'as',
    name: 'Asia',
    location: 'Singapore',
    responseTime: '241 ms',
    dotPosition: 'left-[76%] top-[52%]',
  },
];

export interface PreviewContact {
  id: string;
  name: string;
  channel: string;
}

export const PREVIEW_CONTACTS: readonly PreviewContact[] = [
  { id: 'c-1', name: 'Alex Doe', channel: 'Email' },
  { id: 'c-2', name: 'Sam Roy', channel: 'Email' },
  { id: 'c-3', name: 'Ops channel', channel: 'Webhook' },
];

export const PREVIEW_RESPONSE_TIMES: readonly number[] = [
  142, 138, 145, 140, 136, 150, 148, 141, 139, 420, 160, 143, 140, 137, 144, 152, 146, 139, 141,
  138, 310, 180, 150, 142, 140, 138, 143, 141, 139, 140,
];

export const PREVIEW_RESPONSE_STATS = [
  { label: 'Average', value: '142 ms' },
  { label: 'Minimum', value: '87 ms' },
  { label: 'Maximum', value: '420 ms' },
] as const;

export type PreviewTone = 'down' | 'info' | 'up';

export interface PreviewTimelineEntry {
  id: string;
  label: string;
  time: string;
  tone: PreviewTone;
}

export const PREVIEW_TIMELINE: readonly PreviewTimelineEntry[] = [
  { id: 't-1', label: 'Check failed: 503 Service Unavailable', time: '14:02:10', tone: 'down' },
  { id: 't-2', label: 'Failure confirmed by retry', time: '14:02:40', tone: 'down' },
  { id: 't-3', label: 'Incident opened', time: '14:02:41', tone: 'info' },
  { id: 't-4', label: 'Email alert sent to 2 contacts', time: '14:02:43', tone: 'info' },
];

export const PREVIEW_TONE_DOT_CLASS: Record<PreviewTone, string> = {
  down: 'bg-status-down',
  info: 'bg-brand-blue',
  up: 'bg-status-up',
};

export interface PreviewMember {
  id: string;
  initials: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
}

export const PREVIEW_MEMBERS: readonly PreviewMember[] = [
  { id: 'u-1', initials: 'AD', name: 'Alex Doe', email: 'alex@example.com', role: 'Admin' },
  { id: 'u-2', initials: 'SR', name: 'Sam Roy', email: 'sam@example.com', role: 'Editor' },
  { id: 'u-3', initials: 'JK', name: 'Jo Khan', email: 'jo@example.com', role: 'Viewer' },
  { id: 'u-4', initials: 'MP', name: 'Mia Park', email: 'mia@example.com', role: 'Viewer' },
];
