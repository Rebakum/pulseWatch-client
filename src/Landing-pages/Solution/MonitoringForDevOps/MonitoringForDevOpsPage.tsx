import LogoMarquee from '../../HomePage/LogoMarquee/LogoMarquee';
import DevOpsHero from './Sections/DevOpsHero';
import {
  DevOpsArticles,
  DevOpsCustomerStory,
  DevOpsFaq,
  DevOpsFreeAccountCta,
  DevOpsTestimonials,
  DevOpsTrustSections,
} from './Sections/DevOpsMoreSections';
import {
  DevOpsIntegrations,
  DevOpsMonitorTypes,
  DevOpsMustHaveFeatures,
} from './Sections/DevOpsReferenceSections';
import { DevOpsAdvancedFeatures, DevOpsFeatureRows } from './Sections/DevOpsSections';
import DevOpsSetupShowcase, { DevOpsSetupCta } from './Sections/DevOpsSetupShowcase';

export default function MonitoringForDevOpsPage() {
  return (
    <main aria-label="Monitoring for DevOps solution">
      <DevOpsHero />
      <LogoMarquee />
      <DevOpsIntegrations />
      <DevOpsMustHaveFeatures />
      <DevOpsMonitorTypes />
      <DevOpsFeatureRows />
      <DevOpsAdvancedFeatures />
      <DevOpsSetupShowcase />
      <DevOpsSetupCta />
      <DevOpsTrustSections />
      <DevOpsTestimonials />
      <DevOpsCustomerStory />
      <DevOpsArticles />
      <DevOpsFaq />
      <DevOpsFreeAccountCta />
    </main>
  );
}
