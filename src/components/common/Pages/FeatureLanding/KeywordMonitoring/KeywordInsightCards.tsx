import type { IconCardsSectionData } from '@/types/landing';
import IconCards from '../WebsiteMonitoring/sections/IconCards';

const DATA: IconCardsSectionData = {
  title: [
    { text: 'Know more than just ' },
    { text: 'up', tone: 'brand' },
    { text: ' or ' },
    { text: 'down', tone: 'red' },
    { text: '.' },
  ],
  description:
    'Multi-location checks, response time tracking, SSL and domain expiry alerts. The details that turn raw uptime data into something you can actually act on.',
  items: [
    { label: 'Response time', icon: 'responseTime' },
    { label: 'SSL expiry', icon: 'sslExpiry' },
    { label: 'Domain expiry', icon: 'domainExpiry' },
  ],
};

export default function KeywordInsightCards() {
  return <IconCards data={DATA} />;
}
