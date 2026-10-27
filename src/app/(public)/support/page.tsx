import SupportPage from '@/components/common/Pages/Solution/Support/SupportPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uptime Monitoring for Support Teams | PulseWatch',
  description:
    'Reduce support tickets with uptime monitoring, real-time status pages, and proactive incident alerts.',
  alternates: {
    canonical: '/support',
  },
};

export default function SupportRoute() {
  return <SupportPage />;
}
