import FeatureLanding from '@/components/common/Pages/FeatureLanding/FeatureLanding';
import ApiPage from '@/components/common/Pages/Solution/Api/ApiPage';
import BusinessOwnersPage from '@/components/common/Pages/Solution/BusinessOwners/BusinessOwnersPage';
import DevelopersPage from '@/components/common/Pages/Solution/ForDevelopers/DevelopersPage';
import IntegrationsPage from '@/components/common/Pages/Solution/Integrations/IntegrationsPage';
import MarketersPage from '@/components/common/Pages/Solution/Marketers/MarketersPage';
import MonitoringForDevOpsPage from '@/components/common/Pages/Solution/MonitoringForDevOps/MonitoringForDevOpsPage';
import SupportPage from '@/components/common/Pages/Solution/Support/SupportPage';
import WebhooksPage from '@/components/common/Pages/Solution/Webhooks/WebhooksPage';
import { SOLUTION_SLUGS, findSolutionPage } from '@/constants/page-registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, use } from 'react';

interface SolutionPageProps {
  params: Promise<{ solution: string }>;
}

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((solution) => ({ solution }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { solution } = await params;
  const page = findSolutionPage(solution);

  if (!page) {
    return {};
  }

  return {
    title: page.seo?.title ?? `${page.title} ${page.highlight}`,
    description: page.seo?.description ?? page.description,
    alternates: {
      canonical: `/solutions/${solution}`,
    },
  };
}

function SolutionPageContent({ params }: SolutionPageProps) {
  const { solution } = use(params);
  const page = findSolutionPage(solution);

  if (!page) {
    notFound();
  }

  if (solution === 'devops') {
    return <MonitoringForDevOpsPage />;
  }

  if (solution === 'developers') {
    return <DevelopersPage />;
  }

  if (solution === 'marketers') {
    return <MarketersPage />;
  }

  if (solution === 'support') {
    return <SupportPage />;
  }

  if (solution === 'business-owners') {
    return <BusinessOwnersPage />;
  }

  if (solution === 'api') {
    return <ApiPage />;
  }

  if (solution === 'integrations') {
    return <IntegrationsPage />;
  }

  if (solution === 'webhooks') {
    return <WebhooksPage />;
  }

  return <FeatureLanding page={page} />;
}

export default function SolutionPage({ params }: SolutionPageProps) {
  return (
    <Suspense fallback={null}>
      <SolutionPageContent params={params} />
    </Suspense>
  );
}
