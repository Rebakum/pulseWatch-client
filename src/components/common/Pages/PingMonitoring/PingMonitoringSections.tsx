import type { AdvancedFeaturesSectionData, IconCardsSectionData } from '@/types/landing';

import AdvancedFeatures from '../FeatureLanding/WebsiteMonitoring/sections/AdvancedFeatures';
import IconCards from '../FeatureLanding/WebsiteMonitoring/sections/IconCards';

const ADVANCED_FEATURES: AdvancedFeaturesSectionData = {
  title: [{ text: 'Advanced features for advanced users' }, { text: '.', tone: 'brand' }],
  items: [
    {
      title: 'Latency thresholds',
      description:
        'Set response-time thresholds and recurring alerts to catch slow or unstable connections before they become outages.',
    },
    {
      title: 'Maintenance windows',
      description: 'Pause ping alerts during planned maintenance and avoid unnecessary notifications.',
    },
    {
      title: 'Multi-location checks',
      description:
        'Check a host from multiple regions to identify regional network problems and routing issues.',
    },
    {
      title: 'SMS and voice call notifications',
      description: 'Get an alert by text or phone call when a critical host becomes unreachable.',
    },
  ],
  cta: { label: 'Book an Enterprise demo', href: '/enterprise' },
};

const INSIGHT_CARDS: IconCardsSectionData = {
  title: [
    { text: 'Know more than just ' },
    { text: 'up', tone: 'up' },
    { text: ' or ' },
    { text: 'down', tone: 'red' },
    { text: '.' },
  ],
  description:
    'Track response time, packet loss, and host availability across regions to understand the health of your network.',
  items: [
    { label: 'Response time', icon: 'responseTime' },
    { label: 'Packet loss', icon: 'packetLoss' },
    { label: 'Host reachability', icon: 'ping' },
  ],
};

const MONITOR_TYPES: IconCardsSectionData = {
  title: [
    { text: 'All your monitoring tools in ' },
    { text: 'one place', tone: 'brand' },
    { text: '.' },
  ],
  description:
    'From websites and APIs to network services and cron jobs, keep an eye on every layer from one dashboard.',
  items: [
    { label: 'Website monitoring', icon: 'website' },
    { label: 'Keyword monitoring', icon: 'keyword' },
    { label: 'Port monitoring', icon: 'port' },
    { label: 'Cron job monitoring', icon: 'cron' },
    { label: 'DNS monitoring', icon: 'dns' },
    { label: 'API monitoring', icon: 'api' },
    { label: 'UDP monitoring', icon: 'udp' },
    { label: 'TCP monitoring', icon: 'tcp' },
    { label: 'Third-party monitoring', icon: 'thirdParty' },
  ],
};

export function PingMonitoringAdvancedFeatures() {
  return <AdvancedFeatures data={ADVANCED_FEATURES} />;
}

export function PingMonitoringInsightCards() {
  return <IconCards data={INSIGHT_CARDS} />;
}

export function PingMonitoringTypeCards() {
  return <IconCards data={MONITOR_TYPES} />;
}
