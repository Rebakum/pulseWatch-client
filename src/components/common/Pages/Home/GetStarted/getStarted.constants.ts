import { BarChart3, LayoutDashboard, Mail, Radio, type LucideIcon } from 'lucide-react';

export interface GetStartedFeature {
  label: string;
  icon: LucideIcon;
}

export const GET_STARTED_FEATURES: readonly GetStartedFeature[] = [
  { label: 'Easy-to-use dashboard', icon: LayoutDashboard },
  { label: 'Status page in a few clicks', icon: Radio },
  { label: 'Uptime reports and downtime insights', icon: BarChart3 },
  { label: 'Instant email alerts', icon: Mail },
];

export type PreviewMonitorStatus = 'up' | 'down' | 'paused';

export interface PreviewMonitor {
  id: string;
  name: string;
  url: string;
  status: PreviewMonitorStatus;
  uptime: string;
}

export const PREVIEW_MONITORS: readonly PreviewMonitor[] = [
  { id: 'm-1', name: 'Marketing site', url: 'example.com', status: 'up', uptime: '100%' },
  { id: 'm-2', name: 'Public API', url: 'api.example.com', status: 'up', uptime: '99.98%' },
  { id: 'm-3', name: 'Checkout', url: 'shop.example.com', status: 'down', uptime: '98.20%' },
  { id: 'm-4', name: 'Docs', url: 'docs.example.com', status: 'up', uptime: '100%' },
  { id: 'm-5', name: 'Staging worker', url: '10.0.0.8', status: 'paused', uptime: '--' },
  { id: 'm-6', name: 'Blog', url: 'blog.example.com', status: 'up', uptime: '99.99%' },
];

export const PREVIEW_STATUS_DOT_CLASS: Record<PreviewMonitorStatus, string> = {
  up: 'bg-status-up',
  down: 'bg-status-down',
  paused: 'bg-status-paused',
};
