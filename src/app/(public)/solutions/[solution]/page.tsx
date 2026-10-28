import SolutionLandingPage, {
  generateSolutionLandingMetadata,
  generateSolutionLandingStaticParams,
} from '@/Landing-pages/Solution/SolutionLandingPage';
import type { Metadata } from 'next';

interface SolutionPageProps {
  params: Promise<{ solution: string }>;
}

export function generateStaticParams() {
  return generateSolutionLandingStaticParams();
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  return generateSolutionLandingMetadata(params);
}

export default function SolutionPage({ params }: SolutionPageProps) {
  return <SolutionLandingPage params={params} />;
}
