import FeatureLanding from '@/components/common/Pages/FeatureLanding/FeatureLanding';
import KeywordMonitoringPage from '@/components/common/Pages/FeatureLanding/KeywordMonitoring/KeywordMonitoringPage';
import PingMonitoringpge from '@/components/common/Pages/FeatureLanding/PingMonitoring/PingMonitoringpge';
import ThirdPartyMonitoringPage from '@/components/common/Pages/FeatureLanding/ThirdPartyMonitoring/ThirdPartyMonitoringPage';
import LandingPage from '@/components/common/Pages/FeatureLanding/WebsiteMonitoring/WebsiteMonitoring';
import ApiPage from '@/components/common/Pages/Solution/Api/ApiPage';
import IntegrationsPage from '@/components/common/Pages/Solution/Integrations/IntegrationsPage';
import { ROOT_PAGE_SLUGS, findRootPage, findSolutionPage } from '@/constants/page-registry';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Suspense, use } from 'react';

interface FeaturePageProps {
  params: Promise<{ feature: string }>;
}

export function generateStaticParams() {
  return ROOT_PAGE_SLUGS.map((feature) => ({ feature }));
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { feature } = await params;
  const page = findRootPage(feature) ?? findSolutionPage(feature);

  if (!page) {
    return {};
  }

  return {
    title: page.seo?.title ?? `${page.title} ${page.highlight}`,
    description: page.seo?.description ?? page.description,
    alternates: {
      canonical:
        feature === 'integrations'
          ? '/integrations'
          : findRootPage(feature)
            ? `/${feature}`
            : `/solutions/${feature}`,
    },
  };
}

function FeaturePageContent({ params }: FeaturePageProps) {
  const { feature } = use(params);
  const page = findRootPage(feature);

  if (feature === 'integrations') {
    return <IntegrationsPage />;
  }

  if (!page) {
    if (findSolutionPage(feature)) {
      redirect(`/solutions/${feature}`);
    }
    notFound();
  }

  if (feature === 'keyword-monitoring') {
    return <KeywordMonitoringPage />;
  }

  if (feature === 'third-party-monitoring') {
    return <ThirdPartyMonitoringPage />;
  }

  if (feature === 'ping-monitoring') {
    return <PingMonitoringpge />;
  }

  if (feature === 'api') {
    return <ApiPage />;
  }

  if (page.sections && page.sections.length > 0) {
    return <LandingPage sections={page.sections} />;
  }

  return <FeatureLanding page={page} />;
}

export default function FeaturePage({ params }: FeaturePageProps) {
  return (
    <Suspense fallback={null}>
      <FeaturePageContent params={params} />
    </Suspense>
  );
}
