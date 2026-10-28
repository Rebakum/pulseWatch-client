import EnterpriseSlaSection from './EnterpriseSlaSection/EnterpriseSlaSection';
import FaqSection from './Faq/FaqSection';
import FeatureComparison from './FeatureComparison/Featurecomparison ';
import { PricingHero } from './PricingHero/PricingHero';
import TrustSection from './TrustSection/TrustSection';

export default function PricingLandingPage() {
  return (
    <div>
      <PricingHero />
      <FeatureComparison />
      <TrustSection />
      <FaqSection />
      <EnterpriseSlaSection />
    </div>
  );
}
