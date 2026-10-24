import FeatureLanding from '@/components/common/Pages/FeatureLanding/FeatureLanding';
import ThirdPartyMonitoringPage from '@/components/common/Pages/FeatureLanding/ThirdPartyMonitoring/ThirdPartyMonitoringPage';
import LandingPage from '@/components/common/Pages/FeatureLanding/WebsiteMonitoring/WebsiteMonitoring';
import { ROOT_PAGE_SLUGS, findRootPage } from '@/constants/page-registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, use } from 'react';

interface FeaturePageProps {
  params: Promise<{ feature: string }>;
}

export function generateStaticParams() {
  return ROOT_PAGE_SLUGS.map((feature) => ({ feature }));
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { feature } = await params;
  const page = findRootPage(feature);

  if (!page) {
    return {};
  }

  return {
    title: page.seo?.title ?? `${page.title} ${page.highlight}`,
    description: page.seo?.description ?? page.description,
    alternates: {
      canonical: `/${feature}`,
    },
  };
}

function FeaturePageContent({ params }: FeaturePageProps) {
  const { feature } = use(params);
  const page = findRootPage(feature);

  if (!page) {
    notFound();
  }

  if (feature === 'third-party-monitoring') {
    return <ThirdPartyMonitoringPage />;
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
