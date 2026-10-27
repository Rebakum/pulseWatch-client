import DeveloperBenefits from './sections/DeveloperBenefits';
import DeveloperCta from './sections/DeveloperCta';
import DeveloperFeatureRows from './sections/DeveloperFeatureRows';
import DeveloperHero from './sections/DeveloperHero';
import DeveloperIntegrations from './sections/DeveloperIntegrations';
import DeveloperMonitorTypes from './sections/DeveloperMonitorTypes';
import DeveloperReasons from './sections/DeveloperReasons';
import DeveloperStoriesFaq from './sections/DeveloperStoriesFaq';

export default function DevelopersPage() {
  return (
    <main aria-label="Monitoring for developers">
      <DeveloperHero />
      <DeveloperFeatureRows />
      <DeveloperIntegrations />
      <DeveloperBenefits />
      <DeveloperMonitorTypes />
      <DeveloperReasons />
      <DeveloperStoriesFaq />
      <DeveloperCta />
    </main>
  );
}
