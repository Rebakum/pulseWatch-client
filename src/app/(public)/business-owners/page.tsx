import BusinessOwnersPage from '@/components/common/Pages/Solution/BusinessOwners/BusinessOwnersPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uptime Monitoring for Business Owners | PulseWatch',
  description:
    'Protect your business from website downtime with simple uptime monitoring and instant alerts.',
  alternates: {
    canonical: '/business-owners',
  },
};

export default function BusinessOwnersRoute() {
  return <BusinessOwnersPage />;
}
