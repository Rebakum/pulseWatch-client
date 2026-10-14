import FaqSection from '@/components/common/Pages/Home/FAQ/FaqSection';
import EnterpriseSlaSection from '@/components/common/Pages/Pricing/EnterpriseSlaSection/EnterpriseSlaSection';
import FeatureComparison from '@/components/common/Pages/Pricing/FeatureComparison/Featurecomparison ';
import { PricingSection } from '@/components/common/Pages/Pricing/Pricing';
import TrustSection from '@/components/common/Pages/Pricing/TrustSection/TrustSection';

const pricingPage = () => {
  return (
    <div>
      <PricingSection />
      <FeatureComparison />
      <TrustSection />
      <FaqSection />
      <EnterpriseSlaSection />
    </div>
  );
};

export default pricingPage;
