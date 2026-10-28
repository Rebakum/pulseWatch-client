import type { IconCardsSectionData } from '@/types/landing';
import IconCards from './IconCards';

const DATA: IconCardsSectionData = {
  title: [
    { text: 'All you really care about monitored in one place' },
    { text: '.', tone: 'brand' },
  ],
  description:
    'From Websites and APIs to servers and cron jobs, PulseWatch watches every layer. Nine monitor types, one dashboard.',
  items: [
    { label: 'Website monitoring', icon: 'website' },
    { label: 'Ping monitoring', icon: 'ping' },
    { label: 'Port monitoring', icon: 'port' },
    { label: 'Cron job monitoring', icon: 'cron' },
    { label: 'DNS monitoring', icon: 'dns' },
    { label: 'API monitoring', icon: 'api' },
    { label: 'UDP monitoring', icon: 'udp' },
    { label: 'TCP monitoring', icon: 'tcp' },
    { label: 'Third party monitoring', icon: 'thirdParty' },
  ],
};

export default function KeywordIconCards() {
  return <IconCards data={DATA} />;
}
