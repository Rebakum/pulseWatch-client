import IntegrationsPage from '@/components/common/Pages/Solution/Integrations/IntegrationsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations | PulseWatch',
  description:
    'Connect PulseWatch uptime alerts to email, SMS, mobile apps, and the tools your team already uses.',
  alternates: {
    canonical: '/integrations',
  },
};

export default function IntrigrationsRoute() {
  return <IntegrationsPage />;
}
