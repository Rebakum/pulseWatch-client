import AdvancedFeatures from '@/components/common/Pages/Enterprizes/Advanced-features/AdvancedFeatures';
import ApiSection from '@/components/common/Pages/Enterprizes/ApiSection/ApiSection';
import ComparisonTable from '@/components/common/Pages/Enterprizes/Comparison/ComparisonTable';
import CostComparison from '@/components/common/Pages/Enterprizes/CostComparison/CostComparison';
import EnterpriseHero from '@/components/common/Pages/Enterprizes/EnterpriseHero';
import EnterpriseReady from '@/components/common/Pages/Enterprizes/Enterpriseready/Enterpriseready';
import IntegrationsSection from '@/components/common/Pages/Enterprizes/Integrations-section/IntegrationsSection';
import SavingsCalculator from '@/components/common/Pages/Enterprizes/SavingsCalculator/SavingsCalculator';
import StatusPages from '@/components/common/Pages/Enterprizes/Status-pages/StatusPages';
import TrustedBy from '@/components/common/Pages/Enterprizes/TrustedBy/Trustedby ';

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />
      <TrustedBy />
      <CostComparison />
      <ComparisonTable />
      <SavingsCalculator />
      <EnterpriseReady />
      <ApiSection />
      <AdvancedFeatures />
      <StatusPages />
      <ApiSection />
      <IntegrationsSection />
    </>
  );
}
