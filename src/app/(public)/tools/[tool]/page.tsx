import FeatureLanding from '@/components/common/Pages/FeatureLanding/FeatureLanding';
import { TOOL_SLUGS } from '@/constants/feature-pages';
import { findToolPage } from '@/constants/page-registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, use } from 'react';

interface ToolRouteParams {
  params: Promise<{ tool: string }>;
}

export function generateStaticParams() {
  return TOOL_SLUGS.map((tool) => ({ tool }));
}

export async function generateMetadata({ params }: ToolRouteParams): Promise<Metadata> {
  const { tool } = await params;
  const page = findToolPage(tool);

  if (!page) {
    return {};
  }

  return {
    title: page.seo?.title ?? `${page.title} ${page.highlight}`,
    description: page.seo?.description ?? page.description,
    alternates: {
      canonical: `/tools/${tool}`,
    },
  };
}

function ToolRouteContent({ params }: ToolRouteParams) {
  const { tool } = use(params);
  const page = findToolPage(tool);

  if (!page) {
    notFound();
  }

  return <FeatureLanding page={page} />;
}

export default function ToolRoutePage({ params }: ToolRouteParams) {
  return (
    <Suspense fallback={null}>
      <ToolRouteContent params={params} />
    </Suspense>
  );
}
