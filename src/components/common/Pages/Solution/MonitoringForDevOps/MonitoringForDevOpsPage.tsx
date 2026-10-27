import DevOpsHero from './DevOpsHero';
import DevOpsSetupShowcase, { DevOpsSetupCta } from './DevOpsSetupShowcase';
import {
  DevOpsAdvancedFeatures,
  DevOpsFeatureRows,
} from './DevOpsSections';
import {
  DevOpsIntegrations,
  DevOpsMonitorTypes,
  DevOpsMustHaveFeatures,
} from './DevOpsReferenceSections';
import {
  DevOpsArticles,
  DevOpsCustomerStory,
  DevOpsFaq,
  DevOpsFreeAccountCta,
  DevOpsTestimonials,
  DevOpsTrustSections,
} from './DevOpsMoreSections';
import LogoMarquee from '../../Home/LogoMarquee';

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
