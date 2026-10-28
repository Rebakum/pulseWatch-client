import {
  FeatureRouteLanding,
  generateFeatureLandingMetadata,
  generateFeatureLandingStaticParams,
} from '@/Landing-pages/FeatureLanding/FeatureLanding';
import type { Metadata } from 'next';

interface FeaturePageProps {
  params: Promise<{ feature: string }>;
}

export function generateStaticParams() {
  return generateFeatureLandingStaticParams();
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  return generateFeatureLandingMetadata(params);
}

export default function FeaturePage({ params }: FeaturePageProps) {
  return <FeatureRouteLanding params={params} />;
}
