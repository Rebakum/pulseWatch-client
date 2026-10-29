import type { FeatureLandingPage } from '@/constants/feature-pages';
import { ROOT_PAGE_SLUGS, findRootPage } from '@/constants/page-registry';
import ApiMonitoringPage from '@/Landing-pages/FeatureLanding/ApiMonitoring/ApiMonitoringPage';
import CronJobMonitoringPage from '@/Landing-pages/FeatureLanding/CronJobMonitoring/CronJobMonitoringPage';
import KeywordMonitoringPage from '@/Landing-pages/FeatureLanding/KeywordMonitoring/KeywordMonitoringPage';
import PingMonitoringpge from '@/Landing-pages/FeatureLanding/PingMonitoring/PingMonitoringpge';
import ThirdPartyMonitoringPage from '@/Landing-pages/FeatureLanding/ThirdPartyMonitoring/ThirdPartyMonitoringPage';
import LandingPage from '@/Landing-pages/FeatureLanding/WebsiteMonitoring/WebsiteMonitoring';
import { Bell, Plug, Zap, type LucideIcon } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, use, type ComponentType } from 'react';
import LogoMarquee from '../HomePage/LogoMarquee/LogoMarquee';
import MultiLocationMonitoringPage from './MultiLocationMonitoring/MultiLocationMonitoringPage';
import PortMonitoringPage from './PortMonitoring/PortMonitoringPage';
import UdpMonitoringPage from './UdpMonitoring/UdpMonitoring';

interface FeatureLandingProps {
  page: FeatureLandingPage;
}

interface FeatureRouteProps {
  params: Promise<{ feature: string }>;
}

const CARD_ICONS: LucideIcon[] = [Zap, Bell, Plug];

const FEATURE_PAGES: Record<string, ComponentType> = {
  'keyword-monitoring': KeywordMonitoringPage,
  'third-party-monitoring': ThirdPartyMonitoringPage,
  'ping-monitoring': PingMonitoringpge,
  'port-monitoring': PortMonitoringPage,
  'cron-job-monitoring': CronJobMonitoringPage,
  'api-monitoring': ApiMonitoringPage,
  'udp-monitoring': UdpMonitoringPage,
  'multi-location-monitoring': MultiLocationMonitoringPage,
};

export function generateFeatureLandingStaticParams() {
  return ROOT_PAGE_SLUGS.map((feature) => ({ feature }));
}

export async function generateFeatureLandingMetadata(
  params: Promise<{ feature: string }>,
): Promise<Metadata> {
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

export default function FeatureLanding({ page }: FeatureLandingProps) {
  return (
    <>
      <section className="fl">
        <div className="fl__inner">
          <p className="fl__eyebrow">{page.eyebrow}</p>
          <h1 className="fl__title">
            {page.title}
            <span className="fl__title-accent">{page.highlight}</span>
          </h1>
          <p className="fl__desc">{page.description}</p>
        </div>

        <div className="fl__grid">
          {page.highlights.map((item, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <article key={item.title} className="fl-card">
                <span className="fl-card__icon" aria-hidden="true">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="fl-card__title">{item.title}</h3>
                <p className="fl-card__desc">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <LogoMarquee />
    </>
  );
}

function FeatureRouteContent({ params }: FeatureRouteProps) {
  const { feature } = use(params);
  if (!ROOT_PAGE_SLUGS.includes(feature)) {
    notFound();
  }

  const page = findRootPage(feature);
  if (!page) {
    notFound();
  }

  const PageComponent = FEATURE_PAGES[feature];
  if (PageComponent) {
    return <PageComponent />;
  }

  if (page.sections && page.sections.length > 0) {
    return <LandingPage sections={page.sections} />;
  }

  return <FeatureLanding page={page} />;
}

export function FeatureRouteLanding({ params }: FeatureRouteProps) {
  return (
    <Suspense fallback={null}>
      <FeatureRouteContent params={params} />
    </Suspense>
  );
}
