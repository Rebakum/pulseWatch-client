import LogoMarquee from '../HomePage/LogoMarquee/LogoMarquee';
import AdvancedFeatures from './Advanced-features/AdvancedFeatures';
import CollaborateIllustration from './Collaborate/CollaborateIllustration';
import ComparisonTable from './Comparison/ComparisonTable';
import CostComparison from './CostComparison/CostComparison';
import EnterpriseReviews from './Enterprise-reviews/EvterpriseReviews';
import EnterpriseCta from './EnterpriseCta/EnterpriseCta';
import EnterpriseHero from './EnterPriseHero/EnterpriseHero';
import EnterpriseReady from './Enterpriseready/Enterpriseready';
import EnterpriseFaq from './Faq/FaqSection';
import FeaturesGrid from './Features-grid/FeaturesGrid';
import IntegrationsSection from './Integrations-section/IntegrationsSection';
import StatusPages from './Status-pages/StatusPages';
import TrustedBy from './TrustedBy/Trustedby ';

const EnterPriseLanding = () => {
  return (
    <div>
      <EnterpriseHero />
      <LogoMarquee />
      <TrustedBy />
      <CostComparison />
      <EnterpriseReady />
      <ComparisonTable />
      <AdvancedFeatures />
      <StatusPages />
      <IntegrationsSection />
      <FeaturesGrid />
      <CollaborateIllustration />
      <EnterpriseReviews />
      <EnterpriseFaq />
      <EnterpriseCta />
    </div>
  );
};

export default EnterPriseLanding;
