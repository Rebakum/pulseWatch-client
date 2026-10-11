import { CalendarClock, History, ListChecks, Palette, type LucideIcon } from 'lucide-react';

export interface StatusPageFeature {
  label: string;
  icon: LucideIcon;
}

export const STATUS_PAGE_FEATURES: readonly StatusPageFeature[] = [
  { label: 'Choose which monitors appear', icon: ListChecks },
  { label: 'Incident history and updates', icon: History },
  { label: 'Scheduled maintenance notices', icon: CalendarClock },
  { label: 'Your own logo and branding', icon: Palette },
];

// Decorative preview data: each row is a list of segments; `downAt` marks one red segment.
export const PREVIEW_SEGMENT_COUNT = 44;

export interface PreviewRow {
  id: string;
  nameWidthClass: string;
  downAt?: number;
  uptime: string;
}

export const PREVIEW_ROWS: readonly PreviewRow[] = [
  { id: 'row-1', nameWidthClass: 'w-14', uptime: '100%' },
  { id: 'row-2', nameWidthClass: 'w-12', uptime: '100%' },
  { id: 'row-3', nameWidthClass: 'w-16', downAt: 27, uptime: '99.9%' },
  { id: 'row-4', nameWidthClass: 'w-10', uptime: '100%' },
  { id: 'row-5', nameWidthClass: 'w-14', uptime: '100%' },
];
