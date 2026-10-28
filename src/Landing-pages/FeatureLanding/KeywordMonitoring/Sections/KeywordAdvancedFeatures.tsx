import type { AdvancedFeaturesSectionData } from '@/types/landing';
import AdvancedFeatures from './AdvancedFeatures';

const DATA: AdvancedFeaturesSectionData = {
  title: [{ text: 'Advanced features for advanced users' }, { text: '.', tone: 'brand' }],
  items: [
    {
      title: 'Recurring notifications',
      description:
        "Set threshold and recurrence parameters so that you don't miss any serious outage.",
    },
    {
      title: 'Maintenance windows',
      description: 'Set up maintenance windows to pause the monitoring during the maintenance.',
    },
    {
      title: 'Multi-location checks',
      description:
        'Create monitors with specific monitoring regions you can choose and catch issues that only appear in specific locations.',
    },
    {
      title: 'SMS and voice call notifications',
      description: 'No internet? We can call or text you when something goes wrong.',
    },
  ],
  cta: { label: 'Book an Enterprise demo', href: '/enterprise' },
};

export default function KeywordAdvancedFeatures() {
  return <AdvancedFeatures data={DATA} />;
}
