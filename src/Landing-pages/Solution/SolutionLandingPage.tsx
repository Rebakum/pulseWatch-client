import FeatureLanding from '@/Landing-pages/FeatureLanding/FeatureLanding';
import ApiPage from '@/Landing-pages/Solution/Api/ApiLandingPage';
import BusinessOwnersPage from '@/Landing-pages/Solution/BusinessOwners/BusinessOwnersPage';
import DevelopersPage from '@/Landing-pages/Solution/ForDevelopers/DevelopersPage';
import IntegrationsPage from '@/Landing-pages/Solution/Integrations/IntegrationsPage';
import MarketersPage from '@/Landing-pages/Solution/Marketers/MarketersPage';
import MonitoringForDevOpsPage from '@/Landing-pages/Solution/MonitoringForDevOps/MonitoringForDevOpsPage';
import SupportPage from '@/Landing-pages/Solution/Support/SupportPage';
import WebhooksPage from '@/Landing-pages/Solution/Webhooks/WebhooksPage';
import { SOLUTION_SLUGS, findSolutionPage } from '@/constants/page-registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';
import { Suspense, use } from 'react';

interface SolutionPageProps {
  params: Promise<{ solution: string }>;
}

const SOLUTION_PAGES: Record<string, ComponentType> = {
  devops: MonitoringForDevOpsPage,
  developers: DevelopersPage,
  marketers: MarketersPage,
  support: SupportPage,
  'business-owners': BusinessOwnersPage,
  api: ApiPage,
  integrations: IntegrationsPage,
  webhooks: WebhooksPage,
};

export function generateSolutionLandingStaticParams() {
  return SOLUTION_SLUGS.map((solution) => ({ solution }));
}

export async function generateSolutionLandingMetadata(
  params: Promise<{ solution: string }>,
): Promise<Metadata> {
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

  const PageComponent = SOLUTION_PAGES[solution];

  return PageComponent ? <PageComponent /> : <FeatureLanding page={page} />;
}

export default function SolutionLandingPage({ params }: SolutionPageProps) {
  return (
    <Suspense fallback={null}>
      <SolutionPageContent params={params} />
    </Suspense>
  );
}
