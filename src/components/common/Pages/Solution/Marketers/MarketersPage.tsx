import MarketersBenefits from './MarketersBenefits';
import MarketersCta from './MarketersCta';
import MarketersFaq from './MarketersFaq';
import MarketersFeatureRows from './MarketersFeatureRows';
import MarketersHero from './MarketersHero';
import MarketersIntegrations from './MarketersIntegrations';
import MarketersMonitoringOverview from './MarketersMonitoringOverview';
import MarketersValue from './MarketersValue';

export default function MarketersPage() {
  return (
    <main aria-label="Uptime monitoring for marketers">
      <MarketersHero />
      <MarketersFeatureRows />
      <MarketersIntegrations />
      <MarketersValue />
      <MarketersMonitoringOverview />
      <MarketersBenefits />
      <MarketersFaq />
      <MarketersCta />
    </main>
  );
}