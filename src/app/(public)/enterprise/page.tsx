import AdvancedFeatures from '@/components/common/Pages/Enterprizes/Advanced-features/AdvancedFeatures';
import Collaborate from '@/components/common/Pages/Enterprizes/Collaborate/Collaborate';
import ComparisonTable from '@/components/common/Pages/Enterprizes/Comparison/ComparisonTable';
import CostComparison from '@/components/common/Pages/Enterprizes/CostComparison/CostComparison';
import EnterpriseReviews from '@/components/common/Pages/Enterprizes/Enterprise-reviews/EvterpriseReviews';
import EnterpriseCta from '@/components/common/Pages/Enterprizes/EnterpriseCta/EnterpriseCta';
import EnterpriseHero from '@/components/common/Pages/Enterprizes/EnterpriseHero';
import EnterpriseReady from '@/components/common/Pages/Enterprizes/Enterpriseready/Enterpriseready';
import EnterpriseFaq from '@/components/common/Pages/Enterprizes/Faq/FaqSection';
import FeaturesGrid from '@/components/common/Pages/Enterprizes/Features-grid/FeaturesGrid';
import IntegrationsSection from '@/components/common/Pages/Enterprizes/Integrations-section/IntegrationsSection';
import StatusPages from '@/components/common/Pages/Enterprizes/Status-pages/StatusPages';
import TrustedBy from '@/components/common/Pages/Enterprizes/TrustedBy/Trustedby ';

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />
      <TrustedBy />
      <CostComparison />
      <EnterpriseReady />
      <ComparisonTable />
      <AdvancedFeatures />
      <StatusPages />
      <IntegrationsSection />
      <FeaturesGrid />
      <Collaborate />
      <EnterpriseReviews />
      <EnterpriseFaq />
      <EnterpriseCta />
    </>
  );
}
